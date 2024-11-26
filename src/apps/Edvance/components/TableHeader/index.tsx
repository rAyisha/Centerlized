import { FunctionComponent } from "preact";
import "./index.scss";
import { Dispatch, useEffect, useState } from "preact/hooks";
import SvgSearchIcon from "../../../../assets/svgIcon/SvgSearchIcon";
import Button from "../../../../components/Button";
import SvgAddIcon from "../../../../assets/svgIcon/SvgAddIcon";
import SvgCardView from "../../../../assets/svgIcon/SvgCardView";
import SvgList from "../../../../assets/svgIcon/SvgList";
import { SetStateAction } from "preact/compat";
import ExportButton from "../ExportButton";
type Props = {
    buttonType?: "Add" | "Create";
    searchValue?: string;
    onButtonClick?: () => void;
    onSearch?: (value: string) => void;
    className?: string;
    addButton?: boolean;
    exportButton?: boolean;
    searchButton?: boolean;
    viewType?: string;
    setViewType?: Dispatch<SetStateAction<string>>;
    listTypeButton?: boolean;
};

const TableCommonHeader: FunctionComponent<Props> = ({
    buttonType,
    searchValue = "",
    onButtonClick = () => { },
    onSearch = () => { },
    className = "",
    addButton = false,
    exportButton = false,
    searchButton = false,
    viewType,
    setViewType,
    listTypeButton = false
}) => {
    const [value, setValue] = useState(searchValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(value);
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    const setListView = () => {
        setViewType("list");
    };

    const setCardView = () => {
        setViewType("card");
    };

    return (
        <div className={`table__common__header__layout grid ${className}`}>
            <div className="search__export__layout col-4">
                {searchButton && (
                    <div className="search__view">
                        <div className="cursor-pointer">
                            <SvgSearchIcon />
                        </div>
                        <input
                            placeholder="Search"
                            value={value}
                            onChange={(e) => setValue(e.currentTarget.value)}
                        />
                    </div>
                )}
            </div>
            <div className="col-8 flex justify-content-end gap-2">
                {listTypeButton && (
                    <div className="list__type__selection__layout">
                        <span
                            onClick={setCardView}
                            className={viewType === "card" ? "selected__view" : ""}
                        >
                            <SvgCardView color={viewType === "card" ? "#000" : "#ccc"} />
                        </span>
                        <span
                            onClick={setListView}
                            className={viewType === "list" ? "selected__view" : ""}
                        >
                            <SvgList color={viewType === "list" ? "#000" : "#ccc"} />
                        </span>
                        <hr className="tab__header__buttons__layout__hr" />
                    </div>
                )}
                {addButton && (
                    <Button
                        label={buttonType}
                        icon={<SvgAddIcon color="var(--base-theme-icon-color)" />}
                        onClick={onButtonClick}
                    />
                )}  
                {exportButton && (
                    <ExportButton />
                )}
            </div>
        </div>
    );
};

export default TableCommonHeader;
