import * as i0 from '@angular/core';
import { Component, Injectable, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i2$1 from '@angular/material/stepper';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import * as i4 from '@angular/material/form-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i2$2 from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with editable steps
 */
class StepperEditableExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperEditableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener() { return ctx.isEditable = !ctx.isEditable; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "button", 8);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 3);
        i0.ɵɵelementStart(15, "form", 4);
        i0.ɵɵtemplate(16, StepperEditableExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(17, "mat-form-field", 6);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 10);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 8);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step");
        i0.ɵɵtemplate(27, StepperEditableExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div");
        i0.ɵɵelementStart(31, "button", 10);
        i0.ɵɵtext(32, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "button", 11);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(34, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperEditableExample, [{
        type: Component,
        args: [{ selector: 'stepper-editable-example', template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-stepper linear #stepper>\n<!-- #docregion editable -->\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n<!-- #enddocregion editable -->\n    <form [formGroup]=\"firstFormGroup\">\n<!-- #docregion step-label -->\n      <ng-template matStepLabel>Fill out your name</ng-template>\n<!-- #enddocregion step-label -->\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"firstCtrl\" placeholder=\"Last name, First name\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperErrorsExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperErrorsExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperErrorsExample_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper that displays errors in the steps
 */
class StepperErrorsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperErrorsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0.ɵɵProvidersFeature([{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
            }])], decls: 37, vars: 4, consts: [["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Ex. 1 Main St, New York, NY", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-stepper", null, 0);
        i0.ɵɵelementStart(2, "mat-step", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(5, "mat-form-field", 4);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11, "Go to a different step to see the error state");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 6);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 7);
        i0.ɵɵelementStart(15, "form", 2);
        i0.ɵɵtemplate(16, StepperErrorsExample_ng_template_16_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(17, "mat-form-field", 4);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23, "Go to a different step to see the error state");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 9);
        i0.ɵɵtext(25, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "button", 6);
        i0.ɵɵtext(27, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-step");
        i0.ɵɵtemplate(29, StepperErrorsExample_ng_template_29_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(30, "p");
        i0.ɵɵtext(31, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div");
        i0.ɵɵelementStart(33, "button", 9);
        i0.ɵɵtext(34, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 10);
        i0.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(1); return _r0.reset(); });
        i0.ɵɵtext(36, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperErrorsExample, [{
        type: Component,
        args: [{ selector: 'stepper-errors-example', providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }], template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <p>Go to a different step to see the error state</p>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput placeholder=\"Ex. 1 Main St, New York, NY\" formControlName=\"secondCtrl\"\n               required>\n      </mat-form-field>\n      <div>\n        <p>Go to a different step to see the error state</p>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperLabelPositionBottomExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperLabelPositionBottomExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper label bottom position
 */
class StepperLabelPositionBottomExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperLabelPositionBottomExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 33, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-stepper", 0, 1);
        i0.ɵɵelementStart(2, "mat-step", 2);
        i0.ɵɵelementStart(3, "form", 3);
        i0.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(5, "mat-form-field", 5);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "button", 7);
        i0.ɵɵtext(11, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-step", 8);
        i0.ɵɵelementStart(13, "form", 3);
        i0.ɵɵtemplate(14, StepperLabelPositionBottomExample_ng_template_14_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(15, "mat-form-field", 5);
        i0.ɵɵelementStart(16, "mat-label");
        i0.ɵɵtext(17, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div");
        i0.ɵɵelementStart(20, "button", 10);
        i0.ɵɵtext(21, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 7);
        i0.ɵɵtext(23, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-step");
        i0.ɵɵtemplate(25, StepperLabelPositionBottomExample_ng_template_25_Template, 1, 0, "ng-template", 4);
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div");
        i0.ɵɵelementStart(29, "button", 10);
        i0.ɵɵtext(30, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "button", 11);
        i0.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(1); return _r0.reset(); });
        i0.ɵɵtext(32, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
        type: Component,
        args: [{ selector: 'stepper-label-position-bottom-example', template: "<!-- #docregion label-position -->\n<mat-stepper labelPosition=\"bottom\" #stepper>\n<!-- #enddocregion label-position -->\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n<!-- #docregion buttons -->\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n<!-- #enddocregion buttons -->\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperOptionalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperOptionalExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperOptionalExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with optional steps
 */
class StepperOptionalExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    }
}
StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperOptionalExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener() { return ctx.isOptional = !ctx.isOptional; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "button", 8);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 9);
        i0.ɵɵelementStart(15, "form", 4);
        i0.ɵɵtemplate(16, StepperOptionalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(17, "mat-form-field", 6);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 11);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 8);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step");
        i0.ɵɵtemplate(27, StepperOptionalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div");
        i0.ɵɵelementStart(31, "button", 11);
        i0.ɵɵtext(32, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "button", 12);
        i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(34, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperOptionalExample, [{
        type: Component,
        args: [{ selector: 'stepper-optional-example', template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">\n  {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\n</button>\n\n<mat-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <!-- #docregion optional -->\n  <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n  <!-- #enddocregion optional -->\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperOverviewExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperOverviewExample_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper overview
 */
class StepperOverviewExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 34, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "button", 8);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 9);
        i0.ɵɵelementStart(15, "form", 4);
        i0.ɵɵelementStart(16, "mat-form-field", 6);
        i0.ɵɵelementStart(17, "mat-label");
        i0.ɵɵtext(18, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div");
        i0.ɵɵelementStart(21, "button", 11);
        i0.ɵɵtext(22, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 8);
        i0.ɵɵtext(24, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-step");
        i0.ɵɵtemplate(26, StepperOverviewExample_ng_template_26_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵtext(28, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "div");
        i0.ɵɵelementStart(30, "button", 11);
        i0.ɵɵtext(31, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "button", 12);
        i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(33, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("linear", ctx.isLinear);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperOverviewExample, [{
        type: Component,
        args: [{ selector: 'stepper-overview-example', template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <!-- #docregion label -->\n  <mat-step [stepControl]=\"secondFormGroup\" label=\"Fill out your address\">\n  <!-- #enddocregion label -->\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperStatesExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperStatesExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperStatesExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
function StepperStatesExample_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "call_end");
    i0.ɵɵelementEnd();
} }
function StepperStatesExample_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "forum");
    i0.ɵɵelementEnd();
} }
/**
 * @title Stepper with customized states
 */
class StepperStatesExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperStatesExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [i0.ɵɵProvidersFeature([{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
            }])], decls: 53, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-stepper", null, 0);
        i0.ɵɵelementStart(2, "mat-step", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(5, "mat-form-field", 4);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "button", 6);
        i0.ɵɵtext(11, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-step", 1);
        i0.ɵɵelementStart(13, "form", 2);
        i0.ɵɵtemplate(14, StepperStatesExample_ng_template_14_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(15, "mat-form-field", 4);
        i0.ɵɵelementStart(16, "mat-label");
        i0.ɵɵtext(17, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div");
        i0.ɵɵelementStart(20, "button", 8);
        i0.ɵɵtext(21, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 6);
        i0.ɵɵtext(23, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-step");
        i0.ɵɵtemplate(25, StepperStatesExample_ng_template_25_Template, 1, 0, "ng-template", 3);
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div");
        i0.ɵɵelementStart(29, "button", 8);
        i0.ɵɵtext(30, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "button", 9);
        i0.ɵɵlistener("click", function StepperStatesExample_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(1); return _r0.reset(); });
        i0.ɵɵtext(32, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "mat-stepper");
        i0.ɵɵelementStart(34, "mat-step", 10);
        i0.ɵɵelementStart(35, "p");
        i0.ɵɵtext(36, "Put down your phones.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div");
        i0.ɵɵelementStart(38, "button", 6);
        i0.ɵɵtext(39, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "mat-step", 11);
        i0.ɵɵelementStart(41, "p");
        i0.ɵɵtext(42, "Socialize with each other.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "div");
        i0.ɵɵelementStart(44, "button", 8);
        i0.ɵɵtext(45, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 6);
        i0.ɵɵtext(47, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "mat-step", 12);
        i0.ɵɵelementStart(49, "p");
        i0.ɵɵtext(50, "You're welcome.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(51, StepperStatesExample_ng_template_51_Template, 2, 0, "ng-template", 13);
        i0.ɵɵtemplate(52, StepperStatesExample_ng_template_52_Template, 2, 0, "ng-template", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i2$1.MatStepperNext, i2$1.MatStepperPrevious, i2$1.MatStepperIcon, i6.MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperStatesExample, [{
        type: Component,
        args: [{ selector: 'stepper-states-example', providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                    }], template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n\n<!-- #docregion states -->\n<mat-stepper>\n<!-- #docregion label -->\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n<!-- #enddocregion label -->\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n<!-- #docregion override-icons -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-stepper>\n<!-- #enddocregion override-icons -->\n<!-- #enddocregion states -->\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperVerticalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperVerticalExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperVerticalExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper vertical
 */
class StepperVerticalExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
StepperVerticalExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], ["orientation", "vertical", 3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(7, "mat-form-field", 6);
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "button", 8);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 3);
        i0.ɵɵelementStart(15, "form", 4);
        i0.ɵɵtemplate(16, StepperVerticalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(17, "mat-form-field", 6);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 10);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 8);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step");
        i0.ɵɵtemplate(27, StepperVerticalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div");
        i0.ɵɵelementStart(31, "button", 10);
        i0.ɵɵtext(32, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "button", 11);
        i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(34, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("linear", ctx.isLinear);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2$1.MatStepperNext, i2$1.MatStepperPrevious], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperVerticalExample, [{
        type: Component,
        args: [{ selector: 'stepper-vertical-example', template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-stepper orientation=\"vertical\" [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

function StepperHarnessExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "One");
} }
function StepperHarnessExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Two");
} }
function StepperHarnessExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Three");
} }
/**
 * @title Testing with MatStepperHarness
 */
class StepperHarnessExample {
}
StepperHarnessExample.ɵfac = function StepperHarnessExample_Factory(t) { return new (t || StepperHarnessExample)(); };
StepperHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-stepper");
        i0.ɵɵelementStart(1, "mat-step");
        i0.ɵɵtemplate(2, StepperHarnessExample_ng_template_2_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵtext(4, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-step", 2);
        i0.ɵɵtemplate(6, StepperHarnessExample_ng_template_6_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵtext(8, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 1);
        i0.ɵɵtext(10, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-step", 2);
        i0.ɵɵtemplate(12, StepperHarnessExample_ng_template_12_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(13, "button", 3);
        i0.ɵɵtext(14, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i2$1.MatStepper, i2$1.MatStep, i2$1.MatStepLabel, i2$1.MatStepperNext, i2$1.MatStepperPrevious], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperHarnessExample, [{
        type: Component,
        args: [{ selector: 'stepper-harness-example', template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n" }]
    }], null, null); })();

function StepperIntlExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const optionalLabelTextChoice_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", optionalLabelTextChoice_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", optionalLabelTextChoice_r4, " ");
} }
function StepperIntlExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperIntlExample_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
}
StepperIntl.ɵfac = /*@__PURE__*/ function () { let ɵStepperIntl_BaseFactory; return function StepperIntl_Factory(t) { return (ɵStepperIntl_BaseFactory || (ɵStepperIntl_BaseFactory = i0.ɵɵgetInheritedFactory(StepperIntl)))(t || StepperIntl); }; }();
StepperIntl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepperIntl, factory: StepperIntl.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperIntl, [{
        type: Injectable
    }], null, null); })();
/**
 * @title Stepper that uses the MatStepperIntl service
 */
class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperIntlExample.ɵfac = function StepperIntlExample_Factory(t) { return new (t || StepperIntlExample)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2$1.MatStepperIntl)); };
StepperIntlExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperIntlExample, selectors: [["stepper-intl-example"]], features: [i0.ɵɵProvidersFeature([{ provide: MatStepperIntl, useClass: StepperIntl }])], decls: 36, vars: 6, consts: [["for", "demo-optional-label-group"], ["id", "demo-optional-label-group", 1, "demo-radio-group", 3, "ngModel", "ngModelChange"], ["class", "demo-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "demo-stepper"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill", 1, "demo-form-field"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", "optional", "", 3, "stepControl"], ["appearance", "fill"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], [1, "demo-radio-button", 3, "value"]], template: function StepperIntlExample_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵtext(1, "Pick the text for the optional label");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-radio-group", 1);
        i0.ɵɵlistener("ngModelChange", function StepperIntlExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.optionalLabelText = $event; })("ngModelChange", function StepperIntlExample_Template_mat_radio_group_ngModelChange_2_listener() { return ctx.updateOptionalLabel(); });
        i0.ɵɵtemplate(3, StepperIntlExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-stepper", 3, 4);
        i0.ɵɵelementStart(6, "mat-step", 5);
        i0.ɵɵelementStart(7, "form", 6);
        i0.ɵɵtemplate(8, StepperIntlExample_ng_template_8_Template, 1, 0, "ng-template", 7);
        i0.ɵɵelementStart(9, "mat-form-field", 8);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵtext(15, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-step", 11);
        i0.ɵɵelementStart(17, "form", 6);
        i0.ɵɵelementStart(18, "mat-form-field", 12);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div");
        i0.ɵɵelementStart(23, "button", 14);
        i0.ɵɵtext(24, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 10);
        i0.ɵɵtext(26, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-step");
        i0.ɵɵtemplate(28, StepperIntlExample_ng_template_28_Template, 1, 0, "ng-template", 7);
        i0.ɵɵelementStart(29, "p");
        i0.ɵɵtext(30, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div");
        i0.ɵɵelementStart(32, "button", 14);
        i0.ɵɵtext(33, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 15);
        i0.ɵɵlistener("click", function StepperIntlExample_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(5); return _r1.reset(); });
        i0.ɵɵtext(35, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.optionalLabelText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.optionalLabelTextChoices);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i3.MatRadioGroup, i1.NgControlStatus, i1.NgModel, i3$1.NgForOf, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2$1.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i2$1.MatStepperNext, i2$1.MatStepperPrevious, i3.MatRadioButton], styles: [".demo-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.demo-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.demo-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperIntlExample, [{
        type: Component,
        args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2$1.MatStepperIntl }]; }, null); })();

function StepperLazyContentExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 1");
} }
function StepperLazyContentExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "This content was rendered lazily");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵtext(3, "Next");
    i0.ɵɵelementEnd();
} }
function StepperLazyContentExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 2");
} }
function StepperLazyContentExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "This content was also rendered lazily");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 3);
    i0.ɵɵtext(3, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵtext(5, "Next");
    i0.ɵɵelementEnd();
} }
function StepperLazyContentExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 3");
} }
/**
 * @title Stepper lazy content rendering
 */
