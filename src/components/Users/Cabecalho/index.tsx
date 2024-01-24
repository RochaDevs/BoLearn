import React from "react";
import styles from './Cabecalho.module.scss';

interface ICabecalho {
    botaoLogo: React.ReactNode;
    botaoLocal: React.ReactNode;
    barraPesquisa: React.ReactNode;
    botaoMenuLogin: React.ReactNode;
    botaoPedidos?: React.ReactNode;
    botaoCarrinho?: React.ReactNode;
}

export const Cabecalho = ({botaoLogo, botaoLocal, barraPesquisa, botaoMenuLogin, botaoPedidos, botaoCarrinho}: ICabecalho ) => {
    return (
        <>
            <header className={styles.cabecalho}>
                {botaoLogo}
                {botaoLocal}
                {barraPesquisa}
                {botaoMenuLogin}
                {botaoPedidos}
                {botaoCarrinho}
            </header>
        </>
    )
}