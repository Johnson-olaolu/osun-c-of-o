import Image from "next/image";
import Header from "./components/Header";
import Jumbotrun from "./components/Jumbotrun";
import Register from "./components/Register";
import Benefits from "./components/Benefits";
import Users from "./components/Users";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Jumbotrun />
      <Register />
      <Benefits />
      <Users />
      <Footer />
    </div>
  );
}
