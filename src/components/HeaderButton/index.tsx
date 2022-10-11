import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Button } from "./styles";

interface HeaderButtonProps {
    title: string;
    to: string;
    Icon: IconType;
}

export function HeaderButton({ title, to, Icon }: HeaderButtonProps) {
    return (
        <Button>
            <Link to={to}>
                <Icon />
                {title}
            </Link >
        </Button>
    );
}