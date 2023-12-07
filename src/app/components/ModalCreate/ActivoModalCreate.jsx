
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Card, CardHeader, Divider, CardBody, Avatar, ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../servicios/usuarioSrv ";
import { getDepartamentos } from "../../servicios/departamentoSrv ";
import Image from "next/image";
import { deleteActivo, postActivo, putActivo } from "../../servicios/activoSrv";
import { getCriterio } from "../../servicios/criterioSrv";
import { getCategoria } from "../../servicios/categoriaSrv";
import { getClasificacion } from "../../servicios/clasificacionSrv";
import { getTipoActivo } from "../../servicios/tipoActivoSrv";
import { getEtiqueta } from "../../servicios/etiquetaSrv";
import { deleteActivoUsuario, postActivoUsuario } from "../../servicios/activoUsuarioSrv";
import { deleteActivoBusinessUnitUsuario, postActivoBusinessUnitUsuario } from "../../servicios/activoBusinessUnitSrv";

export default function ActivoModalCreate (props) {

    //Informacion necesaria para editar un grupo
    const [usuarios, setUsuarios] = useState([]);

    const [departamentos, setDepartamentos] = useState([]);

    const [criticality, setCriticality] = useState([]);
    const [Categoria, setCategoria] = useState([]);
    const [Clasificacion, setClasificacion] = useState([]);
    const [tipoActivo, setTipoActivo] = useState([]);
    const [etiqueta, setEtiqueta] = useState([]);

    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [ubicacion, setUbicacion] = useState();
    const [label, setLabel] = useState();
    const [type, setType] = useState();
    const [id_criterio, setId_criterio] = useState();
    const [id_categoria, setId_categoria] = useState();
    const [id_clasificacion, setId_clasificacion] = useState();
    const [date, setDate] = useState();
    const { onOpen } = useDisclosure();

    //State para guardar la lista de usuarios del Activo
    const [usuariosActivo, setUsuariosActivo] = useState([]);

    //State para guardar la lista de Departamentos del Activo
    const [departamentosActivo, setDepartamentosActivo] = useState([]);

    const editar = () => {
        const fecha = new Date(date);
        fecha.toISOString();
        postActivo(code, name, description, ubicacion, label, type, id_criterio, id_categoria, id_clasificacion, props.idOrganizacion, fecha).then((response) => {
            usuariosActivo.map((usuario) => {
                postActivoUsuario(usuario._id, response._new_id)
            })
            departamentosActivo.map((departamento) => {
                postActivoBusinessUnitUsuario(response._new_id, departamento._id)
            })

            props.setUpdate(prevState => !prevState);
            props.cerrar(true);

        }).catch((error) => {
            console.log(error);
        })
       

    }


    useEffect(() => {
        //Obtiene los usuarios de la organizacion
        getUsuarios(props.idOrganizacion).then((response) => {
            setUsuarios(response);
        });
        getCriterio().then((response) => {
            setCriticality(response);
        });
        getCategoria().then((response) => {
            setCategoria(response);
        });
        getClasificacion().then((response) => {
            setClasificacion(response);
        });
        getTipoActivo().then((response) => {
            setTipoActivo(response);
        });
        getEtiqueta().then((response) => {
            setEtiqueta(response);
        });
        getEtiqueta().then((response) => {
            setEtiqueta(response);
        });
    }, []);

    useEffect(() => {
        //Obtiene los departamentos de la organizacion
        getDepartamentos(props.idOrganizacion).then((response) => {
            setDepartamentos(response);
        });

    }, []);

    //Compara si ya existe el usuario en el departamento, si no lo añade
    const handleSelectChange = (e) => {
        console.log(e.target.value);
        const arrayUsuario = [];
        usuariosActivo.map((usuario) => {
            arrayUsuario.push(usuario);
        })
        const usuarioEncontrado = usuariosActivo.find(usuario => usuario._id == e.target.value)
        if (usuarioEncontrado == undefined) {
            arrayUsuario.push(usuarios.find(usuario => usuario._id == e.target.value));
            setUsuariosActivo(arrayUsuario);
        } else {
            setUsuariosActivo(arrayUsuario);
        }
    };

    //Compara si ya existe el departamento en el departamento, si no lo añade
    const handleSelectChangeDepartamento = (e) => {
        const arrayDepartamento = [];
        departamentosActivo.map((departamento) => {
            arrayDepartamento.push(departamento);
        })
        const departamentoEncontrado = departamentosActivo.find(departamento => departamento._id == e.target.value)
        if (departamentoEncontrado == undefined) {
            arrayDepartamento.push(departamentos.find(departamento => departamento._id == e.target.value));
            setDepartamentosActivo(arrayDepartamento);
        } else {
            setDepartamentosActivo(arrayDepartamento);
        }
    };

    const handleSelectChangeCriticality = (e) => {
        setId_criterio(e.target.value);
    };

    const handleSelectChangeCategoria = (e) => {
        setId_categoria(e.target.value);
    };

    const handleSelectChangeClasificacion = (e) => {
        setId_clasificacion(e.target.value);
    };

    const handleSelectChangeTipoActivo = (e) => {
        setType(e.target.value);
    };

    const handleSelectChangeEtiqueta = (e) => {
        setLabel(e.target.value);
    };



    //Elimina el usuario del state
    const DeleteUser = (id) => {
        const arrayUsuario = [];
        usuariosActivo.map((usuario) => {
            if (usuario._id != id) {
                arrayUsuario.push(usuario);
            }
        })
        setUsuariosActivo(arrayUsuario);
    }

    //Elimina el departamento del state
    const DeleteDepartamento = (id) => {
        console.log(id);
        const arrayDepartamento = [];
        console.log("departamentosActivo");
        console.log(departamentosActivo);
        departamentosActivo.map((departamento) => {
            console.log("departamento");
            console.log(departamento._id);
            if (departamento._id != id) {
                arrayDepartamento.push(departamento);
            }
        })
        setDepartamentosActivo(arrayDepartamento);
    }

    return (
        <>

            <Modal size="4xl" backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualiar una departamento</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-row gap-2">
                                    <Input value={code} onValueChange={setCode} isRequired type="text" label="Code" />
                                    <Input value={name} onValueChange={setName} isRequired type="text" label="Name" />
                                </div>
                                <Input value={description} onValueChange={setDescription} isRequired type="text" label="Descripcion" />

                                <Input value={ubicacion} onValueChange={setUbicacion} isRequired type="text" label="Ubicacion" />

                                <div style={{ width: "100%" }} className="flex flex-row gap-2">
                                    <div style={{ width: " 25%" }}>
                                        <Select
                                            label="Seleccione la etiqueta"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeEtiqueta}
                                            isRequired
                                        >
                                            {etiqueta?.map((et) => (
                                                <SelectItem key={et._id} value={label}>
                                                    {et._nombre}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{ width: " 25%" }}>
                                        <Select
                                            label="Seleccione el Tipo de Activo"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeTipoActivo}
                                            isRequired
                                        >
                                            {tipoActivo?.map((tipo) => (
                                                <SelectItem key={tipo._id} value={type}>
                                                    {tipo._nombre}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                    <div style={{ width: " 25%" }}>
                                        <Select
                                            label="Selecciona la categoria"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeCategoria}
                                            isRequired
                                        >
                                            {Categoria?.map((ca) => {
                                                if (type == ca._tipo) {
                                                    return (
                                                        <SelectItem key={ca._id} value={id_categoria}>
                                                            {ca._nombre}
                                                        </SelectItem>
                                                    );
                                                }
                                            })}

                                        </Select>
                                    </div>
                                    <div style={{ width: " 25%" }}>
                                        <Select
                                            label="Selecciona la Clasificacion"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeClasificacion}
                                            isRequired
                                        >
                                            {Clasificacion?.map((cla) => (
                                                <SelectItem key={cla._id} value={id_clasificacion}>
                                                    {cla._nombre}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>

                                <div style={{ width: "100%" }} className="flex flex-row gap-2">
                                    <div style={{ width: "90%" }}>
                                        <Select style={{ width: "210%" }}
                                            size="md"
                                            label="Selecciona la criticidad"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeCriticality}
                                            isRequired
                                        >
                                            {criticality?.map((criticidad) => (
                                                <SelectItem key={criticidad._id} value={id_criterio}>
                                                    {criticidad._criterio}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>

                                    <div style={{ width: "20%" }} >
                                        <Input value={date} onValueChange={setDate} isRequired type="date" label="Fecha de Revisión" />
                                    </div>

                                </div>







                                <div style={{ width: "100%" }} className="flex flex-row gap-2">
                                    <div style={{ width: "50%" }}>
                                        <Select
                                            label="Selecciona un usuario"
                                            className="max-w-xs"
                                            onChange={handleSelectChange}
                                        >
                                            {usuarios?.map((departamento) => (
                                                <SelectItem key={departamento._id} value={departamento._id}>
                                                    {departamento._nombre}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <br /><br />
                                        <Card style={{ height: "160px", width: "400px" }}>
                                            <CardHeader className="justify-between">
                                                <div className="flex gap-5">
                                                    <div className="flex flex-col gap-1 items-start justify-center">
                                                        <h4 className="text-small font-semibold leading-none text-default-600">Usuarios</h4>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardBody className="px-3 py-0 text-small text-default-400" overflow-auto>
                                                {usuariosActivo.map((usuario) => (
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
                                                            <Button onClick={() => DeleteUser(usuario._id)} color="danger" variant="bordered">
                                                                Delete user
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </CardBody>
                                        </Card>

                                    </div>

                                    <div style={{ width: "50%" }}>
                                        <Select
                                            label="Selecciona un departamento"
                                            className="max-w-xs"
                                            onChange={handleSelectChangeDepartamento}
                                        >
                                            {departamentos?.map((departamento) => (
                                                <SelectItem key={departamento._id} value={departamento._id}>
                                                    {departamento._nombre}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <br /><br />
                                        <Card style={{ height: "160px", width: "400px" }}>
                                            <CardHeader className="justify-between">
                                                <div className="flex gap-5">
                                                    <div className="flex flex-col gap-1 items-start justify-center">
                                                        <h4 className="text-small font-semibold leading-none text-default-600">Departamentos</h4>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardBody className="px-3 py-0 text-small text-default-400" overflow-auto>
                                                {departamentosActivo.map((departamento) => (

                                                    <div className="flex items-center justify-between py-2">
                                                        {console.log(departamento)}
                                                        <div className="flex gap-3 items-center">
                                                            <Avatar>
                                                                <Image
                                                                    src="/img/usuario.png"
                                                                    alt="Picture of the author"
                                                                    width={45}
                                                                    height={35}
                                                                />
                                                            </Avatar>
                                                            <div className="flex flex-col gap-1">
                                                                <h4 className="font-semibold leading-none text-default-900">{departamento._nombre}</h4>
                                                            </div>
                                                            <Button onClick={() => DeleteDepartamento(departamento._id)} color="danger" variant="bordered">
                                                                Delete user
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </CardBody>
                                        </Card>

                                    </div>
                                </div >


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
