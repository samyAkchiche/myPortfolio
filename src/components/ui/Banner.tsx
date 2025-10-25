type BannerProps = {
    children: React.ReactNode;
    style?: string;
};

export default function Banner({ children, style }: BannerProps) {
    return <div className={style}>{children}</div>;
}
