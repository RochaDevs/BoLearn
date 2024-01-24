import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #6B8F71',
  borderRadius: '10px',
  p: 3,
  display: 'flex',
  flexDirection: 'column',
};

export const BasicModal = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div>

      <Button onClick={handleOpen} sx={{
        color:'#6B8F71'
      }}>
        Enviar para...
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
            fontWeight={900}
          >
            Escolha sua localização
          </Typography>


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            As opções e velocidade de entrega podem variar de acordo com a região
          </Typography>

          <Button sx={{
            backgroundColor: '#FBF8CC',
            color: '#000000',
            margin: '1rem 0rem',

            '&:hover': {
              backgroundColor: '#f8f190'
            }
          }}>
            <NavLink to='/login'>
              Faça Login
            </NavLink>
          </Button>

          <Typography id="modal-modal-description" sx={{
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            - ou insira um CEP do Brasil -
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: '.5rem',
            alignItems: 'center',
            justifyContent: 'center'

          }}>
            <TextField id="outlined-basic" variant="outlined" sx={{
              width: '10rem',
              '& .MuiInputBase-input': {
                padding: '0.5rem' // Ajuste o padding para mudar a altura
              }
            }} />

            <Typography id="modal-modal-description">
              -
            </Typography>

            <TextField id="outlined-basic" variant="outlined" sx={{
              width: '5rem',
              '& .MuiInputBase-input': {
                padding: '0.5rem' // Ajuste o padding para mudar a altura
              }
            }} />

            <Button sx={{
              backgroundColor: '#FBF8CC',
              color: '#000000',

              '&:hover': {
                backgroundColor: '#f8f190'
              }
            }}>
              Confirmar
            </Button>
          </Box>

        </Box>

      </Modal>

    </div >

  );
}




