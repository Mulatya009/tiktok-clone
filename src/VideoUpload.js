import React, { useState } from "react";
import firebase from "firebase";
import { Button, Input } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { storage, db } from "firebase";

function VideoUpload() {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState("");
  const [song, setSong] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress bar
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            // post video url to db
            db.collection("videos").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              url: url,
              caption: caption,
              description: description,
              song: song,
              likes: 0,
              messages: 0,
              shares: 0,
            });

            setProgress(0);
            setCaption("");
            setVideo(null);
            setDescription("");
            setSong("");
          });
      }
    );
  };

  return (
    <div className="header__modalContent">
      {progress > 0 ? <progress value={progress} max="100" /> : null}
      <Input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <Input
        type="text"
        placeholder="song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <input
        type="file"
        className="header__modalContentVideoInput"
        onChange={handleChange}
      />

      <PublishIcon
        fontSize="large"
        className="header__modalContentBtn"
        type="submit"
        onClick={handleUpload}
      ></PublishIcon>
    </div>
  );
}

export default VideoUpload;
