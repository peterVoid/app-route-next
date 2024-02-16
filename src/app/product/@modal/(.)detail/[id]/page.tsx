"use client";
import { getData } from "@/app/services/products";
import Modal from "@/components/modal";
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
    <Modal>
      <img src={datam.image} alt={datam.title} />
      <div className="flex flex-col justify-start items-start">
        <h2>{datam.title}</h2>
      </div>
    </Modal>
  );
}
