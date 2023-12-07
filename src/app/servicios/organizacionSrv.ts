export async function getOrganizaciones() {
    const response = await fetch('http://localhost:8000/api/organizacion/');
    const data = await response.json();
    return data;
}

export async function postOrganizacion(nombre, sector, ubicacion, actividadPrincipal) {
    const response = await fetch('http://localhost:8000/api/organizacion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "sector": sector,
            "ubicacion": ubicacion,
            "actividadPrincipal": actividadPrincipal
          })
    });
    const data = await response.json();
    return data;
}

export async function putOrganizacion(id, nombre, sector, ubicacion, actividadPrincipal) {
    console.log(id);
    console.log(nombre);
    const response = await fetch('http://localhost:8000/api/organizacion/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "nombre": nombre,
            "sector": sector,
            "ubicacion": ubicacion,
            "actividadPrincipal": actividadPrincipal
          })
    });
    const data = await response.json();
    return data;
}

export async function deleteOrganizacion(id) {
    const response = await fetch('http://localhost:8000/api/organizacion/', {
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