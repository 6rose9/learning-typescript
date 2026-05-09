var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
user.becomeAdmin();
console.log(user);
function getDB() {
    var db = {
        users: [
            {
                id: 1,
                admin: false,
            },
            {
                id: 2,
                admin: true,
            },
            {
                id: 3,
                admin: true,
            }, {
                id: 4,
                admin: false,
            }, {
                id: 5,
                admin: true,
            },
        ],
        filterUsers: function (filter) {
            var result = [];
            for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                var user_1 = _a[_i];
                if (filter.call(user_1)) {
                    result.push(user_1);
                }
            }
            return result;
        }
    };
    return db;
}
var result = getDB().filterUsers(function () {
    return this.admin;
});
console.log('result', result);
