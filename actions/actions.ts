export const actionTypes = {
    HYDRATE: 'HYDRATE',
    FAILURE: 'FAILURE',
    SET_NAME: 'SET_NAME'
  }
  
  export function failure(error) {
    return {
      type: actionTypes.FAILURE,
      error,
    }
  }
  
  export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name}
  }
  