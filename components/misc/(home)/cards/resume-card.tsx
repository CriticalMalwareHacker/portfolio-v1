import { Download, FileText } from "lucide-react";

export const ResumeCard = () => {
  return (
    <a
      href="/Tanay_Kumar_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="group h-full block"
    >
      <div className="flex flex-col justify-between h-full p-6 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-300">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
            <FileText size={24} />
          </div>
          <Download className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Resume</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Download my CV (PDF)
          </p>
        </div>
      </div>
    </a>
  );
};