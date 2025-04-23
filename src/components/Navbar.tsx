import Link from 'next/link'
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

export const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <img src="/img/bem_usu.png" alt="BEM Logo" className="h-16" />
                <img src="/img/logo kabinet.png" alt="Kabinet Logo" className="h-16" />
                <div className="leading-tight">
                    <p className="text-xl font-bold tracking-wide">KABINET AKSI</p>
                    <p className="text-xl font-bold tracking-wide">BERSAMA</p>
                </div>
            </div>

            <nav className="flex-1  flex justify-center">
                <div className="flex space-x-8 text-lg font-medium">
                    <Link href="#" className="hover:text-blue-500 transition px-4">Home</Link>
                    <Link href="#" className="hover:text-blue-500 transition px-4">About</Link>
                    <Link href="#" className="hover:text-blue-500 transition px-4">News</Link>
                    <Link href="#" className="hover:text-blue-500 transition px-4">Contact</Link>
                    <Link href="#" className="hover:text-blue-500 transition ">Kabinet</Link>
                </div>
            </nav>
        </header>
    )
}
