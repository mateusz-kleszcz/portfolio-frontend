import Link from "next/link";

const Navbar = (props: any) => {
  return (
    <nav className="main-navbar">
      <div className="logo">
        <h1>
          mateusz <span className="last-word">kleszcz</span>
        </h1>
      </div>
      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      {/* <div className="authControls">
        <Link href="/auth/signin">
          <a>Sign In</a>
        </Link>
        <Link href="/auth/signup">
          <a>Sign Up</a>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
