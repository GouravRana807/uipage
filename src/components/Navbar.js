import Link from 'next/link';
import Styles from '/styles/theme.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className="mt-2 ">
        {/* <ul className={Styles.lif}> */}
        <ul className="flex  justify-evenly ">
          {/* <ul className="flex justify-evenly "> */}
          <div>
            <li>
              <Link href="/blog1">
                <div className="mt-1">
                  <Image
                    src="/images/Madiee Games_Trans 1.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </div>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link href="/services">
                <a> Services</a>
              </Link>
            </li>
            <li>
              <Link href="/games">
                <a> Games</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/blog">
                <a> Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a> About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a> Contact</a>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link href="/signup">
                <a> SignUp</a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
