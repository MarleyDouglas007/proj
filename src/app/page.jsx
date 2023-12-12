// import Image from 'next/image'
import styles from './page.module.css'
import tokyo from "../../public/fundopag.png" 
function Titulo ({x, y}){
  return(
    <h2 style={{left:x, top:y}} className={styles.titulo}>
      Best house plants varieties.
    </h2>
  )
}

function Section({children}){
  return(
    <div style={{border: 2}} > 
    {children}
    </div>
  )
}

function Card({img, number, nome}){
  return(
    <div className='card'>
      <img style={{width: 100, height: 100}} src='https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png'/>
      <div>
        <span>
          { number}
        </span>

        <span>
          {nome}
        </span>
      </div>
    </div>  
  )
}

export default function Home() {
  return (
    <main className='main'>
      <Section>
        teste 
      <p  className={styles.titulo}>teste</p>
      </Section>

      <Section> 
        <div> 
    
        </div>

        <div>

        </div>
      </Section>
    </main>
  )
}
