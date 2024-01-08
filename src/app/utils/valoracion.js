export const valoracion = [
    {
        id: 0,
        acronimo: "pi",
        nombre: "Información de carácter personal",
        content: [
            {
                idCriterio: 3,
                valor: 6,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Probablemente afecte gravemente a un grupo de individuos."
                    }, {
                        nombre: "pi2",
                        descripcion: "probablemente quebrante seriamente la ley o algún reglamento de protección de información personal."
                    }
                ]
            }, {
                idCriterio: 2,
                valor: 5,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Probablemente afecte gravemente a un individuo."
                    }, {
                        nombre: "pi2",
                        descripcion: "Probablemente quebrante seriamente leyes o regulaciones."
                    }
                ]
            }, {
                idCriterio: 2,
                valor: 4,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Probablemente afecte a un grupo de individuos."
                    }, {
                        nombre: "pi2",
                        descripcion: "Probablemente quebrante leyes o regulaciones."
                    }
                ]
            }, {
                idCriterio: 2,
                valor: 3,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Probablemente afecte a un individuo."
                    }, {
                        nombre: "pi2",
                        descripcion: "Probablemente suponga el incumplimiento de una ley o regulación."
                    }
                ]
            }, {
                idCriterio: 1,
                valor: 2,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Pudiera causar molestias a un individuo."
                    }, {
                        nombre: "pi2",
                        descripcion: "Pudiera quebrantar de forma leve leyes o regulaciones."
                    }
                ]
            }, {
                idCriterio: 0,
                valor: 1,
                valoracion: [
                    {
                        nombre: "pi1",
                        descripcion: "Pudiera causar molestias a un individuo."
                    }
                ]
            }
        ]
    }, {
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
            },{
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
            },{
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
            },{
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
        id: 4,
        acronimo: "da",
        nombre: "Interrupción del servicio",
        content: [
            {
                idCriterio: 5,
                valor: 9,
                valoracion: [
                    {
                        nombre: "da",
                        descripcion: "Probablemente cause una interrupción excepcionalmente seria de las actividades propias de la Organización con un serio impacto en otras organizaciones."
                    },
                    {
                        nombre: "da2",
                        descripcion: "Probablemente tenga un serio impacto en otras organizaciones."
                    }
                ]
            },
            {
                idCriterio: 4,
                valor: 7,
                valoracion: [
                    {
                        nombre: "da",
                        descripcion: "Probablemente cause una interrupción seria de las actividades propias de la Organización con un impacto significativo en otras organizaciones."
                    },
                    {
                        nombre: "da2",
                        descripcion: "Probablemente tenga un gran impacto en otras organizaciones."
                    }
                ]
            },
            {
                idCriterio: 3,
                valor: 5,
                valoracion: [
                    {
                        nombre: "da",
                        descripcion: "Probablemente cause la interrupción de actividades propias de la Organización con impacto en otras organizaciones."
                    },
                    {
                        nombre: "da2",
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
    }, {
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
    },{
        id: 6,
        acronimo: "olm",
        nombre: "Operaciones",
        content: [
            {
                idCriterio: 5,
                valor: 10,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Probablemente cause un daño excepcionalmente serio a la eficacia o seguridad de la misión operativa o logística."
                    }
                ]
            },
            {
                idCriterio: 4,
                valor: 9,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Probablemente cause un daño serio a la eficacia o seguridad de la misión operativa o logística."
                    }
                ]
            },
            {
                idCriterio: 3,
                valor: 7,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Probablemente perjudique la eficacia o seguridad de la misión operativa o logística."
                    }
                ]
            },
            {
                idCriterio: 2,
                valor: 5,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Probablemente merme la eficacia o seguridad de la misión operativa o logística más allá del ámbito local."
                    }
                ]
            },
            {
                idCriterio: 1,
                valor: 3,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Probablemente merme la eficacia o seguridad de la misión operativa o logística (alcance local)."
                    }
                ]
            },
            {
                idCriterio: 0,
                valor: 1,
                valoracion: [
                    {
                        nombre: "olm",
                        descripcion: "Pudiera mermar la eficacia o seguridad de la misión operativa o logística (alcance local)."
                    }
                ]
            }
        ]
    }, {
        id: 7,
        acronimo: "adm",
        nombre: "Administración y gestión",
        content: [
            {
                idCriterio: 5,
                valor: 9,
                valoracion: [
                    {
                        nombre: "adm",
                        descripcion: "Probablemente impediría seriamente la operación efectiva de la Organización, pudiendo llegar a su cierre."
                    }
                ]
            },
            {
                idCriterio: 4,
                valor: 7,
                valoracion: [
                    {
                        nombre: "adm",
                        descripcion: "Probablemente impediría la operación efectiva de la Organización."
                    }
                ]
            },
            {
                idCriterio: 3,
                valor: 5,
                valoracion: [
                    {
                        nombre: "adm",
                        descripcion: "Probablemente impediría la operación efectiva de más de una parte de la Organización."
                    }
                ]
            },
            {
                idCriterio: 2,
                valor: 3,
                valoracion: [
                    {
                        nombre: "adm",
                        descripcion: "Probablemente impediría la operación efectiva de una parte de la Organización."
                    }
                ]
            },
            {
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
    }, {
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
                        descripcion: "Probablemente causaría una publicidad negativa generalizada por afectar de forma excepcionalmente grave a las relaciones con otras organizaciones."
                    },
                    {
                        nombre: "lg",
                        descripcion: "Probablemente causaría una publicidad negativa generalizada por afectar de forma excepcionalmente grave a las relaciones con el público en general."
                    }
                ]
            },
            {
                idCriterio: 4,
                valor: 7,
                valoracion: [
                    {
                        nombre: "lg",
                        descripcion: "Probablemente causaría una publicidad negativa generalizada por afectar gravemente a las relaciones con otras organizaciones."
                    },
                    {
                        nombre: "lg",
                        descripcion: "Probablemente causaría una publicidad negativa generalizada por afectar gravemente a las relaciones con el público en general."
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
    }, {
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
    },{
        id: 10,
        acronimo: "rto",
        nombre: "Tiempo de recuperación del servicio",
        content: [
            {
                idCriterio: 3,
                valor: 7,
                valoracion: [
                    {
                        nombre: "rto",
                        descripcion: "RTO < 4 horas."
                    }
                ]
            },
            {
                idCriterio: 2,
                valor: 4,
                valoracion: [
                    {
                        nombre: "rto",
                        descripcion: "4 horas < RTO < 1 día."
                    }
                ]
            },
            {
                idCriterio: 1,
                valor: 1,
                valoracion: [
                    {
                        nombre: "rto",
                        descripcion: "1 día < RTO < 5 días."
                    }
                ]
            },
            {
                idCriterio: 0,
                valor: 0,
                valoracion: [
                    {
                        nombre: "rto",
                        descripcion: "5 días < RTO."
                    }
                ]
            }
        ]
    },{
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
                idCriterio: 3,
                valor: 8,
                valoracion: [
                    {
                        nombre: "lbl",
                        descripcion: "Confidencial"
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
                idCriterio: 1,
                valor: 6,
                valoracion: [
                    {
                        nombre: "lbl",
                        descripcion: "Difusión limitada"
                    }
                ]
            },
            {
                idCriterio: 0,
                valor: 5,
                valoracion: [
                    {
                        nombre: "lbl",
                        descripcion: "Difusión limitada"
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
                idCriterio: -2,
                valor: 3,
                valoracion: [
                    {
                        nombre: "lbl",
                        descripcion: "Difusión limitada"
                    }
                ]
            },
            {
                idCriterio: -3,
                valor: 2,
                valoracion: [
                    {
                        nombre: "lbl",
                        descripcion: "Sin clasificar"
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
    },{
        id: 12,
        acronimo: "lbl.ue",
        nombre: "Información clasificada (Unión Europea)",
        content: [
            {
                idCriterio: 4,
                valor: 10,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "TRES SECRET UE"
                    }
                ]
            },
            {
                idCriterio: 3,
                valor: 9,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "SECRET UE"
                    }
                ]
            },
            {
                idCriterio: 2,
                valor: 8,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "CONFIDENTIEL UE"
                    }
                ]
            },
            {
                idCriterio: 1,
                valor: 7,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "CONFIDENTIEL UE"
                    }
                ]
            },
            {
                idCriterio: 0,
                valor: 6,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "RESTREINT UE"
                    }
                ]
            },
            {
                idCriterio: -1,
                valor: 5,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "RESTREINT UE"
                    }
                ]
            },
            {
                idCriterio: -2,
                valor: 4,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "RESTREINT UE"
                    }
                ]
            },
            {
                idCriterio: -3,
                valor: 3,
                valoracion: [
                    {
                        nombre: "ue",
                        descripcion: "RESTREINT UE"
                    }
                ]
            }
        ]
    }
]