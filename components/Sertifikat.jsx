import { listProyek } from "../src/data";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Sertifikat = () => {
  return (
    <div className="overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-smooth px-4 py-4">
      {listProyek.map((tool, index) => (
        <div
          key={index}
          className="snap-start flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden shadow-md"
        >
          <img
            src= {tool.gambar}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Sertifikat;
