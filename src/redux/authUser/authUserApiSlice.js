import { apiSlice } from '../api/apiSlice';

export const authUserApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => '/users/current',
      method: 'GET',
    }),
    registerUser: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logoutUser: builder.query({
      query: credentials => ({
        url: '/auth/logout',
        method: 'GET',
        body: { ...credentials },
      }),
    }),
  }),
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserQuery,
  useFetchCurrentUserQuery,
} = authUserApi;
