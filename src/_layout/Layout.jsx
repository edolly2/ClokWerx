import "../_styles/Layout.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="header" />
      <aside className="aside"></aside>
      <main className="main">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
