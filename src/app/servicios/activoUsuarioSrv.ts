
export async function postActivoUsuario(id_usuario, id_departamento) {
    console
    const response = await fetch('http://localhost:8000/api/activoUsuario/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idUsuario": id_usuario,
            "idActivo": id_departamento,
        })
    });
    const data = await response.json();
    return data;
}
export async function deleteActivoUsuario(id) {
    console.log("id")
    console.log(id)
    const response = await fetch('http://localhost:8000/api/activoUsuario/', {
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