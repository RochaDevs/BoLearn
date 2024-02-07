import { Box, Button, TextField, Typography } from "@mui/material";
import BoLearn from '../../../../public/LogoBolearnTransparente.png';
import styles from './FormularioCadastro.module.scss';
import React, { useState } from "react";
import { useGetUsuarios, usePostUsuario } from "../../../hooks/ReactQuery/useUsuarios";
import { validacaoDeSenha } from "./validacaoDeSenha.js";
import { validarSeOEmailExiste } from "./validacaoDeEmailExistente.js";

export const FormularioCadastro = () => {

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [senhaUsuarioConfirmacao, setSenhaUsuarioConfirmacao] = useState('')
    const [inputFocadoConfirmacaoSenha, setInputFocadoConfirmacaoSenha] = useState(false);
    const [inputFocadoEmail, setInputFocadoEmail] = useState(false);
    const { mutate } = usePostUsuario()
    const { data: usuarios } = useGetUsuarios()

    console.log(usuarios)

    const limparFormulario = () => {
        setNomeUsuario('')
        setEmailUsuario('')
        setSenhaUsuario('')
        setSenhaUsuarioConfirmacao('');
        setInputFocadoConfirmacaoSenha(false);
    }

    const inputFocoEstadoConfirmacaoSenha = () => {
        setInputFocadoConfirmacaoSenha(true)
    }

    const inputFocoEstadoEmail = () => {
        setInputFocadoEmail(true)
    }

    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const novoUsuario = {
            nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario,
            senhaUsuario: senhaUsuario
        }

        if (validacaoDeSenha(senhaUsuario, senhaUsuarioConfirmacao) && !validarSeOEmailExiste(emailUsuario, usuarios)) {
            mutate(novoUsuario)
            limparFormulario()
        }

    }

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

            <form className={styles.formulario} onSubmit={aoSubmeterFormulario}>
                < TextField
                    label='Nome e Sobrenome'
                    variant="outlined"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setNomeUsuario(evento.target.value)}
                    value={nomeUsuario}
                    required
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
                    label='E-mail'
                    variant="outlined"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setEmailUsuario(evento.target.value)}
                    onBlur={inputFocoEstadoEmail}
                    value={emailUsuario}
                    required
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
                {validarSeOEmailExiste(emailUsuario, usuarios) && inputFocadoEmail && (
                    <Typography color="error" sx={{ width: '85%' }}>Este e-mail já existe.</Typography>
                )}
                < TextField
                    label='Senha'
                    type="password"
                    variant="outlined"
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenhaUsuario(evento.target.value)}
                    value={senhaUsuario}
                    required
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
                    onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setSenhaUsuarioConfirmacao(evento.target.value)}
                    onFocus={inputFocoEstadoConfirmacaoSenha}
                    value={senhaUsuarioConfirmacao}
                    required
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
                {!validacaoDeSenha(senhaUsuario, senhaUsuarioConfirmacao) && inputFocadoConfirmacaoSenha && (
                    <Typography color="error" sx={{ width: '85%' }}>As senhas não coincidem.</Typography>
                )}
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
                    Continuar
                </Button>
            </form>
        </Box>
    )
}