const generate_password = async () => {
    const result = await fetch("http://localhost:3030/scanning", {
        method: "GET",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
    });
    if (result.ok) {
        return await result.json();
    } else {
        return "Невозможно получить пароль";
    }
}

export default generate_password