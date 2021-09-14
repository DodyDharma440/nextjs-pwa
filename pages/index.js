import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";

const Home = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://random-data-api.com/api/name/random_name"
      );
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head title="Home Page" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <div
            className={styles.card}
            style={{ cursor: "pointer" }}
            onClick={getData}
          >
            <h2>Get Random Data &rarr;</h2>
          </div>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About Page &rarr;</h2>
            </a>
          </Link>
        </div>

        <p>The data is : </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
