System.register(['angular2/core', 'angular2/common', './user-validator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, user_validator_1;
    var UsersFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_validator_1_1) {
                user_validator_1 = user_validator_1_1;
            }],
        execute: function() {
            UsersFormComponent = (function () {
                function UsersFormComponent(fb) {
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, user_validator_1.UserValidators.hasToBeValidEmail])]
                    });
                }
                UsersFormComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty) {
                        return confirm("are you sure?");
                    }
                };
                UsersFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/users-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UsersFormComponent);
                return UsersFormComponent;
            }());
            exports_1("UsersFormComponent", UsersFormComponent);
        }
    }
});
//# sourceMappingURL=users-form.component.js.map