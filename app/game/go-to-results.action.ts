"use server";

import { redirect } from "next/navigation";

export async function goToResult() {
    redirect("/game/result");
}
