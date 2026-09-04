import type { Metadata } from "next";
import { NotFound } from "@/components/creative/NotFound";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "This page does not exist. Return to Abubakar Khan Lodhi's portfolio.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}
