"use client"
import Image from 'next/image'
import Table from '../components/Table/Table'
import { Button, User } from '@nextui-org/react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useState } from 'react';
import OrganizacionOption from "../components/OptionsMenu/OrganizacionOption"
import UsuarioOption from "../components/OptionsMenu/UsuarioOption"
import DepartamentoOption from "../components/OptionsMenu/DepartamentoOption"
import EtiquetaOption from "../components/OptionsMenu/EtiquetaOption"
import Categoria from "../components/OptionsMenu/CategoriaOption"
import ClasificacionOption from "../components/OptionsMenu/ClasificacionOption"
import TipoActivoOption from "../components/OptionsMenu/TipoActivoOption"
import CriticidadOption from "../components/OptionsMenu/CriticidadOption"
import GrupoOption from "../components/OptionsMenu/GrupoOption"
import ActionOption from "../components/OptionsMenu/ActivoOption"
import ValoracionOption from "../components/OptionsMenu/ValoracionOption"
import ActivoOptionUsuario from "../components/OptionsMenu/ActivoOptionUsuario"
import ValoracionOptionUsuario from "../components/OptionsMenu/ValoracionOptionUsuario"
import { useUser } from '../UserContext';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export default function Home() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { usuario, setUsuario } = useUser();
  if (usuario == null) {
    router.push('/');
  }
  useEffect(() => {
    if (usuario == null) {

      router.push('/');
    }
  }, [usuario]);

  const cerrarSesion = () => {
    router.push('/');
    setUsuario(null);
  }

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
  }, {
    11: false,
    component: ActivoOptionUsuario
  }, {
    12: false,
    component: ValoracionOptionUsuario
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
      {usuario == null ? router.push('/') : (
        <>
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
                    name={usuario._Nombre + " " + usuario._Apellido}
                    description="User"
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
                  <AccordionItem key="2" aria-label="Accordion 2" title="Activos">
                    <Button onClick={() => handleChangeOption(11)} style={{ width: "100%", color: "white" }} variant="solid"
                      color={opcionesMenu[11][11] ? "secondary" : "transparent"}>
                      Identificación
                    </Button>
                    <Button onClick={() => handleChangeOption(12)} style={{ width: "100%", color: "white" }} variant="solid"
                      color={opcionesMenu[12][12] ? "secondary" : "transparent"}>
                      Evaluación
                    </Button>

                  </AccordionItem>

                  <AccordionItem key="2" aria-label="Accordion 2" title="Cierre">
                    <Button onClick={() => cerrarSesion()} style={{ width: "100%", color: "white" }} variant="solid"
                      color={opcionesMenu[11][11] ? "secondary" : "transparent"}>
                      Cerrar Sesión
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
                return <div key={index}  ><Component idOrganizacionUsuario={usuario._IdOrganizacion} id="admin" handleChangeOption={handleChangeOption} /></div>
              }
            })}
          </div>
        </>
      )}

    </main>
  )
}
