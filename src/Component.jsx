import styles from './Component.module.css';
let Component = (props) => {
    return <div className={styles.Container}>{props.children}</div>

}
export default Component;