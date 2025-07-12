import DataImage from "./data";
import { listKontak } from "../src/data";

export default function App() {

  return (
    <>

      <div className="hero mt-10  md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center ">
        <div className="grid grid-cols-1 gap-5">
          <h4 className="text-green-500 ">Selamat datang🤗</h4>
          <h1 className="text-white text-5xl  font-bold">Halo, Saya Fathiah Nuraisyah Radam</h1>
          <h5 className="text-base text-gray-400">Saya memiliki ketertarikan dalam dunia teknologi terutama dalam bidang Pengembangan Game dan Desain</h5>
          <div className="flex flex-wrap gap-5">
            {listKontak.map((k) => (
              <a href={k.link}>
                <div className="flex border fit-content rounded-3xl p-2 bg-green-500">
                  <img src={k.icon} alt="" className="w-7 h-7 " />
                </div>

              </a>

            ))}
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto items-center " />
      </div>
    </>
  )
}

// export default App
