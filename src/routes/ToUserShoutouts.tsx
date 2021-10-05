import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShoutoutList from "../components/ShoutoutList";
import Shoutout from "../models/Shoutout";
import { fetchShoutoutsToOne } from "../services/ShoutoutApiService";

interface RouteParams {
  recipient: string;
}

const ToUserShoutouts = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const { recipient } = useParams<RouteParams>();

  useEffect(() => {
    loadShoutouts();
  }, [recipient]);

  const loadShoutouts = () => {
    fetchShoutoutsToOne(recipient).then((shoutoutsFromApi) => {
      setShoutouts(shoutoutsFromApi);
    });
  };

  return (
    <div className="AllShoutouts">
      <h1>Shoutouts to</h1>
      <ShoutoutList shoutouts={shoutouts} />
    </div>
  );
};

export default ToUserShoutouts;
