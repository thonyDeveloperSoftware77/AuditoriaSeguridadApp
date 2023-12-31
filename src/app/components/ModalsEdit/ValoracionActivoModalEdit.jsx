
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, CardBody, Card, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getActivos } from "../../servicios/activoSrv";
import { putValoracionActivo } from "../../servicios/valoracionActivoSrv";
import { confidencialidadArray, disponibilidadArray, integridadArray } from "../Table/utils";

export default function ValoracionActivoModal(props) {

    //Informacion necesaria para editar un grupo
    const [activos, setActivos] = useState([]);

    //{ name: "ID", uid: "_id", sortable: true },
    //{ name: "Codigo", uid: "_codigo", sortable: true},
    //{ name: "Nombre", uid: "_nombre", sortable: true },
    //{ name: "Descripcion", uid: "_descripcion", sortable: true},
    //{ name: "Ubicacion", uid: "_ubicacion", sortable: true},
    //{ name: "Confidencialidad" , uid: "_confidencialidad", sortable: true},
    //{ name: "Integridad" , uid: "_integridad", sortable: true},
    //{ name: "Disponibilidad" , uid: "_disponibilidad", sortable: true},
    //{ name: "Valoracion" , uid: "_valoracion", sortable: true},
    //Datos para la edicion de un grupo
    const [codigo, setCodigo] = useState(props.data._codigo);
    const [nombre, setNombre] = useState(props.data._nombre);
    const [descripcion, setDescripcion] = useState(props.data._descripcion);
    const [ubicacion, setUbicacion] = useState(props.data._ubicacion);
    const [confidencialidad, setConfidencialidad] = useState(props.data._confidencialidad);
    const [integridad, setIntegridad] = useState(props.data._integridad);
    const [disponibilidad, setDisponibilidad] = useState(props.data._disponibilidad);

    const [idOrganizacion, setIdOrganizacion] = useState(props.data._idOrganizacion);
    const { onOpen } = useDisclosure();

    const editar = () => {
        putValoracionActivo(props.data._id, props.data._id_asset, confidencialidad, integridad, disponibilidad, idOrganizacion).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }




    useEffect(() => {
        ///getActivos(props.data._id).then((response) => {
        ///    setActivos(response);
        ///});
    }, []);

    const handleSelectChangeConfidencialidad = (e) => {
        setConfidencialidad(e.target.value);
    }
    const handleSelectChangeIntegridad = (e) => {
        setIntegridad(e.target.value);
    }

    const handleSelectChangeDisponibilidad = (e) => {
        setDisponibilidad(e.target.value);
    }

    return (
        <>

            <Modal size="xl" backdrop={"blur"} isOpen={onOpen} >
                <ModalContent  >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualizar</ModalHeader>

                            <ModalBody>
                                <Input isDisabled label="Codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                                <Input isDisabled label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                <Input isDisabled label="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                <Input isDisabled label="Ubicacion" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                                <div className="flex flex-row gap-2">
                                    <Select
                                        isRequired
                                        label="Confidencialidad"
                                        className="max-w-xs"
                                        onChange={handleSelectChangeConfidencialidad}
                                    >
                                        {confidencialidadArray.map((c) => (
                                            <SelectItem key={c.puntuacion} value={c.puntuacion}>
                                                {c.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Select
                                        isRequired
                                        label="Integridad"
                                        className="max-w-xs"
                                        onChange={handleSelectChangeIntegridad}
                                    >
                                        {integridadArray.map((c) => (
                                            <SelectItem key={c.puntuacion} value={c.puntuacion}>
                                                {c.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Select
                                        isRequired
                                        label="Disponibilidad"
                                        className="max-w-xs"
                                        onChange={handleSelectChangeDisponibilidad}
                                    >
                                        {disponibilidadArray.map((c) => (
                                            <SelectItem key={c.puntuacion} value={c.puntuacion}>
                                                {c.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>

                                {/*
                                    <Select
                                        label="Seleccione un activo"
                                        className="max-w-xs"
                                        onChange={handleSelectChange}
                                    >
                                        {activos.map((organizacion) => (
                                            <SelectItem key={organizacion._id} value={idOrganizacion._id}>
                                                {organizacion._code + "-" + organizacion._name}
                                            </SelectItem>
                                        ))}
                                    </Select>*/
                                }


                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={() => props.cerrar(true)}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => editar()}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
