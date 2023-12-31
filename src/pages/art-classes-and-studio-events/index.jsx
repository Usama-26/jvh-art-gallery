import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function ClassAndEvents() {
  return (
    <WebLayout>
      <section className="pt-24 bg-gradient-to-b from-[#F5F5F5] to-[#F0F0F0]">
        <div className="container mx-auto">
          <Heading>
            <span className="lg:text-5xl text-3xl">
              Art Classes & Studio Events
            </span>
          </Heading>
          <EventSection
            id={"mixedMedia"}
            imgPath={
              "/images/art-class-and-studio-events/mixed-media-encaustic-workshop.png"
            }
          >
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH Art Classes & Studio Events
            </h2>
            <h1 className="font-display lg:text-5xl text-3xl">
              Mixed media, encaustic workshop
            </h1>
            <div className="uppercase font-display w-4/5 inline-flex  lg:justify-end justify-center items-center">
              <hr className="inline lg:w-28 w-10 mr-2" />
              <span>LEIN SMUTS</span>
            </div>
            <div className="w-4/5 lg:mx-0 mx-auto space-y-4 lg:mt-0 mt-5 ">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Saturday 26 August, 2023 @ 11h 00 to 15h 00
              </p>

              <p>Includes material, tea, coffee & lunch</p>

              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>
              <p className="mb-2">
                <b>R 750,00 pp</b>
              </p>

              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
        </div>
      </section>
      <section className="py-10 ">
        <div className="container mx-auto">
          <h2 className="font-display font-semibold text-lg text-center  text-primary">
            Current Art Classes
          </h2>
          <Heading>
            <span className="lg:text-5xl text-3xl">Now Showing</span>
          </Heading>
          <EventSection
            id={"artClass"}
            imgPath={
              "/images/art-class-and-studio-events/drawing-art-class.png"
            }
          >
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH Art Classes & Studio Events
            </h2>
            <h1 className="font-display lg:text-5xl text-3xl">
              Drawing/Art Classes
            </h1>
            <div className="uppercase font-display w-4/5 inline-flex  lg:justify-end justify-center items-center">
              <hr className="inline lg:w-28 w-10 mr-2" />
              <span>LEIN SMUTS</span>
            </div>
            <div className="w-4/5 lg:mx-0 mx-auto space-y-4 lg:mt-0 mt-5 ">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Thursday 26 August, 2023 @ 17h 30 to 20h 30
              </p>

              <p>
                You don’t need any drawing/Art background experience. This is an
                Art group for people to create together directed towards
                generaing creative ideas & to push your own boundaries.
              </p>
              <p>
                Basic drawing material will be provided, you an bring your own.
              </p>

              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>
              <p className="mb-2">
                <b>R 200,00 per class</b>
              </p>

              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
          <EventSection
            id={"etchingClass"}
            imgPath={
              "/images/art-class-and-studio-events/etching-and-lino-cutting-classes.png"
            }
            direction="md:flex-row-reverse flex-col-reverse"
          >
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH Art Classes & Studio Events
            </h2>
            <h1 className="font-display lg:text-5xl text-3xl">
              {" "}
              Etching & Lino Cutting Classes
            </h1>
            <div className="uppercase font-display w-4/5 inline-flex lg:justify-end justify-center items-center">
              <hr className="inline lg:w-28 w-10 mr-2" />
              <span>MEIKIE LOURENS</span>
            </div>
            <div className="w-4/5 lg:mx-0 mx-auto mt-5 lg:mt-0 space-y-4">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Saturday 26 August, 2023 @ 11h 00 to 15h 00
              </p>
              <p>Includes material, tea & lunch.</p>
              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>
              <p className="mb-2">
                <b>R 750,00 pp</b>
              </p>

              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
        </div>
      </section>
    </WebLayout>
  );
}

function EventSection({
  id,
  imgPath,
  direction = "md:flex-row flex-col-reverse",
  children,
}) {
  return (
    <div id={id} className={`flex gap-8 ${direction} lg:py-24 py-16 px-5`}>
      <div className="basis-1/2 lg:text-left text-center lg:mt-0 mt-10">
        {children}
      </div>
      <div className="basis-1/2">
        <div className="lg:w-[450px] w-[300px] mx-auto relative">
          <div className="absolute h-full w-full -rotate-[25deg] bg-primary/10 z-0"></div>
          <Image
            src={imgPath}
            width={486}
            height={408}
            alt="mixed-media-encaustic-workshop"
            className="relative lg:w-[450px] w-[300px] z-10"
          />
        </div>
      </div>
    </div>
  );
}
