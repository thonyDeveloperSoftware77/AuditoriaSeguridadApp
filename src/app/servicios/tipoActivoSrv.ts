export async function getTipoActivo() {
    const response = await fetch('http://localhost:8000/api/tipoActivo/');
    const data = await response.json();
    return data;
}

export async function postTipoActivo(nombre, definicion, ejemplo) {
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/tipoActivo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "descripcion": definicion
          })
    });
    const data = await response.json();
    return data;
}

export async function putTipoActivo(id, nombre, definicion, ejemplo) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/tipoActivo/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "descripcion": definicion
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteTipoActivo(id) {
    const response = await fetch('http://localhost:8000/api/tipoActivo/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
          })
    });
    const data = await response.json();
    return data;
}