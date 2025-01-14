(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/progress-bar'), require('@angular/material/tree'), require('@angular/cdk/collections'), require('@angular/cdk/tree'), require('rxjs'), require('@angular/material/form-field'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/tree', ['exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/input', '@angular/material/progress-bar', '@angular/material/tree', '@angular/cdk/collections', '@angular/cdk/tree', 'rxjs', '@angular/material/form-field', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.tree = {}), global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.input, global.ng.material.progressBar, global.ng.material.tree, global.ng.cdk.collections, global.ng.cdk.tree, global.rxjs, global.ng.material.formField, global.rxjs.operators));
}(this, (function (exports, i4$1, i0, i2, i3, i3$1, i5, i5$1, i1, collections, tree, rxjs, i4, operators) { 'use strict';

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

    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

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

    function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵelementStart(2, "mat-checkbox", 5);
            i0__namespace.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var node_r3 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(node_r3.item);
        }
    }
    function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 6);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵelementStart(2, "mat-form-field", 7);
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵtext(4, "New item...");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "input", 8, 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "button", 10);
            i0__namespace.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_7_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r9_1); var node_r6 = restoredCtx.$implicit; var _r7 = i0__namespace.ɵɵreference(6); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
            i0__namespace.ɵɵtext(8, "Save");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 6);
            i0__namespace.ɵɵelementStart(1, "button", 11);
            i0__namespace.ɵɵelementStart(2, "mat-icon", 12);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-checkbox", 13);
            i0__namespace.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r12_1); var node_r10 = restoredCtx.$implicit; var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "button", 14);
            i0__namespace.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r12_1); var node_r10 = restoredCtx.$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
            i0__namespace.ɵɵelementStart(7, "mat-icon");
            i0__namespace.ɵɵtext(8, "add");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r10 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r10.item);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(node_r10.item);
        }
    }
    /**
     * Node for to-do item
     */
    var TodoItemNode = /** @class */ (function () {
        function TodoItemNode() {
        }
        return TodoItemNode;
    }());
    /** Flat to-do item node with expandable and level information */
    var TodoItemFlatNode = /** @class */ (function () {
        function TodoItemFlatNode() {
        }
        return TodoItemFlatNode;
    }());
    /**
     * The Json object for to-do list data.
     */
    var TREE_DATA$2 = {
        Groceries: {
            'Almond Meal flour': null,
            'Organic eggs': null,
            'Protein Powder': null,
            Fruits: {
                Apple: null,
                Berries: ['Blueberry', 'Raspberry'],
                Orange: null
            }
        },
        Reminders: [
            'Cook dinner',
            'Read the Material Design spec',
            'Upgrade Application to Angular'
        ]
    };
    /**
     * Checklist database, it can build a tree structured Json object.
     * Each node in Json object represents a to-do item or a category.
     * If a node is a category, it has children items and new items can be added under the category.
     */
    var ChecklistDatabase = /** @class */ (function () {
        function ChecklistDatabase() {
            this.dataChange = new rxjs.BehaviorSubject([]);
            this.initialize();
        }
        Object.defineProperty(ChecklistDatabase.prototype, "data", {
            get: function () { return this.dataChange.value; },
            enumerable: false,
            configurable: true
        });
        ChecklistDatabase.prototype.initialize = function () {
            // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
            //     file node as children.
            var data = this.buildFileTree(TREE_DATA$2, 0);
            // Notify the change.
            this.dataChange.next(data);
        };
        /**
         * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
         * The return value is the list of `TodoItemNode`.
         */
        ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
            var _this = this;
            return Object.keys(obj).reduce(function (accumulator, key) {
                var value = obj[key];
                var node = new TodoItemNode();
                node.item = key;
                if (value != null) {
                    if (typeof value === 'object') {
                        node.children = _this.buildFileTree(value, level + 1);
                    }
                    else {
                        node.item = value;
                    }
                }
                return accumulator.concat(node);
            }, []);
        };
        /** Add an item to to-do list */
        ChecklistDatabase.prototype.insertItem = function (parent, name) {
            if (parent.children) {
                parent.children.push({ item: name });
                this.dataChange.next(this.data);
            }
        };
        ChecklistDatabase.prototype.updateItem = function (node, name) {
            node.item = name;
            this.dataChange.next(this.data);
        };
        return ChecklistDatabase;
    }());
    ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
    ChecklistDatabase.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ChecklistDatabase, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();
    /**
     * @title Tree with checkboxes
     */
    var TreeChecklistExample = /** @class */ (function () {
        function TreeChecklistExample(_database) {
            var _this = this;
            this._database = _database;
            /** Map from flat node to nested node. This helps us finding the nested node to be modified */
            this.flatNodeMap = new Map();
            /** Map from nested node to flattened node. This helps us to keep the same object for selection */
            this.nestedNodeMap = new Map();
            /** A selected parent node to be inserted */
            this.selectedParent = null;
            /** The new item's name */
            this.newItemName = '';
            /** The selection for checklist */
            this.checklistSelection = new collections.SelectionModel(true /* multiple */);
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.getChildren = function (node) { return node.children; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
            /**
             * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
             */
            this.transformer = function (node, level) {
                var _a;
                var existingNode = _this.nestedNodeMap.get(node);
                var flatNode = existingNode && existingNode.item === node.item
                    ? existingNode
                    : new TodoItemFlatNode();
                flatNode.item = node.item;
                flatNode.level = level;
                flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
                _this.flatNodeMap.set(flatNode, node);
                _this.nestedNodeMap.set(node, flatNode);
                return flatNode;
            };
            this.treeFlattener = new i1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            _database.dataChange.subscribe(function (data) {
                _this.dataSource.data = data;
            });
        }
        /** Whether all the descendants of the node are selected. */
        TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
            var _this = this;
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
                return _this.checklistSelection.isSelected(child);
            });
            return descAllSelected;
        };
        /** Whether part of the descendants are selected */
        TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
            var _this = this;
            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
            return result && !this.descendantsAllSelected(node);
        };
        /** Toggle the to-do item selection. Select/deselect all the descendants node */
        TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
            var _b, _c;
            var _this = this;
            this.checklistSelection.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.checklistSelection.isSelected(node)
                ? (_b = this.checklistSelection).select.apply(_b, __spreadArray([], __read(descendants), false)) : (_c = this.checklistSelection).deselect.apply(_c, __spreadArray([], __read(descendants), false));
            // Force update for the parent
            descendants.forEach(function (child) { return _this.checklistSelection.isSelected(child); });
            this.checkAllParentsSelection(node);
        };
        /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
        TreeChecklistExample.prototype.todoLeafItemSelectionToggle = function (node) {
            this.checklistSelection.toggle(node);
            this.checkAllParentsSelection(node);
        };
        /* Checks all the parents when a leaf node is selected/unselected */
        TreeChecklistExample.prototype.checkAllParentsSelection = function (node) {
            var parent = this.getParentNode(node);
            while (parent) {
                this.checkRootNodeSelection(parent);
                parent = this.getParentNode(parent);
            }
        };
        /** Check root node checked state and change it accordingly */
        TreeChecklistExample.prototype.checkRootNodeSelection = function (node) {
            var _this = this;
            var nodeSelected = this.checklistSelection.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
                return _this.checklistSelection.isSelected(child);
            });
            if (nodeSelected && !descAllSelected) {
                this.checklistSelection.deselect(node);
            }
            else if (!nodeSelected && descAllSelected) {
                this.checklistSelection.select(node);
            }
        };
        /* Get the parent node of a node */
        TreeChecklistExample.prototype.getParentNode = function (node) {
            var currentLevel = this.getLevel(node);
            if (currentLevel < 1) {
                return null;
            }
            var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
            for (var i = startIndex; i >= 0; i--) {
                var currentNode = this.treeControl.dataNodes[i];
                if (this.getLevel(currentNode) < currentLevel) {
                    return currentNode;
                }
            }
            return null;
        };
        /** Select the category so we can insert the new item. */
        TreeChecklistExample.prototype.addNewItem = function (node) {
            var parentNode = this.flatNodeMap.get(node);
            this._database.insertItem(parentNode, '');
            this.treeControl.expand(node);
        };
        /** Save the node to database */
        TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
            var nestedNode = this.flatNodeMap.get(node);
            this._database.updateItem(nestedNode, itemValue);
        };
        return TreeChecklistExample;
    }());
    TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0__namespace.ɵɵdirectiveInject(ChecklistDatabase)); };
    TreeChecklistExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0__namespace.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Ex. Lettuce"], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 9, 0, "mat-tree-node", 2);
                i0__namespace.ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodeToggle, i1__namespace.MatTreeNodePadding, i2__namespace.MatButton, i3__namespace.MatCheckbox, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i3__namespace$1.MatIcon], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeChecklistExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-checklist-example', providers: [ChecklistDatabase], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>New item...</mat-label>\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.item\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".mat-form-field {\n  margin-right: 4px;\n}\n"] }]
            }], function () { return [{ type: ChecklistDatabase }]; }, null);
    })();

    function TreeDynamicExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.item, " ");
        }
    }
    function TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-progress-bar", 8);
        }
    }
    function TreeDynamicExample_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelementStart(1, "button", 5);
            i0__namespace.ɵɵelementStart(2, "mat-icon", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵtemplate(5, TreeDynamicExample_mat_tree_node_2_mat_progress_bar_5_Template, 1, 0, "mat-progress-bar", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.item);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.item, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", node_r3.isLoading);
        }
    }
    /** Flat node with expandable and level information */
    var DynamicFlatNode = /** @class */ (function () {
        function DynamicFlatNode(item, level, expandable, isLoading) {
            if (level === void 0) { level = 1; }
            if (expandable === void 0) { expandable = false; }
            if (isLoading === void 0) { isLoading = false; }
            this.item = item;
            this.level = level;
            this.expandable = expandable;
            this.isLoading = isLoading;
        }
        return DynamicFlatNode;
    }());
    /**
     * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
     * the descendants data from the database.
     */
    var DynamicDatabase = /** @class */ (function () {
        function DynamicDatabase() {
            this.dataMap = new Map([
                ['Fruits', ['Apple', 'Orange', 'Banana']],
                ['Vegetables', ['Tomato', 'Potato', 'Onion']],
                ['Apple', ['Fuji', 'Macintosh']],
                ['Onion', ['Yellow', 'White', 'Purple']]
            ]);
            this.rootLevelNodes = ['Fruits', 'Vegetables'];
        }
        /** Initial data from database */
        DynamicDatabase.prototype.initialData = function () {
            return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
        };
        DynamicDatabase.prototype.getChildren = function (node) {
            return this.dataMap.get(node);
        };
        DynamicDatabase.prototype.isExpandable = function (node) {
            return this.dataMap.has(node);
        };
        return DynamicDatabase;
    }());
    DynamicDatabase.ɵfac = function DynamicDatabase_Factory(t) { return new (t || DynamicDatabase)(); };
    DynamicDatabase.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DynamicDatabase, factory: DynamicDatabase.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DynamicDatabase, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();
    /**
     * File database, it can build a tree structured Json object from string.
     * Each node in Json object represents a file or a directory. For a file, it has filename and type.
     * For a directory, it has filename and children (a list of files or directories).
     * The input will be a json object string, and the output is a list of `FileNode` with nested
     * structure.
     */
    var DynamicDataSource = /** @class */ (function () {
        function DynamicDataSource(_treeControl, _database) {
            this._treeControl = _treeControl;
            this._database = _database;
            this.dataChange = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(DynamicDataSource.prototype, "data", {
            get: function () { return this.dataChange.value; },
            set: function (value) {
                this._treeControl.dataNodes = value;
                this.dataChange.next(value);
            },
            enumerable: false,
            configurable: true
        });
        DynamicDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            this._treeControl.expansionModel.changed.subscribe(function (change) {
                if (change.added ||
                    change.removed) {
                    _this.handleTreeControl(change);
                }
            });
            return rxjs.merge(collectionViewer.viewChange, this.dataChange).pipe(operators.map(function () { return _this.data; }));
        };
        DynamicDataSource.prototype.disconnect = function (collectionViewer) { };
        /** Handle expand/collapse behaviors */
        DynamicDataSource.prototype.handleTreeControl = function (change) {
            var _this = this;
            if (change.added) {
                change.added.forEach(function (node) { return _this.toggleNode(node, true); });
            }
            if (change.removed) {
                change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
            }
        };
        /**
         * Toggle the node, remove from display list
         */
        DynamicDataSource.prototype.toggleNode = function (node, expand) {
            var _this = this;
            var children = this._database.getChildren(node.item);
            var index = this.data.indexOf(node);
            if (!children || index < 0) { // If no children, or cannot find the node, no op
                return;
            }
            node.isLoading = true;
            setTimeout(function () {
                var _a;
                if (expand) {
                    var nodes = children.map(function (name) { return new DynamicFlatNode(name, node.level + 1, _this._database.isExpandable(name)); });
                    (_a = _this.data).splice.apply(_a, __spreadArray([index + 1, 0], __read(nodes), false));
                }
                else {
                    var count = 0;
                    for (var i = index + 1; i < _this.data.length
                        && _this.data[i].level > node.level; i++, count++) { }
                    _this.data.splice(index + 1, count);
                }
                // notify the change
                _this.dataChange.next(_this.data);
                node.isLoading = false;
            }, 1000);
        };
        return DynamicDataSource;
    }());
    /**
     * @title Tree with dynamic data
     */
    var TreeDynamicExample = /** @class */ (function () {
        function TreeDynamicExample(database) {
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new DynamicDataSource(this.treeControl, database);
            this.dataSource.data = database.initialData();
        }
        return TreeDynamicExample;
    }());
    TreeDynamicExample.ɵfac = function TreeDynamicExample_Factory(t) { return new (t || TreeDynamicExample)(i0__namespace.ɵɵdirectiveInject(DynamicDatabase)); };
    TreeDynamicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeDynamicExample, selectors: [["tree-dynamic-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["mode", "indeterminate", "class", "example-tree-progress-bar", 4, "ngIf"], ["mode", "indeterminate", 1, "example-tree-progress-bar"]], template: function TreeDynamicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeDynamicExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeDynamicExample_mat_tree_node_2_Template, 6, 4, "mat-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodePadding, i2__namespace.MatButton, i1__namespace.MatTreeNodeToggle, i3__namespace$1.MatIcon, i4__namespace$1.NgIf, i5__namespace$1.MatProgressBar], styles: [".example-tree-progress-bar[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeDynamicExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-dynamic-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n", styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"] }]
            }], function () { return [{ type: DynamicDatabase }]; }, null);
    })();

    function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelementStart(1, "button", 5);
            i0__namespace.ɵɵelementStart(2, "mat-icon", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.name, " ");
        }
    }
    var TREE_DATA$1 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussels sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with flat nodes
     */
    var TreeFlatOverviewExample = /** @class */ (function () {
        function TreeFlatOverviewExample() {
            this._transformer = function (node, level) {
                return {
                    expandable: !!node.children && node.children.length > 0,
                    name: node.name,
                    level: level,
                };
            };
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.treeFlattener = new i1.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            this.hasChild = function (_, node) { return node.expandable; };
            this.dataSource.data = TREE_DATA$1;
        }
        return TreeFlatOverviewExample;
    }());
    TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
    TreeFlatOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodePadding, i2__namespace.MatButton, i1__namespace.MatTreeNodeToggle, i3__namespace$1.MatIcon], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeFlatOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-flat-overview-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [""] }]
            }], function () { return []; }, null);
    })();

    function TreeHarnessExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelement(1, "button", 4);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function TreeHarnessExample_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵelementStart(1, "button", 5);
            i0__namespace.ɵɵelementStart(2, "mat-icon", 6);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.name, " ");
        }
    }
    var FLAT_TREE_DATA = [
        {
            name: 'Flat Group 1',
            children: [
                { name: 'Flat Leaf 1.1' },
                { name: 'Flat Leaf 1.2' },
                { name: 'Flat Leaf 1.3' },
            ]
        }, {
            name: 'Flat Group 2',
            children: [
                {
                    name: 'Flat Group 2.1',
                    children: [
                        { name: 'Flat Leaf 2.1.1' },
                        { name: 'Flat Leaf 2.1.2' },
                        { name: 'Flat Leaf 2.1.3' },
                    ]
                }
            ]
        },
    ];
    /**
     * @title Testing with MatTreeHarness
     */
    var TreeHarnessExample = /** @class */ (function () {
        function TreeHarnessExample() {
            this._transformer = function (node, level) {
                return {
                    expandable: !!node.children && node.children.length > 0,
                    name: node.name,
                    level: level,
                };
            };
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.treeFlattener = new i1.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            this.hasChild = function (_, node) { return node.expandable; };
            this.dataSource.data = FLAT_TREE_DATA;
        }
        return TreeHarnessExample;
    }());
    TreeHarnessExample.ɵfac = function TreeHarnessExample_Factory(t) { return new (t || TreeHarnessExample)(); };
    TreeHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeHarnessExample, selectors: [["tree-harness-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeHarnessExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeHarnessExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodePadding, i2__namespace.MatButton, i1__namespace.MatTreeNodeToggle, i3__namespace$1.MatIcon], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeHarnessExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-harness-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
            }], function () { return []; }, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function TreeLoadmoreExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 4);
            i0__namespace.ɵɵelement(1, "button", 5);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.item, " ");
        }
    }
    function TreeLoadmoreExample_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 4);
            i0__namespace.ɵɵelementStart(1, "button", 6);
            i0__namespace.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_2_Template_button_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var node_r4 = restoredCtx.$implicit; var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.loadChildren(node_r4); });
            i0__namespace.ɵɵelementStart(2, "mat-icon", 7);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r4 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r4.item);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r4.item, " ");
        }
    }
    function TreeLoadmoreExample_mat_tree_node_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node");
            i0__namespace.ɵɵelementStart(1, "button", 8);
            i0__namespace.ɵɵlistener("click", function TreeLoadmoreExample_mat_tree_node_3_Template_button_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r9_1); var node_r7 = restoredCtx.$implicit; var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.loadMore(node_r7.loadMoreParentItem); });
            i0__namespace.ɵɵtext(2, " Load more... ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var LOAD_MORE = 'LOAD_MORE';
    /** Nested node */
    var LoadmoreNode = /** @class */ (function () {
        function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
            if (hasChildren === void 0) { hasChildren = false; }
            if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
            this.item = item;
            this.hasChildren = hasChildren;
            this.loadMoreParentItem = loadMoreParentItem;
            this.childrenChange = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(LoadmoreNode.prototype, "children", {
            get: function () {
                return this.childrenChange.value;
            },
            enumerable: false,
            configurable: true
        });
        return LoadmoreNode;
    }());
    /** Flat node with expandable and level information */
    var LoadmoreFlatNode = /** @class */ (function () {
        function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
            if (level === void 0) { level = 1; }
            if (expandable === void 0) { expandable = false; }
            if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
            this.item = item;
            this.level = level;
            this.expandable = expandable;
            this.loadMoreParentItem = loadMoreParentItem;
        }
        return LoadmoreFlatNode;
    }());
    /**
     * A database that only load part of the data initially. After user clicks on the `Load more`
     * button, more data will be loaded.
     */
    var LoadmoreDatabase = /** @class */ (function () {
        function LoadmoreDatabase() {
            this.batchNumber = 5;
            this.dataChange = new rxjs.BehaviorSubject([]);
            this.nodeMap = new Map();
            /** The data */
            this.rootLevelNodes = ['Vegetables', 'Fruits'];
            this.dataMap = new Map([
                ['Fruits', ['Apple', 'Orange', 'Banana']],
                ['Vegetables', ['Tomato', 'Potato', 'Onion']],
                ['Apple', ['Fuji', 'Macintosh']],
                ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
            ]);
        }
        LoadmoreDatabase.prototype.initialize = function () {
            var _this = this;
            var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
            this.dataChange.next(data);
        };
        /** Expand a node whose children are not loaded */
        LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
            var _this = this;
            if (onlyFirstTime === void 0) { onlyFirstTime = false; }
            if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
                return;
            }
            var parent = this.nodeMap.get(item);
            var children = this.dataMap.get(item);
            if (onlyFirstTime && parent.children.length > 0) {
                return;
            }
            var newChildrenNumber = parent.children.length + this.batchNumber;
            var nodes = children.slice(0, newChildrenNumber)
                .map(function (name) { return _this._generateNode(name); });
            if (newChildrenNumber < children.length) {
                // Need a new load more node
                nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
            }
            parent.childrenChange.next(nodes);
            this.dataChange.next(this.dataChange.value);
        };
        LoadmoreDatabase.prototype._generateNode = function (item) {
            if (this.nodeMap.has(item)) {
                return this.nodeMap.get(item);
            }
            var result = new LoadmoreNode(item, this.dataMap.has(item));
            this.nodeMap.set(item, result);
            return result;
        };
        return LoadmoreDatabase;
    }());
    LoadmoreDatabase.ɵfac = function LoadmoreDatabase_Factory(t) { return new (t || LoadmoreDatabase)(); };
    LoadmoreDatabase.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LoadmoreDatabase, factory: LoadmoreDatabase.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoadmoreDatabase, [{
                type: i0.Injectable
            }], null, null);
    })();
    /**
     * @title Tree with partially loaded data
     */
    var TreeLoadmoreExample = /** @class */ (function () {
        function TreeLoadmoreExample(_database) {
            var _this = this;
            this._database = _database;
            this.nodeMap = new Map();
            this.getChildren = function (node) { return node.childrenChange; };
            this.transformer = function (node, level) {
                var existingNode = _this.nodeMap.get(node.item);
                if (existingNode) {
                    return existingNode;
                }
                var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
                _this.nodeMap.set(node.item, newNode);
                return newNode;
            };
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
            this.treeFlattener = new i1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new i1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            _database.dataChange.subscribe(function (data) {
                _this.dataSource.data = data;
            });
            _database.initialize();
        }
        /** Load more nodes from data source */
        TreeLoadmoreExample.prototype.loadMore = function (item) {
            this._database.loadMore(item);
        };
        TreeLoadmoreExample.prototype.loadChildren = function (node) {
            this._database.loadMore(node.item, true);
        };
        return TreeLoadmoreExample;
    }());
    TreeLoadmoreExample.ɵfac = function TreeLoadmoreExample_Factory(t) { return new (t || TreeLoadmoreExample)(i0__namespace.ɵɵdirectiveInject(LoadmoreDatabase)); };
    TreeLoadmoreExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeLoadmoreExample, selectors: [["tree-loadmore-example"]], features: [i0__namespace.ɵɵProvidersFeature([LoadmoreDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"], ["mat-button", "", 3, "click"]], template: function TreeLoadmoreExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeLoadmoreExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeLoadmoreExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
                i0__namespace.ɵɵtemplate(3, TreeLoadmoreExample_mat_tree_node_3_Template, 3, 0, "mat-tree-node", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.isLoadMore);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodePadding, i2__namespace.MatButton, i1__namespace.MatTreeNodeToggle, i3__namespace$1.MatIcon], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeLoadmoreExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-loadmore-example', providers: [LoadmoreDatabase], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'Toggle ' + node.item\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n", styles: [""] }]
            }], function () { return [{ type: LoadmoreDatabase }]; }, null);
    })();

    function TreeNestedOverviewExample_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function TreeNestedOverviewExample_mat_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-nested-tree-node");
            i0__namespace.ɵɵelementStart(1, "div", 4);
            i0__namespace.ɵɵelementStart(2, "button", 5);
            i0__namespace.ɵɵelementStart(3, "mat-icon", 6);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "div", 7);
            i0__namespace.ɵɵelementContainer(7, 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.name, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵclassProp("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
        }
    }
    var TREE_DATA = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussels sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with nested nodes
     */
    var TreeNestedOverviewExample = /** @class */ (function () {
        function TreeNestedOverviewExample() {
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new i1.MatTreeNestedDataSource();
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
            this.dataSource.data = TREE_DATA;
        }
        return TreeNestedOverviewExample;
    }());
    TreeNestedOverviewExample.ɵfac = function TreeNestedOverviewExample_Factory(t) { return new (t || TreeNestedOverviewExample)(); };
    TreeNestedOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeNestedOverviewExample, selectors: [["tree-nested-overview-example"]], decls: 3, vars: 3, consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""]], template: function TreeNestedOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tree", 0);
                i0__namespace.ɵɵtemplate(1, TreeNestedOverviewExample_mat_tree_node_1_Template, 2, 1, "mat-tree-node", 1);
                i0__namespace.ɵɵtemplate(2, TreeNestedOverviewExample_mat_nested_tree_node_2_Template, 8, 5, "mat-nested-tree-node", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1__namespace.MatTree, i1__namespace.MatTreeNodeDef, i1__namespace.MatTreeNode, i1__namespace.MatTreeNodeToggle, i1__namespace.MatNestedTreeNode, i2__namespace.MatButton, i3__namespace$1.MatIcon, i1__namespace.MatTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n\n.example-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]    > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeNestedOverviewExample, [{
                type: i0.Component,
                args: [{ selector: 'tree-nested-overview-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'Toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <!-- There is inline padding applied to this div using styles.\n          This padding value depends on the mat-icon-button width.  -->\n      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n          role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-tree-node {\n  padding-left: 40px;\n}\n"] }]
            }], function () { return []; }, null);
    })();

    var EXAMPLES = [
        TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeHarnessExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample,
    ];
    var TreeExamplesModule = /** @class */ (function () {
        function TreeExamplesModule() {
        }
        return TreeExamplesModule;
    }());
    TreeExamplesModule.ɵfac = function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); };
    TreeExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TreeExamplesModule });
    TreeExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4$1.CommonModule,
                i2.MatButtonModule,
                i3.MatCheckboxModule,
                i3$1.MatIconModule,
                i5.MatInputModule,
                i5$1.MatProgressBarModule,
                i1.MatTreeModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4$1.CommonModule,
                            i2.MatButtonModule,
                            i3.MatCheckboxModule,
                            i3$1.MatIconModule,
                            i5.MatInputModule,
                            i5$1.MatProgressBarModule,
                            i1.MatTreeModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
                TreeDynamicExample,
                TreeFlatOverviewExample,
                TreeHarnessExample,
                TreeLoadmoreExample,
                TreeNestedOverviewExample], imports: [i4$1.CommonModule,
                i2.MatButtonModule,
                i3.MatCheckboxModule,
                i3$1.MatIconModule,
                i5.MatInputModule,
                i5$1.MatProgressBarModule,
                i1.MatTreeModule], exports: [TreeChecklistExample,
                TreeDynamicExample,
                TreeFlatOverviewExample,
                TreeHarnessExample,
                TreeLoadmoreExample,
                TreeNestedOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TreeChecklistExample = TreeChecklistExample;
    exports.TreeDynamicExample = TreeDynamicExample;
    exports.TreeExamplesModule = TreeExamplesModule;
    exports.TreeFlatOverviewExample = TreeFlatOverviewExample;
    exports.TreeHarnessExample = TreeHarnessExample;
    exports.TreeLoadmoreExample = TreeLoadmoreExample;
    exports.TreeNestedOverviewExample = TreeNestedOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-tree.umd.js.map
