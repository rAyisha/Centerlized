import React, { useState, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Chips } from 'primereact/chips';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import "./index.scss"

interface TabOption {
    label: string;
    value: string;
}

interface TabData {
    label: string;
    options: TabOption[];
}

interface FilterComponentProps {
    tabs: TabData[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ tabs }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const op = useRef<OverlayPanel>(null);

    const onFilterSelect = (e: { value: string }) => {
        if (!selectedFilters.includes(e.value)) {
            setSelectedFilters([...selectedFilters, e.value]);
        }
        if (op.current) {
            op.current.hide();
        }
    };

    const getFilteredOptions = (options: TabOption[]): TabOption[] => {
        return options.filter(option =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <div className="filter__componets">
            <button type="button" onClick={(e) => op.current?.toggle(e)}>
                Filter
            </button>

            <OverlayPanel ref={op} >
                <TabView>
                    {tabs.map((tab, index) => (
                        <TabPanel key={index} header={tab.label}>
                            <div style={{ padding: '10px' }}>
                                <InputText
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
                                    placeholder="Search values"
                                    className="p-inputtext-sm"
                                    style={{ width: '100%', marginBottom: '10px' }}
                                />
                                <ListBox
                                    value={null}
                                    options={getFilteredOptions(tab.options)}
                                    onChange={onFilterSelect}
                                    optionLabel="label"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </TabPanel>
                    ))}
                </TabView>
            </OverlayPanel>

            <div>
                <Chips value={selectedFilters} onChange={(e) => setSelectedFilters(e.value as string[])} />
            </div>
        </div>
    );
};

export default FilterComponent;
