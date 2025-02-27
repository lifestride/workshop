import { loadWizardData }      from "$lib/dataload";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    return loadWizardData();
};
