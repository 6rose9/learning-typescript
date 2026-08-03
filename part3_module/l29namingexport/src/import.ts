// naming import using {}

import { getname, getinfo, greeting } from "./export.js";

console.log(getname("Crystal"));

getinfo({
    name: "Crystal",
    email: "crystal@gmail.com",
});

greeting();