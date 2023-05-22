import Image from "next/image";
import { FC } from "react";

const FitifyLoader: FC = (): JSX.Element => (
    <Image
        priority
        src="images/loader.svg"
        alt="Fitify Loader"
        width={50}
        height={50}
        className="h-auto w-60 m-auto mt-28 animate-pulse"
    />
);

export default FitifyLoader;
