import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Buscador from "./Buscador";


const MiApi = () => {

    const [data, setData] = useState([])
    const [search, setSearch]=useState("")

    const obtenerDatos = async () => {
        const url = "https://huachitos.cl/api/animales"
        const res = await fetch(url)
        const data = await res.json()
        setData(data.data)
    }

    const HandleBuscador = (e) =>{
        const value = e.target.value
        setSearch(value)
    }


    useEffect(() => {
        obtenerDatos();
    }, [])

    const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(search.toLowerCase()) ||
    item.comuna.toLowerCase().includes(search.toLowerCase()) ||
    item.region.toLowerCase().includes(search.toLowerCase()) ||
    item.tipo.toLowerCase().includes(search.toLowerCase())
);


    console.log(data)


    return (
        <>
        
      <Buscador search={search} setSearch={setSearch} setData={setData} obtenerDatos={obtenerDatos} />

        <div className="card-container">
            {filteredData.map((item, index) => (
                    <Card className="card mb-3" key={index} style={{ width: '18rem' }}  >
                        <div className="image-container">
                            <ListGroup.Item className="location"><i className="fa-solid fa-location-dot"></i> <strong>{item.comuna}, {item.region}</strong> </ListGroup.Item>
                            <Card.Img className="image" variant="top" key={item.id} src={item.imagen} alt={item.nombre} />
                            <ListGroup.Item><i className="fa-solid fa-paw"></i>{item.tipo}</ListGroup.Item>
                        </div>
                        <Card.Body>
                            <Card.Title>{item.nombre}</Card.Title>
                            <Card.Text>
                                {item.desc_personalidad.slice(3, -4)}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><i className="fa-regular fa-calendar"></i> {item.edad}</ListGroup.Item>
                            <ListGroup.Item>{item.genero==="macho" ? <i className="fa-solid fa-mars"></i> : <i className="fa-solid fa-venus"></i>} {item.genero}</ListGroup.Item>
                            <ListGroup.Item>{item.esterilizado==="0" ? <><i className="fa-solid fa-xmark"></i> No esterilizad@ </> : <><i className="fa-solid fa-check"></i> Esterilizad@ </>}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
        </>
    )
}

export default MiApi