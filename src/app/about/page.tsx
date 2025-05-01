import AboutKabinet from "@/components/AboutKabinet"

const kabinetData = [
    {
        nama: "AKSI BERSAMA",
        imgURL: "/img/about1.jpg"
    }
]

export default function AboutPage() {
    return (
        <div className="px-12 mt-10 space-y-8">

            {/* Judul di luar section */}
            <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    VISI DAN MISI
                </h2>
            </div>

            <section className="text-white py-4 px-4">
                <div className="bg-gradient-to-tr from-[#00633C] to-[#00633C]/65 text-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 space-y-8">
                    <div className="text-center">

                        {/* VISI */}
                        <div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                VISI
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                                Kolaborasi Reformasi Untuk Kebermanfaatan Mahasiswa USU serta Masyarakat
                            </p>
                        </div>

                        {/* MISI */}
                        <div className="space-y-4 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                MISI
                            </h3>
                            <div className="space-y-4 text-justify max-w-4xl mx-auto text-white">
                                <p className="text-base sm:text-lg md:text-xl">
                                    Mewujudkan internal BEM USU yang kuat, sinergis, harmonis, religius dan berkualitas melalui pengembangan sumber daya manusia.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl">
                                    Meningkatkan kolaborasi, keseriusan, dan solidaritas antar ORMAWA yang berprinsip pada koordinasi dan evaluasi serta mengadvokasi penyampaian informasi melalui media kreatif ke seluruh masyarakat mahasiswa USU.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl">
                                    Melaksanakan tugas pengelolaan BEM USU yang transparan, akuntabel dan aksesibilitas bagi seluruh mahasiswa.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl">
                                    Memfasilitasi masyarakat mahasiswa USU dalam pengembangan akademik, minat dan bakat di kancah universitas, nasional, dan internasional.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl">
                                    Mewujudkan BEM USU sebagai lembaga yang memperjuangkan hak mahasiswa dan aktif merespon isu-isu strategis serta mewujudkan pengabdian masyarakat yang tepat sasaran dan berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    KABINET
                </h2>
            </div>
            <AboutKabinet kabinet={kabinetData} />
            <div className="mb-10"></div>


        </div>


    );
}