class StepperLazyContentExample {
}
StepperLazyContentExample.ɵfac = function StepperLazyContentExample_Factory(t) { return new (t || StepperLazyContentExample)(); };
StepperLazyContentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperLazyContentExample, selectors: [["stepper-lazy-content-example"]], decls: 13, vars: 0, consts: [["orientation", "vertical"], ["matStepLabel", ""], ["matStepContent", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""]], template: function StepperLazyContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-stepper", 0);
        i0.ɵɵelementStart(1, "mat-step");
        i0.ɵɵtemplate(2, StepperLazyContentExample_ng_template_2_Template, 1, 0, "ng-template", 1);
        i0.ɵɵtemplate(3, StepperLazyContentExample_ng_template_3_Template, 4, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-step");
        i0.ɵɵtemplate(5, StepperLazyContentExample_ng_template_5_Template, 1, 0, "ng-template", 1);
        i0.ɵɵtemplate(6, StepperLazyContentExample_ng_template_6_Template, 6, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-step");
        i0.ɵɵtemplate(8, StepperLazyContentExample_ng_template_8_Template, 1, 0, "ng-template", 1);
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "This content was rendered eagerly");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 3);
        i0.ɵɵtext(12, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i2$1.MatStepper, i2$1.MatStep, i2$1.MatStepLabel, i2$1.MatStepContent, i2.MatButton, i2$1.MatStepperPrevious, i2$1.MatStepperNext], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperLazyContentExample, [{
        type: Component,
        args: [{ selector: 'stepper-lazy-content-example', template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n", styles: ["/** No CSS for this example */\n"] }]
    }], null, null); })();

