import { clientUrl } from "$lib/constants";
import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(301, clientUrl);
}