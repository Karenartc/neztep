import type { Metadata } from "next";
import { ProfileHeader } from "@/features/profile/components/ProfileHeader";
import { mockProfile } from "@/features/profile/data/profile-mock";
import { ProfileView } from "@/features/profile/components/ProfileView";

export const metadata: Metadata = { title: "Perfil" };

export default function ProfilePage() {
  return (
    <main className="flex flex-col gap-4">
      <ProfileHeader />
      <ProfileView profile={mockProfile} />
    </main>
  );
}
