import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class Create extends Component {
  state = {
    nombres: "",
    apellidos: "",
    telefono_celular: "",
    telefono_fijo: "",
    dni: "",
    email: "",
    piso: "",
    departamento: "",
    allDptos: null
  };

  componentDidMount = () => {
    fetch("http://localhost:5000/getDptos")
      .then(response => response.json())
      .then(data => this.setState({ allDptos: data }))
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };

  // Obtengo datos por tecleada y seteo el state
  handleChange = input => e => {
    this.setState({ [input]: event.target.value });
  };

  usuarioStore = async e => {
    e.preventDefault();
    // console.log(state)
    let url = `http://localhost:5000/insertarUsuario`;

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(res => {
        res.json();
        console.log("insert usuario y dpto ok");
      })
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  render() {
    console.log(this.state.allDptos);
    return (
      <div className="row">
        <div className="contenedor col-md-12">
          <div className="contenedor-header p-2">Crear Usuario</div>
          <div className="contenedor-form p-4">
            <form onSubmit={this.usuarioStore}>
              <div className="row">
                {/* NOMBRES */}
                <div className="form-group col-md-6">
                  <label htmlFor="nombres">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombres"
                    placeholder="Nombres"
                    onChange={this.handleChange("nombres")}
                  />
                </div>
                {/* FIN NOMBRES */}
                {/* APELLIDOS */}
                <div className="form-group col-md-6">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidos"
                    placeholder="Apellidos"
                    onChange={this.handleChange("apellidos")}
                  />
                </div>
                {/* Fin APELLIDOS */}
                {/* CELULAR */}
                <div className="form-group col-md-6">
                  <label htmlFor="celular">Teléfono Celular</label>
                  <input
                    type="text"
                    className="form-control"
                    id="celular"
                    placeholder="Teléfono Celular"
                    onChange={this.handleChange("telefono_celular")}
                  />
                </div>
                {/* Fin CELULAR */}
                {/* FIJO */}
                <div className="form-group col-md-6">
                  <label htmlFor="tel_fijo">Teléfono Fijo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tel_fijo"
                    placeholder="Teléfono Fijo"
                    onChange={this.handleChange("telefono_fijo")}
                  />
                </div>
                {/* Fin FIJO */}
                {/* DNI */}
                <div className="form-group col-md-6">
                  <label htmlFor="dni">Dni</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dni"
                    placeholder="Dni"
                    onChange={this.handleChange("dni")}
                  />
                </div>
                {/* Fin DNI */}
                {/* EMAIL */}
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange("email")}
                  />
                </div>
                {/* FIN EMAIL */}
                {/* PISO */}
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="piso">Piso</label>
                  <select
                    className="form-control"
                    id="piso"
                    onChange={this.handleChange("piso")}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                {/* FIN PISO */}
                {/* DEPARTAMENTO */}
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="departamento">Departamento</label>
                  <select
                    className="form-control"
                    id="departamento"
                    onChange={this.handleChange("departamento")}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                {/* FIN DEPARTAMENTO */}
                <hr className="col-md-12 p-0" />
                {/* BOTONES */}
                <div className="form-group col-md-12 mb-0 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase"
                  >
                    Crear
                  </button>
                  <a href="#" className="btn btn-secondary ml-2 text-uppercase">
                    Volver
                  </a>
                </div>
                {/* BOTONES */}
              </div>
            </form>
          </div>
        </div>
        <style jsx>{`
          .contenedor-header {
            background: #343a40;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
          }
          .contenedor-form {
            border: 1px solid #ccc;
          }
        `}</style>
      </div>
    );
  }
}
