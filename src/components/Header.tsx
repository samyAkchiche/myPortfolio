import logo from "../assets/Samy-logo.svg";

export default function Header() {
    return (
        <>
            <a href="/">
                <img
                    src={logo}
                    alt="Samy Logo"
                    className="w-35 h-auto cursor-pointer"
                />
            </a>
        </>
    );
}
