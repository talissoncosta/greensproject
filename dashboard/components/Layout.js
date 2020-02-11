import Header from './Header';
import {Container } from '@material-ui/core';
import Head from 'next/head';


const Layout = props => (
  <Container >
      <Head>
        <title>Dashboard</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>
      <Header />
      {props.children}
  </Container>
);

export default Layout;