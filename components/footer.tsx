import Image from "next/image"

import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_content}>
                <div className={styles.logo_wrapper}>
                    <Image src={"/assets/logo.svg"} height={50} width={50}></Image>
                    <div>
                        India Vaccine
                    </div>
                </div>
                <p>
                    We are a volunteer driven organisation that tries to present information accurately but does not make any legal guarantees as to the accuracy of the information. We do not provide medical advice.
                </p>
                <div className={styles.footer_social}>
                    <div className={styles.social_element}>
                        <Image layout={"fixed"}
                            src="/assets/instagram.svg"
                            width={43}
                            height={42.98}
                            alt={"instagram icon"} />
                        Follow us on Instagram
                    </div>
                    <div className={styles.social_element}>
                        <Image layout={"fixed"}
                            src="/assets/twitter.svg"
                            width={45}
                            height={36}
                            alt={"twitter icon"} />
                        Follow us on Twitter
                    </div>
                    <div className={styles.social_element}>
                        <Image layout={"fixed"}
                            src="/assets/discord.svg"
                            width={43.92}
                            height={49.4}
                            alt={"discord icon"} />
                        Join our Discord
                    </div>
                </div>
            </div>
        </footer>
    )
}