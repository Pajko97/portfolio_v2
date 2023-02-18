import Image from 'next/image'
import styles from './Position.module.css'


export default function Position( props ) {
  
  
  const { 
    name,
    job_title,
    country,
    industry,
    description,
    responsibilities,
    tech
  } = props.position
  
  
  
  return (
    <div className={styles.position}>
      <div className={styles.company_information}>
        <div className={styles.company_basic_info}>
          <h2 className={styles.company_position}>{job_title}</h2>
          <p className={styles.company_name}>{name}</p>
          <p className={styles.company_industry}>{industry}</p>
        </div>
        <p className={styles.company_description}>
          {description}
        </p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.resp_and_tech}>
       <div className={styles.resp}>
       <h2>Responsibilities</h2>
         {responsibilities.map((res, i) => {
          return(
            <li key={i} >{res}</li>
          )
          })} 
       </div>

       <div className={styles.tech}>
         <h2>Technologies/Frameworks</h2>
         <div className={styles.tech_container}>
           {tech.map((tec, i) => {
            return(
              <div key={i} className={styles.tech_single}>
                <Image alt={`${tec} logo`} src={`/assets/technologies/${tec}_logo.svg`} height={40} width={40}/>
              </div>
            )
           })}
         </div>
       </div>
    </div>
  </div>
  )
}
