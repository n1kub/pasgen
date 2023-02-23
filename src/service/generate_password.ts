const generate_password = async (with_special_symbols: boolean, has_upper: boolean, password_to_modify?: string) => {
    if (!password_to_modify) {
        password_to_modify = ""
    }
    const result = await fetch("http://localhost:8080/", {
        method: "GET",
        body: JSON.stringify({
            with_special_symbols: with_special_symbols,
            has_upper: has_upper,
            password_to_modify: password_to_modify
        }),
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