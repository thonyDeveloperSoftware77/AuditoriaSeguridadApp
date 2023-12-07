export async function getCategoria() {
    const response = await fetch('http://localhost:8000/api/categoria/');
    const data = await response.json();
    return data;
}

export async function postCategoria(nombre, definicion, ejemplo, tipo) {
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/categoria/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "definicion": definicion,
            "ejemplo": ejemplo,
            "tipo": tipo,
          })
    });
    const data = await response.json();
    return data;
}

export async function putCategoria(id, nombre, definicion, ejemplo, tipo) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/categoria/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "definicion": definicion,
            "ejemplo": ejemplo,
            "tipo" : tipo,
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteCategoria(id) {
    const response = await fetch('http://localhost:8000/api/categoria/', {
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