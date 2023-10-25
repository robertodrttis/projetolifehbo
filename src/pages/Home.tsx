import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
} from "@material-ui/core";
import logo from "../assets/logonew.png";
import Image from "next/image";
import "../styles/global.css";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  gradientBackground: {
    background: "linear-gradient(#141414, #1695F9)",
    padding: 0,
    margin: 0,
    color: "white",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginTop: "-86px",
    marginBottom: theme.spacing(8),
  },
  button: {
    backgroundColor: "#193b57",
    color: "white",
    "&:hover": {
      backgroundColor: "#1695F9",
    },
    marginTop: theme.spacing(2),
    fontWeight: 600,
    marginLeft: "-43px",
  },
  logo: {
    width: "200px",
    height: "200px",
    marginBottom: "0px",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    marginBottom: "75px",
  },
  avatarBackground: {
    width: "150%",
    height: "165%",
    marginTop: "-39px",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  avatarText: {
    fontWeight: 400,
    fontFamily: " 'Roboto', sans-serif",
    color: "white",
    marginTop: "-140px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  avatarImage: {},
  h4: {
    color: "rgb(255, 255, 255)",
    fontFamily: "'Alike', 'Kanit', 'Nunito', 'Roboto', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "24px",
    letterSpacing: "0px",
    lineHeight: "32.4px",
    marginBottom: "160px",
    position: "relative",
    top: "-34px",
  },
  cardAvatar: {
    marginRight: "90px",
    marginTop: "-65px",
  },
  cardAvatarTwo: {
    marginRight: "25px",
    marginTop: "-65px",
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(8),
    justifyContent: "center",
  },
  cardLink: {
    textDecoration: "none",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.gradientBackground}>
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.content}
        >
          <Image src={logo} alt="Logo" className={classes.logo} />
          <Typography variant="h4" className={classes.h4}>
            Quem vamos ajudar hoje?
          </Typography>

          <Grid container justifyContent="center">
            <Grid item className={classes.cardAvatar}>
            <Link href="/perfil/[nome]" as="/perfil/Ana">
                <div className={classes.cardLink}>
                  <Paper elevation={3} className={classes.avatar}>
                    {/* Conteúdo do primeiro card */}
                    <div className={classes.avatarBackground}>
                      {/* Conteúdo da imagem de fundo */}
                    </div>
                    <Typography variant="h6" className={classes.avatarText}>
                      Ana
                    </Typography>
                  </Paper>
                </div>
              </Link>
            </Grid>

            <Grid item className={classes.cardAvatarTwo}>
              <Paper elevation={3} className={classes.avatar}>
                {/* Conteúdo do segundo card */}
                <div className={classes.avatarBackground}>
                  {/* Conteúdo da imagem de fundo */}
                </div>
                <Typography variant="h6" className={classes.avatarText}>
                  Gaby
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} variant="contained">
              Adicionar usuário
            </Button>
            <Button className={classes.button} variant="contained">
              Gerenciar Perfis
            </Button>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
