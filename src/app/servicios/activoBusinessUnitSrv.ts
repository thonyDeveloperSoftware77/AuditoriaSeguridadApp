
export async function postActivoBusinessUnitUsuario(idActivo, id_departamento) {
    console
    const response = await fetch('http://localhost:8000/api/activoBusinessUnit/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idActivo": idActivo,
            "idBusinessUnit": id_departamento,
        })
    });
    const data = await response.json();
    return data;
}
export async function deleteActivoBusinessUnitUsuario(id) {
    const response = await fetch('http://localhost:8000/api/activoBusinessUnit/', {
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