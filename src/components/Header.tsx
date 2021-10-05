import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <h1 className="Header__title">Shoutouts</h1>
      {user ? (
        <div className="Header__signedIn">
          <p className="Header__userName">Welcome {user.displayName}</p>
          <p>
            {user.photoURL && (
              <img
                className="Header__image"
                src={user.photoURL}
                alt={`${user.displayName}`}
              />
            )}
          </p>
          <p>
            <button className="Header__signButton" onClick={signOut}>
              Sign Out
            </button>
          </p>
        </div>
      ) : (
        <div>
          <button className="Header__signButton" onClick={signInWithGoogle}>
            Sign In with Google
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
