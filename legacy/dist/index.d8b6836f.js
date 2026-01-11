// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2QhhG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6936d00bd8b6836f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6zZpR":[function(require,module,exports) {
//var peer = new Peer({ key: 'lwjd5qra8257b9' }); //maybe you should get yer own key eh?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _peerjs = require("peerjs");
var _peerjsDefault = parcelHelpers.interopDefault(_peerjs);
var _gsap = require("gsap");
// import p5 from "p5"
var _receiverJs = require("./receiver.js");
var _senderJs = require("./sender.js");
var _constantsJs = require("./constants.js");
var _tone = require("tone");
var _socketJs = require("./socket.js");
var _connectionsJs = require("./connections.js");
var _synchonizedTime = require("./synchonizedTime");
// get notified on changes in the offset
(0, _synchonizedTime.ts).on("change", function(offset) {
    console.log("changed offset: " + offset + " ms<br>");
});
// get synchronized time
//   setInterval(function () {
//     var now = new Date(ts.now());
//     console.log('now: ' + now.toISOString() + ' ms<br>');
//   }, 1000);
let peer = new (0, _peerjsDefault.default)(null, {
    debug: 2
});
// createSenderControls()
// createSequencer()
let timeOnSend;
let myRole;
let mySketch;
let myColor;
let hasSender = false;
let sampler;
let delta;
(0, _socketJs.socket).on("peerIDmsg-Other", function(msg) {
    if (!alreadyHaveConnection(msg) && peer) {
        let conn = peer.connect(msg, {
            serialization: "json"
        });
        setupConn(conn);
    }
});
(0, _socketJs.socket).on("foundFreq", function(room) {
    if (room != false) {
        hasSender = true;
        console.log("\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66 I have joined the room of " + room);
        if (!alreadyHaveConnection(room)) {
            let conn = peer.connect(room, {
                serialization: "json"
            });
            console.log("\uD83D\uDC8C I recived a Connection Object from: " + conn.peer);
            setupConn(conn);
        }
    }
});
peer.on("connection", function(recivedConn) {
    console.log("I recived this connection: " + recivedConn.peer + " I already have it: " + alreadyHaveConnection(recivedConn));
    if (!alreadyHaveConnection(recivedConn)) setupConn(recivedConn);
});
peer.on("open", function(id) {
    console.log("\uD83C\uDD94 My peer ID is: " + id);
    (0, _socketJs.socket).emit("peerIDmsg", id);
    appendSenderReceiver();
// $("body").append(`<div>my peer id is: ${id}</div>`)
});
peer.on("disconnected", function() {
    console.log("⚰️ Peer-Server disconnected trying to reconnect");
    removeSenderReceiver();
    if (!(0, _connectionsJs.connections).length) (0, _jqueryDefault.default)("body").append(`<div>Sorry no Peer-server available. Try to Reload the page please :)</div>`);
});
function alreadyHaveConnection(newConnection) {
    //checking if we already have this Connection
    let peerIDs = (0, _connectionsJs.connections).map((connection)=>{
        return connection.peer;
    });
    return peerIDs.includes(newConnection.peer);
}
function setupConn(recivedConn) {
    (0, _connectionsJs.connections).push(recivedConn);
    let conn = recivedConn;
    conn.on("open", function() {
        console.log("\uD83D\uDC50 is open");
        if (myRole == "sender" && !(0, _jqueryDefault.default)(`#sequencer-${conn.peer}`).length) {
            if (!(0, _jqueryDefault.default)("#sender-div").length) (0, _senderJs.createSenderControls)();
            (0, _senderJs.createSequencer)(conn);
        }
        conn.on("data", function(data) {
            if (data.time != undefined) {
                if (delta == undefined) delta = data.time - _tone.now(); //Diffrence between our time and the incoming notes time. Set once to have a constant offset in time
                let timeIplay = data.time - delta + 0.8;
                const msToNextTone = data.time + 8000 - (0, _synchonizedTime.ts).now();
                const timeDiff = data.time - _tone.now();
                console.log("tsNow:", (0, _synchonizedTime.ts).now(), "data.time:", data.time, {
                    msToNextTone
                }, {
                    timeDiff
                });
                sampler.triggerAttack(data.notes, data.time + timeDiff); //, timeIplay)
                _tone.Draw.schedule(function() {
                    (0, _gsap.gsap).fromTo("body", {
                        backgroundColor: myColor
                    }, {
                        backgroundColor: (0, _constantsJs.myBackgroundColor),
                        duration: 0.9,
                        ease: "power3.inOut"
                    } //color interpolation to a css variable doesnt work
                    );
                });
            // console.log("🎵 recived note with time: " + data.time + " time I will play: " + timeIplay)
            } else if (data == "startPlaying") {
                mySketch?.remove();
                if (sampler == undefined) {
                    _tone.context.latencyHint = "balanced"; //"interactive" (default, prioritizes low latency), "playback" (prioritizes sustained playback), "balanced" (balances latency and performance), "fastest" (lowest latency, might glitch more often).
                    const indexOfMyColor = (0, _constantsJs.colors).indexOf(myColor);
                    sampler = new _tone.Sampler({
                        "F#3": `./s${indexOfMyColor}/1.mp3`,
                        E3: `./s${indexOfMyColor}/2.mp3`,
                        "C#3": `./s${indexOfMyColor}/3.mp3`,
                        A3: `./s${indexOfMyColor}/4.mp3`
                    }, function() {
                        //sampler will repitch the closest sample
                        _tone.Transport.start();
                        sampler.triggerAttack("D3");
                    }).toDestination();
                } else _tone.Transport.start();
            } else if (data == "pong") {
                let timeTook = performance.now() - timeOnSend;
                console.log("\uD83C\uDFD3 Ping pong took " + timeTook + "ms");
                (0, _jqueryDefault.default)("body").append(`<div class="ping">Ping took this long : ${timeTook}</div>`);
            } else if (data == "ping") {
                conn.send("pong");
                console.log("\uD83C\uDFD3 pong!");
            } else if (data.color != undefined) {
                myColor = data.color;
                (0, _jqueryDefault.default)("#my-color").css("background-color", myColor);
            }
        });
        console.log("\uD83D\uDC9E I now have an open connection to: " + conn.peer);
    });
    conn.on("close", function() {
        console.log("\uD83D\uDC94 Connection lost to " + conn.peer);
        (0, _jqueryDefault.default)(`#sequencer-${conn.peer}`).remove();
        let i = (0, _connectionsJs.connections).indexOf(conn);
        if (i != -1) (0, _connectionsJs.connections).splice(i, 1);
        if (myRole == "receiver") {
            (0, _jqueryDefault.default)("#my-color").css("background-color", "white");
            hasSender = false;
            (0, _receiverJs.startMicrophoneInput)();
            mySketch = new p5((0, _receiverJs.receiverSketch));
            delta = undefined;
            _tone.Transport.stop();
        }
        if (myRole == "sender") for(let i1 = 0; i1 < (0, _connectionsJs.connections).length; i1++){
            const connection = (0, _connectionsJs.connections)[i1];
            const color = {
                color: (0, _constantsJs.colors)[i1 % ((0, _constantsJs.colors).length - 1)]
            };
            connection.send(color);
            console.log("sending to " + connection.peer + " this color: " + color);
        }
        if (myRole == "sender" && (0, _connectionsJs.connections).length <= 0) {
            myRole = undefined;
            (0, _jqueryDefault.default)("#sender-div").remove();
            appendSenderReceiver();
        }
    });
    conn.on("error", function(err) {
        console.log("⛔ Connection error: " + err);
    });
}
function removeSenderReceiver() {
    (0, _jqueryDefault.default)("#main-menu").remove();
}
function appendSenderReceiver() {
    (0, _jqueryDefault.default)("body").append("<div id='main-menu'><div id='sender'>sender</div><div id='animation-container'></div><div id='receiver'>receiver</div></div>");
    (0, _jqueryDefault.default)("#sender").on("click", function() {
        if (myRole == "receiver") {
            mySketch.remove();
            setupSender();
        } else if (myRole != "sender") setupSender();
        (0, _senderJs.startBeeping)();
        removeSenderReceiver();
    });
    (0, _jqueryDefault.default)("#receiver").on("click", function() {
        if (myRole == "sender") {
            (0, _jqueryDefault.default)("#start").remove();
            mySketch.remove();
            (0, _socketJs.socket).emit("imNotSender", peer.id);
            setupReceiver();
        } else if (myRole != "receiver") setupReceiver();
        removeSenderReceiver();
    });
}
function setupReceiver() {
    (0, _receiverJs.startMicrophoneInput)();
    _tone.start("+0.1");
    myRole = "receiver";
    console.log("\uD83D\uDE47\uD83C\uDFFE‍♂️ I'm a receiver now");
    mySketch = new p5((0, _receiverJs.receiverSketch));
    (0, _jqueryDefault.default)("body").append("<div id='receiver-div'><div id='my-color'></div></div>");
}
function setupSender() {
    myRole = "sender";
    console.log("\uD83D\uDCE2 I'm the sender now");
    (0, _socketJs.socket).emit("imSender", peer.id);
}
// Stack overflow anwser for mobile logging from Marcus Hughes - Jan 22 2018
// Reference to an output container, use 'pre' styling for JSON output
let output = document.createElement("console");
document.body.appendChild(output);
// Reference to native method(s)
let oldLog = console.log;
console.log = function(...items) {
    // Call native method first
    oldLog.apply(this, items);
    // Use JSON to transform objects, all others display normally
    items.forEach((item, i)=>{
        items[i] = typeof item === "object" ? JSON.stringify(item, null, 4) : item;
    });
    output.innerHTML += items.join(" ") + "<br />";
    output.scrollTop = output.scrollHeight;
}; //end of mobile console

},{"jquery":"hgMhh","peerjs":"q8CCT","./sender.js":"bS2pT","tone":"2tCfN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./receiver.js":"iLfKW","./constants.js":"ib2Pl","./socket.js":"8guOI","./connections.js":"3Nh8Q","gsap":"fPSuC","./synchonizedTime":"532sa"}],"q8CCT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>$70d766613f57b014$export$2e2bcd8739ae039);
parcelHelpers.export(exports, "Peer", ()=>$26088d7da5b03f69$export$ecd1fc136c422448);
parcelHelpers.export(exports, "util", ()=>$06cb531ed7840f78$export$7debb50ef11d5e0b);
var _peerjsJsBinarypack = require("peerjs-js-binarypack");
var _peerjsJsBinarypackDefault = parcelHelpers.interopDefault(_peerjsJsBinarypack);
var _webrtcAdapter = require("webrtc-adapter");
var _webrtcAdapterDefault = parcelHelpers.interopDefault(_webrtcAdapter);
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $af8cf1f663f490f4$var$webRTCAdapter = (0, _webrtcAdapterDefault.default).default || (0, _webrtcAdapterDefault.default);
var $af8cf1f663f490f4$export$25be9502477c137d = new /** @class */ (function() {
    function class_1() {
        this.isIOS = [
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform);
        this.supportedBrowsers = [
            "firefox",
            "chrome",
            "safari"
        ];
        this.minFirefoxVersion = 59;
        this.minChromeVersion = 72;
        this.minSafariVersion = 605;
    }
    class_1.prototype.isWebRTCSupported = function() {
        return typeof RTCPeerConnection !== "undefined";
    };
    class_1.prototype.isBrowserSupported = function() {
        var browser = this.getBrowser();
        var version = this.getVersion();
        var validBrowser = this.supportedBrowsers.includes(browser);
        if (!validBrowser) return false;
        if (browser === "chrome") return version >= this.minChromeVersion;
        if (browser === "firefox") return version >= this.minFirefoxVersion;
        if (browser === "safari") return !this.isIOS && version >= this.minSafariVersion;
        return false;
    };
    class_1.prototype.getBrowser = function() {
        return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.browser;
    };
    class_1.prototype.getVersion = function() {
        return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
    };
    class_1.prototype.isUnifiedPlanSupported = function() {
        var browser = this.getBrowser();
        var version = $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
        if (browser === "chrome" && version < this.minChromeVersion) return false;
        if (browser === "firefox" && version >= this.minFirefoxVersion) return true;
        if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
        var tempPc;
        var supported = false;
        try {
            tempPc = new RTCPeerConnection();
            tempPc.addTransceiver("audio");
            supported = true;
        } catch (e) {} finally{
            if (tempPc) tempPc.close();
        }
        return supported;
    };
    class_1.prototype.toString = function() {
        return "Supports:\n    browser:".concat(this.getBrowser(), "\n    version:").concat(this.getVersion(), "\n    isIOS:").concat(this.isIOS, "\n    isWebRTCSupported:").concat(this.isWebRTCSupported(), "\n    isBrowserSupported:").concat(this.isBrowserSupported(), "\n    isUnifiedPlanSupported:").concat(this.isUnifiedPlanSupported());
    };
    return class_1;
}())();
var $06cb531ed7840f78$var$DEFAULT_CONFIG = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302"
        },
        {
            urls: [
                "turn:eu-0.turn.peerjs.com:3478",
                "turn:us-0.turn.peerjs.com:3478"
            ],
            username: "peerjs",
            credential: "peerjsp"
        }
    ],
    sdpSemantics: "unified-plan"
};
var $06cb531ed7840f78$var$Util = /** @class */ function() {
    function Util() {
        this.CLOUD_HOST = "0.peerjs.com";
        this.CLOUD_PORT = 443;
        // Browsers that need chunking:
        this.chunkedBrowsers = {
            Chrome: 1,
            chrome: 1
        };
        this.chunkedMTU = 16300; // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.
        // Returns browser-agnostic default config
        this.defaultConfig = $06cb531ed7840f78$var$DEFAULT_CONFIG;
        this.browser = $af8cf1f663f490f4$export$25be9502477c137d.getBrowser();
        this.browserVersion = $af8cf1f663f490f4$export$25be9502477c137d.getVersion();
        // Lists which features are supported
        this.supports = function() {
            var supported = {
                browser: $af8cf1f663f490f4$export$25be9502477c137d.isBrowserSupported(),
                webRTC: $af8cf1f663f490f4$export$25be9502477c137d.isWebRTCSupported(),
                audioVideo: false,
                data: false,
                binaryBlob: false,
                reliable: false
            };
            if (!supported.webRTC) return supported;
            var pc;
            try {
                pc = new RTCPeerConnection($06cb531ed7840f78$var$DEFAULT_CONFIG);
                supported.audioVideo = true;
                var dc = void 0;
                try {
                    dc = pc.createDataChannel("_PEERJSTEST", {
                        ordered: true
                    });
                    supported.data = true;
                    supported.reliable = !!dc.ordered;
                    // Binary test
                    try {
                        dc.binaryType = "blob";
                        supported.binaryBlob = !$af8cf1f663f490f4$export$25be9502477c137d.isIOS;
                    } catch (e) {}
                } catch (e1) {} finally{
                    if (dc) dc.close();
                }
            } catch (e2) {} finally{
                if (pc) pc.close();
            }
            return supported;
        }();
        this.pack = (0, _peerjsJsBinarypackDefault.default).pack;
        this.unpack = (0, _peerjsJsBinarypackDefault.default).unpack;
        // Binary stuff
        this._dataCount = 1;
    }
    Util.prototype.noop = function() {};
    // Ensure alphanumeric ids
    Util.prototype.validateId = function(id) {
        // Allow empty ids
        return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
    };
    Util.prototype.chunk = function(blob) {
        var chunks = [];
        var size = blob.size;
        var total = Math.ceil(size / $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
        var index = 0;
        var start = 0;
        while(start < size){
            var end = Math.min(size, start + $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
            var b = blob.slice(start, end);
            var chunk = {
                __peerData: this._dataCount,
                n: index,
                data: b,
                total: total
            };
            chunks.push(chunk);
            start = end;
            index++;
        }
        this._dataCount++;
        return chunks;
    };
    Util.prototype.blobToArrayBuffer = function(blob, cb) {
        var fr = new FileReader();
        fr.onload = function(evt) {
            if (evt.target) cb(evt.target.result);
        };
        fr.readAsArrayBuffer(blob);
        return fr;
    };
    Util.prototype.binaryStringToArrayBuffer = function(binary) {
        var byteArray = new Uint8Array(binary.length);
        for(var i = 0; i < binary.length; i++)byteArray[i] = binary.charCodeAt(i) & 0xff;
        return byteArray.buffer;
    };
    Util.prototype.randomToken = function() {
        return Math.random().toString(36).slice(2);
    };
    Util.prototype.isSecure = function() {
        return location.protocol === "https:";
    };
    return Util;
}();
var $06cb531ed7840f78$export$7debb50ef11d5e0b = new $06cb531ed7840f78$var$Util();
var $26088d7da5b03f69$exports = {};
$parcel$export($26088d7da5b03f69$exports, "Peer", ()=>$26088d7da5b03f69$export$ecd1fc136c422448, (v)=>$26088d7da5b03f69$export$ecd1fc136c422448 = v);
var $ac9b757d51178e15$exports = {};
"use strict";
var $ac9b757d51178e15$var$has = Object.prototype.hasOwnProperty, $ac9b757d51178e15$var$prefix = "~";
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function $ac9b757d51178e15$var$Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    $ac9b757d51178e15$var$Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new $ac9b757d51178e15$var$Events().__proto__) $ac9b757d51178e15$var$prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function $ac9b757d51178e15$var$EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function $ac9b757d51178e15$var$addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") throw new TypeError("The listener must be a function");
    var listener = new $ac9b757d51178e15$var$EE(fn, context || emitter, once), evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function $ac9b757d51178e15$var$clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new $ac9b757d51178e15$var$Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function $ac9b757d51178e15$var$EventEmitter() {
    this._events = new $ac9b757d51178e15$var$Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if ($ac9b757d51178e15$var$has.call(events, name)) names.push($ac9b757d51178e15$var$prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.listeners = function listeners(event) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.on = function on(event, fn, context) {
    return $ac9b757d51178e15$var$addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.once = function once(event, fn, context) {
    return $ac9b757d51178e15$var$addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        $ac9b757d51178e15$var$clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) $ac9b757d51178e15$var$clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else $ac9b757d51178e15$var$clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
        if (this._events[evt]) $ac9b757d51178e15$var$clearEvent(this, evt);
    } else {
        this._events = new $ac9b757d51178e15$var$Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
$ac9b757d51178e15$var$EventEmitter.prototype.off = $ac9b757d51178e15$var$EventEmitter.prototype.removeListener;
$ac9b757d51178e15$var$EventEmitter.prototype.addListener = $ac9b757d51178e15$var$EventEmitter.prototype.on;
//
// Expose the prefix.
//
$ac9b757d51178e15$var$EventEmitter.prefixed = $ac9b757d51178e15$var$prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
$ac9b757d51178e15$var$EventEmitter.EventEmitter = $ac9b757d51178e15$var$EventEmitter;
$ac9b757d51178e15$exports = $ac9b757d51178e15$var$EventEmitter;
var $1615705ecc6adca3$exports = {};
$parcel$export($1615705ecc6adca3$exports, "LogLevel", ()=>$1615705ecc6adca3$export$243e62d78d3b544d, (v)=>$1615705ecc6adca3$export$243e62d78d3b544d = v);
$parcel$export($1615705ecc6adca3$exports, "default", ()=>$1615705ecc6adca3$export$2e2bcd8739ae039, (v)=>$1615705ecc6adca3$export$2e2bcd8739ae039 = v);
var $1615705ecc6adca3$var$__read = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $1615705ecc6adca3$var$__spreadArray = function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $1615705ecc6adca3$var$LOG_PREFIX = "PeerJS: ";
var $1615705ecc6adca3$export$243e62d78d3b544d;
(function($1615705ecc6adca3$export$243e62d78d3b544d) {
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Disabled"] = 0] = "Disabled";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Errors"] = 1] = "Errors";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Warnings"] = 2] = "Warnings";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["All"] = 3] = "All";
})($1615705ecc6adca3$export$243e62d78d3b544d || ($1615705ecc6adca3$export$243e62d78d3b544d = {}));
var $1615705ecc6adca3$var$Logger = /** @class */ function() {
    function Logger() {
        this._logLevel = $1615705ecc6adca3$export$243e62d78d3b544d.Disabled;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function() {
            return this._logLevel;
        },
        set: function(logLevel) {
            this._logLevel = logLevel;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.log = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.All
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.Warnings
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.Errors
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.setLogFunction = function(fn) {
        this._print = fn;
    };
    Logger.prototype._print = function(logLevel) {
        var rest = [];
        for(var _i = 1; _i < arguments.length; _i++)rest[_i - 1] = arguments[_i];
        var copy = $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$var$LOG_PREFIX
        ], $1615705ecc6adca3$var$__read(rest), false);
        for(var i in copy)if (copy[i] instanceof Error) copy[i] = "(" + copy[i].name + ") " + copy[i].message;
        if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All) console.log.apply(console, $1615705ecc6adca3$var$__spreadArray([], $1615705ecc6adca3$var$__read(copy), false));
        else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings) console.warn.apply(console, $1615705ecc6adca3$var$__spreadArray([
            "WARNING"
        ], $1615705ecc6adca3$var$__read(copy), false));
        else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors) console.error.apply(console, $1615705ecc6adca3$var$__spreadArray([
            "ERROR"
        ], $1615705ecc6adca3$var$__read(copy), false));
    };
    return Logger;
}();
var $1615705ecc6adca3$export$2e2bcd8739ae039 = new $1615705ecc6adca3$var$Logger();
var $31d11a8d122cb4b7$exports = {};
$parcel$export($31d11a8d122cb4b7$exports, "Socket", ()=>$31d11a8d122cb4b7$export$4798917dbf149b79, (v)=>$31d11a8d122cb4b7$export$4798917dbf149b79 = v);
var $60fadef21a2daafc$export$3157d57b4135e3bc;
(function($60fadef21a2daafc$export$3157d57b4135e3bc) {
    $60fadef21a2daafc$export$3157d57b4135e3bc["Data"] = "data";
    $60fadef21a2daafc$export$3157d57b4135e3bc["Media"] = "media";
})($60fadef21a2daafc$export$3157d57b4135e3bc || ($60fadef21a2daafc$export$3157d57b4135e3bc = {}));
var $60fadef21a2daafc$export$9547aaa2e39030ff;
(function($60fadef21a2daafc$export$9547aaa2e39030ff) {
    $60fadef21a2daafc$export$9547aaa2e39030ff["BrowserIncompatible"] = "browser-incompatible";
    $60fadef21a2daafc$export$9547aaa2e39030ff["Disconnected"] = "disconnected";
    $60fadef21a2daafc$export$9547aaa2e39030ff["InvalidID"] = "invalid-id";
    $60fadef21a2daafc$export$9547aaa2e39030ff["InvalidKey"] = "invalid-key";
    $60fadef21a2daafc$export$9547aaa2e39030ff["Network"] = "network";
    $60fadef21a2daafc$export$9547aaa2e39030ff["PeerUnavailable"] = "peer-unavailable";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SslUnavailable"] = "ssl-unavailable";
    $60fadef21a2daafc$export$9547aaa2e39030ff["ServerError"] = "server-error";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SocketError"] = "socket-error";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SocketClosed"] = "socket-closed";
    $60fadef21a2daafc$export$9547aaa2e39030ff["UnavailableID"] = "unavailable-id";
    $60fadef21a2daafc$export$9547aaa2e39030ff["WebRTC"] = "webrtc";
})($60fadef21a2daafc$export$9547aaa2e39030ff || ($60fadef21a2daafc$export$9547aaa2e39030ff = {}));
var $60fadef21a2daafc$export$89f507cf986a947;
(function($60fadef21a2daafc$export$89f507cf986a947) {
    $60fadef21a2daafc$export$89f507cf986a947["Binary"] = "binary";
    $60fadef21a2daafc$export$89f507cf986a947["BinaryUTF8"] = "binary-utf8";
    $60fadef21a2daafc$export$89f507cf986a947["JSON"] = "json";
})($60fadef21a2daafc$export$89f507cf986a947 || ($60fadef21a2daafc$export$89f507cf986a947 = {}));
var $60fadef21a2daafc$export$3b5c4a4b6354f023;
(function($60fadef21a2daafc$export$3b5c4a4b6354f023) {
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Message"] = "message";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Disconnected"] = "disconnected";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Error"] = "error";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Close"] = "close";
})($60fadef21a2daafc$export$3b5c4a4b6354f023 || ($60fadef21a2daafc$export$3b5c4a4b6354f023 = {}));
var $60fadef21a2daafc$export$adb4a1754da6f10d;
(function($60fadef21a2daafc$export$adb4a1754da6f10d) {
    $60fadef21a2daafc$export$adb4a1754da6f10d["Heartbeat"] = "HEARTBEAT";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Candidate"] = "CANDIDATE";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Offer"] = "OFFER";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Answer"] = "ANSWER";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Open"] = "OPEN";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Error"] = "ERROR";
    $60fadef21a2daafc$export$adb4a1754da6f10d["IdTaken"] = "ID-TAKEN";
    $60fadef21a2daafc$export$adb4a1754da6f10d["InvalidKey"] = "INVALID-KEY";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Leave"] = "LEAVE";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Expire"] = "EXPIRE";
})($60fadef21a2daafc$export$adb4a1754da6f10d || ($60fadef21a2daafc$export$adb4a1754da6f10d = {}));
var $0d1ed891c5cb27c0$exports = {};
$0d1ed891c5cb27c0$exports = JSON.parse('{"name":"peerjs","version":"1.4.7","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xfcckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}');
var $31d11a8d122cb4b7$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $31d11a8d122cb4b7$var$__read = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $31d11a8d122cb4b7$var$__spreadArray = function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $31d11a8d122cb4b7$var$__values = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * An abstraction on top of WebSockets to provide fastest
 * possible connection for peers.
 */ var $31d11a8d122cb4b7$export$4798917dbf149b79 = /** @class */ function(_super) {
    $31d11a8d122cb4b7$var$__extends($31d11a8d122cb4b7$export$4798917dbf149b79, _super);
    function $31d11a8d122cb4b7$export$4798917dbf149b79(secure, host, port, path, key, pingInterval) {
        if (pingInterval === void 0) pingInterval = 5000;
        var _this = _super.call(this) || this;
        _this.pingInterval = pingInterval;
        _this._disconnected = true;
        _this._messagesQueue = [];
        var wsProtocol = secure ? "wss://" : "ws://";
        _this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
        return _this;
    }
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.start = function(id, token) {
        var _this = this;
        this._id = id;
        var wsUrl = "".concat(this._baseUrl, "&id=").concat(id, "&token=").concat(token);
        if (!!this._socket || !this._disconnected) return;
        this._socket = new WebSocket(wsUrl + "&version=" + $0d1ed891c5cb27c0$exports.version);
        this._disconnected = false;
        this._socket.onmessage = function(event) {
            var data;
            try {
                data = JSON.parse(event.data);
                $1615705ecc6adca3$exports.default.log("Server message received:", data);
            } catch (e) {
                $1615705ecc6adca3$exports.default.log("Invalid server message", event.data);
                return;
            }
            _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, data);
        };
        this._socket.onclose = function(event) {
            if (_this._disconnected) return;
            $1615705ecc6adca3$exports.default.log("Socket closed.", event);
            _this._cleanup();
            _this._disconnected = true;
            _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected);
        };
        // Take care of the queue of connections if necessary and make sure Peer knows
        // socket is open.
        this._socket.onopen = function() {
            if (_this._disconnected) return;
            _this._sendQueuedMessages();
            $1615705ecc6adca3$exports.default.log("Socket open");
            _this._scheduleHeartbeat();
        };
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._scheduleHeartbeat = function() {
        var _this = this;
        this._wsPingTimer = setTimeout(function() {
            _this._sendHeartbeat();
        }, this.pingInterval);
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._sendHeartbeat = function() {
        if (!this._wsOpen()) {
            $1615705ecc6adca3$exports.default.log("Cannot send heartbeat, because socket closed");
            return;
        }
        var message = JSON.stringify({
            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Heartbeat
        });
        this._socket.send(message);
        this._scheduleHeartbeat();
    };
    /** Is the websocket currently open? */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._wsOpen = function() {
        return !!this._socket && this._socket.readyState === 1;
    };
    /** Send queued messages. */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._sendQueuedMessages = function() {
        var e_1, _a;
        //Create copy of queue and clear it,
        //because send method push the message back to queue if smth will go wrong
        var copiedQueue = $31d11a8d122cb4b7$var$__spreadArray([], $31d11a8d122cb4b7$var$__read(this._messagesQueue), false);
        this._messagesQueue = [];
        try {
            for(var copiedQueue_1 = $31d11a8d122cb4b7$var$__values(copiedQueue), copiedQueue_1_1 = copiedQueue_1.next(); !copiedQueue_1_1.done; copiedQueue_1_1 = copiedQueue_1.next()){
                var message = copiedQueue_1_1.value;
                this.send(message);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (copiedQueue_1_1 && !copiedQueue_1_1.done && (_a = copiedQueue_1.return)) _a.call(copiedQueue_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    /** Exposed send for DC & Peer. */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.send = function(data) {
        if (this._disconnected) return;
        // If we didn't get an ID yet, we can't yet send anything so we should queue
        // up these messages.
        if (!this._id) {
            this._messagesQueue.push(data);
            return;
        }
        if (!data.type) {
            this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, "Invalid message");
            return;
        }
        if (!this._wsOpen()) return;
        var message = JSON.stringify(data);
        this._socket.send(message);
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.close = function() {
        if (this._disconnected) return;
        this._cleanup();
        this._disconnected = true;
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._cleanup = function() {
        if (this._socket) {
            this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
            this._socket.close();
            this._socket = undefined;
        }
        clearTimeout(this._wsPingTimer);
    };
    return $31d11a8d122cb4b7$export$4798917dbf149b79;
}($ac9b757d51178e15$exports.EventEmitter);
var $353dee38f9ab557b$exports = {};
$parcel$export($353dee38f9ab557b$exports, "MediaConnection", ()=>$353dee38f9ab557b$export$4a84e95a2324ac29, (v)=>$353dee38f9ab557b$export$4a84e95a2324ac29 = v);
var $77f14d3e81888156$exports = {};
$parcel$export($77f14d3e81888156$exports, "Negotiator", ()=>$77f14d3e81888156$export$89e6bb5ad64bf4a, (v)=>$77f14d3e81888156$export$89e6bb5ad64bf4a = v);
var $77f14d3e81888156$var$__assign = function() {
    $77f14d3e81888156$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $77f14d3e81888156$var$__assign.apply(this, arguments);
};
var $77f14d3e81888156$var$__awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $77f14d3e81888156$var$__generator = function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
/**
 * Manages all negotiations between Peers.
 */ var $77f14d3e81888156$export$89e6bb5ad64bf4a = /** @class */ function() {
    function $77f14d3e81888156$export$89e6bb5ad64bf4a(connection) {
        this.connection = connection;
    }
    /** Returns a PeerConnection object set up correctly (for data, media). */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.startConnection = function(options) {
        var peerConnection = this._startPeerConnection();
        // Set the connection's PC.
        this.connection.peerConnection = peerConnection;
        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media && options._stream) this._addTracksToConnection(options._stream, peerConnection);
        // What do we need to do now?
        if (options.originator) {
            if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                var dataConnection = this.connection;
                var config = {
                    ordered: !!options.reliable
                };
                var dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
                dataConnection.initialize(dataChannel);
            }
            this._makeOffer();
        } else this.handleSDP("OFFER", options.sdp);
    };
    /** Start a PC. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._startPeerConnection = function() {
        $1615705ecc6adca3$exports.default.log("Creating RTCPeerConnection.");
        var peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
        this._setupListeners(peerConnection);
        return peerConnection;
    };
    /** Set up various WebRTC listeners. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._setupListeners = function(peerConnection) {
        var _this = this;
        var peerId = this.connection.peer;
        var connectionId = this.connection.connectionId;
        var connectionType = this.connection.type;
        var provider = this.connection.provider;
        // ICE CANDIDATES.
        $1615705ecc6adca3$exports.default.log("Listening for ICE candidates.");
        peerConnection.onicecandidate = function(evt) {
            if (!evt.candidate || !evt.candidate.candidate) return;
            $1615705ecc6adca3$exports.default.log("Received ICE candidates for ".concat(peerId, ":"), evt.candidate);
            provider.socket.send({
                type: $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate,
                payload: {
                    candidate: evt.candidate,
                    type: connectionType,
                    connectionId: connectionId
                },
                dst: peerId
            });
        };
        peerConnection.oniceconnectionstatechange = function() {
            switch(peerConnection.iceConnectionState){
                case "failed":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState is failed, closing connections to " + peerId);
                    _this.connection.emit("error", new Error("Negotiation of connection to " + peerId + " failed."));
                    _this.connection.close();
                    break;
                case "closed":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState is closed, closing connections to " + peerId);
                    _this.connection.emit("error", new Error("Connection to " + peerId + " closed."));
                    _this.connection.close();
                    break;
                case "disconnected":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState changed to disconnected on the connection with " + peerId);
                    break;
                case "completed":
                    peerConnection.onicecandidate = $06cb531ed7840f78$export$7debb50ef11d5e0b.noop;
                    break;
            }
            _this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
        };
        // DATACONNECTION.
        $1615705ecc6adca3$exports.default.log("Listening for data channel");
        // Fired between offer and answer, so options should already be saved
        // in the options hash.
        peerConnection.ondatachannel = function(evt) {
            $1615705ecc6adca3$exports.default.log("Received data channel");
            var dataChannel = evt.channel;
            var connection = provider.getConnection(peerId, connectionId);
            connection.initialize(dataChannel);
        };
        // MEDIACONNECTION.
        $1615705ecc6adca3$exports.default.log("Listening for remote stream");
        peerConnection.ontrack = function(evt) {
            $1615705ecc6adca3$exports.default.log("Received remote stream");
            var stream = evt.streams[0];
            var connection = provider.getConnection(peerId, connectionId);
            if (connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
                var mediaConnection = connection;
                _this._addStreamToMediaConnection(stream, mediaConnection);
            }
        };
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.cleanup = function() {
        $1615705ecc6adca3$exports.default.log("Cleaning up PeerConnection to " + this.connection.peer);
        var peerConnection = this.connection.peerConnection;
        if (!peerConnection) return;
        this.connection.peerConnection = null;
        //unsubscribe from all PeerConnection's events
        peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = function() {};
        var peerConnectionNotClosed = peerConnection.signalingState !== "closed";
        var dataChannelNotClosed = false;
        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
            var dataConnection = this.connection;
            var dataChannel = dataConnection.dataChannel;
            if (dataChannel) dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
        }
        if (peerConnectionNotClosed || dataChannelNotClosed) peerConnection.close();
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._makeOffer = function() {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, offer, payload, dataConnection, err_2, err_1_1;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            7,
                            ,
                            8
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.createOffer(this.connection.options.constraints)
                        ];
                    case 2:
                        offer = _a.sent();
                        $1615705ecc6adca3$exports.default.log("Created offer.");
                        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([
                            3,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setLocalDescription(offer)
                        ];
                    case 4:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set localDescription:", offer, "for:".concat(this.connection.peer));
                        payload = {
                            sdp: offer,
                            type: this.connection.type,
                            connectionId: this.connection.connectionId,
                            metadata: this.connection.metadata,
                            browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
                        };
                        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                            dataConnection = this.connection;
                            payload = $77f14d3e81888156$var$__assign($77f14d3e81888156$var$__assign({}, payload), {
                                label: dataConnection.label,
                                reliable: dataConnection.reliable,
                                serialization: dataConnection.serialization
                            });
                        }
                        provider.socket.send({
                            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Offer,
                            payload: payload,
                            dst: this.connection.peer
                        });
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_2 = _a.sent();
                        // TODO: investigate why _makeOffer is being called from the answer
                        if (err_2 != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
                            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_2);
                            $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_2);
                        }
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        err_1_1 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_1);
                        $1615705ecc6adca3$exports.default.log("Failed to createOffer, ", err_1_1);
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._makeAnswer = function() {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, answer, err_3, err_1_2;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            7,
                            ,
                            8
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.createAnswer()
                        ];
                    case 2:
                        answer = _a.sent();
                        $1615705ecc6adca3$exports.default.log("Created answer.");
                        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([
                            3,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setLocalDescription(answer)
                        ];
                    case 4:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set localDescription:", answer, "for:".concat(this.connection.peer));
                        provider.socket.send({
                            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Answer,
                            payload: {
                                sdp: answer,
                                type: this.connection.type,
                                connectionId: this.connection.connectionId,
                                browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
                            },
                            dst: this.connection.peer
                        });
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_3 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_3);
                        $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_3);
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        err_1_2 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_2);
                        $1615705ecc6adca3$exports.default.log("Failed to create answer, ", err_1_2);
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** Handle an SDP. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.handleSDP = function(type, sdp) {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, self, err_4;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        sdp = new RTCSessionDescription(sdp);
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        $1615705ecc6adca3$exports.default.log("Setting remote description", sdp);
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setRemoteDescription(sdp)
                        ];
                    case 2:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set remoteDescription:".concat(type, " for:").concat(this.connection.peer));
                        if (!(type === "OFFER")) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            self._makeAnswer()
                        ];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_4 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_4);
                        $1615705ecc6adca3$exports.default.log("Failed to setRemoteDescription, ", err_4);
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** Handle a candidate. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.handleCandidate = function(ice) {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var candidate, sdpMLineIndex, sdpMid, peerConnection, provider, err_5;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        $1615705ecc6adca3$exports.default.log("handleCandidate:", ice);
                        candidate = ice.candidate;
                        sdpMLineIndex = ice.sdpMLineIndex;
                        sdpMid = ice.sdpMid;
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.addIceCandidate(new RTCIceCandidate({
                                sdpMid: sdpMid,
                                sdpMLineIndex: sdpMLineIndex,
                                candidate: candidate
                            }))
                        ];
                    case 2:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Added ICE candidate for:".concat(this.connection.peer));
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        err_5 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_5);
                        $1615705ecc6adca3$exports.default.log("Failed to handleCandidate, ", err_5);
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._addTracksToConnection = function(stream, peerConnection) {
        $1615705ecc6adca3$exports.default.log("add tracks from stream ".concat(stream.id, " to peer connection"));
        if (!peerConnection.addTrack) return $1615705ecc6adca3$exports.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
        stream.getTracks().forEach(function(track) {
            peerConnection.addTrack(track, stream);
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._addStreamToMediaConnection = function(stream, mediaConnection) {
        $1615705ecc6adca3$exports.default.log("add stream ".concat(stream.id, " to media connection ").concat(mediaConnection.connectionId));
        mediaConnection.addStream(stream);
    };
    return $77f14d3e81888156$export$89e6bb5ad64bf4a;
}();
var $0b3b332fd86c5202$exports = {};
$parcel$export($0b3b332fd86c5202$exports, "BaseConnection", ()=>$0b3b332fd86c5202$export$23a2a68283c24d80, (v)=>$0b3b332fd86c5202$export$23a2a68283c24d80 = v);
var $0b3b332fd86c5202$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $0b3b332fd86c5202$export$23a2a68283c24d80 = /** @class */ function(_super) {
    $0b3b332fd86c5202$var$__extends($0b3b332fd86c5202$export$23a2a68283c24d80, _super);
    function $0b3b332fd86c5202$export$23a2a68283c24d80(peer, provider, options) {
        var _this = _super.call(this) || this;
        _this.peer = peer;
        _this.provider = provider;
        _this.options = options;
        _this._open = false;
        _this.metadata = options.metadata;
        return _this;
    }
    Object.defineProperty($0b3b332fd86c5202$export$23a2a68283c24d80.prototype, "open", {
        get: function() {
            return this._open;
        },
        enumerable: false,
        configurable: true
    });
    return $0b3b332fd86c5202$export$23a2a68283c24d80;
}($ac9b757d51178e15$exports.EventEmitter);
var $353dee38f9ab557b$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $353dee38f9ab557b$var$__assign = function() {
    $353dee38f9ab557b$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $353dee38f9ab557b$var$__assign.apply(this, arguments);
};
var $353dee38f9ab557b$var$__values = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Wraps the streaming interface between two Peers.
 */ var $353dee38f9ab557b$export$4a84e95a2324ac29 = /** @class */ function(_super) {
    $353dee38f9ab557b$var$__extends($353dee38f9ab557b$export$4a84e95a2324ac29, _super);
    function $353dee38f9ab557b$export$4a84e95a2324ac29(peerId, provider, options) {
        var _this = _super.call(this, peerId, provider, options) || this;
        _this._localStream = _this.options._stream;
        _this.connectionId = _this.options.connectionId || $353dee38f9ab557b$export$4a84e95a2324ac29.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
        _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
        if (_this._localStream) _this._negotiator.startConnection({
            _stream: _this._localStream,
            originator: true
        });
        return _this;
    }
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "type", {
        get: function() {
            return $60fadef21a2daafc$export$3157d57b4135e3bc.Media;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "localStream", {
        get: function() {
            return this._localStream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "remoteStream", {
        get: function() {
            return this._remoteStream;
        },
        enumerable: false,
        configurable: true
    });
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.addStream = function(remoteStream) {
        $1615705ecc6adca3$exports.default.log("Receiving stream", remoteStream);
        this._remoteStream = remoteStream;
        _super.prototype.emit.call(this, "stream", remoteStream); // Should we call this `open`?
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.handleMessage = function(message) {
        var type = message.type;
        var payload = message.payload;
        switch(message.type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
                // Forward to negotiator
                this._negotiator.handleSDP(type, payload.sdp);
                this._open = true;
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
                this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $1615705ecc6adca3$exports.default.warn("Unrecognized message type:".concat(type, " from peer:").concat(this.peer));
                break;
        }
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.answer = function(stream, options) {
        var e_1, _a;
        if (options === void 0) options = {};
        if (this._localStream) {
            $1615705ecc6adca3$exports.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
            return;
        }
        this._localStream = stream;
        if (options && options.sdpTransform) this.options.sdpTransform = options.sdpTransform;
        this._negotiator.startConnection($353dee38f9ab557b$var$__assign($353dee38f9ab557b$var$__assign({}, this.options._payload), {
            _stream: stream
        }));
        // Retrieve lost messages stored because PeerConnection not set up.
        var messages = this.provider._getMessages(this.connectionId);
        try {
            for(var messages_1 = $353dee38f9ab557b$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()){
                var message = messages_1_1.value;
                this.handleMessage(message);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        this._open = true;
    };
    /**
     * Exposed functionality for users.
     */ /** Allows user to close connection. */ $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.close = function() {
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        this._localStream = null;
        this._remoteStream = null;
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.options && this.options._stream) this.options._stream = null;
        if (!this.open) return;
        this._open = false;
        _super.prototype.emit.call(this, "close");
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.ID_PREFIX = "mc_";
    return $353dee38f9ab557b$export$4a84e95a2324ac29;
}($0b3b332fd86c5202$exports.BaseConnection);
var $3356170d7bce7f20$exports = {};
$parcel$export($3356170d7bce7f20$exports, "DataConnection", ()=>$3356170d7bce7f20$export$d365f7ad9d7df9c9, (v)=>$3356170d7bce7f20$export$d365f7ad9d7df9c9 = v);
var $3014d862dcc9946b$exports = {};
$parcel$export($3014d862dcc9946b$exports, "EncodingQueue", ()=>$3014d862dcc9946b$export$c6913ae0ed687038, (v)=>$3014d862dcc9946b$export$c6913ae0ed687038 = v);
var $3014d862dcc9946b$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $3014d862dcc9946b$export$c6913ae0ed687038 = /** @class */ function(_super) {
    $3014d862dcc9946b$var$__extends($3014d862dcc9946b$export$c6913ae0ed687038, _super);
    function $3014d862dcc9946b$export$c6913ae0ed687038() {
        var _this = _super.call(this) || this;
        _this.fileReader = new FileReader();
        _this._queue = [];
        _this._processing = false;
        _this.fileReader.onload = function(evt) {
            _this._processing = false;
            if (evt.target) _this.emit("done", evt.target.result);
            _this.doNextTask();
        };
        _this.fileReader.onerror = function(evt) {
            $1615705ecc6adca3$exports.default.error("EncodingQueue error:", evt);
            _this._processing = false;
            _this.destroy();
            _this.emit("error", evt);
        };
        return _this;
    }
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "queue", {
        get: function() {
            return this._queue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "size", {
        get: function() {
            return this.queue.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "processing", {
        get: function() {
            return this._processing;
        },
        enumerable: false,
        configurable: true
    });
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.enque = function(blob) {
        this.queue.push(blob);
        if (this.processing) return;
        this.doNextTask();
    };
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.destroy = function() {
        this.fileReader.abort();
        this._queue = [];
    };
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.doNextTask = function() {
        if (this.size === 0) return;
        if (this.processing) return;
        this._processing = true;
        this.fileReader.readAsArrayBuffer(this.queue.shift());
    };
    return $3014d862dcc9946b$export$c6913ae0ed687038;
}($ac9b757d51178e15$exports.EventEmitter);
var $3356170d7bce7f20$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $3356170d7bce7f20$var$__values = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Wraps a DataChannel between two Peers.
 */ var $3356170d7bce7f20$export$d365f7ad9d7df9c9 = /** @class */ function(_super) {
    $3356170d7bce7f20$var$__extends($3356170d7bce7f20$export$d365f7ad9d7df9c9, _super);
    function $3356170d7bce7f20$export$d365f7ad9d7df9c9(peerId, provider, options) {
        var _this = _super.call(this, peerId, provider, options) || this;
        _this.stringify = JSON.stringify;
        _this.parse = JSON.parse;
        _this._buffer = [];
        _this._bufferSize = 0;
        _this._buffering = false;
        _this._chunkedData = {};
        _this._encodingQueue = new $3014d862dcc9946b$exports.EncodingQueue();
        _this.connectionId = _this.options.connectionId || $3356170d7bce7f20$export$d365f7ad9d7df9c9.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
        _this.label = _this.options.label || _this.connectionId;
        _this.serialization = _this.options.serialization || $60fadef21a2daafc$export$89f507cf986a947.Binary;
        _this.reliable = !!_this.options.reliable;
        _this._encodingQueue.on("done", function(ab) {
            _this._bufferedSend(ab);
        });
        _this._encodingQueue.on("error", function() {
            $1615705ecc6adca3$exports.default.error("DC#".concat(_this.connectionId, ": Error occured in encoding from blob to arraybuffer, close DC"));
            _this.close();
        });
        _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
        _this._negotiator.startConnection(_this.options._payload || {
            originator: true
        });
        return _this;
    }
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "type", {
        get: function() {
            return $60fadef21a2daafc$export$3157d57b4135e3bc.Data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "dataChannel", {
        get: function() {
            return this._dc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "bufferSize", {
        get: function() {
            return this._bufferSize;
        },
        enumerable: false,
        configurable: true
    });
    /** Called by the Negotiator when the DataChannel is ready. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.initialize = function(dc) {
        this._dc = dc;
        this._configureDataChannel();
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._configureDataChannel = function() {
        var _this = this;
        if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob || $06cb531ed7840f78$export$7debb50ef11d5e0b.supports.reliable) this.dataChannel.binaryType = "arraybuffer";
        this.dataChannel.onopen = function() {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc connection success"));
            _this._open = true;
            _this.emit("open");
        };
        this.dataChannel.onmessage = function(e) {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc onmessage:"), e.data);
            _this._handleDataMessage(e);
        };
        this.dataChannel.onclose = function() {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc closed for:"), _this.peer);
            _this.close();
        };
    };
    // Handles a DataChannel message.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._handleDataMessage = function(_a) {
        var _this = this;
        var data = _a.data;
        var datatype = data.constructor;
        var isBinarySerialization = this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8;
        var deserializedData = data;
        if (isBinarySerialization) {
            if (datatype === Blob) {
                // Datatype should never be blob
                $06cb531ed7840f78$export$7debb50ef11d5e0b.blobToArrayBuffer(data, function(ab) {
                    var unpackedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab);
                    _this.emit("data", unpackedData);
                });
                return;
            } else if (datatype === ArrayBuffer) deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(data);
            else if (datatype === String) {
                // String fallback for binary data for browsers that don't support binary yet
                var ab1 = $06cb531ed7840f78$export$7debb50ef11d5e0b.binaryStringToArrayBuffer(data);
                deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab1);
            }
        } else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON) deserializedData = this.parse(data);
        // Check if we've chunked--if so, piece things back together.
        // We're guaranteed that this isn't 0.
        if (deserializedData.__peerData) {
            this._handleChunk(deserializedData);
            return;
        }
        _super.prototype.emit.call(this, "data", deserializedData);
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._handleChunk = function(data) {
        var id = data.__peerData;
        var chunkInfo = this._chunkedData[id] || {
            data: [],
            count: 0,
            total: data.total
        };
        chunkInfo.data[data.n] = data.data;
        chunkInfo.count++;
        this._chunkedData[id] = chunkInfo;
        if (chunkInfo.total === chunkInfo.count) {
            // Clean up before making the recursive call to `_handleDataMessage`.
            delete this._chunkedData[id];
            // We've received all the chunks--time to construct the complete data.
            var data_1 = new Blob(chunkInfo.data);
            this._handleDataMessage({
                data: data_1
            });
        }
    };
    /**
     * Exposed functionality for users.
     */ /** Allows user to close connection. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.close = function() {
        this._buffer = [];
        this._bufferSize = 0;
        this._chunkedData = {};
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.dataChannel) {
            this.dataChannel.onopen = null;
            this.dataChannel.onmessage = null;
            this.dataChannel.onclose = null;
            this._dc = null;
        }
        if (this._encodingQueue) {
            this._encodingQueue.destroy();
            this._encodingQueue.removeAllListeners();
            this._encodingQueue = null;
        }
        if (!this.open) return;
        this._open = false;
        _super.prototype.emit.call(this, "close");
    };
    /** Allows user to send data. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.send = function(data, chunked) {
        if (!this.open) {
            _super.prototype.emit.call(this, "error", new Error("Connection is not open. You should listen for the `open` event before sending messages."));
            return;
        }
        if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON) this._bufferedSend(this.stringify(data));
        else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8) {
            var blob = $06cb531ed7840f78$export$7debb50ef11d5e0b.pack(data);
            if (!chunked && blob.size > $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU) {
                this._sendChunks(blob);
                return;
            }
            if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob) // because this conversion is costly.
            this._encodingQueue.enque(blob);
            else this._bufferedSend(blob);
        } else this._bufferedSend(data);
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._bufferedSend = function(msg) {
        if (this._buffering || !this._trySend(msg)) {
            this._buffer.push(msg);
            this._bufferSize = this._buffer.length;
        }
    };
    // Returns true if the send succeeds.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._trySend = function(msg) {
        var _this = this;
        if (!this.open) return false;
        if (this.dataChannel.bufferedAmount > $3356170d7bce7f20$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT) {
            this._buffering = true;
            setTimeout(function() {
                _this._buffering = false;
                _this._tryBuffer();
            }, 50);
            return false;
        }
        try {
            this.dataChannel.send(msg);
        } catch (e) {
            $1615705ecc6adca3$exports.default.error("DC#:".concat(this.connectionId, " Error when sending:"), e);
            this._buffering = true;
            this.close();
            return false;
        }
        return true;
    };
    // Try to send the first message in the buffer.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._tryBuffer = function() {
        if (!this.open) return;
        if (this._buffer.length === 0) return;
        var msg = this._buffer[0];
        if (this._trySend(msg)) {
            this._buffer.shift();
            this._bufferSize = this._buffer.length;
            this._tryBuffer();
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._sendChunks = function(blob) {
        var e_1, _a;
        var blobs = $06cb531ed7840f78$export$7debb50ef11d5e0b.chunk(blob);
        $1615705ecc6adca3$exports.default.log("DC#".concat(this.connectionId, " Try to send ").concat(blobs.length, " chunks..."));
        try {
            for(var blobs_1 = $3356170d7bce7f20$var$__values(blobs), blobs_1_1 = blobs_1.next(); !blobs_1_1.done; blobs_1_1 = blobs_1.next()){
                var blob_1 = blobs_1_1.value;
                this.send(blob_1, true);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (blobs_1_1 && !blobs_1_1.done && (_a = blobs_1.return)) _a.call(blobs_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.handleMessage = function(message) {
        var payload = message.payload;
        switch(message.type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
                this._negotiator.handleSDP(message.type, payload.sdp);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
                this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $1615705ecc6adca3$exports.default.warn("Unrecognized message type:", message.type, "from peer:", this.peer);
                break;
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.ID_PREFIX = "dc_";
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT = 8388608;
    return $3356170d7bce7f20$export$d365f7ad9d7df9c9;
}($0b3b332fd86c5202$exports.BaseConnection);
var $9e85b3e1327369e6$exports = {};
$parcel$export($9e85b3e1327369e6$exports, "API", ()=>$9e85b3e1327369e6$export$2c4e825dc9120f87, (v)=>$9e85b3e1327369e6$export$2c4e825dc9120f87 = v);
var $9e85b3e1327369e6$var$__awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $9e85b3e1327369e6$var$__generator = function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var $9e85b3e1327369e6$export$2c4e825dc9120f87 = /** @class */ function() {
    function $9e85b3e1327369e6$export$2c4e825dc9120f87(_options) {
        this._options = _options;
    }
    $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype._buildRequest = function(method) {
        var protocol = this._options.secure ? "https" : "http";
        var _a = this._options, host = _a.host, port = _a.port, path = _a.path, key = _a.key;
        var url = new URL("".concat(protocol, "://").concat(host, ":").concat(port).concat(path).concat(key, "/").concat(method));
        // TODO: Why timestamp, why random?
        url.searchParams.set("ts", "".concat(Date.now()).concat(Math.random()));
        url.searchParams.set("version", $0d1ed891c5cb27c0$exports.version);
        return fetch(url.href, {
            referrerPolicy: this._options.referrerPolicy
        });
    };
    /** Get a unique ID from the server via XHR and initialize with it. */ $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype.retrieveId = function() {
        return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
            var response, error_1, pathError;
            return $9e85b3e1327369e6$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._buildRequest("id")
                        ];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) throw new Error("Error. Status:".concat(response.status));
                        return [
                            2 /*return*/ ,
                            response.text()
                        ];
                    case 2:
                        error_1 = _a.sent();
                        $1615705ecc6adca3$exports.default.error("Error retrieving ID", error_1);
                        pathError = "";
                        if (this._options.path === "/" && this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
                        throw new Error("Could not get an ID from the server." + pathError);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** @deprecated */ $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype.listAllPeers = function() {
        return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
            var response, helpfulError, error_2;
            return $9e85b3e1327369e6$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._buildRequest("peers")
                        ];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            if (response.status === 401) {
                                helpfulError = "";
                                if (this._options.host === $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
                                else helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
                                throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
                            }
                            throw new Error("Error. Status:".concat(response.status));
                        }
                        return [
                            2 /*return*/ ,
                            response.json()
                        ];
                    case 2:
                        error_2 = _a.sent();
                        $1615705ecc6adca3$exports.default.error("Error retrieving list peers", error_2);
                        throw new Error("Could not get list peers from the server." + error_2);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return $9e85b3e1327369e6$export$2c4e825dc9120f87;
}();
var $26088d7da5b03f69$var$__extends = function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $26088d7da5b03f69$var$__assign = function() {
    $26088d7da5b03f69$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $26088d7da5b03f69$var$__assign.apply(this, arguments);
};
var $26088d7da5b03f69$var$__values = function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $26088d7da5b03f69$var$__read = function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $26088d7da5b03f69$var$PeerOptions = /** @class */ function() {
    function PeerOptions() {}
    return PeerOptions;
}();
/**
 * A peer who can initiate connections with other peers.
 */ var $26088d7da5b03f69$export$ecd1fc136c422448 = /** @class */ function(_super) {
    $26088d7da5b03f69$var$__extends($26088d7da5b03f69$export$ecd1fc136c422448, _super);
    function $26088d7da5b03f69$export$ecd1fc136c422448(id1, options) {
        var _this = _super.call(this) || this;
        _this._id = null;
        _this._lastServerId = null;
        // States.
        _this._destroyed = false; // Connections have been killed
        _this._disconnected = false; // Connection to PeerServer killed but P2P connections still active
        _this._open = false; // Sockets and such are not yet open.
        _this._connections = new Map(); // All connections for this peer.
        _this._lostMessages = new Map(); // src => [list of messages]
        var userId;
        // Deal with overloading
        if (id1 && id1.constructor == Object) options = id1;
        else if (id1) userId = id1.toString();
        // Configurize options
        options = $26088d7da5b03f69$var$__assign({
            debug: 0,
            host: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST,
            port: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_PORT,
            path: "/",
            key: $26088d7da5b03f69$export$ecd1fc136c422448.DEFAULT_KEY,
            token: $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken(),
            config: $06cb531ed7840f78$export$7debb50ef11d5e0b.defaultConfig,
            referrerPolicy: "strict-origin-when-cross-origin"
        }, options);
        _this._options = options;
        // Detect relative URL host.
        if (_this._options.host === "/") _this._options.host = window.location.hostname;
        // Set path correctly.
        if (_this._options.path) {
            if (_this._options.path[0] !== "/") _this._options.path = "/" + _this._options.path;
            if (_this._options.path[_this._options.path.length - 1] !== "/") _this._options.path += "/";
        }
        // Set whether we use SSL to same as current host
        if (_this._options.secure === undefined && _this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) _this._options.secure = $06cb531ed7840f78$export$7debb50ef11d5e0b.isSecure();
        else if (_this._options.host == $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) _this._options.secure = true;
        // Set a custom log function if present
        if (_this._options.logFunction) $1615705ecc6adca3$exports.default.setLogFunction(_this._options.logFunction);
        $1615705ecc6adca3$exports.default.logLevel = _this._options.debug || 0;
        _this._api = new $9e85b3e1327369e6$exports.API(options);
        _this._socket = _this._createServerConnection();
        // Sanity checks
        // Ensure WebRTC supported
        if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.audioVideo && !$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.data) {
            _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.BrowserIncompatible, "The current browser does not support WebRTC");
            return _this;
        }
        // Ensure alphanumeric id
        if (!!userId && !$06cb531ed7840f78$export$7debb50ef11d5e0b.validateId(userId)) {
            _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidID, 'ID "'.concat(userId, '" is invalid'));
            return _this;
        }
        if (userId) _this._initialize(userId);
        else _this._api.retrieveId().then(function(id) {
            return _this._initialize(id);
        }).catch(function(error) {
            return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
        });
        return _this;
    }
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "id", {
        /**
         * The brokering ID of this peer
         */ get: function() {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "options", {
        get: function() {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "open", {
        get: function() {
            return this._open;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "socket", {
        get: function() {
            return this._socket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "connections", {
        /**
         * A hash of all connections associated with this peer, keyed by the remote peer's ID.
         * @deprecated
         * Return type will change from Object to Map<string,[]>
         */ get: function() {
            var e_1, _a;
            var plainConnections = Object.create(null);
            try {
                for(var _b = $26088d7da5b03f69$var$__values(this._connections), _c = _b.next(); !_c.done; _c = _b.next()){
                    var _d = $26088d7da5b03f69$var$__read(_c.value, 2), k = _d[0], v = _d[1];
                    plainConnections[k] = v;
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return plainConnections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "destroyed", {
        /**
         * true if this peer and all of its connections can no longer be used.
         */ get: function() {
            return this._destroyed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "disconnected", {
        /**
         * false if there is an active connection to the PeerServer.
         */ get: function() {
            return this._disconnected;
        },
        enumerable: false,
        configurable: true
    });
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._createServerConnection = function() {
        var _this = this;
        var socket = new $31d11a8d122cb4b7$exports.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, function(data) {
            _this._handleMessage(data);
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, function(error) {
            _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketError, error);
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected, function() {
            if (_this.disconnected) return;
            _this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Network, "Lost connection to server.");
            _this.disconnect();
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Close, function() {
            if (_this.disconnected) return;
            _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketClosed, "Underlying socket is already closed.");
        });
        return socket;
    };
    /** Initialize a connection with the server. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._initialize = function(id) {
        this._id = id;
        this.socket.start(id, this._options.token);
    };
    /** Handles messages from the server. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._handleMessage = function(message) {
        var e_2, _a;
        var type = message.type;
        var payload = message.payload;
        var peerId = message.src;
        switch(type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Open:
                this._lastServerId = this.id;
                this._open = true;
                this.emit("open", this.id);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Error:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, payload.msg);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.IdTaken:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.UnavailableID, 'ID "'.concat(this.id, '" is taken'));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.InvalidKey:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidKey, 'API KEY "'.concat(this._options.key, '" is invalid'));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Leave:
                $1615705ecc6adca3$exports.default.log("Received leave message from ".concat(peerId));
                this._cleanupPeer(peerId);
                this._connections.delete(peerId);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Expire:
                this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.PeerUnavailable, "Could not connect to peer ".concat(peerId));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Offer:
                // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
                var connectionId = payload.connectionId;
                var connection = this.getConnection(peerId, connectionId);
                if (connection) {
                    connection.close();
                    $1615705ecc6adca3$exports.default.warn("Offer received for existing Connection ID:".concat(connectionId));
                }
                // Create a new connection.
                if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
                    var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peerId, this, {
                        connectionId: connectionId,
                        _payload: payload,
                        metadata: payload.metadata
                    });
                    connection = mediaConnection;
                    this._addConnection(peerId, connection);
                    this.emit("call", mediaConnection);
                } else if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                    var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peerId, this, {
                        connectionId: connectionId,
                        _payload: payload,
                        metadata: payload.metadata,
                        label: payload.label,
                        serialization: payload.serialization,
                        reliable: payload.reliable
                    });
                    connection = dataConnection;
                    this._addConnection(peerId, connection);
                    this.emit("connection", dataConnection);
                } else {
                    $1615705ecc6adca3$exports.default.warn("Received malformed connection type:".concat(payload.type));
                    return;
                }
                // Find messages.
                var messages = this._getMessages(connectionId);
                try {
                    for(var messages_1 = $26088d7da5b03f69$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()){
                        var message_1 = messages_1_1.value;
                        connection.handleMessage(message_1);
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
                break;
            default:
                if (!payload) {
                    $1615705ecc6adca3$exports.default.warn("You received a malformed message from ".concat(peerId, " of type ").concat(type));
                    return;
                }
                var connectionId = payload.connectionId;
                var connection = this.getConnection(peerId, connectionId);
                if (connection && connection.peerConnection) connection.handleMessage(message);
                else if (connectionId) this._storeMessage(connectionId, message);
                else $1615705ecc6adca3$exports.default.warn("You received an unrecognized message:", message);
                break;
        }
    };
    /** Stores messages without a set up connection, to be claimed later. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._storeMessage = function(connectionId, message) {
        if (!this._lostMessages.has(connectionId)) this._lostMessages.set(connectionId, []);
        this._lostMessages.get(connectionId).push(message);
    };
    /** Retrieve messages from lost message store */ //TODO Change it to private
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._getMessages = function(connectionId) {
        var messages = this._lostMessages.get(connectionId);
        if (messages) {
            this._lostMessages.delete(connectionId);
            return messages;
        }
        return [];
    };
    /**
     * Connects to the remote peer specified by id and returns a data connection.
     * @param peer The brokering ID of the remote peer (their peer.id).
     * @param options for specifying details about Peer Connection
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.connect = function(peer, options) {
        if (options === void 0) options = {};
        if (this.disconnected) {
            $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
            this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peer, this, options);
        this._addConnection(peer, dataConnection);
        return dataConnection;
    };
    /**
     * Calls the remote peer specified by id and returns a media connection.
     * @param peer The brokering ID of the remote peer (their peer.id).
     * @param stream The caller's media stream
     * @param options Metadata associated with the connection, passed in by whoever initiated the connection.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.call = function(peer, stream, options) {
        if (options === void 0) options = {};
        if (this.disconnected) {
            $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
            this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        if (!stream) {
            $1615705ecc6adca3$exports.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
            return;
        }
        var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peer, this, $26088d7da5b03f69$var$__assign($26088d7da5b03f69$var$__assign({}, options), {
            _stream: stream
        }));
        this._addConnection(peer, mediaConnection);
        return mediaConnection;
    };
    /** Add a data/media connection to this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._addConnection = function(peerId, connection) {
        $1615705ecc6adca3$exports.default.log("add connection ".concat(connection.type, ":").concat(connection.connectionId, " to peerId:").concat(peerId));
        if (!this._connections.has(peerId)) this._connections.set(peerId, []);
        this._connections.get(peerId).push(connection);
    };
    //TODO should be private
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._removeConnection = function(connection) {
        var connections = this._connections.get(connection.peer);
        if (connections) {
            var index = connections.indexOf(connection);
            if (index !== -1) connections.splice(index, 1);
        }
        //remove from lost messages
        this._lostMessages.delete(connection.connectionId);
    };
    /** Retrieve a data/media connection for this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.getConnection = function(peerId, connectionId) {
        var e_3, _a;
        var connections = this._connections.get(peerId);
        if (!connections) return null;
        try {
            for(var connections_1 = $26088d7da5b03f69$var$__values(connections), connections_1_1 = connections_1.next(); !connections_1_1.done; connections_1_1 = connections_1.next()){
                var connection = connections_1_1.value;
                if (connection.connectionId === connectionId) return connection;
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (connections_1_1 && !connections_1_1.done && (_a = connections_1.return)) _a.call(connections_1);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        return null;
    };
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._delayedAbort = function(type, message) {
        var _this = this;
        setTimeout(function() {
            _this._abort(type, message);
        }, 0);
    };
    /**
     * Emits an error message and destroys the Peer.
     * The Peer is not destroyed if it's in a disconnected state, in which case
     * it retains its disconnected state and its existing connections.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._abort = function(type, message) {
        $1615705ecc6adca3$exports.default.error("Aborting!");
        this.emitError(type, message);
        if (!this._lastServerId) this.destroy();
        else this.disconnect();
    };
    /** Emits a typed error message. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.emitError = function(type, err) {
        $1615705ecc6adca3$exports.default.error("Error:", err);
        var error;
        if (typeof err === "string") error = new Error(err);
        else error = err;
        error.type = type;
        this.emit("error", error);
    };
    /**
     * Destroys the Peer: closes all active connections as well as the connection
     *  to the server.
     * Warning: The peer can no longer create or accept connections after being
     *  destroyed.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.destroy = function() {
        if (this.destroyed) return;
        $1615705ecc6adca3$exports.default.log("Destroy peer with ID:".concat(this.id));
        this.disconnect();
        this._cleanup();
        this._destroyed = true;
        this.emit("close");
    };
    /** Disconnects every connection on this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._cleanup = function() {
        var e_4, _a;
        try {
            for(var _b = $26088d7da5b03f69$var$__values(this._connections.keys()), _c = _b.next(); !_c.done; _c = _b.next()){
                var peerId = _c.value;
                this._cleanupPeer(peerId);
                this._connections.delete(peerId);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        this.socket.removeAllListeners();
    };
    /** Closes all connections to this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._cleanupPeer = function(peerId) {
        var e_5, _a;
        var connections = this._connections.get(peerId);
        if (!connections) return;
        try {
            for(var connections_2 = $26088d7da5b03f69$var$__values(connections), connections_2_1 = connections_2.next(); !connections_2_1.done; connections_2_1 = connections_2.next()){
                var connection = connections_2_1.value;
                connection.close();
            }
        } catch (e_5_1) {
            e_5 = {
                error: e_5_1
            };
        } finally{
            try {
                if (connections_2_1 && !connections_2_1.done && (_a = connections_2.return)) _a.call(connections_2);
            } finally{
                if (e_5) throw e_5.error;
            }
        }
    };
    /**
     * Disconnects the Peer's connection to the PeerServer. Does not close any
     *  active connections.
     * Warning: The peer can no longer create or accept connections after being
     *  disconnected. It also cannot reconnect to the server.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.disconnect = function() {
        if (this.disconnected) return;
        var currentId = this.id;
        $1615705ecc6adca3$exports.default.log("Disconnect peer with ID:".concat(currentId));
        this._disconnected = true;
        this._open = false;
        this.socket.close();
        this._lastServerId = currentId;
        this._id = null;
        this.emit("disconnected", currentId);
    };
    /** Attempts to reconnect with the same ID. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.reconnect = function() {
        if (this.disconnected && !this.destroyed) {
            $1615705ecc6adca3$exports.default.log("Attempting reconnection to server with ID ".concat(this._lastServerId));
            this._disconnected = false;
            this._initialize(this._lastServerId);
        } else if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
        else if (!this.disconnected && !this.open) $1615705ecc6adca3$exports.default.error("In a hurry? We're still trying to make the initial connection!");
        else throw new Error("Peer ".concat(this.id, " cannot reconnect because it is not disconnected from the server!"));
    };
    /**
     * Get a list of available peer IDs. If you're running your own server, you'll
     * want to set allow_discovery: true in the PeerServer options. If you're using
     * the cloud server, email team@peerjs.com to get the functionality enabled for
     * your key.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.listAllPeers = function(cb) {
        var _this = this;
        if (cb === void 0) cb = function(_) {};
        this._api.listAllPeers().then(function(peers) {
            return cb(peers);
        }).catch(function(error) {
            return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
        });
    };
    $26088d7da5b03f69$export$ecd1fc136c422448.DEFAULT_KEY = "peerjs";
    return $26088d7da5b03f69$export$ecd1fc136c422448;
}($ac9b757d51178e15$exports.EventEmitter);
var $70d766613f57b014$export$2e2bcd8739ae039 = $26088d7da5b03f69$exports.Peer;

},{"peerjs-js-binarypack":"7n1Vc","webrtc-adapter":"btsHR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7n1Vc":[function(require,module,exports) {
var BufferBuilder = require("./bufferbuilder").BufferBuilder;
var binaryFeatures = require("./bufferbuilder").binaryFeatures;
var BinaryPack = {
    unpack: function(data) {
        var unpacker = new Unpacker(data);
        return unpacker.unpack();
    },
    pack: function(data) {
        var packer = new Packer();
        packer.pack(data);
        var buffer = packer.getBuffer();
        return buffer;
    }
};
module.exports = BinaryPack;
function Unpacker(data) {
    // Data is ArrayBuffer
    this.index = 0;
    this.dataBuffer = data;
    this.dataView = new Uint8Array(this.dataBuffer);
    this.length = this.dataBuffer.byteLength;
}
Unpacker.prototype.unpack = function() {
    var type = this.unpack_uint8();
    if (type < 0x80) return type;
    else if ((type ^ 0xe0) < 0x20) return (type ^ 0xe0) - 0x20;
    var size;
    if ((size = type ^ 0xa0) <= 0x0f) return this.unpack_raw(size);
    else if ((size = type ^ 0xb0) <= 0x0f) return this.unpack_string(size);
    else if ((size = type ^ 0x90) <= 0x0f) return this.unpack_array(size);
    else if ((size = type ^ 0x80) <= 0x0f) return this.unpack_map(size);
    switch(type){
        case 0xc0:
            return null;
        case 0xc1:
            return undefined;
        case 0xc2:
            return false;
        case 0xc3:
            return true;
        case 0xca:
            return this.unpack_float();
        case 0xcb:
            return this.unpack_double();
        case 0xcc:
            return this.unpack_uint8();
        case 0xcd:
            return this.unpack_uint16();
        case 0xce:
            return this.unpack_uint32();
        case 0xcf:
            return this.unpack_uint64();
        case 0xd0:
            return this.unpack_int8();
        case 0xd1:
            return this.unpack_int16();
        case 0xd2:
            return this.unpack_int32();
        case 0xd3:
            return this.unpack_int64();
        case 0xd4:
            return undefined;
        case 0xd5:
            return undefined;
        case 0xd6:
            return undefined;
        case 0xd7:
            return undefined;
        case 0xd8:
            size = this.unpack_uint16();
            return this.unpack_string(size);
        case 0xd9:
            size = this.unpack_uint32();
            return this.unpack_string(size);
        case 0xda:
            size = this.unpack_uint16();
            return this.unpack_raw(size);
        case 0xdb:
            size = this.unpack_uint32();
            return this.unpack_raw(size);
        case 0xdc:
            size = this.unpack_uint16();
            return this.unpack_array(size);
        case 0xdd:
            size = this.unpack_uint32();
            return this.unpack_array(size);
        case 0xde:
            size = this.unpack_uint16();
            return this.unpack_map(size);
        case 0xdf:
            size = this.unpack_uint32();
            return this.unpack_map(size);
    }
};
Unpacker.prototype.unpack_uint8 = function() {
    var byte = this.dataView[this.index] & 0xff;
    this.index++;
    return byte;
};
Unpacker.prototype.unpack_uint16 = function() {
    var bytes = this.read(2);
    var uint16 = (bytes[0] & 0xff) * 256 + (bytes[1] & 0xff);
    this.index += 2;
    return uint16;
};
Unpacker.prototype.unpack_uint32 = function() {
    var bytes = this.read(4);
    var uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
    this.index += 4;
    return uint32;
};
Unpacker.prototype.unpack_uint64 = function() {
    var bytes = this.read(8);
    var uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
    this.index += 8;
    return uint64;
};
Unpacker.prototype.unpack_int8 = function() {
    var uint8 = this.unpack_uint8();
    return uint8 < 0x80 ? uint8 : uint8 - 256;
};
Unpacker.prototype.unpack_int16 = function() {
    var uint16 = this.unpack_uint16();
    return uint16 < 0x8000 ? uint16 : uint16 - 65536;
};
Unpacker.prototype.unpack_int32 = function() {
    var uint32 = this.unpack_uint32();
    return uint32 < Math.pow(2, 31) ? uint32 : uint32 - Math.pow(2, 32);
};
Unpacker.prototype.unpack_int64 = function() {
    var uint64 = this.unpack_uint64();
    return uint64 < Math.pow(2, 63) ? uint64 : uint64 - Math.pow(2, 64);
};
Unpacker.prototype.unpack_raw = function(size) {
    if (this.length < this.index + size) throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + size + " " + this.length);
    var buf = this.dataBuffer.slice(this.index, this.index + size);
    this.index += size;
    // buf = util.bufferToString(buf);
    return buf;
};
Unpacker.prototype.unpack_string = function(size) {
    var bytes = this.read(size);
    var i = 0;
    var str = "";
    var c;
    var code;
    while(i < size){
        c = bytes[i];
        if (c < 128) {
            str += String.fromCharCode(c);
            i++;
        } else if ((c ^ 0xc0) < 32) {
            code = (c ^ 0xc0) << 6 | bytes[i + 1] & 63;
            str += String.fromCharCode(code);
            i += 2;
        } else {
            code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
            str += String.fromCharCode(code);
            i += 3;
        }
    }
    this.index += size;
    return str;
};
Unpacker.prototype.unpack_array = function(size) {
    var objects = new Array(size);
    for(var i = 0; i < size; i++)objects[i] = this.unpack();
    return objects;
};
Unpacker.prototype.unpack_map = function(size) {
    var map = {};
    for(var i = 0; i < size; i++){
        var key = this.unpack();
        var value = this.unpack();
        map[key] = value;
    }
    return map;
};
Unpacker.prototype.unpack_float = function() {
    var uint32 = this.unpack_uint32();
    var sign = uint32 >> 31;
    var exp = (uint32 >> 23 & 0xff) - 127;
    var fraction = uint32 & 0x7fffff | 0x800000;
    return (sign === 0 ? 1 : -1) * fraction * Math.pow(2, exp - 23);
};
Unpacker.prototype.unpack_double = function() {
    var h32 = this.unpack_uint32();
    var l32 = this.unpack_uint32();
    var sign = h32 >> 31;
    var exp = (h32 >> 20 & 0x7ff) - 1023;
    var hfrac = h32 & 0xfffff | 0x100000;
    var frac = hfrac * Math.pow(2, exp - 20) + l32 * Math.pow(2, exp - 52);
    return (sign === 0 ? 1 : -1) * frac;
};
Unpacker.prototype.read = function(length) {
    var j = this.index;
    if (j + length <= this.length) return this.dataView.subarray(j, j + length);
    else throw new Error("BinaryPackFailure: read index out of range");
};
function Packer() {
    this.bufferBuilder = new BufferBuilder();
}
Packer.prototype.getBuffer = function() {
    return this.bufferBuilder.getBuffer();
};
Packer.prototype.pack = function(value) {
    var type = typeof value;
    if (type === "string") this.pack_string(value);
    else if (type === "number") {
        if (Math.floor(value) === value) this.pack_integer(value);
        else this.pack_double(value);
    } else if (type === "boolean") {
        if (value === true) this.bufferBuilder.append(0xc3);
        else if (value === false) this.bufferBuilder.append(0xc2);
    } else if (type === "undefined") this.bufferBuilder.append(0xc0);
    else if (type === "object") {
        if (value === null) this.bufferBuilder.append(0xc0);
        else {
            var constructor = value.constructor;
            if (constructor == Array) this.pack_array(value);
            else if (constructor == Blob || constructor == File || value instanceof Blob || value instanceof File) this.pack_bin(value);
            else if (constructor == ArrayBuffer) {
                if (binaryFeatures.useArrayBufferView) this.pack_bin(new Uint8Array(value));
                else this.pack_bin(value);
            } else if ("BYTES_PER_ELEMENT" in value) {
                if (binaryFeatures.useArrayBufferView) this.pack_bin(new Uint8Array(value.buffer));
                else this.pack_bin(value.buffer);
            } else if (constructor == Object || constructor.toString().startsWith("class")) this.pack_object(value);
            else if (constructor == Date) this.pack_string(value.toString());
            else if (typeof value.toBinaryPack === "function") this.bufferBuilder.append(value.toBinaryPack());
            else throw new Error('Type "' + constructor.toString() + '" not yet supported');
        }
    } else throw new Error('Type "' + type + '" not yet supported');
    this.bufferBuilder.flush();
};
Packer.prototype.pack_bin = function(blob) {
    var length = blob.length || blob.byteLength || blob.size;
    if (length <= 0x0f) this.pack_uint8(0xa0 + length);
    else if (length <= 0xffff) {
        this.bufferBuilder.append(0xda);
        this.pack_uint16(length);
    } else if (length <= 0xffffffff) {
        this.bufferBuilder.append(0xdb);
        this.pack_uint32(length);
    } else throw new Error("Invalid length");
    this.bufferBuilder.append(blob);
};
Packer.prototype.pack_string = function(str) {
    var length = utf8Length(str);
    if (length <= 0x0f) this.pack_uint8(0xb0 + length);
    else if (length <= 0xffff) {
        this.bufferBuilder.append(0xd8);
        this.pack_uint16(length);
    } else if (length <= 0xffffffff) {
        this.bufferBuilder.append(0xd9);
        this.pack_uint32(length);
    } else throw new Error("Invalid length");
    this.bufferBuilder.append(str);
};
Packer.prototype.pack_array = function(ary) {
    var length = ary.length;
    if (length <= 0x0f) this.pack_uint8(0x90 + length);
    else if (length <= 0xffff) {
        this.bufferBuilder.append(0xdc);
        this.pack_uint16(length);
    } else if (length <= 0xffffffff) {
        this.bufferBuilder.append(0xdd);
        this.pack_uint32(length);
    } else throw new Error("Invalid length");
    for(var i = 0; i < length; i++)this.pack(ary[i]);
};
Packer.prototype.pack_integer = function(num) {
    if (num >= -32 && num <= 0x7f) this.bufferBuilder.append(num & 0xff);
    else if (num >= 0x00 && num <= 0xff) {
        this.bufferBuilder.append(0xcc);
        this.pack_uint8(num);
    } else if (num >= -128 && num <= 0x7f) {
        this.bufferBuilder.append(0xd0);
        this.pack_int8(num);
    } else if (num >= 0x0000 && num <= 0xffff) {
        this.bufferBuilder.append(0xcd);
        this.pack_uint16(num);
    } else if (num >= -32768 && num <= 0x7fff) {
        this.bufferBuilder.append(0xd1);
        this.pack_int16(num);
    } else if (num >= 0x00000000 && num <= 0xffffffff) {
        this.bufferBuilder.append(0xce);
        this.pack_uint32(num);
    } else if (num >= -2147483648 && num <= 0x7fffffff) {
        this.bufferBuilder.append(0xd2);
        this.pack_int32(num);
    } else if (num >= -9223372036854776000 && num <= 0x7FFFFFFFFFFFFFFF) {
        this.bufferBuilder.append(0xd3);
        this.pack_int64(num);
    } else if (num >= 0x0000000000000000 && num <= 0xFFFFFFFFFFFFFFFF) {
        this.bufferBuilder.append(0xcf);
        this.pack_uint64(num);
    } else throw new Error("Invalid integer");
};
Packer.prototype.pack_double = function(num) {
    var sign = 0;
    if (num < 0) {
        sign = 1;
        num = -num;
    }
    var exp = Math.floor(Math.log(num) / Math.LN2);
    var frac0 = num / Math.pow(2, exp) - 1;
    var frac1 = Math.floor(frac0 * Math.pow(2, 52));
    var b32 = Math.pow(2, 32);
    var h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 0x0fffff;
    var l32 = frac1 % b32;
    this.bufferBuilder.append(0xcb);
    this.pack_int32(h32);
    this.pack_int32(l32);
};
Packer.prototype.pack_object = function(obj) {
    var keys = Object.keys(obj);
    var length = keys.length;
    if (length <= 0x0f) this.pack_uint8(0x80 + length);
    else if (length <= 0xffff) {
        this.bufferBuilder.append(0xde);
        this.pack_uint16(length);
    } else if (length <= 0xffffffff) {
        this.bufferBuilder.append(0xdf);
        this.pack_uint32(length);
    } else throw new Error("Invalid length");
    for(var prop in obj)if (obj.hasOwnProperty(prop)) {
        this.pack(prop);
        this.pack(obj[prop]);
    }
};
Packer.prototype.pack_uint8 = function(num) {
    this.bufferBuilder.append(num);
};
Packer.prototype.pack_uint16 = function(num) {
    this.bufferBuilder.append(num >> 8);
    this.bufferBuilder.append(num & 0xff);
};
Packer.prototype.pack_uint32 = function(num) {
    var n = num & 0xffffffff;
    this.bufferBuilder.append((n & 0xff000000) >>> 24);
    this.bufferBuilder.append((n & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((n & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(n & 0x000000ff);
};
Packer.prototype.pack_uint64 = function(num) {
    var high = num / Math.pow(2, 32);
    var low = num % Math.pow(2, 32);
    this.bufferBuilder.append((high & 0xff000000) >>> 24);
    this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(high & 0x000000ff);
    this.bufferBuilder.append((low & 0xff000000) >>> 24);
    this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(low & 0x000000ff);
};
Packer.prototype.pack_int8 = function(num) {
    this.bufferBuilder.append(num & 0xff);
};
Packer.prototype.pack_int16 = function(num) {
    this.bufferBuilder.append((num & 0xff00) >> 8);
    this.bufferBuilder.append(num & 0xff);
};
Packer.prototype.pack_int32 = function(num) {
    this.bufferBuilder.append(num >>> 24 & 0xff);
    this.bufferBuilder.append((num & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((num & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(num & 0x000000ff);
};
Packer.prototype.pack_int64 = function(num) {
    var high = Math.floor(num / Math.pow(2, 32));
    var low = num % Math.pow(2, 32);
    this.bufferBuilder.append((high & 0xff000000) >>> 24);
    this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(high & 0x000000ff);
    this.bufferBuilder.append((low & 0xff000000) >>> 24);
    this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
    this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
    this.bufferBuilder.append(low & 0x000000ff);
};
function _utf8Replace(m) {
    var code = m.charCodeAt(0);
    if (code <= 0x7ff) return "00";
    if (code <= 0xffff) return "000";
    if (code <= 0x1fffff) return "0000";
    if (code <= 0x3ffffff) return "00000";
    return "000000";
}
function utf8Length(str) {
    if (str.length > 600) // Blob method faster for large strings
    return new Blob([
        str
    ]).size;
    else return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
}

},{"./bufferbuilder":"8zWyk"}],"8zWyk":[function(require,module,exports) {
var binaryFeatures = {};
binaryFeatures.useBlobBuilder = function() {
    try {
        new Blob([]);
        return false;
    } catch (e) {
        return true;
    }
}();
binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && function() {
    try {
        return new Blob([
            new Uint8Array([])
        ]).size === 0;
    } catch (e) {
        return true;
    }
}();
module.exports.binaryFeatures = binaryFeatures;
var BlobBuilder = module.exports.BlobBuilder;
if (typeof window !== "undefined") BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
function BufferBuilder() {
    this._pieces = [];
    this._parts = [];
}
BufferBuilder.prototype.append = function(data) {
    if (typeof data === "number") this._pieces.push(data);
    else {
        this.flush();
        this._parts.push(data);
    }
};
BufferBuilder.prototype.flush = function() {
    if (this._pieces.length > 0) {
        var buf = new Uint8Array(this._pieces);
        if (!binaryFeatures.useArrayBufferView) buf = buf.buffer;
        this._parts.push(buf);
        this._pieces = [];
    }
};
BufferBuilder.prototype.getBuffer = function() {
    this.flush();
    if (binaryFeatures.useBlobBuilder) {
        var builder = new BlobBuilder();
        for(var i = 0, ii = this._parts.length; i < ii; i++)builder.append(this._parts[i]);
        return builder.getBlob();
    } else return new Blob(this._parts);
};
module.exports.BufferBuilder = BufferBuilder;

},{}],"btsHR":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adapterFactoryJs = require("./adapter_factory.js");
"use strict";
const adapter = (0, _adapterFactoryJs.adapterFactory)({
    window: typeof window === "undefined" ? undefined : window
});
exports.default = adapter;

},{"./adapter_factory.js":"3G4vz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3G4vz":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Shimming starts here.
parcelHelpers.export(exports, "adapterFactory", ()=>adapterFactory);
var _utils = require("./utils");
// Browser shims.
var _chromeShim = require("./chrome/chrome_shim");
var _edgeShim = require("./edge/edge_shim");
var _firefoxShim = require("./firefox/firefox_shim");
var _safariShim = require("./safari/safari_shim");
var _commonShim = require("./common_shim");
function adapterFactory({ window  } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
}) {
    // Utils.
    const logging = _utils.log;
    const browserDetails = _utils.detectBrowser(window);
    const adapter = {
        browserDetails,
        commonShim: _commonShim,
        extractVersion: _utils.extractVersion,
        disableLog: _utils.disableLog,
        disableWarnings: _utils.disableWarnings
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case "chrome":
            if (!_chromeShim || !_chromeShim.shimPeerConnection || !options.shimChrome) {
                logging("Chrome shim is not included in this adapter release.");
                return adapter;
            }
            if (browserDetails.version === null) {
                logging("Chrome shim can not determine version, not shimming.");
                return adapter;
            }
            logging("adapter.js shimming chrome.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _chromeShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _chromeShim.shimGetUserMedia(window, browserDetails);
            _chromeShim.shimMediaStream(window, browserDetails);
            _chromeShim.shimPeerConnection(window, browserDetails);
            _chromeShim.shimOnTrack(window, browserDetails);
            _chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
            _chromeShim.shimGetSendersWithDtmf(window, browserDetails);
            _chromeShim.shimGetStats(window, browserDetails);
            _chromeShim.shimSenderReceiverGetStats(window, browserDetails);
            _chromeShim.fixNegotiationNeeded(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        case "firefox":
            if (!_firefoxShim || !_firefoxShim.shimPeerConnection || !options.shimFirefox) {
                logging("Firefox shim is not included in this adapter release.");
                return adapter;
            }
            logging("adapter.js shimming firefox.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _firefoxShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _firefoxShim.shimGetUserMedia(window, browserDetails);
            _firefoxShim.shimPeerConnection(window, browserDetails);
            _firefoxShim.shimOnTrack(window, browserDetails);
            _firefoxShim.shimRemoveStream(window, browserDetails);
            _firefoxShim.shimSenderGetStats(window, browserDetails);
            _firefoxShim.shimReceiverGetStats(window, browserDetails);
            _firefoxShim.shimRTCDataChannel(window, browserDetails);
            _firefoxShim.shimAddTransceiver(window, browserDetails);
            _firefoxShim.shimGetParameters(window, browserDetails);
            _firefoxShim.shimCreateOffer(window, browserDetails);
            _firefoxShim.shimCreateAnswer(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            break;
        case "edge":
            if (!_edgeShim || !_edgeShim.shimPeerConnection || !options.shimEdge) {
                logging("MS edge shim is not included in this adapter release.");
                return adapter;
            }
            logging("adapter.js shimming edge.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _edgeShim;
            _edgeShim.shimGetUserMedia(window, browserDetails);
            _edgeShim.shimGetDisplayMedia(window, browserDetails);
            _edgeShim.shimPeerConnection(window, browserDetails);
            _edgeShim.shimReplaceTrack(window, browserDetails);
            // the edge shim implements the full RTCIceCandidate object.
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            break;
        case "safari":
            if (!_safariShim || !options.shimSafari) {
                logging("Safari shim is not included in this adapter release.");
                return adapter;
            }
            logging("adapter.js shimming safari.");
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _safariShim;
            // Must be called before shimCallbackAPI.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _safariShim.shimRTCIceServerUrls(window, browserDetails);
            _safariShim.shimCreateOfferLegacy(window, browserDetails);
            _safariShim.shimCallbacksAPI(window, browserDetails);
            _safariShim.shimLocalStreamsAPI(window, browserDetails);
            _safariShim.shimRemoteStreamsAPI(window, browserDetails);
            _safariShim.shimTrackEventTransceiver(window, browserDetails);
            _safariShim.shimGetUserMedia(window, browserDetails);
            _safariShim.shimAudioContext(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        default:
            logging("Unsupported browser!");
            break;
    }
    return adapter;
}

},{"./utils":"9QTnM","./chrome/chrome_shim":"jGyPS","./edge/edge_shim":"f4BxP","./firefox/firefox_shim":"4WnAE","./safari/safari_shim":"comwI","./common_shim":"lYiQ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QTnM":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */ parcelHelpers.export(exports, "extractVersion", ()=>extractVersion);
// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
parcelHelpers.export(exports, "wrapPeerConnectionEvent", ()=>wrapPeerConnectionEvent);
parcelHelpers.export(exports, "disableLog", ()=>disableLog);
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */ parcelHelpers.export(exports, "disableWarnings", ()=>disableWarnings);
parcelHelpers.export(exports, "log", ()=>log);
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */ parcelHelpers.export(exports, "deprecated", ()=>deprecated);
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */ parcelHelpers.export(exports, "detectBrowser", ()=>detectBrowser);
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */ parcelHelpers.export(exports, "compactObject", ()=>compactObject);
/* iterates the stats graph recursively. */ parcelHelpers.export(exports, "walkStats", ()=>walkStats);
/* filter getStats for a sender/receiver track. */ parcelHelpers.export(exports, "filterStats", ()=>filterStats);
"use strict";
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) return;
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) cb.handleEvent(modifiedEvent);
                else cb(modifiedEvent);
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) this._eventMap[eventNameToWrap] = new Map();
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) return nativeRemoveEventListener.apply(this, arguments);
        if (!this._eventMap[eventNameToWrap].has(cb)) return nativeRemoveEventListener.apply(this, arguments);
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) delete this._eventMap[eventNameToWrap];
        if (Object.keys(this._eventMap).length === 0) delete this._eventMap;
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, "on" + eventNameToWrap, {
        get () {
            return this["_on" + eventNameToWrap];
        },
        set (cb) {
            if (this["_on" + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this["_on" + eventNameToWrap]);
                delete this["_on" + eventNameToWrap];
            }
            if (cb) this.addEventListener(eventNameToWrap, this["_on" + eventNameToWrap] = cb);
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== "boolean") return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    logDisabled_ = bool;
    return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
}
function disableWarnings(bool) {
    if (typeof bool !== "boolean") return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    deprecationWarnings_ = !bool;
    return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
}
function log() {
    if (typeof window === "object") {
        if (logDisabled_) return;
        if (typeof console !== "undefined" && typeof console.log === "function") console.log.apply(console, arguments);
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) return;
    console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === "undefined" || !window1.navigator) {
        result.browser = "Not a browser.";
        return result;
    }
    const { navigator  } = window1;
    if (navigator.mozGetUserMedia) {
        result.browser = "firefox";
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection && !window1.RTCIceGatherer) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = "chrome";
        result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
        result.browser = "edge";
        result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = "safari";
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && "currentDirection" in window1.RTCRtpTransceiver.prototype;
    } else {
        result.browser = "Not a supported browser.";
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
}
function compactObject(data) {
    if (!isObject(data)) return data;
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) return accumulator;
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) return;
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith("Id")) walkStats(stats, stats.get(base[name]), resultSet);
        else if (name.endsWith("Ids")) base[name].forEach((id)=>{
            walkStats(stats, stats.get(id), resultSet);
        });
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
    const filteredResult = new Map();
    if (track === null) return filteredResult;
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === "track" && value.trackIdentifier === track.id) trackStats.push(value);
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
        });
    });
    return filteredResult;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGyPS":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimMediaStream", ()=>shimMediaStream);
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimGetSendersWithDtmf", ()=>shimGetSendersWithDtmf);
parcelHelpers.export(exports, "shimGetStats", ()=>shimGetStats);
parcelHelpers.export(exports, "shimSenderReceiverGetStats", ()=>shimSenderReceiverGetStats);
parcelHelpers.export(exports, "shimAddTrackRemoveTrackWithNative", ()=>shimAddTrackRemoveTrackWithNative);
parcelHelpers.export(exports, "shimAddTrackRemoveTrack", ()=>shimAddTrackRemoveTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
// Attempt to fix ONN in plan-b mode.
parcelHelpers.export(exports, "fixNegotiationNeeded", ()=>fixNegotiationNeeded);
var _utilsJs = require("../utils.js");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
"use strict";
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === "object" && window.RTCPeerConnection && !("ontrack" in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) this.removeEventListener("track", this._ontrack);
                this.addEventListener("track", this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener("addtrack", (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        else receiver = {
                            track: te.track
                        };
                        const event = new Event("track");
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        else receiver = {
                            track
                        };
                        const event = new Event("track");
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener("addstream", this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utilsJs.wrapPeerConnectionEvent(window, "track", (e)=>{
        if (!e.transceiver) Object.defineProperty(e, "transceiver", {
            value: {
                receiver: e.receiver
            }
        });
        return e;
    });
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === "object" && window.RTCPeerConnection && !("getSenders" in window.RTCPeerConnection.prototype) && "createDTMFSender" in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === "audio") this._dtmf = pc.createDTMFSender(track);
                        else this._dtmf = null;
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) this._senders.splice(idx, 1);
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) this._senders.splice(this._senders.indexOf(sender), 1);
            });
        };
    } else if (typeof window === "object" && window.RTCPeerConnection && "getSenders" in window.RTCPeerConnection.prototype && "createDTMFSender" in window.RTCPeerConnection.prototype && window.RTCRtpSender && !("dtmf" in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === "audio") this._dtmf = this._pc.createDTMFSender(this.track);
                    else this._dtmf = null;
                }
                return this._dtmf;
            }
        });
    }
}
function shimGetStats(window) {
    if (!window.RTCPeerConnection) return;
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        // If selector is a function then we are in the old style stats so just
        // pass back the original getStats format to avoid breaking old users.
        if (arguments.length > 0 && typeof selector === "function") return origGetStats.apply(this, arguments);
        // When spec-style getStats is supported, return those when called with
        // either no arguments or the selector argument is null.
        if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== "function")) return origGetStats.apply(this, []);
        const fixChromeStats_ = function(response) {
            const standardReport = {};
            const reports = response.result();
            reports.forEach((report)=>{
                const standardStats = {
                    id: report.id,
                    timestamp: report.timestamp,
                    type: {
                        localcandidate: "local-candidate",
                        remotecandidate: "remote-candidate"
                    }[report.type] || report.type
                };
                report.names().forEach((name)=>{
                    standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
            });
            return standardReport;
        };
        // shim getStats with maplike support
        const makeMapStats = function(stats) {
            return new Map(Object.keys(stats).map((key)=>[
                    key,
                    stats[key]
                ]));
        };
        if (arguments.length >= 2) {
            const successCallbackWrapper_ = function(response) {
                onSucc(makeMapStats(fixChromeStats_(response)));
            };
            return origGetStats.apply(this, [
                successCallbackWrapper_,
                selector
            ]);
        }
        // promise-support
        return new Promise((resolve, reject)=>{
            origGetStats.apply(this, [
                function(response) {
                    resolve(makeMapStats(fixChromeStats_(response)));
                },
                reject
            ]);
        }).then(onSucc, onErr);
    };
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) return;
    // shim sender stats.
    if (!("getStats" in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ _utilsJs.filterStats(result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!("getStats" in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
        _utilsJs.wrapPeerConnectionEvent(window, "track", (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>_utilsJs.filterStats(result, receiver.track, false));
        };
    }
    if (!("getStats" in window.RTCRtpSender.prototype && "getStats" in window.RTCRtpReceiver.prototype)) return;
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) err = true;
                    else sender = s;
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) err = true;
                    else receiver = r;
                }
                return r.track === track;
            });
            if (err || sender && receiver) return Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError"));
            else if (sender) return sender.getStats();
            else if (receiver) return receiver.getStats();
            return Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) return origAddTrack.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [
            stream,
            sender
        ];
        else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) this._shimmedLocalStreams[stream.id].push(sender);
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
            const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
            if (idx !== -1) this._shimmedLocalStreams[streamId].splice(idx, 1);
            if (this._shimmedLocalStreams[streamId].length === 1) delete this._shimmedLocalStreams[streamId];
        });
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) return shimAddTrackRemoveTrackWithNative(window);
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event("negotiationneeded"));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, "g"), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, "g"), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        "createOffer",
        "createAnswer"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === "function";
                if (isLegacyCall) return nativeMethod.apply(this, [
                    (description)=>{
                        const desc = replaceInternalStreamId(this, description);
                        args[0].apply(null, [
                            desc
                        ]);
                    },
                    (err)=>{
                        if (args[1]) args[1].apply(null, err);
                    },
                    arguments[2]
                ]);
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(this, arguments);
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(window.RTCPeerConnection.prototype, "localDescription", {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === "") return description;
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === "closed") throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
        const isLocal = sender._pc === this;
        if (!isLocal) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) stream = this._streams[streamid];
        });
        if (stream) {
            if (stream.getTracks().length === 1) // if this is the last track of the stream, remove the stream. This
            // takes care of any shimmed _senders.
            this.removeStream(this._reverseStreams[stream.id]);
            else // relying on the same odd chrome behaviour as above.
            stream.removeTrack(sender.track);
            this.dispatchEvent(new Event("negotiationneeded"));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
    if (!window.RTCPeerConnection) return;
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === "addIceCandidate" ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
}
function fixNegotiationNeeded(window, browserDetails) {
    _utilsJs.wrapPeerConnectionEvent(window, "negotiationneeded", (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === "plan-b") {
            if (pc.signalingState !== "stable") return;
        }
        return e;
    });
}

},{"../utils.js":"9QTnM","./getusermedia":"3Feo1","./getdisplaymedia":"kMeXs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Feo1":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utilsJs = require("../utils.js");
"use strict";
const logging = _utilsJs.log;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) return;
    const constraintsToChrome_ = function(c) {
        if (typeof c !== "object" || c.mandatory || c.optional) return c;
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === "require" || key === "advanced" || key === "mediaSource") return;
            const r = typeof c[key] === "object" ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === "number") r.min = r.max = r.exact;
            const oldname_ = function(prefix, name) {
                if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                return name === "deviceId" ? "sourceId" : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === "number") {
                    oc[oldname_("min", key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_("max", key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_("", key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== "number") {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_("", key)] = r.exact;
            } else [
                "min",
                "max"
            ].forEach((mix)=>{
                if (r[mix] !== undefined) {
                    cc.mandatory = cc.mandatory || {};
                    cc.mandatory[oldname_(mix, key)] = r[mix];
                }
            });
        });
        if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) return func(constraints);
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === "object") {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, "autoGainControl", "googAutoGainControl");
            remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === "object") {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === "object" ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === "user" || face.exact === "environment" || face.ideal === "user" || face.ideal === "environment") && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === "environment" || face.ideal === "environment") matches = [
                    "back",
                    "rear"
                ];
                else if (face.exact === "user" || face.ideal === "user") matches = [
                    "front"
                ];
                if (matches) // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                    devices = devices.filter((d)=>d.kind === "videoinput");
                    let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                    if (!dev && devices.length && matches.includes("back")) dev = devices[devices.length - 1]; // more likely the back cam
                    if (dev) constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                    } : {
                        ideal: dev.deviceId
                    };
                    constraints.video = constraintsToChrome_(constraints.video);
                    logging("chrome: " + JSON.stringify(constraints));
                    return func(constraints);
                });
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging("chrome: " + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) return e;
        return {
            name: ({
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ": ") + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) onError(shimError_(e));
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException("", "NotFoundError");
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}

},{"../utils.js":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMeXs":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
"use strict";
function shimGetDisplayMedia(window, getSourceId) {
    if (window.navigator.mediaDevices && "getDisplayMedia" in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== "function") {
        console.error("shimGetDisplayMedia: getSourceId argument is not a function");
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        return getSourceId(constraints).then((sourceId)=>{
            const widthSpecified = constraints.video && constraints.video.width;
            const heightSpecified = constraints.video && constraints.video.height;
            const frameRateSpecified = constraints.video && constraints.video.frameRate;
            constraints.video = {
                mandatory: {
                    chromeMediaSource: "desktop",
                    chromeMediaSourceId: sourceId,
                    maxFrameRate: frameRateSpecified || 3
                }
            };
            if (widthSpecified) constraints.video.mandatory.maxWidth = widthSpecified;
            if (heightSpecified) constraints.video.mandatory.maxHeight = heightSpecified;
            return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4BxP":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
parcelHelpers.export(exports, "shimReplaceTrack", ()=>shimReplaceTrack);
var _utils = require("../utils");
var _filtericeservers = require("./filtericeservers");
var _rtcpeerconnectionShim = require("rtcpeerconnection-shim");
var _rtcpeerconnectionShimDefault = parcelHelpers.interopDefault(_rtcpeerconnectionShim);
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
"use strict";
function shimPeerConnection(window, browserDetails) {
    if (window.RTCIceGatherer) {
        if (!window.RTCIceCandidate) window.RTCIceCandidate = function RTCIceCandidate(args) {
            return args;
        };
        if (!window.RTCSessionDescription) window.RTCSessionDescription = function RTCSessionDescription(args) {
            return args;
        };
        // this adds an additional event listener to MediaStrackTrack that signals
        // when a tracks enabled property was changed. Workaround for a bug in
        // addStream, see below. No longer required in 15025+
        if (browserDetails.version < 15025) {
            const origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, "enabled");
            Object.defineProperty(window.MediaStreamTrack.prototype, "enabled", {
                set (value) {
                    origMSTEnabled.set.call(this, value);
                    const ev = new Event("enabled");
                    ev.enabled = value;
                    this.dispatchEvent(ev);
                }
            });
        }
    }
    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !("dtmf" in window.RTCRtpSender.prototype)) Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
        get () {
            if (this._dtmf === undefined) {
                if (this.track.kind === "audio") this._dtmf = new window.RTCDtmfSender(this);
                else if (this.track.kind === "video") this._dtmf = null;
            }
            return this._dtmf;
        }
    });
    // Edge currently only implements the RTCDtmfSender, not the
    // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
    if (window.RTCDtmfSender && !window.RTCDTMFSender) window.RTCDTMFSender = window.RTCDtmfSender;
    const RTCPeerConnectionShim = (0, _rtcpeerconnectionShimDefault.default)(window, browserDetails.version);
    window.RTCPeerConnection = function RTCPeerConnection(config) {
        if (config && config.iceServers) {
            config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
            _utils.log("ICE servers after filtering:", config.iceServers);
        }
        return new RTCPeerConnectionShim(config);
    };
    window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}
function shimReplaceTrack(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender && !("replaceTrack" in window.RTCRtpSender.prototype)) window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
}

},{"../utils":"9QTnM","./filtericeservers":"hStmb","rtcpeerconnection-shim":"8W4DW","./getusermedia":"2JCji","./getdisplaymedia":"f4q1u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hStmb":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
parcelHelpers.export(exports, "filterIceServers", ()=>filterIceServers);
var _utils = require("../utils");
"use strict";
function filterIceServers(iceServers, edgeVersion) {
    let hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter((server)=>{
        if (server && (server.urls || server.url)) {
            let urls = server.urls || server.url;
            if (server.url && !server.urls) _utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
            const isString = typeof urls === "string";
            if (isString) urls = [
                urls
            ];
            urls = urls.filter((url)=>{
                // filter STUN unconditionally.
                if (url.indexOf("stun:") === 0) return false;
                const validTurn = url.startsWith("turn") && !url.startsWith("turn:[") && url.includes("transport=udp");
                if (validTurn && !hasTurn) {
                    hasTurn = true;
                    return true;
                }
                return validTurn && !hasTurn;
            });
            delete server.url;
            server.urls = isString ? urls[0] : urls;
            return !!urls.length;
        }
    });
}

},{"../utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8W4DW":[function(require,module,exports) {
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ "use strict";
var SDPUtils = require("sdp");
function fixStatsType(stat) {
    return ({
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    })[stat.type] || stat.type;
}
function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
    var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    // Map ICE parameters (ufrag, pwd) to SDP.
    sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
    // Map DTLS parameters to SDP.
    sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === "offer" ? "actpass" : dtlsRole || "active");
    sdp += "a=mid:" + transceiver.mid + "\r\n";
    if (transceiver.rtpSender && transceiver.rtpReceiver) sdp += "a=sendrecv\r\n";
    else if (transceiver.rtpSender) sdp += "a=sendonly\r\n";
    else if (transceiver.rtpReceiver) sdp += "a=recvonly\r\n";
    else sdp += "a=inactive\r\n";
    if (transceiver.rtpSender) {
        var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
        transceiver.rtpSender._initialTrackId = trackId;
        // spec.
        var msid = "msid:" + (stream ? stream.id : "-") + " " + trackId + "\r\n";
        sdp += "a=" + msid;
        // for Chrome. Legacy should no longer be required.
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
        // RTX
        if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
            sdp += "a=ssrc-group:FID " + transceiver.sendEncodingParameters[0].ssrc + " " + transceiver.sendEncodingParameters[0].rtx.ssrc + "\r\n";
        }
    }
    // FIXME: this should be written by writeRtpDescription.
    sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    return sdp;
}
// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
    var hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter(function(server) {
        if (server && (server.urls || server.url)) {
            var urls = server.urls || server.url;
            if (server.url && !server.urls) console.warn("RTCIceServer.url is deprecated! Use urls instead.");
            var isString = typeof urls === "string";
            if (isString) urls = [
                urls
            ];
            urls = urls.filter(function(url) {
                var validTurn = url.indexOf("turn:") === 0 && url.indexOf("transport=udp") !== -1 && url.indexOf("turn:[") === -1 && !hasTurn;
                if (validTurn) {
                    hasTurn = true;
                    return true;
                }
                return url.indexOf("stun:") === 0 && edgeVersion >= 14393 && url.indexOf("?transport=udp") === -1;
            });
            delete server.url;
            server.urls = isString ? urls[0] : urls;
            return !!urls.length;
        }
    });
}
// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
    var commonCapabilities = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
    };
    var findCodecByPayloadType = function(pt, codecs) {
        pt = parseInt(pt, 10);
        for(var i = 0; i < codecs.length; i++){
            if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) return codecs[i];
        }
    };
    var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
        var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
        var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
        return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
    };
    localCapabilities.codecs.forEach(function(lCodec) {
        for(var i = 0; i < remoteCapabilities.codecs.length; i++){
            var rCodec = remoteCapabilities.codecs[i];
            if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
                if (lCodec.name.toLowerCase() === "rtx" && lCodec.parameters && rCodec.parameters.apt) {
                    // for RTX we need to find the local rtx that has a apt
                    // which points to the same local codec as the remote one.
                    if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) continue;
                }
                rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
                // number of channels is the highest common number of channels
                rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
                // push rCodec so we reply with offerer payload type
                commonCapabilities.codecs.push(rCodec);
                // determine common feedback mechanisms
                rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
                    for(var j = 0; j < lCodec.rtcpFeedback.length; j++){
                        if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) return true;
                    }
                    return false;
                });
                break;
            }
        }
    });
    localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
        for(var i = 0; i < remoteCapabilities.headerExtensions.length; i++){
            var rHeaderExtension = remoteCapabilities.headerExtensions[i];
            if (lHeaderExtension.uri === rHeaderExtension.uri) {
                commonCapabilities.headerExtensions.push(rHeaderExtension);
                break;
            }
        }
    });
    // FIXME: fecMechanisms
    return commonCapabilities;
}
// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
    return ({
        offer: {
            setLocalDescription: [
                "stable",
                "have-local-offer"
            ],
            setRemoteDescription: [
                "stable",
                "have-remote-offer"
            ]
        },
        answer: {
            setLocalDescription: [
                "have-remote-offer",
                "have-local-pranswer"
            ],
            setRemoteDescription: [
                "have-local-offer",
                "have-remote-pranswer"
            ]
        }
    })[type][action].indexOf(signalingState) !== -1;
}
function maybeAddCandidate(iceTransport, candidate) {
    // Edge's internal representation adds some fields therefore
    // not all fieldѕ are taken into account.
    var alreadyAdded = iceTransport.getRemoteCandidates().find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
    });
    if (!alreadyAdded) iceTransport.addRemoteCandidate(candidate);
    return !alreadyAdded;
}
function makeError(name, description) {
    var e = new Error(description);
    e.name = name;
    // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
    e.code = ({
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: undefined,
        OperationError: undefined
    })[name];
    return e;
}
module.exports = function(window, edgeVersion) {
    // https://w3c.github.io/mediacapture-main/#mediastream
    // Helper function to add the track to the stream and
    // dispatch the event ourselves.
    function addTrackToStreamAndFireEvent(track, stream) {
        stream.addTrack(track);
        stream.dispatchEvent(new window.MediaStreamTrackEvent("addtrack", {
            track: track
        }));
    }
    function removeTrackFromStreamAndFireEvent(track, stream) {
        stream.removeTrack(track);
        stream.dispatchEvent(new window.MediaStreamTrackEvent("removetrack", {
            track: track
        }));
    }
    function fireAddTrack(pc, track, receiver, streams) {
        var trackEvent = new Event("track");
        trackEvent.track = track;
        trackEvent.receiver = receiver;
        trackEvent.transceiver = {
            receiver: receiver
        };
        trackEvent.streams = streams;
        window.setTimeout(function() {
            pc._dispatchEvent("track", trackEvent);
        });
    }
    var RTCPeerConnection = function(config) {
        var pc = this;
        var _eventTarget = document.createDocumentFragment();
        [
            "addEventListener",
            "removeEventListener",
            "dispatchEvent"
        ].forEach(function(method) {
            pc[method] = _eventTarget[method].bind(_eventTarget);
        });
        this.canTrickleIceCandidates = null;
        this.needNegotiation = false;
        this.localStreams = [];
        this.remoteStreams = [];
        this._localDescription = null;
        this._remoteDescription = null;
        this.signalingState = "stable";
        this.iceConnectionState = "new";
        this.connectionState = "new";
        this.iceGatheringState = "new";
        config = JSON.parse(JSON.stringify(config || {}));
        this.usingBundle = config.bundlePolicy === "max-bundle";
        if (config.rtcpMuxPolicy === "negotiate") throw makeError("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
        else if (!config.rtcpMuxPolicy) config.rtcpMuxPolicy = "require";
        switch(config.iceTransportPolicy){
            case "all":
            case "relay":
                break;
            default:
                config.iceTransportPolicy = "all";
                break;
        }
        switch(config.bundlePolicy){
            case "balanced":
            case "max-compat":
            case "max-bundle":
                break;
            default:
                config.bundlePolicy = "balanced";
                break;
        }
        config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
        this._iceGatherers = [];
        if (config.iceCandidatePoolSize) for(var i = config.iceCandidatePoolSize; i > 0; i--)this._iceGatherers.push(new window.RTCIceGatherer({
            iceServers: config.iceServers,
            gatherPolicy: config.iceTransportPolicy
        }));
        else config.iceCandidatePoolSize = 0;
        this._config = config;
        // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
        // everything that is needed to describe a SDP m-line.
        this.transceivers = [];
        this._sdpSessionId = SDPUtils.generateSessionId();
        this._sdpSessionVersion = 0;
        this._dtlsRole = undefined; // role for a=setup to use in answers.
        this._isClosed = false;
    };
    Object.defineProperty(RTCPeerConnection.prototype, "localDescription", {
        configurable: true,
        get: function() {
            return this._localDescription;
        }
    });
    Object.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {
        configurable: true,
        get: function() {
            return this._remoteDescription;
        }
    });
    // set up event handlers on prototype
    RTCPeerConnection.prototype.onicecandidate = null;
    RTCPeerConnection.prototype.onaddstream = null;
    RTCPeerConnection.prototype.ontrack = null;
    RTCPeerConnection.prototype.onremovestream = null;
    RTCPeerConnection.prototype.onsignalingstatechange = null;
    RTCPeerConnection.prototype.oniceconnectionstatechange = null;
    RTCPeerConnection.prototype.onconnectionstatechange = null;
    RTCPeerConnection.prototype.onicegatheringstatechange = null;
    RTCPeerConnection.prototype.onnegotiationneeded = null;
    RTCPeerConnection.prototype.ondatachannel = null;
    RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
        if (this._isClosed) return;
        this.dispatchEvent(event);
        if (typeof this["on" + name] === "function") this["on" + name](event);
    };
    RTCPeerConnection.prototype._emitGatheringStateChange = function() {
        var event = new Event("icegatheringstatechange");
        this._dispatchEvent("icegatheringstatechange", event);
    };
    RTCPeerConnection.prototype.getConfiguration = function() {
        return this._config;
    };
    RTCPeerConnection.prototype.getLocalStreams = function() {
        return this.localStreams;
    };
    RTCPeerConnection.prototype.getRemoteStreams = function() {
        return this.remoteStreams;
    };
    // internal helper to create a transceiver object.
    // (which is not yet the same as the WebRTC 1.0 transceiver)
    RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
        var hasBundleTransport = this.transceivers.length > 0;
        var transceiver = {
            track: null,
            iceGatherer: null,
            iceTransport: null,
            dtlsTransport: null,
            localCapabilities: null,
            remoteCapabilities: null,
            rtpSender: null,
            rtpReceiver: null,
            kind: kind,
            mid: null,
            sendEncodingParameters: null,
            recvEncodingParameters: null,
            stream: null,
            associatedRemoteMediaStreams: [],
            wantReceive: true
        };
        if (this.usingBundle && hasBundleTransport) {
            transceiver.iceTransport = this.transceivers[0].iceTransport;
            transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
        } else {
            var transports = this._createIceAndDtlsTransports();
            transceiver.iceTransport = transports.iceTransport;
            transceiver.dtlsTransport = transports.dtlsTransport;
        }
        if (!doNotAdd) this.transceivers.push(transceiver);
        return transceiver;
    };
    RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (this._isClosed) throw makeError("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
        var alreadyExists = this.transceivers.find(function(s) {
            return s.track === track;
        });
        if (alreadyExists) throw makeError("InvalidAccessError", "Track already exists.");
        var transceiver;
        for(var i = 0; i < this.transceivers.length; i++)if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) transceiver = this.transceivers[i];
        if (!transceiver) transceiver = this._createTransceiver(track.kind);
        this._maybeFireNegotiationNeeded();
        if (this.localStreams.indexOf(stream) === -1) this.localStreams.push(stream);
        transceiver.track = track;
        transceiver.stream = stream;
        transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
        return transceiver.rtpSender;
    };
    RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        if (edgeVersion >= 15025) stream.getTracks().forEach(function(track) {
            pc.addTrack(track, stream);
        });
        else {
            // Clone is necessary for local demos mostly, attaching directly
            // to two different senders does not work (build 10547).
            // Fixed in 15025 (or earlier)
            var clonedStream = stream.clone();
            stream.getTracks().forEach(function(track, idx) {
                var clonedTrack = clonedStream.getTracks()[idx];
                track.addEventListener("enabled", function(event) {
                    clonedTrack.enabled = event.enabled;
                });
            });
            clonedStream.getTracks().forEach(function(track) {
                pc.addTrack(track, clonedStream);
            });
        }
    };
    RTCPeerConnection.prototype.removeTrack = function(sender) {
        if (this._isClosed) throw makeError("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
        if (!(sender instanceof window.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");
        var transceiver = this.transceivers.find(function(t) {
            return t.rtpSender === sender;
        });
        if (!transceiver) throw makeError("InvalidAccessError", "Sender was not created by this connection.");
        var stream = transceiver.stream;
        transceiver.rtpSender.stop();
        transceiver.rtpSender = null;
        transceiver.track = null;
        transceiver.stream = null;
        // remove the stream from the set of local streams
        var localStreams = this.transceivers.map(function(t) {
            return t.stream;
        });
        if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) this.localStreams.splice(this.localStreams.indexOf(stream), 1);
        this._maybeFireNegotiationNeeded();
    };
    RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        stream.getTracks().forEach(function(track) {
            var sender = pc.getSenders().find(function(s) {
                return s.track === track;
            });
            if (sender) pc.removeTrack(sender);
        });
    };
    RTCPeerConnection.prototype.getSenders = function() {
        return this.transceivers.filter(function(transceiver) {
            return !!transceiver.rtpSender;
        }).map(function(transceiver) {
            return transceiver.rtpSender;
        });
    };
    RTCPeerConnection.prototype.getReceivers = function() {
        return this.transceivers.filter(function(transceiver) {
            return !!transceiver.rtpReceiver;
        }).map(function(transceiver) {
            return transceiver.rtpReceiver;
        });
    };
    RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex, usingBundle) {
        var pc = this;
        if (usingBundle && sdpMLineIndex > 0) return this.transceivers[0].iceGatherer;
        else if (this._iceGatherers.length) return this._iceGatherers.shift();
        var iceGatherer = new window.RTCIceGatherer({
            iceServers: this._config.iceServers,
            gatherPolicy: this._config.iceTransportPolicy
        });
        Object.defineProperty(iceGatherer, "state", {
            value: "new",
            writable: true
        });
        this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
        this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
            var end = !event.candidate || Object.keys(event.candidate).length === 0;
            // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            iceGatherer.state = end ? "completed" : "gathering";
            if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
        };
        iceGatherer.addEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
        return iceGatherer;
    };
    // start gathering from an RTCIceGatherer.
    RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
        var pc = this;
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer.onlocalcandidate) return;
        var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
        this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
        iceGatherer.removeEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
        iceGatherer.onlocalcandidate = function(evt) {
            if (pc.usingBundle && sdpMLineIndex > 0) // if we know that we use bundle we can drop candidates with
            // ѕdpMLineIndex > 0. If we don't do this then our state gets
            // confused since we dispose the extra ice gatherer.
            return;
            var event = new Event("icecandidate");
            event.candidate = {
                sdpMid: mid,
                sdpMLineIndex: sdpMLineIndex
            };
            var cand = evt.candidate;
            // Edge emits an empty object for RTCIceCandidateComplete‥
            var end = !cand || Object.keys(cand).length === 0;
            if (end) // polyfill since RTCIceGatherer.state is not implemented in
            // Edge 10547 yet.
            {
                if (iceGatherer.state === "new" || iceGatherer.state === "gathering") iceGatherer.state = "completed";
            } else {
                if (iceGatherer.state === "new") iceGatherer.state = "gathering";
                // RTCIceCandidate doesn't have a component, needs to be added
                cand.component = 1;
                // also the usernameFragment. TODO: update SDP to take both variants.
                cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
                var serializedCandidate = SDPUtils.writeCandidate(cand);
                event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));
                event.candidate.candidate = serializedCandidate;
                event.candidate.toJSON = function() {
                    return {
                        candidate: event.candidate.candidate,
                        sdpMid: event.candidate.sdpMid,
                        sdpMLineIndex: event.candidate.sdpMLineIndex,
                        usernameFragment: event.candidate.usernameFragment
                    };
                };
            }
            // update local description.
            var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
            if (!end) sections[event.candidate.sdpMLineIndex] += "a=" + event.candidate.candidate + "\r\n";
            else sections[event.candidate.sdpMLineIndex] += "a=end-of-candidates\r\n";
            pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join("");
            var complete = pc.transceivers.every(function(transceiver) {
                return transceiver.iceGatherer && transceiver.iceGatherer.state === "completed";
            });
            if (pc.iceGatheringState !== "gathering") {
                pc.iceGatheringState = "gathering";
                pc._emitGatheringStateChange();
            }
            // Emit candidate. Also emit null candidate when all gatherers are
            // complete.
            if (!end) pc._dispatchEvent("icecandidate", event);
            if (complete) {
                pc._dispatchEvent("icecandidate", new Event("icecandidate"));
                pc.iceGatheringState = "complete";
                pc._emitGatheringStateChange();
            }
        };
        // emit already gathered candidates.
        window.setTimeout(function() {
            bufferedCandidateEvents.forEach(function(e) {
                iceGatherer.onlocalcandidate(e);
            });
        }, 0);
    };
    // Create ICE transport and DTLS transport.
    RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
        var pc = this;
        var iceTransport = new window.RTCIceTransport(null);
        iceTransport.onicestatechange = function() {
            pc._updateIceConnectionState();
            pc._updateConnectionState();
        };
        var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
        dtlsTransport.ondtlsstatechange = function() {
            pc._updateConnectionState();
        };
        dtlsTransport.onerror = function() {
            // onerror does not set state to failed by itself.
            Object.defineProperty(dtlsTransport, "state", {
                value: "failed",
                writable: true
            });
            pc._updateConnectionState();
        };
        return {
            iceTransport: iceTransport,
            dtlsTransport: dtlsTransport
        };
    };
    // Destroy ICE gatherer, ICE transport and DTLS transport.
    // Without triggering the callbacks.
    RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(sdpMLineIndex) {
        var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
        if (iceGatherer) {
            delete iceGatherer.onlocalcandidate;
            delete this.transceivers[sdpMLineIndex].iceGatherer;
        }
        var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
        if (iceTransport) {
            delete iceTransport.onicestatechange;
            delete this.transceivers[sdpMLineIndex].iceTransport;
        }
        var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
        if (dtlsTransport) {
            delete dtlsTransport.ondtlsstatechange;
            delete dtlsTransport.onerror;
            delete this.transceivers[sdpMLineIndex].dtlsTransport;
        }
    };
    // Start the RTP Sender and Receiver for a transceiver.
    RTCPeerConnection.prototype._transceive = function(transceiver, send, recv) {
        var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        if (send && transceiver.rtpSender) {
            params.encodings = transceiver.sendEncodingParameters;
            params.rtcp = {
                cname: SDPUtils.localCName,
                compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.recvEncodingParameters.length) params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
            transceiver.rtpSender.send(params);
        }
        if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
            // remove RTX field in Edge 14942
            if (transceiver.kind === "video" && transceiver.recvEncodingParameters && edgeVersion < 15019) transceiver.recvEncodingParameters.forEach(function(p) {
                delete p.rtx;
            });
            if (transceiver.recvEncodingParameters.length) params.encodings = transceiver.recvEncodingParameters;
            else params.encodings = [
                {}
            ];
            params.rtcp = {
                compound: transceiver.rtcpParameters.compound
            };
            if (transceiver.rtcpParameters.cname) params.rtcp.cname = transceiver.rtcpParameters.cname;
            if (transceiver.sendEncodingParameters.length) params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
            transceiver.rtpReceiver.receive(params);
        }
    };
    RTCPeerConnection.prototype.setLocalDescription = function(description) {
        var pc = this;
        // Note: pranswer is not supported.
        if ([
            "offer",
            "answer"
        ].indexOf(description.type) === -1) return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
        if (!isActionAllowedInSignalingState("setLocalDescription", description.type, pc.signalingState) || pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not set local " + description.type + " in state " + pc.signalingState));
        var sections;
        var sessionpart;
        if (description.type === "offer") {
            // VERY limited support for SDP munging. Limited to:
            // * changing the order of codecs
            sections = SDPUtils.splitSections(description.sdp);
            sessionpart = sections.shift();
            sections.forEach(function(mediaSection, sdpMLineIndex) {
                var caps = SDPUtils.parseRtpParameters(mediaSection);
                pc.transceivers[sdpMLineIndex].localCapabilities = caps;
            });
            pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
                pc._gather(transceiver.mid, sdpMLineIndex);
            });
        } else if (description.type === "answer") {
            sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
            sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart, "a=ice-lite").length > 0;
            sections.forEach(function(mediaSection, sdpMLineIndex) {
                var transceiver = pc.transceivers[sdpMLineIndex];
                var iceGatherer = transceiver.iceGatherer;
                var iceTransport = transceiver.iceTransport;
                var dtlsTransport = transceiver.dtlsTransport;
                var localCapabilities = transceiver.localCapabilities;
                var remoteCapabilities = transceiver.remoteCapabilities;
                // treat bundle-only as not-rejected.
                var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, "a=bundle-only").length === 0;
                if (!rejected && !transceiver.rejected) {
                    var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
                    var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
                    if (isIceLite) remoteDtlsParameters.role = "server";
                    if (!pc.usingBundle || sdpMLineIndex === 0) {
                        pc._gather(transceiver.mid, sdpMLineIndex);
                        if (iceTransport.state === "new") iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? "controlling" : "controlled");
                        if (dtlsTransport.state === "new") dtlsTransport.start(remoteDtlsParameters);
                    }
                    // Calculate intersection of capabilities.
                    var params = getCommonCapabilities(localCapabilities, remoteCapabilities);
                    // Start the RTCRtpSender. The RTCRtpReceiver for this
                    // transceiver has already been started in setRemoteDescription.
                    pc._transceive(transceiver, params.codecs.length > 0, false);
                }
            });
        }
        pc._localDescription = {
            type: description.type,
            sdp: description.sdp
        };
        if (description.type === "offer") pc._updateSignalingState("have-local-offer");
        else pc._updateSignalingState("stable");
        return Promise.resolve();
    };
    RTCPeerConnection.prototype.setRemoteDescription = function(description) {
        var pc = this;
        // Note: pranswer is not supported.
        if ([
            "offer",
            "answer"
        ].indexOf(description.type) === -1) return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
        if (!isActionAllowedInSignalingState("setRemoteDescription", description.type, pc.signalingState) || pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not set remote " + description.type + " in state " + pc.signalingState));
        var streams = {};
        pc.remoteStreams.forEach(function(stream) {
            streams[stream.id] = stream;
        });
        var receiverList = [];
        var sections = SDPUtils.splitSections(description.sdp);
        var sessionpart = sections.shift();
        var isIceLite = SDPUtils.matchPrefix(sessionpart, "a=ice-lite").length > 0;
        var usingBundle = SDPUtils.matchPrefix(sessionpart, "a=group:BUNDLE ").length > 0;
        pc.usingBundle = usingBundle;
        var iceOptions = SDPUtils.matchPrefix(sessionpart, "a=ice-options:")[0];
        if (iceOptions) pc.canTrickleIceCandidates = iceOptions.substr(14).split(" ").indexOf("trickle") >= 0;
        else pc.canTrickleIceCandidates = false;
        sections.forEach(function(mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var kind = SDPUtils.getKind(mediaSection);
            // treat bundle-only as not-rejected.
            var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, "a=bundle-only").length === 0;
            var protocol = lines[0].substr(2).split(" ")[2];
            var direction = SDPUtils.getDirection(mediaSection, sessionpart);
            var remoteMsid = SDPUtils.parseMsid(mediaSection);
            var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();
            // Reject datachannels which are not implemented yet.
            if (rejected || kind === "application" && (protocol === "DTLS/SCTP" || protocol === "UDP/DTLS/SCTP")) {
                // TODO: this is dangerous in the case where a non-rejected m-line
                //     becomes rejected.
                pc.transceivers[sdpMLineIndex] = {
                    mid: mid,
                    kind: kind,
                    protocol: protocol,
                    rejected: true
                };
                return;
            }
            if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) // recycle a rejected transceiver.
            pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
            var transceiver;
            var iceGatherer;
            var iceTransport;
            var dtlsTransport;
            var rtpReceiver;
            var sendEncodingParameters;
            var recvEncodingParameters;
            var localCapabilities;
            var track;
            // FIXME: ensure the mediaSection has rtcp-mux set.
            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
            var remoteIceParameters;
            var remoteDtlsParameters;
            if (!rejected) {
                remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
                remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
                remoteDtlsParameters.role = "client";
            }
            recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
            var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
            var isComplete = SDPUtils.matchPrefix(mediaSection, "a=end-of-candidates", sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, "a=candidate:").map(function(cand) {
                return SDPUtils.parseCandidate(cand);
            }).filter(function(cand) {
                return cand.component === 1;
            });
            // Check if we can use BUNDLE and dispose transports.
            if ((description.type === "offer" || description.type === "answer") && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
                pc._disposeIceAndDtlsTransports(sdpMLineIndex);
                pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
                pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
                pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
                if (pc.transceivers[sdpMLineIndex].rtpSender) pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
                if (pc.transceivers[sdpMLineIndex].rtpReceiver) pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
            }
            if (description.type === "offer" && !rejected) {
                transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
                transceiver.mid = mid;
                if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
                if (cands.length && transceiver.iceTransport.state === "new") {
                    if (isComplete && (!usingBundle || sdpMLineIndex === 0)) transceiver.iceTransport.setRemoteCandidates(cands);
                    else cands.forEach(function(candidate) {
                        maybeAddCandidate(transceiver.iceTransport, candidate);
                    });
                }
                localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);
                // filter RTX until additional stuff needed for RTX is implemented
                // in adapter.js
                if (edgeVersion < 15019) localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
                    return codec.name !== "rtx";
                });
                sendEncodingParameters = transceiver.sendEncodingParameters || [
                    {
                        ssrc: (2 * sdpMLineIndex + 2) * 1001
                    }
                ];
                // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
                var isNewTrack = false;
                if (direction === "sendrecv" || direction === "sendonly") {
                    isNewTrack = !transceiver.rtpReceiver;
                    rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
                    if (isNewTrack) {
                        var stream;
                        track = rtpReceiver.track;
                        // FIXME: does not work with Plan B.
                        if (remoteMsid && remoteMsid.stream === "-") ;
                        else if (remoteMsid) {
                            if (!streams[remoteMsid.stream]) {
                                streams[remoteMsid.stream] = new window.MediaStream();
                                Object.defineProperty(streams[remoteMsid.stream], "id", {
                                    get: function() {
                                        return remoteMsid.stream;
                                    }
                                });
                            }
                            Object.defineProperty(track, "id", {
                                get: function() {
                                    return remoteMsid.track;
                                }
                            });
                            stream = streams[remoteMsid.stream];
                        } else {
                            if (!streams.default) streams.default = new window.MediaStream();
                            stream = streams.default;
                        }
                        if (stream) {
                            addTrackToStreamAndFireEvent(track, stream);
                            transceiver.associatedRemoteMediaStreams.push(stream);
                        }
                        receiverList.push([
                            track,
                            rtpReceiver,
                            stream
                        ]);
                    }
                } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
                    transceiver.associatedRemoteMediaStreams.forEach(function(s) {
                        var nativeTrack = s.getTracks().find(function(t) {
                            return t.id === transceiver.rtpReceiver.track.id;
                        });
                        if (nativeTrack) removeTrackFromStreamAndFireEvent(nativeTrack, s);
                    });
                    transceiver.associatedRemoteMediaStreams = [];
                }
                transceiver.localCapabilities = localCapabilities;
                transceiver.remoteCapabilities = remoteCapabilities;
                transceiver.rtpReceiver = rtpReceiver;
                transceiver.rtcpParameters = rtcpParameters;
                transceiver.sendEncodingParameters = sendEncodingParameters;
                transceiver.recvEncodingParameters = recvEncodingParameters;
                // Start the RTCRtpReceiver now. The RTPSender is started in
                // setLocalDescription.
                pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
            } else if (description.type === "answer" && !rejected) {
                transceiver = pc.transceivers[sdpMLineIndex];
                iceGatherer = transceiver.iceGatherer;
                iceTransport = transceiver.iceTransport;
                dtlsTransport = transceiver.dtlsTransport;
                rtpReceiver = transceiver.rtpReceiver;
                sendEncodingParameters = transceiver.sendEncodingParameters;
                localCapabilities = transceiver.localCapabilities;
                pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
                pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
                pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
                if (cands.length && iceTransport.state === "new") {
                    if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) iceTransport.setRemoteCandidates(cands);
                    else cands.forEach(function(candidate) {
                        maybeAddCandidate(transceiver.iceTransport, candidate);
                    });
                }
                if (!usingBundle || sdpMLineIndex === 0) {
                    if (iceTransport.state === "new") iceTransport.start(iceGatherer, remoteIceParameters, "controlling");
                    if (dtlsTransport.state === "new") dtlsTransport.start(remoteDtlsParameters);
                }
                // If the offer contained RTX but the answer did not,
                // remove RTX from sendEncodingParameters.
                var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
                var hasRtx = commonCapabilities.codecs.filter(function(c) {
                    return c.name.toLowerCase() === "rtx";
                }).length;
                if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) delete transceiver.sendEncodingParameters[0].rtx;
                pc._transceive(transceiver, direction === "sendrecv" || direction === "recvonly", direction === "sendrecv" || direction === "sendonly");
                // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
                if (rtpReceiver && (direction === "sendrecv" || direction === "sendonly")) {
                    track = rtpReceiver.track;
                    if (remoteMsid) {
                        if (!streams[remoteMsid.stream]) streams[remoteMsid.stream] = new window.MediaStream();
                        addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                        receiverList.push([
                            track,
                            rtpReceiver,
                            streams[remoteMsid.stream]
                        ]);
                    } else {
                        if (!streams.default) streams.default = new window.MediaStream();
                        addTrackToStreamAndFireEvent(track, streams.default);
                        receiverList.push([
                            track,
                            rtpReceiver,
                            streams.default
                        ]);
                    }
                } else // FIXME: actually the receiver should be created later.
                delete transceiver.rtpReceiver;
            }
        });
        if (pc._dtlsRole === undefined) pc._dtlsRole = description.type === "offer" ? "active" : "passive";
        pc._remoteDescription = {
            type: description.type,
            sdp: description.sdp
        };
        if (description.type === "offer") pc._updateSignalingState("have-remote-offer");
        else pc._updateSignalingState("stable");
        Object.keys(streams).forEach(function(sid) {
            var stream = streams[sid];
            if (stream.getTracks().length) {
                if (pc.remoteStreams.indexOf(stream) === -1) {
                    pc.remoteStreams.push(stream);
                    var event = new Event("addstream");
                    event.stream = stream;
                    window.setTimeout(function() {
                        pc._dispatchEvent("addstream", event);
                    });
                }
                receiverList.forEach(function(item) {
                    var track = item[0];
                    var receiver = item[1];
                    if (stream.id !== item[2].id) return;
                    fireAddTrack(pc, track, receiver, [
                        stream
                    ]);
                });
            }
        });
        receiverList.forEach(function(item) {
            if (item[2]) return;
            fireAddTrack(pc, item[0], item[1], []);
        });
        // check whether addIceCandidate({}) was called within four seconds after
        // setRemoteDescription.
        window.setTimeout(function() {
            if (!(pc && pc.transceivers)) return;
            pc.transceivers.forEach(function(transceiver) {
                if (transceiver.iceTransport && transceiver.iceTransport.state === "new" && transceiver.iceTransport.getRemoteCandidates().length > 0) {
                    console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification");
                    transceiver.iceTransport.addRemoteCandidate({});
                }
            });
        }, 4000);
        return Promise.resolve();
    };
    RTCPeerConnection.prototype.close = function() {
        this.transceivers.forEach(function(transceiver) {
            /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */ if (transceiver.iceTransport) transceiver.iceTransport.stop();
            if (transceiver.dtlsTransport) transceiver.dtlsTransport.stop();
            if (transceiver.rtpSender) transceiver.rtpSender.stop();
            if (transceiver.rtpReceiver) transceiver.rtpReceiver.stop();
        });
        // FIXME: clean up tracks, local streams, remote streams, etc
        this._isClosed = true;
        this._updateSignalingState("closed");
    };
    // Update the signaling state.
    RTCPeerConnection.prototype._updateSignalingState = function(newState) {
        this.signalingState = newState;
        var event = new Event("signalingstatechange");
        this._dispatchEvent("signalingstatechange", event);
    };
    // Determine whether to fire the negotiationneeded event.
    RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
        var pc = this;
        if (this.signalingState !== "stable" || this.needNegotiation === true) return;
        this.needNegotiation = true;
        window.setTimeout(function() {
            if (pc.needNegotiation) {
                pc.needNegotiation = false;
                var event = new Event("negotiationneeded");
                pc._dispatchEvent("negotiationneeded", event);
            }
        }, 0);
    };
    // Update the ice connection state.
    RTCPeerConnection.prototype._updateIceConnectionState = function() {
        var newState;
        var states = {
            "new": 0,
            closed: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
        };
        this.transceivers.forEach(function(transceiver) {
            if (transceiver.iceTransport && !transceiver.rejected) states[transceiver.iceTransport.state]++;
        });
        newState = "new";
        if (states.failed > 0) newState = "failed";
        else if (states.checking > 0) newState = "checking";
        else if (states.disconnected > 0) newState = "disconnected";
        else if (states.new > 0) newState = "new";
        else if (states.connected > 0) newState = "connected";
        else if (states.completed > 0) newState = "completed";
        if (newState !== this.iceConnectionState) {
            this.iceConnectionState = newState;
            var event = new Event("iceconnectionstatechange");
            this._dispatchEvent("iceconnectionstatechange", event);
        }
    };
    // Update the connection state.
    RTCPeerConnection.prototype._updateConnectionState = function() {
        var newState;
        var states = {
            "new": 0,
            closed: 0,
            connecting: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
        };
        this.transceivers.forEach(function(transceiver) {
            if (transceiver.iceTransport && transceiver.dtlsTransport && !transceiver.rejected) {
                states[transceiver.iceTransport.state]++;
                states[transceiver.dtlsTransport.state]++;
            }
        });
        // ICETransport.completed and connected are the same for this purpose.
        states.connected += states.completed;
        newState = "new";
        if (states.failed > 0) newState = "failed";
        else if (states.connecting > 0) newState = "connecting";
        else if (states.disconnected > 0) newState = "disconnected";
        else if (states.new > 0) newState = "new";
        else if (states.connected > 0) newState = "connected";
        if (newState !== this.connectionState) {
            this.connectionState = newState;
            var event = new Event("connectionstatechange");
            this._dispatchEvent("connectionstatechange", event);
        }
    };
    RTCPeerConnection.prototype.createOffer = function() {
        var pc = this;
        if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createOffer after close"));
        var numAudioTracks = pc.transceivers.filter(function(t) {
            return t.kind === "audio";
        }).length;
        var numVideoTracks = pc.transceivers.filter(function(t) {
            return t.kind === "video";
        }).length;
        // Determine number of audio and video tracks we need to send/recv.
        var offerOptions = arguments[0];
        if (offerOptions) {
            // Reject Chrome legacy constraints.
            if (offerOptions.mandatory || offerOptions.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
            if (offerOptions.offerToReceiveAudio !== undefined) {
                if (offerOptions.offerToReceiveAudio === true) numAudioTracks = 1;
                else if (offerOptions.offerToReceiveAudio === false) numAudioTracks = 0;
                else numAudioTracks = offerOptions.offerToReceiveAudio;
            }
            if (offerOptions.offerToReceiveVideo !== undefined) {
                if (offerOptions.offerToReceiveVideo === true) numVideoTracks = 1;
                else if (offerOptions.offerToReceiveVideo === false) numVideoTracks = 0;
                else numVideoTracks = offerOptions.offerToReceiveVideo;
            }
        }
        pc.transceivers.forEach(function(transceiver) {
            if (transceiver.kind === "audio") {
                numAudioTracks--;
                if (numAudioTracks < 0) transceiver.wantReceive = false;
            } else if (transceiver.kind === "video") {
                numVideoTracks--;
                if (numVideoTracks < 0) transceiver.wantReceive = false;
            }
        });
        // Create M-lines for recvonly streams.
        while(numAudioTracks > 0 || numVideoTracks > 0){
            if (numAudioTracks > 0) {
                pc._createTransceiver("audio");
                numAudioTracks--;
            }
            if (numVideoTracks > 0) {
                pc._createTransceiver("video");
                numVideoTracks--;
            }
        }
        var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
            // For each track, create an ice gatherer, ice transport,
            // dtls transport, potentially rtpsender and rtpreceiver.
            var track = transceiver.track;
            var kind = transceiver.kind;
            var mid = transceiver.mid || SDPUtils.generateIdentifier();
            transceiver.mid = mid;
            if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
            var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            if (edgeVersion < 15019) localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
                return codec.name !== "rtx";
            });
            localCapabilities.codecs.forEach(function(codec) {
                // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
                // by adding level-asymmetry-allowed=1
                if (codec.name === "H264" && codec.parameters["level-asymmetry-allowed"] === undefined) codec.parameters["level-asymmetry-allowed"] = "1";
                // for subsequent offers, we might have to re-use the payload
                // type of the last offer.
                if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
                    if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) codec.preferredPayloadType = remoteCodec.payloadType;
                });
            });
            localCapabilities.headerExtensions.forEach(function(hdrExt) {
                var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
                remoteExtensions.forEach(function(rHdrExt) {
                    if (hdrExt.uri === rHdrExt.uri) hdrExt.id = rHdrExt.id;
                });
            });
            // generate an ssrc now, to be used later in rtpSender.send
            var sendEncodingParameters = transceiver.sendEncodingParameters || [
                {
                    ssrc: (2 * sdpMLineIndex + 1) * 1001
                }
            ];
            if (track) // add RTX
            {
                if (edgeVersion >= 15019 && kind === "video" && !sendEncodingParameters[0].rtx) sendEncodingParameters[0].rtx = {
                    ssrc: sendEncodingParameters[0].ssrc + 1
                };
            }
            if (transceiver.wantReceive) transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
            transceiver.localCapabilities = localCapabilities;
            transceiver.sendEncodingParameters = sendEncodingParameters;
        });
        // always offer BUNDLE and dispose on return if not supported.
        if (pc._config.bundlePolicy !== "max-compat") sdp += "a=group:BUNDLE " + pc.transceivers.map(function(t) {
            return t.mid;
        }).join(" ") + "\r\n";
        sdp += "a=ice-options:trickle\r\n";
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
            sdp += writeMediaSection(transceiver, transceiver.localCapabilities, "offer", transceiver.stream, pc._dtlsRole);
            sdp += "a=rtcp-rsize\r\n";
            if (transceiver.iceGatherer && pc.iceGatheringState !== "new" && (sdpMLineIndex === 0 || !pc.usingBundle)) {
                transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
                    cand.component = 1;
                    sdp += "a=" + SDPUtils.writeCandidate(cand) + "\r\n";
                });
                if (transceiver.iceGatherer.state === "completed") sdp += "a=end-of-candidates\r\n";
            }
        });
        var desc = new window.RTCSessionDescription({
            type: "offer",
            sdp: sdp
        });
        return Promise.resolve(desc);
    };
    RTCPeerConnection.prototype.createAnswer = function() {
        var pc = this;
        if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createAnswer after close"));
        if (!(pc.signalingState === "have-remote-offer" || pc.signalingState === "have-local-pranswer")) return Promise.reject(makeError("InvalidStateError", "Can not call createAnswer in signalingState " + pc.signalingState));
        var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
        if (pc.usingBundle) sdp += "a=group:BUNDLE " + pc.transceivers.map(function(t) {
            return t.mid;
        }).join(" ") + "\r\n";
        sdp += "a=ice-options:trickle\r\n";
        var mediaSectionsInOffer = SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
            if (sdpMLineIndex + 1 > mediaSectionsInOffer) return;
            if (transceiver.rejected) {
                if (transceiver.kind === "application") {
                    if (transceiver.protocol === "DTLS/SCTP") sdp += "m=application 0 DTLS/SCTP 5000\r\n";
                    else sdp += "m=application 0 " + transceiver.protocol + " webrtc-datachannel\r\n";
                } else if (transceiver.kind === "audio") sdp += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n";
                else if (transceiver.kind === "video") sdp += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n";
                sdp += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + transceiver.mid + "\r\n";
                return;
            }
            // FIXME: look at direction.
            if (transceiver.stream) {
                var localTrack;
                if (transceiver.kind === "audio") localTrack = transceiver.stream.getAudioTracks()[0];
                else if (transceiver.kind === "video") localTrack = transceiver.stream.getVideoTracks()[0];
                if (localTrack) // add RTX
                {
                    if (edgeVersion >= 15019 && transceiver.kind === "video" && !transceiver.sendEncodingParameters[0].rtx) transceiver.sendEncodingParameters[0].rtx = {
                        ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                    };
                }
            }
            // Calculate intersection of capabilities.
            var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
            var hasRtx = commonCapabilities.codecs.filter(function(c) {
                return c.name.toLowerCase() === "rtx";
            }).length;
            if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) delete transceiver.sendEncodingParameters[0].rtx;
            sdp += writeMediaSection(transceiver, commonCapabilities, "answer", transceiver.stream, pc._dtlsRole);
            if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) sdp += "a=rtcp-rsize\r\n";
        });
        var desc = new window.RTCSessionDescription({
            type: "answer",
            sdp: sdp
        });
        return Promise.resolve(desc);
    };
    RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
        var pc = this;
        var sections;
        if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) return Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"));
        // TODO: needs to go into ops queue.
        return new Promise(function(resolve, reject) {
            if (!pc._remoteDescription) return reject(makeError("InvalidStateError", "Can not add ICE candidate without a remote description"));
            else if (!candidate || candidate.candidate === "") for(var j = 0; j < pc.transceivers.length; j++){
                if (pc.transceivers[j].rejected) continue;
                pc.transceivers[j].iceTransport.addRemoteCandidate({});
                sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
                sections[j] += "a=end-of-candidates\r\n";
                pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join("");
                if (pc.usingBundle) break;
            }
            else {
                var sdpMLineIndex = candidate.sdpMLineIndex;
                if (candidate.sdpMid) {
                    for(var i = 0; i < pc.transceivers.length; i++)if (pc.transceivers[i].mid === candidate.sdpMid) {
                        sdpMLineIndex = i;
                        break;
                    }
                }
                var transceiver = pc.transceivers[sdpMLineIndex];
                if (transceiver) {
                    if (transceiver.rejected) return resolve();
                    var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {};
                    // Ignore Chrome's invalid candidates since Edge does not like them.
                    if (cand.protocol === "tcp" && (cand.port === 0 || cand.port === 9)) return resolve();
                    // Ignore RTCP candidates, we assume RTCP-MUX.
                    if (cand.component && cand.component !== 1) return resolve();
                    // when using bundle, avoid adding candidates to the wrong
                    // ice transport. And avoid adding candidates added in the SDP.
                    if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
                        if (!maybeAddCandidate(transceiver.iceTransport, cand)) return reject(makeError("OperationError", "Can not add ICE candidate"));
                    }
                    // update the remoteDescription.
                    var candidateString = candidate.candidate.trim();
                    if (candidateString.indexOf("a=") === 0) candidateString = candidateString.substr(2);
                    sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
                    sections[sdpMLineIndex] += "a=" + (cand.type ? candidateString : "end-of-candidates") + "\r\n";
                    pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join("");
                } else return reject(makeError("OperationError", "Can not add ICE candidate"));
            }
            resolve();
        });
    };
    RTCPeerConnection.prototype.getStats = function(selector) {
        if (selector && selector instanceof window.MediaStreamTrack) {
            var senderOrReceiver = null;
            this.transceivers.forEach(function(transceiver) {
                if (transceiver.rtpSender && transceiver.rtpSender.track === selector) senderOrReceiver = transceiver.rtpSender;
                else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) senderOrReceiver = transceiver.rtpReceiver;
            });
            if (!senderOrReceiver) throw makeError("InvalidAccessError", "Invalid selector.");
            return senderOrReceiver.getStats();
        }
        var promises = [];
        this.transceivers.forEach(function(transceiver) {
            [
                "rtpSender",
                "rtpReceiver",
                "iceGatherer",
                "iceTransport",
                "dtlsTransport"
            ].forEach(function(method) {
                if (transceiver[method]) promises.push(transceiver[method].getStats());
            });
        });
        return Promise.all(promises).then(function(allStats) {
            var results = new Map();
            allStats.forEach(function(stats) {
                stats.forEach(function(stat) {
                    results.set(stat.id, stat);
                });
            });
            return results;
        });
    };
    // fix low-level stat names and return Map instead of object.
    var ortcObjects = [
        "RTCRtpSender",
        "RTCRtpReceiver",
        "RTCIceGatherer",
        "RTCIceTransport",
        "RTCDtlsTransport"
    ];
    ortcObjects.forEach(function(ortcObjectName) {
        var obj = window[ortcObjectName];
        if (obj && obj.prototype && obj.prototype.getStats) {
            var nativeGetstats = obj.prototype.getStats;
            obj.prototype.getStats = function() {
                return nativeGetstats.apply(this).then(function(nativeStats) {
                    var mapStats = new Map();
                    Object.keys(nativeStats).forEach(function(id) {
                        nativeStats[id].type = fixStatsType(nativeStats[id]);
                        mapStats.set(id, nativeStats[id]);
                    });
                    return mapStats;
                });
            };
        }
    });
    // legacy callback shims. Should be moved to adapter.js some days.
    var methods = [
        "createOffer",
        "createAnswer"
    ];
    methods.forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
            var args = arguments;
            if (typeof args[0] === "function" || typeof args[1] === "function") return nativeMethod.apply(this, [
                arguments[2]
            ]).then(function(description) {
                if (typeof args[0] === "function") args[0].apply(null, [
                    description
                ]);
            }, function(error) {
                if (typeof args[1] === "function") args[1].apply(null, [
                    error
                ]);
            });
            return nativeMethod.apply(this, arguments);
        };
    });
    methods = [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ];
    methods.forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
            var args = arguments;
            if (typeof args[1] === "function" || typeof args[2] === "function") return nativeMethod.apply(this, arguments).then(function() {
                if (typeof args[1] === "function") args[1].apply(null);
            }, function(error) {
                if (typeof args[2] === "function") args[2].apply(null, [
                    error
                ]);
            });
            return nativeMethod.apply(this, arguments);
        };
    });
    // getStats is special. It doesn't have a spec legacy method yet we support
    // getStats(something, cb) without error callbacks.
    [
        "getStats"
    ].forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
            var args = arguments;
            if (typeof args[1] === "function") return nativeMethod.apply(this, arguments).then(function() {
                if (typeof args[1] === "function") args[1].apply(null);
            });
            return nativeMethod.apply(this, arguments);
        };
    });
    return RTCPeerConnection;
};

},{"sdp":"gNtFW"}],"gNtFW":[function(require,module,exports) {
/* eslint-env node */ "use strict";
// SDP helpers.
var SDPUtils = {};
// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substr(2, 10);
};
// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();
// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
    return blob.trim().split("\n").map(function(line) {
        return line.trim();
    });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
    var parts = blob.split("\nm=");
    return parts.map(function(part, index) {
        return (index > 0 ? "m=" + part : part).trim() + "\r\n";
    });
};
// returns the session description.
SDPUtils.getDescription = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
};
// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
};
// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter(function(line) {
        return line.indexOf(prefix) === 0;
    });
};
// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
    var parts;
    // Parse both variants.
    if (line.indexOf("a=candidate:") === 0) parts = line.substring(12).split(" ");
    else parts = line.substring(10).split(" ");
    var candidate = {
        foundation: parts[0],
        component: parseInt(parts[1], 10),
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
    };
    for(var i = 8; i < parts.length; i += 2)switch(parts[i]){
        case "raddr":
            candidate.relatedAddress = parts[i + 1];
            break;
        case "rport":
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
        case "tcptype":
            candidate.tcpType = parts[i + 1];
            break;
        case "ufrag":
            candidate.ufrag = parts[i + 1]; // for backward compability.
            candidate.usernameFragment = parts[i + 1];
            break;
        default:
            candidate[parts[i]] = parts[i + 1];
            break;
    }
    return candidate;
};
// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
    var sdp = [];
    sdp.push(candidate.foundation);
    sdp.push(candidate.component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);
    var type = candidate.type;
    sdp.push("typ");
    sdp.push(type);
    if (type !== "host" && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push("raddr");
        sdp.push(candidate.relatedAddress);
        sdp.push("rport");
        sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === "tcp") {
        sdp.push("tcptype");
        sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push("ufrag");
        sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return "candidate:" + sdp.join(" ");
};
// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
    return line.substr(14).split(" ");
};
// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
    var parts = line.substr(9).split(" ");
    var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
    };
    parts = parts[0].split("/");
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
};
// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    var channels = codec.channels || codec.numChannels || 1;
    return "a=rtpmap:" + pt + " " + codec.name + "/" + codec.clockRate + (channels !== 1 ? "/" + channels : "") + "\r\n";
};
// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
    var parts = line.substr(9).split(" ");
    return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
        uri: parts[1]
    };
};
// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
    return "a=extmap:" + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== "sendrecv" ? "/" + headerExtension.direction : "") + " " + headerExtension.uri + "\r\n";
};
// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
    var parsed = {};
    var kv;
    var parts = line.substr(line.indexOf(" ") + 1).split(";");
    for(var j = 0; j < parts.length; j++){
        kv = parts[j].trim().split("=");
        parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
};
// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
    var line = "";
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
            if (codec.parameters[param]) params.push(param + "=" + codec.parameters[param]);
            else params.push(param);
        });
        line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
    }
    return line;
};
// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
    var parts = line.substr(line.indexOf(" ") + 1).split(" ");
    return {
        type: parts.shift(),
        parameter: parts.join(" ")
    };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
    var lines = "";
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
        lines += "a=rtcp-fb:" + pt + " " + fb.type + (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") + "\r\n";
    });
    return lines;
};
// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
    var sp = line.indexOf(" ");
    var parts = {
        ssrc: parseInt(line.substr(7, sp - 7), 10)
    };
    var colon = line.indexOf(":", sp);
    if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
    } else parts.attribute = line.substr(sp + 1);
    return parts;
};
SDPUtils.parseSsrcGroup = function(line) {
    var parts = line.substr(13).split(" ");
    return {
        semantics: parts.shift(),
        ssrcs: parts.map(function(ssrc) {
            return parseInt(ssrc, 10);
        })
    };
};
// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
    var mid = SDPUtils.matchPrefix(mediaSection, "a=mid:")[0];
    if (mid) return mid.substr(6);
};
SDPUtils.parseFingerprint = function(line) {
    var parts = line.substr(14).split(" ");
    return {
        algorithm: parts[0].toLowerCase(),
        value: parts[1]
    };
};
// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=fingerprint:");
    // Note: a=setup line is ignored since we use the 'auto' role.
    // Note2: 'algorithm' is not case sensitive except in Edge.
    return {
        role: "auto",
        fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
};
// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
    var sdp = "a=setup:" + setupType + "\r\n";
    params.fingerprints.forEach(function(fp) {
        sdp += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
    });
    return sdp;
};
// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
    var parts = line.substr(9).split(" ");
    return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3)
    };
};
SDPUtils.writeCryptoLine = function(parameters) {
    return "a=crypto:" + parameters.tag + " " + parameters.cryptoSuite + " " + (typeof parameters.keyParams === "object" ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? " " + parameters.sessionParams.join(" ") : "") + "\r\n";
};
// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
    if (keyParams.indexOf("inline:") !== 0) return null;
    var parts = keyParams.substr(7).split("|");
    return {
        keyMethod: "inline",
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(":")[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(":")[1] : undefined
    };
};
SDPUtils.writeCryptoKeyParams = function(keyParams) {
    return keyParams.keyMethod + ":" + keyParams.keySalt + (keyParams.lifeTime ? "|" + keyParams.lifeTime : "") + (keyParams.mkiValue && keyParams.mkiLength ? "|" + keyParams.mkiValue + ":" + keyParams.mkiLength : "");
};
// Extracts all SDES paramters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=crypto:");
    return lines.map(SDPUtils.parseCryptoLine);
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=ice-ufrag:")[0];
    var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=ice-pwd:")[0];
    if (!(ufrag && pwd)) return null;
    return {
        usernameFragment: ufrag.substr(12),
        password: pwd.substr(10)
    };
};
// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
    return "a=ice-ufrag:" + params.usernameFragment + "\r\n" + "a=ice-pwd:" + params.password + "\r\n";
};
// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
    var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
    };
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    for(var i = 3; i < mline.length; i++){
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(mediaSection, "a=rtpmap:" + pt + " ")[0];
        if (rtpmapline) {
            var codec = SDPUtils.parseRtpMap(rtpmapline);
            var fmtps = SDPUtils.matchPrefix(mediaSection, "a=fmtp:" + pt + " ");
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:" + pt + " ").map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch(codec.name.toUpperCase()){
                case "RED":
                case "ULPFEC":
                    description.fecMechanisms.push(codec.name.toUpperCase());
                    break;
                default:
                    break;
            }
        }
    }
    SDPUtils.matchPrefix(mediaSection, "a=extmap:").forEach(function(line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    // FIXME: parse rtcp.
    return description;
};
// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
    var sdp = "";
    // Build the mline.
    sdp += "m=" + kind + " ";
    sdp += caps.codecs.length > 0 ? "9" : "0"; // reject if no codecs.
    sdp += " UDP/TLS/RTP/SAVPF ";
    sdp += caps.codecs.map(function(codec) {
        if (codec.preferredPayloadType !== undefined) return codec.preferredPayloadType;
        return codec.payloadType;
    }).join(" ") + "\r\n";
    sdp += "c=IN IP4 0.0.0.0\r\n";
    sdp += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
    });
    var maxptime = 0;
    caps.codecs.forEach(function(codec) {
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
    });
    if (maxptime > 0) sdp += "a=maxptime:" + maxptime + "\r\n";
    sdp += "a=rtcp-mux\r\n";
    if (caps.headerExtensions) caps.headerExtensions.forEach(function(extension) {
        sdp += SDPUtils.writeExtmap(extension);
    });
    // FIXME: write fecMechanisms.
    return sdp;
};
// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    var encodingParameters = [];
    var description = SDPUtils.parseRtpParameters(mediaSection);
    var hasRed = description.fecMechanisms.indexOf("RED") !== -1;
    var hasUlpfec = description.fecMechanisms.indexOf("ULPFEC") !== -1;
    // filter a=ssrc:... cname:, ignore PlanB-msid
    var ssrcs = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
    }).filter(function(parts) {
        return parts.attribute === "cname";
    });
    var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    var secondarySsrc;
    var flows = SDPUtils.matchPrefix(mediaSection, "a=ssrc-group:FID").map(function(line) {
        var parts = line.substr(17).split(" ");
        return parts.map(function(part) {
            return parseInt(part, 10);
        });
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
    description.codecs.forEach(function(codec) {
        if (codec.name.toUpperCase() === "RTX" && codec.parameters.apt) {
            var encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) encParam.rtx = {
                ssrc: secondarySsrc
            };
            encodingParameters.push(encParam);
            if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? "red+ulpfec" : "red"
                };
                encodingParameters.push(encParam);
            }
        }
    });
    if (encodingParameters.length === 0 && primarySsrc) encodingParameters.push({
        ssrc: primarySsrc
    });
    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    var bandwidth = SDPUtils.matchPrefix(mediaSection, "b=");
    if (bandwidth.length) {
        if (bandwidth[0].indexOf("b=TIAS:") === 0) bandwidth = parseInt(bandwidth[0].substr(7), 10);
        else if (bandwidth[0].indexOf("b=AS:") === 0) // use formula from JSEP to convert b=AS to TIAS value.
        bandwidth = parseInt(bandwidth[0].substr(5), 10) * 950 - 16000;
        else bandwidth = undefined;
        encodingParameters.forEach(function(params) {
            params.maxBitrate = bandwidth;
        });
    }
    return encodingParameters;
};
// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
    var rtcpParameters = {};
    // Gets the first SSRC. Note tha with RTX there might be multiple
    // SSRCs.
    var remoteSsrc = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
    }).filter(function(obj) {
        return obj.attribute === "cname";
    })[0];
    if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    var rsize = SDPUtils.matchPrefix(mediaSection, "a=rtcp-rsize");
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    var mux = SDPUtils.matchPrefix(mediaSection, "a=rtcp-mux");
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
};
// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
    var parts;
    var spec = SDPUtils.matchPrefix(mediaSection, "a=msid:");
    if (spec.length === 1) {
        parts = spec[0].substr(7).split(" ");
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
    var planB = SDPUtils.matchPrefix(mediaSection, "a=ssrc:").map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
    }).filter(function(msidParts) {
        return msidParts.attribute === "msid";
    });
    if (planB.length > 0) {
        parts = planB[0].value.split(" ");
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
};
// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
    var mline = SDPUtils.parseMLine(mediaSection);
    var maxSizeLine = SDPUtils.matchPrefix(mediaSection, "a=max-message-size:");
    var maxMessageSize;
    if (maxSizeLine.length > 0) maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
    if (isNaN(maxMessageSize)) maxMessageSize = 65536;
    var sctpPort = SDPUtils.matchPrefix(mediaSection, "a=sctp-port:");
    if (sctpPort.length > 0) return {
        port: parseInt(sctpPort[0].substr(12), 10),
        protocol: mline.fmt,
        maxMessageSize: maxMessageSize
    };
    var sctpMapLines = SDPUtils.matchPrefix(mediaSection, "a=sctpmap:");
    if (sctpMapLines.length > 0) {
        var parts = SDPUtils.matchPrefix(mediaSection, "a=sctpmap:")[0].substr(10).split(" ");
        return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize: maxMessageSize
        };
    }
};
// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
    var output = [];
    if (media.protocol !== "DTLS/SCTP") output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.protocol + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctp-port:" + sctp.port + "\r\n"
    ];
    else output = [
        "m=" + media.kind + " 9 " + media.protocol + " " + sctp.port + "\r\n",
        "c=IN IP4 0.0.0.0\r\n",
        "a=sctpmap:" + sctp.port + " " + sctp.protocol + " 65535\r\n"
    ];
    if (sctp.maxMessageSize !== undefined) output.push("a=max-message-size:" + sctp.maxMessageSize + "\r\n");
    return output.join("");
};
// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 21);
};
// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    var sessionId;
    var version = sessVer !== undefined ? sessVer : 2;
    if (sessId) sessionId = sessId;
    else sessionId = SDPUtils.generateSessionId();
    var user = sessUser || "thisisadapterortc";
    // FIXME: sess-id should be an NTP timestamp.
    return "v=0\r\no=" + user + " " + sessionId + " " + version + " IN IP4 127.0.0.1\r\n" + "s=-\r\n" + "t=0 0\r\n";
};
SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
    var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    // Map ICE parameters (ufrag, pwd) to SDP.
    sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
    // Map DTLS parameters to SDP.
    sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === "offer" ? "actpass" : "active");
    sdp += "a=mid:" + transceiver.mid + "\r\n";
    if (transceiver.direction) sdp += "a=" + transceiver.direction + "\r\n";
    else if (transceiver.rtpSender && transceiver.rtpReceiver) sdp += "a=sendrecv\r\n";
    else if (transceiver.rtpSender) sdp += "a=sendonly\r\n";
    else if (transceiver.rtpReceiver) sdp += "a=recvonly\r\n";
    else sdp += "a=inactive\r\n";
    if (transceiver.rtpSender) {
        // spec.
        var msid = "msid:" + stream.id + " " + transceiver.rtpSender.track.id + "\r\n";
        sdp += "a=" + msid;
        // for Chrome.
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
            sdp += "a=ssrc-group:FID " + transceiver.sendEncodingParameters[0].ssrc + " " + transceiver.sendEncodingParameters[0].rtx.ssrc + "\r\n";
        }
    }
    // FIXME: this should be written by writeRtpDescription.
    sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
    return sdp;
};
// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    var lines = SDPUtils.splitLines(mediaSection);
    for(var i = 0; i < lines.length; i++)switch(lines[i]){
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
            return lines[i].substr(2);
        default:
    }
    if (sessionpart) return SDPUtils.getDirection(sessionpart);
    return "sendrecv";
};
SDPUtils.getKind = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(" ");
    return mline[0].substr(2);
};
SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(" ", 2)[1] === "0";
};
SDPUtils.parseMLine = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var parts = lines[0].substr(2).split(" ");
    return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(" ")
    };
};
SDPUtils.parseOLine = function(mediaSection) {
    var line = SDPUtils.matchPrefix(mediaSection, "o=")[0];
    var parts = line.substr(2).split(" ");
    return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
    };
};
// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== "string" || blob.length === 0) return false;
    var lines = SDPUtils.splitLines(blob);
    for(var i = 0; i < lines.length; i++){
        if (lines[i].length < 2 || lines[i].charAt(1) !== "=") return false;
    // TODO: check the modifier a bit more.
    }
    return true;
};
module.exports = SDPUtils;

},{}],"2JCji":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
"use strict";
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    const shimError_ = function(e) {
        return {
            name: ({
                PermissionDeniedError: "NotAllowedError"
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint,
            toString () {
                return this.name;
            }
        };
    };
    // getUserMedia error shim.
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
        return origGetUserMedia(c).catch((e)=>Promise.reject(shimError_(e)));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4q1u":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
"use strict";
function shimGetDisplayMedia(window) {
    if (!("getDisplayMedia" in window.navigator)) return;
    if (!window.navigator.mediaDevices) return;
    if (window.navigator.mediaDevices && "getDisplayMedia" in window.navigator.mediaDevices) return;
    window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WnAE":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
parcelHelpers.export(exports, "shimSenderGetStats", ()=>shimSenderGetStats);
parcelHelpers.export(exports, "shimReceiverGetStats", ()=>shimReceiverGetStats);
parcelHelpers.export(exports, "shimRemoveStream", ()=>shimRemoveStream);
parcelHelpers.export(exports, "shimRTCDataChannel", ()=>shimRTCDataChannel);
parcelHelpers.export(exports, "shimAddTransceiver", ()=>shimAddTransceiver);
parcelHelpers.export(exports, "shimGetParameters", ()=>shimGetParameters);
parcelHelpers.export(exports, "shimCreateOffer", ()=>shimCreateOffer);
parcelHelpers.export(exports, "shimCreateAnswer", ()=>shimCreateAnswer);
var _utils = require("../utils");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
"use strict";
function shimOnTrack(window) {
    if (typeof window === "object" && window.RTCTrackEvent && "receiver" in window.RTCTrackEvent.prototype && !("transceiver" in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== "object" || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return; // probably media.peerconnection.enabled=false in about:config
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
    if (browserDetails.version < 53) // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate"
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === "addIceCandidate" ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const modernStatsTypes = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
                stats.forEach((stat)=>{
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                });
            } catch (e) {
                if (e.name !== "TypeError") throw e;
                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                stats.forEach((stat, i)=>{
                    stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                    }));
                });
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpSender.prototype) return;
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender)=>sender._pc = this);
        return senders;
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
    };
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && "getStats" in window.RTCRtpReceiver.prototype) return;
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver)=>receiver._pc = this);
        return receivers;
    };
    _utils.wrapPeerConnectionEvent(window, "track", (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || "removeStream" in window.RTCPeerConnection.prototype) return;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        _utils.deprecated("removeStream", "removeTrack");
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
        this.setParametersPromises = [];
        const initParameters = arguments[1];
        const shouldPerformCheck = initParameters && "sendEncodings" in initParameters;
        if (shouldPerformCheck) // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach((encodingParam)=>{
            if ("rid" in encodingParam) {
                const ridRegex = /^[a-z0-9]{0,16}$/i;
                if (!ridRegex.test(encodingParam.rid)) throw new TypeError("Invalid RID value provided.");
            }
            if ("scaleResolutionDownBy" in encodingParam) {
                if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            }
            if ("maxFramerate" in encodingParam) {
                if (!(parseFloat(encodingParam.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
            }
        });
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
            // Check if the init options were applied. If not we do this in an
            // asynchronous way and save the promise reference in a global object.
            // This is an ugly hack, but at the same time is way more robust than
            // checking the sender parameters before and after the createOffer
            // Also note that after the createoffer we are not 100% sure that
            // the params were asynchronously applied so we might miss the
            // opportunity to recreate offer.
            const { sender  } = transceiver;
            const params = sender.getParameters();
            if (!("encodings" in params) || // Avoid being fooled by patched getParameters() below.
            params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                params.encodings = initParameters.sendEncodings;
                sender.sendEncodings = initParameters.sendEncodings;
                this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                    delete sender.sendEncodings;
                }).catch(()=>{
                    delete sender.sendEncodings;
                }));
            }
        }
        return transceiver;
    };
}
function shimGetParameters(window) {
    if (!(typeof window === "object" && window.RTCRtpSender)) return;
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) window.RTCRtpSender.prototype.getParameters = function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!("encodings" in params)) params.encodings = [].concat(this.sendEncodings || [
            {}
        ]);
        return params;
    };
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateOffer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === "object" && window.RTCPeerConnection)) return;
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateAnswer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateAnswer.apply(this, arguments);
    };
}

},{"../utils":"9QTnM","./getusermedia":"2IJ68","./getdisplaymedia":"eBPQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IJ68":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utils = require("../utils");
"use strict";
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        _utils.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia");
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && "autoGainControl" in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === "object" && typeof c.audio === "object") {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, "autoGainControl", "mozAutoGainControl");
                remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, "mozAutoGainControl", "autoGainControl");
                remap(obj, "mozNoiseSuppression", "noiseSuppression");
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === "audio" && typeof c === "object") {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, "autoGainControl", "mozAutoGainControl");
                    remap(c, "noiseSuppression", "mozNoiseSuppression");
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}

},{"../utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBPQV":[function(require,module,exports) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
"use strict";
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && "getDisplayMedia" in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException("getDisplayMedia without video constraints is undefined");
            err.name = "NotFoundError";
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) constraints.video = {
            mediaSource: preferredMediaSource
        };
        else constraints.video.mediaSource = preferredMediaSource;
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"comwI":[function(require,module,exports) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimLocalStreamsAPI", ()=>shimLocalStreamsAPI);
parcelHelpers.export(exports, "shimRemoteStreamsAPI", ()=>shimRemoteStreamsAPI);
parcelHelpers.export(exports, "shimCallbacksAPI", ()=>shimCallbacksAPI);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
parcelHelpers.export(exports, "shimConstraints", ()=>shimConstraints);
parcelHelpers.export(exports, "shimRTCIceServerUrls", ()=>shimRTCIceServerUrls);
parcelHelpers.export(exports, "shimTrackEventTransceiver", ()=>shimTrackEventTransceiver);
parcelHelpers.export(exports, "shimCreateOfferLegacy", ()=>shimCreateOfferLegacy);
parcelHelpers.export(exports, "shimAudioContext", ()=>shimAudioContext);
var _utils = require("../utils");
"use strict";
function shimLocalStreamsAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    if (!("getLocalStreams" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        if (!this._localStreams) this._localStreams = [];
        return this._localStreams;
    };
    if (!("addStream" in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) this._localStreams = [];
            if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) streams.forEach((stream)=>{
                if (!this._localStreams) this._localStreams = [
                    stream
                ];
                else if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            });
            return _addTrack.apply(this, arguments);
        };
    }
    if (!("removeStream" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        if (!this._localStreams) this._localStreams = [];
        const index = this._localStreams.indexOf(stream);
        if (index === -1) return;
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach((sender)=>{
            if (tracks.includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    if (!("getRemoteStreams" in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
    };
    if (!("onaddstream" in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "onaddstream", {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener("addstream", this._onaddstream);
                    this.removeEventListener("track", this._onaddstreampoly);
                }
                this.addEventListener("addstream", this._onaddstream = f);
                this.addEventListener("track", this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) this._remoteStreams = [];
                        if (this._remoteStreams.includes(stream)) return;
                        this._remoteStreams.push(stream);
                        const event = new Event("addstream");
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) this.addEventListener("track", this._onaddstreampoly = function(e) {
                e.streams.forEach((stream)=>{
                    if (!pc._remoteStreams) pc._remoteStreams = [];
                    if (pc._remoteStreams.indexOf(stream) >= 0) return;
                    pc._remoteStreams.push(stream);
                    const event = new Event("addstream");
                    event.stream = stream;
                    pc.dispatchEvent(event);
                });
            });
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== "object" || !window.RTCPeerConnection) return;
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }).bind(navigator);
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) return Object.assign({}, constraints, {
        video: _utils.compactObject(constraints.video)
    });
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) return;
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty("urls") && server.hasOwnProperty("url")) {
                    _utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else newIceServers.push(pcConfig.iceServers[i]);
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ("generateCertificate" in OrigPeerConnection) Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
        get () {
            return OrigPeerConnection.generateCertificate;
        }
    });
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === "object" && window.RTCTrackEvent && "receiver" in window.RTCTrackEvent.prototype && !("transceiver" in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== "undefined") // support bit values
            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === "audio");
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === "sendrecv") {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection("sendonly");
                    else audioTransceiver.direction = "sendonly";
                } else if (audioTransceiver.direction === "recvonly") {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection("inactive");
                    else audioTransceiver.direction = "inactive";
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) this.addTransceiver("audio");
            if (typeof offerOptions.offerToReceiveVideo !== "undefined") // support bit values
            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === "video");
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === "sendrecv") {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection("sendonly");
                    else videoTransceiver.direction = "sendonly";
                } else if (videoTransceiver.direction === "recvonly") {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection("inactive");
                    else videoTransceiver.direction = "inactive";
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) this.addTransceiver("video");
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== "object" || window.AudioContext) return;
    window.AudioContext = window.webkitAudioContext;
}

},{"../utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYiQ9":[function(require,module,exports) {
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimRTCIceCandidate", ()=>shimRTCIceCandidate);
parcelHelpers.export(exports, "shimMaxMessageSize", ()=>shimMaxMessageSize);
parcelHelpers.export(exports, "shimSendThrowTypeError", ()=>shimSendThrowTypeError);
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */ parcelHelpers.export(exports, "shimConnectionState", ()=>shimConnectionState);
parcelHelpers.export(exports, "removeExtmapAllowMixed", ()=>removeExtmapAllowMixed);
parcelHelpers.export(exports, "shimAddIceCandidateNullOrEmpty", ()=>shimAddIceCandidateNullOrEmpty);
var _sdp = require("sdp");
var _sdpDefault = parcelHelpers.interopDefault(_sdp);
var _utils = require("./utils");
"use strict";
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && "foundation" in window.RTCIceCandidate.prototype) return;
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === "object" && args.candidate && args.candidate.indexOf("a=") === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substr(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(args.candidate);
            const augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);
            // Add a serializer that does not serialize the extra attributes.
            augmentedCandidate.toJSON = function toJSON() {
                return {
                    candidate: augmentedCandidate.candidate,
                    sdpMid: augmentedCandidate.sdpMid,
                    sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                    usernameFragment: augmentedCandidate.usernameFragment
                };
            };
            return augmentedCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, "icecandidate", (e)=>{
        if (e.candidate) Object.defineProperty(e, "candidate", {
            value: new window.RTCIceCandidate(e.candidate),
            writable: "false"
        });
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    if (!("sctp" in window.RTCPeerConnection.prototype)) Object.defineProperty(window.RTCPeerConnection.prototype, "sctp", {
        get () {
            return typeof this._sctp === "undefined" ? null : this._sctp;
        }
    });
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) return false;
        const sections = (0, _sdpDefault.default).splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = (0, _sdpDefault.default).parseMLine(mediaSection);
            return mLine && mLine.kind === "application" && mLine.protocol.indexOf("SCTP") !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) return -1;
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === "firefox") {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                // fragmentation.
                canSendMaxMessageSize = 16384;
                else // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                // messages. Thus, supporting ~2 GiB when sending.
                canSendMaxMessageSize = 2147483637;
            } else if (browserDetails.version < 60) // Currently, all FF >= 57 will reset the remote maximum message size
            // to the default value when a data channel is created at a later
            // stage. :(
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
            canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            else // FF >= 60 supports sending ~2 GiB
            canSendMaxMessageSize = 2147483637;
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === "firefox" && browserDetails.version === 57) maxMessageSize = 65535;
        const match = (0, _sdpDefault.default).matchPrefix(description.sdp, "a=max-message-size:");
        if (match.length > 0) maxMessageSize = parseInt(match[0].substr(19), 10);
        else if (browserDetails.browser === "firefox" && remoteIsFirefox !== -1) // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === "chrome" && browserDetails.version >= 76) {
            const { sdpSemantics  } = this.getConfiguration();
            if (sdpSemantics === "plan-b") Object.defineProperty(this, "sctp", {
                get () {
                    return typeof this._sctp === "undefined" ? null : this._sctp;
                },
                enumerable: true,
                configurable: true
            });
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) maxMessageSize = Number.POSITIVE_INFINITY;
            else if (canSendMMS === 0 || remoteMMS === 0) maxMessageSize = Math.max(canSendMMS, remoteMMS);
            else maxMessageSize = Math.min(canSendMMS, remoteMMS);
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, "maxMessageSize", {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && "createDataChannel" in window.RTCPeerConnection.prototype)) return;
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === "open" && pc.sctp && length > pc.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    _utils.wrapPeerConnectionEvent(window, "datachannel", (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || "connectionState" in window.RTCPeerConnection.prototype) return;
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, "connectionState", {
        get () {
            return ({
                completed: "connected",
                checking: "connecting"
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, "onconnectionstatechange", {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener("connectionstatechange", this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) this.addEventListener("connectionstatechange", this._onconnectionstatechange = cb);
        },
        enumerable: true,
        configurable: true
    });
    [
        "setLocalDescription",
        "setRemoteDescription"
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event("connectionstatechange", e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) return;
    if (browserDetails.browser === "chrome" && browserDetails.version >= 71) return;
    if (browserDetails.browser === "safari" && browserDetails.version >= 605) return;
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf("\na=extmap-allow-mixed") !== -1) {
            const sdp = desc.sdp.split("\n").filter((line)=>{
                return line.trim() !== "a=extmap-allow-mixed";
            }).join("\n");
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) arguments[0] = new window.RTCSessionDescription({
                type: desc.type,
                sdp
            });
            else desc.sdp = sdp;
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) return;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) arguments[1].apply(null);
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === "chrome" && browserDetails.version < 78 || browserDetails.browser === "firefox" && browserDetails.version < 68 || browserDetails.browser === "safari") && arguments[0] && arguments[0].candidate === "") return Promise.resolve();
        return nativeAddIceCandidate.apply(this, arguments);
    };
}

},{"sdp":"gNtFW","./utils":"9QTnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2QhhG","6zZpR"], "6zZpR", "parcelRequirecba9")

//# sourceMappingURL=index.d8b6836f.js.map
