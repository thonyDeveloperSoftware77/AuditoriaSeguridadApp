
import { useEffect, useState } from "react";
import { getEtiqueta} from "../../servicios/etiquetaSrv";
import Table from "../Table/Table"
export default function EtiquetaOption() {
    const [etiquetas, setEtiquetas] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getEtiqueta().then((response) => {
            console.log(response);
            setEtiquetas(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Descripción" , uid: "_descripcion", sortable: true},
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_descripcion", "actions"];

    return (
        <di>
            <h1>Etiqueta</h1>
            <p>Etiquetas Registradas en el sistema</p>
            {etiquetas == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"etiqueta"} users={etiquetas} />
            }
        </di>
    )
}