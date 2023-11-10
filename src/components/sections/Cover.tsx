import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Cover = () => {
  return (
    <section id="home">
      <div className="space-y-4">
        <div className="">
          <strong>Blast 16</strong> is an emulator frontend for Raspberry Pi
          inspired on the Sega Mega Drive/Genesis, and developed with{" "}
          <a
            href="https://love2d.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LÖVE
          </a>
          &nbsp;framework.
        </div>
        <LiteYouTubeEmbed
          id="MKcvY2zXHGg"
          adNetwork={true}
          poster="maxresdefault"
          title="Blast16"
        />
      </div>
    </section>
  );
};

export default Cover;
