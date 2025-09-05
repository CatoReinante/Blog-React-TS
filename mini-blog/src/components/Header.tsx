import { Link } from "react-router";
import { type User } from "../types";

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          MiniBlog
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            {user ? (
              <>
                <span className="me-3 d-flex align-items-center">
                  👤{" "}
                  <strong className="ms-1">
                    {user.username || user.name || user.email}
                  </strong>
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link className="btn btn-primary btn-sm" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
