import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const MiApi = () => {

    const [data, setData] = useState([])

    const obtenerDatos = async () => {
        const url = "https://huachitos.cl/api/animales"
        const res = await fetch(url)
        const data = await res.json()
        setData(data.data)
    }

    useEffect(() => {
        obtenerDatos();
    }, [])


    console.log(data)


    return (
        <div className="card-container">
            {data.map((item, index) => (
                    <Card className="card mb-3" key={index} style={{ width: '18rem' }}  >
                        <div className="image-container">
                            <Card.Img className="image" variant="top" key={item.id} backGround={item.imagen} alt={item.nombre} />
                            <ListGroup.Item className="text-overlay">{item.comuna}, {item.region}</ListGroup.Item>
                            <ListGroup.Item>{item.tipo}</ListGroup.Item>
                        </div>
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>
                                {item.desc_personalidad.slice(3, -4)}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{item.edad}</ListGroup.Item>
                            <ListGroup.Item>{item.genero}</ListGroup.Item>
                            <ListGroup.Item>{item.esterilizado==="0" ? "No esterilizad@" : "Esterilizad@"}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default MiApi