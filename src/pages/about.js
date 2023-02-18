import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from '@/styles/About.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function about() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>About</title>
        <meta name="description" content="About myself, career goals, mindset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={styles.content}>
        <div className={styles.descriptions}>
          <div className={styles.section}>
            <h1>Career</h1>
            <p>Since my first professional endevour in 2018 i worked across multiple industries including: healthcare, travel, gaming, e-commerce, education. Focused primarily on web stack, in front end working mostly with React.js and Node.js in the back. Relational databases like PostgreSQL i spent most of my time with but i did some smaller projects with Firebase and MongoDB. Worked in small startup companies in a team of 2 and 3 people, and bigger organization as a part of the development team of 8-10 people. Mostly worked in Agile, although there were times i had to self organize projects and form deadlines based on my personal projection. Since i am creating my own businesses i have broad spectrum of understanding when it comes to working with clients and what they want/need. Generaly speaking i know how software development cycle is from idea to product launch, and maintaing it after. </p>
          </div>

          <div className={styles.section}>
            <h1>Mindset</h1>
            <p>When i give it little bit of thought, i came to the conclusion that programming came natural, since i always had a kind of an engineering mindset. I always asked people how something works, and getting insight into the background process, and how it operates brings me joy. That was not limited to technology, but human interaction also. Initial idea after highschool was to study Philosophy, but that decision would not make sense considering software was much closer to me at that time. Working in teams and working alone suits me both, depending on the task that i am doing. In next 5-10 years i am going to work on making my dreams come to reality and being good software engineer that understands the process inside and out is big part of that dream. Good challenge does not scare me, as long as there is no unnecessary pressure. I think life is hard enough on it’s own and we don’t have to make it harder for no reason.</p>
          </div>

          <div className={styles.section}>
            <h1>About me</h1>
            <p>25 years old programmer and entrepreneur in progress :) When im not programming and developing my business ideas, i like to spend time with my family, girl and friends. Did not do so well in school, finished high school and instead of going to college went on my way to learn programming. I was into technology from an early age. Got my first PC at the age of 7 and that is when i fell in love pretty much. At a younger age i used to not be that much intereseted in the computer realm, but more so mobile devices. When i was like 14-15 i used to flash CM 7 and similar custom ROM’s and broke couple of phones in the process. There was also a phase with the computer hardware which lasted couple of years, when i wanted to start my custom PC build company where anybody could get builds for their specific needs. Life happens and we leave our dreams to wait in exchange for short term goals.</p>
          </div>
        </div>
        <Image width={400} height={677} src="/assets/profile_photo.png"/>
      </div>
  </div>
  )
}
