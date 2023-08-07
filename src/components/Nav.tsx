import { FC } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const Nav: FC = () => {
  const { isLoggedIn, email, logoutAction } = useAuth();

  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="nav__title">React-Calculator</h1>
      </Link>

      <div className="nav-button-group">
        {isLoggedIn ? (
          <>
            <div>
              <h3>Welcome {email}</h3>
            </div>
            <Link to={"/"} onClick={() => logoutAction?.()}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">
              Login
            </Link>
            <Link to="/register" className="nav-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
