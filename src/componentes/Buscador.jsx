
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Buscador = ({ search, setSearch, obtenerDatos }) => {
    const handleBuscador = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleBuscador}
            />
            <Button variant="outline-dark" onClick={obtenerDatos}>Buscar</Button>
        </Form>
    );
}

export default Buscador;