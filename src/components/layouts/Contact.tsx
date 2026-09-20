import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { CircleAlert, CircleCheck, Loader2, Mail, MessageSquare, Send, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Reveal from "@/components/ui/Reveal";

const socials: { label: string; href: string; icon: IconDefinition }[] = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/samy-akchiche-704125280/", icon: faLinkedin },
	{ label: "GitHub", href: "https://github.com/samyAkchiche", icon: faGithub },
	{ label: "Instagram", href: "https://www.instagram.com/nagi.akc/?hl=fr", icon: faInstagram },
	{ label: "Chess.com", href: "https://www.chess.com/member/nagiakc", icon: faChessPawn },
];

const fieldClass =
	"h-12 rounded-xl border-white/15 bg-white/5 pl-11 text-white placeholder:text-white/35 transition-colors focus-visible:border-[#8fb4ff] focus-visible:ring-[#8fb4ff]/25";

type Status = "idle" | "loading" | "success" | "error";

function Field({
	id,
	label,
	icon: Icon,
	children,
	top,
}: {
	id: string;
	label: string;
	icon: typeof User;
	children: React.ReactNode;
	top?: boolean;
}) {
	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.15em] text-custom-secondary-text">
				{label}
			</label>
			<div className="relative">
				<Icon
					size={18}
					className={`pointer-events-none absolute left-4 text-white/45 ${top ? "top-3.5" : "top-1/2 -translate-y-1/2"}`}
				/>
				{children}
			</div>
		</div>
	);
}

export default function Contact() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState<Status>("idle");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (status === "error") setStatus("idle");
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
					time: new Date().toLocaleString(),
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setStatus("success");
					setFormData({ name: "", email: "", message: "" });
				},
				() => setStatus("error")
			);
	};

	return (
		<div className="mx-auto my-16 max-w-5xl">
			<Reveal>
				<div className="mb-3 text-center">
					<h1 className="section-title text-4xl max-md:text-3xl">Get in touch</h1>
				</div>
				<p className="mx-auto mb-12 max-w-xl text-center text-custom-secondary-text">
					Looking for a work-study developer, or have a project in mind?
					Send me a message and I'll get back to you soon.
				</p>
			</Reveal>

			<div className="grid gap-8 md:grid-cols-[0.8fr_1.4fr]">
				<Reveal className="max-md:order-2">
					<div className="flex h-full flex-col gap-6">
						<span className="status-pill w-fit">
							<span className="status-dot" />
							Open to work-study · Sept 2026
						</span>
						<ul className="flex flex-col gap-3">
							{socials.map((s) => (
								<li key={s.label}>
									<a
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										className="glass group flex items-center gap-4 rounded-2xl px-4 py-3"
									>
										<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg transition-colors duration-300 group-hover:bg-[#8fb4ff] group-hover:text-[#0e0a1b]">
											<FontAwesomeIcon icon={s.icon} />
										</span>
										<span>{s.label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</Reveal>

				<Reveal delay={120}>
					<div className="glass glass-static rounded-3xl p-6 md:p-8">
						{status === "success" ? (
							<div className="flex min-h-80 flex-col items-center justify-center gap-4 text-center">
								<span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
									<CircleCheck size={34} />
								</span>
								<h2 className="text-2xl font-jacques">Message sent!</h2>
								<p className="max-w-xs text-custom-secondary-text">
									Thanks for reaching out — I'll reply as soon as I can.
								</p>
								<button
									type="button"
									onClick={() => setStatus("idle")}
									className="btn-ghost mt-2 cursor-pointer text-sm"
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-5">
								<div className="grid gap-5 sm:grid-cols-2">
									<Field id="name" label="Name" icon={User}>
										<Input
											className={fieldClass}
											value={formData.name}
											onChange={handleChange}
											name="name"
											id="name"
											type="text"
											placeholder="Your name"
											autoComplete="name"
											required
										/>
									</Field>
									<Field id="email" label="Email" icon={Mail}>
										<Input
											className={fieldClass}
											value={formData.email}
											onChange={handleChange}
											name="email"
											id="email"
											type="email"
											placeholder="you@example.com"
											autoComplete="email"
											required
										/>
									</Field>
								</div>
								<Field id="message" label="Message" icon={MessageSquare} top>
									<Textarea
										className={`${fieldClass} min-h-40 resize-none py-3`}
										value={formData.message}
										onChange={handleChange}
										name="message"
										id="message"
										placeholder="Tell me about your project or opportunity…"
										required
									/>
								</Field>

								{status === "error" && (
									<p
										role="alert"
										className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
									>
										<CircleAlert size={18} className="mt-0.5 shrink-0" />
										Something went wrong and your message wasn't sent. Please
										try again in a moment.
									</p>
								)}

								<button
									type="submit"
									disabled={status === "loading"}
									className="btn-primary flex h-12 cursor-pointer items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
								>
									{status === "loading" ? (
										<>
											<Loader2 size={18} className="animate-spin" /> Sending…
										</>
									) : (
										<>
											Send message <Send size={18} />
										</>
									)}
								</button>
							</form>
						)}
					</div>
				</Reveal>
			</div>
		</div>
	);
}
