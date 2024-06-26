import ApiService from 'api/ApiService';
import Api from 'api/api';
import { Slider } from 'components/ui/slider';
import { useToast } from 'components/ui/use-toast';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

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


  useEffect(() => {
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
      setLoadingVideo(true);
      const res = await Api.get(`api/filme/segmento?filme=${filmeCripto}&segment=${segment}`, {
        responseType: "blob"
      })

      const videoBlob = res.data;
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoSegments(prev => [...prev, { segment, url: videoUrl }]);
      setLoadingVideo(false);
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
      const segmentData = videoSegments.find(v => v.segment === segment);
      if (!segmentData && !loadingVideo) {
        await loadVideo(segment);
      } else if (videoRef.current && segmentData) {
        const currentTime = videoRef.current.currentTime;
        videoRef.current.src = segmentData.url;
        videoRef.current.currentTime = currentTime;
      }
    };
    loadSegment();
  }, [segment, loadVideo, videoSegments, loadingVideo]);

  const handleMouseDown = () => {
    videoRef.current?.pause();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    videoRef.current?.play();
    const videoElement = videoRef.current;
    const progressElement = progressRef.current;
    if (videoElement && progressElement) {
      const newTime = parseFloat(progressElement.value);
      const newSegment = Math.floor(newTime / 60);
      console.log({
        "newTime": newTime,
        "newSegment": newSegment
      });
      videoElement.currentTime = newTime;
      setSegment(newSegment);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    const currentVideoTime = videoRef.current?.currentTime || 0;
    // if (newTime >= currentVideoTime) {
    // Só atualiza o tempo se estiver à frente do tempo atual do vídeo
    if (videoRef.current) {

      videoRef.current.currentTime = newTime;
      const newSegment = Math.floor(newTime / 60);
      setSegment(newSegment);
    }
    // }
  };

  const handlePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement && !loadingVideo) {
      videoElement.play();
    }
  };

  const handlePause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <div className='w-screen h-screen bg-slate-400'>
      <video muted ref={videoRef} className='w-[560px]'>
        Seu navegador não suporta a reprodução de vídeo.
      </video>

      {loadingVideo && (
        <span>Loading...</span>
      )}

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
        <div className='w-[560px]'>
          <input type='range'
            ref={progressRef}
            max={duration}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onChange={handleInputChange}
            className='w-full'
          />
          <div className='flex'>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <div>{videoRef.current?.currentTime.toFixed(2)}</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AssistirVideo;