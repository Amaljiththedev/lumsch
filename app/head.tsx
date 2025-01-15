// app/head.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminary Lines Editing School - Master the Art of Editing",
  description: "Join Luminary Lines Editing School's cohort program to become a professional editor and transition into a freelance career or agency ownership.",
};

export default function Head() {
  const title = String(metadata.title || ""); // Convert to string if necessary
  const description = String(metadata.description || ""); // Convert to string if necessary

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <title>{title}</title> {/* Ensure title is a string */}
      <meta name="description" content={description} /> {/* Ensure description is a string */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
