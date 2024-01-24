import { NavLink } from "react-router-dom";
import logoBolearn from '../../../../public/LogoBolearnTransparente.png';
import styles from  './BotaoLogo.module.scss';


export const BotaoLogo = () => {
    return (
        <NavLink to='/' className={styles.containerLogo}>
            <img className={styles.logo} src={logoBolearn} alt="Logo da Livraria BoLearn" />
        </NavLink>
    )
};