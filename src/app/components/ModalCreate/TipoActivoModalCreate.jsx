
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useState } from "react";
import { postTipoActivo } from "../../servicios/tipoActivoSrv";

export default function TipoActivoModalCreate(props) {
    const [nombre, setNombre] = useState();
    const [descripcion, setDescripcion] = useState();
    const { onOpen } = useDisclosure();

    const editar = () => {
        postTipoActivo(nombre, descripcion).then((response) => {
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
                            <ModalHeader className="flex flex-col gap-1">Crear Tipo de Activo</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Input value={descripcion} onValueChange={setDescripcion} isRequired type="text" label="Descripcion" />
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
