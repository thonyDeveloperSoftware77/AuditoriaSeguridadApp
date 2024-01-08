export const assetType = [
    {
        acronimo: "[EA]",
        nombre: "Activos esenciales",
        content: [
            {
                acronimo: "[info]",
                nombre: "Información",
                child: [{
                    acronimo: "[adm]",
                    nombre: "Datos de interés para la administración"
                }, {
                    acronimo: "[vr]",
                    nombre: "Datos de carácter personal",
                    child: [
                        {
                            acronimo: "[A]",
                            nombre: "Nivel Alto",
                        }, {
                            acronimo: "[M]",
                            nombre: "Nivel Medio",
                        }, {
                            acronimo: "[B]",
                            nombre: "Nivel Bajo"
                        }
                    ]
                }, {
                    acronimo: "[classified]",
                    nombre: "Datos clasificados",
                    child: [{
                        acronimo: "[C]",
                        nombre: "Nivel Confidencial"
                    }, {
                        acronimo: "[R]",
                        nombre: "Difusión limitada"
                    }, {
                        acronimo: "[UC]",
                        nombre: "Sin clasificar"
                    }, {
                        acronimo: "[pub]",
                        nombre: "De carácter público"
                    }]
                }
                ]
            }, {
                acronimo: "[service]",
                nombre: "servicio"
            }
        ]
    }, {
        acronimo: "[ARCH]",
        nombre: "Arquitectura del sistema",
        content: [
            {
                acronimo: "[sap]",
                nombre: "Punto de acceso al servicio"
            }, {
                acronimo: "[ip]",
                nombre: "Punto de interconexión"
            }, {
                acronimo: "[ext]",
                nombre: "Proporcionado por terceros"
            }
        ]
    }, {
        acronimo: "[D]",
        nombre: "Datos/Información",
        content: [

            {
                acronimo: "[files]",
                nombre: "Ficheros",
            },
            {
                acronimo: "[backup]",
                nombre: "Copias de respaldo"
            }, {
                acronimo: "[conf]",
                nombre: "Datos de configuración"
            }, {
                acronimo: "[int]",
                nombre: "Datos de gestión interna"
            }, {
                acronimo: "[password]",
                nombre: "Credenciales (ej. contraseñas)"
            }, {
                acronimo: "[auth]",
                nombre: "Datos de validación de credenciales"
            }, {
                acronimo: "[acl]",
                nombre: "Datos de control de acceso"
            }, {
                acronimo: "[log]",
                nombre: "Registro de actividad"
            }
        ]
    }, {
        acronimo: "[K]",
        nombre: "Claves criptográficas",
        content: [
            {
                acronimo: "[info]",
                nombre: "Protección de la información",
                child: [{
                    acronimo: "[encrypt]",
                    nombre: "Claves de cifra",
                    child: [{
                        acronimo: "[shared_secret]",
                        nombre: "Secreto compartido (clave simétrica)"
                    }, {
                        acronimo: "[public_encryption]",
                        nombre: "Clave pública de cifra"
                    }, {
                        acronimo: "[public_decryption]",
                        nombre: "Clave privada de descifrado"
                    }]
                }, {
                    acronimo: "[sign]",
                    nombre: "Claves de firma",
                    child: [{
                        acronimo: "[shared_secret]",
                        nombre: "Secreto compartido (clave simétrica)"
                    }, {
                        acronimo: "[public_signature]",
                        nombre: "Clave privada de firma"
                    }, {
                        acronimo: "[public_verification]",
                        nombre: "Clave pública de verificación de firma"
                    }]
                }
                ]
            }, {
                acronimo: "[com]",
                nombre: "Protección de las comunicaciones",
                child: [{
                    acronimo: "[channel]",
                    nombre: "Claves de cifrado del canal"
                }, {
                    acronimo: "[authentication]",
                    nombre: "Claves de autenticación"
                }, {
                    acronimo: "[verification]",
                    nombre: "Claves de verificación de autenticación"
                }]
            }, {
                acronimo: "[disk]",
                nombre: "Cifrado de soportes de información",
                child: [{
                    acronimo: "[encrypt]",
                    nombre: "Claves de cifra"
                }]
            }, {
                acronimo: "[x509]",
                nombre: "Certificados de clave pública"
            }

        ]
    }, {
        acronimo: "[S]",
        nombre: "Servicios",
        content: [
            {
                acronimo: "[anon]",
                nombre: "Anónimo (sin requerir identificación del usuario)"
            }, {
                acronimo: "[pub]",
                nombre: "Al público en general (sin relación contractual)"
            }, {
                acronimo: "[ext]",
                nombre: "A usuarios externos (bajo una relación contractual)"
            }, {
                acronimo: "[int]",
                nombre: "Interno (a usuarios de la propia organización)"
            }, {
                acronimo: "[www]",
                nombre: "World wide web"
            }, {
                acronimo: "[telnet]",
                nombre: "Acceso remoto a cuenta local"
            }, {
                acronimo: "[file]",
                nombre: "Almacenamiento de ficheros"
            }, {
                acronimo: "[email]",
                nombre: "Correo electrónico"
            }, {
                acronimo: "[edi]",
                nombre: "Intercambio electrónico de datos"
            }, {
                acronimo: "[ftp]",
                nombre: "Transferencia de ficheros"
            }, {
                acronimo: "[idm]",
                nombre: "Gestión de identidades"
            }, {
                acronimo: "[dir]",
                nombre: "Servicio de directorio"
            }, {
                acronimo: "[pki]",
                nombre: "PKI - infraestructura de clave pública"
            }, {
                acronimo: "[ipm]",
                nombre: "Gestión de privilegios"
            }
        ]
    }, {
        acronimo: "[SW]", 
        nombre: "Software-Aplicaciones informáticas",
        content: [
            {
                acronimo: "[prp]",
                nombre: "Desarrollo propio (in house)"
            },
            {
                acronimo: "[sub]",
                nombre: "Desarrollo a medida (subcontratado)"
            },
            {
                acronimo: "[std]",
                nombre: "Estándar (off the shelf)",
                child: [
                    {
                        acronimo: "[browser]",
                        nombre: "Navegador web"
                    },
                    {
                        acronimo: "[www]",
                        nombre: "Servidor de presentación"
                    },
                    {
                        acronimo: "[app]",
                        nombre: "Servidor de aplicaciones"
                    },
                    {
                        acronimo: "[email_client]",
                        nombre: "Cliente de correo electrónico"
                    },
                    {
                        acronimo: "[email_server]",
                        nombre: "Servidor de correo electrónico"
                    },
                    {
                        acronimo: "[file]",
                        nombre: "Servidor de ficheros"
                    },
                    {
                        acronimo: "[dbms]",
                        nombre: "Sistema de gestión de bases de datos"
                    },
                    {
                        acronimo: "[tm]",
                        nombre: "Monitor transaccional"
                    },
                    {
                        acronimo: "[office]",
                        nombre: "Ofimática"
                    },
                    {
                        acronimo: "[av]",
                        nombre: "Antivirus"
                    },
                    {
                        acronimo: "[os]",
                        nombre: "Sistema operativo"
                    },
                    {
                        acronimo: "[hypervisor]",
                        nombre: "Gestor de máquinas virtuales"
                    },
                    {
                        acronimo: "[ts]",
                        nombre: "Servidor de terminales"
                    },
                    {
                        acronimo: "[backup]",
                        nombre: "Sistema de backup"
                    }
                ]
            }
        ]
    }, {
        acronimo: "[HW]",
        nombre: "Equipamiento informático (hardware)",
        content: [
            {
                acronimo: "[host]",
                nombre: "Grandes equipos"
            },
            {
                acronimo: "[mid]",
                nombre: "Equipos medios"
            },
            {
                acronimo: "[pc]",
                nombre: "Informática personal"
            },
            {
                acronimo: "[mobile]",
                nombre: "Informática móvil"
            },
            {
                acronimo: "[pda]",
                nombre: "Agendas electrónicas"
            },
            {
                acronimo: "[vhost]",
                nombre: "Equipo virtual"
            },
            {
                acronimo: "[backup]",
                nombre: "Equipamiento de respaldo"
            },
            {
                acronimo: "[peripheral]",
                nombre: "Periféricos",
                child: [
                    {
                        acronimo: "[print]",
                        nombre: "Medios de impresión"
                    },
                    {
                        acronimo: "[scan]",
                        nombre: "Escáneres"
                    },
                    {
                        acronimo: "[crypto]",
                        nombre: "Dispositivos criptográficos"
                    }
                ]
            },
            {
                acronimo: "[bp]",
                nombre: "Dispositivo de frontera"
            },
            {
                acronimo: "[network]",
                nombre: "Soporte de la red",
                child: [
                    {
                        acronimo: "[modem]",
                        nombre: "Módems"
                    },
                    {
                        acronimo: "[hub]",
                        nombre: "Concentradores"
                    },
                    {
                        acronimo: "[switch]",
                        nombre: "Conmutadores"
                    },
                    {
                        acronimo: "[router]",
                        nombre: "Encaminadores"
                    },
                    {
                        acronimo: "[bridge]",
                        nombre: "Pasarelas"
                    },
                    {
                        acronimo: "[firewall]",
                        nombre: "Cortafuegos"
                    },
                    {
                        acronimo: "[wap]",
                        nombre: "Punto de acceso inalámbrico"
                    }
                ]
            },
            {
                acronimo: "[pabx]",
                nombre: "Centralita telefónica"
            },
            {
                acronimo: "[ipphone]",
                nombre: "Teléfono IP"
            }
        ]
    }, {
        acronimo: "[COM]",
        nombre: "Redes y comunicaciones",
        content: [
            {
                acronimo: "[PSTN]",
                nombre: "Red telefónica"
            },
            {
                acronimo: "[ISDN]",
                nombre: "RDSI (Red Digital)"
            },
            {
                acronimo: "[X25]",
                nombre: "X25 (Red de datos)"
            },
            {
                acronimo: "[ADSL]",
                nombre: "ADSL"
            },
            {
                acronimo: "[pp]",
                nombre: "Punto a punto"
            },
            {
                acronimo: "[radio]",
                nombre: "Comunicaciones por radio"
            },
            {
                acronimo: "[wifi]",
                nombre: "Red inalámbrica"
            },
            {
                acronimo: "[mobile]",
                nombre: "Telefonía móvil"
            },
            {
                acronimo: "[sat]",
                nombre: "Por satélite"
            },
            {
                acronimo: "[LAN]",
                nombre: "Red local"
            },
            {
                acronimo: "[MAN]",
                nombre: "Red metropolitana"
            },
            {
                acronimo: "[Internet]",
                nombre: "Internet"
            }
        ]
    }, {
        acronimo: "[Media]",
        nombre: "Soportes de información",
        content: [
            {
                acronimo: "[electronic]",
                nombre: "Electrónicos",
                child: [
                    {
                        acronimo: "[disk]",
                        nombre: "Discos"
                    },
                    {
                        acronimo: "[vdisk]",
                        nombre: "Discos virtuales"
                    },
                    {
                        acronimo: "[san]",
                        nombre: "Almacenamiento en red"
                    },
                    {
                        acronimo: "[disquette]",
                        nombre: "Disquetes"
                    },
                    {
                        acronimo: "[cd]",
                        nombre: "CD-ROM"
                    },
                    {
                        acronimo: "[usb]",
                        nombre: "Memorias USB"
                    },
                    {
                        acronimo: "[dvd]",
                        nombre: "DVD"
                    },
                    {
                        acronimo: "[tape]",
                        nombre: "Cinta magnética"
                    },
                    {
                        acronimo: "[mc]",
                        nombre: "Tarjetas de memoria"
                    },
                    {
                        acronimo: "[ic]",
                        nombre: "Tarjetas inteligentes"
                    }
                ]
            },
            {
                acronimo: "[non_electronic]",
                nombre: "No electrónicos",
                child: [
                    {
                        acronimo: "[printed]",
                        nombre: "Material impreso"
                    },
                    {
                        acronimo: "[tape]",
                        nombre: "Cinta de papel"
                    },
                    {
                        acronimo: "[film]",
                        nombre: "Microfilm"
                    },
                    {
                        acronimo: "[cards]",
                        nombre: "Tarjetas perforadas"
                    }
                ]
            }
        ]
    },{
        acronimo: "[AUX]",    
        nombre: "Equipamiento auxiliar",
        content: [
            {
                acronimo: "[power]",
                nombre: "Fuentes de alimentación"
            },
            {
                acronimo: "[ups]",
                nombre: "Sistemas de alimentación ininterrumpida"
            },
            {
                acronimo: "[gen]",
                nombre: "Generadores eléctricos"
            },
            {
                acronimo: "[ac]",
                nombre: "Equipos de climatización"
            },
            {
                acronimo: "[cabling]",
                nombre: "Cableado",
                child: [
                    {
                        acronimo: "[wire]",
                        nombre: "Cable eléctrico"
                    },
                    {
                        acronimo: "[fiber]",
                        nombre: "Fibra óptica"
                    }
                ]
            },
            {
                acronimo: "[robot]",
                nombre: "Robots",
                child: [
                    {
                        acronimo: "[tape]",
                        nombre: "... de cintas"
                    },
                    {
                        acronimo: "[disk]",
                        nombre: "... de discos"
                    }
                ]
            },
            {
                acronimo: "[supply]",
                nombre: "Suministros esenciales"
            },
            {
                acronimo: "[destroy]",
                nombre: "Equipos de destrucción de soportes de información"
            },
            {
                acronimo: "[furniture]",
                nombre: "Mobiliario: armarios, etc."
            },
            {
                acronimo: "[safe]",
                nombre: "Cajas fuertes"
            }
        ]
    },{
        acronimo: "[L]",
        nombre: "Instalaciones",
        content: [
            {
                acronimo: "[site]",
                nombre: "Recinto"
            },
            {
                acronimo: "[building]",
                nombre: "Edificio"
            },
            {
                acronimo: "[local]",
                nombre: "Cuarto"
            },
            {
                acronimo: "[mobile]",
                nombre: "Plataformas móviles",
                child: [
                    {
                        acronimo: "[car]",
                        nombre: "Vehículo terrestre: coche, camión, etc."
                    },
                    {
                        acronimo: "[plane]",
                        nombre: "Vehículo aéreo: avión, etc."
                    },
                    {
                        acronimo: "[ship]",
                        nombre: "Vehículo marítimo: buque, lancha, etc."
                    },
                    {
                        acronimo: "[shelter]",
                        nombre: "Contenedores"
                    }
                ]
            },
            {
                acronimo: "[channel]",
                nombre: "Canalización"
            },
            {
                acronimo: "[backup]",
                nombre: "Instalaciones de respaldo"
            }
        ]
    },{
        acronimo: "[P]",
        nombre: "Personal",
        content: [
            {
                acronimo: "[ue]",
                nombre: "Usuarios externos"
            },
            {
                acronimo: "[ui]",
                nombre: "Usuarios internos"
            },
            {
                acronimo: "[op]",
                nombre: "Operadores"
            },
            {
                acronimo: "[adm]",
                nombre: "Administradores de sistemas"
            },
            {
                acronimo: "[com]",
                nombre: "Administradores de comunicaciones"
            },
            {
                acronimo: "[dba]",
                nombre: "Administradores de bases de datos"
            },
            {
                acronimo: "[sec]",
                nombre: "Administradores de seguridad"
            },
            {
                acronimo: "[des]",
                nombre: "Desarrolladores / Programadores"
            },
            {
                acronimo: "[sub]",
                nombre: "Subcontratas"
            },
            {
                acronimo: "[prov]",
                nombre: "Proveedores"
            }
        ]
    }
]

