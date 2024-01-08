import { Select, SelectItem, AccordionItem, Accordion, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, Card, CardHeader, CardBody, Avatar, Button } from "@nextui-org/react";
import { dimensiones } from "../../../utils/dimensiones";
import { valoracion } from "../../../utils/valoracion";
import { useState } from "react";
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function DimensionCreate(props) {
    const [selectedColor, setSelectedColor] = useState("default");
    let dimensionesArray = [];
    let criteriosValoracion = [];

    let dimension_tipo = {
        '[I]': ['[info]', '[D]', '[k]', '[S]', '[conf]', '[SW]', '[COM]', '[MEDIA]', '[L]', '[log]'],
        '[D]': ['[ARCH]', '[HW]', '[MEDIA]', '[AUX]', '[L]', '[log]', '[SW]', '[COM]', '[D]', '[k]', '[S]', '[P]', '[service]'],
        '[C]': ['[D]', '[K]', '[S]', '[COM]', '[log]', '[SW]', '[P]', '[info]'],
        '[A]': ['[info]', '[service]', '[D]', '[K]'],
        '[T]': ['[info]', '[service]', '[S]', '[log]']
    };


    function buscarDimensiones() {
        dimensionesArray = [];
        for (let dimension in dimension_tipo) {
            if (dimension_tipo[dimension].includes(props.tipo)) {
                dimensionesArray.push(...dimensiones.filter((dim) => dim.acronimo === dimension));
            }
        }
        console.log(dimensionesArray);
    }

    buscarDimensiones();


    return (
        <>
            <Accordion variant="bordered">
                {dimensionesArray.map((dimension) => (
                    <AccordionItem key={dimension.id} aria-label={dimension.nombre} title={dimension.nombre}>
                        <div>
                            <p>
                                {dimension.descripcion}
                                {dimension.importancia}
                                <div className="flex flex-col gap-3">
                                    <Card style={{ height: "250px" }}>

                                        <CardBody className="px-3 py-0 text-small text-default-400" overflow-auto>

                                            <>
                                                <br />
                                                <Table key={valoracion.id} color="primary" selectionMode="single" defaultSelectedKeys={["2"]} aria-label="Example static collection table">
                                                    <TableHeader>
                                                        <TableColumn>Criterio</TableColumn>
                                                        <TableColumn width={800} >Seleccion</TableColumn>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {dimension.valoracion?.map((valoracion) =>
                                                        (
                                                            <TableRow key={valoracion.nombre}>

                                                                <TableCell>{valoracion.nombre}</TableCell>
                                                                <TableCell>
                                                                    <Select size="small" placeholder="Select" width="100%" value={valoracion.valor} onChange={(e) => {
                                                                        valoracion.valor = e.target.value;
                                                                        console.log(valoracion.valor);
                                                                    }}
                                                                    >
                                                                        {valoracion.content?.map((criterio, index) => (
                                                                            criterio.valoracion.map((valoracion, i) => (
                                                                                <SelectItem key={`${index}-${i}`} value={valoracion.nombre}>
                                                                                    {valoracion.descripcion}
                                                                                </SelectItem>
                                                                            ))
                                                                        ))}
                                                                    </Select>



                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                        }
                                                    </TableBody>
                                                </Table>


                                            </>
                                        </CardBody >
                                    </Card>

                                </div>
                            </p>

                        </div>
                    </AccordionItem >
                ))
                }
            </Accordion >
        </>
    )
}