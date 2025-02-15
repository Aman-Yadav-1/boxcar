import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Blog", href: "/blog" },
        { text: "FAQs", href: "/faq" },
        { text: "Finance", href: "/finance" },
        { text: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { text: "Get in Touch", href: "/get-in-touch" },
        { text: "Help Center", href: "/help" },
        { text: "Live Chat", href: "/chat" },
        { text: "How it Works", href: "/how-it-works" }
      ]
    },
    {
      title: "Our Brands",
      links: [
        { text: "Aston Martin", href: "/brands/aston-martin" },
        { text: "Audi", href: "/brands/audi" },
        { text: "Bentley", href: "/brands/bentley" },
        { text: "BMW", href: "/brands/bmw" },
        { text: "Bugatti", href: "/brands/bugatti" },
        { text: "Ferrari", href: "/brands/ferrari" },
        { text: "Jaguar", href: "/brands/jaguar" },
        { text: "Lamborghini", href: "/brands/lamborghini" }
      ]
    },
    {
      title: "Vehicle Types",
      links: [
        { text: "Pickup", href: "/types/pickup" },
        { text: "Coupe", href: "/types/coupe" },
        { text: "Family MPV", href: "/types/mpv" },
        { text: "Sedan", href: "/types/sedan" },
        { text: "SUVs", href: "/types/suv" },
        { text: "Sport Coupe", href: "/types/sport-coupe" },
        { text: "Convertible", href: "/types/convertible" },
        { text: "Wagon", href: "/types/wagon" }
      ]
    }
  ];

  const saleHours = [
    "Monday - Friday: 09:00AM - 09:00PM",
    "Saturday: 09:00AM - 07:00PM",
    "Sunday: Closed"
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="px-8 py-12 bg-white max-w-8xl mx-10">
      <div className="mt-24 text-center mb-28">
        <h3 className="text-2xl font-bold">Join BoxCar</h3>
        <p className="mt-2 text-gray-600">
          Receive pricing updates, shopping tips & more!
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="max-w-xs placeholder:text-black"
          />
          <Button 
            className="bg-[#405FF2] text-white rounded-xl hover:bg-[#405FF2]/90"
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-8 mb-8 mt-36">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Sale Hours</h3>
          <ul className="space-y-2 mb-6">
            {saleHours.map((hours, index) => (
              <li key={index} className="text-gray-600 text-sm">{hours}</li>
            ))}
          </ul>
          
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <Link key={index} href={href} className="text-gray-600 hover:text-primary">
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-600">© 2025 BoxCar. All rights reserved.</div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms & Conditions</Link>
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
