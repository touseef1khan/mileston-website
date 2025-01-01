import Image from 'next/image';
import AboutImage from "@/images/About.png";  // Update with your actual image path

const AboutUs = () => {
    return (
        <section className="bg-orange-300 py-20 px-6 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Section - Text */}
                    <div className="text-center lg:text-left space-y-6">
                        <h2 className="text-4xl font-extrabold text-white leading-tight">
                            About Us
                        </h2>
                        <p className="text-lg text-black font-medium">
                        Welcome to Meri Dukan, your ultimate destination for premium products at unbeatable prices. We pride ourselves on offering a seamless and enjoyable shopping experience backed by exceptional customer service. Our mission is to make online shopping simple convenient and hassle-free ensuring that you find exactly what you are looking for with ease and satisfaction. Whether you re browsing for everyday essentials or something special we are here to provide you with the best in quality and service. Shop with us today and experience the difference!                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="relative">
                        <div className="relative group">
                            <Image
                                src={AboutImage}
                                alt="About Us Image"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;