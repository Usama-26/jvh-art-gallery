import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function Exhibitions() {
  return (
    <WebLayout>
      <section className="pt-24 bg-gradient-to-b from-[#F5F5F5] to-[#F0F0F0]">
        <div className="container mx-auto">
          <Heading>
            <span className="lg:text-5xl text-4xl ">Exhibitions</span>
          </Heading>
          <EventSection imgPath={"/images/exhibition/my-hart-woestyn.png"}>
            <h2 className="font-display font-semibold text-lg hidden lg:block  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display lg:text-5xl text-4xl">
              My hart, Woestyn
            </h1>
            <div className="uppercase font-display w-4/5 inline-flex lg:justify-end  justify-center items-center">
              <hr className="inline lg:w-28 w-8 mr-2" />
              <span>JENNY REYNE</span>
            </div>
            <div className="w-4/5 lg:mt-0 mt-5 lg:mx-0 mx-auto space-y-4 ">
              <h4 className="font-display lg:text-lg text-xl font-semibold">
                WELCOME,
              </h4>
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
            <span className="lg:text-5xl text-3xl">Now Showing</span>
          </Heading>
          <EventSection
            id={"mementoSolo"}
            imgPath={"/images/exhibition/memento-solo.png"}
          >
            <h2 className="font-display font-semibold text-lg hidden lg:block  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display lg:text-5xl text-4xl">Memento Solo</h1>
            <div className="uppercase font-display w-4/5  inline-flex lg:justify-end  justify-center items-center">
              <hr className="inline lg:w-28 w-8 mr-2" />
              <span>Moira MacMurray</span>
            </div>
            <div className="w-4/5 lg:mt-0 mt-5 lg:mx-0 mx-auto space-y-4 ">
              <h4 className="font-display lg:text-lg text-xl font-semibold">
                WELCOME,
              </h4>
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
            id={"enBeaute"}
            imgPath={"/images/exhibition/en-beaute.png"}
            direction="md:flex-row-reverse flex-col-reverse"
          >
            <h2 className="font-display font-semibold text-lg hidden lg:block  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display lg:text-5xl text-4xl">En Beaute</h1>
            <div className="uppercase font-display w-4/5 inline-flex lg:justify-end  justify-center items-center">
              <hr className="inline lg:w-28 w-8 mr-2" />
              <span>LENA HUGO & JACO BENADE</span>
            </div>
            <div className="w-4/5 lg:mt-0 mt-5 lg:mx-0 mx-auto space-y-4 ">
              <h4 className="font-display lg:text-lg text-xl font-semibold">
                WELCOME,
              </h4>
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
          <EventSection
            id={"myJourney"}
            imgPath={"/images/exhibition/my-journey.png"}
          >
            <h2 className="font-display font-semibold text-lg hidden lg:block  text-primary">
              JVH EXHIBITIONS
            </h2>
            <h1 className="font-display lg:text-5xl text-4xl">My Journey</h1>
            <div className="uppercase font-display w-4/5 inline-flex lg:justify-end  justify-center items-center">
              <hr className="inline lg:w-28 w-8 mr-2" />
              <span>CORNELIA WESSELS</span>
            </div>
            <div className="w-4/5 lg:mt-0 mt-5 lg:mx-0 mx-auto space-y-4 ">
              <h4 className="font-display lg:text-lg text-xl font-semibold">
                WELCOME,
              </h4>
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
    <div id={id} className={`flex gap-8 ${direction} py-24 px-5`}>
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
