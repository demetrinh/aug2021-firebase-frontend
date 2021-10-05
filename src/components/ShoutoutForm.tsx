import { FormEvent, useContext, useRef, useState } from "react";
import { AuthContext } from "../context/auth.context";
import Shoutout from "../models/Shoutout";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";

interface Props {
  onSubmit: (item: Shoutout) => void;
}

function ShoutoutForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const { user } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // gather data from state

    const newShoutout: Shoutout = {
      title: title,
      author: user?.displayName ?? "Anonymous",
      message: message,
    };

    const files = imageInputRef.current?.files;
    if (files && files[0]) {
      const imageFile = files[0];
      console.log(imageFile.name, imageFile.size);
      console.log(imageInputRef.current);
      // Upload to cloud storage
      const storageRef = ref(storage, "shoutout-images/" + imageFile.name);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const downloadUrl: string = await getDownloadURL(snapshot.ref);
      newShoutout.imageUrl = downloadUrl;

      console.log(imageFile.name, imageFile.size);
      console.log(imageInputRef);
    }

    // send data up to parent via callback prop
    onSubmit(newShoutout);
    // clear form
    clearForm();
  }

  function clearForm() {
    formRef.current?.reset();
    setTitle("");
    setMessage("");
  }

  return (
    <form className="ShoutoutForm" onSubmit={handleSubmit} ref={formRef}>
      <p>
        <label htmlFor="ShoutoutForm__title">Title</label>
        <input
          type="text"
          id="ShoutoutForm__title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>From: {user?.displayName}</p>

      <p>
        <label htmlFor="ShoutoutForm__message">Message</label>
        <input
          type="text"
          id="ShoutoutForm__message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="ShoutoutForm__iamge">Image (optional)</label>
        <input type="file" id="ShoutoutForm__image" ref={imageInputRef} />
      </p>
      <p>
        <button type="submit">Add</button>
      </p>
    </form>
  );
}

export default ShoutoutForm;
