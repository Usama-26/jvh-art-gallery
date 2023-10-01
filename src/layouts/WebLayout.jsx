import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { lora, display } from "@/fonts";
export default function WebLayout({ children }) {
  return (
    <main className={`${lora.variable} ${display.variable} font-serif`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
