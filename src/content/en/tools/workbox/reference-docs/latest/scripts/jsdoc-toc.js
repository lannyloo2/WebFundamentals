(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"module-workbox-background-sync.html\">workbox-background-sync</a>","id":"module:workbox-background-sync","children":[{"label":"<a href=\"module-workbox-background-sync.Queue.html\">Queue</a>","id":"module:workbox-background-sync.Queue","children":[]},{"label":"<a href=\"module-workbox-background-sync.QueuePlugin.html\">QueuePlugin</a>","id":"module:workbox-background-sync.QueuePlugin","children":[]}]},{"label":"<a href=\"module-workbox-broadcast-cache-update.html\">workbox-broadcast-cache-update</a>","id":"module:workbox-broadcast-cache-update","children":[{"label":"<a href=\"module-workbox-broadcast-cache-update.BroadcastCacheUpdate.html\">BroadcastCacheUpdate</a>","id":"module:workbox-broadcast-cache-update.BroadcastCacheUpdate","children":[]},{"label":"<a href=\"module-workbox-broadcast-cache-update.BroadcastCacheUpdatePlugin.html\">BroadcastCacheUpdatePlugin</a>","id":"module:workbox-broadcast-cache-update.BroadcastCacheUpdatePlugin","children":[]}]},{"label":"<a href=\"module-workbox-build.html\">workbox-build</a>","id":"module:workbox-build","children":[]},{"label":"<a href=\"module-workbox-cache-expiration.html\">workbox-cache-expiration</a>","id":"module:workbox-cache-expiration","children":[{"label":"<a href=\"module-workbox-cache-expiration.CacheExpiration.html\">CacheExpiration</a>","id":"module:workbox-cache-expiration.CacheExpiration","children":[]},{"label":"<a href=\"module-workbox-cache-expiration.CacheExpirationPlugin.html\">CacheExpirationPlugin</a>","id":"module:workbox-cache-expiration.CacheExpirationPlugin","children":[]}]},{"label":"<a href=\"module-workbox-cacheable-response.html\">workbox-cacheable-response</a>","id":"module:workbox-cacheable-response","children":[{"label":"<a href=\"module-workbox-cacheable-response.CacheableResponse.html\">CacheableResponse</a>","id":"module:workbox-cacheable-response.CacheableResponse","children":[]},{"label":"<a href=\"module-workbox-cacheable-response.CacheableResponsePlugin.html\">CacheableResponsePlugin</a>","id":"module:workbox-cacheable-response.CacheableResponsePlugin","children":[]}]},{"label":"<a href=\"module-workbox-google-analytics.html\">workbox-google-analytics</a>","id":"module:workbox-google-analytics","children":[]},{"label":"<a href=\"module-workbox-precaching.html\">workbox-precaching</a>","id":"module:workbox-precaching","children":[{"label":"<a href=\"module-workbox-precaching.BaseCacheManager.html\">BaseCacheManager</a>","id":"module:workbox-precaching.BaseCacheManager","children":[]},{"label":"<a href=\"module-workbox-precaching.RevisionedCacheManager.html\">RevisionedCacheManager</a>","id":"module:workbox-precaching.RevisionedCacheManager","children":[]}]},{"label":"<a href=\"module-workbox-range-requests.html\">workbox-range-requests</a>","id":"module:workbox-range-requests","children":[]},{"label":"<a href=\"module-workbox-routing.html\">workbox-routing</a>","id":"module:workbox-routing","children":[{"label":"<a href=\"module-workbox-routing.ExpressRoute.html\">ExpressRoute</a>","id":"module:workbox-routing.ExpressRoute","children":[]},{"label":"<a href=\"module-workbox-routing.NavigationRoute.html\">NavigationRoute</a>","id":"module:workbox-routing.NavigationRoute","children":[]},{"label":"<a href=\"module-workbox-routing.RegExpRoute.html\">RegExpRoute</a>","id":"module:workbox-routing.RegExpRoute","children":[]},{"label":"<a href=\"module-workbox-routing.Route.html\">Route</a>","id":"module:workbox-routing.Route","children":[]},{"label":"<a href=\"module-workbox-routing.Router.html\">Router</a>","id":"module:workbox-routing.Router","children":[]}]},{"label":"<a href=\"module-workbox-runtime-caching.html\">workbox-runtime-caching</a>","id":"module:workbox-runtime-caching","children":[{"label":"<a href=\"module-workbox-runtime-caching.CacheFirst.html\">CacheFirst</a>","id":"module:workbox-runtime-caching.CacheFirst","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.CacheOnly.html\">CacheOnly</a>","id":"module:workbox-runtime-caching.CacheOnly","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.Handler.html\">Handler</a>","id":"module:workbox-runtime-caching.Handler","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.NetworkFirst.html\">NetworkFirst</a>","id":"module:workbox-runtime-caching.NetworkFirst","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.NetworkOnly.html\">NetworkOnly</a>","id":"module:workbox-runtime-caching.NetworkOnly","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.RequestWrapper.html\">RequestWrapper</a>","id":"module:workbox-runtime-caching.RequestWrapper","children":[]},{"label":"<a href=\"module-workbox-runtime-caching.StaleWhileRevalidate.html\">StaleWhileRevalidate</a>","id":"module:workbox-runtime-caching.StaleWhileRevalidate","children":[]}]},{"label":"<a href=\"module-workbox-sw.html\">workbox-sw</a>","id":"module:workbox-sw","children":[{"label":"<a href=\"module-workbox-sw.Router.html\">Router</a>","id":"module:workbox-sw.Router","children":[]},{"label":"<a href=\"module-workbox-sw.Strategies.html\">Strategies</a>","id":"module:workbox-sw.Strategies","children":[]},{"label":"<a href=\"module-workbox-sw.WorkboxSW.html\">WorkboxSW</a>","id":"module:workbox-sw.WorkboxSW","children":[]}]},{"label":"<a href=\"module-workbox-webpack-plugin.html\">workbox-webpack-plugin</a>","id":"module:workbox-webpack-plugin","children":[{"label":"<a href=\"module-workbox-webpack-plugin-WorkboxBuildWebpackPlugin.html\">WorkboxBuildWebpackPlugin</a>","id":"module:workbox-webpack-plugin~WorkboxBuildWebpackPlugin","children":[]}]},{"label":"workbox-range-requests","id":"workbox-range-requests","children":[{"label":"<a href=\"workbox-range-requests.CachedRangeResponsePlugin.html\">CachedRangeResponsePlugin</a>","id":"workbox-range-requests.CachedRangeResponsePlugin","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
