(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Index = {}));
})(this, (function (exports) { 'use strict';

    const Hello = 'Hello, Npm World~';

    function HelloWorld() {
      console.log(Hello);
    }

    exports.HelloWorld = HelloWorld;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
