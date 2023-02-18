import React from 'react'
import Image from 'next/image'
import styles from './Project.module.css'


export default function Position( props ) {
  
  
  const { 
    name,
    logoSrc,
    previewSrc,
    status,
    description
  } = props.project
  
  
  
  return (
    <div className={styles.position}>
      <div className={styles.company_information}>
        <div className={styles.company_basic_info}>
          <h2 className={styles.company_position}><Image src={logoSrc} height={100} width={200}/></h2>
        </div>
        <p className={styles.company_description}>
          {description}
        </p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.resp_and_tech}>
        <Image src={previewSrc} height={400} width={600}/>
      </div>
  </div>
  )
}
