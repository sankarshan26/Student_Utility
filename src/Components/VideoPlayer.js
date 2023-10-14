import React, { useState } from "react";

function VideoPlayer() {
  const [videoLink, setVideoLink] = useState("");
  const [videoId, setLink] = useState("rsUnpWA_kRw?si=YWHDA2T7m1voCXxF");
  return (
    <div className="text-center rounded h-[400px] flex flex-col items-center p-1 border border-black">
      <input
        className="vid_url max-w-[500px] my-2 p-2 font-lg text-left border-0 rounded "
        type="url"
        placeholder="Enter Video URL"
        onChange={(e) => setVideoLink(e.target.value)}
      />

      <div className="w-full px-2 flex-1 mb-1">
        <iframe 
        title="videoplayer"
          className="w-full h-full "
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={(e) => {
          var youtubeRegex =
            /(?:youtube.com\/watch\?v=|youtu.be\/)([a-zA-Z0-9_-]+)/;
          var youtubeMatch = videoLink.match(youtubeRegex);

          if (youtubeMatch) {
            const video_Id = youtubeMatch[1];
            setLink(video_Id);
          } else {
            alert("Invalid Url");
            setLink("rsUnpWA_kRw?si=YWHDA2T7m1voCXxF")
          }
          
        }}
        className="bg-blue-500 text-white rounded-lg px-2 py-1 mt-2 hover:bg-blue-700"
      >
        Embed Video
      </button>
    </div>
  );
}

export default VideoPlayer;
