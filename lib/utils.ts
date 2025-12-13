import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Added default fetcher to resolve import error in hooks and components
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default fetcher;