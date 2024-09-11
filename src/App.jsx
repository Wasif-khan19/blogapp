import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from './redux/authSlice'
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
  return !loading? (
    <div className="bg-white">
      <div>
       <Header/>
       {/* outlet from redux will display here */}
       <Footer/>
      </div>
    </div>
  ):(null)
}

export default App;
