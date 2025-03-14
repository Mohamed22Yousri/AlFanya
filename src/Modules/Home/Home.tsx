import CardSwiper from "./Category";
import Header from "./Header";
import Services from "./Services";
import Features from "./Features";
import NewProducts from "./NewProduct";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <CardSwiper />
      <Features />
      <NewProducts/>

    </>
  );
};

export default Home;
