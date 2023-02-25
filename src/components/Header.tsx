const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 lg:px-10 h-20 border-b shadow-md">
      <div className="relative select-none">
        <h1 className="text-2xl text-green-500">portfolio</h1>
        <p className="absolute   top-5 right-2 italic text-orange-500">of val-h</p>
      </div>

      <div>
        stuff here
      </div>
    </header>
  );
};

export default Header;
