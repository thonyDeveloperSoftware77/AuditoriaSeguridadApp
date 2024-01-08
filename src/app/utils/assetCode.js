import { getActivos } from "../servicios/activoSrv";
import {valoracion} from "./valoracion.js";
import {assetType} from "./assetType.js";

export function assetCode(name, id) {
    //name = [info][vr][M] o [info][vr][asd] o [km][ps]
    //si encuentra uno con esto 003[info][vr][M]
    //retorna 004[info][vr][M]
    //si no encuentra ninguno retorna 0001[info][vr][M]
    console.log(valoracion.map((v) => 
    console.log(v.nombre)
    ))

    console.log(assetType.map((v) =>
    console.log(v.nombre)
    ))
    

    return getActivos(id).then((res) => {
        const activos = res;
        let maxCode = 0;
        for (let i = 0; i < activos.length; i++) {
            // Solo considera los activos que tienen el mismo nombre
            if (activos[i]._codigo.slice(4) === name) {
                let code = parseInt(activos[i]._codigo.slice(0, 4));
                if (code > maxCode) {
                    maxCode = code;
                }
            }
        }
        maxCode++; // Incrementa el código máximo
        let newCode = maxCode.toString().padStart(4, '0') + name; // Asegúrate de que el código tenga 4 dígitos
        return newCode;
    });
}
