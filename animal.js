var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.move = function (distance) { };
    ;
    Animal.prototype.makeSound = function () { };
    ;
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super.call(this, "Tiger") || this;
    }
    Tiger.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
    };
    Tiger.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
    };
    return Tiger;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super.call(this, "Lion") || this;
    }
    Lion.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
    };
    Lion.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
    };
    return Lion;
}(Animal));
var Zebra = (function (_super) {
    __extends(Zebra, _super);
    function Zebra() {
        return _super.call(this, "Zebra") || this;
    }
    Zebra.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
    };
    Zebra.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
    };
    return Zebra;
}(Animal));
var Elephant = (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        return _super.call(this, "Elephant") || this;
    }
    Elephant.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
    };
    Elephant.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
    };
    return Elephant;
}(Animal));
