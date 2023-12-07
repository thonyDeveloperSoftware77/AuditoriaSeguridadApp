export async function getEtiqueta() {
    const response = await fetch('http://localhost:8000/api/etiqueta/');
    const data = await response.json();
    return data;
}

export async function postEtiqueta(nombre, descripcion) {
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/etiqueta/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": nombre,
            "description": descripcion,
          })
    });
    const data = await response.json();
    return data;
}

export async function putEtiqueta(id, nombre, descripcion) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/etiqueta/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "descripcion": descripcion,
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteEtiqueta(id) {
    const response = await fetch('http://localhost:8000/api/etiqueta/', {
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