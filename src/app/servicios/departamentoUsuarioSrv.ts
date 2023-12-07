
export async function postDepartamentoUsuario(id_usuario, id_departamento) {
    console
    const response = await fetch('http://localhost:8000/api/departamentoUsuario/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idUsuario": id_usuario,
            "idDepartamento": id_departamento,
        })
    });
    const data = await response.json();
    return data;
}
export async function deleteDepartamentoUsuario(id) {
    const response = await fetch('http://localhost:8000/api/departamentoUsuario/', {
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