import "../_styles/Header.css";
import Logo from "../_assets/clokwerx1.png";

const Header = (props) => {
  return (
    <header className={props.className}>
      <div className="site-brand">
        <img className="logo" src={Logo} alt="" />
        <h2>CLOKWERX</h2>
      </div>
    </header>
  );
};

export default Header;
