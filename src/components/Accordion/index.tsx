
import React, { FunctionComponent } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ButtonProps } from 'primereact/button';
import { IconType } from 'primereact/utils';
import { ComponentChildren } from 'preact';
type Props = {
    icon?: IconType<ButtonProps>;
    outlined?: boolean;
    disabled?: boolean;
    className?: string;
    activeIndex:number;
    data:{
        header:string,
        body:ComponentChildren,
        disable?:boolean
    }[];
    multiple:boolean;
  };
  const AccordionComponent: FunctionComponent<Props> = ({multiple,data,activeIndex})=>{
    return (
        <div className="card">
            <Accordion multiple={multiple} activeIndex={[activeIndex]}>
                {
                    data.map((eachData:any)=>(
                        <AccordionTab header={eachData.header} disabled={eachData?.disable}>
                    {eachData.body}
                </AccordionTab>
                    ))
                }

            </Accordion>
        </div>
    )
}
        export default AccordionComponent