import * as i2 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i1$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import * as i7 from '@angular/material/core';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

const _c0 = ["fruitInput"];
function ChipsAutocompleteExample_mat_chip_5_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ChipsAutocompleteExample_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 9);
    i0.ɵɵlistener("removed", function ChipsAutocompleteExample_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const fruit_r5 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.remove(fruit_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsAutocompleteExample_mat_chip_5_button_2_Template, 3, 0, "button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r5, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
function ChipsAutocompleteExample_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", fruit_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r9, " ");
} }
/**
 * @title Chips Autocomplete
 */
class ChipsAutocompleteExample {
    constructor() {
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
}
ChipsAutocompleteExample.ɵfac = function ChipsAutocompleteExample_Factory(t) { return new (t || ChipsAutocompleteExample)(); };
ChipsAutocompleteExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsAutocompleteExample, selectors: [["chips-autocomplete-example"]], viewQuery: function ChipsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fruitInput = _t.first);
    } }, decls: 12, vars: 8, consts: [["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["fruitInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "value"]], template: function ChipsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite Fruits");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip-list", 1, 2);
        i0.ɵɵtemplate(5, ChipsAutocompleteExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
        i0.ɵɵelementStart(6, "input", 4, 5);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsAutocompleteExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-autocomplete", 6, 7);
        i0.ɵɵlistener("optionSelected", function ChipsAutocompleteExample_Template_mat_autocomplete_optionSelected_8_listener($event) { return ctx.selected($event); });
        i0.ɵɵtemplate(10, ChipsAutocompleteExample_mat_option_10_Template, 2, 2, "mat-option", 8);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        const _r3 = i0.ɵɵreference(9);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.fruitCtrl)("matAutocomplete", _r3)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 6, ctx.filteredFruits));
    } }, directives: [i1.MatFormField, i1.MatLabel, i1$1.MatChipList, i3.NgForOf, i4.DefaultValueAccessor, i5.MatAutocompleteTrigger, i1$1.MatChipInput, i4.NgControlStatus, i4.FormControlDirective, i5.MatAutocomplete, i1$1.MatChip, i3.NgIf, i1$1.MatChipRemove, i6.MatIcon, i7.MatOption], pipes: [i3.AsyncPipe], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsAutocompleteExample, [{
        type: Component,
        args: [{ selector: 'chips-autocomplete-example', template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit}}\n      <button matChipRemove *ngIf=\"removable\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{fruit}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
    }], function () { return []; }, { fruitInput: [{
            type: ViewChild,
            args: ['fruitInput']
        }] }); })();

function ChipsDragDropExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vegetable_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vegetable_r1.name, " ");
} }
/**
 * @title Chips Drag and Drop
 */
class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
}
ChipsDragDropExample.ɵfac = function ChipsDragDropExample_Factory(t) { return new (t || ChipsDragDropExample)(); };
ChipsDragDropExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsDragDropExample, selectors: [["chips-drag-drop-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-chip", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function ChipsDragDropExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵlistener("cdkDropListDropped", function ChipsDragDropExample_Template_mat_chip_list_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, ChipsDragDropExample_mat_chip_1_Template, 2, 1, "mat-chip", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.vegetables);
    } }, directives: [i1$1.MatChipList, i2.CdkDropList, i3.NgForOf, i1$1.MatChip, i2.CdkDrag], styles: [".example-box.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsDragDropExample, [{
        type: Component,
        args: [{ selector: 'chips-drag-drop-example', template: "<mat-chip-list\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-list>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
    }], null, null); })();

