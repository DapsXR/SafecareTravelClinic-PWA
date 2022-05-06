import Head from 'next/dist/shared/lib/head'
import styles from '../styles/Home.module.css'
import next from 'next'
import { container } from '@nextui-org/react'
import Navbar from '../components/navigation/navbar'


export default function Book() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Apointment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Travel Consultation Booking
        </h1>
        <span>
            Use the form below to quickly book your appoitnment type, fill out any required forms 
            and pre-pay. 
        </span>

        <iframe src="https://form.jotform.com/221216477902252"
          width="100%"
          height="750" >
        </iframe >
      </main>
    </div>
  )
}
