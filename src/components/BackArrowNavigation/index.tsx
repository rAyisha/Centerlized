import { useNavigate } from "react-router-dom";
import SvgBackArrow from "../../assets/svgIcon/SvgBackArrow";
import customHistory from "../../routes/customHistory";

interface BackButtonProps {
    path?: string;
}

const BackNavigation = ({ path }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (path) {
            navigate(path);
        } else {
            // navigate(-1);
            customHistory.back()
        }
    };

    return (
        <div onClick={handleBackClick} className="cursor-pointer flex">
            <SvgBackArrow />
        </div>
    );
};

export default BackNavigation;
