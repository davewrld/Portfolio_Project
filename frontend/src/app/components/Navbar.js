import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";


const Navbar  = () => {
    return (
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">NEXROOF</div>
        </Link>
        <Menu/>
        </div>

        <div className="hidden md:flex itmes-center justify-between gap-8 h-full">
          <div className="w-1/3 xl:w-1/2 flex items-center gap">
           <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png"
                alt="" width={300}
                height={300}
              /> 
              <div className="text-2xl tracking-wide"></div>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div> 

          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar/>
            <NavIcons/>
          </div>

        </div>

      </div>
    );
};

export default Navbar;