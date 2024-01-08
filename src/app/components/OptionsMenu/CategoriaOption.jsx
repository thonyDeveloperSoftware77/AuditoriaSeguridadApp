
import { useEffect, useState } from "react";
import { getCategoria } from "../../servicios/categoriaSrv";
import Table from "../Table/Table"
import { MdOutlineCategory } from "react-icons/md";
export default function CategoriaOption() {
    const [categoria, setCategorias] = useState([]);
    const [update, setUpdate] = useState(false); // Estado para forzar la actualización

    useEffect(() => {
        getCategoria().then((response) => {
            console.log(response);
            setCategorias(response);
        });
    }, [update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Definicion", uid: "_definicion", sortable: true },
        { name: "Ejemplo", uid: "_ejemplo", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_nombre", "_definicion", "_ejemplo", "actions"];

    return (
        <di>
            <div className="flex flex-row">
                <div>
                    <h1><MdOutlineCategory /></h1>
                </div>
                <div>
                    <h1>Categoria</h1>
                </div>
            </div>

            <p>Categoriaes Registradas en el sistema</p>
            {categoria == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} option={"categoria"} users={categoria} />
            }
        </di>
    )
}