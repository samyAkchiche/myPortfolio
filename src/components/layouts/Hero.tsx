import profile from "../../assets/Profile.jpg";

const stats = [
	{ value: "4+", label: "years in front-end" },
	{ value: "4", label: "projects shipped" },
	{ value: "3", label: "Meta certificates" },
];

export default function Hero() {
	return (
		<div className="flex flex-col items-center gap-10 py-16 max-md:py-10 text-center">
			<div className="flex justify-center max-md:flex-col items-center gap-8">
				<div className="avatar-ring shrink-0">
					<img
						src={profile}
						alt="Samy Akchiche"
						className="w-44 h-44 rounded-full object-cover"
					/>
				</div>
				<div className="flex flex-col gap-4 items-start max-md:items-center text-left max-md:text-center">
					<span className="status-pill">
						<span className="status-dot" />
						Open to work-study
					</span>
					<h1 className="text-5xl font-jacques leading-tight max-lg:text-4xl max-md:text-3xl">
						<span className="text-white/70 text-3xl max-md:text-xl">
							Hey <span className="wave-emoji">👋</span>, I'm
						</span>
						<br />
						<span className="text-gradient">Samy Akchiche</span>
					</h1>
					<p className="text-xl text-custom-secondary-text max-md:text-base">
						Front-End Developer · React · TypeScript · UX/UI
					</p>
					<div className="flex flex-wrap gap-3 text-sm max-md:justify-center">
						<a href="#projects" className="btn-primary">
							See my work
						</a>
						<a href="#experience" className="btn-ghost">
							Resume
						</a>
						<a
							href="https://www.linkedin.com/in/samy-akchiche-704125280/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-ghost"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
				{stats.map((s) => (
					<div key={s.label} className="glass rounded-2xl px-3 py-4">
						<p className="text-3xl font-jacques text-gradient">
							{s.value}
						</p>
						<p className="text-xs text-white/70 mt-1">{s.label}</p>
					</div>
				))}
			</div>
		</div>
	);
}
