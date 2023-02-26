import NavLinkUI from "../UI/NavLinkUI";

const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-4">
    {/* selected property to be controlled with updated state */}
      <NavLinkUI title="Home" selected={true} />
      <NavLinkUI title="Projects" />
      <NavLinkUI title="Contact" />
      {/* <NavLinkUI title="Me, Myself and I" /> */}
    </nav>
  );
};

export default NavBar;
