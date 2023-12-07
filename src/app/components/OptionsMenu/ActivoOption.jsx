
import { useEffect, useState } from "react";
import { getActivos } from "../../servicios/activoSrv";
import Table from "../Table/Table"
import { Select, SelectItem } from "@nextui-org/react";
import { getOrganizaciones } from "../../servicios/organizacionSrv";
export default function ActivoOption() {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    const [activos, setActivos] = useState([]);
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
            getActivos(idOrganizacion).then((response) => {
                console.log(response);
                setActivos(response);
            });
        }
    }, [idOrganizacion, update]);

    const columns = [
        { name: "ID", uid: "_id", sortable: true },
        { name: "Código", uid: "_code", sortable: true },
        { name: "Nombre", uid: "_name", sortable: true },
        { name: "Descripción", uid: "_description", sortable: true },
        { name: "Ubicación", uid: "_ubication", sortable: true },
        { name: "Etiqueta", uid: "_label", sortable: true },
        { name: "Tipo de Activo", uid: "_type", sortable: true },
        { name: "Criticidad", uid: "_criticality", sortable: true },
        { name: "Categoria", uid: "_category", sortable: true },
        { name: "Clasificación", uid: "_class", sortable: true },
        { name: "Fecha de Revision", uid: "_review_date", sortable: true },
        { name: "Usuarios", uid: "_ast_usuarios", sortable: true },
        { name: "Departamento", uid: "_ast_business_unit", sortable: true },
        { name: "ACTIONS", uid: "actions" }
    ]




    const INITIAL_VISIBLE_COLUMNS = [ "_code", "_name", "_description", "_ubication", "_label", "_type", "_criticality", "_category", "_class", "_ast_business_unit","_review_date", "_ast_usuarios", "actions"];

    return (
        <di>
            <h1>Activo</h1>
            <p>Activoes Registradas en el sistema</p>
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


            {idOrganizacion == -1 || activos == undefined ? <p></p> : <Table setUpdate={setUpdate} columns={columns} INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} idOrganizacion={idOrganizacion} option={"activo"} users={activos} />
            }
        </di>
    )
}