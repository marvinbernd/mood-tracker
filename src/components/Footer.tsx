import { Link } from "react-router-dom";

const Footer = () => {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Journal", href: "/journal" },
    { name: "Trends", href: "/trends" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <footer class="p-4 justify-self-end">
      <nav>
        <ul class="flex justify-between">
          {menu.map((item) => (
            <li key={item.name}>
              <Link to={item.href} class="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
