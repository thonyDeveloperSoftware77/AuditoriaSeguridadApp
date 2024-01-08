export const dimension_tipo ={
    integridad: ['[info]','[D]', '[k]', '[S]', '[conf]', '[SW]', '[COM]', '[MEDIA]', '[L]', '[log]'],
    disponibilidad: ['[ARCH]','[HW]', '[MEDIA]', '[AUX]', '[L]', '[log]', '[SW]', '[COM]', '[D]', '[k]','[S]', '[P]','[service]'],
    confidencialidad: ['[D]', '[K]', '[S]', '[COM]', '[log]','[SW]', '[P]','[info]'],
    autenticidad: ['[info]','[service]', '[D]', '[K]'],
    trazabilidad: ['[info]','[service]', '[S]', '[log]' ]
}

export const dimensiones = [
    {
        id: 1,
        acronimo: "[D]",
        nombre: "Disponibilidad",
        descripción: "Propiedad o característica de los activos consistente en que las entidades o procesos autorizados tienen acceso a los mismos cuando lo requieren.",
        importancia: "Un activo tiene un gran valor desde el punto de vista de disponibilidad cuando si una amenaza afectara a su disponibilidad, las consecuencias serían graves.",
        valoracion: [
            {
                id: 9,
                acronimo: "da",
                nombre: "Interrupción de servicios",
                content: [
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente cause una interrupción excepcionalmente seria de las actividades propias de la Organización con un serio impacto en otras organizaciones."
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente tenga un serio impacto en otras organizaciones."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente cause una interrupción seria de las actividades propias de la Organización con un impacto significativo en otras organizaciones."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente tenga un gran impacto en otras organizacione."
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 5,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente cause la interrupción de actividades propias de la Organización con impacto en otras organizaciones ."
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 5,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente cause un cierto impacto en otras organizaciones."
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Probablemente cause la interrupción de actividades propias de la Organización."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "da",
                                descripcion: "Pudiera causar la interrupción de actividades propias de la Organización."
                            }
                        ]
                    }
                ]
            },{
                id: 10,
                acronimo: "adm",
                nombre: "Administración y gestión",
                content: [
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "adm",
                                descripcion: "Probablemente impediría seriamente la operación efectiva de la Organización, pudiendo llegar a su cierre ."
                            }
                        ]
                    },{
                        idCriterio: 3,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "adm",
                                descripcion: "Probablemente impediría la operación efectiva de la Organización."
                            }
                        ]
                    },{
                        idCriterio: 2,
                        valor: 5,
                        valoracion: [
                            {
                                nombre: "adm",
                                descripcion: "Probablemente impediría la operación efectiva de más de una parte de la Organización."
                            }
                        ]
                    },{
                        idCriterio: 2,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "adm",
                                descripcion: "Probablemente impediría la operación efectiva de más de una parte de la Organización."
                            }
                        ]
                    },{
                        idCriterio: 1,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "adm",
                                descripcion: "Pudiera impedir la operación efectiva de una parte de la Organización."
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 2,
        acronimo: "[I]",
        nombre: "Integridad",
        descripcion: "Propiedad o característica consistente en que el activo de información no ha sido alterado de manera no autorizada.",
        importancia: "Los datos reciben una alta valoración desde el punto de vista de integridad cuando su alteración, voluntaria o intencionada, causaría graves daños a la organización. ",
        valoracion: [
            {
                id: 8,
                acronimo: "lg",
                nombre: "Pérdida de confianza (reputación)",
                content: [
                    {
                        idCriterio: 5,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Probablemente causaría una publicidad negativa por afectar de forma excepcionalmente grave a las relaciones con otras organizaciones."
                            },
                            {
                                nombre: "lg",
                                descripcion: "Probablemente causaría una publicidad negativa por afectar de forma excepcionalmente grave a las relaciones con el público en general."
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Probablemente causaría una publicidad negativa por afectar gravemente a las relaciones con otras organizaciones."
                            },
                            {
                                nombre: "lg",
                                descripcion: "Probablemente causaría una publicidad negativa por afectar gravemente a las relaciones con el público en general."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 5,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Probablemente sea causa de una cierta publicidad negativa por afectar negativamente a las relaciones con otras organizaciones."
                            },
                            {
                                nombre: "lg",
                                descripcion: "Probablemente sea causa de una cierta publicidad negativa por afectar negativamente a las relaciones con el público."
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Probablemente afecte negativamente a las relaciones internas de la Organización."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 2,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Probablemente cause una pérdida menor de la confianza dentro de la Organización."
                            }
                        ]
                    },
                    {
                        idCriterio: 0,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "lg",
                                descripcion: "Pudiera causar una pérdida menor de la confianza dentro de la Organización."
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                acronimo: "si",
                nombre: "Seguridad",
                content: [
                    {
                        idCriterio: 5,
                        valor: 10,
                        valoracion: [
                            {
                                nombre: "si",
                                descripcion: "Probablemente sea causa de un incidente excepcionalmente serio de seguridad o dificulte la investigación de incidentes excepcionalmente serios."
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "si",
                                descripcion: "Probablemente sea causa de un serio incidente de seguridad o dificulte la investigación de incidentes serios."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "si",
                                descripcion: "Probablemente sea causa de un grave incidente de seguridad o dificulte la investigación de incidentes graves."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "si",
                                descripcion: "Probablemente sea causa de una merma en la seguridad o dificulte la investigación de un incidente."
                            }
                        ]
                    },
                    {
                        idCriterio: 0,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "si",
                                descripcion: "Pudiera causar una merma en la seguridad o dificultar la investigación de un incidente."
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 3,
        acronimo: "[C]",
        nombre: "Confidencialidad",
        descripción: "Propiedad o característica consistente en que la información ni se pone a disposición, ni se revela a individuos, entidades o procesos no autorizados.",
        importancia: "Los datos reciben una alta valoración desde el punto de vista de confidencialidad cuando su revelación causaría graves daños a la organización.",
        valoracion: [
            {
                id: 11,
                acronimo: "lbl.nat",
                nombre: "Información clasificada (nacional)",
                content: [
                    {
                        idCriterio: 5,
                        valor: 10,
                        valoracion: [
                            {
                                nombre: "lbl",
                                descripcion: "Secreto"
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "lbl",
                                descripcion: "Reservado"
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "lbl",
                                descripcion: "Confidencial"
                            }
                        ]
                    },
                    {
                        idCriterio: -1,
                        valor: 4,
                        valoracion: [
                            {
                                nombre: "lbl",
                                descripcion: "Difusión limitada"
                            }
                        ]
                    },
                    {
                        idCriterio: -4,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "lbl",
                                descripcion: "Sin clasificar"
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 4,
        acronimo: "[A]",
        nombre: "Autenticidad",
        descripción: "Propiedad o característica consistente en que una entidad es quien dice ser o bien que garantiza la fuente de la que proceden los datos.",
        importancia: "Un servicio recibe una elevada valoración desde el punto de vista de autenticidad cuando su prestación a falsos usuarios supondría un grave perjuicio para la organización. ",
        valoracion: [
            {
                id: 1,
                acronimo: "lpo",
                nombre: "Obligaciones legales",
                content: [
                    {
                        idCriterio: 4,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "lro",
                                descripcion: "Probablemente cause un incumplimiento excepcionalmente grave de una ley o regulación."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "lro",
                                descripcion: "Probablemente cause un incumplimiento grave de una ley o regulación."
                            }
                        ]
                    },
                    {
                        idCriterio: 2,
                        valor: 5,
                        valoracion: [
                            {
                                nombre: "lro",
                                descripcion: "Probablemente sea causa de incumplimiento de una ley o regulación."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "lro",
                                descripcion: "Probablemente sea causa de incumplimiento leve o técnico de una ley o regulación."
                            }
                        ]
                    },
                    {
                        idCriterio: 0,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "lro",
                                descripcion: "Pudiera causar el incumplimiento leve o técnico de una ley o regulación."
                            }
                        ]
                    }
                ]
            }, {
                id: 3,
                acronimo: "cei",
                nombre: "Intereses comerciales o económicos",
                content: [
                    {
                        idCriterio: 5,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "De enorme interés para la competencia."
                            },
                            {
                                nombre: "cei.b",
                                descripcion: "De muy elevado valor comercial."
                            },
                            {
                                nombre: "cei.c",
                                descripcion: "Causa pérdidas económicas excepcionalmente elevadas."
                            },
                            {
                                nombre: "cei.d",
                                descripcion: "Causa muy significativas ganancias o ventajas para individuos u organizaciones."
                            },
                            {
                                nombre: "cei.e",
                                descripcion: "Constituye un incumplimiento excepcionalmente grave de las obligaciones contractuales relativas a la seguridad de la información proporcionada por terceros."
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 7,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "De alto interés para la competencia."
                            },
                            {
                                nombre: "cei.b",
                                descripcion: "De elevado valor comercial."
                            },
                            {
                                nombre: "cei.c",
                                descripcion: "Causa graves pérdidas económicas."
                            },
                            {
                                nombre: "cei.d",
                                descripcion: "Proporciona ganancias o ventajas desmedidas a individuos u organizaciones."
                            },
                            {
                                nombre: "cei.e",
                                descripcion: "Constituye un serio incumplimiento de obligaciones contractuales relativas a la seguridad de la información proporcionada por terceros."
                            }
                        ]
                    }, {
                        idCriterio: 2,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "De cierto interés para la competencia."
                            },
                            {
                                nombre: "cei.b",
                                descripcion: "De cierto valor comercial."
                            },
                            {
                                nombre: "cei.c",
                                descripcion: "Causa de pérdidas financieras o merma de ingresos."
                            },
                            {
                                nombre: "cei.d",
                                descripcion: "Facilita ventajas desproporcionadas a individuos u organizaciones."
                            },
                            {
                                nombre: "cei.e",
                                descripcion: "Constituye un incumplimiento leve de obligaciones contractuales para mantener la seguridad de la información proporcionada por terceros."
                            }
                        ]
                    }, {
                        idCriterior: 1,
                        valor: 2,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "De bajo interés para la competencia."
                            },
                            {
                                nombre: "cei.b",
                                descripcion: "De bajo valor comercial."
                            }
                        ]
                    }, {
                        idCriterior: 1,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "De pequeño interés para la competencia."
                            },
                            {
                                nombre: "cei.b",
                                descripcion: "De pequeño valor comercial."
                            }
                        ]
                    }, {
                        idCriterio: 0,
                        valor: 0,
                        valoracion: [
                            {
                                nombre: "cei.a",
                                descripcion: "Supondría pérdidas económicas mínimas."
                            }
                        ]
                    }

                ]
            },{
                id: 5,
                acronimo: "po",
                nombre: "Orden público",
                content: [
                    {
                        idCriterio: 5,
                        valor: 9,
                        valoracion: [
                            {
                                nombre: "po",
                                descripcion: "Alteración seria del orden público."
                            }
                        ]
                    },
                    {
                        idCriterio: 4,
                        valor: 6,
                        valoracion: [
                            {
                                nombre: "po",
                                descripcion: "Probablemente cause manifestaciones, o presiones significativas."
                            }
                        ]
                    },
                    {
                        idCriterio: 3,
                        valor: 3,
                        valoracion: [
                            {
                                nombre: "po",
                                descripcion: "Causa de protestas puntuales."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 1,
                        valoracion: [
                            {
                                nombre: "po",
                                descripcion: "Pudiera causar protestas puntuales."
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 5,
        acronimo: "[T]",
        nombre: "Trazabilidad",
        descripción: "Propiedad o característica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad.",
        importancia: "Abriría las puertas al fraude, incapacitaría a la Organización para perseguir delitos y podría suponer el incumplimiento de obligaciones legales.",
        valoracion: [
            {
                id: 9,
                acronimo: "crm",
                nombre: "Persecución de delitos",
                content: [
                    {
                        idCriterio: 3,
                        valor: 8,
                        valoracion: [
                            {
                                nombre: "crm",
                                descripcion: "Impida la investigación de delitos graves o facilite su comisión."
                            }
                        ]
                    },
                    {
                        idCriterio: 1,
                        valor: 4,
                        valoracion: [
                            {
                                nombre: "crm",
                                descripcion: "Dificulte la investigación o facilite la comisión de delitos."
                            }
                        ]
                    }
                ]
            }
        ]
    }
]