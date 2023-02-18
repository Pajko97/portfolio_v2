import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import styles from '@/styles/Apps.module.css'
import Head from 'next/head'
import Project from '@/components/Project/Project'

const projects_list = [

  {
    name : "PC Build",
    description : "Get custom PC built just for you. You need whole setup on one place, we do that also. Premium Build features machine encased in the desk itself, and much more. Configure your machine by choosing parts or we will do that for you. Based on your preferences and what you intend to use with your machine.",
    logoSrc : '/assets/projects/pcbuild_logo.svg',
    previewSrc: '/assets/projects/pcbuild_preview.png',
    status: "IN PROGRESS",
    hasLink : false
  },
   
  {
    name : "Parlament Gaming Room",
    description : "Get custom PC built just for you. You need whole setup on one place, we do that also. Premium Build features machine encased in the desk itself, and much more. Configure your machine by choosing parts or we will do that for you. Based on your preferences and what you intend to use with your machine.",
    logoSrc : '/assets/projects/parlament_logo.svg',
    previewSrc: '/assets/projects/parlament_preview.png',
    status: "IN PROGRESS",
    hasLink : true
  },
  
  {
    name : "Fill Stack",
    description : "Get custom PC built just for you. You need whole setup on one place, we do that also. Premium Build features machine encased in the desk itself, and much more. Configure your machine by choosing parts or we will do that for you. Based on your preferences and what you intend to use with your machine.",
    logoSrc : '/assets/projects/fillstack_logo.svg',
    previewSrc: '/assets/placeholder.jpg',
    status: "IN PROGRESS",
    hasLink : false
  }

]


export default function apps() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Recent Projects</title>
        <meta name="description" content="Projects i am working on" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={styles.content}>
       {projects_list.map((project, i) => {
          return(
            <Project key={i} project={project} />
          )
        })}
      </div>
  </div>
  )
}
