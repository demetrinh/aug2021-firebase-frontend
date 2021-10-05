import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";

interface Props {
  shoutouts: Shoutout[];
}

const ShoutoutList = ({ shoutouts }: Props) => {
  return (
    <div className="ShoutoutList">
      <ul>
        {shoutouts.map((shoutout) => (
          <li key={shoutout._id}>
            <p>Shout out to {shoutout.title} </p>
            <p>From: -{shoutout.author}</p>
            <p>{shoutout.message}</p>
            {shoutout.imageUrl && (
              <img src={shoutout.imageUrl} alt={shoutout.message} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
