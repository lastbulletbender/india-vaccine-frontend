import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar_wrapper}>
            <div className={styles.navbar_content}>
                <div className={styles.logo_wrapper}>
                    <Image src={"/assets/logo.svg"} height={50} width={50}></Image>
                    <div>
                        India Vaccine
                    </div>
                </div>
                <div className={styles.routes}>
                    <Link href="/speakers">Speakers</Link>
                    <Link href="/sponsors">Sponsors</Link>
                </div>
            </div>
        </nav>
    )
}
// import Link from "next/link"
// import Image from "next/image"

// import style from "../styles/Navbar.module.scss"

// import Logo from "./logo"

// interface Props {
//     page: "speakers" | "sponsors" | "home"
// }

// export default function Navbar(props: Props) {
//     return (
//         <nav className={style.navbar_wrapper}>
//             <div className={style.logo}>
//                 <Logo />
//             </div>
//             <div className={style.routes}>
//                 <Link href="/speakers"><a className={props.page === "speakers" ? "inRed" : null}>Speakers</a></Link>
//                 {/* <Link href="/team">Team</Link> */}
//                 <Link href="/sponsors"><a className={props.page === "sponsors" ? "inRed" : null}>Sponsors</a></Link>
//             </div>
//             <div className={style.social}>
//                 <a href="https://linkedin.com/company/tedxxie" rel="noreferrer noopener" target="_blank">
//                     <Image layout={"fixed"}
//                         src="/assets/linkedin.svg"
//                         width={20}
//                         height={20}
//                         alt={"linkedin icon"} />
//                 </a>
//                 <a href="https://instagram.com/tedxxie/" rel="noreferrer noopener" target="_blank">
//                     <Image layout={"fixed"}
//                         src="/assets/instagram.svg"
//                         width={20}
//                         height={20}
//                         alt={"instagram icon"} />
//                 </a>
//             </div>

//         </nav>
//     )
// }