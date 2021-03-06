import Image from "next/image"

import styles from "../../styles/home/landing.module.css"
import Button from "../button"

export default function Landing() {
    return (
        <div className={styles.landing_wrapper}>
            <div>
                <h1>
                    We’re Making it Easier to Find Vaccination Centers
                </h1>
                <p>
                    We're trying to build out a verified list of crowd-sourced list of Vaccination Centers across the country so that people can get reliable information in a quick & easy manner.
                </p>
                <div className={styles.button_wrapper}>
                    <Button type={"solid"}>Join the Team</Button>
                    <Button type={"outline"}>Learn More</Button>
                </div>
                
            </div>
            <div className={styles.avatar}>
                <Image src={"/assets/avatar_landing.svg"}
                    height={407.08} width={423}/>
            </div>
        </div>
    )
}