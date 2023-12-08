export async function getValoracionActivos(id) {
    const response = await fetch('http://localhost:8000/api/valoracionActivo/org', {
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

export async function postValoracionActivo(id_asset, confidencialidad, integridad, disponibilidad) {
    const response = await fetch('http://localhost:8000/api/valoracionActivo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id_asset": id_asset,
            "confidencialidad": confidencialidad,
            "integridad": integridad,
            "disponibilidad": disponibilidad,
        })
    });
    const data = await response.json();
    return data;
}

export async function putValoracionActivo(id, id_asset,  confidencialidad, integridad, disponibilidad) {
    const response = await fetch('http://localhost:8000/api/valoracionActivo/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "id_asset": id_asset,
            "confidencialidad": confidencialidad,
            "integridad": integridad,
            "disponibilidad": disponibilidad,
        })
    });
    const data = await response.json();
    return data;
}

export async function deleteValoracionActivo(id) {
    const response = await fetch('http://localhost:8000/api/valoracionActivo/', {
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