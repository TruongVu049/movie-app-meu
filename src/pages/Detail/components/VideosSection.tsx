import YoutubeEmbed from "@/components/YoutubeEmbed ";
import { Video } from "@/types";

const VideosSection = ({ videoList }: { videoList: Video[] }) => {
  return videoList.slice(0, 5).map((item) => (
    <div key={item.key} className="md:mb-16  mb-8 ">
      <h4 className="text-white  text-base md:text-2xl font-semibold mb-4">
        {item.name}
      </h4>
      <YoutubeEmbed
        embedId={item.key}
        title={item.name}
        width="100%"
        height="800px"
        className="sm:h-[800px] h-[650px]"
      />
    </div>
  ));
};

export default VideosSection;
