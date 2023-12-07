
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { putOrganizacion } from "../../servicios/organizacionSrv";

export default function OrganizacionModal(props) {
    const [nombre, setNombre] = useState(props.data._nombre);
    const [sector, setSector] = useState(props.data._sector);
    const [ubicacion, setUbicacion] = useState(props.data._ubicacion);
    const [actividadPrincipal, setActividadPrincipal] = useState(props.data._actividadPrincipal);
    const { onOpen } = useDisclosure();

    const editar = () => {
        putOrganizacion(props.data._id, nombre, sector, ubicacion, actividadPrincipal).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>

            <Modal backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualiar una organizacion</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Input value={sector} onValueChange={setSector} isRequired type="text" label="Sector" />
                                <Input value={ubicacion} onValueChange={setUbicacion} isRequired type="text" label="Ubicación" />
                                <Input value={actividadPrincipal} onValueChange={setActividadPrincipal} isRequired type="text" label="Actividad Principal" />
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
