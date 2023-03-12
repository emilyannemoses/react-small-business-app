export const ADD_LISTING = 'ADD_LISTING';
export const DELETE_LISTING = 'DELETE_LISTING';

export function addListing(listing) {
  return { type: ADD_LISTING, payload: listing };
}

export function deleteListing(index) {
  return { type: DELETE_LISTING, payload: index };
}
