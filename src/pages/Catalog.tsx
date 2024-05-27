import { FC } from 'react'
import { Container, Stack } from 'react-bootstrap';
import { useGetData } from '../hooks/useGetData';
import Card from '../components/Card';
import CatalogSkeleton from '../components/skeletons/CatalogSkeleton';

const Catalog: FC = () => {
    const { data, error, pending } = useGetData("all");

    return (
        <Container className='mt-5'>
            {pending && <CatalogSkeleton />}
            {error && <h1>{error}</h1>}
            {data && (
                <Stack direction='horizontal' gap={5} className='flex-wrap justify-content-center' >
                    {data.map((item) => (
                        <Card data={item} key={item.name.common} />
                    ))}
                </Stack>
            )}
        </Container>
    );
}

export default Catalog;