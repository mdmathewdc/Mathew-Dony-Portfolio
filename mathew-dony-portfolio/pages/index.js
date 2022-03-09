import Head from "next/head";
import Image from "next/image";
import { Header } from "../components";

export default function Home() {
  return (
    <div>
      <Header />
      <Head>
        <title>Mathew Dony</title>
        <meta name="description" content="Portfolio of Mathew Dony" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <footer>
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
