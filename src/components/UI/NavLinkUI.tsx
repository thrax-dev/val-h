type PropTypes = {
  title: string;
  selected?: boolean;

  // For router implementation
  target?: string;
};

const NavLinkUI: React.FC<PropTypes> = (props) => {
  return (
    <button className={`px-5 py-3 tracking-wide text-lg border-b-2 border-transparent hover:shadow-lg ${props.selected ? "border-b-grayish" : ""}`}>
      {props.title}
    </button>
  );
};

export default NavLinkUI;
