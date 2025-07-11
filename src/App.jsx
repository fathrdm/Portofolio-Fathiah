import DataImage from "./data";
function App() {

  return (
    <>
      <div className="hero mt-10  md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center ">
        <div className="grid grid-cols-1 gap-5">
          <h4 className="text-green-500 ">Selamat datang🤗</h4>
          <h1 className="text-white text-5xl  font-bold">Halo, Saya Fathiah Nuraisyah Radam</h1>
          <h5 className="text-base text-gray-400">Saya memiliki ketertarikan dalam dunia teknologi terutama dalam terutama dalam bidang Game Development
          </h5>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto items-center " />
      </div>
    </>
  )
}

export default App
