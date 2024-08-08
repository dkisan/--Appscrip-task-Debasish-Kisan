'use client'
import Image from "next/image";
import styles from "./style.module.css"
import { useState } from "react";


const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    const handleHamburgerClick = () => {
        setNavOpen(!navOpen);
    };


    return (
        <header className={styles.header}>
            <section className={styles.container}>
                <div>
                    <div className={styles.hamburger}
                        onClick={handleHamburgerClick}>
                        {navOpen ?
                            <span>X</span>
                            :
                            <Image src={'/hamburger.svg'} alt="Menu toggle icon" width={20} height={20} aria-label="Toggle navigation menu" />
                        }
                    </div>
                    <Image src={'/logo.png'} width={20} height={20} />
                </div>
                <div className={styles.companyname}>
                    LOGO
                </div>
                <div className={styles.useractions}>
                    <Image src={'/search.svg'} alt="Search icon" width={19} height={19} aria-label="Search" />
                    <Image src={'/wishlist.svg'} alt="Wishlist icon" width={19} height={19} aria-label="Wishlist" />
                    <Image src={'/cart.svg'} alt="Shopping cart icon" width={19} height={19} aria-label="Shopping cart" />
                    <Image src={'/profile.svg'} alt="Profile icon" width={19} height={19} aria-label="Profile" />
                </div>
            </section>

            <nav className={` ${navOpen ? styles.navOpen : styles.nav}`}>
                <ul>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;