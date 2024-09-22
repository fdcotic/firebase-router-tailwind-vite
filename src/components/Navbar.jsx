import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);
  

  return (
    <nav>
      {user ? (
        <>
        <NavLink to="/">Home</NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </>
      ) : (
        <NavLink to="/login"> Login</NavLink>
      )}
    </nav>
  );
};

export default Navbar;