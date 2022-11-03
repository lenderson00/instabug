import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";

const url = 'https://drive.google.com/drive/folders/1DWLWIWich_HGk1xWpcxxzoizswX2cxmU?usp=share_link'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href={url} target='_blank' rel='noopener noreferrer'>
        ops

      </a>
    </div>
  )
}

export default Home
