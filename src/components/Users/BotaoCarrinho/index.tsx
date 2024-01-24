import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './BotaoCarrinho.module.scss';

export const BotaoCarrinho = () => {
    return (
        <Button>
            <NavLink to={'Carrinho'} className={styles.NavLink}>
                <AddShoppingCartIcon sx={{color: '#6B8F71'}} fontSize='large' />
                <Typography>
                    0
                </Typography>
                <Typography>
                    Produtos
                </Typography>
            </NavLink>
        </Button>
    )
}