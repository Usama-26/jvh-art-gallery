import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu, BiMenuAltRight, BiSearch, BiX } from "react-icons/bi";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    toggleScroll();
  };

  const toggleScroll = () => {
    if (disableScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setDisableScroll(!disableScroll);
  };

  return (
    <>
      <div
        id="Navbar"
        className=" bg-background-color block lg:hidden relative overflow-hidden"
      >
        <SidePanel show={isOpen} togglePanel={togglePanel} />
        <div className="mx-5 py-5 flex justify-between items-center ">
          <Link href={"/"}>
            <Image
              src={"/images/jvh-logo@1x.png"}
              height={59}
              width={68}
              alt="JVH Logo"
            />
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePanel}
              className="focus:outline-none active:outline-none z-[9999]"
            >
              {isOpen ? (
                <BiX className="w-10 h-10 fill-white" />
              ) : (
                <BiMenu className="w-10 h-10 fill-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function SidePanel({ show, togglePanel }) {
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/exhibitions",
      link: "Exhibitions",
    },

    {
      path: "/art-classes-and-studio-events",
      link: "Art Classes & Studios",
    },

    {
      path: "/frameshop",
      link: "Frameshop",
    },
    {
      path: "/cafe",
      link: "Cafe",
    },
    {
      path: "/contact-us",
      link: "Contact Us",
    },
  ];
  return (
    <div
      className={`w-screen h-screen bg-background-color text-white overflow-hidden fixed top-0 left-0 z-50 yellow-gradient transition-transform duration-500 ${
        !show && "translate-x-full"
      }`}
    >
      <nav className="p-4 relative top-20">
        <ul className="list-none overflow-hidden text-center">
          {navLinks.map(({ path, link }, index) => {
            return (
              <li
                key={index}
                className={`py-2 transition-transform ${
                  show ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Link
                  onClick={togglePanel}
                  href={path}
                  className="font-medium focus:outline-none"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
