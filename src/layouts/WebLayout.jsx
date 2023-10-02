import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNavbar from "@/components/NavbarMobile";
import { lora, display } from "@/fonts";
export default function WebLayout({ children }) {
  return (
    <main className={`${lora.variable} ${display.variable} font-serif`}>
      <Header />
      <MobileNavbar />
      {children}
      <Footer />
    </main>
  );
}
