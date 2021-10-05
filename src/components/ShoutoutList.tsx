import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";

interface Props {
  shoutouts: Shoutout[];
}

const ShoutoutList = ({ shoutouts }: Props) => {
  return (
    <div className="ShoutoutList">
      <ul className="ShoutoutList__list">
        {shoutouts.map((shoutout) => (
          <li className="Shoutout__listItem" key={shoutout._id}>
            <p className="ShoutoutList__title">Shout out to {shoutout.title}</p>
            <p>
              From: -{" "}
              <span className="ShoutoutList__author">{shoutout.author}</span>
            </p>
            <p>{shoutout.message}</p>
            {shoutout.imageUrl && (
              <img
                className="ShoutoutList__image"
                src={shoutout.imageUrl}
                alt={shoutout.message}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoutoutList;
