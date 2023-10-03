import YouTube, { YouTubeProps } from "react-youtube";

const Cover = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="space-y-4">
      <div className="">
        <strong>Blast 16</strong> is an emulator frontend for Raspberry Pi
        inspired on the Sega Mega Drive/Genesis, and developed with{" "}
        <a href="https://love2d.org/" target="_blank" rel="noopener noreferrer">
          LÖVE
        </a>
        &nbsp;framework.
      </div>
      <YouTube
        videoId="MKcvY2zXHGg"
        opts={opts}
        onReady={onPlayerReady}
        className={"youtubeContainer"}
      />
    </div>
  );
};

export default Cover;
