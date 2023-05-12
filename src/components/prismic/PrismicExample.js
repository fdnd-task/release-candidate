import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
    endpoint: "your-endpoint",
    linkResolver,
});

export default prismic;