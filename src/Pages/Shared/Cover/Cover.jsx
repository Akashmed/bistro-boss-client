import { Parallax } from 'react-parallax';

const Cover = ({ img, title, quote }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="menu cover"
            strength={-200}
        >
            <div className="hero md:h-[550px] h-[400px]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-white h-2/4 bg-black/40 w-2/3 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            {quote}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;