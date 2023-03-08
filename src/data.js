import { format } from "date-fns";

const CURRENT_YEAR = format(new Date(), "yyyy");
const CURRENT_MONTH = format(new Date(), "MM") - 1;
const CURRENT_DAY = format(new Date(), "dd");

export const CURRENT_DATE = new Date(
  `${CURRENT_DAY}/${CURRENT_MONTH}/${CURRENT_YEAR}`
);

export const WINTER_DATE = new Date(`11/21/${CURRENT_YEAR}`);
export const SPRING_DATE = new Date(`3/20/${CURRENT_YEAR}`);
export const SUMMER_DATE = new Date(`5/21/${CURRENT_YEAR}`);
export const FALL_DATE = new Date(`8/23/${CURRENT_YEAR}`);

export const seasons = {
  winter: {
    startDay: WINTER_DATE,
    nextSeason: "spring",
  },
  spring: {
    startDay: SPRING_DATE,
    nextSeason: "summer",
  },
  summer: {
    startDay: SUMMER_DATE,
    nextSeason: "fall",
  },
  fall: {
    startDay: FALL_DATE,
    nextSeason: "winter",
  },
};
