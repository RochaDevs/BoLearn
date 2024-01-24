import { Box, Button, TextField } from "@mui/material"
import { BasicSelect } from "./SelectMUI"
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import styles from './BarraPesquisa.module.scss';


export const BarraPesquisa = () => {

    const [valorBarraPesquisa, setValorBarraPesquisa] = useState('');

    const atualizarValorBarraPesquisa = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setValorBarraPesquisa(evento.target.value)
    }

    return (
        <form className={styles.formulario}>
            <Box sx={{
                display: 'flex',
                width: '100%'
            }}>
                <BasicSelect />
                <TextField
                    label="Pesquise em BoLearn.com"
                    variant="outlined"
                    onChange={atualizarValorBarraPesquisa}
                    value={valorBarraPesquisa}
                    sx={{
                        width: '100%'
                    }}
                />
                <Button sx={{
                    color:"#6B8F71"
                }}>
                    <SearchIcon fontSize="large"/>
                </Button>
            </Box>
        </form>
    )


}