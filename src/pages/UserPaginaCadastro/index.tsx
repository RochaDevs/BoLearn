import { Button, Typography } from "@mui/material";
import styles from './UserPaginaCadastro.module.scss';
import { FormularioCadastro } from "../../components/Users/FormularioCadastro";


export const UserPaginaCadastro = () => {
    return (
        <section className={styles.section}>
            <FormularioCadastro />
            <div>
                <Typography>
                    Você já tem uma conta?
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
                    Fazer login
                </Button>
            </div>
        </section>
    )
};