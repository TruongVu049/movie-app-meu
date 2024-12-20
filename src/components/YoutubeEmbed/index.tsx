import { YouTubeEmbedProps } from "./lib/type";

const YoutubeEmbed = ({ embedId, ...iframeProps }: YouTubeEmbedProps) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    {...iframeProps}
  />
);
export default YoutubeEmbed;
