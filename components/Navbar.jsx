import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const Navlinks = () => {
    return (
        <>
            <li className="text-lg font-medium border border-transparent hover:text-green-700  md:hover:border-green-700 rounded-md p-2">
                <a href="#">Beranda</a>
            </li>
            <li className="text-lg font-medium border border-transparent hover:text-green-700  md:hover:border-green-700 rounded-md p-2">
                <a href="#about">Tentang</a>
            </li>
            <li className="text-lg font-medium border border-transparent hover:text-green-700  md:hover:border-green-700 rounded-md p-2">
                <a href="#tools">Tools</a>
            </li>
            <li className="text-lg font-medium border border-transparent hover:text-green-700  md:hover:border-green-700 rounded-md p-2">
                <a href="#projects">Proyek</a>
            </li>
            <li className="text-lg font-medium border border-transparent hover:text-green-700  md:hover:border-green-700 rounded-md p-2">
                <a href="#sertif">Sertifikat</a>
            </li>
        </>
    );
};

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [isScroll, setScroll] = useState(false);


    const toggleNavbar = () => {
        setActive(!active);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={`navbar sticky top-0 items-center py-5 md:py-3 px-3 md:px-0 flex justify-between text-white relative ${isScroll ? "bg-white/5 backdrop-blur-3xl" : ""}`}>            {/* Logo */}
            <div className="logo">
                <a href="" className="text-3xl font-bold text-green-600">Portofolio</a>
            </div>

            {/* Toggle Button */}
            <div className="toggle md:hidden">
                <button onClick={toggleNavbar}>
                    {active ? <X></X> : <Menu></Menu>}
                </button>
            </div>

            {/* Menu */}
            <ul
                className={`menu md:flex items-center gap-5 absolute left-0 md:static z-20 w-full md:w-auto bg-zinc-800  md:bg-transparent py-4 
                transition-all duration-300 ease-in-out ${active ? "top-20 opacity-100" : "-top-96 opacity-0"
                    } md:opacity-100 md:top-auto`}>
                <Navlinks />
            </ul>
        </div>
    );
};

export default Navbar;


{/* <div className= "navbar sticky top-0 items-center py-7 flex justify-between text-white relative "> */ }


// pakai 'rafce' biar langsung eksport dari components

//text-3xl	Ukuran teks besar (sekitar 30px)

// ===H1 Classname===//////////////////////////////////////////////////////////////
// font-bold	Membuat teks tebal
// bg-white	Latar belakang putih
// text-black	Warna teks hitam
// p-1	Padding kecil di semua sisi (0.25rem atau 4px)
// md:bg-transparent	Pada layar ukuran medium ke atas, background jadi transparan
// md:text-white	Pada layar ukuran medium ke atas, warna teks menjadi putih