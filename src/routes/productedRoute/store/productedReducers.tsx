import { createSlice } from '@reduxjs/toolkit';
import { sidebarType } from './producted.Types';
import { getsideBarMiddleWare, getsideBarOneMiddleWare } from './productedMiddleWare';

const sideBarInitialState: sidebarType = {
    isLoading: false,
    error: '',
    getproducted: [
        {
            id:1,
            name:"Home",
            route:"/"
        },
        {
            id: 2,
            name: 'MenuOne',
            submenus: [
                {
                    id: 21,
                    name: 'Submenu21',
                    subsubmenus: [
                        { id: 211, name: 'Submenu211', route: '/menu1/submenu1/submenu1_1' },
                        { id: 212, name: 'Submenu212', route: '/menu1/submenu1/submenu1_2' },
                    ],
                    status: true
                },
                {
                    id: 22,
                    name: 'Submenu22',
                    subsubmenus: [
                        { id: 221, name: 'Submenu121', route: '/menu1/submenu2/submenu2_1' },
                        { id: 222, name: 'Submenu222', route: '/menu1/submenu2/submenu2_2' },
                    ],
                    status: true
                },
            ],
            status: true
        },
        {
            id: 3,
            name: 'MenuTwo',
            submenus: [
                {
                    id: 31,
                    name: 'Submenu31',
                    subsubmenus: [
                        { id: 311, name: 'Submenu311', route: '/menu2/submenu1/submenu1_1' },
                        { id: 312, name: 'Submenu312', route: '/menu2/submenu1/submenu1_2' },
                    ],
                    status: true
                },
                {
                    id: 32,
                    name: 'Submenu32',
                    subsubmenus: [
                        { id: 321, name: 'Submenu321', route: '/menu2/submenu1/submenu1_1' },
                        { id: 322, name: 'Submenu322', route: '/menu2/submenu1/submenu1_2' },
                    ],
                    status: true
                }
            ],
            status: true
        },
    ],
    getproductedone:[
        {
            id:1,
            name:"Home",
            route:"/"
        },
        {
            id: 1,
            name: 'Menu4',
            submenus: [
                {
                    id: 11,
                    name: 'Submenu41',
                    subsubmenus: [
                        { id: 111, name: 'Submenu411', route: '/menu1/submenu1/submenu1_1' },
                        { id: 112, name: 'Submenu412', route: '/menu1/submenu1/submenu1_2' },
                    ],
                    status: true
                },
                {
                    id: 12,
                    name: 'Submenu42',
                    subsubmenus: [
                        { id: 121, name: 'Submenu421', route: '/menu1/submenu2/submenu2_1' },
                        { id: 122, name: 'Submenu422', route: '/menu1/submenu2/submenu2_2' },
                    ],
                    status: true
                },
            ],
            status: true
        },
        {
            id: 2,
            name: 'Menu5',
            submenus: [
                {
                    id: 21,
                    name: 'Submenu51',
                    subsubmenus: [
                        { id: 211, name: 'Submenu511', route: '/menu2/submenu1/submenu1_1' },
                        { id: 212, name: 'Submenu512', route: '/menu2/submenu1/submenu1_2' },
                    ],
                    status: true
                },
                {
                    id: 22,
                    name: 'Submenu52',
                    subsubmenus: [
                        { id: 221, name: 'Submenu521', route: '/menu2/submenu1/submenu1_1' },
                        { id: 222, name: 'Submenu522', route: '/menu2/submenu1/submenu1_2' },
                    ],
                    status: true
                }
            ],
            status: true
        },
    ]
};

const sideBarReducer = createSlice({
    name: 'SideBar',
    initialState: sideBarInitialState,
    reducers: {},
    extraReducers: builder => {
        // getSideBar
        builder.addCase(getsideBarMiddleWare.pending, state => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(getsideBarMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getproducted = action.payload?.data;
        });
        builder.addCase(getsideBarMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            }
        });

          // getSideBarone

          builder.addCase(getsideBarOneMiddleWare.pending, state => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(getsideBarOneMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getproductedone = action.payload;
        });
        builder.addCase(getsideBarOneMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            }
        });
    },
});

export const sideBarReducers = sideBarReducer.reducer;
