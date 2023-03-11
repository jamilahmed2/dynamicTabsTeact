import { Table } from "react-bootstrap";
import React from "react";
const DataTable = ({ actions, Data }) => {

    return (
        <Table hover className="my-3 border  shadow-sm" responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    Data.map(data => (
                        <tr key={data.id} style={{ cursor: "pointer" }} onClick={() => actions.openNewTab(data)}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.Age}</td>
                            <td>{data.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default DataTable