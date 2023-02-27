type PropTypes = {
  title: string;
  selected?: boolean;

  // For router implementation
  target?: string;
};

const NavBarLink: React.FC<PropTypes> = (props) => {
  return (
    <button className={`px-2 py-1 md:px-5 md:py-3  md:tracking-wide text-sm md:text-lg border-b-2 border-transparent hover:shadow-lg ${props.selected ? "border-b-grayish" : ""}`}>
      {props.title}
    </button>
  );
};

export default NavBarLink;
