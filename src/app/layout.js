import './globals.css'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from '../../public/Frame 7.png'
import premium from '../../public/Frame 8.png'
import search from '../../public/Rectangle 4.png'
import icon from '../../public/Account.png'

function InicialL() {
  return (
    <span className={styles.degrad}></span>
  );
}
export const metadata = {
  title: 'Freebie | Planty |  Plants E-commerce Landing Page Design',
}

function Logo({ x, y }) {
  return (
    <div style={{ left: x, top: y }} className={styles.logo}>
      <Image src={logo} />
    </div>
  )
}
function ItemMenu({ primeiraLetra, textoRestante, estiloPrimeiraLetra }) {
  return (
    <div>
      <p className={styles.itemMenu}>
        <span style={estiloPrimeiraLetra}>{primeiraLetra}</span>{textoRestante}
      </p>
    </div>
  );
}
// function ItemMenu({ nome, primeiraLetra, textoRestante, estiloPrimeiraLetra }) {
//   return (
//     <div>
//       {/* <p className={styles.itemMenu}>{nome}</p> */}
//       <p className={styles.itemMenu}><span style={estiloPrimeiraLetra}>{primeiraLetra}</span>{textoRestante}</p>

//     </div>
//   );

// }

function Menu({ children }) {
  return (
    <ul className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}


//aaa
function Premium() {
  return (
    <p className={styles.premium}>
      <Image src={premium} />
    </p>
  );
}

function Search() {
  return (
    <p className={styles.search}>
      <span className={styles.s}>S</span>earch <span className={styles.anime}>A</span>nime
    </p>
  );
}

function Icon() {
  return (
    <p className={styles.icon}>
      <Image src={icon} />
    </p>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className={styles.nav}>
            <Logo x={70} y={58} />
            <Menu>
              <ItemMenu
                primeiraLetra="G"
                textoRestante="enre"
                estiloPrimeiraLetra={{
                  background: 'linear-gradient(114deg, #C93677 -2.94%, #33ADDF 41.89%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              />
              <ItemMenu
                primeiraLetra="M"
                textoRestante="ovies"
                estiloPrimeiraLetra={{ color: 'blue' }}
              />
              <ItemMenu
                primeiraLetra="O"
                textoRestante="NAs"
                estiloPrimeiraLetra={{ color: 'blue' }}
              />
              <ItemMenu
                primeiraLetra="N"
                textoRestante="ews"
                estiloPrimeiraLetra={{ color: 'blue' }}
              />
            </Menu>
            <Premium />
            <Search />
            <Icon />
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <header>
//           <div className={styles.nav}>


//             <Logo x={70} y={58} />
//             <Menu>
//               {/* <ItemMenu nome=<p className={styles.degrad}>Geren</p> /> */}
//               <ItemMenu primeiraLetra="G" textoRestante="enre" estiloPrimeiraLetra={{ color: 'blue' }} />
//               <ItemMenu primeiraLetra="M" textoRestante="ovies" estiloPrimeiraLetra={{ color: 'blue' }} />
//               <ItemMenu primeiraLetra="O" textoRestante="NAs" estiloPrimeiraLetra={{ color: 'blue' }} />
//               <ItemMenu primeiraLetra="N" textoRestante="ews" estiloPrimeiraLetra={{ color: 'blue' }} />
//             </Menu>
//             <Premium />
//             <Search />
//             <Icon />
//           </div>
//         </header>
//         <main>
//           {children}
//         </main>
//       </body>
//     </html>
//   )
// }
