"use client"
import Image from 'next/image'
import Table from './components/Table/Table'
import { Button, User } from '@nextui-org/react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from 'react';
import OrganizacionOption from "./components/OptionsMenu/OrganizacionOption"
import UsuarioOption from "./components/OptionsMenu/UsuarioOption"
import DepartamentoOption from "./components/OptionsMenu/DepartamentoOption"
import EtiquetaOption from "./components/OptionsMenu/EtiquetaOption"
import Categoria from "./components/OptionsMenu/CategoriaOption"
import ClasificacionOption from "./components/OptionsMenu/ClasificacionOption"
import TipoActivoOption from "./components/OptionsMenu/TipoActivoOption"
import CriticidadOption from "./components/OptionsMenu/CriticidadOption"
import GrupoOption from "./components/OptionsMenu/GrupoOption"
import ActionOption from "./components/OptionsMenu/ActivoOption"
import ValoracionOption from "./components/OptionsMenu/ValoracionOption"

import { GoOrganization } from "react-icons/go";
import { VscOrganization } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { MdOutlineNewLabel } from "react-icons/md";
import { MdWebAsset } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdOutlineFactCheck } from "react-icons/md";
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";









export default function DashboardAdmin() {
  //OpcionesDelMenu
  const [opcionesMenu, setOpcionesMenu] = useState([{
    0: true,
    component: OrganizacionOption
  }, {
    1: false,
    component: UsuarioOption
  }, {
    2: false,
    component: DepartamentoOption
  }, {
    3: false,
    component: EtiquetaOption
  }, {
    4: false,
    component: ClasificacionOption
  }, {
    5: false,
    component: Categoria
  }, {
    6: false,
    component: TipoActivoOption
  }, {
    7: false,
    component: CriticidadOption
  }, {
    8: false,
    component: GrupoOption
  }, {
    9: false,
    component: ActionOption
  }, {
    10: false,
    component: ValoracionOption
  }]);


  //funciones para los cambios de estados

  const handleChangeOption = (numero) => {
    const nuevasOpcionesMenu = opcionesMenu.map((opcion, index) => {
      return {
        ...opcion,
        [index]: index === numero
      }
    })

    setOpcionesMenu(nuevasOpcionesMenu)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*sideBar */}
      <div className={opcionesMenu[9][9] ? "SideBarHidden" : "SideBar"}>
        <div className='ContentSideBar'>
          <center>
            <Image src='/logo.png' width={70} height={70} />
          </center>
          {/*User photo, roll and name*/}
          <br />
          <center>
            <div className='userProfileContent'>
              <User
                name="Jane Doe"
                description="Admin"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
              />
            </div>

          </center>
          <br />
          <hr />
          <div className='Acordion'>
            <Accordion
              color="primary"
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 1,
                      },
                    },
                  },
                  exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        easings: "ease",
                        duration: 0.25,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 0.3,
                      },
                    },
                  },
                },
              }}
            >
              <AccordionItem key="1" aria-label="Accordion 1" title="Gestiones">
                <Button onClick={() => handleChangeOption(0)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[0][0] ? "secondary" : "transparent"}
                >
                  <GoOrganization />
                  Organizaciones
                </Button>
                <Button onClick={() => handleChangeOption(8)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[8][8] ? "secondary" : "transparent"}
                >
                  <VscOrganization />
                  Grupos
                </Button>
                <Button onClick={() => handleChangeOption(1)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[1][1] ? "secondary" : "transparent"}
                >
                  <FaRegUserCircle />
                  Usuarios
                </Button>
                <Button onClick={() => handleChangeOption(2)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[2][2] ? "secondary" : "transparent"}
                >
                  <FaBuildingUser />
                  Departamentos
                </Button>
                <Button onClick={() => handleChangeOption(3)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[3][3] ? "secondary" : "transparent"}
                >
                  <MdOutlineNewLabel />
                  Etiquetas
                </Button>
                <Button onClick={() => handleChangeOption(6)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[6][6] ? "secondary" : "transparent"}
                >
                  <MdWebAsset />
                  Tipo de Activos
                </Button>
                <Button onClick={() => handleChangeOption(5)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[5][5] ? "secondary" : "transparent"}
                >
                  <MdOutlineCategory />
                  Categorias
                </Button>
                <Button onClick={() => handleChangeOption(4)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[4][4] ? "secondary" : "transparent"}
                >
                  <BiCategory />
                  Clasificaciones
                </Button>
                <Button onClick={() => handleChangeOption(7)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[7][7] ? "secondary" : "transparent"}
                >
                  <MdOutlineFactCheck />
                  Criticidad
                </Button>

              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Activos">
                <Button onClick={() => handleChangeOption(9)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[9][9] ? "secondary" : "transparent"}>
                  <PiFileMagnifyingGlassDuotone />
                  Identificación
                </Button>
                <Button onClick={() => handleChangeOption(10)} style={{ width: "100%", color: "white" }} variant="solid"
                  color={opcionesMenu[10][10] ? "secondary" : "transparent"}>
                  <FaListCheck />
                  Evaluación
                </Button>

              </AccordionItem>
            </Accordion>

          </div>


        </div>
      </div>
      <div className={opcionesMenu[9][9] ? "ContentBoxAll" : "ContentBox"} >
        {opcionesMenu.map((opcion, index) => {
          if (opcion[index]) {
            const Component = opcion.component;
            return <div key={index}  ><Component id="admin" handleChangeOption={handleChangeOption} /></div>
          }
        })}
      </div>
    </main>
  )
}
