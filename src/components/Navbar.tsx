import NavLinks from "./NavLinks";
import Header from "./Header";

interface NavbarProps {
    isOpened: boolean;
    toggleSidebar: () => void;
}

export default function Navbar({ isOpened, toggleSidebar }: NavbarProps) {
    return (
        <div
            className={`flex items-center flex-row justify-between px-64 max-lg:px-34 py-2 max-md:flex-col max-md:fixed max-md:top-0 max-md:right-0 max-md:h-dvh max-md:z-50 max-md:bg-amber-400 max-md:w-3/5 max-md:justify-start max-md:items-start max-md:px-10 max-md:pt-4 max-md:gap-6 max-md:overflow-y-auto max-md:transition-transform max-md:duration-300 ${
                isOpened ? "" : "max-md:translate-x-full"
            }`}
        >
            <Header />
            <NavLinks toggleSidebar={toggleSidebar} />
        </div>
    );
}
