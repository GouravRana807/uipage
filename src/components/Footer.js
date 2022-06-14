import Link from 'next/link';
import Styles from '/styles/theme.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <>
      <nav className="mt-2 ">
        <ul className="flex justify-evenly ">
          <div className="">
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
              <Link href="/blog">
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
          {/* <div className="bg-sky-500"> */}
          <div className={Styles.jif}>
            <div>
              <li>
                <Link href="/">
                  <Image
                    src="/images/Madiee Games_Trans 1.png"
                    width={50}
                    height={50}
                    alt=""
                  />
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link href="/">
                  <a className={Styles.rif}>MADIEE</a>
                </Link>
              </li>
            </div>
          </div>
        </ul>
        <div className="flex justify-center">
          <hr className={Styles.ml} />
        </div>

        <div className="flex justify-center items-center ">
          <FontAwesomeIcon icon={faFacebook} className={Styles.ad} />
          <FontAwesomeIcon icon={faTwitter} className={Styles.ad} />
          <FontAwesomeIcon icon={faInstagram} className={Styles.ad} />
        </div>
        <div className={Styles.kl}>
          <div>
            <span>&#169;</span>
          </div>
          <div>
            <p className={Styles.nl}>
              MADIEE GAMES, inc.2019. We love our users!
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
