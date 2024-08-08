'use server'
import Header from "@/app/component/header/Header";
import Herosection from "@/app/component/herosection/Herosection";
import Footer from "./component/footer/Footer";
import Mainsection from "./component/mainsection/page";


export default async function Home() {

  return (
    <>
      <Header />
      <Herosection />
      <Mainsection/>
      <Footer />
    </>
  );
}


