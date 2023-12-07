
import { useEffect, useState } from "react";
import { getCriterio} from "../../servicios/criterioSrv";
import Table from "../Table/Table"
export default function CriterioOption() {
    const [criticidad, setCriticidad] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getCriterio().then((response) => {
            console.log(response);
            setCriticidad(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Criterio", uid: "_criterio", sortable: true },
        { name: "Valor" , uid: "_valor", sortable: true},
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_criterio", "_valor", "actions"];

    return (
        <di>
            <h1>Criticidad</h1>
            <p>Criticidades registradas en el sistema</p>
            {criticidad == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"criticidad"} users={criticidad} />
            }
        </di>
    )
}