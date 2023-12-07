
import { useEffect, useState } from "react";
import { getDepartamentos } from "../../servicios/departamentoSrv ";
import Table from "../Table/Table"
import { Select, SelectItem } from "@nextui-org/react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
export default function DepartamentoOption() {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    const [departamentos, setDepartamentos] = useState([]);
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
            getDepartamentos(idOrganizacion).then((response) => {
                console.log(response);
                setDepartamentos(response);
            });
        }
    }, [idOrganizacion, update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Descripcion", uid: "_descripcion", sortable: true },
        { name: "Grupos", uid: "_grupos", sortable: true },
        { name: "Usuarios", uid: "_usuarios", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_descripcion", "_grupos", "_usuarios", "_idOrganizacion", "actions"];

    return (
        <di>
            <h1>Departamento</h1>
            <p>Departamentoes Registradas en el sistema</p>
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


            {idOrganizacion == -1 || departamentos == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} idOrganizacion={idOrganizacion} option={"departamento"} users={departamentos} />
            }
        </di>
    )
}