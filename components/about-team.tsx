import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type TeamMember = {
  name: string
  role: string
  description: string
  image: string
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export function AboutTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "Vivesh",
      role: "Team Lead & Full Stack Developer",
      description: "Led the development of ZenZone, focusing on architecture and backend implementation. Passionate about creating impactful mental health solutions.",
      image: "https://avatars.githubusercontent.com/u/12345678",
      socials: {
        github: "https://github.com/vivvesh",
        linkedin: "https://linkedin.com/in/vivvesh",
        twitter: "https://twitter.com/vivvesh"
      }
    },
    {
      name: "Subham",
      role: "Frontend Developer & UI/UX Designer",
      description: "Designed and implemented the beautiful, intuitive interface of ZenZone. Focused on creating a seamless user experience.",
      image: "https://avatars.githubusercontent.com/u/23456789",
      socials: {
        github: "https://github.com/subham",
        linkedin: "https://linkedin.com/in/subham",
        email: "mailto:subham@example.com"
      }
    },
    {
      name: "Ritesh",
      role: "Backend Developer & DevOps",
      description: "Ensured the reliability and scalability of ZenZone's backend services. Handled deployment and infrastructure.",
      image: "https://avatars.githubusercontent.com/u/34567890",
      socials: {
        github: "https://github.com/ritesh",
        linkedin: "https://linkedin.com/in/ritesh"
      }
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>👋</span>
            <span>Meet The Team</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            The Minds Behind ZenZone
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're a passionate team of developers who came together during a hackathon to create a meaningful mental health solution. 
            Our goal is to make mental health support accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {member.description}
                </p>
                
                <div className="flex space-x-3">
                  {member.socials.github && (
                    <Link href={member.socials.github} target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link href={member.socials.linkedin} target="_blank" className="text-gray-500 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link href={member.socials.twitter} target="_blank" className="text-gray-500 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  )}
                  {member.socials.email && (
                    <Link href={member.socials.email} className="text-gray-500 hover:text-red-500 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 p-1 rounded-full mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Built with ❤️ during BUILDVERSE</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">May 2025</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-100 dark:border-amber-900/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We created ZenZone to break down barriers to mental health support. Our platform combines technology with empathy to provide accessible tools for everyone's mental wellbeing journey.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
            >
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
