System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserValidators;
    return {
        setters:[],
        execute: function() {
            UserValidators = (function () {
                function UserValidators() {
                }
                UserValidators.hasToBeValidEmail = function (control) {
                    var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { hasToBeValidEmail: true };
                };
                return UserValidators;
            }());
            exports_1("UserValidators", UserValidators);
        }
    }
});
//# sourceMappingURL=user-validator.js.map