function ChipsInputExample_mat_chip_5_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ChipsInputExample_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 5);
    i0.ɵɵlistener("removed", function ChipsInputExample_mat_chip_5_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const fruit_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.remove(fruit_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ChipsInputExample_mat_chip_5_button_2_Template, 3, 0, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", fruit_r2.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.removable);
} }
/**
 * @title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
}
ChipsInputExample.ɵfac = function ChipsInputExample_Factory(t) { return new (t || ChipsInputExample)(); };
ChipsInputExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsInputExample, selectors: [["chips-input-example"]], decls: 7, vars: 4, consts: [["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New fruit...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function ChipsInputExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite Fruits");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip-list", 1, 2);
        i0.ɵɵtemplate(5, ChipsInputExample_mat_chip_5_Template, 3, 4, "mat-chip", 3);
        i0.ɵɵelementStart(6, "input", 4);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsInputExample_Template_input_matChipInputTokenEnd_6_listener($event) { return ctx.add($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.fruits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
    } }, directives: [i1.MatFormField, i1.MatLabel, i1$1.MatChipList, i3.NgForOf, i1$1.MatChipInput, i1$1.MatChip, i3.NgIf, i1$1.MatChipRemove, i6.MatIcon], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsInputExample, [{
        type: Component,
        args: [{ selector: 'chips-input-example', template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n             [removable]=\"removable\" (removed)=\"remove(fruit)\">\n      {{fruit.name}}\n      <button matChipRemove *ngIf=\"removable\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipList\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

/**
 * @title Basic chips
 */
class ChipsOverviewExample {
}
ChipsOverviewExample.ɵfac = function ChipsOverviewExample_Factory(t) { return new (t || ChipsOverviewExample)(); };
ChipsOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsOverviewExample, selectors: [["chips-overview-example"]], decls: 9, vars: 0, consts: [["aria-label", "Fish selection"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function ChipsOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵelementStart(1, "mat-chip");
        i0.ɵɵtext(2, "One fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip");
        i0.ɵɵtext(4, "Two fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-chip", 1);
        i0.ɵɵtext(6, "Primary fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-chip", 2);
        i0.ɵɵtext(8, "Accent fish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1$1.MatChipList, i1$1.MatChip], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsOverviewExample, [{
        type: Component,
        args: [{ selector: 'chips-overview-example', template: "<mat-chip-list aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n</mat-chip-list>\n" }]
    }], null, null); })();

function ChipsStackedExample_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r1 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r1.name, " ");
} }
/**
 * @title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.ɵfac = function ChipsStackedExample_Factory(t) { return new (t || ChipsStackedExample)(); };
ChipsStackedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsStackedExample, selectors: [["chips-stacked-example"]], decls: 2, vars: 1, consts: [["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color"]], template: function ChipsStackedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵtemplate(1, ChipsStackedExample_mat_chip_1_Template, 2, 2, "mat-chip", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.availableColors);
    } }, directives: [i1$1.MatChipList, i3.NgForOf, i1$1.MatChip], styles: ["mat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsStackedExample, [{
        type: Component,
        args: [{ selector: 'chips-stacked-example', template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n", styles: ["mat-chip {\n  max-width: 200px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Testing with MatChipsHarness
 */
class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
}
ChipsHarnessExample.ɵfac = function ChipsHarnessExample_Factory(t) { return new (t || ChipsHarnessExample)(); };
ChipsHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsHarnessExample, selectors: [["chips-harness-example"]], decls: 11, vars: 2, consts: [[3, "disabled", "aria-orientation"], [3, "removed"], ["matChipRemove", ""]], template: function ChipsHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-chip-list", 0);
        i0.ɵɵelementStart(1, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_1_listener() { return ctx.remove(); });
        i0.ɵɵtext(2, "Chip 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_3_listener() { return ctx.remove(); });
        i0.ɵɵtext(4, "Chip 2 ");
        i0.ɵɵelementStart(5, "span", 2);
        i0.ɵɵtext(6, "remove_icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-chip", 1);
        i0.ɵɵlistener("removed", function ChipsHarnessExample_Template_mat_chip_removed_7_listener() { return ctx.remove(); });
        i0.ɵɵelementStart(8, "mat-chip-avatar");
        i0.ɵɵtext(9, "C");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, "Chip 4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.isDisabled)("aria-orientation", "horizontal");
    } }, directives: [i1$1.MatChipList, i1$1.MatChip, i1$1.MatChipRemove, i1$1.MatChipAvatar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsHarnessExample, [{
        type: Component,
        args: [{ selector: 'chips-harness-example', template: "<mat-chip-list\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip (removed)=\"remove()\">Chip 1</mat-chip>\n  <mat-chip (removed)=\"remove()\">Chip 2 <span matChipRemove>remove_icon</span></mat-chip>\n  <mat-chip (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip>\n</mat-chip-list>\n" }]
    }], null, null); })();

