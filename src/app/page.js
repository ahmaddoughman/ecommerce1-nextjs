import Image from "next/image";
import styles from './home.module.css'

export default function Home() {
  return (
    <div>
      <h1 style={{fontSize:"76px" ,marginBottom:"20px"}}>Create thought Agency</h1>
      <p style={{lineHeight:"1.7"}}>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
         Esse quo quidem maiores labore molestias veritatis dolore. 
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt="" fill className={styles.brandImg} />
      </div>
    
     <div style={{right:"100px", top:"20%" ,position:"fixed"}}>
        <Image src='/hero.gif' alt="homeimage" width={500} height={500}/>
      </div>
    
    </div>
  );
}
