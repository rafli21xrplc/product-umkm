import Image from "next/image";
import Navbar from "./Navbar";
import Header from "./Header";
import Sponsor from "./Sponsor";
import About from "./About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Header />
      <Sponsor />
      <About />
    </main>
  );
}

