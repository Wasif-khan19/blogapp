/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth";
import { logout } from "../../../redux/authSlice";

function LogoutButton() {
    
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return(
    <button onClick={handleLogout}>
        Log out
    </button>
  )
}

export default LogoutButton;
