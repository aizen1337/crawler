import { SportEvent } from "../types/SportsEvent";

export function processRawEvent(
    rawEvent: string,
    mappings: Record<string, string>
  ): SportEvent {
    const [
      eventId,
      sportId,
      competitionId,
      startTime,
      homeId,
      awayId,
      statusId,
      rawScores,
    ] = rawEvent.split(",");
    const scorePeriods = rawScores
    ? rawScores.split("|").reduce((acc, period) => {
        const [periodTypeId, periodScore] = period.split("@");
        if (!periodScore) return acc; 

        const [homeScore, awayScore] = periodScore.split(":");
        acc[mappings[periodTypeId] || periodTypeId] = {
          type: mappings[periodTypeId] || periodTypeId,
          home: homeScore || "0", 
          away: awayScore || "0", 
        };
        return acc;
      }, {} as SportEvent["scores"])
    : {}; 
  
    return {
      id: eventId,
      status: mappings[statusId] || statusId, 
      scores: scorePeriods,
      startTime: new Date(parseInt(startTime)).toISOString(), 
      sport: mappings[sportId] || sportId, 
      competitors: {
        HOME: { type: "HOME", name: mappings[homeId] || homeId }, 
        AWAY: { type: "AWAY", name: mappings[awayId] || awayId }, 
      },
      competition: mappings[competitionId] || competitionId, 
    };
  }
  