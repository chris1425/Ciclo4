import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
import data from "Data2";


class AdminProductos extends React.Component {
    state = {
        data: data.items,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            title: "",
            price: "",
            image: "",
            category: "",
            cantidad: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id === registro.id) {
                arreglo[contador].title = dato.title;
                arreglo[contador].price = dato.price;
                arreglo[contador].image = dato.image;
                arreglo[contador].category = dato.category;
                arreglo[contador].cantidad = dato.cantidad;
                contador++;
            }
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion === true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                                <th>Categoria</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.title}</td>
                                    <td>{dato.price}</td>
                                    <td><img className="Adminview" src={dato.image}></img></td>
                                    <td>{dato.category}</td>
                                    <td>{dato.cantidad}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Titulo
                            </label>
                            <input
                                className="form-control"
                                name="title"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.tittle}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Precio
                            </label>
                            <input
                                className="form-control"
                                name="price"
                                type="number"
                                onChange={this.handleChange}
                                value={this.state.form.price}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Imagen
                            </label>
                            <input
                                className="form-control"
                                name="iamge"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.image}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Categoria
                            </label>
                            <input
                                className="form-control"
                                name="category"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.category}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>
                                Cantidad
                            </label>
                            <input
                                className="form-control"
                                name="cantidad"
                                type="number"
                                onChange={this.handleChange}
                                value={this.state.form.cantidad}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Editar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Titulo:
                            </label>
                            <input
                                className="form-control"
                                name="title"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Precio
                            </label>
                            <input
                                className="form-control"
                                name="price"
                                type="number"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Imagen:
                            </label>
                            <input
                                className="form-control"
                                name="image"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Categoria:
                            </label>
                            <input
                                className="form-control"
                                name="category"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Canntidad:
                            </label>
                            <input
                                className="form-control"
                                name="cantidad"
                                type="number"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default AdminProductos;