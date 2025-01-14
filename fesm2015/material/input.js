import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/form-field';

function InputClearableExample_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function InputClearableExample_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Input with a clear button
 */
class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
InputClearableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 5, vars: 2, consts: [["appearance", "fill", 1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Clearable input");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1);
        i0.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, InputClearableExample_button_4_Template, 3, 0, "button", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i4.NgIf, i5.MatButton, i2.MatSuffix, i6.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{ selector: 'input-clearable-example', template: "<mat-form-field class=\"example-form-field\" appearance=\"fill\">\n  <mat-label>Clearable input</mat-label>\n  <input matInput type=\"text\" [(ngModel)]=\"value\">\n  <button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n", styles: [".example-form-field {\n  width: 200px;\n}\n"] }]
    }], null, null); })();

function InputErrorStateMatcherExample_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Input with a custom ErrorStateMatcher */
class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
InputErrorStateMatcherExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementStart(5, "mat-hint");
        i0.ɵɵtext(6, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, InputErrorStateMatcherExample_mat_error_7_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(8, InputErrorStateMatcherExample_mat_error_8_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{ selector: 'input-error-state-matcher-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Email</mat-label>\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\n           placeholder=\"Ex. pat@example.com\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

function InputErrorsExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Please enter a valid email address ");
    i0.ɵɵelementEnd();
} }
function InputErrorsExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Email is ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Input with error messages
 */
class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
InputErrorsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 7, vars: 3, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵtemplate(5, InputErrorsExample_mat_error_5_Template, 2, 0, "mat-error", 3);
        i0.ɵɵtemplate(6, InputErrorsExample_mat_error_6_Template, 4, 0, "mat-error", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.emailFormControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputErrorsExample, [{
        type: Component,
        args: [{ selector: 'input-errors-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Email</mat-label>\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" placeholder=\"Ex. pat@example.com\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

/**
 * @title Inputs in a form
 */
class InputFormExample {
}
InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
InputFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Company (disabled)");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementStart(6, "tr");
        i0.ɵɵelementStart(7, "td");
        i0.ɵɵelementStart(8, "mat-form-field", 1);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "td");
        i0.ɵɵelementStart(13, "mat-form-field", 1);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Long Last Name That Will Be Truncated");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p");
        i0.ɵɵelementStart(18, "mat-form-field", 1);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "textarea", 5);
        i0.ɵɵtext(22, "1600 Amphitheatre Pkwy");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-form-field", 1);
        i0.ɵɵelementStart(24, "mat-label");
        i0.ɵɵtext(25, "Address 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(26, "textarea", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "table", 3);
        i0.ɵɵelementStart(28, "tr");
        i0.ɵɵelementStart(29, "td");
        i0.ɵɵelementStart(30, "mat-form-field", 1);
        i0.ɵɵelementStart(31, "mat-label");
        i0.ɵɵtext(32, "City");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "td");
        i0.ɵɵelementStart(35, "mat-form-field", 1);
        i0.ɵɵelementStart(36, "mat-label");
        i0.ɵɵtext(37, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(38, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "td");
        i0.ɵɵelementStart(40, "mat-form-field", 1);
        i0.ɵɵelementStart(41, "mat-label");
        i0.ɵɵtext(42, "Postal Code");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(43, "input", 8, 9);
        i0.ɵɵelementStart(45, "mat-hint", 10);
        i0.ɵɵtext(46);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(44);
        i0.ɵɵadvance(46);
        i0.ɵɵtextInterpolate1("", _r0.value.length, " / 5");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{ selector: 'input-form-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Input with hints
 */
class InputHintExample {
}
InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
InputHintExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2, 3);
        i0.ɵɵelementStart(6, "mat-hint", 4);
        i0.ɵɵelementStart(7, "strong");
        i0.ɵɵtext(8, "Don't disclose personal info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-hint", 5);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("", _r0.value.length, " / 256");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{ selector: 'input-hint-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Message</mat-label>\n    <input matInput #message maxlength=\"256\" placeholder=\"Ex. I need help with...\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

/**
 * @title Basic Inputs
 */
class InputOverviewExample {
}
InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
InputOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 1);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Leave a comment");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "textarea", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputOverviewExample, [{
        type: Component,
        args: [{ selector: 'input-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Favorite food</mat-label>\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

/**
 * @title Inputs with prefixes and suffixes
 */
class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
InputPrefixSuffixExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Telephone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 2);
        i0.ɵɵtext(5, "+1 \u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "input", 3);
        i0.ɵɵelementStart(7, "mat-icon", 4);
        i0.ɵɵtext(8, "mode_edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i2.MatPrefix, i3.MatInput, i6.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{ selector: 'input-prefix-suffix-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Telephone</mat-label>\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();

/**
 * @title Testing with MatInputHarness
 */
class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
}
InputHarnessExample.ɵfac = function InputHarnessExample_Factory(t) { return new (t || InputHarnessExample)(); };
InputHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputHarnessExample, selectors: [["input-harness-example"]], decls: 10, vars: 2, consts: [["appearance", "fill"], ["matInput", "", "value", "Sushi", "name", "favorite-food"], ["matInput", "", 3, "type", "disabled"], ["matInput", ""]], template: function InputHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 0);
        i0.ɵɵelement(5, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 0);
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Leave a comment");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "textarea", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("type", ctx.inputType)("disabled", ctx.disabled);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputHarnessExample, [{
        type: Component,
        args: [{ selector: 'input-harness-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <input matInput [type]=\"inputType\"\n         [disabled]=\"disabled\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n" }]
    }], null, null); })();

const EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHarnessExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
class InputExamplesModule {
}
InputExamplesModule.ɵfac = function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); };
InputExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: InputExamplesModule });
InputExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample], imports: [CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule], exports: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputExamplesModule, InputFormExample, InputHarnessExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
//# sourceMappingURL=input.js.map
