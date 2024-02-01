import { Box, Button, TextField, Typography } from "@mui/material";
import BoLearn from '../../../../public/LogoBolearnTransparente.png';
import styles from './FormularioLogin.module.scss';
import { IUsers } from "../../../Interfaces/IUsers";
import React, { useEffect, useState } from "react";
import { useGetUsuarios } from "../../../hooks/ReactQuery/useUsuarios";
import { useUsuarioEstaLogadoContextAPI } from "../../../hooks/useContext/usuarioEstaLogado";
import { useNavigate } from "react-router-dom";


export const Formulario = () => {

    const [emailOuCelular, setEmailOuCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarioJAValidado, setUsuarioJAValidado] = useState<IUsers | undefined>()
    const { data: usuarios } = useGetUsuarios()
    const {setUsuarioEstaLogado} = useUsuarioEstaLogadoContextAPI()
    const navigate = useNavigate()

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const validarUsuario = (usuarios: IUsers[] | undefined) => {
            return usuarios?.find((usuario) => {
                return usuario.emailOuNumeroUsuario === emailOuCelular && usuario.senhaUsuario === senha
            })
        }
    
        const usuarioValidado = validarUsuario(usuarios)
        setUsuarioJAValidado(usuarioValidado)
        console.log(usuarioValidado)
    }

    useEffect(() => {
        if (usuarioJAValidado) {
            sessionStorage.setItem('tokenDeSeguranca', usuarioJAValidado.TokenSecurity as string);
            setUsuarioEstaLogado(true);
            navigate('/');
        } else {
            console.log('Usuário não encontrado');
        }
    }, [usuarioJAValidado, navigate, setUsuarioJAValidado, setUsuarioEstaLogado]);
    

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

            <form className={styles.formulario} onSubmit={aoSubmeterFormulario}>
                < TextField
                    label='Email ou número de celular'
                    variant="filled"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setEmailOuCelular(evento.target.value)}
                    value={emailOuCelular}
                    sx={{
                        width: '85%'
                    }}
                />
                <TextField
                    label='Senha'
                    variant="filled"
                    type="password"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenha(evento.target.value)}
                    value={senha}
                    sx={{
                        width: '85%',
                    }}
                />
                <Button 
                    type="submit"
                    sx={{
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