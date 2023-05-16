import styles from './BodyCart.module.css'

export default function BodyCart({ children }) {
  return (
    <div className={styles.bodyCart}>
      {children}
    </div>
  )
}
