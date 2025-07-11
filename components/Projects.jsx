import { listProyek } from "../src/data";
import { listTools } from "../src/data";
import Website from "../assets/tools/web.png"
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
  const toolId = 8;
  const selectedTool = listTools.find((tool) => tool.id === toolId);

  const toolId15 = 15;
  const selectedTool15 = listTools.find((tool) => tool.id === toolId15);
  return (

    <div className="grid mt-25 grid-cols-1 gap-5" id="projects">
      <div className="grid grid-cols-1 gap-5">
        <h1 className="text-4xl text-center text-green-500 font-bold">PROYEK</h1>
        <h3 className="text-sm text-center text-white">Saya membuat dan berpartisipasi dalam beberapa proyek berikut</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listProyek.map((tool) => (
          <div key={tool.id} className="bg-zinc-800 rounded-lg hover:shadow-xl transition duration-300 flex flex-col h-full">

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
                  {tool.deskrispi}
                </div>
              )}
              {/*deretan tools yang digunakan*/}
              <div className="flex flex-wrap gap-2 text-sm">
                {tool.tools.map((tool, index) => (
                  <div key={index} className="bg-green-900 rounded-sm w-fit p-2 h-fit text-white">
                    {tool}
                  </div>
                ))}
              </div>

              {/* Tombol ke websitenya */}
              <div className="grid grid-cols-1 gap-3 mt-auto xl:grid-cols-2">

                {/* github */}

                <a href={tool.git} className="bg-transparant text-center w-full text-white p-3 rounded-md border hover:bg-zinc-600">
                  <div className="flex">
                    <img src={selectedTool.gambar} alt="" className="w-7 h-7 " />
                    <button className="w-full text items-center ">
                      Github
                    </button>
                  </div>
                </a>

                {/* Web */}
                <a href={tool.link} className="bg-transparant text-center border-green-700 w-full text-white p-3 rounded-md border hover:bg-green-700">
                  <div className="flex">
                    <img src={Website} alt="" className="w-7 h-7  border-green-900" />
                    <button className="w-full border-green-700 text items-center ">
                      Kunjungi
                    </button>
                  </div>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects