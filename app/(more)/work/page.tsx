import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function WorkPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold pb-2">Featured Work</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        A selection of projects focusing on AI integration, full-stack development, and user-centric design.
      </p>
      
      {/* Top 3 Projects - Expanded */}
      <div className="space-y-16 mb-20">
        
        {/* Project 1: Quizzora */}
        <div className="flex flex-col gap-4">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
             <div className="flex items-center gap-3">
               <h2 className="text-2xl font-bold">Quizzora</h2>
               <Badge variant="secondary" className="text-xs font-normal">Full Stack AI Platform</Badge>
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
               <li className="flex items-center gap-2">🔹 AI-Driven Content Generation (OpenAI API)</li>
               <li className="flex items-center gap-2">🔹 Real-time Leaderboards & Analytics</li>
               <li className="flex items-center gap-2">🔹 Secure Role-based Authentication</li>
               <li className="flex items-center gap-2">🔹 Interactive Framer Motion Animations</li>
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

        {/* Project 2: Dexterity UI */}
        <div className="flex flex-col gap-4">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
             <div className="flex items-center gap-3">
               <h2 className="text-2xl font-bold">Dexterity UI</h2>
               <Badge variant="secondary" className="text-xs font-normal">Component Library</Badge>
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
               <li className="flex items-center gap-2">🔹 Accessible React Components</li>
               <li className="flex items-center gap-2">🔹 Tailwind CSS Integration</li>
               <li className="flex items-center gap-2">🔹 TypeScript Support</li>
               <li className="flex items-center gap-2">🔹 Responsive Design System</li>
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

        {/* Project 3: Blogy.tech */}
        <div className="flex flex-col gap-4">
           <div className="flex items-center gap-3">
             <h2 className="text-2xl font-bold">Blogy.tech</h2>
             <Badge variant="secondary" className="text-xs font-normal">Personal Branding</Badge>
              <div className="flex gap-3 text-sm">
               <a href="https://github.com/CriticalMalwareHacker/Capstone_Project_Sem6" target="_blank" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                 <ExternalLink size={16} /> View Project
               </a>
             </div>
           </div>
           
           <p className="tn
           ext-zinc-600 dark:text-zinc-300 leading-relaxed">
             A highly optimized personal blogging platform currently in active development. Designed to be a central hub for sharing technical insights, tutorials, and project updates. Focuses on minimal design principles, high performance (Core Web Vitals), and SEO optimization to reach a wider developer audience.
           </p>

           <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
             <div className="flex flex-wrap gap-2">
               {["React", "Next.js", "MDX", "SEO Optimization", "Responsive Design", "Content Management", "Performance Tuning"].map((tech) => (
                 <span key={tech} className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-300">
                   {tech}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* Expandable Section for Experience & Archive */}
      <div>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Experience & Archive
          <span className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1 ml-4"></span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Roles at college</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8 pt-4 pl-2">
                <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 pb-2">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                  <h3 className="font-bold text-lg">Head of UI/UX</h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-2">Google Developer Group (GDG) MPSTME · Present</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Spearheading design initiatives and managing UI/UX strategies for community projects. Mentoring a team of junior designers and ensuring consistent design language across all GDG deliverables.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
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
                   <strong>Figma Prototypes:</strong> Extensive portfolio of high-fidelity website designs and seamless Figma-to-Code implementations (e.g., Team 105 website).
                 </li>
               </ul>
            </AccordionContent>
          </AccordionItem>

           <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Achievements & Volunteering</AccordionTrigger>
            <AccordionContent>
               <ul className="space-y-3 pt-4 text-sm text-zinc-600 dark:text-zinc-400 pl-2">
                 <li className="flex items-start gap-2">
                    <span className="text-lg">👥</span> 
                    <span><strong>Lead Volunteer</strong> – First Tech Challenge 2025</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-lg">🎨</span> 
                    <span><strong>Standee, banner designs/volunteer</strong> – GDG Cloud Community Days Mumbai 2025</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-lg">🏆</span> 
                    <span><strong>Guinness World Record Holder</strong> – Mumbai Hacks 2024</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-lg">🤝</span> 
                    <span><strong>Techfest IIT Bombay 2024</strong> – Organizer/Volunteer</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <span className="text-lg">📧</span> 
                    <span><strong>Global Opportunities Expo</strong> – Automating ticketing systems & bulk emails using Appscript & Mailgun.</span>
                 </li>
               </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}