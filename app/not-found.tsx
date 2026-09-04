import type { Metadata } from "next";
import { NotFound } from "@/components/creative/NotFound";

export const metadata: Metadata = {
  title: "404 — Page not found | Abubakar Khan Lodhi",
  description: "This page does not exist. Return to Abubakar Khan Lodhi's portfolio.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
