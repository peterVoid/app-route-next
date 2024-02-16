"use client";
import { getData } from "@/app/services/products";
import { useEffect, useState } from "react";

export default function DetailPorductPage(props: any) {
  const { params } = props;
  const [datam, setDatam] = useState<any>([]);

  useEffect(() => {
    const fet = async () => {
      const a = await getData(
        `http://localhost:3000/api/product?id=${params.id}`
      );
      setDatam(a.data);
    };
    fet();
  }, []);

  return (
    <>
      <div className="flex  items-center h-[96vh] flex-col border-collapse relative">
        <img src={datam.image} alt={datam.title} />
        <div className="flex flex-col justify-start items-start">
          <h2>{datam.title}</h2>
        </div>
      </div>
    </>
  );
}
