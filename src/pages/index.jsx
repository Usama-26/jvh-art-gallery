import Heading from "@/components/Heading";
import { ScrollDownIcon } from "@/components/ScrollDownIcon";
import { lora, display } from "@/fonts";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
export default function Home() {
  return (
    <main className={`${lora.variable} ${display.variable} font-serif`}>
      <WebLayout>
        <Hero />
        <section className="py-24">
          <div className="container mx-auto">
            <Heading>
              <span className="text-5xl">Exhibitions</span>
            </Heading>

            <div className="container mx-auto">
              <div className="grid grid-cols-3 gap-4 px-20">
                <div className="bg-white shadow-md text-center mt-20">
                  <Image
                    src={"/images/exhibition/memento-solo.png"}
                    height={250}
                    width={300}
                    alt="En Beaute"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Memento Solo</h3>
                    <p className="text-primary mb-4">6 August 2023 @ 11h 00</p>
                    <button className="btn-secondary">Book Now</button>
                  </div>
                </div>
                <div className="bg-white shadow-md text-center mt-20">
                  <Image
                    src={"/images/exhibition/my-journey.png"}
                    height={250}
                    width={300}
                    alt="En Beaute"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">My Journey</h3>
                    <p className="text-primary mb-4">6 August 2023 @ 11h 00</p>
                    <button className="btn-secondary">Book Now</button>
                  </div>
                </div>
                <div className="bg-white shadow-md text-center mt-20">
                  <Image
                    src={"/images/exhibition/en-beaute.png"}
                    height={250}
                    width={300}
                    alt="En Beaute"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">En Beaute</h3>
                    <p className="text-primary mb-4">6 August 2023 @ 11h 00</p>
                    <button className="btn-secondary">Book Now</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button className="btn-primary">View All</button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="bg-banner-2 py-16  space-y-8">
            <h1 className="font-display font-semibold text-6xl leading-snug  text-center">
              Frame Your ArtWork <br />
              Perfectly
            </h1>
            <div className="mt-10 flex justify-center">
              <Link href={"/contact-us"} className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto">
            <Heading>
              <span className="text-5xl">Art Classes & Studio Events</span>
            </Heading>

            <div className="container mx-auto">
              <div className="grid grid-cols-3 gap-4 px-20">
                <div className="bg-white shadow-md mt-20">
                  <Image
                    src={
                      "/images/art-class-and-studio-events/mixed-media-encaustic-workshop.png"
                    }
                    height={250}
                    width={300}
                    alt="drawing-art-class"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4 space-y-4">
                    <h3 className="text-lg font-semibold">
                      Drawing / Art Classe
                    </h3>
                    <p className=" mb-4 line-clamp-1">
                      Basic drawing material will be provided, you an bring your
                      own.
                    </p>
                    <p>10H 00 to 15H 00</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">R 750,00 / class</p>
                      <button className="btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md mt-20">
                  <Image
                    src={
                      "/images/art-class-and-studio-events/etching-and-lino-cutting-classes.png"
                    }
                    height={250}
                    width={300}
                    alt="drawing-art-class"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4 space-y-4">
                    <h3 className="text-lg font-semibold">
                      Drawing / Art Classe
                    </h3>
                    <p className=" mb-4 line-clamp-1">
                      Basic drawing material will be provided, you an bring your
                      own.
                    </p>
                    <p>10H 00 to 15H 00</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">R 750,00 / class</p>
                      <button className="btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md mt-20">
                  <Image
                    src={
                      "/images/art-class-and-studio-events/drawing-art-class.png"
                    }
                    height={250}
                    width={300}
                    alt="drawing-art-class"
                    className="h-40 object-cover w-full"
                  />
                  <div className="p-4 space-y-4">
                    <h3 className="text-lg font-semibold">
                      Drawing / Art Classe
                    </h3>
                    <p className=" mb-4 line-clamp-1">
                      Basic drawing material will be provided, you an bring your
                      own.
                    </p>
                    <p>10H 00 to 15H 00</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">R 750,00 / class</p>
                      <button className="btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button className="btn-primary">View All</button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className=" py-16 space-y-8 bg-banner-3">
            <h1 className="font-display font-semibold text-6xl leading-snug  text-center">
              Indulge in Artful Cafe <br /> Delights
            </h1>
            <div className="mt-10 flex justify-center">
              <Link
                href={"/cafe"}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <span>{"Our Menu"}</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition duration-200" />
              </Link>
            </div>
          </div>
        </section>
      </WebLayout>
    </main>
  );
}

function Hero() {
  return (
    <section className=" pt-24 bg-home-banner">
      <div className="container mx-auto">
        <div className="flex px-10">
          <div className="basis-7/12 ">
            <div className="mt-10 space-y-6">
              <h1 className="text-6xl font-display">
                Experience the Artistic Journey
              </h1>
              <p className="font-serif text-[#6B6E80]">
                Contemporary Art Gallery. Featuring new exhibitions every month.{" "}
                <br />
                Artists from across South Africa Represented. <br /> Art is our
                Passion
              </p>
              <button className="btn-primary inline-flex items-center gap-2 group">
                <span>{"Let's Begin"}</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition duration-200" />
              </button>
            </div>
          </div>
          <div className="basis-5/12">
            <div className="h-[430px] relative">
              <Image
                src={"/images/home/hero-img-1.png"}
                width={372}
                height={279}
                alt="Hero 1"
                className="absolute top-0 right-0 shadow-lg"
              />
              <Image
                src={"/images/home/hero-img-2.png"}
                width={271}
                height={204}
                alt="Hero 2"
                className="absolute bottom-14 left-0 shadow-lg"
              />
              <Image
                src={"/images/home/hero-img-2.png"}
                width={187}
                height={140}
                alt="Hero 3"
                className="absolute right-8 -bottom-0 shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="-mt-10">
          <ScrollDownIcon />
        </div>
      </div>
    </section>
  );
}