function ChipsFormControlExample_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 7);
    i0.ɵɵlistener("removed", function ChipsFormControlExample_mat_chip_15_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const keyword_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.removeKeyword(keyword_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    i0.ɵɵproperty("selected", keyword_r2)("value", keyword_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", keyword_r2, " ");
} }
/**
 * @title Chips with form control
 */
class ChipsFormControlExample {
    constructor() {
        this.keywords = new Set(['angular', 'how-to', 'tutorial']);
        this.formControl = new FormControl(['angular']);
    }
    addKeywordFromInput(event) {
        if (event.value) {
            this.keywords.add(event.value);
            event.chipInput.clear();
        }
    }
    removeKeyword(keyword) {
        this.keywords.delete(keyword);
    }
}
ChipsFormControlExample.ɵfac = function ChipsFormControlExample_Factory(t) { return new (t || ChipsFormControlExample)(); };
ChipsFormControlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChipsFormControlExample, selectors: [["chips-form-control-example"]], decls: 21, vars: 4, consts: [[1, "example-button-container"], ["mat-raised-button", "", 3, "click"], ["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Video keywords", "multiple", "", 3, "formControl"], ["chipList", ""], [3, "selected", "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New keyword...", 3, "matChipInputFor", "matChipInputTokenEnd"], [3, "selected", "value", "removed"]], template: function ChipsFormControlExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_1_listener() { return ctx.formControl.disable(); });
        i0.ɵɵtext(2, "Disable form control");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function ChipsFormControlExample_Template_button_click_3_listener() { return ctx.formControl.enable(); });
        i0.ɵɵtext(4, "Enable form control");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵelementStart(6, "i");
        i0.ɵɵtext(7, "Select a focused chip by pressing ");
        i0.ɵɵelementStart(8, "code");
        i0.ɵɵtext(9, "SPACE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-form-field", 2);
        i0.ɵɵelementStart(11, "mat-label");
        i0.ɵɵtext(12, "Video keywords");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-chip-list", 3, 4);
        i0.ɵɵtemplate(15, ChipsFormControlExample_mat_chip_15_Template, 2, 3, "mat-chip", 5);
        i0.ɵɵelementStart(16, "input", 6);
        i0.ɵɵlistener("matChipInputTokenEnd", function ChipsFormControlExample_Template_input_matChipInputTokenEnd_16_listener($event) { return ctx.addKeywordFromInput($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵelementStart(18, "b");
        i0.ɵɵtext(19, "The following keywords are selected:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(14);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("formControl", ctx.formControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.keywords);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matChipInputFor", _r0);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.formControl.value, "\n");
    } }, directives: [i1$2.MatButton, i1.MatFormField, i1.MatLabel, i1$1.MatChipList, i4.NgControlStatus, i4.FormControlDirective, i3.NgForOf, i1$1.MatChipInput, i1$1.MatChip], styles: [".example-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-button-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsFormControlExample, [{
        type: Component,
        args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n\n<p>\n  <i>Select a focused chip by pressing <code>SPACE</code></i>\n</p>\n\n<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-list #chipList aria-label=\"Video keywords\" multiple [formControl]=\"formControl\">\n    <mat-chip\n        *ngFor=\"let keyword of keywords\"\n        [selected]=\"keyword\"\n        [value]=\"keyword\"\n        (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n    </mat-chip>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"chipList\"\n      (matChipInputTokenEnd)=\"addKeywordFromInput($event)\">\n  </mat-chip-list>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are selected:</b> {{formControl.value}}\n</p>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
    }], null, null); })();

const EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ChipsHarnessExample,
    ChipsFormControlExample,
];
class ChipsExamplesModule {
}
ChipsExamplesModule.ɵfac = function ChipsExamplesModule_Factory(t) { return new (t || ChipsExamplesModule)(); };
ChipsExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ChipsExamplesModule });
ChipsExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            DragDropModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatChipsModule,
            MatIconModule,
            MatFormFieldModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChipsExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatChipsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChipsExamplesModule, { declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample], imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsExamplesModule, ChipsFormControlExample, ChipsHarnessExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample };
//# sourceMappingURL=chips.js.map
