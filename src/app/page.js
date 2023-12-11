// import Image from 'next/image'
import styles from './page.module.css'
function Titulo ({x, y}){
  return(
    <h2 style={{left:x, top:y}} className={styles.titulo}>
      Best house plants varieties.
    </h2>
  )
}

export default function Home() {
  return (
    <main className='main'>
      <Titulo x={26.26} y={119.24}/>
    </main>
  )
}
