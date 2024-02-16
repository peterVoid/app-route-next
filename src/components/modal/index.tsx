"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const rourer = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      rourer.back();
    }
  };
  return (
    <div
      ref={overlay}
      onClick={close}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
}
