
import Card from 'react-bootstrap/Card';

const PersonCard = ({fullName, imageSrc, profession, bio}) => {
    return (
        <Card style={{ width: '18rem', height: '50vh'}}>
            <Card.Img variant="top" src={imageSrc}  style={{height: '35%', objectFit: 'contain'
            }}/>
            <Card.Body>
                <Card.Title>{fullName}</Card.Title>
                <Card.Text>
                    {bio}
                </Card.Text>
                <Card.Text>
                    {profession}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PersonCard;