import { Button, Typography } from "@mui/material";
import { Formulario } from "../../components/Users/FormularioLogin";
import styles from './UserPaginaCadastro.module.scss';


export const UserPaginaCadastro = () => {
    return (
        <section className={styles.section}>
            <Formulario />
            <div>
                <Typography>
                    Novo no BoLearn?
                </Typography>
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
            </div>
        </section>
    )
};