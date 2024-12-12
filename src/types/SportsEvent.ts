// src/types.ts
export type SportEvent = {
    id: string;
    status: string;
    scores: Record<string, { type: string; home: string; away: string }>;
    startTime: string;
    sport: string;
    competitors: {
      HOME: { type: string; name: string };
      AWAY: { type: string; name: string };
    };
    competition: string;
  };
  
  export const API_URLS = {
    STATE: "/api/state",
    MAPPINGS: "/api/mappings",
  };
  