
import { useEffect, useState } from "react";
import { getClasificacion} from "../../servicios/clasificacionSrv";
import Table from "../Table/Table"
export default function ClasificacionOption() {
    const [clasificacion, setClasificaciones] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getClasificacion().then((response) => {
            console.log(response);
            setClasificaciones(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Definicion" , uid: "_definicion", sortable: true},
        { name: "Ejemplo" , uid: "_ejemplo", sortable: true},
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_definicion", "_ejemplo", "actions"];

    return (
        <di>
            <h1>Clasificacion</h1>
            <p>Clasificaciones Registradas en el sistema</p>
            {clasificacion == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"clasificacion"} users={clasificacion} />
            }
        </di>
    )
}