export async function getUsuarios(id) {
    const response = await fetch('http://localhost:8000/api/users/org', {
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

export async function postUsuario(nombre, apellido, email, idOrganizacion,password, idGrupo ) {
    const response = await fetch('http://localhost:8000/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "idOrganizacion": idOrganizacion,
            "password": password,
            "idGrupo": idGrupo
        })
    });
    const data = await response.json();
    return data;
}

export async function putUsuario(id, nombre, apellido, email, password, idGrupo, idOrganizacion) {
    const response = await fetch('http://localhost:8000/api/users/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "idOrganizacion": idOrganizacion,
            "password": password,
            "idGrupo": idGrupo,
        })
    });
    const data = await response.json();
    return data;
}

export async function deleteUsuario(id) {
    const response = await fetch('http://localhost:8000/api/users/', {
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