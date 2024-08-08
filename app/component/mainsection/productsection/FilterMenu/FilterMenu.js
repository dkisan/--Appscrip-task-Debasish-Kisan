'use client'

import Image from "next/image";
import styles from "./style.module.css"


const FilterMenu = () => {

    return (
        <section className={styles.flexcolumn + ' ' + styles.filtermenu}>
            <div className={styles.flexrow + ' ' + styles.padding}>
                <input id="customisableid" type="checkbox" aria-label="Customisable" />
                <label htmlFor="customisableid">CUSTOMISABLE</label>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.idealfor}>
                    <label htmlFor="">IDEAL FOR</label>
                    <Image src={'/uparrow.svg'} width={18} height={18} alt="Up arrow icon" />
                </div>
                <h4>All</h4>

                <div className={styles.idealMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Men" id="men" />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Women" id="women" />
                        <label htmlFor="women">Women</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Baby & Kids" id="babykids" />
                        <label htmlFor="babykids">Baby & Kids</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.occasionfor}>
                    <label htmlFor="">OCCASION</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Up arrow icon"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.occasionMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Rainy" id="Rainy" />
                        <label htmlFor="Rainy">Rainy</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="casual" id="casual" />
                        <label htmlFor="casual">casual</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Wedding" id="Wedding" />
                        <label htmlFor="Wedding">Wedding</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Party" id="Party" />
                        <label htmlFor="Party">Party</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Regular" id="Regular" />
                        <label htmlFor="Regular">Regular</label>
                    </div>
                </div>

            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.workfor}>
                    <label htmlFor="">WORK</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Up arrow icon"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.workMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="French Knot" id="French Knot" />
                        <label htmlFor="French Knot">French Knot</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Zardosi" id="Zardosi" />
                        <label htmlFor="Zardosi">Zardosi</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Fancy" id="Fancy" />
                        <label htmlFor="Fancy">Fancy</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Embroidory" id="Embroidory" />
                        <label htmlFor="Embroidory">Embroidory</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.fabricfor}>
                    <label htmlFor="">FABRIC</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Expand fabric type options"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.fabricMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Muslin" id="Muslin" />
                        <label htmlFor="Muslin">Muslin</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Satin Blend" id="Satin Blend" />
                        <label htmlFor="Satin Blend">Satin Blend</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Satin" id="Satin" />
                        <label htmlFor="Satin">Satin</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Tericoat" id="Tericoat" />
                        <label htmlFor="Tericoat">Tericoat</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Linen" id="Linen" />
                        <label htmlFor="Linen">Linen</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Raw Silk" id="Raw Silk" />
                        <label htmlFor="Raw Silk">Raw Silk</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Cotton" id="Cotton" />
                        <label htmlFor="Cotton">Cotton</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Silk" id="Silk" />
                        <label htmlFor="Silk">Silk</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Cotton Silk" id="Cotton Silk" />
                        <label htmlFor="Cotton Silk">Cotton Silk</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.segmentfor}>
                    <label htmlFor="">SEGMENT</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Expand segment options"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.segmentMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Silver" id="Silver" />
                        <label htmlFor="Silver">Silver</label>
                    </div><div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Ethnic" id="Ethnic" />
                        <label htmlFor="Ethnic">Ethnic</label>
                    </div><div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Contemporary" id="Contemporary" />
                        <label htmlFor="Contemporary">Contemporary</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.suitablefor}>
                    <label htmlFor="">SUITABLE FOR</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Expand suitable for options"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.suitableMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Formal Wear" id="Formal Wear" />
                        <label htmlFor="Formal Wear">Formal Wear</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Formal Wear" id="Western Wear" />
                        <label htmlFor="Western Wear">Western Wear</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Casual Wear" id="Casual Wear" />
                        <label htmlFor="Casual Wear">Casual Wear</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.rawfor}>
                    <label htmlFor="">RAW MATERIALS</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Expand raw materials options"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.rawMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Wool" id="Wool" />
                        <label htmlFor="Wool">Wool</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Silk" id="Silk" />
                        <label htmlFor="Silk">Silk</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Leather" id="Leather" />
                        <label htmlFor="Leather">Leather</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Cotton" id="Cotton" />
                        <label htmlFor="Cotton">Cotton</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Cellulosic Fibers" id="Cellulosic Fibers" />
                        <label htmlFor="Cellulosic Fibers">Cellulosic Fibers</label>
                    </div>
                </div>
            </div>

            <div className={styles.flexcolumn + ' ' + styles.padding}>
                <div className={styles.flexcontent + ' ' + styles.patternfor}>
                    <label htmlFor="">PATTERN</label>
                    <Image
                        src={'/uparrow.svg'}
                        width={18}
                        height={18}
                        alt="Expand pattern options"
                    />
                </div>
                <h4>All</h4>

                <div className={styles.patternMenu}>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Windowpane" id="Windowpane" />
                        <label htmlFor="Windowpane">Windowpane</label>
                    </div>
                    <div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Pinstripes" id="Pinstripes" />
                        <label htmlFor="Pinstripes">Pinstripes</label>
                    </div>
                    <  div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Solid" id="Solid" />
                        <label htmlFor="Solid">Solid</label>
                    </div>
                    < div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Chalk Stripes" id="Chalk Stripes" />
                        <label htmlFor="Chalk Stripes">Chalk Stripes</label>
                    </div>
                    < div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Slim Fit" id="Slim Fit" />
                        <label htmlFor="Slim Fit">Slim Fit</label>
                    </div>
                    < div className={styles.subMenu}>
                        <input type="checkbox" aria-label="Tartan" id="Tartan" />
                        <label htmlFor="Tartan">Tartan</label>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default FilterMenu;