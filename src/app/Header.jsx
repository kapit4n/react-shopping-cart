import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeftSide}>
        <button>MENU</button>
        <img src="https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png" className={styles.logo} />
        <input placeholder="Search product" />
      </div>
      <div className={styles.headerRightSide}>
        <button>Orders</button>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/904/904243.png" className={styles.icon} />
          <span>(10)</span>
          <span>Cart</span>
        </button>
      </div>
    </div>
  )
}
