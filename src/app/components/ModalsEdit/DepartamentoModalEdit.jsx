
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Card, CardHeader, Divider, CardBody, Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../servicios/usuarioSrv ";
import { putDepartamento } from "../../servicios/departamentoSrv ";
import Image from "next/image";
import { deleteDepartamentoUsuario, postDepartamentoUsuario } from "../../servicios/departamentoUsuarioSrv";

export default function DepartamentoModal(props) {

    //Informacion necesaria para editar un grupo
    const [usuarios, setUsuarios] = useState([]);


    //Datos para la edicion de un grupo
    const [nombre, setNombre] = useState(props.data._nombre);
    const [descripcion, setDescripcion] = useState(props.data._descripcion);
    const [idUsuario, setIdUsuario] = useState(props.data._usuarios);
    const { onOpen } = useDisclosure();

    //Satate para guardar la lista de usuarios del departamento
    const [usuariosDepartamento, setUsuariosDepartamento] = useState([]);

    const editar = () => {
        putDepartamento(props.data._id, nombre, descripcion).then((response) => {
            console.log(response);
            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })

        deleteDepartamentoUsuario(props.data._id)

        usuariosDepartamento.map((usuario) => {
            postDepartamentoUsuario(usuario._id,props.data._id)
        })

    }


    useEffect(() => {
        getUsuarios(props.idOrganizacion).then((response) => {
            const arrayUsuario = [];
            //Mapea los usuarios de props.data._usuarios y compara con los usuarios de la organizacion, si existe  hace un push al state usuariosDepartamento
            props.data._usuarios.map((usuario, index) => {
                const nuevoUsuario = response.find(user => user._id == usuario.usr_id_user);
                if (nuevoUsuario !== undefined && !usuariosDepartamento.includes(nuevoUsuario)) {
                    arrayUsuario.push(nuevoUsuario);
                }
            })

            setUsuariosDepartamento(arrayUsuario)
            setUsuarios(response);
        });
    }, []);

    //Compara si ya existe el usuario en el departamento, si no lo añade
    const handleSelectChange = (e) => {
        console.log(e.target.value);
        const arrayUsuario = [];
        usuariosDepartamento.map((usuario) => {
            arrayUsuario.push(usuario);
        })
        const usuarioEncontrado = usuariosDepartamento.find(usuario => usuario._id == e.target.value)
        if (usuarioEncontrado == undefined) {
            arrayUsuario.push(usuarios.find(usuario => usuario._id == e.target.value));
            setUsuariosDepartamento(arrayUsuario);
        } else {
            setUsuariosDepartamento(arrayUsuario);
        }
    };

    //Elimina el usuario del state
    const DeleteUser = (id) => {
        const arrayUsuario = [];
        usuariosDepartamento.map((usuario) => {
            if (usuario._id != id) {
                arrayUsuario.push(usuario);
            }
        })
        setUsuariosDepartamento(arrayUsuario);
    }


    return (
        <>

            <Modal backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualiar una departamento</ModalHeader>
                            <ModalBody>
                                <Input value={nombre} onValueChange={setNombre} isRequired type="text" label="Nombre" />
                                <Input value={descripcion} onValueChange={setDescripcion} isRequired type="text" label="Descripcion" />
                                <Card className="max-w-[340px]">
                                    <CardHeader className="justify-between">
                                        <div className="flex gap-5">
                                            <div className="flex flex-col gap-1 items-start justify-center">
                                                <h4 className="text-small font-semibold leading-none text-default-600">Usuarios</h4>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-3 py-0 text-small text-default-400">
                                        {usuariosDepartamento.map((usuario) => (
                                            <div className="flex items-center justify-between py-2">

                                                <div className="flex gap-3 items-center">
                                                    <Avatar>
                                                        <Image
                                                            src="/img/usuario.png"
                                                            alt="Picture of the author"
                                                            width={35}
                                                            height={35}
                                                        />
                                                    </Avatar>
                                                    <div className="flex flex-col gap-1">
                                                        <h4 className="font-semibold leading-none text-default-900">{usuario._nombre + " " + usuario._apellido}</h4>
                                                        <p className="leading-none text-default-500">{usuario._email}</p>
                                                    </div>
                                                    <Button onClick={()=>DeleteUser(usuario._id)} color="danger" variant="bordered">
                                                        Delete user
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </CardBody>
                                </Card>
                                <Select
                                    label="Select an departamento"
                                    className="max-w-xs"
                                    onChange={handleSelectChange}
                                >
                                    {usuarios?.map((departamento) => (
                                        <SelectItem key={departamento._id} value={idUsuario._id}>
                                            {departamento._nombre}
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
