import { listTools } from "../src/data";

const Tools = () => {
    return (

        <div className="grid mt-25 grid-cols-1 gap-5">
            <div>
                <h1 className="text-xl text-center text-white">Projects</h1>
                <h3 className="text-sm text-center text-white">Bebera projek yang </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {listTools.map((tool) => (
                    <div key={tool.id} className="items-center px-2 gap-2 flex border border-green-900 rounded shadow">
                        <img src={tool.gambar} alt={tool.nama} className="w-10 h-10 " />
                        <div className="grid grid-cols-1 py-2">
                            <h3 className="text-md font-bold text-white">{tool.nama}</h3>
                            <p className="text-sm text-gray-500">{tool.ket}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Tools