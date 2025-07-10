import DataImage from "./data";
function App() {

  return (
    <>
      <div className="hero mt-10  border md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center ">
        <div>
          <div className="ucapanHalo flex items-center">
            <h4 className="text-white ">Selamat datang🤗</h4>
          </div>
          <h1 className="text-white text-5xl  font-bold">Saya, Fathiah Nuraisyah Radam</h1>
          <h5 className="text-base text-gray-400">Senang berkenalan dengan anda, semoga kita sukses selalu. Dihindari dari orang orang yang jahat dan jadii kayaa.</h5>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto items-center border" />
      </div>
    </>
  )
}

export default App
