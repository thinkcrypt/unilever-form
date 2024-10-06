/* eslint-disable @typescript-eslint/no-explicit-any */

import mainApi from './mainApi';

export const otpApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getotp: builder.mutation({
			query: body => ({
				url: `/otp`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['getotp'],
		}),
	}),
});
export const { useGetotpMutation } = otpApi;
export default otpApi;
