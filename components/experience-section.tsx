"use client";

import { useState } from "react";
import { ChevronUpDown } from "@/components/icons";
import { experience } from "@/lib/portfolio";

export function ExperienceSection() {
  const [open, setOpen] = useState(0);

  return (
    <div className="row">
      <div className="container flush">
        <div className="experience-list">
          {experience.map((job, index) => {
            const isOpen = open === index;
            const headId = `job-head-${index}`;
            const bodyId = `job-body-${index}`;

            return (
              <article
                key={`${job.company}-${job.period}`}
                className={`job${isOpen ? " open" : ""}`}
              >
                <button
                  type="button"
                  className="job-head"
                  id={headId}
                  aria-expanded={isOpen}
                  aria-controls={bodyId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="job-logo" aria-hidden="true">
                    {job.company.charAt(0)}
                  </span>
                  <span className="job-name">
                    <b>
                      {job.company}
                      {job.kind && <span className="job-tag">{job.kind}</span>}
                      {job.current && (
                        <span
                          className="dot"
                          role="img"
                          aria-label="Current role"
                        />
                      )}
                    </b>
                    <span className="job-title">{job.title}</span>
                    <span className="job-when-mobile">
                      {job.period}
                      {job.location ? ` · ${job.location}` : ""}
                    </span>
                  </span>
                  <span className="job-when">
                    {job.period}
                    {job.location && <span>{job.location}</span>}
                  </span>
                  <ChevronUpDown className="chev" />
                </button>
                {isOpen && (
                  <div
                    className="job-body"
                    id={bodyId}
                    role="region"
                    aria-labelledby={headId}
                  >
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {job.tech && (
                      <div className="chips">
                        {job.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
