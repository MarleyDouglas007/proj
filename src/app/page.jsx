// import Image from 'next/image'

import styles from "./page.module.css";
const animeData = [
  {
    img: "",
    id: "01",
    nome: "Attack on Titan",
  },
  {
    img: "",
    id: "02",
    nome: "One Piece",
  },
  {
    img: "",
    id: "03",
    nome: "Naruto",
  },
  {
    img: "",
    id: "04",
    nome: "Death Note",
  },
  {
    img: "",
    id: "05",
    nome: "One Punch Man",
  },
  {
    img: "",
    id: "06",
    nome: "Demon Slayer",
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
    <div className="card">
      <img style={{ width: "100%", height: 300 }} src={`/imgcard/img1.png`} />
      <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
        <span>{number}</span>

        <span>{nome}</span>
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
            <Card nome={anime.nome} number={anime.id} />
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
          {animeData.map((anime) => (
            <Card nome={anime.nome} number={anime.id} />
          ))}
        </div>
        
      </Section>
      <Section>
      <div>
        <p>
        <img className={styles.imgcasal} src="imgcasal.png"></img>
        </p>
      </div>
      <div>

      </div>

      </Section>
    </main>
  );
}
