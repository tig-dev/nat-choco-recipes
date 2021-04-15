import { lowerCase, indexOf } from "lodash";

import reference_list from "../data/references";

const buildCitationLink = (orig_index) => {
    const sorted = reference_list;
    sorted.sort((a, b) => lowerCase(a) - lowerCase(b));

    return `/references#${indexOf(sorted, reference_list[orig_index])}`;
}

export default buildCitationLink;