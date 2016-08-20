/*can-connect@0.6.0-pre.15#helpers/deferred*/
define(function (require, exports, module) {
    module.exports = function () {
        var def = {};
        def.promise = new Promise(function (resolve, reject) {
            def.resolve = resolve;
            def.reject = reject;
        });
        return def;
    };
});
//# sourceMappingURL=deferred.js.map