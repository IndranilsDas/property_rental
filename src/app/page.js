import Image from "next/image";
import Nav from "@/components/navbar";
import Titlescreen from "@/components/titlescreen";
import Destinations from "@/components/destinations";
import Finance from "@/components/finance";
import TrendingSection from "@/components/trending";
import BestRated from "@/components/best_rated";
import StayLikeStars from "@/components/stars";
import Footer from "@/components/footer";
import Banner1 from "@/components/banner1";

export default function Home() {
  return (
    <section>
    <Nav/>
    <Titlescreen/>
    <Destinations/>
    <Finance/>
    <TrendingSection/>
    <BestRated/>
    <Banner1/>
    <StayLikeStars/>
    <Footer/>


    </section>
  );
}
