import Image from "next/image";
import { ReactNode } from "react";

import styles from "../styles/Button.module.css"

interface ButtonInterface {
    children: ReactNode,
    type: "solid" | "outline"
}

export default function Button({ children, type }: ButtonInterface) {
    return (
        <div className={styles.button} style={{backgroundColor: "#060683", color: "white"}}>
            <Image src={"/assets/small_human.svg"} height={25.22} width={20.66}></Image>
            { children}
        </div>
    )
}