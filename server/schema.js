import { find } from "lodash/find";
import uuid from "uuid";

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} from "graphql";

// Dummy Data
let reservations = [
  {
    id: uuid.v4(),
    name: "John Doe",
    hotelName: "Hilton Dallas",
    arrivalDate: new Date("December 17, 2018 08:24:00"),
    departureDate: new Date("December 19, 2018 10:24:00")
  },
  {
    id: uuid.v4(),
    name: "Jane Smith",
    hotelName: "Hilton New York",
    arrivalDate: new Date("January 3, 2019 14:24:00"),
    departureDate: new Date("January 6, 2019 09:24:00")
  },
  {
    id: uuid.v4(),
    name: "Cathy Long",
    hotelName: "Hilton Cebu",
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
        return find(reservations, { id: args.id });
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addReservation: {
      type: ReservationType,
      args: {
        name: { type: GraphQLString },
        hotelName: { type: GraphQLString },
        arrivalDate: { type: GraphQLString },
        departureDate: { type: GraphQLString }
      },
      resolve(parent, args) {
        const reservation = {
          id: uuid.v4(),
          name: args.name,
          hotelName: args.hotelName,
          arrivalDate: args.arrivalDate,
          departureDate: args.departureDate
        };
        reservations.push(reservation);
      }
    },
    removeReservation: {
      type: ReservationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        reservations = reservations.filter(res => res.id !== args.id);
      }
    },
    updateReservation: {
      type: ReservationType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        hotelName: { type: GraphQLString },
        arrivalDate: { type: GraphQLString },
        departureDate: { type: GraphQLString }
      },
      resolve(parent, args) {
        reservations = reservations.map(res => {
          if (res.id === args.id) {
            return {
              id: args.id,
              name: args.name,
              hotelName: args.hotelName,
              arrivalDate: args.arrivalDate,
              departureDate: args.departureDate
            };
          } else {
            return res;
          }
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
