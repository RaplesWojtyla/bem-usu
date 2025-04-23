import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-white text-gray-900">
			{/* Hero Section */}
			<section
				className="relative text-white text-center py-40 px-6"
				style={{ backgroundImage: "url('/img/gambar kabinet.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
			>
				<div className="absolute inset-0 bg-black opacity-60"></div>
				<div className="relative z-10 max-w-4xl mx-auto">
					<h1 className="text-5xl font-extrabold tracking-wide leading-tight">KABINET AKSI BERSAMA</h1>
					<h2 className="text-4xl font-bold mt-2">BEM USU 2024/2025</h2>
					<p className="mt-4 text-lg max-w-3xl mx-auto">Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat</p>
					<button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-lg font-medium">Selengkapnya</button>
				</div>

				{/* Statistik Box Floating */}
				<div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-wrap justify-center gap-6 w-full px-4 max-w-5xl mx-auto z-20">
					<div className="bg-white border border-gray-200 p-6 shadow-lg rounded-lg text-center w-64">
						<div className="text-cyan-800 text-3xl font-extrabold mb-2">Kolaborasi</div>
						<p className="text-gray-700 font-medium">Kolaborasi Terbaik</p>
					</div>
					<div className="bg-white border border-gray-200 p-6 shadow-lg rounded-lg text-center w-64">
						<div className="text-cyan-800 text-3xl font-extrabold mb-2">Reformasi</div>
						<p className="text-gray-700 font-medium">Perubahan Terbaik</p>
					</div>
					<div className="bg-white border border-gray-200 p-6 shadow-lg rounded-lg text-center w-64">
						<div className="text-cyan-800 text-3xl font-extrabold mb-2">Solidaritas</div>
						<p className="text-gray-700 font-medium">Solidaritas Terbaik</p>
					</div>
				</div>
			</section>

			{/* Tentang BEM */}
			<section className="bg-[#FFFFFF] text-white py-8 px-4">
				<div className="bg-[#00633C] text-white rounded-2xl p-24 space-y-8">
					<div className="flex items-center justify-between">
						<h2 className="text-xl md:text-4xl font-bold">Tentang</h2>
					</div>

					<div className="flex flex-col lg:flex-row justify-between items-center gap-16">
						<div className="max-w-lg text-left">
							<p className="text-base md:text-lg leading-relaxed">
								Badan Eksekutif Mahasiswa (BEM) adalah organisasi yang penting di kampus karena berperan sebagai penghubung antara mahasiswa dan pihak universitas.
								BEM memberikan wadah bagi mahasiswa untuk aktif dalam berbagai kegiatan kampus, baik akademis maupun non-akademis.
							</p>
							<img src="/img/logo kabinet.png" alt="Logo Kabinet" className="w-80 h-80 mt-8 ml-16" />
						</div>

						<div className="max-w-lg text-left">
							<img src="/img/bem_usu.png" alt="Logo BEM USU" className="w-80 h-80 mb-8 ml-24" />
							<p className="text-base md:text-lg leading-relaxed">
								Badan Eksekutif Mahasiswa (BEM) adalah organisasi yang penting di kampus karena berperan sebagai penghubung antara mahasiswa dan pihak universitas.
								BEM memberikan wadah bagi mahasiswa untuk aktif dalam berbagai kegiatan kampus, baik akademis maupun non-akademis.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Trending News */}
			<section className="bg-[#FFFFFF] text-white py-8 px-4">
				<div className="hover:bg-[#ffffff] transition duration-500  bg-[#ffffff]  text-black rounded-2xl p-24 space-y-8 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.25)]">

					<div className="flex items-center justify-between">
						<h2 className="text-xl md:text-4xl font-bold">Trending News</h2>
						<button className="text-sm text-black hover:scale-105 flex items-center gap-1">
							VIEW ALL <span>↗</span>
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
						<div className="relative h-128 max-w-2xl rounded-xl overflow-hidden hover:scale-105 transition duration-100">
							<img src="/img/news.png" alt="News 1" className="w-full h-full object-cover " />
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
								<div className="bg-white text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-1">CRYPTO</div>
								<h3 className="text-lg text-white font-semibold leading-snug">The Growing Need For Effective Password Management</h3>
								<div className="text-xs text-white mt-2 flex items-center gap-4">
									📅 27 AUGUST, 2024 <span>🕒 20 MINS</span>
								</div>
							</div>
						</div>

						<div className="relative h-128 max-w-2xl rounded-xl overflow-hidden hover:scale-105 transition duration-100">
							<img src="/img/news2.png" alt="News 2" className="w-full h-full object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
								<div className="bg-white text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-1">NEWS</div>
								<h3 className="text-lg text-white font-semibold leading-snug">Write Better CSS By Borrowing Ideas From JavaScript Functions</h3>
								<div className="text-xs text-white mt-2 flex items-center gap-4">
									📅 27 AUGUST, 2024 <span>🕒 20 MINS</span>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						<div className="flex gap-3 items-start hover:bg-green-500 transition duration-100 hover:-translate-y-2 rounded-md group" >
							<img src="/img/news2.png" alt="Small news" className="w-24 h-24 object-cover rounded-md"/>
							<div className="py-2">
								<div className="bg-white group-hover:bg-green-400 text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-1">BITCOIN</div>
								<p className="text-sm font-semibold ">Accessible Target Sizes Cheatsheet</p>
								<div className="text-xs  text-black mt-1">📅 27 AUGUST, 2024</div>
							</div>
						</div>

						<div className="flex gap-3 items-start hover:bg-green-500 transition duration-100 hover:-translate-y-2 rounded-md group" >
							<img src="/img/news2.png" alt="Small news" className="w-24 h-24 object-cover rounded-md" />
							<div className="py-2">
								<div className="bg-white group-hover:bg-green-400 text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-1">MARKET</div>
								<p className="text-sm font-semibold ">Color Mechanics In UI Kits</p>
								<div className="text-xs  text-black mt-1">📅 27 AUGUST, 2024</div>
							</div>
						</div>

						<div className="flex gap-3 items-start hover:bg-green-500 transition duration-100 hover:-translate-y-2 rounded-md group" >
							<img src="/img/news2.png" alt="Small news" className="w-24 h-24 object-cover rounded-md" />
							<div className="py-2">
								<div className="bg-white group-hover:bg-green-400 text-black text-xs px-2 py-1 rounded-sm w-fit font-semibold mb-1">ECONOMY</div>
								<p className="text-sm font-semibold ">How To Design An Effective User</p>
								<div className="text-xs  text-black mt-1">📅 27 AUGUST, 2024</div>
							</div>
						</div>
					</div>
				</div>

			</section>
		</main>

	);
}
