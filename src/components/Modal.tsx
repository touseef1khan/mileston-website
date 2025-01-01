import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  cart: Product[];
  form: {
    name: string;
    email: string;
    address: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, cart, form, handleInputChange }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative max-h-[80vh] overflow-y-auto transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl" >
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-black mb-6 text-center">Checkout</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-black mb-4">Order Summary</h3>
          {cart.length === 0 ? (
            <p className="text-center text-black">Your cart is empty</p>
          ) : (
            <div>
              {cart.map((product) => (
                <div key={product.id} className="flex items-center mb-6 border-b pb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="h-24 w-24 object-cover rounded-lg border mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-orange-500">{product.title}</h4>
                    <p className="text-black">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-black">Quantity: {product.quantity}</p>
                    <p className="text-black font-semibold">Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="text-2xl font-bold text-black">
                Total: ${calculateTotal()}
              </div>
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <textarea
              name="address"
              value={form.address}
              onChange={handleInputChange}
              placeholder="Address"
              rows={4}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-orange-300 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold hover:bg-orange-400"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;