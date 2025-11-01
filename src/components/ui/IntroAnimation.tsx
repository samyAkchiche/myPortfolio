import { useEffect } from "react";

interface IntroAnimationProps {
    onAnimationEnd: () => void;
}

export default function IntroAnimation({
    onAnimationEnd,
}: IntroAnimationProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 500);
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="relative w-full h-2">
            <div className="absolute top-1 left-0 h-1 w-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r shadow-[0_0_15px_#a855f7]"
                    style={{
                        background: `linear-gradient(to right, var(--lineBar-from), var(--lineBar-to))`,
                        width: 0,
                        animation:
                            "lineGrow 1s ease-out forwards, fadeOut 0.2s ease-in forwards 1.2s",
                    }}
                />
            </div>
        </div>
    );
}
