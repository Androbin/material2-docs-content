(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/table', ['exports', '@angular/cdk/table', '@angular/core', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.table = {}), global.ng.cdk.table, global.ng.core, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1, i0, collections, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function CdkTableFlexBasicExample_cdk_header_cell_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFlexBasicExample_cdk_cell_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function CdkTableFlexBasicExample_cdk_header_cell_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFlexBasicExample_cdk_cell_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function CdkTableFlexBasicExample_cdk_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFlexBasicExample_cdk_cell_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function CdkTableFlexBasicExample_cdk_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFlexBasicExample_cdk_cell_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function CdkTableFlexBasicExample_cdk_header_row_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "cdk-header-row");
        }
    }
    function CdkTableFlexBasicExample_cdk_row_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "cdk-row");
        }
    }
    var ELEMENT_DATA$3 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic use of `<cdk-table>` (uses display flex)
     */
    var CdkTableFlexBasicExample = /** @class */ (function () {
        function CdkTableFlexBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$3();
        }
        return CdkTableFlexBasicExample;
    }());
    CdkTableFlexBasicExample.ɵfac = function CdkTableFlexBasicExample_Factory(t) { return new (t || CdkTableFlexBasicExample)(); };
    CdkTableFlexBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTableFlexBasicExample, selectors: [["cdk-table-flex-basic-example"]], decls: 15, vars: 3, consts: [[3, "dataSource"], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"]], template: function CdkTableFlexBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, CdkTableFlexBasicExample_cdk_header_cell_2_Template, 2, 0, "cdk-header-cell", 2);
                i0__namespace.ɵɵtemplate(3, CdkTableFlexBasicExample_cdk_cell_3_Template, 2, 1, "cdk-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, CdkTableFlexBasicExample_cdk_header_cell_5_Template, 2, 0, "cdk-header-cell", 2);
                i0__namespace.ɵɵtemplate(6, CdkTableFlexBasicExample_cdk_cell_6_Template, 2, 1, "cdk-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 5);
                i0__namespace.ɵɵtemplate(8, CdkTableFlexBasicExample_cdk_header_cell_8_Template, 2, 0, "cdk-header-cell", 2);
                i0__namespace.ɵɵtemplate(9, CdkTableFlexBasicExample_cdk_cell_9_Template, 2, 1, "cdk-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 6);
                i0__namespace.ɵɵtemplate(11, CdkTableFlexBasicExample_cdk_header_cell_11_Template, 2, 0, "cdk-header-cell", 2);
                i0__namespace.ɵɵtemplate(12, CdkTableFlexBasicExample_cdk_cell_12_Template, 2, 1, "cdk-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, CdkTableFlexBasicExample_cdk_header_row_13_Template, 1, 0, "cdk-header-row", 7);
                i0__namespace.ɵɵtemplate(14, CdkTableFlexBasicExample_cdk_row_14_Template, 1, 0, "cdk-row", 8);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: ["cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ncdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTableFlexBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-table-flex-basic-example', template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"] }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$3 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$3);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkTableBasicExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableBasicExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function CdkTableBasicExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableBasicExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function CdkTableBasicExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableBasicExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function CdkTableBasicExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableBasicExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function CdkTableBasicExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 11);
        }
    }
    function CdkTableBasicExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 12);
        }
    }
    var ELEMENT_DATA$2 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic CDK data-table
     */
    var CdkTableBasicExample = /** @class */ (function () {
        function CdkTableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$2();
        }
        return CdkTableBasicExample;
    }());
    CdkTableBasicExample.ɵfac = function CdkTableBasicExample_Factory(t) { return new (t || CdkTableBasicExample)(); };
    CdkTableBasicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTableBasicExample, selectors: [["cdk-table-basic-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableBasicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, CdkTableBasicExample_th_2_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(3, CdkTableBasicExample_td_3_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, CdkTableBasicExample_th_5_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(6, CdkTableBasicExample_td_6_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 5);
                i0__namespace.ɵɵtemplate(8, CdkTableBasicExample_th_8_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(9, CdkTableBasicExample_td_9_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 6);
                i0__namespace.ɵɵtemplate(11, CdkTableBasicExample_th_11_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(12, CdkTableBasicExample_td_12_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, CdkTableBasicExample_tr_13_Template, 1, 0, "tr", 7);
                i0__namespace.ɵɵtemplate(14, CdkTableBasicExample_tr_14_Template, 1, 0, "tr", 8);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTableBasicExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-table-basic-example', template: "<table cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nth {\n  text-align: left;\n}\n"] }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$2 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$2);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkTableFixedLayoutExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFixedLayoutExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function CdkTableFixedLayoutExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFixedLayoutExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function CdkTableFixedLayoutExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFixedLayoutExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function CdkTableFixedLayoutExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableFixedLayoutExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function CdkTableFixedLayoutExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 11);
        }
    }
    function CdkTableFixedLayoutExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 12);
        }
    }
    var ELEMENT_DATA$1 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title CDK table with a fixed layout.
     */
    var CdkTableFixedLayoutExample = /** @class */ (function () {
        function CdkTableFixedLayoutExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
        }
        return CdkTableFixedLayoutExample;
    }());
    CdkTableFixedLayoutExample.ɵfac = function CdkTableFixedLayoutExample_Factory(t) { return new (t || CdkTableFixedLayoutExample)(); };
    CdkTableFixedLayoutExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTableFixedLayoutExample, selectors: [["cdk-table-fixed-layout-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", "fixedLayout", "", 3, "dataSource"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableFixedLayoutExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, CdkTableFixedLayoutExample_th_2_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(3, CdkTableFixedLayoutExample_td_3_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, CdkTableFixedLayoutExample_th_5_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(6, CdkTableFixedLayoutExample_td_6_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 5);
                i0__namespace.ɵɵtemplate(8, CdkTableFixedLayoutExample_th_8_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(9, CdkTableFixedLayoutExample_td_9_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 6);
                i0__namespace.ɵɵtemplate(11, CdkTableFixedLayoutExample_th_11_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(12, CdkTableFixedLayoutExample_td_12_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, CdkTableFixedLayoutExample_tr_13_Template, 1, 0, "tr", 7);
                i0__namespace.ɵɵtemplate(14, CdkTableFixedLayoutExample_tr_14_Template, 1, 0, "tr", 8);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTableFixedLayoutExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-table-fixed-layout-example', template: "<table cdk-table [dataSource]=\"dataSource\" fixedLayout>\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nth {\n  text-align: left;\n}\n"] }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$1 = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkTableRecycleRowsExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableRecycleRowsExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function CdkTableRecycleRowsExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableRecycleRowsExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function CdkTableRecycleRowsExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableRecycleRowsExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function CdkTableRecycleRowsExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkTableRecycleRowsExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function CdkTableRecycleRowsExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 11);
        }
    }
    function CdkTableRecycleRowsExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 12);
        }
    }
    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table that uses the recycle view repeater strategy.
     */
    var CdkTableRecycleRowsExample = /** @class */ (function () {
        function CdkTableRecycleRowsExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource();
        }
        return CdkTableRecycleRowsExample;
    }());
    CdkTableRecycleRowsExample.ɵfac = function CdkTableRecycleRowsExample_Factory(t) { return new (t || CdkTableRecycleRowsExample)(); };
    CdkTableRecycleRowsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkTableRecycleRowsExample, selectors: [["cdk-table-recycle-rows-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", "recycleRows", "", 1, "example-table", 3, "dataSource"], ["cdkColumnDef", "position"], ["class", "example-row", "cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", "", 1, "example-row"], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableRecycleRowsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, CdkTableRecycleRowsExample_th_2_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(3, CdkTableRecycleRowsExample_td_3_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, CdkTableRecycleRowsExample_th_5_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(6, CdkTableRecycleRowsExample_td_6_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 5);
                i0__namespace.ɵɵtemplate(8, CdkTableRecycleRowsExample_th_8_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(9, CdkTableRecycleRowsExample_td_9_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 6);
                i0__namespace.ɵɵtemplate(11, CdkTableRecycleRowsExample_th_11_Template, 2, 0, "th", 2);
                i0__namespace.ɵɵtemplate(12, CdkTableRecycleRowsExample_td_12_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, CdkTableRecycleRowsExample_tr_13_Template, 1, 0, "tr", 7);
                i0__namespace.ɵɵtemplate(14, CdkTableRecycleRowsExample_tr_14_Template, 1, 0, "tr", 8);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace.CdkRecycleRows, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-row[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTableRecycleRowsExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-table-recycle-rows-example', template: "<table class=\"example-table\" cdk-table recycleRows [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th class=\"example-row\" cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-row {\n  text-align: left;\n}\n"] }]
            }], null, null);
    })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var EXAMPLES = [
        CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample,
        CdkTableRecycleRowsExample,
    ];
    var CdkTableExamplesModule = /** @class */ (function () {
        function CdkTableExamplesModule() {
        }
        return CdkTableExamplesModule;
    }());
    CdkTableExamplesModule.ɵfac = function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); };
    CdkTableExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
    CdkTableExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CdkTableModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkTableExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CdkTableModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
                CdkTableFlexBasicExample,
                CdkTableFixedLayoutExample,
                CdkTableRecycleRowsExample], imports: [i1.CdkTableModule], exports: [CdkTableBasicExample,
                CdkTableFlexBasicExample,
                CdkTableFixedLayoutExample,
                CdkTableRecycleRowsExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkTableBasicExample = CdkTableBasicExample;
    exports.CdkTableExamplesModule = CdkTableExamplesModule;
    exports.CdkTableFixedLayoutExample = CdkTableFixedLayoutExample;
    exports.CdkTableFlexBasicExample = CdkTableFlexBasicExample;
    exports.CdkTableRecycleRowsExample = CdkTableRecycleRowsExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-table.umd.js.map
