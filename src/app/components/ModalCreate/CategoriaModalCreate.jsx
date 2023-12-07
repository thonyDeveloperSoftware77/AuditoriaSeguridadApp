
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getTipoActivo } from "../../servicios/tipoActivoSrv";
import { postCategoria, putCategoria } from "../../servicios/categoriaSrv";

export default function CategoriaModalCreate(props) {

    //Informacion necesaria para editar un grupo
    const [tiposActivos, setTipoActivos] = useState([]);


    //Datos para la edicion de un grupo
    const [nombre, setNombre] = useState();
    const [definicion, setDefinicion] = useState();
    const [ejemplo, setEjemplo] = useState();
    const [idTipoActivo, setIdTipoActivo] = useState();
    const { onOpen } = useDisclosure();

    const editar = () => {
        postCategoria(nombre, definicion, ejemplo,idTipoActivo).then((response) => {
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
                                <Input value={ejemplo} onValueChange={setEjemplo} isRequired type="text" label="Ejemplo" />
                                
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
