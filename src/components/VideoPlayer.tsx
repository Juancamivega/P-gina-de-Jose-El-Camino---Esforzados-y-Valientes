

interface VideoPlayerProps {
  videoId: string;
  platform: 'youtube' | 'facebook';
  title?: string;
}

export default function VideoPlayer({ videoId, platform, title }: VideoPlayerProps) {
  if (platform === 'youtube') {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (platform === 'facebook') {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
        <iframe 
          src={`https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${videoId}&show_text=false&width=560&t=0`} 
          width="560" 
          height="314" 
          style={{ border: 'none', overflow: 'hidden' }} 
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 italic">
      Plataforma de video no soportada
    </div>
  );
}
