import { Button, Typography } from "@mui/material";
import { Formulario } from "../../components/Users/FormularioLogin";
import styles from './UserPaginaLogin.module.scss';
import { NavLink } from "react-router-dom";


export const UserPaginaLogin = () => {
    return (
        <section className={styles.section}>
            <Formulario />
            <div>
                <Typography>
                    Novo no BoLearn?
                </Typography>
                <NavLink to={'/UserCadastro'}>
                    <Button sx={{
                        backgroundColor: '#FBF8CC',
                        color: '#000000',
                        margin: '1rem 0rem',
                        width: '100%',
                        textTransform: 'none',

                        '&:hover': {
                            backgroundColor: '#f8f190'
                        }
                    }}>
                        Criar sua conta na BoLearn
                    </Button>
                </NavLink>
            </div>
        </section>
    )
};