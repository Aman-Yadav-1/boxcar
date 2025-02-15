'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-4 sm:space-x-12">
                        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary mr-4">
                            BOXCARS
                        </Link>

                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search Cars eg. Audi Q7"
                                className="pl-10 pr-4 py-2 border rounded-lg w-32 sm:w-48 text-xs sm:text-sm text-black placeholder:text-black"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 sm:space-x-8">
                        <nav className="hidden sm:flex space-x-4">
                            <Link href="/" className="text-black text-sm hover:text-primary ml-2">Home</Link>
                            <Link href="/inventory" className="text-black text-sm hover:text-primary flex items-center">Inventory <ChevronDown className="ml-1 h-4 w-4" /></Link>
                            <Link href="/blog" className="text-black text-sm hover:text-primary flex items-center">Blog <ChevronDown className="ml-1 h-4 w-4" /></Link>
                            <Link href="/shop" className="text-black text-sm hover:text-primary flex items-center">Shop <ChevronDown className="ml-1 h-4 w-4" /></Link>
                            <Link href="/pages" className="text-black text-sm hover:text-primary flex items-center">Pages <ChevronDown className="ml-1 h-4 w-4" /></Link>
                            <Link href="/contact" className="text-black text-sm hover:text-primary">Contact</Link>
                        </nav>
                        <div className="hidden sm:flex items-center space-x-4">
                            <span className="text-black text-xs sm:text-sm flex items-center"><IoPhonePortraitOutline className="h-4 w-4 text-primary mr-2" /> +75965044542</span>
                        </div>
                        <Button variant="ghost" className='text-black text-xs sm:text-sm'><HiOutlineUser />Sign in</Button>
                        <Button variant="outline" className="w-[80px] sm:w-[120px] h-[40px] rounded-2xl border-2 text-black text-xs sm:text-sm border-black px-[10px] sm:px-[20px] py-[12px] gap-[10px]">Add Listing</Button>
                        <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="sm:hidden border-t bg-white">
                    <nav className="flex flex-col items-start p-4 space-y-4">
                        <Link href="/" className="text-black text-sm hover:text-primary">Home</Link>
                        <Link href="/inventory" className="text-black text-sm hover:text-primary flex items-center">Inventory <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/blog" className="text-black text-sm hover:text-primary flex items-center">Blog <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/shop" className="text-black text-sm hover:text-primary flex items-center">Shop <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/pages" className="text-black text-sm hover:text-primary flex items-center">Pages <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/contact" className="text-black text-sm hover:text-primary">Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}