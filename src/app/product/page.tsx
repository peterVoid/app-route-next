"use client";
import { useEffect, useState } from "react";
import { getData } from "../services/products";
import Link from "next/link";

const ProductPage = () => {
  const [datam, setDatam] = useState([]);

  useEffect(() => {
    const fet = async () => {
      const a = await getData("http://localhost:3000/api/product");
      setDatam(a.data);
    };
    fet();
  }, []);

  return (
    <div className="mx-auto flex flex-col justify-between px-20">
      <h1 className="text-3xl font-bold underline text-center mt-5">
        Product Page
      </h1>
      <div className="grid grid-cols-4  mt-5 items-center ">
        {datam.length > 0 &&
          datam.map((item: any) => (
            <div key={item.id}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg object-cover h-96 w-full"
                    src={item.image}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                      {item.title}
                    </h5>
                  </a>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $ {item.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
                <Link
                  href={`/product/detail/${item.id}`}
                  className="w-full bg-white  px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 border border-blue-300 rounded-lg"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
