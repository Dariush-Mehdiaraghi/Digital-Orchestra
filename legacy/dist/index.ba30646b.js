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
})({"hG51I":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cda783fdba30646b";
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
// import p5 from "p5"
var _receiverJs = require("./receiver.js");
var _senderJs = require("./sender.js");
var _constantsJs = require("./constants.js");
var _tone = require("tone");
var _socketJs = require("./socket.js");
let peer = new (0, _peerjsDefault.default)(null, {
    debug: 2
});
// if we are in dev mode use http://localhost:3000/
let connections = [];
let timeOnSend;
let myRole;
let mySketch;
let myColor;
let hasSender = false;
const colors = [
    "#FBA500",
    "#2671BC",
    "#F15A24",
    "#096836",
    "#A344A7",
    "#00AD99"
];
let sampler;
let ts;
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
    if (!connections.length) (0, _jqueryDefault.default)("body").append(`<div>Sorry no Peer-server available. Try to Reload the page please :)</div>`);
});
function alreadyHaveConnection(newConnection) {
    //checking if we already have this Connection
    let peerIDs = connections.map((connection)=>{
        return connection.peer;
    });
    return peerIDs.includes(newConnection.peer);
}
function setupConn(recivedConn) {
    connections.push(recivedConn);
    let conn = recivedConn;
    conn.on("open", function() {
        console.log("\uD83D\uDC50 is open");
        if (myRole == "sender" && !(0, _jqueryDefault.default)(`#sequencer-${conn.peer}`).length) {
            if (!(0, _jqueryDefault.default)("#sender-div").length) createSenderControls();
            createSequencer(conn);
        }
        conn.on("data", function(data) {
            if (data.time != undefined) {
                if (delta == undefined) delta = data.time - _tone.now(); //Diffrence between our time and the incoming notes time. Set once to have a constant offset in time
                let timeIplay = data.time - delta + 0.8;
                sampler.triggerAttack(data.notes, timeIplay); //, data.time)
                _tone.Draw.schedule(function() {
                    gsap.fromTo("body", {
                        backgroundColor: myColor
                    }, {
                        backgroundColor: (0, _constantsJs.myBackgroundColor),
                        duration: 0.9,
                        ease: "power3.inOut"
                    } //color interpolation to a css variable doesnt work
                    );
                }, timeIplay);
            // console.log("🎵 recived note with time: " + data.time + " time I will play: " + timeIplay)
            } else if (data == "startPlaying") {
                mySketch.remove();
                audioNodes.forEach((node)=>{
                    if (node != undefined) node.disconnect();
                });
                audioContext.close();
                if (sampler == undefined) {
                    _tone.context.latencyHint = "balanced"; //"interactive" (default, prioritizes low latency), "playback" (prioritizes sustained playback), "balanced" (balances latency and performance), "fastest" (lowest latency, might glitch more often).
                    sampler = new _tone.Sampler({
                        "F#3": `audio/s${colors.indexOf(myColor) % 3}/1.mp3`,
                        E3: `audio/s${colors.indexOf(myColor) % 3}/2.mp3`,
                        "C#3": `audio/s${colors.indexOf(myColor) % 3}/3.mp3`,
                        A3: `audio/s${colors.indexOf(myColor) % 3}/4.mp3`
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
        let i = connections.indexOf(conn);
        if (i != -1) connections.splice(i, 1);
        if (myRole == "receiver") {
            (0, _jqueryDefault.default)("#my-color").css("background-color", "white");
            hasSender = false;
            (0, _receiverJs.startMicrophoneInput)();
            mySketch = new p5((0, _receiverJs.receiverSketch));
            delta = undefined;
            _tone.Transport.stop();
        }
        if (myRole == "sender") for(let i1 = 0; i1 < connections.length; i1++){
            const connection = connections[i1];
            const color = {
                color: colors[i1 % (colors.length - 1)]
            };
            connection.send(color);
            console.log("sending to " + connection.peer + " this color: " + color);
        }
        if (myRole == "sender" && connections.length <= 0) {
            myRole = undefined;
            (0, _jqueryDefault.default)("#sender-div").remove();
            appendSenderReceiver();
        }
    });
    conn.on("error", function(err) {
        console.log("⛔ Connection error: " + err);
    });
}
function broadcastToAllConn(msg) {
    if (connections.length != 0) connections.forEach((conn)=>{
        conn.send(msg);
    });
}
function removeSenderReceiver() {
    (0, _jqueryDefault.default)("#main-menu").remove();
}
function appendSenderReceiver() {
    (0, _jqueryDefault.default)("body").append("<div id='main-menu'><div id='sender'>sender</div><div id='animation-container'></div><div id='receiver'>receiver</div></div>");
    (0, _jqueryDefault.default)("#sender").click(function() {
        if (myRole == "receiver") {
            mySketch.remove();
            setupSender();
        } else if (myRole != "sender") setupSender();
        removeSenderReceiver();
    });
    (0, _jqueryDefault.default)("#receiver").click(function() {
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
    mySketch = new p5((0, _senderJs.senderSketch));
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

},{"jquery":"hgMhh","peerjs":"q8CCT","./sender.js":"bS2pT","tone":"2tCfN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./receiver.js":"iLfKW","./constants.js":"ib2Pl","./socket.js":"8guOI"}]},["hG51I"], null, "parcelRequirecba9")

//# sourceMappingURL=index.ba30646b.js.map
