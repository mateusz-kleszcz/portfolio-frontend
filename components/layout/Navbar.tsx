import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div className="logo">
                <h1>MK</h1>
            </div>
            <div className="links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="/projects"><a>Projects</a></Link>
            </div>
            <div className='authControls'>
                <Link href="sign-in"><a>Sign In</a></Link>
                <Link href="sign-up"><a>Sign Up</a></Link>
            </div>
        </nav>
    );
};

export default Navbar;