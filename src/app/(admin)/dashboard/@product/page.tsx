"use client";

import { useState } from "react";

const ProductPageAdmin = () => {
  const [status, setStatus] = useState("");
  const revalidatingCars = async () => {
    const dt = await fetch("/api/revalidate?tag=cars&secret=2938729372987", {
      method: "GET",
    });

    if (!dt.ok) {
      setStatus("Revalidating Failed");
    } else {
      const a = await dt.json();
      if (a.revalidate) {
        setStatus("Revalidating Success");
      } else {
        setStatus("Revalidating Failed");
      }
    }
  };
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      {status}
      <button
        onClick={revalidatingCars}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update Product
      </button>
    </div>
  );
};

export default ProductPageAdmin;
