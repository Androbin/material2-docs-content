import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
/**
 * @title Tooltip that can be disabled
 */
export class TooltipDisabledExample {
    constructor() {
        this.disabled = new FormControl(false);
    }
}
TooltipDisabledExample.ɵfac = function TooltipDisabledExample_Factory(t) { return new (t || TooltipDisabledExample)(); };
TooltipDisabledExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programmatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, " Action\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-checkbox", 1);
        i0.ɵɵtext(3, " Tooltip disabled\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltipDisabled", ctx.disabled.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.disabled);
    } }, directives: [i1.MatButton, i2.MatTooltip, i3.MatCheckbox, i4.NgControlStatus, i4.FormControlDirective], styles: [".example-disabled-checkbox[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDisabledExample, [{
        type: Component,
        args: [{ selector: 'tooltip-disabled-example', template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n", styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRTNDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7NEZBRlksc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNYbkMsaUNBRzBGO1FBQ3hGLHlCQUNGO1FBQUEsaUJBQVM7UUFFVCx1Q0FBeUU7UUFDdkUsbUNBQ0Y7UUFBQSxpQkFBZTs7UUFQUCx1REFBcUM7UUFLL0IsZUFBd0I7UUFBeEIsMENBQXdCOzt1RkRJekIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGJlIGRpc2FibGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlzYWJsZWRFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJkaXNhYmxlZC52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgdGhhdCBjYW4gYmUgcHJvZ3JhbW1hdGljYWxseSBkaXNhYmxlZFwiPlxuICBBY3Rpb25cbjwvYnV0dG9uPlxuXG48bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJkaXNhYmxlZFwiIGNsYXNzPVwiZXhhbXBsZS1kaXNhYmxlZC1jaGVja2JveFwiPlxuICBUb29sdGlwIGRpc2FibGVkXG48L21hdC1jaGVja2JveD5cbiJdfQ==