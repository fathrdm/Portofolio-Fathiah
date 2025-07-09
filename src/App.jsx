import DataImage from "./data";
function App() {

  return (
    <>
      <div className="hero grid grid-cols-1 sm:grid-cols-2 md:gap-10 gap-0 items-center relative">
        <div>
          <div className="ucapanHalo border  border-amber-200 flex items-center">
            <h4 className="text-white text-lg  drop-shadow-2xl">Haloo</h4>
            <hr className="border-t border-gray-300 my-4" />
          </div>
          <h1 className="text-white text-2xl font-bold">I Am Fathiah Nuraisyah Radam</h1>
          <h5 className="text-white">Senang berkenalan dengan anda, semoga kita sukses selalu. Dihindari dari orang orang yang jahat dan jadii kayaa.</h5>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="border ml-auto border-green-900 py-4 rounded-3xl" />
      </div>
    </>
  )
}

export default App
