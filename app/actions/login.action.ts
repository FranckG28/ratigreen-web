'use server'

export async function login(prevState: any, formData: FormData) {

    try {
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return { message: "Veuillez remplir tous les champs" }
        }

    } catch (error) {
        console.log(error);
        return { message: "Une erreur est survenue" }
    }

    // const res = await fetch("/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: formData.get("email"),
    //         password: formData.get("password"),
    //     }),
    // });
}