
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

interface Tab {
    title: string;
    content: React.ReactNode;
  }
  
  interface TabViewComponentProps {
    tabs: Tab[];
    
  }
export default function TemplateCards(tabs:TabViewComponentProps) {
    // const [tabs] = useState([
    //     {
    //         header: 'Title I',
    //         children: <p className="m-0">Content 1</p>
    //     },
    //     {
    //         header: 'Title II',
    //         children: <p className="m-0">Content 2 </p>
    //     },
    //     {
    //         header: 'Title III',
    //         children: <p className="m-0">Content 3 </p>
    //     }
    // ]);

    const createDynamicTabs = () => {
        return tabs?.tabs?.map((tab:any, i:any) => {
            if(Array.isArray(tab?.content?.props?.childrenData)){
            return (
                
                <AccordionTab key={tab.title} header={tab.title} >
                    <div className="m-0">{tab.content}</div>
                </AccordionTab>
                
            

            );
        }
        });
    };
    
    return (
        <div className="card">
            <Accordion>{createDynamicTabs()}</Accordion>
        </div>
    )
}
        