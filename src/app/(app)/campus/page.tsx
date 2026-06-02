import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { EmptyState } from "@/components/layout/empty-state";

export const metadata: Metadata = { title: "Campus" };

export default function CampusPage() {
  return (
    <>
      <Navbar
        title="Campus"
        subtitle="Explora las instalaciones y servicios de tu institución"
      />
      <EmptyState
        icon={MapPin}
        title="Mapa del campus"
        description="Encuentra edificios, servicios, áreas de estudio y más dentro del campus."
      />
    </>
  );
}
