import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const githubRepository = "https://github.com/mrtnprzk/fitify-exercise";

const FitifyLogo: FC = (): JSX.Element => (
    <Link href={githubRepository}>
        <Image priority src="images/fitify.svg" alt="Fitify Logo" width={200} height={75} className="h-auto w-60" />
    </Link>
);
export default FitifyLogo;
