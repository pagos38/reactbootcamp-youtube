import useStyles from "./style";

export const Logo = () => {
    const style = useStyles();

    return (
        <img
            className={style.root}
            src="/static/yt_logo_rgb_light.png"
            alt="Youtube Logo"
        />
    );
};
