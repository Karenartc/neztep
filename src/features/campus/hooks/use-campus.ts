"use client";

import { useState } from "react";
import {
  MOCK_BUILDING_DETAILS,
  MOCK_POINTS_OF_INTEREST,
} from "../data/campus-mock";
import type { BuildingDetail, PointOfInterest } from "../types";

export function useCampus(): {
  points: PointOfInterest[];
  details: BuildingDetail[];
  selectedPointId: string;
  selectPoint: (pointId: string) => void;
  selectedDetail: BuildingDetail | undefined;
  isLoading: boolean;
} {
  const [selectedPointId, setSelectedPointId] = useState<string>(
    MOCK_POINTS_OF_INTEREST[0].pointId,
  );

  const selectedDetail = MOCK_BUILDING_DETAILS.find(
    (d) => d.pointId === selectedPointId,
  );

  return {
    points: MOCK_POINTS_OF_INTEREST,
    details: MOCK_BUILDING_DETAILS,
    selectedPointId,
    selectPoint: setSelectedPointId,
    selectedDetail,
    isLoading: false,
  };
}
