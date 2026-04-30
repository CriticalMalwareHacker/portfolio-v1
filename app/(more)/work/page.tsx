import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function WorkPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold pb-2">Featured Work</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        A selection of projects focusing on AI integration, full-stack development, and user-centric design.
      </p>

      <div className="space-y-16 mb-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">ActuallyFair</h2>
              <Badge variant="secondary" className="text-xs font-normal">
                Software Development Intern
              </Badge>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://actuallyfair.in" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ExternalLink size={16} /> View Site
              </a>
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Worked as a software development intern focused on full-stack development and AI automation. Built production API workflows, shipped React UI from Figma designs, and developed AI services around chat, document parsing, and content automation.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Work:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex items-center gap-2">Built RESTful API endpoints and Node.js microservices</li>
              <li className="flex items-center gap-2">Developed AI chatbot and document parsing services</li>
              <li className="flex items-center gap-2">Automated UGC workflows using n8n</li>
              <li className="flex items-center gap-2">Converted Figma designs into responsive React features</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {["Node.js", "React", "OpenAI", "Mistral", "n8n", "REST APIs", "Figma"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">Quizzora</h2>
              <Badge variant="secondary" className="text-xs font-normal">
                Full Stack AI Platform
              </Badge>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://quizzora-supa.vercel.app" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href="https://github.com/CriticalMalwareHacker/quizzora-supa" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={16} /> Repository
              </a>
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A comprehensive, AI-powered quiz platform developed to streamline assessment creation. Leveraging <strong>OpenAI's GPT-4o-mini</strong>, it allows users to instantly generate complex quizzes from simple text prompts. Features include a robust manual editor, secure <strong>Supabase Authentication</strong> (Email/Password & OAuth), and a dynamic player interface with real-time scoring.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Technical Features:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex items-center gap-2">AI-driven content generation with OpenAI API</li>
              <li className="flex items-center gap-2">Real-time leaderboards and analytics</li>
              <li className="flex items-center gap-2">Secure role-based authentication</li>
              <li className="flex items-center gap-2">Interactive Framer Motion animations</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {["Next.js 14", "TypeScript", "React", "Supabase", "PostgreSQL", "OpenAI API", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Vercel"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">Dexterity UI</h2>
              <Badge variant="secondary" className="text-xs font-normal">
                Component Library
              </Badge>
            </div>
            <div className="flex gap-3 text-sm">
              <a href="https://dexterityui.vercel.app/" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href="https://github.com/CriticalMalwareHacker/ui-components" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={16} /> Repository
              </a>
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A modern, accessible UI component library built with React and Tailwind CSS. Dexterity UI provides a comprehensive collection of pre-built components designed to accelerate development workflows. Features seamless integration with TypeScript, extensive customization options, and production-ready components for building responsive web applications.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Technical Features:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex items-center gap-2">Accessible React components</li>
              <li className="flex items-center gap-2">Tailwind CSS integration</li>
              <li className="flex items-center gap-2">TypeScript support</li>
              <li className="flex items-center gap-2">Responsive design system</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "TypeScript", "Tailwind CSS", "Component Library", "Responsive Design", "Accessibility"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Sports YOLO</h2>
            <Badge variant="secondary" className="text-xs font-normal">
              Computer Vision
            </Badge>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A computer vision project that trains a custom YOLO model to classify sports from images and live webcam streams. The workflow covers dataset preprocessing, model training, evaluation, export, and an SVM classifier layered over YOLO features to improve category accuracy.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Technical Features:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex items-center gap-2">Custom YOLO model for sports classification</li>
              <li className="flex items-center gap-2">Image and live webcam inference</li>
              <li className="flex items-center gap-2">Colab-based training and evaluation workflow</li>
              <li className="flex items-center gap-2">SVM classifier over YOLO feature outputs</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {["Python", "Ultralytics YOLO", "Google Colab", "Computer Vision", "SVM", "Model Training"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Experience & Archive
          <span className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1 ml-4"></span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="roles-at-college">
            <AccordionTrigger className="text-lg">Roles at college</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8 pt-4 pl-2">
                <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 pb-2">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                  <h3 className="font-bold text-lg">Head of UI/UX</h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-2">
                    Google Developer Group (GDG) MPSTME - Present
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Spearheading design initiatives and managing UI/UX strategies for community projects. Mentoring a team of junior designers and ensuring consistent design language across all GDG deliverables.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other-projects">
            <AccordionTrigger className="text-lg">Other Projects</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 pt-4 pl-4 list-disc text-sm text-zinc-600 dark:text-zinc-400 marker:text-zinc-300">
                <li>
                  <strong>Neurotechh:</strong> A modern tech blog website built with Astro.js, Tailwind CSS, and Sanity CMS. Features a highly optimized landing page and newsletter integration. <a href="https://neurotechh.live/" className="text-blue-500 hover:underline ml-1">neurotechh.live</a>
                </li>
                <li>
                  <strong>Project-Mirage:</strong> An interactive pixel art game and dynamic navbar developed collaboratively with the GDSC MPSTME community.
                </li>
                <li>
                  <strong>Minor Capstone:</strong> A fully functional, responsive blog website architected using the MERN stack (MongoDB, Express, React, Node.js).
                </li>
                <li>
                  <strong>Figma Prototypes:</strong> Extensive portfolio of high-fidelity website designs and seamless Figma-to-Code implementations, including the Team 105 website.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="achievements-volunteering">
            <AccordionTrigger className="text-lg">Achievements & Volunteering</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-4 text-sm text-zinc-600 dark:text-zinc-400 pl-4 list-disc marker:text-zinc-300">
                <li><strong>Lead Volunteer</strong> - First Tech Challenge 2025</li>
                <li><strong>Standee, banner designs/volunteer</strong> - GDG Cloud Community Days Mumbai 2025</li>
                <li><strong>Guinness World Record Holder</strong> - Mumbai Hacks 2024</li>
                <li><strong>Techfest IIT Bombay 2024</strong> - Organizer/Volunteer</li>
                <li><strong>Global Opportunities Expo</strong> - Automated ticketing systems and bulk emails using Apps Script and Mailgun.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
