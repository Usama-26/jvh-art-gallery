import Heading from "@/components/Heading";
import { ScrollDownIcon } from "@/components/ScrollDownIcon";
import SlickSlider from "@/components/SlickSlider";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function Cafe() {
  return (
    <WebLayout>
      <section className="bg-cafe relative">
        <div className="bg-white/50">
          <div className="container mx-auto h-full lg:py-24 py-16">
            <h1 className="font-display font-semibold lg:text-6xl text-4xl leading-snug  text-center z-10">
              Indulge in Artful Cafe
              <br />
              Delights
            </h1>
            <ScrollDownIcon />
          </div>
        </div>
      </section>
      <section>
        <div className="py-24">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="font-display font-semibold text-lg uppercase text-primary mb-2">
                Our Menu
              </h2>
              <Heading>
                <span className="lg:text-5xl text-4xl">Drinks & Bakery</span>
              </Heading>
            </div>
            <div className="py-20 px-5">
              <Image
                src={"/images/cafe/drinks-and-bakery.png"}
                width={1000}
                height={550}
                alt="drinks and cafe menu "
                className="mx-auto"
              />
            </div>
            <div className="text-center">
              <Heading>
                <span className="lg:text-5xl text-4xl">Mains</span>
              </Heading>
            </div>
            <div className="py-20 px-5">
              <Image
                src={"/images/cafe/mains.png"}
                width={1000}
                height={550}
                alt="drinks and cafe menu "
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:px-20 px-10 pb-24">
          <SlickSlider>
            <div className="px-10">
              <Image
                src={"/images/cafe/slider-1.png"}
                width={300}
                height={225}
                alt="slider 1"
                className="mx-auto object-contain"
              />
            </div>
            <div className="px-10">
              <Image
                src={"/images/cafe/slider-2.png"}
                width={300}
                height={225}
                alt="slider 2"
                className="mx-auto object-contain"
              />
            </div>
            <div className="px-10">
              <Image
                src={"/images/cafe/slider-3.png"}
                width={300}
                height={225}
                alt="slider 3"
                className="mx-auto object-contain"
              />
            </div>
            <div className="px-10">
              <Image
                src={"/images/cafe/slider-3.png"}
                width={300}
                height={225}
                alt="slider 4"
                className="mx-auto object-contain"
              />
            </div>
          </SlickSlider>
        </div>
      </section>
    </WebLayout>
  );
}
