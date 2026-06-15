import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import LeetCodeWidget from "@/components/LeetCodeWidget";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">About</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-card border border-border rounded-lg p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-lg" />
          <div className="space-y-4 text-muted-foreground leading-relaxed pl-2">
            <p>
              I'm a <span className="text-foreground font-medium">Full Stack Software Engineer</span> with
              professional experience building and shipping production systems. My work has spanned{" "}
              <span className="text-foreground font-medium">high-performance REST API development</span>,{" "}
              <span className="text-foreground font-medium">scalable frontend architecture</span>, and{" "}
              <span className="text-foreground font-medium">event-driven backend pipelines</span> — including 
              SQL query optimization across large datasets, automated data ingestion workflows, 
              reusable React component systems,
              and CI/CD pipeline automation with Jenkins and Docker.
            </p>
            <p>
              Beyond work, I've built end-to-end features independently — designing
              <span className="text-primary"> dynamic audit systems </span>
              architecting{" "}
              <span className="text-primary"> non-blocking background pipelines </span>and setting up observability dashboards with <span className="text-primary"> Grafana </span> 
              Comfortable with <span className="text-primary">TypeScript</span> and <span className="text-primary">JavaScript</span>, 
              with hands-on experience across
              <span className="text-primary"> Apache Kafka</span>,
              <span className="text-primary"> PostgreSQL</span>,
              <span className="text-primary"> Docker</span>,
              <span className="text-primary"> AWS EC2</span> ,
              and<span className="text-primary"> Linux</span>.
              On the frontend, I work with <span className="text-primary">React.js</span> and <span className="text-primary">Next.js</span>
              — delivering polished, production-ready interfaces alongside robust backend systems.
            </p>
            <p className="text-foreground">
              Open to <span className="font-medium">Software Engineer / SDE / Full Stack / Backend Engineer roles</span> at product-led
              companies — with a strong focus on scalable systems,
              clean architecture, and end-to-end ownership.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Quick Facts</span>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { label: "Role", value: "Software Engineer" },
                { label: "Focus", value: "Frontend · Backend · APIs · DevOps · Cloud" },
                { label: "Degree", value: "B.Tech CSE, 2025 " },
                { label: "CGPA", value: "7.78 / 10" },
                { label: "Location", value: "Noida, India" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-3">
                  <span className="text-muted-foreground font-mono shrink-0">{label}</span>
                  <span className="text-foreground text-right text-xs leading-relaxed">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-3">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Languages</span>
            <div className="space-y-2">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Hindi", level: "Fluent" },
              ].map(({ lang, level }) => (
                <div key={lang} className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">{lang}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs border border-primary/30 bg-primary/10 text-primary font-mono">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <div id="leetcode">
            <LeetCodeWidget />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
