import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core'

export default function Footer() {
  return (
    <Container maxWidth="md">
      <footer>
        <div>
          <hr/>
          <Button href="https://github.com/yoshinorin/cahsper" color="primary" style={{textTransform: 'none'}}>
            Powerd by Cahpser
          </Button>
        </div>
      </footer>
    </Container>
  )
}
