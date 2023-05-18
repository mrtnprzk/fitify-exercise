import Image from "next/image";

export default function Home() {
  return (
    <main className="text-green-500">
      <Image priority src="images/fitify.svg" alt="Fitify Logo" width={200} height={75} className="h-auto w-40"/>
      Hello Fitify!
    </main>
  );
}
