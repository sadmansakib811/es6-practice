
// problem 1: 1) How will you access Sophia’s secondary school location?
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          {
            school_name: "ABC secondary school",
          },

          { location: "St Lorence" },
        ],
      },
    ],
  },
};
// Answer:
const secondarysclLocation = data.Sophia.study[1].secondary[1].location;
console.log(secondarysclLocation);

// 2nd problem: