import Login from "../auth/Login";
import Signin from "../auth/Signin";
import Container from "../container/Container";
import RTE from "../RTE/RTE";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import LogoutButton from "../shared/layoutbuttons/LogoutButton";
import PostCard from "../ui/PostCard";
import PostForm from "../ui/Postform";
import Select from "../ui/Select";



const Layout = () => {
  return (
    <div>
        <Header/>
        <Footer/>
        <Container/>
        <LogoutButton/>
        <RTE/>
        <Signin/>
        <Login/>
     
        <PostForm/>
        <PostCard/>
      
        <Select/>
    </div>
  );
};

export default Layout;