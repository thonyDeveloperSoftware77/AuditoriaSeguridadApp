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

export default function Home() {
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
      <div className={opcionesMenu[9][9] ? "SideBarHidden":"SideBar"}>
        <div className='ContentSideBar'>
          <center>
            <Image src='/logo.png' width={70} height={70} />
          </center>
          {/*User photo, roll and name*/}
          <br />
          <center>
            <User
              name="Jane Doe"
              description="Admin"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
              }}
            />
          </center>
          <br />
          <hr />

          <Accordion
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
            <AccordionItem key="1" aria-label="Accordion 1"  title="Gestiones">
              <Button onClick={() => handleChangeOption(0)} style={{ width: "100%", color:"white" }}variant="solid" 
              color={opcionesMenu[0][0] ? "secondary": "transparent"}
              >
                
                Organizaciones
              </Button>
              <Button onClick={() => handleChangeOption(8)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[8][8] ? "secondary": "transparent"}
              >
                Grupos
              </Button>
              <Button onClick={() => handleChangeOption(1)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[1][1] ? "secondary": "transparent"}
              >
                Usuarios
              </Button>
              <Button onClick={() => handleChangeOption(2)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[2][2] ? "secondary": "transparent"}
              >
                Departamentos
              </Button>
              <Button onClick={() => handleChangeOption(3)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[3][3] ? "secondary": "transparent"}
              >
                Etiquetas
              </Button>
              <Button onClick={() => handleChangeOption(6)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[6][6] ? "secondary": "transparent"}
              >
                Tipo de Activos
              </Button>
              <Button onClick={() => handleChangeOption(5)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[5][5] ? "secondary": "transparent"}
              >
                Categorias
              </Button>
              <Button onClick={() => handleChangeOption(4)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[4][4] ? "secondary": "transparent"}
              >
                Clasificaciones
              </Button>
              <Button onClick={() => handleChangeOption(7)} style={{ width: "100%", color:"white" }} variant="solid"
              color={opcionesMenu[7][7] ? "secondary": "transparent"}
              >
                Criticidad
              </Button>
            
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Activos">
              <Button onClick={() => handleChangeOption(9)} style={{ width: "100%", color:"white" }} variant="solid" 
              color={opcionesMenu[9][9] ? "secondary": "transparent"}>
                Identificación
              </Button>
              <Button style={{ width: "100%", color:"white" }} variant="solid" 
              color={opcionesMenu[0][99] ? "secondary": "transparent"}>
                Evaluación
              </Button>
             
            </AccordionItem>
          </Accordion>


        </div>
      </div>
      <div className={opcionesMenu[9][9] ? "ContentBoxAll":"ContentBox"} >
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
