import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function Frameshop() {
  return (
    <WebLayout>
      <section className="lg:py-24 py-16 px-5 bg-frameshop space-y-8">
        <h1 className="font-display font-semibold lg:text-6xl text-4xl leading-snug  text-center ">
          Frame Your ArtWork <br />
          Perfectly
        </h1>
        <p className="lg:text-lg font-serif text-center">
          Bring your artwork to life with our high-quality art frames. <br />{" "}
          Choose from a variety of styles and sizes to showcase your <br />{" "}
          unique piece.
        </p>
      </section>
      <section className="container mx-auto lg:py-24 py-16">
        <Heading>
          <span className="lg:text-5xl text-4xl">
            Get a free quotation <br /> for your work
          </span>
        </Heading>

        <div className="lg:px-20 px-5 lg:py-24 py-16 flex lg:flex-row flex-col lg:gap-0 gap-8">
          <div className="basis-6/12">
            <div className=" lg:w-96 w-72 mx-auto relative">
              <div className="absolute w-full h-full -rotate-[15deg] bg-primary/10 -z-10"></div>
              <Image
                src={"/images/frameshop/frameshop-img.png"}
                width={392}
                height={452}
                className="z-40"
                alt="Frameshop Image"
              />
            </div>
          </div>
          <div className="basis-6/12 ">
            <div className=" lg:ml-5  text-lg lg:w-9/12 w-full mx-auto text-justify space-y-2">
              <p>
                Please feel free to bring your works for a free quotation,we
                believe that we will be able to make a plan to meet your budget.
                We do not do rush jobs as we deliver quality work with quality
                materials.
              </p>
              <br />
              <p>
                We pride ourselves in doing high quality artistic picture
                framing using only the best possible materials with and
                including acid free materials ,museum grade matt boards.
              </p>
              <br />
              <button className="btn-primary">Free Quotation</button>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  );
}
