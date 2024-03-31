import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Wear from "./components/Wear";
import NewArrivals from "./components/NewArrivals";
import Carti from "./components/Carti";
import News from "./components/News";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <BestSeller />
        <Wear />
        <NewArrivals />
        <Carti />
        <News />
      </main>
    </>
  );
}
