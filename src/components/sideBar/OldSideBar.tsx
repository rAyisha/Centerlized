import { useState } from 'preact/hooks';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from './types';
import './oldStyle.scss';
import LogoField from './LogoField';

interface SidebarProps {
    menuData: Menu[];
}

const Sidebar: preact.FunctionalComponent<SidebarProps> = ({ menuData }) => {
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const location = useLocation();

    console.log(menuData,"find api menuData")

    const toggleMenu = (menuIndex: number) => {
        setOpenMenu(openMenu === menuIndex ? null : menuIndex);
        setOpenSubMenu(null);
    };

    const toggleSubMenu = (submenuIndex: number) => {
        setOpenSubMenu(openSubMenu === submenuIndex ? null : submenuIndex);
    };

    const isActive = (path: string | undefined) => {
        return location.pathname === path;
    };

    return (
        <div className="sidebar">
            <LogoField/>
            <ul>
                {menuData.map((menu, menuIndex) => (
                    <li key={menuIndex} className={isActive(menu.route) ? 'active' : 'inactive'}>
                        {menu.route ? (
                            <Link to={menu.route} onClick={() => toggleMenu(menuIndex)}>
                                <span className="span_width">
                                    {menu.name}
                                </span>
                                {menu.submenus && (
                                    <span className={`arrow ${openMenu === menuIndex ? 'down' : 'right'}`}>
                                        {/* ➤ */}
                                    </span>
                                )}
                            </Link>
                        ) : (
                            <a onClick={() => toggleMenu(menuIndex)}>
                                <span className="span_width">
                                    {menu.name}
                                </span>
                                {menu.submenus && (
                                    <span className={`arrow ${openMenu === menuIndex ? 'down' : 'right'}`}>
                                        {/* ➤ */}
                                    </span>
                                )}
                            </a>
                        )}
                        {openMenu === menuIndex && menu.submenus && (
                            <ul>
                                {menu.submenus.map((submenu, submenuIndex) => (
                                    <li
                                        key={submenuIndex}
                                        className={isActive(submenu.route) ? 'active' : 'inactive'}
                                    >
                                        {submenu.route ? (
                                            <Link to={submenu.route} onClick={() => toggleSubMenu(submenuIndex)}>\
                                                <span className="span_width">
                                                    {submenu.name}
                                                </span>
                                                {submenu.subsubmenus && (
                                                    <span className={`arrow ${openSubMenu === submenuIndex ? 'down' : 'right'}`}>
                                                        {/* ➤ */}
                                                    </span>
                                                )}
                                            </Link>
                                        ) : (
                                            <a onClick={() => toggleSubMenu(submenuIndex)}>
                                                <span className="span_width">
                                                    {submenu.name}
                                                </span>
                                                {submenu.subsubmenus && (
                                                    <span className={`arrow ${openSubMenu === submenuIndex ? 'down' : 'right'}`}>
                                                        {/* ➤ */}
                                                    </span>
                                                )}
                                            </a>
                                        )}
                                        {openSubMenu === submenuIndex && submenu.subsubmenus && (
                                            <ul>
                                                {submenu.subsubmenus.map((subsubmenu, subsubmenuIndex) => (
                                                    <li
                                                        key={subsubmenuIndex}
                                                        className={isActive(subsubmenu.route) ? 'active' : 'inactive'}
                                                    >
                                                        <Link to={subsubmenu.route}>
                                                            {subsubmenu.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
