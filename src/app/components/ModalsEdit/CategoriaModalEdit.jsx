
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getTipoActivo } from "../../servicios/tipoActivoSrv";
import { putCategoria } from "../../servicios/categoriaSrv";

export default function CategoriaModal(props) {

    //Informacion necesaria para editar un grupo
    const [tiposActivos, setTipoActivos] = useState([]);


    //Datos para la edicion de un grupo
    const [nombre, setNombre] = useState(props.data._nombre);
    const [definicion, setDefinicion] = useState(props.data._definicion);
    const [ejemplo, setEjemplo] = useState(props.data._ejemplo);
    const [idTipoActivo, setIdTipoActivo] = useState(props.data._idTipoActivo);
    const { onOpen } = useDisclosure();

    const editar = () => {
        putCategoria(props.data._id, nombre, definicion, ejemplo,idTipoActivo).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }


    useEffect(() => {
        getTipoActivo().then((response) => {
            setTipoActivos(response);
        });
    }, []);
    const handleSelectChange = (e) => {
        setIdTipoActivo(e.target.value);
      };


    return (
        <>

            <Modal backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualiar una organizacion</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Input value={definicion} onValueChange={setDefinicion} isRequired type="text" label="Definicion" />
                                
                                <Select
                                    label="Selecciona un tipo de Activo"
                                    className="max-w-xs"
                                    onChange={handleSelectChange}
                                >
                                    {tiposActivos.map((organizacion) => (
                                        <SelectItem key={organizacion._id} value={organizacion._id}>
                                            {organizacion._nombre}
                                        </SelectItem>
                                    ))}
                                </Select>

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
