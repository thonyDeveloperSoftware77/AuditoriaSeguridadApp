export async function getVerify(email, password) {
    const response = await fetch('http://localhost:8000/api/verify/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });
    const data = await response.json();
    return data;
}