function StepperResponsiveExample_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Make your screen smaller to see a vertical stepper");
    i0.ɵɵelementEnd();
} }
function StepperResponsiveExample_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Make your screen larger to see a horizontal stepper");
    i0.ɵɵelementEnd();
} }
function StepperResponsiveExample_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper responsive
 */
class StepperResponsiveExample {
    constructor(_formBuilder, breakpointObserver) {
        this._formBuilder = _formBuilder;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
        this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
            .pipe(map(({ matches }) => matches ? 'horizontal' : 'vertical'));
    }
}
StepperResponsiveExample.ɵfac = function StepperResponsiveExample_Factory(t) { return new (t || StepperResponsiveExample)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2$2.BreakpointObserver)); };
StepperResponsiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperResponsiveExample, selectors: [["stepper-responsive-example"]], decls: 44, vars: 14, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "example-stepper", 3, "orientation"], ["label", "Fill out your name", 3, "stepControl"], [3, "formGroup"], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["label", "Fill out your phone number", 3, "stepControl"], ["matInput", "", "formControlName", "thirdCtrl", "placeholder", "Ex. 12345678", "required", ""], ["matStepLabel", ""]], template: function StepperResponsiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, StepperResponsiveExample_div_2_Template, 2, 0, "div", 1);
        i0.ɵɵtemplate(3, StepperResponsiveExample_div_3_Template, 2, 0, "div", 1);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(4, "mat-stepper", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementStart(6, "mat-step", 3);
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵelementStart(8, "mat-form-field", 5);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div");
        i0.ɵɵelementStart(13, "button", 7);
        i0.ɵɵtext(14, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-step", 8);
        i0.ɵɵelementStart(16, "form", 4);
        i0.ɵɵelementStart(17, "mat-form-field", 5);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 10);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 7);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step", 11);
        i0.ɵɵelementStart(27, "form", 4);
        i0.ɵɵelementStart(28, "mat-form-field", 5);
        i0.ɵɵelementStart(29, "mat-label");
        i0.ɵɵtext(30, "Phone number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div");
        i0.ɵɵelementStart(33, "button", 10);
        i0.ɵɵtext(34, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 7);
        i0.ɵɵtext(36, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-step");
        i0.ɵɵtemplate(38, StepperResponsiveExample_ng_template_38_Template, 1, 0, "ng-template", 13);
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵelementStart(42, "button", 10);
        i0.ɵɵtext(43, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(1, 10, ctx.stepperOrientation));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", "horizontal");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "vertical");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("orientation", i0.ɵɵpipeBind1(5, 12, ctx.stepperOrientation));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("stepControl", ctx.thirdFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.thirdFormGroup);
    } }, directives: [i3$1.NgSwitch, i3$1.NgSwitchCase, i2$1.MatStepper, i2$1.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i2$1.MatStepperNext, i2$1.MatStepperPrevious, i2$1.MatStepLabel], pipes: [i3$1.AsyncPipe], styles: [".example-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperResponsiveExample, [{
        type: Component,
        args: [{ selector: 'stepper-responsive-example', template: "<ng-container [ngSwitch]=\"stepperOrientation | async\">\n  <div *ngSwitchCase=\"'horizontal'\">Make your screen smaller to see a vertical stepper</div>\n  <div *ngSwitchCase=\"'vertical'\">Make your screen larger to see a horizontal stepper</div>\n</ng-container>\n\n<mat-stepper\n  class=\"example-stepper\"\n  [orientation]=\"(stepperOrientation | async)!\">\n  <mat-step [stepControl]=\"firstFormGroup\" label=\"Fill out your name\">\n    <form [formGroup]=\"firstFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" label=\"Fill out your address\">\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\" label=\"Fill out your phone number\">\n    <form [formGroup]=\"thirdFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Phone number</mat-label>\n        <input matInput formControlName=\"thirdCtrl\" placeholder=\"Ex. 12345678\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".example-stepper {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2$2.BreakpointObserver }]; }, null); })();

const EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperHarnessExample,
    StepperIntlExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    StepperLazyContentExample,
    StepperResponsiveExample,
];
class StepperExamplesModule {
}
StepperExamplesModule.ɵfac = function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); };
StepperExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
StepperExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatRadioModule,
            MatStepperModule,
            ReactiveFormsModule,
            CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatRadioModule,
                    MatStepperModule,
                    ReactiveFormsModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperIntlExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample,
        StepperResponsiveExample], imports: [FormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatStepperModule,
        ReactiveFormsModule,
        CommonModule], exports: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperIntlExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample,
        StepperResponsiveExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { StepperEditableExample, StepperErrorsExample, StepperExamplesModule, StepperHarnessExample, StepperIntlExample, StepperLabelPositionBottomExample, StepperLazyContentExample, StepperOptionalExample, StepperOverviewExample, StepperResponsiveExample, StepperStatesExample, StepperVerticalExample };
//# sourceMappingURL=stepper.js.map
