
import Form from 'react-bootstrap/Form';

const Buscador = ({ search, setSearch, obtenerDatos, order, setOrder }) => {

    const handleBuscador = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleOrder = (e)=>{
        const value = e.target.value;
        setOrder(value);
    }




    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Busca por nombre, comuna, tipo..."
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleBuscador}
            />

        <Form.Select aria-label="Default select example" onChange={handleOrder} >
            <option value="default">Ordenar</option>
            <option value="asc">Desde la A - Z</option>
            <option value="desc">Desde la Z -A</option>

        </Form.Select>

        </Form>
    );
}

export default Buscador;