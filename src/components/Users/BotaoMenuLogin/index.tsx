import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BotaoMenuLogin.module.scss';

export const BotaoMenuLogin = () => {

  const [ancoragem, setAncoragem] = useState<null | HTMLElement>(null);

  const meuRef = useRef<HTMLButtonElement | null>(null);

  const open = Boolean(ancoragem);

  const aoPassarOMouse = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAncoragem(event.currentTarget);
  };

  const aoRemoverOMouse = () => {
    setAncoragem(null);
  };

  const handleClickFora = (event: MouseEvent) => {
    if (meuRef.current && !meuRef.current.contains(event.target as Node)) {
      setAncoragem(null);
    }
  };

  useEffect(() => {
    // Adiciona o ouvinte de evento ao documento
    document.addEventListener('mousedown', handleClickFora);

    // Remove o ouvinte de evento do documento quando o componente é desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, []);

  return (

    <div>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={aoPassarOMouse}
        ref={meuRef}
        sx={{
          color: '#6B8F71'
        }}
      >
        Olá, faça seu login
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={ancoragem}
        open={open}
        onMouseLeave={aoRemoverOMouse}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{
          width: '500px',
          padding: '1rem',
        }}>

          <Button sx={{
            backgroundColor: '#FBF8CC',
            color: '#000000',
            margin: '1rem 0rem',
            width: '100%',

            '&:hover': {
              backgroundColor: '#f8f190'
            }
          }}>

            <NavLink to='/login'>
              Faça Login
            </NavLink>
          </Button>

          <div className={styles.containerClienteNovo}>

            <p>Cliente novo?</p>

            <NavLink to='/login' className={styles.NavLink}>
              Começe aqui
            </NavLink>

          </div>

          <div className={styles.containerSuaConta}>
            <div>
              <MenuItem onClick={aoRemoverOMouse}>Criar uma lista de desejos</MenuItem>
            </div>
            <div>
              <MenuItem onClick={aoRemoverOMouse}>Sua conta</MenuItem>
              <MenuItem onClick={aoRemoverOMouse}>Seus pedidos</MenuItem>
              <MenuItem onClick={aoRemoverOMouse}>Sua lista de desejos</MenuItem>
            </div>
          </div>

        </Box>
      </Menu>

    </div>

  );
}