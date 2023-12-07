export async function getGrupos(id) {
    const response = await fetch('http://localhost:8000/api/grupo/org', {
        method: 'POST',
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

export async function postGrupo(nombre, idOrganizacion) {
    const response = await fetch('http://localhost:8000/api/grupo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "idOrganizacion": idOrganizacion,
        })
    });
    const data = await response.json();
    return data;
}

export async function putGrupo(id, nombre, idOrganizacion) {
    const response = await fetch('http://localhost:8000/api/grupo/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "idOrganizacion": idOrganizacion,
        })
    });
    const data = await response.json();
    return data;
}

export async function deleteGrupo(id) {
    const response = await fetch('http://localhost:8000/api/grupo/', {
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