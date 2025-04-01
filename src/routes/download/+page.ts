import { downloadUrl } from "$lib/constants";
import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308, downloadUrl);
}