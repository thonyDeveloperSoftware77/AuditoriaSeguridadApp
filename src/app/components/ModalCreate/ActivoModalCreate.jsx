
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem, Card, CardHeader, Divider, CardBody, Avatar, ScrollShadow, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
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
import { assetType } from "../../utils/assetType"
import { assetCode } from "../../utils/assetCode"
import { dimensiones } from "../../utils/dimensiones.js"
import DimensionCreate from "./ActivoFormCreate/DimensionCreate";

export default function ActivoModalCreate(props) {
    const [currentPage, setCurrentPage] = useState("music");
    //Informacion necesaria para editar un grupo
    const [usuarios, setUsuarios] = useState([]);

    const [departamentos, setDepartamentos] = useState([]);

    //Para tipos
    const [activoHijo, setActivoHijo] = useState([]);
    const [activoHijo2, setActivoHijo2] = useState([]);
    const [activoHijo3, setActivoHijo3] = useState([]);

    //Para acronimo
    const [acrPadre, setAcrPadre] = useState('');
    const [acrHijo1, setAcrHijo1] = useState('');
    const [acrHijo2, setAcrHijo2] = useState('');
    const [acrHijo3, setAcrHijo3] = useState('');

    //Para el cambio del select
    const [selectChange, setSelectChange] = useState(false);

    //Para saber que dimension se esta creando
    const [dimensionProp, setDimensionProp] = useState('');



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


    useEffect(() => {
        const name = acrPadre + acrHijo1 + acrHijo2 + acrHijo3;
        assetCode(name, props.idOrganizacion).then((response) => {
            setCode(response);
        });
    }, [selectChange]);
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


    const handleSelectChangeTipoActivoPadre = (e) => {
        setDimensionProp(e.target.value);
        var result = assetType.find(tipo => tipo.acronimo == e.target.value)
        if (result.content == undefined) {
            setActivoHijo([]);
        } else {
            setType(e.target.value);
            setActivoHijo(result.content);

        }
        setAcrPadre(e.target.value);
        setActivoHijo2([]);
        setActivoHijo3([]);
        setAcrHijo1('');
        setAcrHijo2('');
        setAcrHijo3('');
        setSelectChange(prevState => !prevState);
    };

    const handleSelectChangeTipoActivoHijo = (e) => {
        if (e.target.value == "[info]" || e.target.value == "[service]" || e.target.value == "[conf]" || e.target.value == "[log])"){
            setDimensionProp(e.target.value);
        }
        setAcrHijo1(e.target.value);
        let result;
        for (let tipo of assetType) {
            result = tipo.content.find(tipo2 => tipo2.acronimo == e.target.value);
            if (result) break;
        }
        console.log(result.child)
        if (result.child == undefined) {
            setActivoHijo2([]);
            setActivoHijo3([]);
        } else {
            setActivoHijo2(result.child);
            setActivoHijo3([]);

        }
        setAcrHijo2('');
        setAcrHijo3('');
        setSelectChange(prevState => !prevState);

    };

    const handleSelectChangeTipoActivoHijo2 = (e) => {
        setAcrHijo2(e.target.value);
        setAcrHijo3('');
        let result;
        for (let tipo of assetType) {
            for (let tipo2 of tipo.content) {
                if (tipo2.child == undefined) continue;
                console.log(tipo2.child)
                result = tipo2.child.find(tipo3 => tipo3.acronimo == e.target.value);
                if (result) break;
            }
            if (result) break; // Añade esta línea para romper el bucle externo
        }
        console.log(result)
        if (result && result.child == undefined) { // Asegúrate de que result no es undefined antes de acceder a su propiedad child
            setActivoHijo3([]);
        } else {
            setActivoHijo3(result.child);
        }
        setSelectChange(prevState => !prevState);
    }

    const handleSelectChangeTipoActivoHijo3 = (e) => {
        console.log(e.target.value);
        setAcrHijo3(e.target.value);
        setSelectChange(prevState => !prevState);

    }


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

            <Modal size="5xl" backdrop={"blur"} isOpen={onOpen} >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear un Activo</ModalHeader>
                            <ModalBody>

                                <Breadcrumbs
                                    size="sm"
                                    onAction={(key) => setCurrentPage(key)}
                                    classNames={{
                                        list: "gap-2",
                                    }}
                                    itemClasses={{
                                        item: [
                                            "px-2 py-0.5 border-small border-default-400 rounded-small",
                                            "data-[current=true]:border-foreground data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors",
                                            "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
                                        ],
                                        separator: "hidden",
                                    }}
                                >

                                    <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
                                        Home
                                    </BreadcrumbItem>
                                    <BreadcrumbItem key="dimension" isCurrent={currentPage === "dimension"}>
                                        Dimensión
                                    </BreadcrumbItem>
                                    <BreadcrumbItem key="dependencia" isCurrent={currentPage === "dependencia"}>
                                        Dependecia
                                    </BreadcrumbItem>

                                </Breadcrumbs>
                                <div className="ContainerCreate">
                                    <div className={currentPage === "dimension" ? "Show" : "hidden"}>
                                        Dimensiones del Activo
                                        <div style={{ width: "100%" }} className="flex flex-row gap-2">

                                            <div style={{ width: " 100%", display: "flex" }}>
                                                <DimensionCreate tipo={dimensionProp} />
                                               
                                            </div>

                                        </div>
                                    </div>
                                    <div className={currentPage === "dependencia" ? "Show" : "hidden"}>

                                    </div>
                                    <div className={currentPage === "home" ? "Show" : "hidden"}>
                                        <div className="flex flex-row gap-2">
                                            <Input value={code} onValueChange={setCode} type="text" label="Code" />
                                            <Input value={name} onValueChange={setName} isRequired type="text" label="Name" />
                                        </div>
                                        <Input value={description} onValueChange={setDescription} isRequired type="text" label="Descripcion" />



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

                                        <div style={{ width: "100%" }} className="flex flex-row gap-2">

                                            <div style={{ width: " 100%", display: "flex" }}>
                                                <Select
                                                    label="Seleccione el Tipo de Activo"
                                                    className="max-w-xs"
                                                    onChange={handleSelectChangeTipoActivoPadre}
                                                    isRequired
                                                >
                                                    {assetType.map((tipo) => (
                                                        <SelectItem key={tipo.acronimo} value={tipo.acronimo}>
                                                            {tipo.acronimo + tipo.nombre}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div style={{ width: " 100%", display: "flex" }}>
                                                {activoHijo.length > 0 && (
                                                    <Select
                                                        label="Seleccione"
                                                        className="max-w-xs"
                                                        onChange={handleSelectChangeTipoActivoHijo}
                                                        isRequired
                                                    >
                                                        {activoHijo.map((tipo) => (
                                                            <SelectItem key={tipo.acronimo} value={tipo.acronimo}>
                                                                {tipo.acronimo + tipo.nombre}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                )
                                                }
                                            </div>
                                            <div style={{ width: " 100%", display: "flex" }}>
                                                {activoHijo2.length > 0 && (
                                                    <Select
                                                        label="Seleccione"
                                                        className="max-w-xs"
                                                        onChange={handleSelectChangeTipoActivoHijo2}
                                                        isRequired
                                                    >
                                                        {activoHijo2.map((tipo) => (
                                                            <SelectItem key={tipo.acronimo} value={tipo.acronimo}>
                                                                {tipo.acronimo + tipo.nombre}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                )}
                                            </div>
                                            <div style={{ width: "100%", display: "flex" }}>
                                                {activoHijo3.length > 0 && (
                                                    <Select
                                                        label="Seleccione"
                                                        className="max-w-xs"
                                                        onChange={handleSelectChangeTipoActivoHijo3}
                                                        isRequired
                                                    >
                                                        {activoHijo3.map((tipo) => (
                                                            <SelectItem key={tipo.acronimo} value={tipo.acronimo}>
                                                                {tipo.acronimo + tipo.nombre}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                )}
                                            </div>

                                        </div>

                                    </div>



                                </div>



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
