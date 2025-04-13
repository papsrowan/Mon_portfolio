"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageProvider";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Yann Rowan
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {t("hero.description")}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">{t("nav.home")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">{t("contact.title")}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/papsrowan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/etame-eboa-a58878282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:yann@scriptify.cm"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>{t("footer.copyright").replace("2024", currentYear.toString())}</p>
          <p className="mt-4 md:mt-0">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
