import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      className="link py-2 pl-3 pr-4 text-neutral font-semibold sm:text-xl rounded md:p-0 hover:text-primary hover:bg-transparent"
    >
      {title}
    </Link>
  );
};

export default NavLink;
