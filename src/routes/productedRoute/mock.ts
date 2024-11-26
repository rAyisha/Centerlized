import { Menu } from './types';

export const menuData: Menu[] = [
    {
        id: 1,
        name: 'Menu 1',
        submenus: [
            {
                id: 11,
                name: 'Submenu 1.1',
                subsubmenus: [
                    { id: 111, name: 'Submenu 1.1.1', route: '/menu1/submenu1/submenu1_1' },
                    { id: 112, name: 'Submenu 1.1.2', route: '/menu1/submenu1/submenu1_2' },
                ],
                status: true
            },
            {
                id: 12,
                name: 'Submenu 1.2',
                subsubmenus: [
                    { id: 121, name: 'Submenu 1.2.1', route: '/menu1/submenu2/submenu2_1' },
                    { id: 122, name: 'Submenu 1.2.2', route: '/menu1/submenu2/submenu2_2' },
                ],
                status: true
            },
        ],
        status: true
    },
    {
        id: 2,
        name: 'Menu 2',
        submenus: [
            {
                id: 21,
                name: 'Submenu 2.1',
                subsubmenus: [
                    { id: 211, name: 'Submenu 2.1.1', route: '/menu2/submenu1/submenu1_1' },
                    { id: 212, name: 'Submenu 2.1.2', route: '/menu2/submenu1/submenu1_2' },
                ],
                status: true
            },
            {
                id: 22,
                name: 'Submenu 2.2',
                subsubmenus: [
                    { id: 221, name: 'Submenu 2.2.1', route: '/menu2/submenu1/submenu1_1' },
                    { id: 222, name: 'Submenu 2.2.2', route: '/menu2/submenu1/submenu1_2' },
                ],
                status: true
            }
        ],
        status: true
    },
];