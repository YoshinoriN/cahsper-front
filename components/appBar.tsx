import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar,IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Home() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md">
          <Typography variant="h6">
            Cahsper
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
