export const actionTypes = {
  HYDRATE: 'HYDRATE',
  FAILURE: 'FAILURE',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}