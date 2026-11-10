
import founder from "../assets/images/Lavish_photo.jpeg";

const leadership = [
  {
    name: "Lavish Goyal",
    role: "Founder",
    department: "Management",
    description:
      "Leads the vision and direction of M9VENDS, bringing together engineering, research, and business thinking to develop practical automation solutions.",
    image: founder,
  },
  {
    name: "Durgesh Duvale",
    role: "Director",
    department: "Design & Development · Mechanical Team",
    description:
      "Contributes to the design and development direction of M9VENDS, with a focus on mechanical engineering and product design.",
  },
  {
    name: "Rishi Mishra",
    role: "Director",
    department: "Operations & Software Team",
    description:
      "Works across operational planning and software development, helping connect the company's technical work with its wider objectives.",
  },
];

const teamMembers = [
  {
    name: "Aanchal Naiwatia",
    role: "HR & Management",
    department: "HR and Management",
    description:
      "Supports people coordination, management activities, and the collaborative work that keeps the team moving forward.",
  },
  {
    name: "Sonali Kumari",
    role: "Software Team Intern",
    department: "Software",
    description:
      "Contributes to software development and the technical implementation of M9VENDS digital solutions.",
  },
  {
    name: "Sneha Singh",
    role: "Software Team Intern",
    department: "Software",
    description:
      "Works on frontend development and website experiences, helping translate the company's ideas into accessible digital interfaces.",
  },
  {
    name: "Soumyadeep Sharma",
    role: "R&D Intern",
    department: "Research & Development",
    description:
      "Contributes to research and development activities, exploring ideas and technical approaches that support product innovation.",
  },
  {
    name: "Shreyanshu Sahu",
    role: "Design & Mechanics Team Intern",
    department: "Design & Mechanics",
    description:
      "Contributes to mechanical design and product development, supporting the practical engineering behind M9VENDS solutions.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#A2EE29]" : "text-[#64816B]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-[#F8F5E9]" : "text-[#063D2B]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base ${
            light ? "text-[#D8DDCE]" : "text-[#647568]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function MemberCard({ member, dark = false }) {
  return (
    <article
      className={`rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/[0.06] hover:bg-white/[0.09]"
          : "border-[#063D2B]/10 bg-white hover:border-[#64816B]/40"
      }`}
    >
      {/* Consistent photo area for every team member */}
      <div className="mb-5 flex h-52 items-center justify-center overflow-hidden rounded-xl bg-[#E9EBDD]">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-contain object-center"
            loading="lazy"
          />
        ) : (
          <span className="text-3xl font-semibold tracking-wide text-[#64816B]">
            {initials(member.name)}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <div>
          <h3
            className={`text-lg font-semibold ${
              dark ? "text-[#F8F5E9]" : "text-[#063D2B]"
            }`}
          >
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#64816B]">
            {member.role}
          </p>
        </div>

        {member.department && (
          <p
            className={`text-xs font-medium uppercase tracking-wider ${
              dark ? "text-[#A8C9A9]" : "text-[#849486]"
            }`}
          >
            {member.department}
          </p>
        )}

        <p
          className={`pt-2 text-sm leading-6 ${
            dark ? "text-[#D8DDCE]" : "text-[#647568]"
          }`}
        >
          {member.description}
        </p>
      </div>
    </article>
  );
}

export default function TeamInfo() {
  return (
    <main className="overflow-hidden bg-[#F8F5E9]">
      {/* Page Introduction */}
      <section className="relative bg-[#063D2B] px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#A2EE29]">
            The People Behind M9VENDS
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#F8F5E9] sm:text-5xl lg:text-6xl">
            Different minds.
            <span className="block text-[#A8C9A9]">
              One shared direction.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#D8DDCE] sm:text-lg">
            Meet the people bringing together ideas, engineering, design, and
            technology to shape the future of smart vending and automation.
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
      </section>

      {/* Leadership */}
      <section className="px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Leadership"
            title="Guiding the vision"
            description="The leadership team brings together the direction, experience, and coordination behind M9VENDS."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-[#E9EBDD] px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Our Team"
            title="People who make it happen"
            description="A collaborative team working across software, management, research, design, and mechanics."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="bg-[#063D2B] px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Mentorship"
            title="Learning through guidance"
            description="We value the guidance, knowledge, and perspectives that help us approach challenges with clarity and keep improving our work."
            light
          />

          <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/[0.06] p-7 sm:p-9">
            <p className="text-base leading-8 text-[#D8DDCE]">
              Mentorship is an important part of our development journey.
              Through guidance and shared learning, we continue to strengthen
              our ideas, technical understanding, and approach to building
              practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborators & Partners */}
      <section className="px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Working Together"
            title="Collaborators & Partners"
            description="Building meaningful connections with people and organisations who share an interest in innovation, engineering, and practical technology."
          />

          <div className="rounded-2xl border border-[#063D2B]/10 bg-white p-7 sm:p-10">
            <p className="max-w-3xl text-sm leading-7 text-[#647568] sm:text-base">
              Collaboration helps bring different perspectives and expertise
              together. We believe that strong partnerships and open exchange
              of ideas play an important role in developing thoughtful,
              scalable automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[#E9EBDD] px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#64816B]">
            One Team · Shared Purpose
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[#063D2B] sm:text-4xl">
            Building better possibilities, together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#647568] sm:text-base">
            Every idea, contribution, and perspective helps shape what we
            create next.
          </p>
        </div>
      </section>
    </main>
  );
}