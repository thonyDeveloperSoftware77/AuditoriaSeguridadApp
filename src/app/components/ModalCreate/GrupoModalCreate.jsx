
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { postGrupo} from "../../servicios/grupoSrv";
import { getOrganizaciones } from "../../servicios/organizacionSrv";

export default function GrupoModalCreate(props) {
    const [nombre, setNombre] = useState(props.data._nombre);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    //Informacion necesaria para editar un grupo
    const [organizaciones, setOrganizaciones] = useState([]);
    const { onOpen } = useDisclosure();

    const editar = () => {
        postGrupo(nombre, idOrganizacion).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }

    
    useEffect(() => {
        getOrganizaciones().then((response) => {
            setOrganizaciones(response);
        });
    }, []);
    const handleSelectChange = (e) => {
        setIdOrganizacion(e.target.value);
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
