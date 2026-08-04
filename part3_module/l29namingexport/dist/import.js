import { getname, getinfo, greeting, userinfo } from "./export.js";
console.log(getname("Crystal"));
getinfo({
    name: "Crystal",
    email: "crystal@gmail.com",
});
greeting();
console.log(userinfo("Crystal"));
