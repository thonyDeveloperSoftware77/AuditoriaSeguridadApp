export async function getActivos(id) {
    const response = await fetch('http://localhost:8000/api/activo/org', {
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

export async function postActivo(code, name, description, ubicacion, label, type, id_criterio, id_categoria, id_clasificacion, id_organizacion, date) {
    const response = await fetch('http://localhost:8000/api/activo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "code": code,
            "name": name,
            "description": description,
            "ubicacion": ubicacion,
            "label": label,
            "type": type,
            "id_criterio": id_criterio,
            "id_categoria": id_categoria,
            "id_clasificacion": id_clasificacion,
            "id_organizacion": id_organizacion,
            "date": date
        })
    });
    const data = await response.json();
    return data;
}

export async function putActivo(id, code, name, description, ubicacion, label, type, id_criterio, id_categoria, id_clasificacion, id_organizacion, date) {
    const response = await fetch('http://localhost:8000/api/activo/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id,
            "code": code,
            "name": name,
            "description": description,
            "ubicacion": ubicacion,
            "label": label,
            "type": type,
            "id_criterio": id_criterio,
            "id_categoria": id_categoria,
            "id_clasificacion": id_clasificacion,
            "id_organizacion": id_organizacion,
            "date": date
        })
    });
    const data = await response.json();
    return data;
}

export async function deleteActivo(id) {
    const response = await fetch('http://localhost:8000/api/activo/', {
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