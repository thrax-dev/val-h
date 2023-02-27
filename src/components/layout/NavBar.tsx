import NavBarLink from "../UI/NavBarLink";

const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-2 md:gap-4">
    {/* selected property to be controlled with updated state */}
      <NavBarLink title="Home" selected={true} />
      <NavBarLink title="Projects" />
      <NavBarLink title="Contact" />
    </nav>
  );
};

export default NavBar;
