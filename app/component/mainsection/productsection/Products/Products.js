'use server';
import Image from "next/image";
import styles from "./style.module.css"
import Link from "next/link";

async function getData() {
    // const response = await fetch(`${process.env.BASE_URL}/api`)
    // const response = await fetch(`/api`)
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data
}

const Products = async () => {
    const data = await getData()
    return (
        <section className={styles.productgrid}>
            {data.map(product => {
                return <div className={styles.product} key={product.id}>
                    <Image src={product.image} width={250} height={250} alt="Product 1" />
                    <h3>{product.title}</h3>
                    <div className={styles.price}>
                        <p>
                            <Link href={'#'}>Sign in </Link>
                            or Create an account to see pricing
                        </p>
                        <Image src={'/wishlist.svg'} width={4} height={4} />
                    </div>
                </div>
            })}


        </section>
    )
}

export default Products;