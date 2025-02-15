import Image from 'next/image';

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
          <p className="text-sm text-muted-foreground mt-1 font-medium">{member.role}</p>
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
              {member.email}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
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