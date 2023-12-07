
import { useEffect, useState } from "react";
import { getGrupos } from "../../servicios/grupoSrv";
import Table from "../Table/Table"
import { Select, SelectItem } from "@nextui-org/react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
export default function GrupoOption() {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    const [grupos, setGrupos] = useState([]);
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
            getGrupos(idOrganizacion).then((response) => {
                console.log(response);
                setGrupos(response);
            });
        }
    }, [idOrganizacion, update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Organizacion", uid: "_idOrganizacion", sortable: true },
        { name: "STATUS", uid: "status", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_idOrganizacion", "status", "actions"];

    return (
        <di>
            <h1>Grupo</h1>
            <p>Grupoes Registradas en el sistema</p>
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


            {idOrganizacion == -1 || grupos == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} idOrganizacion={idOrganizacion} option={"grupo"} users={grupos} />
            }
        </di>
    )
}