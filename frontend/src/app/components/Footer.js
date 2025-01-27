import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
      <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* Left */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">NEXROOF</div>
            </Link>
            <p>
              Nairobi-Namanga Road, KENYA
            </p>
            <span className="font-semibold">nexroof@contact.com</span>
            <span className="font-semibold">+254743557325</span>
            <div className="flex gap-6">
              <Image src="/facebook.png" alt="" width={16} height={16}/>
              <Image src="/x.png" alt="" width={16} height={16}/>
              <Image src="/instagram.png" alt="" width={16} height={16}/>
              <Image src="/tiktok.png" alt="" width={16} height={16}/>
            </div>
          </div>
          {/* Center */}
          <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">BRANDS</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Nexroof Tile</Link>
                <Link href="">Felicity</Link>
                <Link href="">Huawie</Link>
                <Link href="">Solar Pro</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">SHOP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Roof Tiles</Link>
                <Link href="">Solar</Link>
                <Link href="">Battery</Link>
                <Link href="">Accessories</Link>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium tex-lg">SUBSCRIBE</h1>
            <p>Subsciribe to our Newseletter</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
              />
              <button className="w-1/4 bg-red-500 text-white">JOIN</button>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items- mt-16">
          <div className="">@2025 Nexroof Shop</div>
        </div>      
      </div>
    )
}

export default Footer