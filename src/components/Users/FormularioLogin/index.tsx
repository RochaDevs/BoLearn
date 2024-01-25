import { Box, Button, TextField, Typography } from "@mui/material";
import BoLearn from '../../../../public/LogoBolearnTransparente.png';
import styles from './FormularioLogin.module.scss';


export const Formulario = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2);',
            width: '30%'
        }}>

            <img src={BoLearn} className={styles.imagemBoLearn} alt="Logo da BoLearn" />

            <Typography sx={{
                position: 'relative',
                right: '6.5rem',
                fontSize: '1.5rem',
                paddingBottom: '1rem'
            }}>
                Faça seu login
            </Typography>

            <form className={styles.formulario}>
                < TextField
                    label='Email ou número de celular'
                    variant="filled"
                    sx={{
                        width: '85%'
                    }}
                />
                <TextField
                    label='Senha'
                    variant="filled"
                    type="password"
                    sx={{
                        width: '85%',
                    }}
                />
                <Button sx={{
                    backgroundColor: '#FBF8CC',
                    color: '#000000',
                    margin: '1rem 0rem',
                    width: '50%',

                    '&:hover': {
                        backgroundColor: '#f8f190'
                    }
                }}>
                    Faça Login
                </Button>
            </form>
        </Box>
    )
}