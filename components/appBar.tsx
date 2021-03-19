import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';

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
