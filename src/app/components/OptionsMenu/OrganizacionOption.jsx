
import { useEffect, useState } from "react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
import Table from "../Table/Table"
export default function OrganizacionOption() {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getOrganizaciones().then((response) => {
            setOrganizaciones(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "SECTOR", uid: "_sector", sortable: true },
        { name: "UBICACIÓN", uid: "_ubicacion", sortable: true },
        { name: "ACTIVIDAD PRINCIPAL", uid: "_actividadPrincipal" },
        { name: "STATUS", uid: "status", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_sector", "_ubicacion", "_actividadPrincipal", "status", "actions"];

    return (
        <di>
            <h1>Organizacion</h1>
            <p>Organizaciones Registradas en el sistema</p>
            {organizaciones == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"organizacion"} users={organizaciones} />
            }
        </di>
    )
}