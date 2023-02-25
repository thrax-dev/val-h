import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 lg:px-10 h-20 border-b shadow-md">
      <div className="relative select-none">
        <h1 className="text-2xl text-primary tracking-wide">portfolio</h1>
        <p className="absolute top-5 -right-4 italic text-secondary tracking-wider">of val-h</p>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
