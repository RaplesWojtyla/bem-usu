import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-10 px-4">
            {/* Logo Bagian Atas */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <Image src="/img/bem_usu.png" alt="BEM Logo" width={65} height={65} />
                <Image src="/img/logo kabinet.png" alt="Kabinet Logo" width={65} height={65} />
            </div>

            <hr className="border-gray-300 mb-8" />

            {/* Grid Konten Footer */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Reach Us */}
                <div>
                    <h3 className="font-semibold mb-4">Reach us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined">phone_in_talk</span>
                            <span>+1012 3456 789</span>
                        </li>
                        <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined">mail</span>
                            <span>demo@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined">location_on</span>
                            <span>
                                132 Dartmouth Street Boston,<br />
                                Massachusetts 02156 United States
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Nav-link */}
                <div>
                    <h3 className="font-semibold mb-4">Nav-link</h3>
                    <ul className="space-y-3">
                        <li><Link href="." className="hover:underline">Home</Link></li>
                        <li><Link href="#" className="hover:underline">About</Link></li>
                        <li><Link href="/news" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Contact</Link></li>
                        <li><Link href="#" className="hover:underline">Cabinet</Link></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-3">
                        <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:underline">Terms & Services</Link></li>
                        <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
                        <li><Link href="#" className="hover:underline">Refund Policy</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="#" className="hover:underline">Techlabz Keybox</Link></li>
                        <li><Link href="#" className="hover:underline">Downloads</Link></li>
                        <li><Link href="#" className="hover:underline">Forum</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm font-semibold">
                COPYRIGHT © 2025 BEM USU - All Right Reserved.
            </div>
        </footer>

    )
}
