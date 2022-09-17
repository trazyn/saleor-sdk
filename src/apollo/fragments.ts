import { gql } from "@apollo/client";

export const accountErrorFragment = gql`
  fragment AccountErrorFragment on AccountError {
    code
    field
    message
  }
`;

export const addressFragment = gql`
  fragment AddressFragment on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const userBaseFragment = gql`
  fragment UserBaseFragment on User {
    id
    email
    firstName
    lastName
    isStaff
    lastLogin
  }
`;

export const userDetailsFragment = gql`
  ${userBaseFragment}
  fragment UserDetailsFragment on User {
    ...UserBaseFragment
  }
`;
