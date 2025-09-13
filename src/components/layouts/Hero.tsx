import profile from "../../assets/Profile.jpg";

export default function Hero() {
    return (
        <div className="flex justify-center items-center gap-4 h-96">
            <img
                src={profile}
                alt="profile picture"
                className="w-40 h-40 rounded-full object-cover"
            />
            <h1 className="text-3xl font-jacques">
                <span className="text-gray-400">Hey👋, I am </span> Samy
                Akchiche. <br />
                <span className="text-gray-400"> I am a </span>Front-End
                Developer.
            </h1>
        </div>
    );
}
