// naming import using {}

import { getname, getinfo, greeting, userinfo } from "./export.js";
import { myObj, myarr } from "./supplier.js";

console.log(getname("Crystal"));

getinfo({
    name: "Crystal",
    email: "crystal@gmail.com",
});

greeting();

console.log(userinfo("Crystal"));

console.log(myObj, myarr);