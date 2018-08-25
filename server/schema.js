const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

// Dummy Data
const reservations = [
  {
    id: "1",
    name: "John Doe",
    hotelName: "Hilton Dallas",
    arrivalDate: new Date("December 17, 2018 08:24:00"),
    departureDate: new Date("December 19, 2018 10:24:00")
  },
  {
    id: "2",
    name: "Jane Smith",
    hotelName: "Hilton New York",
    arrivalDate: new Date("January 3, 2019 14:24:00"),
    departureDate: new Date("January 6, 2019 09:24:00")
  },
  {
    id: "3",
    name: "John Doe",
    hotelName: "Hilton Dallas",
    arrivalDate: new Date("March 5, 2019 03:24:00"),
    departureDate: new Date("March 10, 2019 11:24:00")
  }
];

const ReservationType = new GraphQLObjectType({
  name: "Reservation",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    hotelName: { type: GraphQLString },
    arrivalDate: { type: GraphQLString },
    departureDate: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    reservation: {
      type: ReservationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(reservations, { id: args.id });
      }
    },
    reservations: {
      type: new GraphQLList(ReservationType),
      resolve(parent, args) {
        return reservations;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
