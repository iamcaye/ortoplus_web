import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from './components/nav_v2.js';
import WhatOrthoApnea from './components/what_orthoapnea.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>OrthoApnea</title>
        <link rel="icon" href="/../public/favicon.png"></link>
      </Head>

      <Nav />
      <WhatOrthoApnea />
      <h1>BLABLABLABLABLABLABLABLA</h1>
      <h1>BLABLABLABLABLABLABLABLA</h1>
      <h1>BLABLABLABLABLABLABLABLA</h1>
      <h1>BLABLABLABLABLABLABLABLA</h1>
      <h1>BLABLABLABLABLABLABLABLA</h1>
      <h1>BLABLABLABLABLABLABLABLA</h1>

      <footer className={styles.footer}>
				<h5>Esto será el footer</h5>
      </footer>
    </>
  )
}
