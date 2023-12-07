
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { deleteDepartamento } from "../../servicios/departamentoSrv ";
import { deleteDepartamentoUsuario } from "../../servicios/departamentoUsuarioSrv";

export default function DepartamentoModalDelete(props) {
    console.log("Esto es el props");
    console.log(props.data._id);
    const { onOpen } = useDisclosure();
    const editar = () => {

        deleteDepartamentoUsuario(props.data._id).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
            return
        })
        deleteDepartamento(props.data._id).then((response) => {
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
                                Estas seguro que deseas eliminar esta organizacion?
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
