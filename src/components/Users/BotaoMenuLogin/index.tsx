import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useRef, useEffect } from 'react';

export const BotaoMenuLogin = () => {

  const [ancoragem, setAncoragem] = useState<null | HTMLElement>(null);

  const meuRef = useRef(null);

  const open = Boolean(ancoragem);

  const aoPassarOMouse = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAncoragem(event.currentTarget);
  };

  const aoRemoverOMouse = () => {
    setAncoragem(null);
  };

  const handleClickFora = (event: MouseEvent) => {
    if (meuRef.current && !meuRef.current.contains(event.target)) {
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
      >
        Dashboard
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
        <MenuItem onClick={aoRemoverOMouse}>Profile</MenuItem>
        <MenuItem onClick={aoRemoverOMouse}>My account</MenuItem>
        <MenuItem onClick={aoRemoverOMouse}>Logout</MenuItem>
      </Menu>

    </div>

  );
}