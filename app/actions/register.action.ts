export async function register(prevData: any, formData: FormData) {

    try {

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordConfirm = formData.get("passwordConfirm");

        if (!name || !email || !password || !passwordConfirm) {
            return { message: "Veuillez remplir tous les champs" }
        }

        if (password !== passwordConfirm) {
            return { message: "Les mots de passe ne correspondent pas" }
        }

        return { message: "Ok" }

    } catch (error) {
        console.log(error);
        return { message: "Une erreur est survenue" }
    }
    // todo register

}