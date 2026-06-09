import type { Metadata } from "next";
import { CampusClientPage } from "@/features/campus/components/CampusClientPage";

export const metadata: Metadata = { title: "Campus" };

export default function CampusPage() {
  return <CampusClientPage />;
}
