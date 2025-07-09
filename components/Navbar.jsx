import { useState, useEffect } from "react";


const Navbar = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar items-center py-7 flex justify-between text-white">
            <div className="logo">
                <h1 className="text-3xl font-bold ">
                    Portofolio
                </h1>
            </div>
            <ul className={`menu flex items-center gap-5 md:static fixed left-1/2 -translate-x-1/2
                    md:translate-x-0 md:opacity-100 transition-all duration-300 ease-in-out
                    ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li className="text-lg font-medium border border-transparent hover:border-green-700 rounded-md p-2">
                    <a href="">Beranda</a>
                </li>
                <li className="text-lg font-medium border border-transparent hover:border-green-700 rounded-md p-2">
                    <a href="">Tentang</a>
                </li>
                <li className="text-lg font-medium border border-transparent hover:border-green-700 rounded-md p-2">
                    <a href="">Proyek</a>
                </li>
                <li className="text-lg font-medium border border-transparent hover:border-green-700 rounded-md p-2">
                    <a href="">Kontak</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar

// pakai 'rafce' biar langsung eksport dari components

//text-3xl	Ukuran teks besar (sekitar 30px)

// ===H1 Classname===//////////////////////////////////////////////////////////////
// font-bold	Membuat teks tebal
// bg-white	Latar belakang putih
// text-black	Warna teks hitam
// p-1	Padding kecil di semua sisi (0.25rem atau 4px)
// md:bg-transparent	Pada layar ukuran medium ke atas, background jadi transparan
// md:text-white	Pada layar ukuran medium ke atas, warna teks menjadi putih