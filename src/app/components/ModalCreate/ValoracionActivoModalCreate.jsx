
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, CardBody, Card, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getActivos } from "../../servicios/activoSrv";
import { postValoracionActivo, putValoracionActivo } from "../../servicios/valoracionActivoSrv";
import { confidencialidadArray, disponibilidadArray, integridadArray } from "../Table/utils";

export default function ValoracionActivoModalCreate(props) {

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
    const [id_asset, setIdAsset] = useState(props.data._id_asset);
    const [codigo, setCodigo] = useState();
    const [nombre, setNombre] = useState();
    const [descripcion, setDescripcion] = useState();
    const [ubicacion, setUbicacion] = useState();
    const [confidencialidad, setConfidencialidad] = useState();
    const [integridad, setIntegridad] = useState();
    const [disponibilidad, setDisponibilidad] = useState();

    const { onOpen } = useDisclosure();

    const editar = () => {
        postValoracionActivo(id_asset, confidencialidad, integridad, disponibilidad).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }




    useEffect(() => {
        getActivos(props.idOrganizacion).then((response) => {
            setActivos(response);
        });
    }, []);


    const handleSelectChange = (e) => {
        setIdAsset(e.target.value);
    }
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
                                <Select
                                    label="Seleccione un activo"
                                    className="max-w-xs"
                                    onChange={handleSelectChange}
                                >
                                    {activos.map((organizacion) => (
                                        <SelectItem key={organizacion._id} value={organizacion._id}>
                                            {organizacion._code + "-" + organizacion._name}
                                        </SelectItem>
                                    ))}
                                </Select>

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
                                    */
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
