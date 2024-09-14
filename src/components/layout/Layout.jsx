import Container from "../container/Container";
import RTE from "../RTE/RTE";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import LogoutButton from "../shared/layoutbuttons/LogoutButton";
import Signin from "../auth/Signin";
import Login from "../auth/Login";
import Button from "../ui/Button";
import PostForm from "../ui/Postform";
import PostCard from "../ui/PostCard";
import Input from "../ui/Input";
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
        <Button/>
        <PostForm/>
        <PostCard/>
    
        <Input/>
        <Select/>
    </div>
  );
};

export default Layout;