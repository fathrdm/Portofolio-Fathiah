import { lisSertifikat } from "../src/data";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Sertifikat = () => {
    return (

        <div className="grid grid-cols-1 mt-25" id="sertif">
            <div className="grid grid-cols-1 gap-5">
                <h1 className="text-4xl text-center text-green-500 font-bold">Sertifikat</h1>
                <h3 className="text-sm text-center text-white">Beberapa sertifikat yang telah saya dapatkan</h3>
            </div>
            <div className="overflow-x-auto flex space-x-4 snap-x snap-mandatory scroll-smooth px-4 py-4">
                {lisSertifikat.map((ser) => (
                    <div
                        key={ser.id}
                        className="snap-start flex-shrink-0 w-72 h-48
  overflow-hidden shadow-md"
                    >
                        <img
                            src={ser.gambar}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sertifikat;
