import { FC } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGetData } from '../hooks/useGetData';
import { Button, Container, Stack } from 'react-bootstrap';
import Loader from '../components/Loader';
import forward from "../assets/forward.svg"

const About: FC = () => {
    const params = useParams();

    const { data, error, pending } = useGetData("name/" + params.region?.replace(/%20/g, " "));
    console.log(data);

    return (
        <Container>
            <Link to={"/dropBoxPaperTask"}>
                <img src={forward} width={70} style={{
                    rotate: "180deg"
                }} />
            </Link>
            {pending &&
                <Stack className='align-items-center'>
                    <Loader />
                </Stack>
            }
            {error && <h1 className='text-center'>
                Somethins went worng...
                <br />
                Please <Button onClick={() => location.reload()}>Reload</Button> the page
            </h1>}
            {data && (
                <Stack className='align-items-center' gap={5}>
                    <h1>{data[0].name.official}</h1>
                    <Stack direction='horizontal' className='justify-content-between'>
                        <h1>Flag:</h1>
                        <img src={data[0].flags.svg} alt={data[0].flags.alt} width={800} />
                    </Stack>
                    <Stack direction='horizontal' className='justify-content-between'>
                        <h1>Coach of arms:</h1>
                        <img src={data[0].coatOfArms.svg} alt={data[0].flags.alt} width={400} />
                    </Stack>
                    <Stack>
                        <h1>Region: {data[0].region}</h1>
                        <h1>Capital: {data[0].capital}</h1>
                    </Stack>
                    <h1>Google maps: <Link to={data[0].maps.googleMaps} target='_blank'>Link</Link></h1>
                    <h1>Open street maps: <Link to={data[0].maps.openStreetMaps} target='_blank'>Link</Link></h1>
                </Stack>
            )}
        </Container>
    );
}

export default About