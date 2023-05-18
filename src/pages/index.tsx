import Image from "next/image";

export default function Home() {
  return (
    <main className="text-green-500">
      <Image src="images/fitify.svg" alt="Fitify" width={'300'} height={'150'}/>
      Hello Fitify!
    </main>
  );
}
