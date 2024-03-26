import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Buscador = () => {
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-dark">Buscar</Button>
  </Form>
  )
}

export default Buscador