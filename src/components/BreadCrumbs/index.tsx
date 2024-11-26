

import { FunctionalComponent, h } from 'preact';
import { BreadCrumb } from 'primereact/breadcrumb';

type Props = {
    data: string[];
};
const BreadCrumbs: FunctionalComponent<Props> = ({ data }) => {

    const model = data.map(label => ({ label }))
    const home = { icon: 'pi pi-home', url: '/' };
    return (
        <BreadCrumb model={model} home={home} />
    )
}

export default BreadCrumbs