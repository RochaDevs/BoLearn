import { Box, Button, TextField, Typography } from "@mui/material";
import BoLearn from '../../../../public/LogoBolearnTransparente.png';
import styles from './FormularioCadastro.module.scss';


export const FormularioCadastro = () => {
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
                right: '7.8rem',
                fontSize: '1.5rem',
                paddingBottom: '1rem'
            }}>
                Criar conta
            </Typography>

            <form className={styles.formulario}>
                < TextField
                    label='Nome e Sobrenome'
                    variant="outlined"
                    sx={{
                        width: '85%',

                        '& .MuiOutlinedInput-root': {
                            height: '40px', // Altera a altura do campo de entrada
                        },

                        '& .MuiInputLabel-root': {
                            lineHeight: '13px', // Ajusta a altura da etiqueta para corresponder
                        }
                    }}
                />
                < TextField
                    label='Número de celular ou e-mail'
                    variant="outlined"
                    sx={{
                        width: '85%',

                        '& .MuiOutlinedInput-root': {
                            height: '40px', // Altera a altura do campo de entrada
                        },

                        '& .MuiInputLabel-root': {
                            lineHeight: '13px', // Ajusta a altura da etiqueta para corresponder
                        }
                    }}
                />
                < TextField
                    label='Senha'
                    type="password"
                    variant="outlined"
                    sx={{
                        width: '85%',

                        '& .MuiOutlinedInput-root': {
                            height: '40px', // Altera a altura do campo de entrada
                        },

                        '& .MuiInputLabel-root': {
                            lineHeight: '13px', // Ajusta a altura da etiqueta para corresponder
                        }
                    }}
                />
                < TextField
                    label='Insira a senha nova mais uma vez'
                    type="password"
                    variant="outlined"
                    sx={{
                        width: '85%',

                        '& .MuiOutlinedInput-root': {
                            height: '40px', // Altera a altura do campo de entrada
                        },

                        '& .MuiInputLabel-root': {
                            lineHeight: '13px', // Ajusta a altura da etiqueta para corresponder
                        }
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
                    Continuar
                </Button>
            </form>
        </Box>
    )
}