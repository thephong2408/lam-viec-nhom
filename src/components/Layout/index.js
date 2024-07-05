import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
