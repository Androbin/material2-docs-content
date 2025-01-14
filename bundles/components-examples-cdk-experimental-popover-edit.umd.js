(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk-experimental/popover-edit'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk-experimental/popover-edit', ['exports', '@angular/cdk-experimental/popover-edit', '@angular/cdk/table', '@angular/common', '@angular/core', '@angular/forms', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdkExperimental = global.ng.componentsExamples.cdkExperimental || {}, global.ng.componentsExamples.cdkExperimental.popoverEdit = {}), global.ng.cdkExperimental.popoverEdit, global.ng.cdk.table, global.ng.common, global.ng.core, global.ng.forms, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1$1, i1, i2, i0, i3, collections, rxjs) { 'use strict';

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

    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

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

    function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "form", 13, 14);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_ngSubmit_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var element_r12 = restoredCtx.$implicit; var _r13 = i0__namespace.ɵɵreference(2); var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var element_r12 = restoredCtx.$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
            i0__namespace.ɵɵtext(3, " Edit b: ");
            i0__namespace.ɵɵelement(4, "input", 15);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 16);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 17);
            i0__namespace.ɵɵtext(9, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 18);
            i0__namespace.ɵɵtext(11, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r12.weight);
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r17 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r17.position, " ");
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "form", 13, 14);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0__namespace.ɵɵrestoreView(_r25_1); var _r22 = i0__namespace.ɵɵreference(2); var element_r18 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r23 = i0__namespace.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r25_1); var element_r18 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r26 = i0__namespace.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
            i0__namespace.ɵɵtext(3, " Edit a: ");
            i0__namespace.ɵɵelement(4, "input", 22);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 16);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 17);
            i0__namespace.ɵɵtext(9, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 18);
            i0__namespace.ɵɵtext(11, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r20 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r18.name);
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 23);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell", 19);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_ng_template_2_Template, 12, 2, "ng-template", null, 20, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_span_4_Template, 3, 0, "span", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = ctx.$implicit;
            var _r19 = i0__namespace.ɵɵreference(3);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r19);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r18.name, " ");
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 23);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell", 24);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_span_2_Template, 3, 0, "span", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r29 = ctx.$implicit;
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r29);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-header-cell");
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "cdk-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r31 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "cdk-header-row");
        }
    }
    function CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template(rf, ctx) {
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
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on a flex cdk-table.
     */
    var CdkPopoverEditCdkTableFlexExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return CdkPopoverEditCdkTableFlexExample;
    }());
    CdkPopoverEditCdkTableFlexExample.ɵfac = function CdkPopoverEditCdkTableFlexExample_Factory(t) { return new (t || CdkPopoverEditCdkTableFlexExample)(); };
    CdkPopoverEditCdkTableFlexExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableFlexExample, selectors: [["cdk-popover-edit-cdk-table-flex-example"]], decls: 17, vars: 3, consts: [["editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], [3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], [3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext"]], template: function CdkPopoverEditCdkTableFlexExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "cdk-table", 0);
                i0__namespace.ɵɵtemplate(1, CdkPopoverEditCdkTableFlexExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementContainerStart(3, 2);
                i0__namespace.ɵɵtemplate(4, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_4_Template, 2, 0, "cdk-header-cell", 3);
                i0__namespace.ɵɵtemplate(5, CdkPopoverEditCdkTableFlexExample_cdk_cell_5_Template, 2, 1, "cdk-cell", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(6, 5);
                i0__namespace.ɵɵtemplate(7, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_7_Template, 2, 0, "cdk-header-cell", 3);
                i0__namespace.ɵɵtemplate(8, CdkPopoverEditCdkTableFlexExample_cdk_cell_8_Template, 5, 2, "cdk-cell", 6);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(9, 7);
                i0__namespace.ɵɵtemplate(10, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_10_Template, 2, 0, "cdk-header-cell", 3);
                i0__namespace.ɵɵtemplate(11, CdkPopoverEditCdkTableFlexExample_cdk_cell_11_Template, 3, 3, "cdk-cell", 8);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(12, 9);
                i0__namespace.ɵɵtemplate(13, CdkPopoverEditCdkTableFlexExample_cdk_header_cell_13_Template, 2, 0, "cdk-header-cell", 3);
                i0__namespace.ɵɵtemplate(14, CdkPopoverEditCdkTableFlexExample_cdk_cell_14_Template, 2, 1, "cdk-cell", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(15, CdkPopoverEditCdkTableFlexExample_cdk_header_row_15_Template, 1, 0, "cdk-header-row", 10);
                i0__namespace.ɵɵtemplate(16, CdkPopoverEditCdkTableFlexExample_cdk_row_16_Template, 1, 0, "cdk-row", 11);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(15);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace$1.CdkEditable, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i3__namespace.ɵNgNoValidate, i3__namespace.NgControlStatusGroup, i3__namespace.NgForm, i1__namespace$1.CdkEditControl, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.RequiredValidator, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.CdkEditRevert, i1__namespace$1.CdkEditClose, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace$1.CdkPopoverEdit, i1__namespace$1.CdkRowHoverContent, i1__namespace$1.CdkEditOpen, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: [".example-table[_ngcontent-%COMP%]   cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-table[_ngcontent-%COMP%]   cdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditCdkTableFlexExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-popover-edit-cdk-table-flex-example', template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"] }]
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

    function CdkPopoverEditCdkTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "form", 13, 14);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var element_r12 = restoredCtx.$implicit; var _r13 = i0__namespace.ɵɵreference(2); var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var element_r12 = restoredCtx.$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
            i0__namespace.ɵɵtext(3, " Edit b: ");
            i0__namespace.ɵɵelement(4, "input", 15);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 16);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 17);
            i0__namespace.ɵɵtext(9, "Revert and close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r12.weight);
        }
    }
    function CdkPopoverEditCdkTableExample_th_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 18);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 19);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r17 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r17.position, " ");
        }
    }
    function CdkPopoverEditCdkTableExample_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 18);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "form", 13, 14);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0__namespace.ɵɵrestoreView(_r25_1); var _r22 = i0__namespace.ɵɵreference(2); var element_r18 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r23 = i0__namespace.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r25_1); var element_r18 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r26 = i0__namespace.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
            i0__namespace.ɵɵtext(3, " Edit a: ");
            i0__namespace.ɵɵelement(4, "input", 23);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 16);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 24);
            i0__namespace.ɵɵtext(9, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 25);
            i0__namespace.ɵɵtext(11, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r20 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r18.name);
        }
    }
    function CdkPopoverEditCdkTableExample_td_8_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 26);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 20);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template, 12, 2, "ng-template", null, 21, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_td_8_span_4_Template, 3, 0, "span", 22);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r18 = ctx.$implicit;
            var _r19 = i0__namespace.ɵɵreference(3);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r19);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r18.name, " ");
        }
    }
    function CdkPopoverEditCdkTableExample_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 18);
            i0__namespace.ɵɵtext(1, " Weight ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 26);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 27);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_11_span_2_Template, 3, 0, "span", 22);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r29 = ctx.$implicit;
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r29);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
        }
    }
    function CdkPopoverEditCdkTableExample_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 18);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCdkTableExample_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 19);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r31 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
        }
    }
    function CdkPopoverEditCdkTableExample_tr_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 28);
        }
    }
    function CdkPopoverEditCdkTableExample_tr_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 29);
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
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on a CDK data-table
     */
    var CdkPopoverEditCdkTableExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return CdkPopoverEditCdkTableExample;
    }());
    CdkPopoverEditCdkTableExample.ɵfac = function CdkPopoverEditCdkTableExample_Factory(t) { return new (t || CdkPopoverEditCdkTableExample)(); };
    CdkPopoverEditCdkTableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableExample, selectors: [["cdk-popover-edit-cdk-table-example"]], decls: 17, vars: 3, consts: [["cdk-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-cell", "", 3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", "", "cdkEditClose", ""], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-cell", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditRevert", ""], ["cdkEditClose", ""], ["cdkEditOpen", ""], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkPopoverEditCdkTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵtemplate(1, CdkPopoverEditCdkTableExample_ng_template_1_Template, 10, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementContainerStart(3, 2);
                i0__namespace.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_th_4_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(5, CdkPopoverEditCdkTableExample_td_5_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(6, 5);
                i0__namespace.ɵɵtemplate(7, CdkPopoverEditCdkTableExample_th_7_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(8, CdkPopoverEditCdkTableExample_td_8_Template, 5, 2, "td", 6);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(9, 7);
                i0__namespace.ɵɵtemplate(10, CdkPopoverEditCdkTableExample_th_10_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(11, CdkPopoverEditCdkTableExample_td_11_Template, 3, 3, "td", 8);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(12, 9);
                i0__namespace.ɵɵtemplate(13, CdkPopoverEditCdkTableExample_th_13_Template, 2, 0, "th", 3);
                i0__namespace.ɵɵtemplate(14, CdkPopoverEditCdkTableExample_td_14_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(15, CdkPopoverEditCdkTableExample_tr_15_Template, 1, 0, "tr", 10);
                i0__namespace.ɵɵtemplate(16, CdkPopoverEditCdkTableExample_tr_16_Template, 1, 0, "tr", 11);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(15);
                i0__namespace.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.CdkTable, i1__namespace$1.CdkEditable, i1__namespace.CdkColumnDef, i1__namespace.CdkHeaderCellDef, i1__namespace.CdkCellDef, i1__namespace.CdkHeaderRowDef, i1__namespace.CdkRowDef, i3__namespace.ɵNgNoValidate, i3__namespace.NgControlStatusGroup, i3__namespace.NgForm, i1__namespace$1.CdkEditControl, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.RequiredValidator, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.CdkEditRevert, i1__namespace$1.CdkEditClose, i1__namespace.CdkHeaderCell, i1__namespace.CdkCell, i1__namespace$1.CdkPopoverEdit, i1__namespace$1.CdkRowHoverContent, i1__namespace$1.CdkEditOpen, i1__namespace.CdkHeaderRow, i1__namespace.CdkRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditCdkTableExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-popover-edit-cdk-table-example', template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"] }]
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

    function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "form", 4, 5);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r3 = restoredCtx.$implicit; var _r4 = i0__namespace.ɵɵreference(2); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onSubmit(ctx_r3.person, _r4); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r3 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.preservedValues.set(ctx_r3.person, $event); });
            i0__namespace.ɵɵelementStart(3, "div", 6);
            i0__namespace.ɵɵelement(4, "input", 7);
            i0__namespace.ɵɵelement(5, "input", 8);
            i0__namespace.ɵɵelement(6, "input", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(7, "br");
            i0__namespace.ɵɵelement(8, "br");
            i0__namespace.ɵɵelementStart(9, "button", 10);
            i0__namespace.ɵɵtext(10, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "button", 11);
            i0__namespace.ɵɵtext(12, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "button", 12);
            i0__namespace.ɵɵtext(14, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedValues.get(ctx_r3.person));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", ctx_r3.person.firstName);
            i0__namespace.ɵɵattribute("cdkFocusInitial", ctx_r3.focus === "firstName" || null);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r3.person.middleName);
            i0__namespace.ɵɵattribute("cdkFocusInitial", ctx_r3.focus === "middleName" || null);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r3.person.lastName);
            i0__namespace.ɵɵattribute("cdkFocusInitial", ctx_r3.focus === "lastName" || null);
        }
    }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c0 = function (a0) { return { person: a0, focus: "firstName" }; };
    var _c1 = function () { return { after: 2 }; };
    var _c2 = function (a0) { return { person: a0, focus: "middleName" }; };
    var _c3 = function () { return { before: 1, after: 1 }; };
    var _c4 = function (a0) { return { person: a0, focus: "lastName" }; };
    var _c5 = function () { return { before: 2 }; };
    function CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td", 13);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵtemplate(5, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_5_Template, 3, 0, "span", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "td", 13);
            i0__namespace.ɵɵtext(7);
            i0__namespace.ɵɵtemplate(8, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_8_Template, 3, 0, "span", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "td", 13);
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵtemplate(11, CdkPopoverEditCellSpanVanillaTableExample_tr_12_span_11_Template, 3, 0, "span", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var person_r8 = ctx.$implicit;
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", person_r8.id, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", i0__namespace.ɵɵpureFunction1(13, _c0, person_r8))("cdkPopoverEditColspan", i0__namespace.ɵɵpureFunction0(15, _c1));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", person_r8.firstName, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", i0__namespace.ɵɵpureFunction1(16, _c2, person_r8))("cdkPopoverEditColspan", i0__namespace.ɵɵpureFunction0(18, _c3));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", person_r8.middleName, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", i0__namespace.ɵɵpureFunction1(19, _c4, person_r8))("cdkPopoverEditColspan", i0__namespace.ɵɵpureFunction0(21, _c5));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", person_r8.lastName, " ");
        }
    }
    var PERSON_DATA = [
        { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
        { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
        { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
        { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
        { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
        { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
        { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
        { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
        { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
    ];
    /**
     * @title CDK Popover Edit spanning multiple columns on an HTML data-table
     */
    var CdkPopoverEditCellSpanVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditCellSpanVanillaTableExample() {
            this.preservedValues = new WeakMap();
            this.persons = PERSON_DATA;
        }
        CdkPopoverEditCellSpanVanillaTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        return CdkPopoverEditCellSpanVanillaTableExample;
    }());
    CdkPopoverEditCellSpanVanillaTableExample.ɵfac = function CdkPopoverEditCellSpanVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditCellSpanVanillaTableExample)(); };
    CdkPopoverEditCellSpanVanillaTableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPopoverEditCellSpanVanillaTableExample, selectors: [["cdk-popover-edit-cell-span-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["nameEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "#ddd", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], [1, "example-input-container"], ["name", "firstName", "required", "", 3, "ngModel"], ["name", "middleName", 3, "ngModel"], ["name", "lastName", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan"], [4, "cdkRowHoverContent"], ["cdkEditOpen", ""]], template: function CdkPopoverEditCellSpanVanillaTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵtemplate(1, CdkPopoverEditCellSpanVanillaTableExample_ng_template_1_Template, 15, 7, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(3, "tr");
                i0__namespace.ɵɵelementStart(4, "th");
                i0__namespace.ɵɵtext(5, " No. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th");
                i0__namespace.ɵɵtext(7, " First name ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "th");
                i0__namespace.ɵɵtext(9, " Middle name ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "th");
                i0__namespace.ɵɵtext(11, " Last name ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, CdkPopoverEditCellSpanVanillaTableExample_tr_12_Template, 12, 22, "tr", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("ngForOf", ctx.persons);
            }
        }, directives: [i1__namespace$1.CdkEditable, i2__namespace.NgForOf, i3__namespace.ɵNgNoValidate, i3__namespace.NgControlStatusGroup, i3__namespace.NgForm, i1__namespace$1.CdkEditControl, i3__namespace.DefaultValueAccessor, i3__namespace.RequiredValidator, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.CdkEditRevert, i1__namespace$1.CdkEditClose, i1__namespace$1.CdkPopoverEdit, i1__namespace$1.CdkRowHoverContent, i1__namespace$1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditCellSpanVanillaTableExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-popover-edit-cell-span-vanilla-table-example', template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"] }]
            }], null, null);
    })();

    function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "form", 4, 5);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var element_r3 = restoredCtx.$implicit; var _r4 = i0__namespace.ɵɵreference(2); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onSubmitWeight(element_r3, _r4); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var element_r3 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.preservedWeightValues.set(element_r3, $event); });
            i0__namespace.ɵɵelement(3, "input", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r3));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", element_r3.weight);
        }
    }
    function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "form", 4, 5);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var _r11 = i0__namespace.ɵɵreference(2); var element_r8 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r12 = i0__namespace.ɵɵnextContext(); return ctx_r12.onSubmitName(element_r8, _r11); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var element_r8 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.preservedNameValues.set(element_r8, $event); });
            i0__namespace.ɵɵelement(3, "input", 10);
            i0__namespace.ɵɵelement(4, "br");
            i0__namespace.ɵɵelementStart(5, "button", 11);
            i0__namespace.ɵɵtext(6, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r8 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r10.preservedNameValues.get(element_r8));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngModel", element_r8.name);
        }
    }
    function CdkPopoverEditTabOutVanillaTableExample_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td", 7);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵtemplate(5, CdkPopoverEditTabOutVanillaTableExample_tr_12_ng_template_5_Template, 7, 2, "ng-template", null, 8, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "td", 9);
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "td");
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r8 = ctx.$implicit;
            var _r9 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.position, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.name, " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.weight, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
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
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
     */
    var CdkPopoverEditTabOutVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditTabOutVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA$1;
        }
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return CdkPopoverEditTabOutVanillaTableExample;
    }());
    CdkPopoverEditTabOutVanillaTableExample.ɵfac = function CdkPopoverEditTabOutVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditTabOutVanillaTableExample)(); };
    CdkPopoverEditTabOutVanillaTableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPopoverEditTabOutVanillaTableExample, selectors: [["cdk-popover-edit-tab-out-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", "cdkEditControlClickOutBehavior", "submit", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], ["cdkPopoverEditTabOut", "", "cdkEditOpen", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["type", "submit"]], template: function CdkPopoverEditTabOutVanillaTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵtemplate(1, CdkPopoverEditTabOutVanillaTableExample_ng_template_1_Template, 4, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(3, "tr");
                i0__namespace.ɵɵelementStart(4, "th");
                i0__namespace.ɵɵtext(5, " No. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th");
                i0__namespace.ɵɵtext(7, " Name ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "th");
                i0__namespace.ɵɵtext(9, " Weight ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "th");
                i0__namespace.ɵɵtext(11, " Symbol ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, CdkPopoverEditTabOutVanillaTableExample_tr_12_Template, 11, 7, "tr", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("ngForOf", ctx.elements);
            }
        }, directives: [i1__namespace$1.CdkEditable, i2__namespace.NgForOf, i3__namespace.ɵNgNoValidate, i3__namespace.NgControlStatusGroup, i3__namespace.NgForm, i1__namespace$1.CdkEditControl, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.RequiredValidator, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.CdkEditOpen, i1__namespace$1.CdkPopoverEditTabOut], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditTabOutVanillaTableExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-popover-edit-tab-out-vanilla-table-example', template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          cdkEditControlClickOutBehavior=\"submit\"\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\" cdkPopoverEditTabOut cdkEditOpen>\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              cdkEditControlClickOutBehavior=\"submit\"\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n          </form>\n        </div>\n      </ng-template>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\"\n        cdkPopoverEditTabOut cdkEditOpen>\n      {{element.weight}}\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"] }]
            }], null, null);
    })();

    function CdkPopoverEditVanillaTableExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "form", 4, 5);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var element_r3 = restoredCtx.$implicit; var _r4 = i0__namespace.ɵɵreference(2); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onSubmitWeight(element_r3, _r4); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var element_r3 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.preservedWeightValues.set(element_r3, $event); });
            i0__namespace.ɵɵtext(3, " Edit b: ");
            i0__namespace.ɵɵelement(4, "input", 6);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 7);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 8);
            i0__namespace.ɵɵtext(9, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 9);
            i0__namespace.ɵɵtext(11, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r3));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r3.weight);
        }
    }
    function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "form", 4, 5);
            i0__namespace.ɵɵlistener("ngSubmit", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_ngSubmit_1_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var _r13 = i0__namespace.ɵɵreference(2); var element_r8 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.onSubmitName(element_r8, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r16_1); var element_r8 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r17 = i0__namespace.ɵɵnextContext(); return ctx_r17.preservedNameValues.set(element_r8, $event); });
            i0__namespace.ɵɵtext(3, " Edit a: ");
            i0__namespace.ɵɵelement(4, "input", 14);
            i0__namespace.ɵɵelement(5, "br");
            i0__namespace.ɵɵelementStart(6, "button", 7);
            i0__namespace.ɵɵtext(7, "Confirm");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 8);
            i0__namespace.ɵɵtext(9, "Revert");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 9);
            i0__namespace.ɵɵtext(11, "Close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r8 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r10.preservedNameValues.get(element_r8));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", element_r8.name);
        }
    }
    function CdkPopoverEditVanillaTableExample_tr_12_span_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditVanillaTableExample_tr_12_span_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function CdkPopoverEditVanillaTableExample_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td", 10);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵtemplate(5, CdkPopoverEditVanillaTableExample_tr_12_ng_template_5_Template, 12, 2, "ng-template", null, 11, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵtemplate(7, CdkPopoverEditVanillaTableExample_tr_12_span_7_Template, 3, 0, "span", 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "td", 13);
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵtemplate(10, CdkPopoverEditVanillaTableExample_tr_12_span_10_Template, 3, 0, "span", 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "td");
            i0__namespace.ɵɵtext(12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r8 = ctx.$implicit;
            var _r9 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.position, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.name, " ");
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r8);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.weight, " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
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
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on an HTML data-table
     */
    var CdkPopoverEditVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA;
        }
        CdkPopoverEditVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        return CdkPopoverEditVanillaTableExample;
    }());
    CdkPopoverEditVanillaTableExample.ɵfac = function CdkPopoverEditVanillaTableExample_Factory(t) { return new (t || CdkPopoverEditVanillaTableExample)(); };
    CdkPopoverEditVanillaTableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkPopoverEditVanillaTableExample, selectors: [["cdk-popover-edit-vanilla-table-example"]], decls: 13, vars: 1, consts: [["editable", "", 1, "example-table"], ["weightEdit", ""], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "width", "100%"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", ""], ["cdkEditClose", ""], [3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], [3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditOpen", ""]], template: function CdkPopoverEditVanillaTableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵtemplate(1, CdkPopoverEditVanillaTableExample_ng_template_1_Template, 12, 2, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(3, "tr");
                i0__namespace.ɵɵelementStart(4, "th");
                i0__namespace.ɵɵtext(5, " No. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th");
                i0__namespace.ɵɵtext(7, " Name ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "th");
                i0__namespace.ɵɵtext(9, " Weight ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "th");
                i0__namespace.ɵɵtext(11, " Symbol ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, CdkPopoverEditVanillaTableExample_tr_12_Template, 13, 7, "tr", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(12);
                i0__namespace.ɵɵproperty("ngForOf", ctx.elements);
            }
        }, directives: [i1__namespace$1.CdkEditable, i2__namespace.NgForOf, i3__namespace.ɵNgNoValidate, i3__namespace.NgControlStatusGroup, i3__namespace.NgForm, i1__namespace$1.CdkEditControl, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.RequiredValidator, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.CdkEditRevert, i1__namespace$1.CdkEditClose, i1__namespace$1.CdkPopoverEdit, i1__namespace$1.CdkRowHoverContent, i1__namespace$1.CdkEditOpen], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: 25%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditVanillaTableExample, [{
                type: i0.Component,
                args: [{ selector: 'cdk-popover-edit-vanilla-table-example', template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"] }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkPopoverEditCdkTableExample,
        CdkPopoverEditCdkTableFlexExample,
        CdkPopoverEditCellSpanVanillaTableExample,
        CdkPopoverEditTabOutVanillaTableExample,
        CdkPopoverEditVanillaTableExample,
    ];
    var CdkPopoverEditExamplesModule = /** @class */ (function () {
        function CdkPopoverEditExamplesModule() {
        }
        return CdkPopoverEditExamplesModule;
    }());
    CdkPopoverEditExamplesModule.ɵfac = function CdkPopoverEditExamplesModule_Factory(t) { return new (t || CdkPopoverEditExamplesModule)(); };
    CdkPopoverEditExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkPopoverEditExamplesModule });
    CdkPopoverEditExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CdkPopoverEditModule,
                i1.CdkTableModule,
                i3.FormsModule,
                i2.CommonModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkPopoverEditExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CdkPopoverEditModule,
                            i1.CdkTableModule,
                            i3.FormsModule,
                            i2.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkPopoverEditExamplesModule, { declarations: [CdkPopoverEditCdkTableExample,
                CdkPopoverEditCdkTableFlexExample,
                CdkPopoverEditCellSpanVanillaTableExample,
                CdkPopoverEditTabOutVanillaTableExample,
                CdkPopoverEditVanillaTableExample], imports: [i1$1.CdkPopoverEditModule,
                i1.CdkTableModule,
                i3.FormsModule,
                i2.CommonModule], exports: [CdkPopoverEditCdkTableExample,
                CdkPopoverEditCdkTableFlexExample,
                CdkPopoverEditCellSpanVanillaTableExample,
                CdkPopoverEditTabOutVanillaTableExample,
                CdkPopoverEditVanillaTableExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkPopoverEditCdkTableExample = CdkPopoverEditCdkTableExample;
    exports.CdkPopoverEditCdkTableFlexExample = CdkPopoverEditCdkTableFlexExample;
    exports.CdkPopoverEditCellSpanVanillaTableExample = CdkPopoverEditCellSpanVanillaTableExample;
    exports.CdkPopoverEditExamplesModule = CdkPopoverEditExamplesModule;
    exports.CdkPopoverEditTabOutVanillaTableExample = CdkPopoverEditTabOutVanillaTableExample;
    exports.CdkPopoverEditVanillaTableExample = CdkPopoverEditVanillaTableExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-experimental-popover-edit.umd.js.map
