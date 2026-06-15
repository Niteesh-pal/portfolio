import { motion } from "framer-motion";
import experience from "@/data/Experience";
import { useEffect, useState } from "react";
import CertificatePreview from "./certificatePreview";
import { Cert } from "@/types/certificate";
export default function Experience() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>
      <div className=" flex flex-col gap-1">
        {experience.map((exp) => {
          const { company, role, date_from, date_to, location, projects, achievement } = exp;
          console.log(achievement);
          return (
            <div className="my-5">
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                  <h3 className="text-2xl font-bold text-foreground">{company}</h3>
                  <p className="text-primary font-mono text-sm">{`${date_from} – ${date_to} · ${location}`}</p>
                </div>
                <p className="text-muted-foreground text-sm font-mono">{role}</p>
              </div>
              <div className="space-y-12 mt-8 border-l border-border pl-6 md:pl-8 ml-2">
                {projects.map((project, idx) => {
                  const {title,techStack,description,bullets } = project
                  return (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[33px] md:-left-[41px] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                      <h4 className="text-xl font-bold text-foreground mb-1">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 font-mono text-sm">Tech Stack: {techStack.join(" · ")}</p>
                      <p className="text-muted-foreground mb-4 font-mono text-sm">{project.description}</p>
                      <ul className="space-y-3">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-muted-foreground flex gap-3">
                            <span className="text-primary mt-1.5 opacity-60 shrink-0">&#9657;</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div>
            { achievement && <div className="space-y-2 mt-4">
                  <div className="text-xl font-bold">Achievement</div>
                  <div className="ml-2 pl-6">
                    <h3 className="space-y-2.5 border-b border-border">{achievement.title}</h3>
                    <div className="flex flex-row justify-start flex-wrap gap-3 p-2">
                      <motion.div
                        whileHover={{ cursor: 'pointer', border: '1px solid yellow' }}
                        onClick={() => setSelected(achievement)}
                        transition={{ duration: .2 }}
                        className="overflow-hidden rounded-xl border-2 border-transparent hover:border-yellow-400 transition-colors">
                        <img
                          src={`${import.meta.env.BASE_URL}certificates/${achievement.mediaUrl}`}
                          alt={achievement.title}
                          className="max-h-[10vh] object-contain rounded-lg"
                          onError={e => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                          data-testid="img-cert"
                />
                      </motion.div>
                      <p className="text-muted-foreground ">{achievement.description}</p>
                    </div>
                  </div>
                </div>
            }
              </div>
            </div>
          )

        })}

      </div>
      <CertificatePreview
  selected={selected}
  setSelected={setSelected}
/>
    </motion.section>
  );
}
