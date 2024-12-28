import { YouTubeEmbedProps } from "./lib/type";

const YoutubeEmbed = ({ embedId, ...props }: YouTubeEmbedProps) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    {...props}
  />
);
export default YoutubeEmbed;
