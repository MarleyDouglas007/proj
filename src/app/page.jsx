import Image from 'next/image'
import img1 from '../../public/imgcard/img1.png'
import img2 from '../../public/imgcard/img2.png'
import img3 from '../../public/imgcard/img3.png'
import img4 from '../../public/imgcard/img4.png'
import img5 from '../../public/imgcard/img5.png'
import img6 from '../../public/imgcard/img6.png'
import img7 from '../../public/imgcard/img7.png'
import img8 from '../../public/imgcard/img2.png'
import img9 from '../../public/imgcard/img9.png'
import img10 from '../../public/imgcard/img10.png'
import img11 from '../../public/imgcard/img11.png'
import img12 from '../../public/imgcard/img12.png'

import styles from "./page.module.css";
const animeData = [
  {
    img: img1,
    id: "01",
    nome: "Attack on Titan",
  },
  {
    img: img2,
    id: "02",
    nome: "One Piece",
  },
  {
    img: img3,
    id: "03",
    nome: "Naruto",
  },
  {
    img: img4,
    id: "04",
    nome: "Death Note",
  },
  {
    img: img5,
    id: "05",
    nome: "One Punch Man",
  },
  {
    img: img6,
    id: "06",
    nome: "Demon Slayer",
  },
];

const topAiring = [
  {
    img: img7,
    id: "01",
    nome: "Tokyo Revengers",
  },
  {
    img: img2,
    id: "02",
    nome: "One Piece",
  },
  {
    img: img9,
    id: "03",
    nome: "Vinland Saga",
  },
  {
    img: img10,
    id: "04",
    nome: "Blue Lock",
  },
  {
    img: img11,
    id: "05",
    nome: " Spy x Family",
  },
  {
    img: img12,
    id: "06",
    nome: "Chainsaw Man",
  },
];

function Titulo({ x, y }) {
  return (
    <h2 style={{ left: x, top: y }} className={styles.titulo}>
      Best house plants varieties.
    </h2>
  );
}

function Section({ children }) {
  return <div style={{ border: 2 }}>{children}</div>;
}

function Card({ img, number = "1", nome }) {
  return (
    <div  className="card">
      <Image style={{ width: "100%", height: 300 }} src={img} />
      <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
        <span className={styles.numero}>{number}</span>

        <span className={styles.subtitulo}>{nome}</span>
      </div>
    </div>
  );
}

//botao 
// function Botao({children , icon}){
//   return(
//     <p>
//       {icon && <img src={`/icons/${icon}`} alt="Icon" style={styles.a}/>}
//       {children}
//     </p>

//   )
// }
//fim
export default function Home() {
  return (
    <main className="main">

      {/* PRIMEIRO BLOCO */}
      <Section>
        <p>#1 spotight</p>
        <div>
          <h1 className={styles.titulo}>Tokyo Revengers: Christmas Showdown</h1>
        </div>
        <div>
          
        </div>

        {/* <div className="2botoes">
          <Botao icon="Frame 2.png">W</Botao>
          <Botao icon="Vector.png">W</Botao>

        </div> */}
         <div>
          <p className={styles.descricao}>
          Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with t...More 
          </p>
        </div> 
        

        <div>
          <button className={styles.buttonDefault}>
            <img style={{width: 10, height: 10}} src="icons/Vector.png"/>
            watch Now
          </button>
          <button className={styles.buttonDefault}>
          <img style={{width: 10, height: 10}} src="icons/Plus icon.png"/>
            add to list
          </button>
        </div>
        
      </Section>

      {/* SEGUNDO BLOCO   */}
      <Section>
      <br/><span className={styles.button}> Most Popular</span><br/><br/>
        {/* <p className={styles.titulo}>teste</p> */}
        <div
          style={{
            display: "flex",
            gap: 0,
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {animeData.map((anime) => (
            <Card nome={anime.nome} number={anime.id} img={anime.img} />
          ))}
        </div>
        <br/><span className={styles.button}> Top Airing</span><br/><br/>
        {/* <p className={styles.titulo}>teste</p> */}
        <div
          style={{
            display: "flex",
            gap: 0,
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {topAiring.map((anime) => (
            <Card nome={anime.nome} number={anime.id} img={anime.img} />
          ))}
        </div>
      </Section>

      {/* TERCEIRO BLOCO */}
      <Section>
        {/* imagem  */}
      <div>
        <p>
        <img className={styles.imgcasal} src="imgcasal.png"></img>
        </p>
      </div>

      {/* <div> */}

        {/* titulo da imagem */}
        <div>
        <h1 className={styles.casalrota}>Don't Toy with Me, Miss Nagatoro</h1>
        </div>

            {/* descriçao da imagem */}
        <div>
        <p className={styles.descricao}>
        "A girl in a lower grade just made me cry!" One day, Senpai visits the library after school and becomes the target of a super sadistic junior! The name of the girl who teases, torments, and tantalizes Senpai is "Nagatoro!" She's annoying yet adorable. It's painf... More
        </p>
        </div>

            {/* BOTOES! */}
        <div>
          <button className={styles.buttonDefault}>
            <img style={{width: 10, height: 10}} src="icons/Vector.png"/>
            watch Now
          </button>
          <button className={styles.buttonDefault}>
          <img style={{width: 10, height: 10}} src="icons/Plus icon.png"/>
            add to list
          </button>
        </div>
      {/* </div> */}
  
      </Section>

      {/* QUARTO BLOCO  */}
      <Section>
          <p className={styles.button}>Upcoming</p>

          <div>
            <p>
            <img src="casal2.png"></img>
            </p>
          </div>

          <div>
              {/* botao1 */}
            <button>
                Animation
            </button>

               {/* botao2 */}
            <button >
              Action
            </button>

            {/* botao3 */}
            <button >
              Adventure
            </button>
        </div>

        <div>
          <p className={styles.descricao}>
          A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the outer side that are releasing disasters all over in Japan.
          </p>
        </div>

      </Section>
    </main>
  );
}
