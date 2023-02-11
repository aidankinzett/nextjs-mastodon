"use client";

import { useState } from "react";

export default function Home() {
  const [server, setServer] = useState("aidan.social");

  return (
    <div className="container mx-auto mt-10  flex flex-col items-center space-y-4">
      <p className="text-xl">View Public Timeline</p>
      <p>Enter server url</p>
      <input
        className="border-2 border-slate-400 rounded p-2"
        type="text"
        value={server}
        onChange={(e) => setServer(e.target.value)}
      />
      <button
      // make this look like a button
        className="border-2 border-slate-400 rounded p-2 px-5s"
        
        
        onClick={() => {
          window.location.href = `/${server}/public/local`;
        }}
      >
        Go
      </button>
    </div>
  );
}
