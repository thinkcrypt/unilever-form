/* eslint-disable @typescript-eslint/no-unused-vars */
import { TOKEN_NAME } from '@/lib/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type AuthStateType = {
	token: string | null;
	loggedIn: boolean;
};

type LoginPayloadType = {
	token: string;
	refreshToken?: string;
};

// Define the initial state
const initialState: AuthStateType = {
	token:
		typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) != null
			? localStorage.getItem(TOKEN_NAME)
			: null,
	loggedIn: typeof window !== 'undefined' && localStorage.getItem(TOKEN_NAME) !== null,
};
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logout: (state): void => {
			localStorage.setItem(TOKEN_NAME, 'null');
			state.token = null;
			state.loggedIn = false;
			void (document.location.href = '/auth/login');
		},
		login: (state, action: PayloadAction<LoginPayloadType>): void => {
			const { token, refreshToken }: LoginPayloadType = action.payload;
			state.token = token;
			state.loggedIn = true;
			localStorage.setItem(TOKEN_NAME, token);
			void (document.location.href = '/');
		},
		refresh: (state, action: PayloadAction<string>): void => {
			localStorage.setItem(TOKEN_NAME, action.payload);
			state.token = action.payload;
			state.loggedIn = true;
		},
	},
});

export const { login, logout, refresh } = authSlice.actions;

export default authSlice.reducer;
