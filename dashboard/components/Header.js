import { Toolbar,AppBar,Typography } from '@material-ui/core';

const headerStyle = {
  padding: 20,
  color: "#FFF"
};
const imgStyle = {
  width:'200px',
  heigth:'200px'
}
const Header = () => (

  <AppBar style={headerStyle} color="inherit" position="static">
    <Toolbar  >
      <Typography variant="h6" >

        <img style={imgStyle} src={'/images/logoapp.png'}/>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;