import gql from "graphql-tag";

export const ADD_RESERVATION = gql`
  mutation PostMutation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    addReservation(
      name: $name
      hotelName: $hotelName
      arrivalDate: $arrivalDate
      departureDate: $departureDate
    ) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const FETCH_RESERVATIONS = gql`
  {
    reservations {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;
