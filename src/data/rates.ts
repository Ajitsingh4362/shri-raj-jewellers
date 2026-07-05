// UPDATE DAILY — this is the only file that needs touching to refresh
// the "Today's Rate" widget on the site. Rates are per gram, in INR.
// Pull these from the shop's own daily rate board before pushing.
//
// Left at 0 on purpose — these are placeholders, not real figures.
// Do not deploy with 0s live; fill in the shop's actual rates first.
export const rates = {
  gold24k: 0, // e.g. 7850
  gold22k: 0, // e.g. 7200
  silver: 0, // e.g. 95
  updatedOn: "Update this date", // e.g. "5 July 2026"
};
