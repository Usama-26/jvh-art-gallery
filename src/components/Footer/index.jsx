import Image from "next/image";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer class="bg-background-color">
      <div class="container px-6 py-12 mx-auto text-white">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div>
            <Image
              src={"/images/jvh-logo@2x.png"}
              height={105}
              width={125}
              alt="JVH Logo"
            />

            <p>
              At JVH, we provide a space where creativity takes form, showcasing
              a diverse range of visual expressions that inspire, provoke
              thought, and evoke emotions.
            </p>
          </div>

          <div className="">
            <p class="text-lg">Quick Link</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a href="/home" class="hover:underline hover:text-primary">
                Home
              </a>
              <a href="/exhibitions" class="hover:underline hover:text-primary">
                Exhibitions
              </a>
              <a
                href="/art-classes-and-studio-events"
                class="hover:underline hover:text-primary"
              >
                Art Classes & Studio Events
              </a>
              <a href="/frameshop" class="hover:underline hover:text-primary">
                Frameshop
              </a>
              <a href="/cafe" class="hover:underline hover:text-primary">
                Cafe
              </a>
              <a
                href="/exhibition-catalogue"
                class="hover:underline hover:text-primary"
              >
                Exhibition Catalogue
              </a>
            </div>
          </div>

          <div className="">
            <p className="text-lg" class="">
              Contact Us
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a href="" class="inline-flex hover:underline hover:text-primary">
                <MdLocationOn className=" w-8 h-8 fill-primary mr-2" />
                <span>
                  593 Jacqueline Dr, Garsfontein, Pretoria, 0042, South Africa
                </span>
              </a>
              <a
                href="tel:0797809807"
                class="inline-flex hover:underline hover:text-primary"
              >
                <HiPhone className="self-center w-4 h-4 fill-primary mr-2" />
                <span>0797809807</span>
              </a>
              <a
                href="mailto:info@jvhartgallery.co.za"
                class="inline-flex items-center hover:underline hover:text-primary"
              >
                <HiMail className=" w-4 h-4 fill-primary mr-2" />
                <span>info@jvhartgallery.co.za</span>
              </a>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 border-gray-700 h-2" />

        <div class="sm:flex sm:items-center sm:justify-between text-sm">
          <div class="flex gap-4 hover:cursor-pointer">
            <a
              href="/privacy-policy"
              className="hover:underline hover:text-primary"
            >
              Privacy Policy
            </a>
            |
            <a
              href="terms-and-conditions"
              className="hover:underline hover:text-primary"
            >
              Terms & Conditions
            </a>
          </div>
          <p class="font-sans p-8 text-start md:text-center md:p-4">
            Copyright © 2023. All rights reserved.
          </p>
          <p class="font-sans p-8 text-start md:text-center md:p-4">
            Crafted by:{" "}
            <a href="https://www.mrrobotdev.com" className="hover:underline">
              mrrobotdev.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
