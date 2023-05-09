import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
    endpoint: "jbinstallatieservice",
    linkResolver,
});

export default prismic;