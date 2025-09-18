import NavLinks from "./NavLinks";
import Header from "./Header";

export default function Navbar() {
    return (
        <div className=" flex items-center justify-between px-64 py-2">
            <Header />
            <NavLinks />
        </div>
    );
}
