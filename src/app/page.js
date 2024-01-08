"use client"
import { Button, Card, CardBody, CardHeader, Input, User } from '@nextui-org/react'
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { use, useEffect, useState } from 'react';
import { getVerify } from './servicios/verifySrv';
import { useUser } from './UserContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Spline from '@splinetool/react-spline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {


  const notifyVerifySucces = () => toast("Usuario verificado con éxito");
  const notifyVerifyError = () => toast.error("Usuario no encontrado");


  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  //OpcionesDelMenu


  const { usuario, setUsuario } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verificarUsuario = async () => {

    const response = await getVerify(email, password);
    if (response[0]._Resultado == 1) {
      notifyVerifySucces();
      setUsuario(response[0]);
    } else {
      notifyVerifyError();
    }
  }

  useEffect(() => {
    if (usuario != null) {
      if (usuario._Rol == 1) {
        router.push('/dashboard-admin');

      } else if (usuario._Rol == 0) {
        router.push('/dashboard-user');
      }
    }
  }
    , [usuario]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToastContainer />
      <div className='splineContainer'>
        <Spline scene="https://prod.spline.design/ypJLvplM0W9uDf3D/scene.splinecode" />
      </div>
      <div className="mainContainerTitle flex flex-col items-center justify-center">
        <h1 >Seguridad y Auditoría</h1>

        <img src="/logo.png" alt="Logo" />
        <h2 className="text-2xl font-bold text-center text-default-900">Iniciar Sesión</h2>

      </div>


      <Card style={{ width: "350px", marginTop: "10%" }} className="max-w-[440px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">Login</h4>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <Input value={email} onValueChange={setEmail} isRequired type="email" variant="bordered" label="Email" placeholder="Enter your email" />
          <br />
          <Input
            value={password} onValueChange={setPassword} isRequired
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
          <br /><br />

          <Button onClick={verificarUsuario} color="secondary">
            Iniciar Sesión
          </Button>
          <br /><br />
        </CardBody>
      </Card>

    </main>
  )

}