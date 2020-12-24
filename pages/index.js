import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Nav from './components/nav_v2.js';

export default function Home() {
  const router = useRouter();
  return (
    <>
    <Nav props={router}/>
    <div className={styles.container}>
      <Head>
        <title>OrthoApnea</title>
      </Head>
			<p> bro </p>
      <main className={styles.main}>
				<h1>OrthoApnea is WIPINNNNN boi</h1>
      </main>

      <footer className={styles.footer}>
				<h5>Esto será el footer</h5>
      </footer>
    </div>
    </>
  )
}
