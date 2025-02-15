import Link from 'next/link';
import { Button } from './ui/button';
import { Search, ChevronDown } from 'lucide-react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

export default function Header() {
    return (
        <header className="border-b bg-white">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-12">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            BOXCARS
                        </Link>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Cars eg. Audi Q7"
                                className="pl-10 pr-4 py-2 border rounded-lg w-64 text-sm text-black placeholder:text-black"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-black text-sm hover:text-primary">Home</Link>
                        <Link href="/inventory" className="text-black text-sm hover:text-primary flex items-center">Inventory <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/blog" className="text-black text-sm hover:text-primary flex items-center">Blog <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/shop" className="text-black text-sm hover:text-primary flex items-center">Shop <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/pages" className="text-black text-sm hover:text-primary flex items-center">Pages <ChevronDown className="ml-1 h-4 w-4" /></Link>
                        <Link href="/contact" className="text-black text-sm hover:text-primary">Contact</Link>
                    </nav>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <IoPhonePortraitOutline className="h-4 w-4 text-primary mr-2" />
                            <span className="text-black text-sm">+75 965 04 4542</span>
                        </div>
                        <Button variant="ghost" className='text-black text-md'><HiOutlineUser />Sign in</Button>
                        <Button variant="outline" className="w-[120px] h-[40px] rounded-2xl border-2 text-black text-sm border-black px-[20px] py-[12px] gap-[10px]">Add Listing</Button>
                    </div>        
                </div>
            </div>
        </header>
    );
}