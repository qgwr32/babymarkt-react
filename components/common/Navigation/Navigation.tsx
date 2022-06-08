import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex flex-row nav">
      <li>
        <Link href="/">
          <a className="px-4">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/card-listing">
          <a className="px-4">Cards</a>
        </Link>
      </li>
      <li>
        <Link href="/typescript">
          <a className="px-4">Typescript</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
