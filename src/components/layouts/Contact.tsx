export default function Contact() {
    return (
        <>
            <h1 className="text-4xl my-6 text-center">Contact Me</h1>
            <form action="">
                <label htmlFor="email" aria-label="email">
                    Email
                </label>
                <input type="email" id="email" name="email" />
            </form>
        </>
    );
}
