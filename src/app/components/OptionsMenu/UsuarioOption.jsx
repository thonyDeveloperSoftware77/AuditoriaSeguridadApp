
import { useEffect, useState } from "react";
import { getUsuarios } from "../../servicios/usuarioSrv ";
import Table from "../Table/Table"
import { Select, SelectItem } from "@nextui-org/react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
export default function UsuarioOption() {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    const [usuarios, setUsuarios] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getOrganizaciones().then((response) => {
            setOrganizaciones(response);
        });
    }, []);

    const handleSelectChange = (e) => {
        setIdOrganizacion(e.target.value);
      };

    useEffect(() => {
        
        if (idOrganizacion != -1) {
            getUsuarios(idOrganizacion).then((response) => {
                console.log(response);
                setUsuarios(response);
            });
        }
    }, [idOrganizacion, update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "NOMBRE", uid: "_nombre", sortable: true },
        { name: "APELLIDO", uid: "_apellido", sortable: true },
        { name: "EMAIL", uid: "_email", sortable: true },
        { name: "GRUPO", uid: "_idGrupo", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_apellido", "_email","_idGrupo", "actions"];

    return (
        <di>
            <h1>Usuario</h1>
            <p>Usuarioes Registradas en el sistema</p>
            <Select
                label="Select an organizacion"
                className="max-w-xs"
                onChange={handleSelectChange}
            >
                {organizaciones.map((organizacion) => (
                    <SelectItem key={organizacion._id} value={idOrganizacion._id}>
                        {organizacion._nombre}
                    </SelectItem>
                ))}
            </Select>


            {idOrganizacion == -1 || usuarios == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} idOrganizacion={idOrganizacion} option={"usuario"} users={usuarios} />
            }
        </di>
    )
}