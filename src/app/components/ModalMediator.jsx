import OrganizacionModalEdit from './ModalsEdit/OrganizacionModalEdit.jsx'
import OrganizacionModalCreate from './ModalCreate/OrganizacionModalCreate.jsx'
import OrganizacionModalDelete from './ModalDelete/OrganizacionModalDelete.jsx'
import GrupoModalEdit from './ModalsEdit/GrupoModalEdit.jsx'
import GrupoModalCreate from './ModalCreate/GrupoModalCreate.jsx'
import GrupoModalDelete from './ModalDelete/GrupoModalDelete.jsx'
import UsuarioModalEdit from './ModalsEdit/UsuarioModalEdit.jsx'
import UsuarioModalCreate from './ModalCreate/UsuarioModalCreate.jsx'
import UsuarioModalDelete from './ModalDelete/UsuarioModalDelete.jsx'
import DepartamentoModalEdit from './ModalsEdit/DepartamentoModalEdit.jsx'
import EtiquetaModalEdit from './ModalsEdit/EtiquetaModalEdit.jsx'
import EtiquetaModalCreate from './ModalCreate/EtiquetaModalCreate.jsx'
import EtiquetaModalDelete from './ModalDelete/EtiquetaModalDelete.jsx'
import ActivoModalEdit from './ModalsEdit/ActivoModalEdit.jsx'
import ActivoModalCreate from './ModalCreate/ActivoModalCreate.jsx'
import ActivoModalDelete from './ModalDelete/activoModalDelete.jsx'
import DepartamentoModalCreate from './ModalCreate/DepartamentoModalCreate.jsx'
import DepartamentoModalDelete from './ModalDelete/departamentoModalDelete.jsx'
import TipoActivoModalEdit from './ModalsEdit/TipoActivoModalEdit.jsx'
import TipoActivoModalCreate from './ModalCreate/TipoActivoModalCreate.jsx'
import TipoActivoModalDelete from './ModalDelete/TipoActivoModalDelete.jsx'
import CategoriaModalEdit from './ModalsEdit/CategoriaModalEdit.jsx'
import CategoriaModalCreate from './ModalCreate/CategoriaModalCreate.jsx'
import CategoriaModalDelete from './ModalDelete/CategoriaModalDelete.jsx'
import ValoracionActivoModalEdit from './ModalsEdit/ValoracionActivoModalEdit.jsx'
import ValoracionActivoModalCreate from './ModalCreate/ValoracionActivoModalCreate.jsx'
import ValoracionActivoModalDelete from './ModalDelete/ValoracionActivoModalDelete.jsx'




export default function ModalMediator(props) {
    const tipo = props.type
    const peticion = props.peticion
    return (
        <>
            {
                tipo === "organizacion" && peticion == "edita" ?  <OrganizacionModalEdit {...props}/> 
                : tipo === "organizacion" && peticion == "crea" ? <OrganizacionModalCreate {...props}/>
                : tipo === "organizacion" && peticion == "elimina" ? <OrganizacionModalDelete {...props}/>
                : tipo === "grupo" && peticion == "edita" ? <GrupoModalEdit {...props}/>
                : tipo === "grupo" && peticion == "crea" ? <GrupoModalCreate {...props}/>
                : tipo === "grupo" && peticion == "elimina" ? <GrupoModalDelete {...props}/>
                : tipo === "usuario" && peticion == "edita" ? <UsuarioModalEdit {...props}/>
                : tipo === "usuario" && peticion == "crea" ? <UsuarioModalCreate {...props}/>
                : tipo === "usuario" && peticion == "elimina" ? <UsuarioModalDelete {...props}/>
                : tipo === "departamento" && peticion == "edita" ? <DepartamentoModalEdit {...props}/>
                : tipo === "departamento" && peticion == "crea" ? <DepartamentoModalCreate {...props}/>
                : tipo === "departamento" && peticion == "elimina" ? <DepartamentoModalDelete {...props}/>
                : tipo === "etiqueta" && peticion == "edita" ? <EtiquetaModalEdit {...props}/>
                : tipo === "etiqueta" && peticion == "crea" ? <EtiquetaModalCreate {...props}/>
                : tipo === "etiqueta" && peticion == "elimina" ? <EtiquetaModalDelete {...props}/> 
                : tipo === "activo" && peticion == "edita" ? <ActivoModalEdit {...props}/>
                : tipo === "activo" && peticion == "crea" ? <ActivoModalCreate {...props}/>
                : tipo === "activo" && peticion == "elimina" ? <ActivoModalDelete {...props}/>
                : tipo === "tipoActivo" && peticion == "edita" ? <TipoActivoModalEdit {...props}/>
                : tipo === "tipoActivo" && peticion == "crea" ? <TipoActivoModalCreate {...props}/>
                : tipo === "tipoActivo" && peticion == "elimina" ? <TipoActivoModalDelete {...props}/>
                : tipo === "categoria" && peticion == "edita" ? <CategoriaModalEdit {...props}/>
                : tipo === "categoria" && peticion == "crea" ? <CategoriaModalCreate {...props}/>
                : tipo === "categoria" && peticion == "elimina" ? <CategoriaModalDelete {...props}/>
                : tipo === "valoracionActivo" && peticion == "edita" ? <ValoracionActivoModalEdit {...props}/>
                : tipo === "valoracionActivo" && peticion == "crea" ? <ValoracionActivoModalCreate {...props}/>
                : tipo === "valoracionActivo" && peticion == "elimina" ? <ValoracionActivoModalDelete {...props}/>:""
            }
        </>
    )
}