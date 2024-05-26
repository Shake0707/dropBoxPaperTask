import { Button, Container, Stack } from 'react-bootstrap'

const ErrorElement = () => {
    return (
        <Container>
            <Stack className='align-items-center'>
                <img src="/404.png" alt="404" width={500} />
                <h1>404 Not Found</h1>
                <Button href='/'>Go to home page</Button>
            </Stack>
        </Container>
    )
}

export default ErrorElement