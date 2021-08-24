import "./Video";
import ReactPlayer from "react-player";
import { IVideo } from "../../models/IVideo";

interface videoProps {
  video: IVideo;
}

const Video = ({ video }: videoProps) => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    url: `http://localhost:5000/${video.video}`,
    sources: [
      {
        src: `http://localhost:5000/${video.video}`,
        type: "video/mp4",
      },
    ],
  };
  return (
    <div>
      <div>
        <ReactPlayer {...videoJsOptions} />
        <span>{video.level}</span>
      </div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default Video;
