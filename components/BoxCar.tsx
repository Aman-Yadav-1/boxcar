import Image from 'next/image';
import Birdeye from '@/app/images/birdeye.png';
import Trustpilot from '@/app/images/trustpilot.png';
import Google from '@/app/images/google.png';

export default function BoxCar() {
    return (
        <div className="container mx-auto max-w-7xl py-12">
            <div className="flex flex-col px-16 py-16 md:flex-row items-center gap-8 bg-[#405FF2] rounded-2xl p-8">
                {/* Left Content */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h1 className="text-white text-3xl md:text-4xl font-bold">Who is BoxCar</h1>
                    <p className="text-white/90 text-base md:max-w-md">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                    </p>
                </div>

                {/* Right Content - Review Cards */}
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Trustpilot Card */}
                    <ReviewCard 
                        title="Great"
                        image={Trustpilot}
                        imageAlt="Trustpilot"
                    />

                    {/* Google Card */}
                    <ReviewCard 
                        title="Great"
                        image={Google}
                        imageAlt="Google Reviews"
                    />

                    {/* Birdeye Card */}
                    <ReviewCard 
                        title="Great"
                        image={Birdeye}
                        imageAlt="Birdeye"
                    />
                </div>
            </div>
        </div>
    );
}

interface ReviewCardProps {
    title: string;
    image: any;
    imageAlt: string;
}

const ReviewCard = ({ title, image, imageAlt }: ReviewCardProps) => (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-[#00B67A] p-1.5">
                    <span className="text-white text-2xl">★</span>
                </div>
            ))}
            
        </div>
        <p className="text-sm text-gray-500">Based on 5,801 reviews</p>

        <div className="relative h-8 w-32 mb-3">
            <Image 
                src={image} 
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 128px) 100vw, 128px"
            />
        </div>
    </div>
);
