import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Item } from "./styles";

interface NavItemProps {
    title: string;
    to: string;
    Icon: IconType;
}

export function NavItem({ title, to, Icon }: NavItemProps) {
    return (
        <Item>
            <Link to={to}>
                <Icon />
                {title}
            </Link >
        </Item>
    );
}