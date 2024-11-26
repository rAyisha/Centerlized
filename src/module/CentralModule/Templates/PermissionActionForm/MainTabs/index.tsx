import { useEffect, useRef, useState } from 'react';
import './index.scss';

const MainTabs = ({ sideBarList }: any) => {
    console.log("sidebar",sideBarList)
    const [activeTab, setActiveTab] = useState<string>(sideBarList[0]?.id || 'Dashboard');
    const underlineRef = useRef<HTMLDivElement>(null);

    const updateUnderline = () => {
        const activeElement = document.querySelector('.navtab.active');
        if (activeElement && underlineRef.current) {
            underlineRef.current.style.width = `${activeElement.clientWidth}px`;
            underlineRef.current.style.left = `${activeElement.getBoundingClientRect().left - underlineRef.current?.parentElement!.getBoundingClientRect().left}px`;
        }
    };

    useEffect(() => {
        updateUnderline();
        window.addEventListener('resize', updateUnderline);
        return () => window.removeEventListener('resize', updateUnderline);
    }, []);

    useEffect(() => {
        updateUnderline();
    }, [activeTab]);

    return (
        <div className="permission_layout">
            <div className="navtabs">
                {sideBarList.map((tab: any) => (
                    <div
                        key={tab.id}
                        className={`navtab ${activeTab === tab.id ? 'active' : ''}`}
                        data-target={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </div>
                ))}
                <div className="underline" ref={underlineRef}></div>
            </div>

            {sideBarList.map((tab: any) => (
                <div
                    key={tab.id}
                    id={tab.id}
                    className={`content ${activeTab === tab.id ? 'active' : ''}`}
                >
                    {tab.children && tab.children.length > 0 ? (
                        tab.children.map((subtab: any) => (
                            <div key={subtab.id} id={subtab.id} className="mt-3">
                                {subtab.name}
                            </div>
                        ))
                    ) : (
                        <p className="emty">No content available.</p> 
                    )}
                </div>
            ))}
        </div>
    );
};

export default MainTabs;
