import { listProyek } from "../src/data";
import { User } from "lucide-react";

const Projects = () => {
  return (

    <div className="grid mt-25 grid-cols-1 gap-5">
      <div>
        <h1 className="text-xl text-center text-white">Tools</h1>
        <h3 className="text-sm text-center text-white">Tools yang saya gunakan untuk membuat project </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listProyek.map((tool) => (
          <div key={tool.id} className="bg-zinc-800 rounded-lg overflow-hiddenshadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">

            {/* gambar */}
            <img src={tool.gambar} alt={tool.nama} className="w-full rounded-t-lg" />

            {/* container deskripsi */}
            <div className="flex flex-col flex-grow border gap-2 p-2">
              {/* nama */}
              <h3 className="text-md font-bold text-white">{tool.nama}</h3>
              {/* Posisi */}
              <div className="flex flex-wrap gap-2">
                <User className="text-white"></User>
                <p className="text-white ">{tool.desk}</p>
              </div>

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