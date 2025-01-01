import Link from "next/link";
import Image from "next/image"; 
import hero from "../images/hero.png"; 
const Hero = () => {
    return (
        <section className="h-screen relative bg-gradient-to-r from-slate-950 to-slate-800 text-black p-8 overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src={hero} 
                    alt="Hero image" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100} 
                    priority 
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative py-20 md:py-32">
                    {/* Hero Content */}
                    <div className="relative z-20 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl ">
                            Welcome to Our Meri Dukan
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl sm:max-w-3xl mx-auto ">
                        Explore a wide variety of products and enjoy a smooth shopping experience with us. Discover your favorites today!
                        </p>

                        {/* Shop Now Button */}
                        <div className="mt-8">
                            <Link
                                href="/products"
                                className="inline-block bg-orange-300 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-orange-400"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;