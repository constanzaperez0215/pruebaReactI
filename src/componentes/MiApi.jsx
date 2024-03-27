import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Buscador from "./Buscador";
import { Button } from "react-bootstrap";


const MiApi = () => {

    const [data, setData] = useState([])
    const [search, setSearch]=useState("")
    const [order, setOrder]= useState("default")

    const obtenerDatos = async () => {
        const url = "https://huachitos.cl/api/animales"
        const res = await fetch(url)
        const data = await res.json()
        setData(data.data)
    }




    useEffect(() => {
        obtenerDatos();
    }, [])

    const filteredData = data.filter((item) =>
    item.nombre.toLowerCase().includes(search.toLowerCase()) ||
    item.comuna.toLowerCase().includes(search.toLowerCase()) ||
    item.tipo.toLowerCase().includes(search.toLowerCase())
);

    let datosOrdenados = []
    if(order=="asc"){
        datosOrdenados=filteredData.sort((a, b)=>{
            if(a.nombre[0].toLowerCase() < b.nombre[0].toLowerCase()){return -1}
            if(a.nombre[0].toLowerCase() > b.nombre[0].toLowerCase()){return 1}
            return(0)
        })
    }
    else if(order=="desc"){
        datosOrdenados=filteredData.sort((a, b)=>{
            if(a.nombre[0].toLowerCase() > b.nombre[0].toLowerCase()){return -1}
            if(a.nombre[0].toLowerCase() < b.nombre[0].toLowerCase()){return 1}
            return(0)
        })
    }
    else{
        datosOrdenados=filteredData
    }

        datosOrdenados.map((e) => {
        e.desc_personalidad = e.desc_personalidad.replace("<p>", "")
        e.desc_personalidad = e.desc_personalidad.replace("</p>", "")
    })



    return (
        <>

      <Buscador search={search} setSearch={setSearch} setData={setData} obtenerDatos={obtenerDatos} order={order} setOrder={setOrder} />

        <div className="card-container">
            {datosOrdenados.map((item, index) => (
                    <Card className="mb-3" key={index} style={{ width: '22rem' }}  >
                        <div className="image-container">
                            <div className="direccion">
                                <ListGroup.Item className="location"><i className="fa-solid fa-location-dot"></i> <strong>{item.comuna}, {item.region}</strong> </ListGroup.Item>
                            </div>
                            <Card.Img className="image" variant="top" key={item.id} src={item.imagen} alt={item.nombre} />
                            <ListGroup.Item className="tipo"><i className="fa-solid fa-paw"></i> {item.tipo} <i className="fa-solid fa-paw"></i></ListGroup.Item>
                        </div>

                        <Card.Body>
                            <Card.Title className="titulo">{item.nombre}</Card.Title>
                            <Card.Text>
                                {`${item.desc_personalidad}`}
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list list-group-flush">
                            <ListGroup.Item className="edad"><i className="fa-regular fa-calendar"></i> {item.edad}</ListGroup.Item>

                            <ListGroup.Item className="genero">{item.genero==="macho" ? <i className="fa-solid fa-mars"></i> : <i className="fa-solid fa-venus"></i>} {item.genero}</ListGroup.Item>

                            <ListGroup.Item className="esterilizado">{item.esterilizado==="0" ? <><i className="fa-solid fa-xmark"></i> No esterilizad@ </> : <><i className="fa-solid fa-check"></i> Esterilizad@ </>}</ListGroup.Item>
                        </ListGroup>

                        <Card.Body className="btn
                        ">
                        <Button variant="secondary" size="md" className="btn">
                            Contacto
                          </Button>
                        </Card.Body>

                    </Card>
                ))
            }
        </div>
        </>
    )
}

export default MiApi