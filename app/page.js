"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="font-bold tracking-wide text-2xl text-center p-3">
          {count}
        </div>
        <div className="w-96 flex flex-row h-24 hover:cursor-pointer">
          <button
            className="border-2 border-white basis-1/2"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="border-2 border-white basis-1/2"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
