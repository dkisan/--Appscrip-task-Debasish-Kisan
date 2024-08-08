import FilterMenu from "./FilterMenu/FilterMenu";
import Products from "./Products/Products";
import styles from "./style.module.css"

const Productsection = () => {

    return (
        <section className={styles.container}>
            <div className={styles.filterMenuContainer}>
                <FilterMenu />
            </div>
            <Products />
        </section>
    )
}

export default Productsection;