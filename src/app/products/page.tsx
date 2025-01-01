"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ProductsPage = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetching API For Products Data
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const viewSingleProduct = (productId: number) => {
        router.push(`/products/${productId}`); // Navigate to the single product page
    };

    return (
        <div className="bg-orange-300 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-black">Our Products</h1>
                {!data ? (
                    <div className="text-center">
                        <p className="text-3xl text-black">Loading products....</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-slate-50 duration-300 flex flex-col justify-between"
                            >
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={400}
                                        height={400}
                                        className="object-contain h-32 w-32 rounded-xl transition-transform duration-500 transform hover:scale-110"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold mb-2 text-orange-500 transition-colors duration-300">{product.title}</h2>
                                <p className="text-lg text-black font-medium mb-2">${product.price.toFixed(2)}</p>

                                {/* Centered button */}
                                <div className="mt-auto flex justify-center">
                                    <button
                                        onClick={() => viewSingleProduct(product.id)}
                                        className="bg-orange-300 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition-colors duration-300 transform hover:scale-105"
                                    >
                                        View Product
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;