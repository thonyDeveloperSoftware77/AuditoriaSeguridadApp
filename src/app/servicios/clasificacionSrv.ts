export async function getClasificacion() {
    const response = await fetch('http://localhost:8000/api/clasificacion/');
    const data = await response.json();
    return data;
}

export async function postClasificacion(nombre, definicion, ejemplo) {
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/clasificacion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "definicion": definicion,
            "ejemplo": ejemplo,
          })
    });
    const data = await response.json();
    return data;
}

export async function putClasificacion(id, nombre, definicion, ejemplo) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/clasificacion/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "definicion": definicion,
            "ejemplo": ejemplo,
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteClasificacion(id) {
    const response = await fetch('http://localhost:8000/api/clasificacion/', {
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