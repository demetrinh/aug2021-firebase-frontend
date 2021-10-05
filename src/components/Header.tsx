import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="Header">
      <h1>Shoutouts</h1>
      {user ? (
        <div className="Header_signedIn">
          <p>
            Welcome {user.displayName}
            {user.photoURL && (
              <img
                className="Header_image"
                src={user.photoURL}
                alt={`${user.displayName}`}
              />
            )}
            <button onClick={signOut}>Sign Out</button>
          </p>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      )}
    </header>
  );
};

export default Header;
