import { Briefcase, GraduationCap, Award, Languages, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Experience = {
	role: string;
	company: string;
	type: string;
	period: string;
	location: string;
	points?: string[];
	tags?: string[];
};

type Education = {
	school: string;
	degree: string;
	period: string;
	note?: string;
	tags?: string[];
};

const experiences: Experience[] = [
	{
		role: "Commercial Assistant",
		company: "Fnac",
		type: "Internship",
		period: "May 2026 – Jul 2026",
		location: "Paris, France · On-site",
		tags: ["Merchandising", "Sales Operations"],
	},
	{
		role: "Sales Assistant",
		company: "Fnac – Forum des Halles",
		type: "Internship",
		period: "May 2026 – Jun 2026",
		location: "Paris, France · On-site",
		points: [
			"Helped customers understand the technical features of audio and multimedia products.",
			"Used internal tools for stock management, orders and checkout operations.",
			"Strengthened communication, teamwork and prioritisation in a fast-paced environment.",
		],
	},
	{
		role: "Student Volunteer",
		company: "Linkee",
		type: "Volunteering",
		period: "Oct 2025 – Dec 2025",
		location: "Nanterre, France · On-site",
	},
	{
		role: "Gym Trainer",
		company: "Nani Gym",
		type: "Part-time",
		period: "Oct 2023 – Jun 2024",
		location: "Tizi Ouzou, Algeria · On-site",
	},
	{
		role: "Cashier",
		company: "Rahma City",
		type: "Part-time",
		period: "Mar 2023 – Sep 2023",
		location: "Tizi Ouzou, Algeria · On-site",
		points: [
			"Handled priorities and solved problems in a busy, high-traffic store.",
			"Organised and restocked shelves to keep products available and visible.",
			"Coordinated a team of cashiers, including scheduling.",
		],
	},
];

const education: Education[] = [
	{
		school: "Université Paris 8",
		degree: "Master's – Création et Expérience Numérique (CEN)",
		period: "From Sep 2026",
		note: "Work-study programme (around 3 weeks at the company / 1 week at school).",
	},
	{
		school: "Université Paris Nanterre",
		degree: "Bachelor's – English Language, Literature & Civilization (LLCER)",
		period: "Sep 2025 – Present",
		note: "Third-year Licence.",
		tags: ["Teaching English as a Foreign Language", "Academic Writing"],
	},
	{
		school: "Université Mouloud Mammeri, Tizi-Ouzou",
		degree: "Bachelor of Education – English Language and Literature",
		period: "Sep 2022 – Jun 2025",
		tags: ["Teaching English as a Foreign Language", "Academic Writing"],
	},
];

const certifications = [
	{ name: "Meta Front-End Developer Professional Certificate", date: "Oct 2025" },
	{ name: "Front-End Developer Capstone (Meta)", date: "Aug 2025" },
	{ name: "Principles of UX/UI Design (Meta)", date: "2025" },
];

const languages = [
	{ name: "French", level: "Fluent" },
	{ name: "English", level: "Native / bilingual" },
	{ name: "Arabic", level: "Native" },
];

function SectionTitle({
	icon: Icon,
	children,
}: {
	icon: typeof Briefcase;
	children: React.ReactNode;
}) {
	return (
		<h2 className="flex items-center gap-3 text-3xl mb-8 max-md:text-2xl">
			<Icon className="text-custom-secondary-accent" size={28} />
			<span className="section-title">{children}</span>
		</h2>
	);
}

function Tags({ items }: { items?: string[] }) {
	if (!items?.length) return null;
	return (
		<div className="mt-3 flex flex-wrap gap-2">
			{items.map((tag) => (
				<span
					key={tag}
					className="px-3 py-1 text-xs rounded-full bg-white/10 text-custom-secondary-text"
				>
					{tag}
				</span>
			))}
		</div>
	);
}

export default function Resume() {
	return (
		<div className="flex flex-col gap-14 py-10">
			<div>
				<Reveal>
					<SectionTitle icon={Briefcase}>Experience</SectionTitle>
				</Reveal>
				<ol className="relative border-l-2 border-transparent [border-image:linear-gradient(to_bottom,#9b82f3,#8fb4ff,transparent)_1] ml-3 flex flex-col gap-8">
					{experiences.map((exp, i) => (
						<li key={`${exp.company}-${exp.period}`} className="ml-8">
							<Reveal delay={i * 80}>
								<span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#8fb4ff] to-[#9b82f3] ring-4 ring-custom-bg shadow-[0_0_14px_#9b82f3]" />
								<div className="glass rounded-2xl p-5">
									<div className="flex flex-wrap items-baseline justify-between gap-x-4">
										<h3 className="text-xl font-semibold">{exp.role}</h3>
										<span className="text-sm text-custom-secondary-text">
											{exp.period}
										</span>
									</div>
									<p className="text-custom-secondary-text">
										{exp.company} · {exp.type}
									</p>
									<p className="mt-1 flex items-center gap-1 text-sm text-white/60">
										<MapPin size={14} /> {exp.location}
									</p>
									{exp.points && (
										<ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-white/80 space-y-1">
											{exp.points.map((p) => (
												<li key={p}>{p}</li>
											))}
										</ul>
									)}
									<Tags items={exp.tags} />
								</div>
							</Reveal>
						</li>
					))}
				</ol>
			</div>

			<div>
				<Reveal>
					<SectionTitle icon={GraduationCap}>Education</SectionTitle>
				</Reveal>
				<div className="grid gap-5 md:grid-cols-2">
					{education.map((ed, i) => (
						<Reveal key={ed.school} delay={i * 80}>
							<div className="glass h-full rounded-2xl p-5">
								<p className="text-sm text-custom-secondary-text">{ed.period}</p>
								<h3 className="text-lg font-semibold mt-1">{ed.school}</h3>
								<p className="text-white/80">{ed.degree}</p>
								{ed.note && (
									<p className="mt-2 text-sm text-white/60">{ed.note}</p>
								)}
								<Tags items={ed.tags} />
							</div>
						</Reveal>
					))}
				</div>
			</div>

			<div className="grid gap-10 md:grid-cols-2">
				<div>
					<Reveal>
						<SectionTitle icon={Award}>Certifications</SectionTitle>
					</Reveal>
					<ul className="flex flex-col gap-3">
						{certifications.map((c, i) => (
							<Reveal key={c.name} delay={i * 80}>
								<li className="glass rounded-xl px-4 py-3 flex justify-between gap-4">
									<span>{c.name}</span>
									<span className="text-sm text-custom-secondary-text whitespace-nowrap">
										{c.date}
									</span>
								</li>
							</Reveal>
						))}
					</ul>
				</div>
				<div>
					<Reveal>
						<SectionTitle icon={Languages}>Languages</SectionTitle>
					</Reveal>
					<ul className="flex flex-col gap-3">
						{languages.map((l, i) => (
							<Reveal key={l.name} delay={i * 80}>
								<li className="glass rounded-xl px-4 py-3 flex justify-between gap-4">
									<span>{l.name}</span>
									<span className="text-sm text-custom-secondary-text">{l.level}</span>
								</li>
							</Reveal>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
