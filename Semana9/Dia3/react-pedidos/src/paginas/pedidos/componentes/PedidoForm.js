import React, { useState, useEffect } from 'react'
import { RepartidorService } from '../../../servicios/RepartidorService';
import { ClienteService } from '../../../servicios/ClienteService';
import { ProductoService } from '../../../servicios/ProductosService';


const formularioVacio = {
  id_pro: "",
  id_rep: "",
  id_cli: "",
  ped_ini: "",
  ped_fin: "",
  ped_est: "",
  ped_fech: ""
}

const PedidoForm = () => {

  const [formulario, setFormulario] = useState(formularioVacio);
  const [repartidores, setRepartidores] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  let repService = new RepartidorService();
  let cliService = new ClienteService();
  let prodService = new ProductoService();

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }


  const llenarSelects = async () => {

    setRepartidores(await repService.getAllRepartidores());
    setClientes(await cliService.getAllClientes());
    setProductos(await prodService.getAllProductos());
    
    // let arrayRepartidores = await repService.getAllRepartidores();
    // setRepartidores(arrayRepartidores);
    // let arrayClientes = await cliService.getAllClientes();
    // setClientes(arrayClientes);
    // let arrayProductos = await prodService.getAllProductos()
    // setProductos(arrayProductos);
  }

  useEffect(() => {

    llenarSelects();

  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Formulario de Pedidos</h3>
          </div>
          <div className="card-body">
            <form className="row">
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Producto</label>
                <select name="id_pro"
                  onChange={handleChange} value={formulario.id_pro}
                  id="" className="form-control">
                  {
                    productos.map((producto) => {
                      return (<option value={producto.id} key={producto.id}>
                        {producto.pro_nom} S/.{producto.pro_prec}
                      </option>)
                    })
                  }
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Repartidor</label>
                <select name="id_rep"
                  onChange={handleChange} value={formulario.id_rep}
                  id="" className="form-control">

                  {
                    repartidores.map((repartidor) => {
                      return (<option value={repartidor.id} key={repartidor.id}>
                        {repartidor.rep_nom} {repartidor.rep_ape}
                      </option>)
                    })
                  }


                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Seleccione Cliente</label>
                <select name="id_cli"
                  onChange={handleChange}
                  value={formulario.id_cli}
                  id="" className="form-control">
                  {
                    clientes.map((cliente) => {
                      return (<option value={cliente.id} key={cliente.id}>
                        {cliente.cli_nom} {cliente.cli_ape}
                      </option>)
                    })
                  }
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Entrega Inicio</label>
                <input type="text" name="ped_ini"
                  onChange={handleChange} value={formulario.ped_ini}
                  className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Entrega Fin</label>
                <input type="text" name="ped_fin"
                  onChange={handleChange} value={formulario.ped_fin}
                  className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Estado</label>
                <select name="ped_est" onChange={handleChange}
                  id="" className="form-control" value={formulario.ped_est}>
                  <option value="">Seleccione</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Fecha</label>
                <input type="date" name="ped_fech"
                  onChange={handleChange} value={formulario.ped_fech}
                  className="form-control" />
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PedidoForm
