import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export const BasicSelect = () => {

    const [categoria, setCategoria] = useState('Selecione');

    const atualizarCategoria = (event: SelectChangeEvent) => {
        setCategoria(event.target.value as string);
    };

    return (
        <Box sx={{ width: '20%'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecione</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoria}
                    label="Categoria"
                    onChange={atualizarCategoria}
                >
                    <MenuItem value='todos' >Todos</MenuItem>
                    <MenuItem value='teologia' >Teologia</MenuItem>
                    <MenuItem value='tecnologia'>Tecnologia</MenuItem>
                    <MenuItem value='psicologia'>Psicologia</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}