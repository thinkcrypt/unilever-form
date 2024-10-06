/* eslint-disable @typescript-eslint/no-explicit-any */

import mainApi from './mainApi';
import { LoginBodyType, LoginPayloadType } from './types';

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		lgoin: builder.mutation<LoginPayloadType, LoginBodyType>({
			query: ({ email, password }) => ({
				url: `auth/login`,
				method: 'POST',
				body: {
					email,
					password,
				},
			}),
			invalidatesTags: ['user'],
		}),
		register: builder.mutation<any, any>({
			query: body => ({
				url: `auth/register`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['user'],
		}),
		updatePassword: builder.mutation<any, any>({
			query: body => ({
				url: `auth/change-password`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['user'],
		}),
		getSelf: builder.query<any, any>({
			query: () => `auth/self`,
			providesTags: ['self'],
		}),
	}),
	overrideExisting: false,
});

export const {
	useLgoinMutation,
	useGetSelfQuery,
	useRegisterMutation,
	useUpdatePasswordMutation,
} = authApi;
export default authApi;
