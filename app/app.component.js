"use strict";
var core_1 = require("angular2/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello, Angular!";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<StackLayout orientation=\"vertical\">\n    <Label [text]=\"message\" class=\"title\" (tap)=\"message = 'OHAI'\"></Label>\n</StackLayout>\n",
            styleUrls: ["one.css", "two.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map