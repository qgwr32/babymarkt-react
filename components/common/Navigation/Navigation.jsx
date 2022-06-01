import Link from "next/link";

function Navigation() {
  return (
    <ul className="nav flex flex-row">
      <li>
        <Link href="/">
          <a className="px-4">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="px-4">About</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="px-4">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="px-4">Contact</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
