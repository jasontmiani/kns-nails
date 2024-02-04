// export const getHeaderMenuQuery = /* GraphQL */ `
//   query getHeaderMenu($handle: String!) {
//     menu(handle: $handle) {
//       items {
//         title
//         url
//       }
//     }
//   }
// `;

export const getHeaderMenuQuery = /* GraphQL */ `
  query {
    menu(handle: "next-js-frontend-header-menu") {
      items {
        title
        url
      }
    }
  }
`;

export const getFooterMenuQuery = /* GraphQL */ `
  query {
    menu(handle: "next-js-frontend-footer-menu") {
      items {
        title
        url
      }
    }
  }
`;
