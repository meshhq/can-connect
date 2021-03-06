/*can-connect@1.5.17#all*/
define([
    'require',
    'exports',
    'module',
    './can-connect',
    './cache-requests/cache-requests',
    './constructor/constructor',
    './constructor/callbacks-once/callbacks-once',
    './constructor/store/store',
    './data/callbacks/callbacks',
    './data/callbacks-cache/callbacks-cache',
    './data/combine-requests/combine-requests',
    './data/localstorage-cache/localstorage-cache',
    './data/memory-cache/memory-cache',
    './data/parse/parse',
    './data/url/url',
    './fall-through-cache/fall-through-cache',
    './real-time/real-time',
    './can/super-map/super-map',
    './can/tag/tag',
    './can/base-map/base-map'
], function (require, exports, module) {
    var connect = require('./can-connect');
    connect.cacheRequests = require('./cache-requests/cache-requests');
    connect.constructor = require('./constructor/constructor');
    connect.constructorCallbacksOnce = require('./constructor/callbacks-once/callbacks-once');
    connect.constructorStore = require('./constructor/store/store');
    connect.dataCallbacks = require('./data/callbacks/callbacks');
    connect.dataCallbacksCache = require('./data/callbacks-cache/callbacks-cache');
    connect.dataCombineRequests = require('./data/combine-requests/combine-requests');
    connect.dataLocalStorageCache = require('./data/localstorage-cache/localstorage-cache');
    connect.dataMemoryCache = require('./data/memory-cache/memory-cache');
    connect.dataParse = require('./data/parse/parse');
    connect.dataUrl = require('./data/url/url');
    connect.fallThroughCache = require('./fall-through-cache/fall-through-cache');
    connect.realTime = require('./real-time/real-time');
    connect.superMap = require('./can/super-map/super-map');
    connect.tag = require('./can/tag/tag');
    connect.baseMap = require('./can/base-map/base-map');
    module.exports = connect;
});
//# sourceMappingURL=all.js.map