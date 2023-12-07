export async function getCriterio() {
    const response = await fetch('http://localhost:8000/api/criticidad/');
    const data = await response.json();
    return data;
}

export async function postCriterio(nombre, criticidad, valor) {
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/criticidad/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "criticidad": criticidad,
            "valor": valor,
          })
    });
    const data = await response.json();
    return data;
}

export async function putCriterio(id, nombre, criticidad, valor) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/criticidad/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "criticidad": criticidad,
            "valor": valor,
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteCriterio(id) {
    const response = await fetch('http://localhost:8000/api/criticidad/', {
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