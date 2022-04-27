import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = (props: any) => {
  const router = useRouter();

  return (
    <nav className="main-navbar">
      <div className="logo">
        <h1>
          mateusz <span className="last-word">kleszcz</span>
        </h1>
      </div>
      <div className="links">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/portfolio">
          <a className={router.pathname === "/portfolio" ? "active" : ""}>
            Portfolio
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
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
