import Image from "next/image";
import styles from "./style.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.footercontent + ' ' + styles.bottomborder}>
                    <div className={styles.footerleft}>
                        <h2>BE THE FIRST TO KNOW</h2>
                        <p>Sign up for updates from mettä muse.</p>
                        <form className={styles.subscribeform}>
                            <input
                                type="email"
                                placeholder="Enter your e-mail..." />
                            <button
                                type="submit">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                    <div className={styles.footerright}>
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h3>CURRENCY</h3>
                        <div className={styles.currencyselect}>
                            <Image
                                src={"/usflag.svg"}
                                width={20}
                                height={20}
                                alt="United States flag"
                            />
                            <Image
                                src={"/star.svg"}
                                width={10}
                                height={10}
                                alt="Star icon"
                            />
                            <span>USD</span>
                        </div>
                        <p className={styles.transaction}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.footercontent}>
                    <div className={styles.footersection}>
                        <h3>mettā muse</h3>
                        <ul>
                            <li>
                                <a href="#" aria-label="About Us">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Stories">
                                    Stories
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Artisans">
                                    Artisans
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Boutiques">
                                    Boutiques
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Contact Us">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="EU Compliances Docs">
                                    EU Compliances Docs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footersection}>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>
                                <a href="#" aria-label="Orders & Shipping">
                                    Orders & Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Join/Login as a Seller">
                                    Join/Login as a Seller
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Payment & Pricing">
                                    Payment & Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Return & Refunds">
                                    Return & Refunds
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="FAQs">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Privacy Policy">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Terms & Conditions">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footersection}>
                        <h3>FOLLOW US</h3>
                        <ul className={styles.socialicons}>
                            <li>
                                <Image
                                    src={"/insta.svg"}
                                    width={16}
                                    height={16}
                                    alt="Instagram icon"
                                />
                            </li>
                            <li>
                                <Image
                                    src={"/linkedin.svg"}
                                    width={16}
                                    height={16}
                                    alt="LinkedIn icon"
                                />
                            </li>
                        </ul>
                        <h3>mettā muse ACCEPTS</h3>
                        <ul className={styles.paymenticons}>
                            <li>
                                <Image
                                    src="/gpay.svg"
                                    width={20}
                                    height={20}
                                    alt="Google Pay"
                                    aria-label="Google Pay"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/mastercard.svg"
                                    width={20}
                                    height={20}
                                    alt="Mastercard"
                                    aria-label="Mastercard"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/paypal.svg"
                                    width={20}
                                    height={20}
                                    alt="PayPal"
                                    aria-label="PayPal"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/amex.svg"
                                    width={20}
                                    height={20}
                                    alt="American Express"
                                    aria-label="American Express"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/applepay.svg"
                                    width={20}
                                    height={20}
                                    alt="Apple Pay"
                                    aria-label="Apple Pay"
                                />
                            </li>
                            <li>
                                <Image
                                    src="/opay.svg"
                                    width={20}
                                    height={20}
                                    alt="OPay"
                                    aria-label="OPay"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <p className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer; 