export const actionTypes = {
    SET_NAME: 'SET_NAME'
}

export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name }
}