export async function getDepartamentos(id) {
    const response = await fetch('http://localhost:8000/api/departamento/org', {
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

export async function postDepartamento(nombre, descripcion, idOrganizacion) {
    const response = await fetch('http://localhost:8000/api/departamento/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "descripcion": descripcion,
            "idOrganizacion": idOrganizacion
        })
    });
    const data = await response.json();
    return data;
}

export async function putDepartamento(id, nombre, descripcion) {
    const response = await fetch('http://localhost:8000/api/departamento/', {
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

export async function deleteDepartamento(id) {
    const response = await fetch('http://localhost:8000/api/departamento/', {
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