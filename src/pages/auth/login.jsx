/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { MdMail, MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
export default function Login() {
  return (
    <main className="w-screen h-screen bg-background-color">
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div>
          <Image
            src={"/images/jvh-logo@2x.png"}
            width={125}
            height={105}
            alt="Company Logo"
            className="mx-auto"
          />
          <LoginForm />
          <p className="text-center text-white mt-10">
            {"Don't have an account?"}
            <a href="/auth/signup" className="text-primary hover:underline">
              {" Sign up"}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
function LoginForm() {
  return (
    <form action="" className="lg:w-96 w-80 space-y-4">
      <span className="inline-flex w-full gap-2 items-center">
        <MdMail className="w-6 mt-2 h-6 fill-white" />
        <input
          type="text"
          className="w-full py-2 border-b bg-transparent border-white placeholder:text-white"
          placeholder="Email"
        />
      </span>
      <span className="inline-flex w-full gap-2 items-center relative">
        <MdLock className="w-6 mt-2 h-6 fill-white" />
        <input
          type="email"
          className="w-full py-2 border-b bg-transparent border-white placeholder:text-white"
          placeholder="Password"
        />
        <button className="absolute right-0">
          <IoMdEyeOff className="w-6 h-6 fill-white" />
        </button>
      </span>
      <p className="text-end">
        <a
          className="hover:underline text-primary"
          href="/auth/forgot-password"
        >
          Forgot Password
        </a>
      </p>
      <button className="w-full py-2 mt-2 bg-primary rounded-full uppercase tracking-widest text-white">
        Login
      </button>
    </form>
  );
}
