import { FC } from "react";
import Image from "next/image";

const FitifyLogo: FC = (): JSX.Element => (
  <Image
    priority
    src="images/fitify.svg"
    alt="Fitify Logo"
    width={200}
    height={75}
    className="h-auto w-60"
  />
);

export default FitifyLogo;
