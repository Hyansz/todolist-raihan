// import { useReducer } from "react"
import { Button, Form, Table } from "react-bootstrap"

const Index = () => {
    return (
        <div className="container pt-5">
            <h1>Jadwal Kegiatan Harian</h1>
            <div className="d-flex align-items-center justify-content-center mb-4">
                <input style={{ marginRight: "20px", borderRadius: "6px", border: "1px solid black" }} className="p-3 w-100 md:m-auto" type="text" placeholder="Tambahkan kegiatan Anda"></input>
                <Button className="bg-primary text-white p-6">Tambah Kegiatan</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th colSpan={2}>Kegiatan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col-1">
                            <Form.Check aria-label="option 1" />
                        </td>
                        <td className="col-9" style={{ textAlign: "left" }}>delectus aut autem</td>
                        <td>
                            <Button variant="warning">Edit</Button>
                        </td>
                        <td>
                            <Button variant="danger">Hapus</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Index