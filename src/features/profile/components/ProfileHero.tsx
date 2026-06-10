import { Building2, Calendar } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { StudentProfile } from "../types";

export interface ProfileHeroProps {
  profile: StudentProfile;
}

export function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Avatar + identity */}
          <div className="flex items-center gap-4">
            <Avatar
              name={profile.fullName}
              className="h-16 w-16 text-xl font-bold"
            />
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-text-primary">
                {profile.fullName}
              </h2>
              <p className="text-sm text-text-secondary">
                {profile.role} · {profile.career}
              </p>
              <p className="text-sm text-text-secondary">{profile.email}</p>
              <Badge tone="primary">{profile.role}</Badge>
            </div>
          </div>

          {/* Right: Campus + entry year */}
          <div className="flex flex-row gap-6 sm:flex-col sm:items-end sm:gap-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Building2 aria-hidden="true" className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs font-medium text-text-secondary">Sede</p>
                <p className="font-medium text-text-primary">{profile.campus}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Calendar aria-hidden="true" className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs font-medium text-text-secondary">
                  Año de ingreso
                </p>
                <p className="font-medium text-text-primary">{profile.entryYear}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
