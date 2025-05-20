import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatus(status: string) {
  switch (status) {
    case "0":
      return "Your submission is being processed. Please wait a moment.";
    case "1":
      return "Your submission has been approved. Thank you!";
    case "2":
      return "Your submission was not approved. Please review the feedback on your email and make the necessary changes.";
    default:
      return "Unknown status";
  }
}

export function getCategoryCode(category: string) {
  switch (category) {
    case "fe":
      return "Front-End";
    case "be":
      return "Back-End";
    case "ux":
      return "UI/UX Design";
    case "fs":
      return "Full-Stack";
  }
}

export function getStatusCode(status: string) {
  switch (status) {
    case "0":
      return "Processing";
    case "1":
      return "Approved";
    case "2":
      return "Not approved";
    default:
      return "Unknown status";
  }
}

export function formatUnixTimestamp(unixSeconds: number) {
  const date = new Date(unixSeconds * 1000);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logEvent = (action: string, params: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};
