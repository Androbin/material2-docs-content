import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/slider";
function SliderConfigurableExample_mat_checkbox_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 4);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    i0.ɵɵtext(1, " Auto ticks ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 2);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Tick interval");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 3);
    i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * @title Configurable slider
 */
export class SliderConfigurableExample {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this.tickInterval = 1;
    }
    getSliderTickInterval() {
        if (this.showTicks) {
            return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
    }
}
SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
SliderConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 49, vars: 23, consts: [[1, "example-h2"], [1, "example-section"], ["appearance", "fill", 1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", "appearance", "fill", 4, "ngIf"], [1, "example-result-card"], [1, "example-label-container"], ["id", "example-name-label", 1, "example-name-label"], [1, "example-value-label"], ["aria-labelledby", "example-name-label", 1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Slider configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "mat-form-field", 2);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 2);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Min value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.min = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field", 2);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Max value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_16_listener($event) { return ctx.max = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field", 2);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Step size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "input", 3);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_20_listener($event) { return ctx.step = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "section", 1);
        i0.ɵɵelementStart(22, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.showTicks = $event; });
        i0.ɵɵtext(23, "Show ticks");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, SliderConfigurableExample_mat_checkbox_24_Template, 2, 1, "mat-checkbox", 5);
        i0.ɵɵtemplate(25, SliderConfigurableExample_mat_form_field_25_Template, 4, 1, "mat-form-field", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "section", 1);
        i0.ɵɵelementStart(27, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.thumbLabel = $event; });
        i0.ɵɵtext(28, "Show thumb label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "section", 1);
        i0.ɵɵelementStart(30, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_30_listener($event) { return ctx.vertical = $event; });
        i0.ɵɵtext(31, "Vertical");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.invert = $event; });
        i0.ɵɵtext(33, "Inverted");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "section", 1);
        i0.ɵɵelementStart(35, "mat-checkbox", 4);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(36, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-card", 7);
        i0.ɵɵelementStart(38, "mat-card-content");
        i0.ɵɵelementStart(39, "h2");
        i0.ɵɵtext(40, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(41, "br");
        i0.ɵɵelement(42, "br");
        i0.ɵɵelementStart(43, "div", 8);
        i0.ɵɵelementStart(44, "label", 9);
        i0.ɵɵtext(45, "Max Value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "label", 10);
        i0.ɵɵtext(47);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "mat-slider", 11);
        i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_48_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.min);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.max);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.step);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.showTicks);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showTicks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showTicks && !ctx.autoTicks);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.thumbLabel);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.vertical);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.invert);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(8);
        i0.ɵɵclassMap(ctx.vertical ? "example-label-vertical" : "example-label-horizontal");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i7.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-value-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{ selector: 'slider-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\" *ngIf=\"showTicks && !autoTicks\">\n        <mat-label>Tick interval</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n    <br>\n    <br>\n\n    <div class=\"example-label-container\" [class]=\"vertical ? 'example-label-vertical' : 'example-label-horizontal'\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Max Value</label>\n      <label class=\"example-value-label\">{{value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"getSliderTickInterval()\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\"\n        aria-labelledby=\"example-name-label\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 0 8px 16px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 8px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n\n.mat-card + .mat-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-result-card .example-label-container.example-label-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card .example-label-container.example-label-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUN5QmxDLHVDQUErRTtJQUExQyx5T0FBdUI7SUFDMUQsNEJBQ0Y7SUFBQSxpQkFBZTs7O0lBRnNCLDBDQUF1Qjs7OztJQUc1RCx5Q0FBeUY7SUFDdkYsaUNBQVc7SUFBQSw2QkFBYTtJQUFBLGlCQUFZO0lBQ3BDLGdDQUF5RDtJQUEzQix1T0FBMEI7SUFBeEQsaUJBQXlEO0lBQzNELGlCQUFpQjs7O0lBRGUsZUFBMEI7SUFBMUIsNkNBQTBCOztBRDVCaEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxDQUFD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KlxuICogQHRpdGxlIENvbmZpZ3VyYWJsZSBzbGlkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBhdXRvVGlja3MgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgaW52ZXJ0ID0gZmFsc2U7XG4gIG1heCA9IDEwMDtcbiAgbWluID0gMDtcbiAgc2hvd1RpY2tzID0gZmFsc2U7XG4gIHN0ZXAgPSAxO1xuICB0aHVtYkxhYmVsID0gZmFsc2U7XG4gIHZhbHVlID0gMDtcbiAgdmVydGljYWwgPSBmYWxzZTtcbiAgdGlja0ludGVydmFsID0gMTtcblxuICBnZXRTbGlkZXJUaWNrSW50ZXJ2YWwoKTogbnVtYmVyIHwgJ2F1dG8nIHtcbiAgICBpZiAodGhpcy5zaG93VGlja3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmF1dG9UaWNrcyA/ICdhdXRvJyA6IHRoaXMudGlja0ludGVydmFsO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5TbGlkZXIgY29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPlZhbHVlPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5NaW4gdmFsdWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cIm1pblwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5NYXggdmFsdWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cIm1heFwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5TdGVwIHNpemU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInN0ZXBcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwic2hvd1RpY2tzXCI+U2hvdyB0aWNrczwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJhdXRvVGlja3NcIiAqbmdJZj1cInNob3dUaWNrc1wiPlxuICAgICAgICBBdXRvIHRpY2tzXG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgYXBwZWFyYW5jZT1cImZpbGxcIiAqbmdJZj1cInNob3dUaWNrcyAmJiAhYXV0b1RpY2tzXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+VGljayBpbnRlcnZhbDwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwidGlja0ludGVydmFsXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cInRodW1iTGFiZWxcIj5TaG93IHRodW1iIGxhYmVsPC9tYXQtY2hlY2tib3g+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwidmVydGljYWxcIj5WZXJ0aWNhbDwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgWyhuZ01vZGVsKV09XCJpbnZlcnRcIj5JbnZlcnRlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbKG5nTW9kZWwpXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1yZXN1bHQtY2FyZFwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8aDI+UmVzdWx0PC9oMj5cbiAgICA8YnI+XG4gICAgPGJyPlxuXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWwtY29udGFpbmVyXCIgW2NsYXNzXT1cInZlcnRpY2FsID8gJ2V4YW1wbGUtbGFiZWwtdmVydGljYWwnIDogJ2V4YW1wbGUtbGFiZWwtaG9yaXpvbnRhbCdcIj5cbiAgICAgIDxsYWJlbCBpZD1cImV4YW1wbGUtbmFtZS1sYWJlbFwiIGNsYXNzPVwiZXhhbXBsZS1uYW1lLWxhYmVsXCI+TWF4IFZhbHVlPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtdmFsdWUtbGFiZWxcIj57e3ZhbHVlfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxtYXQtc2xpZGVyXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbaW52ZXJ0XT1cImludmVydFwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICBbc3RlcF09XCJzdGVwXCJcbiAgICAgICAgW3RodW1iTGFiZWxdPVwidGh1bWJMYWJlbFwiXG4gICAgICAgIFt0aWNrSW50ZXJ2YWxdPVwiZ2V0U2xpZGVyVGlja0ludGVydmFsKClcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgICAgW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1uYW1lLWxhYmVsXCI+XG4gICAgPC9tYXQtc2xpZGVyPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19