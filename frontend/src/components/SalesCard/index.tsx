import NotificationButton from "../NotificationButton"

import './styles.css'

function SalesCard(): JSX.Element {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#276</td>
                            <td className="show576">14/11/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">12</td>
                            <td>R$ 54800.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#277</td>
                            <td className="show576">15/11/2022</td>
                            <td>Nack</td>
                            <td className="show992">12</td>
                            <td className="show992">09</td>
                            <td>R$ 73560.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#278</td>
                            <td className="show576">15/11/2022</td>
                            <td>Paula</td>
                            <td className="show992">08</td>
                            <td className="show992">05</td>
                            <td>R$ 37596.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard