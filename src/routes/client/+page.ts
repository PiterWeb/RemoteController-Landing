import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(308,"https://remote-controller-client.vercel.app/");
}