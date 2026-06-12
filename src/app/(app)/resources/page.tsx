import type { Metadata } from "next";
import { ResourcesClientPage } from "@/features/resources/components/ResourcesClientPage";

export const metadata: Metadata = { title: "Centro de información" };

export default function ResourcesPage() {
  return <ResourcesClientPage />;
}
