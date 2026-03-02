const experiences = [
  {
    period: "2026 — Present",
    role: "Officer",
    company: "VFS Global France - UAE",
    description:
      "Leading visa application center worldwide, currently a trainee officer in-charge customer visa inquiries for France",
    technologies: ["Classified"],
    current: true,
  },
  {
    period: "2024 — 2024",
    role: "Network Operations Center Intern",
    company: "Radius Telecom, Inc. - PH",
    description:
      "Intern analyst in-charge of network monitoring, topology creation, database management, and customer service",
    technologies: ["PuTTy", "SolarWinds", "SalesForce", "Bash", "Cisco devices"],
    current: false,
  },
  {
    period: "2019 — 2025",
    role: "Bachelor of Science in Electronics Engineering student",
    company: "Rizal Technological University - PH",
    description:
      "College life to pursue the degree of an ECE, learned technical fundamentals, complicated mathematics, telecommunications, electronics and embedded systems",
    technologies: ["Micro-controllers", "Micro-pc", "Embedded C", "Python", "Bare Metal", "Circuitry"],
    current: false,
  },
];

export const Experience = () =>{
  return (
    <section 
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      <div 
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span>Career Journey</span>
          <h2>
            Experience that <span> keeps rising up.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
