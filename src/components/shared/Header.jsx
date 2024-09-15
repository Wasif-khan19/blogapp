import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import LogoutButton from "./layoutbuttons/LogoutButton";
import { Button } from "../ui/button";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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

  return (
    <header className="py-3">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/" className="items-center text-center text-lg">
              <h1 className="text-[#122315] font-bold">
                Inspire<span className="text-[#57e44b]">Hub</span>
              </h1>
            </Link>
          </div>
          <ul className="flex ml-auto">
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
            {authStatus && (
              <li className="mx-1">
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
