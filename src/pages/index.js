import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className="text-center text-3xl font-bold my-6">Gallery Showcase</h1>
      <Gallery />
      <Footer/>
    </div>
  );
}
