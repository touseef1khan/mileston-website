import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-whitee">Meri Dukan</h3>
            <p className="text-gray-300 text-sm">
              Discover the best deals and exclusive products at E-Store. Shop confidently with excellent customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-100">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">

                <FaFacebook className='text-2xl'/>
              </Link>
              {/* Twitter */}
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
              <FaTwitter className='text-2xl'/>
              </Link>
              {/* Instagram */}
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
              <FaInstagram className='text-2xl'/>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Meri Dukan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;