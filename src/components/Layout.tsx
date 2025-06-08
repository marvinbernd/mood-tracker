import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
  title,
}: {
  children: preact.ComponentChildren;
  title: string;
}) => {
  return (
    <div class="container shadow-lg mx-auto rounded-lg flex flex-col min-h-screen">
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
