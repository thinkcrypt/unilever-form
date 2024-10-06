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
		submitForm: builder.mutation({
			query: body => ({
				url: `/brand/${body?.brand?.toLowerCase()}`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['submitForm'],
		}),
	}),
});
export const { useGetotpMutation, useSubmitFormMutation } = otpApi;
export default otpApi;
