import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function Frameshop() {
  return (
    <WebLayout>
      <section className="py-24 bg-frameshop space-y-8">
        <h1 className="font-display font-semibold text-6xl leading-snug  text-center">
          Frame Your ArtWork <br />
          Perfectly
        </h1>
        <p className="text-lg font-serif text-center">
          Bring your artwork to life with our high-quality art frames. <br />{" "}
          Choose from a variety of styles and sizes to showcase your <br />{" "}
          unique piece.
        </p>
      </section>
      <section className="container mx-auto py-24">
        <Heading>
          <span className="text-5xl">
            Get a free quotation <br /> for your work
          </span>
        </Heading>

        <div className="p-20 flex">
          <div className="basis-6/12">
            <div className=" w-96 mx-auto relative">
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
            <div className=" ml-5 text-lg w-9/12 text-justify space-y-2">
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
