import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: preact.ComponentChildren }) => {
  return (
    <div class="container shadow-lg mx-auto my-4 p-4 rounded-lg">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
