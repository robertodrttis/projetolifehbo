// src/components/About.tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Sobre Nós</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        malesuada, ligula vel pharetra condimentum, dui lectus facilisis nunc,
        quis consectetur est erat quis est.
      </Typography>
    </Paper>
  );
}

export default About;
