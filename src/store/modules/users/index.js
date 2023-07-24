import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {axiosInstance} from '../../../services/axios';

export const initialUser = {
    id: '',
    username: '',
    name: '',
    surname: '',
    address: '',
    email: '',
    password: '',
    role: ''
};

export const initialState = {
    isLoggedIn: false,
    status: 'idle',
    error: '',
    user: initialUser,
    usersPerPage: {
        data: [{ ...initialUser }],
        total_pages: 1,
        total_items: 1
    },
    pageUserStatus: {
        currentPage: 1,
        itemsPerPage: 3,
        type: 'user'
    },
};

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (userLogin) => {
        try {
            const url = '/auth/login';
            const response = await axiosInstance.post(url, userLogin);
            const userLoggedIn = { ...response.data };
            return userLoggedIn;
        }
        catch (error) { return error.message; }
    }
);

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async (user) => {
        try {
            const url = '/auth/register';
            const response = await axiosInstance.post(url, user);
            const userId = Number(response.headers['Id']);
            return {id: userId, ...user};
        }
        catch (error) { return error.message; }
    }
);

export const editUser = createAsyncThunk(
    'users/editUser',
    async (user) => {
        try {
            const url = '/auth/edit';
            await axiosInstance.put(url, user);
            return user;
        }
        catch (error) { return error.message; }
    }
);

export const showUsers = createAsyncThunk(
    'users/showUsers',
    async () => {
        try {
            const url = '/users';
            const users = await axiosInstance.get(url);
            return users;
        }
        catch (error) { return error.message; }
    }
);

export const showUsersPerPage = createAsyncThunk(
    'users/showUsersPerPage',
    async (pageStatus) => {
        try {
            const url = `/users/pagination?_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (user) => {
        try {
            if (user.id !== undefined) {
                const url = `/users/${user.id}`;
                await axiosInstance.delete(url);
            }
        }
        catch (error) { return error.message; }
    }
);

export const searchUserByUsername = createAsyncThunk(
    'users/searchUserByUsername',
    async (pageStatus) => {
        try {
            const url = `/users?_username=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });

export const searchUserByOrder = createAsyncThunk(
    'users/searchUserByOrder',
    async (pageStatus) => {
        try {
            const url = `/users?_column=${pageStatus.column}&_order=${pageStatus.order}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
});  

export const searchUserByName = createAsyncThunk(
    'users/searchUserByName',
    async (pageStatus) => {
        try {
            const url = `/users?_name=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });

export const searchUserByEmail = createAsyncThunk(
    'users/searchUserByEmail',
    async (pageStatus) => {
        try {
            const url = `/users?_email=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });

export const searchUserByAddress = createAsyncThunk(
    'users/searchUserByAddress',
    async (pageStatus) => {
        try {
            const url = `/users?_address=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });

export const searchUserBySurname = createAsyncThunk(
    'users/searchUserBySurname',
    async (pageStatus) => {
        try {
            const url = `/users?_surname=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });    

export const searchUserByRole = createAsyncThunk(
    'users/searchUserByRole',
    async (pageStatus) => {
        try {
            const url = `/users?_role=${pageStatus.searching}&_page=${pageStatus.currentPage}&_limit=${pageStatus.itemsPerPage}`;
            const response = await axiosInstance.get(url);
            return {
                data: response.data,
                total_pages: Number(response.headers['x-total-pages']),
                total_items: Number(response.headers['x-total-count'])
            };
        }
        catch (error) { return error.message; }
    });    

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            state.user = initialState.user;
            state.usersPerPage = initialState.usersPerPage;
            state.pageUserStatus = initialState.pageUserStatus;
            localStorage.removeItem('token');
        },
        resetUserPageStatus: (state) => {
            state.pageUserStatus = initialState.pageUserStatus;
        },
        changeUserPageStatus: (state, action) => {
            state.pageUserStatus = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            // registerUser asyncThunk
            .addCase(
                registerUser.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.isLoggedIn = true;
                    if (state.user.role !== 'ROLE_ADMIN') state.user = action.payload;
                })
            .addCase(registerUser.pending, (state) => { state.status = 'loading'; })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // editUser asyncThunk
            .addCase(
                editUser.fulfilled,
                (state) => {state.status = 'succeeded';})
            .addCase(editUser.pending, (state) => { state.status = 'loading'; })
            .addCase(editUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // deleteUser asyncThunk 
            .addCase(
                deleteUser.fulfilled,
                (state) => {
                    state.status = 'succeeded';
                    state.isLoggedIn = false;
                    state.user = initialState.user;
                })
            .addCase(deleteUser.pending, (state) => { state.status = 'loading'; })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // loginUser asyncThunk
            .addCase(
                loginUser.fulfilled,
                (state, action) => {
                    state.isLoggedIn = true;
                    state.user = action.payload;
                    state.status = 'succeeded';
                })
            .addCase(loginUser.pending, (state) => { state.status = 'loading'; })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // showUsers asyncThunk
            .addCase(showUsers.fulfilled, (state) => {state.status = 'succeeded';})
            .addCase(showUsers.pending, (state) => { state.status = 'loading'; })
            .addCase(showUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // showUsersPerPage asyncThunk
            .addCase(
                showUsersPerPage.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(showUsersPerPage.pending, (state) => { state.status = 'loading'; })
            .addCase(showUsersPerPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByOrder asyncThunk
            .addCase(
                searchUserByOrder.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByOrder.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByEmail asyncThunk
            .addCase(
                searchUserByEmail.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByEmail.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByUsername asyncThunk
            .addCase(
                searchUserByUsername.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByUsername.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByUsername.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByName asyncThunk
            .addCase(
                searchUserByName.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByName.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByName.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserBySurname asyncThunk
            .addCase(
                searchUserBySurname.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserBySurname.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserBySurname.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByAddress asyncThunk
            .addCase(
                searchUserByAddress.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByAddress.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByAddress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
            // searchUserByRole asyncThunk
            .addCase(
                searchUserByRole.fulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.usersPerPage = action.payload;
                })
            .addCase(searchUserByRole.pending, (state) => { state.status = 'loading'; })
            .addCase(searchUserByRole.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
    }
});

export const {
    logoutSuccess,
    resetUserPageStatus,
    changeUserPageStatus
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;