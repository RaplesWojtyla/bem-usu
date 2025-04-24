import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-2 md:gap-4">
                <Image 
                    src="/img/bem_usu.png" 
                    alt="Logo BEM USU" 
                    width={64}
                    height={64}
                    className="h-12 w-12 md:h-16 md:w-16"
                />
                <Image 
                    src="/img/logo kabinet.png" 
                    alt="Logo Kabinet" 
                    width={64}
                    height={64}
                    className="h-12 w-12 md:h-16 md:w-16"
                />
                <div className="leading-tight">
                    <p className="text-sm md:text-xl font-bold tracking-wide">KABINET AKSI</p>
                    <p className="text-sm md:text-xl font-bold tracking-wide">BERSAMA</p>
                </div>
            </div>

            <nav className="hidden md:flex flex-1 justify-center">
                <div className="flex gap-4 lg:gap-8 text-base font-medium">
                    <Link href="/" className="hover:text-blue-500 transition px-2">Beranda</Link>
                    <Link href="/about" className="hover:text-blue-500 transition px-2">Tentang</Link>
                    <Link href="/news" className="hover:text-blue-500 transition px-2">Berita</Link>
                    <Link href="/contact" className="hover:text-blue-500 transition px-2">Kontak</Link>
                    <Link href="/cabinet" className="hover:text-blue-500 transition px-2">Kabinet</Link>
                </div>
            </nav>
        </header>
    )
}