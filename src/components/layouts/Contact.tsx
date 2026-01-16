import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CircleAlert, CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
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
				() => {
					setStatus("error");
				}
			);
	};
	return (
		<div className="max-w-xl mx-auto my-12 px-4">
			<h1 className="text-4xl my-6 text-center max-md:text-3xl">
				Contact Me
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div>
					<label htmlFor="name">Name</label>
					<Input
						value={formData.name}
						onChange={handleChange}
						name="name"
						id="name"
						type="text"
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<Input
						value={formData.email}
						onChange={handleChange}
						type="email"
						required
						id="email"
						name="email"
					/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<Textarea
						value={formData.message}
						onChange={handleChange}
						name="message"
						id="message"
						required
					/>
				</div>
				<Button type="submit" className="cursor-pointer">
					Send
				</Button>
				{status === "success" && (
					<Alert>
						<CircleCheck color="#00c951" />
						<AlertTitle>Message sent successfully!</AlertTitle>
						<AlertDescription>
							All done! We’ll get back to you before you know it.
						</AlertDescription>
					</Alert>
				)}
				{status === "error" && (
					<Alert variant="destructive">
						<CircleAlert color="#fb2c36" />
						<AlertTitle>
							Something went wrong, try again.
						</AlertTitle>
						<AlertDescription>
							We couldn’t send your message. Try again in a few
							moments.
						</AlertDescription>
					</Alert>
				)}
				<div className="flex gap-14 justify-center mt-4">
					<a
						href="https://www.linkedin.com/in/samy-akchiche-704125280/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							size="2xl"
							className="text-white transition-colors duration-300 hover:text-blue-600"
						/>
					</a>
					<a
						href="https://www.instagram.com/nagi.akc/?hl=fr"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faInstagram}
							size="2xl"
							className="text-white transition-colors duration-300 hover:text-pink-500"
						/>
					</a>
					<a
						href="https://github.com/samyAkchiche"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faGithub}
							size="2xl"
							className="text-white"
						/>
					</a>
					<a
						href="https://www.chess.com/member/nagiakc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faChessPawn}
							size="2x"
							className="text-white hover:text-green-500 transition-colors duration-300"
						/>
					</a>
				</div>
			</form>
		</div>
	);
}
