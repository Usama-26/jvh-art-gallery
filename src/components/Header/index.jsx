/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" lg:block hidden font-serif bg-background-color">
      <div className="container mx-auto flex justify-between p-2 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <Image
            src={"/images/jvh-logo@1x.png"}
            height={59}
            width={68}
            alt="JVH Logo"
          />
        </Link>
        <nav className="basis-7/12 flex flex-wrap items-center text-base text-white justify-between">
          <Link
            href="/"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Home
          </Link>
          <a
            href="/exhibitions"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Exhibitions
          </a>
          <a
            href="/art-classes-and-studio-events"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Art Classes & Studio Events
          </a>
          <a
            href="/frameshop"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Frameshop
          </a>
          <a
            href="/cafe"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Cafe
          </a>
          <a
            href="/contact-us"
            className="mr-5 border-b border-transparent hover:border-primary"
          >
            Contact us
          </a>
        </nav>
        <a
          href="/arist-submissions"
          className="inline-flex items-center text-white bg-primary border-0 py-2 px-3 focus:outline-none hover: rounded text-base mt-4 md:mt-0"
        >
          Artist Submissions
        </a>
      </div>
    </header>
  );
}
