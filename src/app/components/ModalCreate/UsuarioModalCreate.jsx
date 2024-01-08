
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getGrupos } from "../../servicios/grupoSrv";
import { postUsuario, putUsuario } from "../../servicios/usuarioSrv ";

export default function UsuarioModalCreate(props) {

    //Informacion necesaria para editar un grupo
    const [grupos, setGrupos] = useState([]);


    //Datos para la edicion de un grupo
    const [nombre, setNombre] = useState(props.data._nombre);
    const [apellido, setApellido] = useState(props.data._apellido);
    const [email, setEmail] = useState(props.data._email);
    const [password, setPassword] = useState(props.data._password);
    const [idGrupo, setIdGrupo] = useState(props.data._idGrupo);
    const { onOpen } = useDisclosure();

    const editar = () => {
        postUsuario(nombre, apellido, email,props.idOrganizacion, password, idGrupo).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
    }


    useEffect(() => {
        getGrupos(props.idOrganizacion).then((response) => {
            setGrupos(response);
            console.log(response)
        });
    }, []);
    const handleSelectChange = (e) => {
        setIdGrupo(e.target.value);
      };


    return (
        <>

            <Modal backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear un Usuario</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Input value={apellido} onValueChange={setApellido} isRequired type="text" label="Apellido" />
                                <Input value={email} onValueChange={setEmail} isRequired type="text" label="Email" />
                                <Input value={password} onValueChange={setPassword} isRequired type="text" label="Password" />
                                <Select
                                    label="Select an grupo"
                                    className="max-w-xs"
                                    onChange={handleSelectChange}
                                >
                                    {grupos.map((grupo) => (
                                        <SelectItem key={grupo._id} value={grupo._id}>
                                            {grupo._nombre}
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
