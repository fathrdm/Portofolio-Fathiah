import { listProyek } from "../src/data";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const Projects = () => {

  const [isOpen, setIsOpen] = useState(null);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const aktifID = (id) => {
    setIsOpen(isOpen == id ? null : id)
  }

  return (

    <div className="grid mt-25 grid-cols-1 gap-5">
      <div>
        <h1 className="text-4xl text-center text-white">Tools</h1>
        <h3 className="text-sm text-center text-white">Tools yang saya gunakan untuk membuat project </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listProyek.map((tool) => (
          <div key={tool.id} className="bg-zinc-800 rounded-lg hover:shadow-[2px_2px_2px_2px_#d1d3d4] transition duration-300 flex flex-col h-full">

            {/* gambar */}
            <img src={tool.gambar} alt={tool.nama} className="w-full rounded-t-lg" />

            {/* container deskripsi */}
            <div className="flex flex-col flex-grow  gap-2 p-2">

              {/* nama */}
              <h3 className="text-xl font-bold text-green-600">{tool.nama}</h3>

              {/* Posisi */}
              <div className="flex flex-wrap items-center gap-2">
                <User className="text-white"></User>
                <p className="text-white text-sm">{tool.desk}</p>
              </div>

              {/* Tombol Deskripsi */}
              <div className="flex justify-between">
                <p className="text-white ">Deskripsi</p>
                <button
                  onClick={() => aktifID(tool.id)}
                  className=" text-white border rounded  hover:bg-zinc-700 focus:outline-none">
                  {isOpen === tool.id ? <ChevronUp></ChevronUp> : <ChevronDown></ChevronDown>}
                </button>
              </div>

              {isOpen && (
                <div className={`transition-all text-white text-sm duration-500 ease-in-out overflow-hidden ${isOpen === tool.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                  Proyek ini dibangun dengan Bootstrap 5, menggunakan Animate On Scroll, preloader, dan responsif untuk semua perangkat.
                </div>
              )}
              {/*deretan tools yang digunakan*/}
              <div className="flex flex-wrap gap-2 text-sm">
                {tool.tools.map((tool, index) => (
                  <div key={index} className="border border-green-900 rounded-sm w-fit p-2 h-fit text-white">
                    {tool}
                  </div>
                ))}
              </div>

              {/* Tombol ke websitenya */}
              <button className="bg-green-900 ml-auto mt-auto text-white p-3 rounded-md hover:bg-green-500">
                Kunjungi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects