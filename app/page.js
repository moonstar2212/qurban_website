"use client"

import { useState } from 'react';
import { ArrowRight, AlertCircle, Check, Menu, X } from 'lucide-react';


export default function QurbanLandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const qurbanPackages = [
        {
            id: 1,
            title: 'Domba X',
            price: 'Rp 4.100.000',
            image: '/assets/img/domba.jpg',
            features: [
                'Berat 37-40 kg',
                'Sehat dan berkualitas',
                'Gratis pengiriman'
            ]
        },
        {
            id: 2,
            title: 'Domba A',
            price: 'Rp 3.650.000',
            image: '/assets/img/domba.jpg',
            features: [
                'Berat 33-36 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 3,
            title: 'Domba B',
            price: 'Rp 3.250.000',
            image: '/assets/img/domba.jpg',
            features: [
                'Berat 29-32 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 4,
            title: 'Domba C',
            price: 'Rp 2.850.000',
            image: '/assets/img/domba.jpg',
            features: [
                'Berat 25-28 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 5,
            title: 'Kambing X',
            price: 'Rp 4.150.000',
            image: '/assets/img/kambing.jpg',
            features: [
                'Berat 37-40 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 6,
            title: 'Kambing A',
            price: 'Rp 3.750.000',
            image: '/assets/img/kambing.jpg',
            features: [
                'Berat 37-40 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 7,
            title: 'Kambing B',
            price: 'Rp 3.350.000',
            image: '/assets/img/kambing.jpg',
            features: [
                'Berat 29-32 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 8,
            title: 'Kambing C',
            price: 'Rp 2.950.000',
            image: '/assets/img/kambing.jpg',
            features: [
                'Berat 25-28 kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 9,
            title: 'Sapi Ras Bali dan Madura A',
            price: 'Rp 35.800.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 500+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 10,
            title: 'Sapi Ras Bali dan Madura B',
            price: 'Rp 32.500.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 450+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 11,
            title: 'Sapi Ras Bali dan Madura C',
            price: 'Rp 28.800.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 400+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 12,
            title: 'Sapi Ras Bali dan Madura D',
            price: 'Rp 25.000.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 350+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 13,
            title: 'Sapi Ras Bali dan Madura E',
            price: 'Rp 22.000.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 300+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 14,
            title: 'Sapi Ras Bali dan Madura F',
            price: 'Rp 18.100.000',
            image: '/assets/img/sapi.jpg',
            features: [
                'Berat 250+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 15,
            title: 'Sapi Simental/Limousin/Pegon X5',
            price: 'Rp 53.500.000',
            image: '/assets/img/sapi2.jpg',
            features: [
                'Berat 750+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 16,
            title: 'Sapi Simental/Limousin/Pegon X4',
            price: 'Rp 49.500.000',
            image: '/assets/img/sapi2.jpg',
            features: [
                'Berat 700+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 17,
            title: 'Sapi Simental/Limousin/Pegon X3',
            price: 'Rp 46.500.000',
            image: '/assets/img/sapi2.jpg',
            features: [
                'Berat 650+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 18,
            title: 'Sapi Simental/Limousin/Pegon X2',
            price: 'Rp 42.900.000',
            image: '/assets/img/sapi2.jpg',
            features: [
                'Berat 600+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
        {
            id: 19,
            title: 'Sapi Simental/Limousin/Pegon X1',
            price: 'Rp 39.350.000',
            image: '/assets/img/sapi2.jpg',
            features: [
                'Berat 550+- kg',
                'Sehat dan berkualitas',
                'Biaya pengiriman terpisah'
            ]
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="font-bold text-2xl text-green-600">QurbanMudah</h1>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2">Beranda</a>
                            <a href="#packages" className="text-gray-700 hover:text-green-600 px-3 py-2">Pilihan Hewan Qurban</a>
                            <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2">Tentang Kami</a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2">Kontak</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#home" className="block text-gray-700 hover:text-green-600 px-3 py-2">Beranda</a>
                            <a href="#packages" className="block text-gray-700 hover:text-green-600 px-3 py-2">Pilihan Hewan Qurban</a>
                            <a href="#about" className="block text-gray-700 hover:text-green-600 px-3 py-2">Tentang Kami</a>
                            <a href="#contact" className="block text-gray-700 hover:text-green-600 px-3 py-2">Kontak</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 bg-gradient-to-br from-green-500 to-green-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Qurban Mudah dan Amanah</h1>
                            <p className="text-lg md:text-xl mb-8">Layanan qurban terpercaya dengan hewan yang sehat dan berkualitas. Mudah, praktis, dan sesuai syariat.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="https://wa.me/628123456789?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" target="_blank" rel="noopener noreferrer">
                                <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">Pesan Sekarang</button>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-10 md:mt-0">
                            <img
                                src="/assets/img/cow.jpg"
                                alt="Qurban Hero"
                                className="rounded-lg shadow-xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Announcement */}
            <div className="bg-yellow-100 p-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <AlertCircle size={20} className="text-yellow-700 mr-2" />
                    <p className="text-yellow-700 text-center">Segera pesan hewan qurban Anda! Pendaftaran ditutup 7 hari sebelum Hari Raya Idul Adha.</p>
                </div>
            </div>

            {/* Packages Section */}
            <section id="packages" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hewan Qurban Kami</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Pilih paket qurban sesuai dengan kebutuhan dan budget Anda. Semua hewan qurban kami terjamin kesehatannya dan sesuai syariat.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {qurbanPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                                <div className="relative">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-bl-lg font-medium">
                                        {pkg.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                                    <ul className="space-y-2 mb-6">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center">
                                        Pesan Sekarang
                                        <ArrowRight size={16} className="ml-2" />
                                    </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <img
                                src="/assets/img/sheep.jpg"
                                alt="About Our Qurban Service"
                                className="rounded-lg shadow-lg mx-auto"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tentang Layanan Qurban Kami</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                QurbanMudah adalah layanan qurban terpercaya dengan pengalaman lebih dari 10 tahun. Kami berkomitmen menyediakan hewan qurban berkualitas dan melaksanakan prosesi qurban sesuai syariat Islam.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Kami bekerja sama dengan peternak lokal terpercaya untuk menyediakan hewan qurban yang sehat dan berkualitas. Semua hewan kami melalui pemeriksaan kesehatan yang ketat sebelum prosesi qurban.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Pelanggan</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Apa kata mereka yang telah menggunakan layanan qurban kami?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">Prosesnya sangat mudah dan transparan. Saya bisa memantau prosesi qurban melalui video dan foto yang dikirimkan. Sangat amanah.</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl mr-4">A</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Ahmad Fadli</h4>
                                    <p className="text-gray-500">Jakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">Kualitas hewan qurbannya sangat baik. Distribusinya juga sangat luas hingga ke daerah-daerah terpencil yang membutuhkan.</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl mr-4">S</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Siti Aisyah</h4>
                                    <p className="text-gray-500">Bandung</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <p className="text-gray-600 mb-4">Sudah 3 tahun berturut-turut saya berqurban melalui layanan ini. Pelayanannya sangat profesional dan sesuai syariat.</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl mr-4">R</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Rahmat Hidayat</h4>
                                    <p className="text-gray-500">Surabaya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
                        <p className="text-lg max-w-3xl mx-auto">Ada pertanyaan seputar layanan qurban kami? Jangan ragu untuk menghubungi kami.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 text-gray-900">
                            <h3 className="text-xl font-bold mb-4">Formulir Kontak</h3>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                                    <input type="text" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">No. Telepon</label>
                                    <input type="tel" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Pesan</label>
                                    <textarea className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 h-32"></textarea>
                                </div>

                                <button onClick={() => window.open("https://wa.me/6281234567890?text=Halo%20saya%20tertarik", "_blank")} className="w-full bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700 transition duration-300">Kirim Pesan</button>
                            </form>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-gray-900">
                            <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 font-medium">Alamat</p>
                                        <p className="text-gray-600">Jl. Qurban No. 123, Jakarta Selatan</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 font-medium">Telepon</p>
                                        <p className="text-gray-600">+62 812 3456 7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 font-medium">Email</p>
                                        <p className="text-gray-600">info@qurbanmudah.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 font-medium">Jam Operasional</p>
                                        <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00</p>
                                        <p className="text-gray-600">Sabtu: 08.00 - 12.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h2 className="font-bold text-xl mb-4">QurbanMudah</h2>
                            <p className="text-gray-400 mb-4">Layanan qurban terpercaya dengan pengalaman lebih dari 10 tahun. Mudah, praktis, dan sesuai syariat.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Beranda</a></li>
                                <li><a href="#packages" className="text-gray-400 hover:text-white transition duration-300">Paket Qurban</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">Tentang Kami</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Kontak</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Kebijakan</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Syarat & Ketentuan</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Kebijakan Privasi</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.44 14.22h-1.717V12.44h-1.65v-1.848h1.65v-1.216c0-1.51.913-2.335 2.274-2.335.647 0 1.2.048 1.363.07v1.58h-.936c-.734 0-.876.347-.876.858v1.043h1.75l-.227 1.848h-1.523v3.781z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.02 14.873a.5.5 0 01-.7.052 9.356 9.356 0 01-1.326-.812 13.32 13.32 0 01-2.517-2.455 10.951 10.951 0 01-1.52-2.638 3.382 3.382 0 01-.31-1.34c.038-.567.286-1.074.717-1.444a1.16 1.16 0 01.8-.276c.097 0 .196.008.293.024a.492.492 0 01.391.26c.236.42.454.848.647 1.287a.512.512 0 01-.186.594l-.542.379a.25.25 0 00-.088.302c.16.348.384.668.652.942a6.57 6.57 0 001.742 1.513.267.267 0 00.315-.043l.525-.432a.513.513 0 01.625-.082c.438.242.874.498 1.286.775a.493.493 0 01.195.638c-.15.437-.326.85-.528 1.24a1.18 1.18 0 01-.954.666 2.8 2.8 0 01-.241.01zm-2.632-9.982a4.782 4.782 0 00-1.575.265.5.5 0 00-.2.732.477.477 0 00.658.115c.355-.176.736-.265 1.117-.265a2.315 2.315 0 012.333 2.333.5.5 0 101 0 3.316 3.316 0 00-3.333-3.333zm-.667 1.5a.5.5 0 00-.168.968 1.319 1.319 0 011.167 1.167.5.5 0 00.991-.134 2.317 2.317 0 00-1.833-1.833.489.489 0 00-.158-.168zM12 7.5a4.5 4.5 0 00-4.5 4.5.5.5 0 001 0 3.5 3.5 0 017 0 .5.5 0 001 0 4.5 4.5 0 00-4.5-4.5z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.077c-.147.12-.302.234-.466.34a6.751 6.751 0 01-3.035.583 6.751 6.751 0 01-3.035-.583 4.93 4.93 0 01-.466-.34l-.326-.276a5.002 5.002 0 01-.624-.7 5.064 5.064 0 01-.37-.544 5.004 5.004 0 014.298-7.557c.397 0 .79.048 1.174.144a4.99 4.99 0 013.123 2.156 5.003 5.003 0 01-.372 5.778l-.327.275zm-2.98-9.577a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-800 pt-8">
                        <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} QurbanMudah. Hak Cipta Dilindungi.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}