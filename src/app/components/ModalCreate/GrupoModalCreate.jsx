
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { postGrupo } from "../../servicios/grupoSrv";
import { getOrganizaciones } from "../../servicios/organizacionSrv";

export default function GrupoModalCreate(props) {
    const [nombre, setNombre] = useState(props.data._nombre);
    const [idOrganizacion, setIdOrganizacion] = useState(-1);
    const [rol, setRol] = useState(null);
    //Informacion necesaria para editar un grupo
    const [organizaciones, setOrganizaciones] = useState([]);
    const { onOpen } = useDisclosure();

    const editar = () => {
        postGrupo(nombre, idOrganizacion, rol).then((response) => {
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

    const handleSelectChangeRol =(e) => {
        setRol(e.target.value);
    };




    return (
        <>

            <Modal backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear un Grupo</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Select
                                    label="Seleccione una organizacion"
                                    className="max-w-xs"
                                    onChange={handleSelectChange}
                                >
                                    {organizaciones.map((organizacion) => (
                                        <SelectItem key={organizacion._id} value={idOrganizacion._id}>
                                            {organizacion._nombre}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Select
                                    label="Seleccione el rol del grupo"
                                    className="max-w-xs"
                                    onChange={handleSelectChangeRol}
                                >
                                    <SelectItem key="0" value="1">
                                        Administrador
                                    </SelectItem>
                                    <SelectItem key="0" value="0">
                                        Usuario
                                    </SelectItem>
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
