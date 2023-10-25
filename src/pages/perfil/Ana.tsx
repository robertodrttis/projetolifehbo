import React from "react";
import { useRouter } from 'next/router';  // Importação do useRouter
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logonew.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import { Button } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    background: "linear-gradient(#141414, #1695F9)",
    padding: 0,
    margin: 0,
    color: "white",
    height: "651px", // Ajustado para minúsculas
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 2rem",
    boxSizing: "border-box", // Adicionado
    marginTop: "-510px",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  teamContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  teamLogo: {
    width: "150px",
    height: "150px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  centerContainer: {
    display: "flex",
    alignItems: "center",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  buttonStyle: {
    backgroundColor: "transparent",
    border: "none",
  },
  imageStyle: {
    width: "32px",
  },
  button: {
    backgroundColor: "#193b57", // Cor de fundo vermelha semelhante à HBO Max
    color: "white",
    "&:hover": {
      backgroundColor: "#1695F9", // Cor de fundo vermelha mais escura no hover
    },
    fontWeight: 600,
  },
  cardLink: {
    textDecoration: "none",
  },
}));

function Perfil() {
  const classes = useStyles();
  const router = useRouter();
  const { nome } = router.query;

  const handleChatClick = async () => {
    const response = await fetch("/api/chat", { method: "POST" });
    const data = await response.json();
    console.log(data.message);
  };

  return (
    <div className={classes.gradientBackground}>
      <div className={classes.headerContainer}>
        <div className={classes.leftContainer}>
          <button className={classes.buttonStyle}>
            {" "}
            <Image className={classes.imageStyle} src={menu} alt="Usuário" />
          </button>{" "}
          {/* Menu sanduíche */}
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleChatClick}
          >
            Chat
          </Button>
        </div>
        <div className={classes.centerContainer}>
          <Image src={logo} alt="Usuário" className={classes.teamLogo} />
        </div>
        <div className={classes.rightContainer}>
          <button className={classes.buttonStyle}>
            {" "}
            <Image className={classes.imageStyle} src={search} alt="Usuário" />
          </button>
            <a className={classes.cardLink}> {/* Adicionado tag <a> */}
              <Button className={classes.button} variant="contained">
                Deslogar
              </Button>
            </a>
        </div>
      </div>
      {/* <h1 className={classes.header}>Perfil de {nome}</h1> */}
      <div className={classes.teamContainer}></div>
    </div>
  );
}

export default Perfil;