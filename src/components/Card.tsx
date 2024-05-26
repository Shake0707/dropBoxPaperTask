import { FC } from 'react'
import { Button, CardBody, CardImg, CardSubtitle, CardTitle } from 'react-bootstrap'
import { IData } from '../types/api.type'

interface IProps {
    data: IData;
}

const Card: FC<IProps> = ({ data }) => {
    return (
        <div className='card' style={{ width: '18rem' }}>
            <CardImg
                variant="top" src={data.flags.png} alt={data.flags.alt} height={180}
                style={{ objectFit: "cover" }}
            />
            <CardBody>
                <CardSubtitle>{data.subregion}</CardSubtitle>
                <CardTitle>{data.name.common}</CardTitle>
                <Button href={"/about/" + data.name.common.toLocaleLowerCase()}>About</Button>
            </CardBody>
        </div>
    )
}

export default Card