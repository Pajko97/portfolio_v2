import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from '@/styles/Work.module.css'
import Head from 'next/head'
import Position from '@/components/Position/Position'

const positions = [
  {
    name : "Togetherall",
    job_title: "Full Stack Developer",
    country: "UK",
    industry : "Healthcare",
    description : "Togetherall is a safe, online community where people support each other anonymously to improve mental health and wellbeing.",
    responsibilities : ["Implement new and manage existing functionalities", "Suggest improvements on the UI to the design team", "Work with partners on 3rd party system integration"],
    tech: ['graphql', 'react', 'postgre', 'nodejs']
  },
  {
    name : "Swiss Premium Negoce",
    job_title: "Full Stack Developer",
    country: "Switzerland",
    industry : "Tourism & Concierge",
    description : "Swiss Premium Negoce is a Luxury travel and Concierge Company based in Switzerland, Geneva. It is a passion-driven business, which was established in 2011 by our ardent dedicated founders who have built their careers in high luxury hospitality management. SPN‘s main mission consists in delivering lavish tailor made services , which perfectly responds to its discerning client‘s requirements.",
    responsibilities : ["Implement new and manage existing functionalities", "Suggest improvements on the UI to the design team", "Work with partners on 3rd party system integration"],
    tech: ['react', 'postgre', 'nodejs']
  },

  {
    name : "Top Shipment",
    job_title: "React developer",
    country: "Serbia",
    industry : "Shipping",
    description : "US mailing address and personal package forwarding!",
    responsibilities : ["Implement new and manage existing functionalities", "Suggest improvements on the UI to the design team", "Work with partners on 3rd party system integration"],
    tech: ['react', 'postgre', 'nodejs']
  },


]


export default function projects() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Work Experience</title>
        <meta name="description" content="Previous working experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={styles.content}>
       {positions.map((position, i) => {
          return(
            <Position key={i} position={position} />
          )
       })}
      </div>
  </div>
  )
}
