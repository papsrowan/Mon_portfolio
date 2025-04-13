"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageProvider";
import { SKILLS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiFlutter, SiGit, SiGithub,
  SiDocker, SiFigma
} from "react-icons/si";
import { Code } from "lucide-react"; // Importing Code icon from Lucide

// Icon mapping
const iconMap = {
  html5: SiHtml5,
  css3: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  flutter: SiFlutter,
  git: SiGit,
  github: SiGithub,
  vscode: Code, // Using Lucide's Code icon as a replacement
  docker: SiDocker,
  figma: SiFigma,
};

export default function Skills() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderSkillCards = (category: keyof typeof SKILLS) => {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
      >
        {SKILLS[category].map((skill) => {
          const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <motion.div key={skill.name} variants={item}>
              <Card className="border border-muted hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-3xl">
                    {IconComponent && <IconComponent className="h-10 w-10" />}
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t("skills.title")}</h2>
          <div className="mt-1 h-1 w-20 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                <SiReact className="h-5 w-5" />
              </span>
              {t("skills.frontend")}
            </h3>
            {renderSkillCards("frontend")}
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-500/10 text-blue-500 p-2 rounded-lg mr-3">
                <SiNodedotjs className="h-5 w-5" />
              </span>
              {t("skills.backend")}
            </h3>
            {renderSkillCards("backend")}
          </div>

          {/* Mobile */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-orange-500/10 text-orange-500 p-2 rounded-lg mr-3">
                <SiFlutter className="h-5 w-5" />
              </span>
              {t("skills.mobile")}
            </h3>
            {renderSkillCards("mobile")}
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-green-500/10 text-green-500 p-2 rounded-lg mr-3">
                <SiGit className="h-5 w-5" />
              </span>
              {t("skills.tools")}
            </h3>
            {renderSkillCards("tools")}
          </div>
        </div>
      </div>
    </section>
  );
}
