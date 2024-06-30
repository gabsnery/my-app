import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.VITE_REACT_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { accessToken }
    } = getState() as any
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
})

export const defaultApi = createApi({
  reducerPath: 'defaultApi',
  tagTypes: ['Item'],
  keepUnusedDataFor: 240,
  baseQuery: baseQuery,
  endpoints: () => ({})
})
