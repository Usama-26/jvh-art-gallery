import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

const data = [
  {
    title: "Cloud",
    author: "Vian Roos",
    price: 1300,
    width: 79,
    height: 58,
    medium: "Photography",
    image: "catalogue-1",
    status: "Sold",
  },
  {
    title: "Message Received",
    author: "Alecia Loxton",
    price: 12750,
    width: 40,
    height: 50,
    medium: "Oil on Canvas",
    image: "catalogue-2",
    status: "Available",
  },
  {
    title: "Adam Betrayed",
    author: "Alecia Loxton",
    price: 8250,
    width: 45,
    height: 90,
    medium: "Oil on Canvas",
    image: "catalogue-3",
    status: "Available",
  },
  {
    title: "Dream",
    author: "Ankie van der Merwe",
    price: 850,
    width: 21,
    height: 29,
    medium: "Ink on Paper",
    image: "catalogue-4",
    status: "Available",
  },
  {
    title: "Block",
    author: "Vian Roos",
    price: 1300,
    width: 70,
    height: 56,
    medium: "Cotton thread sewn on cardboard",
    image: "catalogue-5",
    status: "Sold",
  },
  {
    title: "Block",
    author: "Vian Roos",
    price: 900,
    width: 70,
    height: 56,
    medium: "Cotton thread sewn on cardboard",
    image: "catalogue-6",
    status: "Sold",
  },
  {
    title: "Portrail on Couch",
    author: "Loeritha Saayman",
    price: 3850,
    width: 50,
    height: 50,
    medium: "oil on board",
    image: "catalogue-7",
    status: "Available",
  },
  {
    title: "Fool's Gold 1",
    author: "Loeritha Saayman",
    price: 2900,
    width: 27,
    height: 27,
    medium: "oil on board",
    image: "catalogue-8",
    status: "Available",
  },
  {
    title: "Fool's Gold 2",
    author: "Loeritha Saayman",
    price: 2900,
    width: 27,
    height: 27,
    medium: "oil on board",
    image: "catalogue-9",
    status: "Available",
  },
];
export default function Catalogue() {
  return (
    <WebLayout>
      <section className="py-24">
        <div className="container mx-auto">
          <Heading>
            <span className="lg:text-5xl text-4xl">
              Artist Choice Catalogues
            </span>
          </Heading>
          <div className="py-20 mx-5">
            <Image
              src={
                "/images/art-class-and-studio-events/mixed-media-encaustic-workshop.png"
              }
              height={407}
              width={487}
              className="mx-auto"
              alt="Catalogue Photo"
            />
          </div>
          <section className="py-20">
            <div className="lg:mx-20 mx-5 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
              {data.map(
                (
                  {
                    title,
                    author,
                    price,
                    width,
                    height,
                    medium,
                    image,
                    status,
                  },
                  index
                ) => (
                  <div key={index} className="mb-8">
                    <div className="border-b border-black/30 p-4">
                      <Image
                        src={`/images/catalogues/${image}.png`}
                        width={200}
                        height={150}
                        alt={`${title} Image`}
                        className="mx-auto h-48 object-contain"
                      />
                    </div>
                    <div className="lg:mx-20 mx-10 py-4 space-y-2">
                      <h4 className="font-medium">R {price}</h4>
                      <h1 className="text-2xl font-display">{title}</h1>
                      <h3 className="text-xl font-medium text-black/50">
                        {author}
                      </h3>
                      <button
                        disabled={status === "Sold" && true}
                        className="btn-primary disabled:bg-black/30"
                      >
                        {status}
                      </button>
                      <h4>
                        Size: {width} x {height}
                      </h4>
                      <h4>Medium : {medium}</h4>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </section>
    </WebLayout>
  );
}
