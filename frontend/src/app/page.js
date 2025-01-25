import Image from "next/image";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";

const Home = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="tex-2xl">Featured Products</h1>
        <ProductList/>
      </div>
    </div>
  )
}

export default Home;