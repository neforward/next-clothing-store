import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Wear from "./components/Wear";
import NewArrivals from "./components/NewArrivals";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <BestSeller />
        <Wear />
        <NewArrivals />
      </main>
    </>
  );
}
