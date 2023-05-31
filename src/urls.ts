const BASE_URL = 'http://localhost:8090/api'
export const GET_BOOK = (id: string|undefined): string => BASE_URL + '/book/' + id

export const GET_BOOKS = (limit: number) => `${BASE_URL}/books?limit=${limit}`

export const SIGN_UP = `${BASE_URL}/auth/signup`

export const LOGIN = `${BASE_URL}/auth/login`
export const GET_ME = `${BASE_URL}/auth/me`

export const LOGOUT = `${BASE_URL}/auth/logout`

export const ORDERS = `${BASE_URL}/order`

export const PICKUP = `${BASE_URL}/pickup`

export const CANCEL = `${BASE_URL}/cancel`
export const RETURN = `${BASE_URL}/return`