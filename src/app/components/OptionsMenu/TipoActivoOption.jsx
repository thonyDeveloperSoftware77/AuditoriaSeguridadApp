
import { useEffect, useState } from "react";
import { getTipoActivo } from "../../servicios/tipoActivoSrv";
import Table from "../Table/Table"
import { MdWebAsset } from "react-icons/md";
export default function TipoActivoOption() {
    const [tipoActivo, setTipoActivos] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getTipoActivo().then((response) => {
            console.log(response);
            setTipoActivos(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Descripcion", uid: "_descripcion", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_descripcion", "actions"];

    return (
        <di>
            <div className="flex flex-row">
                <div>
                    <h1><MdWebAsset /></h1>
                </div>
                <div>
                    <h1>TipoActivo</h1>
                </div>
            </div>
            <p>TipoActivoes Registradas en el sistema</p>
            {tipoActivo == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"tipoActivo"} users={tipoActivo} />
            }
        </di>
    )
}