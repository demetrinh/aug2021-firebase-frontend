import { useContext, useEffect, useState } from "react";
import ShoutoutForm from "../components/ShoutoutForm";
import ShoutoutList from "../components/ShoutoutList";
import { AuthContext } from "../context/auth.context";
import { signInWithGoogle } from "../firebaseConfig";
import Shoutout from "../models/Shoutout";
import { addShoutout, fetchAllShoutouts } from "../services/ShoutoutApiService";

const AllShoutouts = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    loadShoutouts();
  }, []);

  const loadShoutouts = () => {
    fetchAllShoutouts().then((shoutoutsFromApi) => {
      setShoutouts(shoutoutsFromApi);
    });
  };

  function handleAddShoutout(newShoutout: Shoutout) {
    addShoutout(newShoutout).then(() => {
      loadShoutouts();
    });
  }
  return (
    <div className="AllShoutouts">
      <ShoutoutList shoutouts={shoutouts} />
      {user ? (
        <ShoutoutForm onSubmit={handleAddShoutout} />
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default AllShoutouts;
