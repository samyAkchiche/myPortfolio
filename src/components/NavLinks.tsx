const navLinks: string[] = ["Home", "About", "Projects", "Contact"];

interface NavbarProps {
	toggleSidebar: () => void;
}

export default function NavLinks({ toggleSidebar }: NavbarProps) {
	return (
		<ul className="flex flex-row gap-6 mr-12 max-sm:flex-col max-md:mr-0">
			{navLinks.map((link) => {
				const id = link === "Home" ? "hero" : link.toLowerCase();
				return (
					<li key={link} className="relative group">
						<a
							href={`#${id}`}
							className="transition-colors duration-300 hover:text-custom-secondary-accent"
							onClick={toggleSidebar}
						>
							{link}
							<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-custom-secondary-accent transition-all duration-300 group-hover:w-full"></span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
