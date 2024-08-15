import React from "react";

export default function Station({ channel }) {
  const bgImg = channel.image;
  const bgColor = channel.color;
  const chName = channel.name;
  const liveAudio = channel.liveaudio.url;

  return (
    <div key={channel.id} style={{ backgroundColor: `#${bgColor}` }}>
      <img src={bgImg} width="100" />
      <h2>{chName}</h2>
      <audio controls>
        <source src={liveAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
}
