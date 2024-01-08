
import { useEffect, useState } from "react";
import { getValoracionActivos } from "../../servicios/valoracionActivoSrv";
import Table from "../Table/Table"
import { Select, SelectItem } from "@nextui-org/react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
import { FaListCheck } from "react-icons/fa6";
export default function ValoracionActivoOption(props) {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [idOrganizacion, setIdOrganizacion] = useState(props.idOrganizacionUsuario);
    const [grupos, setValoracionActivos] = useState([]);
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
            getValoracionActivos(idOrganizacion).then((response) => {
                console.log(response);
                setValoracionActivos(response);
            });
        }
    }, [idOrganizacion, update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Codigo", uid: "_codigo", sortable: true},
        { name: "Nombre", uid: "_nombre", sortable: true },
        { name: "Descripcion", uid: "_descripcion", sortable: true},
        { name: "Ubicacion", uid: "_ubicacion", sortable: true},
        { name: "Confidencialidad" , uid: "_confidencialidad", sortable: true},
        { name: "Integridad" , uid: "_integridad", sortable: true},
        { name: "Disponibilidad" , uid: "_disponibilidad", sortable: true},
        { name: "Valoracion" , uid: "_valoracion", sortable: true},
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = ["_codigo", "_nombre" , "_descripcion", "_ubicacion", "_confidencialidad", "_integridad", "_disponibilidad", "_valoracion", "actions"];

    return (
        <di>
            <div className="flex flex-row">
                <div>
                    <h1><FaListCheck /></h1>
                </div>
                <div>
                    <h1>ValoracionActivo</h1>
                </div>
            </div>
            <p>ValoracionActivoes Registradas en el sistema</p>
           

            {idOrganizacion == -1 || grupos == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} idOrganizacion={props.idOrganizacionUsuario} option={"valoracionOptionUsuario"} users={grupos} />
            }
            
        </di>
    )
}