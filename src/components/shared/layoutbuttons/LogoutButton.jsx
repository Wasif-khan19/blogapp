/* eslint-disable no-unused-vars */
import authService from "@/appwrite/auth";
import { Button } from "@/components/ui/button";
import { logout } from "@/redux/authSlice";
import { useDispatch } from "react-redux";

function LogoutButton() {
    
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return(
    <Button>
        Log out
    </Button>
  )
}

export default LogoutButton;
