import Head from "next/head";
import Image from "next/image";
import { Header } from "components";

export default function Home() {
  return (
    <div>
      <Header />
      <Head>
        <title>Mathew Dony</title>
        <meta name="description" content="Portfolio of Mathew Dony" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>
          Welcome to my portfolio!
        </h1>

        <p>
          <code>This is the start of an editing session</code>
        </p>
      </main>

      <footer>
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
