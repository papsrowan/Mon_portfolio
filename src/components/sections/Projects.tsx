"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageProvider";
import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();
  const [visibleProjects, setVisibleProjects] = useState(2);

  const showMoreProjects = () => {
    setVisibleProjects(Math.min(visibleProjects + 2, PROJECTS.length));
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t("projects.title")}</h2>
          <div className="mt-1 h-1 w-20 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-muted hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-blue-600/80 flex items-center justify-center text-white text-4xl">
                    <span>📱</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <a
                        href="https://github.com/yannrowan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-1" asChild>
                      <a
                        href="https://example.com/project-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {t("projects.viewProject")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < PROJECTS.length && (
          <div className="flex justify-center mt-12">
            <Button onClick={showMoreProjects} variant="outline" size="lg" className="gap-2">
              {t("projects.viewAll")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
