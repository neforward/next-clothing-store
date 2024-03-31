import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <BestSeller />
      </main>
    </>
  );
}
