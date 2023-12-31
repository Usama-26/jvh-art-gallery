import Image from "next/image";
import Heading from "@/components/Heading";
import WebLayout from "@/layouts/WebLayout";
export default function Home() {
  return (
    <WebLayout>
      <div className="py-20">
        <Heading>
          <span className="lg:text-5xl text-4xl">Contact Us</span>
        </Heading>
      </div>
      <section className="container mx-auto lg:px-10 px-5 lg:py-20">
        <div className="flex justify-between lg:flex-row flex-col gap-8">
          <div className="lg:basis-7/12 basis-full relative">
            <div className="lg:w-[550px] w-[300px] mx-auto relative">
              <div className="absolute h-full w-full -rotate-[25deg] bg-primary/10 z-0"></div>
              <Image
                src={"/images/contact-us/contact-us.png"}
                width={648}
                height={632}
                alt="mixed-media-encaustic-workshop"
                className="relative lg:w-[550px] w-[300px] z-10"
              />
            </div>
          </div>
          <div className="lg:basis-5/12 basis-full space-y-12">
            <div className="space-y-2">
              <h2 className="font-display font-semibold text-lg uppercase text-primary">
                Hours
              </h2>
              <ul className="space-y-1">
                <li>Tuesday to Thursday (9am - 4pm)</li>
                <li>Friday to Saturday (9am - 3pm)</li>
                <li>Sunday (9am - 2pm)</li>
                <li>Monday (Closed)</li>
              </ul>
              <h2 className="font-display font-semibold text-lg uppercase text-primary">
                Events
              </h2>
              <p>
                Mixed Media Encaustic Workshop <br />
                26, August / 10am
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <div className="py-20">
        <Heading>
          <span className="lg:text-5xl text-4xl">Getting Here</span>
        </Heading>
      </div>
      <section className="container mx-auto lg:px-10 px-5 lg:py-20 py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4041.604863198638!2d28.296099557490578!3d-25.7919915427572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560a9e9380e39%3A0x3eed965050d1a255!2s593%20Jacqueline%20Dr%2C%20Garsfontein%2C%20Pretoria%2C%200042%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1696011075594!5m2!1sen!2s"
          width="100%"
          className="h-60 rounded-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="text-center mt-5 font-medium">
          593 Jacqueline Dr, Garsfontein, Pretoria, 0001, South Africa
        </p>
      </section>
    </WebLayout>
  );
}

function ContactForm() {
  return (
    <form action="" className="lg:w-96 w-80 space-y-4">
      <input
        type="text"
        className="w-full py-2 border-b focus:outline-none focus:border-primary"
        placeholder="Your Full Name"
      />
      <input
        type="email"
        className="w-full py-2 border-b focus:outline-none focus:border-primary"
        placeholder="Your Email"
      />
      <input
        type="text"
        className="w-full py-2 border-b focus:outline-none focus:border-primary"
        placeholder="Your Phone Number"
      />
      <select
        type="text"
        className="w-full py-2 border-b focus:outline-none focus:border-primary"
        placeholder="Message"
      >
        <option value="">Exhibition</option>
        <option value="">Art Classes & Studios</option>
        <option value="">Frameshop</option>
      </select>
      <input
        type="text"
        className="w-full py-2 border-b focus:outline-none focus:border-primary resize-none"
        placeholder="Message"
      />
      <button className="w-full py-2 mt-2 bg-primary rounded-lg text-white">
        Send
      </button>
    </form>
  );
}
