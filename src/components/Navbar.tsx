import NavLinks from "./NavLinks";
import Header from "./Header";

export default function Navbar() {
    return (
        <div className=" flex items-center flex-row justify-between px-64 max-lg:px-34 py-2 max-sm:flex-col">
            <Header />
            <NavLinks />
        </div>
    );
}
