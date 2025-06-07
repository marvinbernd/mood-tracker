const Footer = () => {
  const menu = [
    { name: "Home", href: "/" },
    { name: "Journal", href: "/journal" },
    { name: "Trends", href: "/trends" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <footer class="p-4">
      <nav>
        <ul class="flex justify-between">
          {menu.map((item) => (
            <li key={item.name}>
              <a href={item.href} class="hover:underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
