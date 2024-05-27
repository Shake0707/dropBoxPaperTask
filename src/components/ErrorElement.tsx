import { Button, Container, Stack } from 'react-bootstrap';
import errorImg from "../assets/404.png"

const ErrorElement = () => {
    return (
        <Container>
            <Stack className='align-items-center'>
                <img src={errorImg} alt="404" width={500} />
                <h1>404 Not Found</h1>
                <Button href='/dropBoxPaperTask/'>Go to home page</Button>
            </Stack>
        </Container>
    )
}

export default ErrorElement