import Styles from '/styles/theme.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function blog() {
  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-green-300 text-2xl font-medium mb-2">
          Featured Articles
        </h1>
      </div>

      <div>
        <ul className="flex  justify-center ">
          <div></div>
          <div className="flex justify-center items-center flex-wrap">
            <li>
              <Link href="/blog/allarticles">
                <a>
                  <allarticles />
                  All Articles
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Mental Models</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Uniquely human skills</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Serious Games</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a> Games</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="">
                <Image
                  src="/images/keyboard_arrow_up.png"
                  height={28}
                  width={28}
                  alt=""
                  className=""
                />
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div className="flex justify-center mb-12 mt-10">
        <div className="flex  justify-evenly w-3/4 md:w-11/12 xl:w-3/4 flex-wrap md:flex-nowrap">
          <div className="flex flex-col  m-1 ">
            <Image
              src="/images/Mask Group7.png"
              alt=""
              width={200}
              height={170}
            />
            <p className="font-semibold leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              fuga perferendis?
            </p>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores repellendus molestias corporis commodi nemo iste rem
              cumque necessitatibus veritatis ad quos, suscipit alias rerum.
            </p>
            <div>
              <div className="flex justify-around mt-2">
                <div className="flex space-x-2">
                  <Image
                    className="rounded-lg"
                    src="/images/Ellipse 1.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p>john singh</p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="mr-2 opacity-75 text-sm">2 minutes</p>
                  <Image
                    src="/images/share.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  m-1">
            <Image
              className="rounded-lg"
              src="/images/Mask Group8.png"
              alt=""
              width={200}
              height={170}
            />
            <p className="font-semibold leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              fuga perferendis?
            </p>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores repellendus molestias corporis commodi nemo iste rem
              cumque necessitatibus veritatis ad quos, suscipit alias rerum.
            </p>
            <div>
              <div className="flex justify-around mt-2">
                <div className="flex space-x-2">
                  <Image
                    src="/images/Ellipse 1.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p>john singh</p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <p className="mr-2 opacity-75 text-sm">2 minutes</p>
                  <Image
                    src="/images/share.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  m-1 ">
            <Image
              className="rounded-lg"
              src="/images/Mask Group9.png"
              alt=""
              width={200}
              height={170}
            />
            <p className="font-semibold leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              fuga perferendis?
            </p>
            <p className="text-sm opacity-75">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores repellendus molestias corporis commodi nemo iste rem
              cumque necessitatibus veritatis ad quos, suscipit alias rerum.
            </p>
            <div>
              <div className="flex justify-around mt-2">
                <div className="flex space-x-2  ">
                  <Image
                    src="/images/Ellipse 1.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                  <p>john singh</p>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <p className="mr-2  text-sm opacity-75">2 minutes</p>
                  <Image
                    src="/images/share.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
