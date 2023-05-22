import Link from "next/link";
import { FC } from "react";

const error: FC = (): JSX.Element => (
    <main className="h-screen flex flex-col items-center justify-center text-center p-6 gap-6">
        <h3 className="font-bold text-4xl text-red-500">We are sorry but something went wrong. 😢</h3>
        <Link href={"/"} className="bg-fitifyGrey text-gray-800 p-3 rounded-lg border border-gray-400">
            Back to main page
        </Link>
    </main>
);

export default error;
