import React from "react";

interface Props {
  title?: string;
  videoId: string;
}

const YouTubeEmbed = ({ title = "YouTube video player", videoId }: Props) => (
  <div className="wrapper">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        alignContent: "center",
      }}
    />
  </div>
);

export default YouTubeEmbed;
