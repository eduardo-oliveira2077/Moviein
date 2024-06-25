import ApiService from 'api/ApiService';
import Api from 'api/api';
import { useToast } from 'components/ui/use-toast';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaPause, FaPlay } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Apiservice = new ApiService();
const AssistirVideo: React.FC = () => {
  const { filmeCripto } = useParams<{ filmeCripto: string }>();

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [segment, setSegment] = useState<number>(0);
  const [videoSegments, setVideoSegments] = useState<{ url: string, segment: number }[]>([]);
  const progressRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadingVideo, setLoadingVideo] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const { toast } = useToast();
  const [play, setPlay] = useState<boolean>(false);

  useLayoutEffect(() => {
    async function Load() {
      await Apiservice.Get<{ duration: number }>({
        path: `api/filme/Metadata?filmeCrypto=${filmeCripto}`,
        errorTitle: "Falha ao coletar os metadados do vídeo",
        thenCallback: (data) => {
          setDuration(data.duration);
        },
      })
    }
    Load();
  }, [])


  const loadVideo = useCallback(async (segment: number) => {
    if (videoSegments.some(v => v.segment === segment)) {
      return; // Já carregado anteriormente, não precisamos chamar novamente
    }
    try {
      const res = await Api.get(`api/filme/segmento?filme=${filmeCripto}&segment=${segment}`, {
        responseType: "blob"
      })

      const videoBlob = res.data;
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoSegments(prev => [...prev, { segment, url: videoUrl }]);
      return videoUrl;

    } catch (err) {
      toast({
        title: "Falha ao carregar segmentos.",
        description: err as string
      });
    }
  }, [videoSegments])

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const updateProgress = () => {
        if (!isDragging) {
          const newTime = videoElement.currentTime;
          const newSegment = Math.floor(newTime / 60);
          if (newSegment !== segment) {
            setSegment(newSegment);
          }
          if (progressRef.current) {
            progressRef.current.value = String(newTime);
          }
        }
      };

      videoElement.addEventListener('timeupdate', updateProgress);
      return () => {
        videoElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [isDragging, segment]);

  useEffect(() => {
    const loadSegment = async () => {
      if (videoSegments.length > 0) {
        const segmentData = videoSegments.find(v => v.segment === segment);
        if (!segmentData && !loadingVideo) {
          setPlay(false)
          videoRef.current?.pause();
          await loadVideo(segment);
          await loadVideo(segment + 1);
        } else if (videoRef.current && segmentData) {
          const currentTime = videoRef.current.currentTime;
          videoRef.current.src = segmentData.url;
          videoRef.current.currentTime = currentTime;
          videoRef.current.play();
          setPlay(true);
        }
      } else {
        await loadVideo(0);
        await loadVideo(1);
      }
    };
    loadSegment();
  }, [segment, loadVideo, videoSegments, loadingVideo]);


  const handleMouseDown = () => {
    videoRef.current?.pause();
    setIsDragging(true);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    setIsDragging(false);
    const videoElement = videoRef.current;
    const progressElement = progressRef.current;
    if (videoElement && progressElement) {
      const newTime = parseFloat(progressElement.value);
      const newSegment = Math.floor(newTime / 60);
      videoElement.currentTime = newTime;
      setSegment(newSegment);
    }
    videoRef.current?.play();
    setPlay(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      const newSegment = Math.floor(newTime / 60);
      setSegment(newSegment);
    }
  };

  const handlePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement && !loadingVideo) {
      videoElement.play();
      setPlay(true)
    }
  };

  const handlePause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      setPlay(false)
    }
  };

  return (
    <div className='w-screen h-screen bg-background'>
      {loadingVideo && (
        <div className='w-full h-screen absolute top-0 left-0 bg-background/55 z-[99] flex justify-center items-center'>
          <AiOutlineLoading3Quarters className='animate-spin text-[48px]' />
        </div>
      )}
      <video muted ref={videoRef} className='w-screen h-[100vh] object-cover'>
        Seu navegador não suporta a reprodução de vídeo.
      </video>


      <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
        <div className='w-[90vw]'>
          <input type='range'
            ref={progressRef}
            max={duration}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            disabled
            onChange={handleInputChange}
            className='w-full'
          />
          <div className='flex justify-center items-center gap-4'>
            <button className='w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center'>
              <MdKeyboardDoubleArrowLeft />
            </button>
            {
              <button
                className='w-[64px] h-[64px] bg-primary rounded-full flex justify-center items-center'
                onClick={() => {
                  if (play)
                    handlePause()
                  else
                    handlePlay()
                }}>
                {
                  play ? <FaPause /> : <FaPlay />
                }
              </button>
            }
            <button
              onClick={() => {
                if (videoRef.current)
                  videoRef.current.currentTime = videoRef.current.currentTime + 30;
              }}
              className='w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center'>
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AssistirVideo;