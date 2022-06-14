// import Title from '../src/components/Title';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

export default function SignIn() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex justify-center items-center text-2xl font-medium text-green-300 m-8">
          <h1>
            You are one form away from build a Thriving Team and a culture of
            Happy Learning
          </h1>
        </div>

        <div>
          <div className="flex justify-center items-center  font-medium text-green-200 mb-2">
            <p className="text-3xl">Sign In</p>
          </div>
        </div>

        <div className=" 2xl:relative 2xl:right-96 ">
          <a
            href="./signup"
            className="text-xl flex justify-center items-center opacity-70 hover:opacity-100 font-medium text-green-200   "
          >
            SignUp
          </a>
        </div>

        <div className="flex flex-col justify-center ">
          <form action="">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex  border-2 justify-around w-10/12 sm:w-1/2 xl:w-4/12  rounded-2xl opacity-60  m-2 focus-within:opacity-100">
                <input
                  type="email"
                  placeholder="Email"
                  className=" border-none outline-none bg-transparent "
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="m-2 hover:text-green-500"
                />
              </div>

              <div className="flex  border-2 justify-around w-10/12 sm:w-1/2 xl:w-4/12  rounded-2xl opacity-60  m-1 focus-within:opacity-100">
                <input
                  type="password"
                  placeholder="Password"
                  className=" border-none outline-none bg-transparent "
                />
                <FontAwesomeIcon icon={faKey} className="m-2 " />
              </div>

              <div className="flex ">
                <div className="mr-4 md:mr-14 lg:mr-20">
                  <label className="  text-gray-500 font-bold">
                    <input className="mr-2  leading-tight" type="checkbox" />
                    <span className="text-sm">Keep me signed in!</span>
                  </label>
                </div>
                <div className="text-gray-500 font-bold hover:text-gray-400  lg:ml-20 ml-8 md:ml-14">
                  <a className="text-sm" href="">
                    Forget Password ?
                  </a>
                </div>
              </div>

              <button
                className="bg-green-400 text-2xl text-black font-medium pr-8 pl-8 pt-1 pb-1 hover:bg-green-300 rounded-lg m-3"
                type="submit"
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
        <div className="float-right sm:relative sm:bottom-28 sm:right-14">
          <Image
            src="/images/BookaDemo Shortcut.png"
            height={60}
            width={60}
            alt=""
          />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <p className="text-green-300 font-medium">Note:</p>
            <p className="opacity-60 text-sm">
              Before submission, kindly verify your email address. Post
              submission, you would receive an acknowledgement to the email
              address mentioned in the form. if not, Kindly write to
              hello@madiee.com and we will get in touch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
