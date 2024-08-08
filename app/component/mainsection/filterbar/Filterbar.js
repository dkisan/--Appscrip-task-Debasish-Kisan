import Image from "next/image";
import styles from "./style.module.css"

const Filterbar = () => {
    return (

        <section className={styles.filteractions}>
            <div className={styles.filtercontainer}>
                <section className={styles.itemfilter}>
                    <h6>3425 ITEMS</h6>
                    <div className={styles.togglefilter}>
                        <Image
                            src="/leftarrow.svg"
                            width={14}
                            height={14}
                            alt="Left arrow icon"
                            aria-label="Toggle filter"
                        />
                        <span>Hide Filter</span>

                    </div>
                </section>


                <section className={styles.dropdown}>
                    <button className={styles.dropdownheader}>RECOMMENDED
                        <span>
                            <Image
                                src="/downarrow.svg"
                                width={12}
                                height={12}
                                alt="Down arrow icon"
                                aria-label="Expand filter options"
                            />
                        </span>
                    </button>
                    <div className={styles.dropdowncontent}>
                        <a
                            href="#"
                            itemprop="filterOption"
                            aria-label="Recommended filter option"
                        >
                            RECOMMENDED
                        </a>
                        <a
                            href="#"
                            itemprop="filterOption"
                            aria-label="Newest first filter option"
                        >
                            NEWEST FIRST
                        </a>
                        <a
                            href="#"
                            itemprop="filterOption"
                            aria-label="Popular filter option"
                        >
                            POPULAR
                        </a>
                        <a
                            href="#"
                            itemprop="filterOption"
                            aria-label="Price: high to low filter option"
                        >
                            PRICE: HIGH TO LOW
                        </a>
                        <a
                            href="#"
                            itemprop="filterOption"
                            aria-label="Price: low to high filter option"
                        >
                            PRICE: LOW TO HIGH
                        </a>
                    </div>
                </section>



            </div>
        </section>

    )
}

export default Filterbar;