import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";
const images = [
  "/images/exhibition/en-beaute.png",
  "/images/exhibition/anima-soul-of-earth.png",
  "/images/exhibition/memento-solo.png",
  "/images/exhibition/my-hart-woestyn.png",
  "/images/exhibition/my-journey.png",
  "/images/exhibition/the-artist-choice.png",
];
export default function ExhibitionCatalogues() {
  return (
    <WebLayout>
      <section className="py-24">
        <div className="mx-auto container">
          <Heading>
            <span>Exhibition Catalogues</span>
          </Heading>

          <div className="py-24">
            <div className="grid gap-16 grid-cols-2 text-center">
              {images.map((image) => (
                <div key={image}>
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt="image catalogue"
                    className="mx-auto mb-6"
                  />
                  <button className="btn-primary">View Catalogues</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  );
}
