import logo from "../assets/Samy-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Link to="/">
                <img
                    src={logo}
                    alt="Samy Logo"
                    className="w-20 h-auto cursor-pointer"
                />
            </Link>
        </>
    );
}
