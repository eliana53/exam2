import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar bg-base-200 p-4">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold font-dancing">
          Chinese Restaurant
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-dancing">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
