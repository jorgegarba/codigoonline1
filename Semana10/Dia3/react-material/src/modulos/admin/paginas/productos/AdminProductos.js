import React from 'react'

const AdminProductos = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-8 shadow">
          <div className="card-header bg-dark">
            <h3 className="card-title text-light">Lista de Productos</h3>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Email</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan</td>
                  <td>Orellana</td>
                  <td>askdask@sdasd.com</td>
                  <td>
                    <span class="badge badge-primary">Pagado</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductos
