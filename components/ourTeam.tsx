import Image from 'next/image'
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string
  role: string
  email: string
  phone: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Courtney Henry",
    role: "Software Development Manager",
    email: "henry@boxcars.com",
    phone: "+30 595 59 291 2",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Jerome Bell",
    role: "Software Tester",
    email: "jerome@boxcars.com",
    phone: "+30 595 59 291 3",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Arlene McCoy",
    role: "Software Developer",
    email: "arlene@boxcars.com",
    phone: "+30 595 59 291 4", 
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    email: "jenny@boxcars.com",
    phone: "+30 595 59 291 5",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=500"
  },
  {
    name: "Robert Fox",
    role: "Frontend Developer",
    email: "robert@boxcars.com",
    phone: "+30 595 59 291 6",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&h=500"
  }
]

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    return (
      <div className="bg-card shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
          <p className={cn("text-sm text-muted-foreground mt-1 font-medium")}>{member.role}</p>
        </div>
        <div className="relative h-48 w-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              {member.email}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {member.phone}
            </p>
          </div>
        </div>
      </div>
    )
  }
  

export default function OurTeam() {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
