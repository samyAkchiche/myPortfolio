import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CircleAlert, CircleCheck } from "lucide-react";

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
            <h1 className="text-4xl my-6 text-center">Contact Me</h1>
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
                    {/* <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    /> */}
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
                    // <p className="mt-4 text-green-500 text-center">
                    //     Message sent successfully!
                    // </p>
                    <Alert>
                        <CircleCheck color="#00c951" />
                        <AlertTitle>Message sent successfully!</AlertTitle>
                        <AlertDescription>
                            All done! We’ll get back to you before you know it.
                        </AlertDescription>
                    </Alert>
                )}
                {status === "error" && (
                    // <p className="mt-4 text-red-500 text-center">
                    //     Something went wrong, try again
                    // </p>
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
            </form>
        </div>
    );
}
