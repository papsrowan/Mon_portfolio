"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Monitor, Smartphone, Zap } from "lucide-react";

const features = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building modern, responsive web applications with the latest technologies.",
    icon: <Monitor className="h-10 w-10 text-primary" />,
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps that work on iOS and Android.",
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    icon: <Code className="h-10 w-10 text-orange-500" />,
  },
  {
    id: "performance",
    title: "Performance",
    description: "Optimizing applications for speed and efficiency.",
    icon: <Zap className="h-10 w-10 text-green-400" />,
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left column: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="relative">
              <div className="h-80 w-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-blue-500 p-1">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-2xl rotate-12 bg-gradient-to-tr from-orange-500 to-yellow-300 opacity-80 -z-10 blur-sm" />
            </div>
          </motion.div>

          {/* Right column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("about.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("about.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {features.map((feature) => (
                  <Card key={feature.id} className="bg-background/50 backdrop-blur-sm border-muted">
                    <CardContent className="p-6 flex flex-col space-y-2">
                      <div className="mb-2">{feature.icon}</div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center text-primary hover:text-primary/80 transition-colors mt-4">
                <a href="#skills" className="font-medium flex items-center">
                  {t("skills.title")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
