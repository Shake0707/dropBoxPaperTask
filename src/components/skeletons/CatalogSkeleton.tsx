import { FC } from 'react'
import { Card, CardBody, CardText, CardTitle, Placeholder, Stack } from 'react-bootstrap'

const CatalogSkeleton: FC = () => {
    const arr = Array(14).fill("");

    return (
        <Stack direction='horizontal' gap={5} className='flex-wrap justify-content-center'>
            {
                arr.map((_, i) => (
                    <Card style={{ width: '18rem' }} key={i}>
                        <CardBody>
                            <Placeholder as={CardTitle} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={CardText} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </CardBody>
                    </Card>
                ))
            }
        </Stack>

    )
}

export default CatalogSkeleton