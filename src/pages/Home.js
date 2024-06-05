import Hero from "../components/Hero";
import "../assets/styles/Navbar.css";
import Navbar from "../components/Navbar";
import Campaign from "../components/Campaign";
import Features from "../components/Features";
import Company from "../components/Companies";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <Hero />
      </div>
      <Campaign />
      <Features />
      <Company />
      <News />
    </>
  );
}
