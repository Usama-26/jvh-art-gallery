import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function ClassAndEvents() {
  return (
    <WebLayout>
      <section className="pt-24 bg-gradient-to-b from-[#F5F5F5] to-[#F0F0F0]">
        <div className="container mx-auto">
          <Heading>
            <span className="text-5xl">Exhibitions</span>
          </Heading>
          <EventSection imgPath={"/images/exhibition/my-hart-woestyn.png"}>
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display text-5xl">My hart, Woestyn</h1>
            <div className="uppercase font-display w-4/5 inline-flex justify-end items-center">
              <hr className="inline w-28 mr-2" />
              <span>JENNY REYNE</span>
            </div>
            <div className="w-4/5 space-y-4 ">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Saturday 19 August, 2023 @ 11h 00
              </p>

              <p>Duration: 19 to 31 August, 2023</p>

              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>

              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
        </div>
      </section>
      <section className="py-10 ">
        <div className="container mx-auto">
          <h2 className="font-display font-semibold text-lg text-center  text-primary">
            Current Exhibitions
          </h2>
          <Heading>
            <span className="text-5xl">Now Showing</span>
          </Heading>
          <EventSection imgPath={"/images/exhibition/the-artist-choice.png"}>
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display text-5xl">The Artist’s Choice</h1>
            <div className="uppercase font-display w-4/5 inline-flex justify-end items-center">
              <hr className="inline w-28 mr-2" />
              <span>GROUP EXHIBITION</span>
            </div>
            <div className="w-4/5 space-y-4">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Sunday 6 August, 2023 @ 11h 00
              </p>
              <p>Duration: 6 to 31 August, 2023</p>
              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>

              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
          <EventSection
            imgPath={"/images/exhibition/en-beaute.png"}
            direction="md:flex-row-reverse flex-col-reverse"
          >
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display text-5xl"> En Beaute</h1>
            <div className="uppercase font-display w-4/5 inline-flex justify-end items-center">
              <hr className="inline w-28 mr-2" />
              <span>LENA HUGO & JACO BENADE</span>
            </div>
            <div className="w-4/5 space-y-4">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Sunday 6 August, 2023 @ 11h 00
              </p>
              <p>Duration: 6 to 31 August, 2023</p>
              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
              </p>
              <button className="btn-primary ">Book Now</button>
            </div>
          </EventSection>
          <EventSection imgPath={"/images/exhibition/my-journey.png"}>
            <h2 className="font-display font-semibold text-lg  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display text-5xl">My Journey</h1>
            <div className="uppercase font-display w-4/5 inline-flex justify-end items-center">
              <hr className="inline w-28 mr-2" />
              <span>CORNELIA WESSELS</span>
            </div>
            <div className="w-4/5 space-y-4">
              <h4 className="font-display text-lg font-semibold">WELCOME,</h4>
              <p className="italic">
                Opening Date: Sunday 6 August, 2023 @ 11h 00
              </p>
              <p>Duration: 6 to 31 August, 2023</p>
              <p>
                Johanns van Heerdan Art Gallery, 593 Jacqueline Drive
                Garsfontein Pretoria East
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
  imgPath,
  direction = "md:flex-row flex-col",
  children,
}) {
  return (
    <div className={`flex gap-8 ${direction} py-24 px-5`}>
      <div className="basis-1/2">{children}</div>
      <div className="basis-1/2">
        <div className="w-[450px] mx-auto relative">
          <div className="absolute h-full w-full -rotate-[25deg] bg-primary/10 z-0"></div>
          <Image
            src={imgPath}
            width={486}
            height={408}
            alt="mixed-media-encaustic-workshop"
            className="relative w-[450px] z-10"
          />
        </div>
      </div>
    </div>
  );
}
