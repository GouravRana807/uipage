// import Title from '../components/Title';
import Styles from '/styles/theme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Blog() {
  return (
    <>
      {/* <Title title="Contact" /> */}
      {/* < Image src="/public/2.jpg" width={300} height={400} alt="blog"/> */}
      <div>
        <div className="flex justify-evenly items-center mr-40 text-sm">
          <div className="flex  justify-evenly ">
            <div className="mt-5">
              <Image
                src="/images/Group 379.png"
                alt="kl"
                width={32}
                height={111}
              />
            </div>
            <ul>
              <li className="flex flex-col  ">
                <a href="">Headbar</a>
                <a href="">Topic 1</a>
                <a href="">Topic 2</a>
                <a href="">Topic 3</a>
              </li>
            </ul>
          </div>
          <div className=" mt-6">
            <Image
              src="/images/unsplash_tMI2_-r5Nfo.png"
              alt=""
              width={1150}
              height={400}
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex justify-center flex-col mt-4">
            <div className="flex ml-20 ">
              <h1 className="text-2xl font-medium text-green-300">
                Why effectively training for human skills is more important than
                ever
              </h1>
            </div>
            <div className="flex justify-around m-5">
              <div className="flex justify-evenly ">
                <Image
                  src="/images/Ellipse 1@2x.png"
                  width={28}
                  height={20}
                  alt=""
                />
                <h2 className="ml-2 ">Senthal kumar G</h2>
              </div>
              <p>2 min read</p>
            </div>
            <p className="ml-20">
              Human skills are simply skills that are exclusive to human beings,
              and no AI or automation can replace these skills.
            </p>
          </div>

          <div className="flex flex-col mt-8 ">
            <FontAwesomeIcon
              icon={faFacebook}
              className="m-2 hover:text-green-300"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="m-2 hover:text-green-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="m-2 hover:text-green-300"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center  ">
        <p className="w-3/4 ml-12 leading-8">
          The need for individuals, resilient and adaptive to rapidly changing
          environments, is the order of the day. LinkedIn’s workplace learning
          report 2020 states that the #1 priority of talent development teams is
          training employees for creativity, persuasion, collaboration,
          adaptability, and emotional intelligence. People categorize and call
          these skills as soft skills, people skills, leadership skills,
          social-emotional skills, essential skills, and at times, power skills.
          No matter what name they might take, these skills are exclusive to
          humans and demonstrate one’s ability to work with fellow human beings,
          and bring ideas to the table. In the age of automation and AI, the
          so-called technical skills or hard skills are eventually replaceable
          by machines, but it is these human skills that make people
          indispensable. AI might continue to replace jobs, but machines can
          never replace our judgment, empathy, and compassion.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-green-300 text-2xl font-medium mb-6">
          Recommended Readings
        </p>
      </div>

      {/* Recommended Reading */}
      <div className="flex justify-center ">
        <div className="flex  justify-evenly w-3/4">
          <div className="flex flex-col  m-1 ">
            <Image
              src="/images/Mask Group.png"
              alt=""
              width={200}
              height={200}
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
              src="/images/christin-hume-hBuwVLcYTnA-unsplash.jpg"
              alt=""
              width={200}
              height={200}
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
              src="/images/Blog Pic 2.png"
              alt=""
              width={200}
              height={200}
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
