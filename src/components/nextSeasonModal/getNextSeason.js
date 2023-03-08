import {
  formatDistanceToNowStrict,
  formatDistanceStrict,
  format,
  subYears,
} from "date-fns";
import {
  CURRENT_DATE,
  SPRING_DATE,
  SUMMER_DATE,
  FALL_DATE,
  WINTER_DATE,
  seasons,
} from "../../data";

function getNextSeason() {
  const getCurrentSeason = () => {
    if (CURRENT_DATE < SPRING_DATE) {
      return "winter";
    } else if (SPRING_DATE <= CURRENT_DATE < SUMMER_DATE) {
      return "spring";
    } else if (SUMMER_DATE <= CURRENT_DATE < FALL_DATE) {
      return "summer";
    } else if (FALL_DATE <= CURRENT_DATE < WINTER_DATE) {
      return "fall";
    } else {
      return "winter";
    }
  };

  const currentSeason = getCurrentSeason();

  const getNextSeasonStartDate = (currentSeason) => {
    let nextSeason = "";
    Object.entries(seasons).forEach(([key, value]) => {
      if (key === currentSeason) {
        nextSeason = value.nextSeason;
      }
    });

    let startDate = "";
    Object.entries(seasons).forEach(([key, value]) => {
      if (key === nextSeason) {
        startDate = value.startDay;
      }
    });

    return startDate;
  };

  const nextSeasonStartDate = getNextSeasonStartDate(currentSeason);

  const formatedStartDate = format(nextSeasonStartDate, "yyyy,M,d");

  const getNextSeasonDistance = (formatedStartDate) => {
    return formatDistanceToNowStrict(new Date(formatedStartDate));
  };

  const nextSeasonDistance = getNextSeasonDistance(formatedStartDate);

  const getCurrentSeasonSince = (currentSeason, seasons) => {
    let startDate = "";
    Object.entries(seasons).forEach(([key, value]) => {
      if (key === currentSeason) {
        startDate = format(value.startDay, "yyyy,M,d");
      }
    });
    if (currentSeason === "winter") {
      return formatDistanceToNowStrict(subYears(new Date(startDate), 1));
    } else {
      return formatDistanceToNowStrict(new Date(startDate));
    }
  };

  const currentSeasonSince = getCurrentSeasonSince(currentSeason, seasons);

  const getSeasonDuration = (seasonName) => {
    let seasonDuration = "";

    Object.entries(seasons).forEach(([key, value]) => {
      if (key === seasonName) {
        seasonDuration = {
          seasonStartDate: value.startDay,
          nextSeason: value.nextSeason,
        };
      }
    });

    let nextSeasonStartDate = "";

    Object.entries(seasons).forEach(([key, nextSeasonvalue]) => {
      if (key === seasonDuration.nextSeason) {
        nextSeasonStartDate = nextSeasonvalue.startDay;
      }
    });

    const formattedSeasonDate = format(
      seasonDuration.seasonStartDate,
      "yyyy,M,d"
    );

    const formattedNextSeasonDate = format(nextSeasonStartDate, "yyyy,M,d");

    seasonDuration = formatDistanceStrict(
      new Date(formattedSeasonDate),
      new Date(formattedNextSeasonDate)
    );

    return seasonDuration;
  };

  const seasonDuration = getSeasonDuration(seasons[currentSeason].nextSeason);

  return {
    seasonDuration,
    nextSeasonDistance,
    currentSeason,
    currentSeasonSince,
  };
}

export default getNextSeason;
