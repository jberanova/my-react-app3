export const getCats = async () => {
    const req = await fetch("http://localhost:3000/cat", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
}
export const getCat = async (id) => {
    const req = await fetch(`http://localhost:3000/cat/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
}
export const createCat = async (formData) => {
    const req = await fetch(`http://localhost:3000/cat`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
}
export const updateCat = async () => {
    const req = await fetch(`http://localhost:3000/cat${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
}
export const deletecat = async (id) => {const req = await fetch(`http://localhost:3000/cat${id}`, {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify(formData)
});
const data = await req.json();}