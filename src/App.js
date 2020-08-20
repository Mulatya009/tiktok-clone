import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import { db } from "./firebase";
import Header from "./Header";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          video: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__videos">
        {videos.map(({ id, video }) => (
          <Video
            key={id}
            url={video.url}
            channel={video.channel}
            song={video.song}
            likes={video.likes}
            description={video.description}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
