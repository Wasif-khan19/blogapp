import { Menu } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { Button } from "../ui/button";
import LogoutButton from "./layoutbuttons/LogoutButton";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: authStatus,
      className: "",
    },
    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
      variant: "outline",
      className: "border-black ",
    },
    {
      name: "SIGNUP",
      slug: "/signup",
      active: !authStatus,
      variant: "secondary",
      className: "bg-[#57e44b] hover:bg-[#77d86e] text-[#122315] font-bold",
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
      className: "",
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      className: "",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-3">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/" className="items-center text-center text-lg">
              <h1 className="text-[#122315] font-bold">
                Inspire<span className="text-[#57e44b]">Hub</span>
              </h1>
            </Link>
          </div>
          {authStatus ? (
            <>
              <Button
                onClick={toggleMenu}
                className="md:hidden"
                variant="ghost"
              >
                <Menu />
              </Button>
              <ul
                className={`flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent ${
                  isMenuOpen ? "flex" : "hidden"
                } md:flex`}
              >
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name} className="mx-1 my-2 md:my-0">
                      <Button
                        onClick={() => {
                          navigate(item.slug);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full md:w-auto ${item.className}`}
                        variant={item.variant}
                      >
                        {item.name}
                      </Button>
                    </li>
                  ) : null
                )}
                <li className="mx-1 my-2 md:my-0">
                  <LogoutButton />
                </li>
              </ul>
            </>
          ) : (
            <ul className="flex">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="mx-1">
                    <Button
                      onClick={() => navigate(item.slug)}
                      className={item.className}
                      variant={item.variant}
                    >
                      {item.name}
                    </Button>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;