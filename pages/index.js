import Head from "next/head";
import styles from "../styles/Home.module.css";
const contentful = require("contentful");

export default function Home({ name, talkTime, photo, socials, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          {new Date(talkTime).toDateString()}
        </p>

        <img
          src={photo.fields.file.url}
          height="300px"
          style={{ borderRadius: "50%" }}
        />
        <h2 style={{ fontWeight: 500 }}>By: {name}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {socials.map((social) => (
            <a
              href={social.fields.href}
              key={social.sys.id}
              className={styles.card}
            >
              <h3>{social.fields.handle}</h3>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntry("6qHKZFEWn3iUpdz8m7kAz8");
  return {
    props: { ...response.fields },
  };
};
