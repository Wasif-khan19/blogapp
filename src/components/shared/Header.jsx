import { Dot, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import LogoutButton from "@/components/shared/layoutbuttons/LogoutButton";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      title: "Home",
      link: "/",
      active: true,
    },
    {
      title: "Login",
      link: "/login",
      active: !authStatus,
    },
    {
      title: "Logout",
      link: "/logout",
      active: !authStatus,
    },
    {
      title: "All Posts",
      link: "/posts",
      active: authStatus,
    },
    {
      title: "Add Posts",
      link: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <div
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? "backdrop-blur-lg bg-opacity-70" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto h-14 bg-white">
        {/* left side */}
        <div className="">
          <h1 className="text-xl font-semibold">Logo</h1>
        </div>

        {/* right side */}

        <div className="flex gap-10 items-center">
          <div>
            <ul>
              {navItems?.map((items) =>
                items.active ? (
                  <li key={items.title}>
                    <div onClick={()=> navigate(items.link)}>
                    <Button>{items.title}</Button>
                    </div>
                  </li>
                ) : null
              )}
              {
                authStatus && (
                  <li>
                    <LogoutButton/>
                  </li>
                )
              }
            </ul>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary" className=" text-muted-foreground">
                  <User className="mr-1 h-4 w-4" /> Muhammad Wasif
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 rounded-2xl mt-4">
                <div className="flex-col text-center justify-center flex gap-4">
                  <div className="relative flex justify-center">
                    <Avatar>
                      <AvatarImage alt="CN" />
                    </Avatar>
                  </div>

                  <div>
                    <h1 className="text-xl">Hi, Muhammad Wasif</h1>
                    <p className="text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="w-full text-muted-foreground"
                    >
                      <User className="mr-1 h-4 w-4" /> Profile
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full text-muted-foreground"
                    >
                      <LogOut className="mr-1 h-4 w-4" /> Sign out
                    </Button>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center text-muted-foreground text-xs">
                      <li className="cursor-pointer">Privacy Policy</li>
                      <li>
                        {" "}
                        <Dot />
                      </li>
                      <li className="cursor-pointer">Terms of service</li>
                    </ul>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
