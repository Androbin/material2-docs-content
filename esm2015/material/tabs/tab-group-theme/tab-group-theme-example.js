import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/tabs";
/**
 * @title Customizing the theme options on the tab group
 */
export class TabGroupThemeExample {
}
TabGroupThemeExample.ɵfac = function TabGroupThemeExample_Factory(t) { return new (t || TabGroupThemeExample)(); };
TabGroupThemeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupThemeExample, selectors: [["tab-group-theme-example"]], decls: 25, vars: 2, consts: [["value", "primary", "aria-label", "Change color"], ["colorToggle", "matButtonToggleGroup"], ["value", "primary"], ["value", "accent"], [1, "example-button-toggle-label"], ["backgroundColorToggle", "matButtonToggleGroup"], [3, "color", "backgroundColor"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupThemeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "mat-button-toggle-group", 0, 1);
        i0.ɵɵelementStart(3, "mat-button-toggle", 2);
        i0.ɵɵtext(4, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 3);
        i0.ɵɵtext(6, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span", 4);
        i0.ɵɵtext(8, " Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "mat-button-toggle-group", 0, 5);
        i0.ɵɵelementStart(12, "mat-button-toggle", 2);
        i0.ɵɵtext(13, " Primary ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 3);
        i0.ɵɵtext(15, " Accent ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "span", 4);
        i0.ɵɵtext(17, " Background Color ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-tab-group", 6);
        i0.ɵɵelementStart(19, "mat-tab", 7);
        i0.ɵɵtext(20, " Content 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-tab", 8);
        i0.ɵɵtext(22, " Content 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-tab", 9);
        i0.ɵɵtext(24, " Content 3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r1 = i0.ɵɵreference(11);
        i0.ɵɵadvance(18);
        i0.ɵɵproperty("color", _r0.value)("backgroundColor", _r1.value);
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatTabGroup, i2.MatTab], styles: [".example-button-toggle-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupThemeExample, [{
        type: Component,
        args: [{ selector: 'tab-group-theme-example', template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxvQkFBb0I7O3dGQUFwQixvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ1ZqQywyQkFBSztRQUNILHFEQUVtRDtRQUNqRCw0Q0FBbUM7UUFBQyx5QkFBUTtRQUFBLGlCQUFvQjtRQUNoRSw0Q0FBa0M7UUFBQyx3QkFBTztRQUFBLGlCQUFvQjtRQUNoRSxpQkFBMEI7UUFDMUIsK0JBQTBDO1FBQUMsdUJBQU07UUFBQSxpQkFBTztRQUMxRCxpQkFBTTtRQUVOLDJCQUFLO1FBQ0gsc0RBRW1EO1FBQ2pELDZDQUFtQztRQUFDLDBCQUFRO1FBQUEsaUJBQW9CO1FBQ2hFLDZDQUFrQztRQUFDLHlCQUFPO1FBQUEsaUJBQW9CO1FBQ2hFLGlCQUEwQjtRQUMxQixnQ0FBMEM7UUFBQyxtQ0FBaUI7UUFBQSxpQkFBTztRQUNyRSxpQkFBTTtRQUVOLHlDQUEyRjtRQUN6RixtQ0FBdUI7UUFBQyw0QkFBVTtRQUFBLGlCQUFVO1FBQzVDLG1DQUF3QjtRQUFDLDRCQUFVO1FBQUEsaUJBQVU7UUFDN0MsbUNBQXVCO1FBQUMsNEJBQVU7UUFBQSxpQkFBVTtRQUM5QyxpQkFBZ0I7Ozs7UUFKRCxnQkFBMkI7UUFBM0IsaUNBQTJCLDhCQUFBOzt1RkRWN0Isb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDdXN0b21pemluZyB0aGUgdGhlbWUgb3B0aW9ucyBvbiB0aGUgdGFiIGdyb3VwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFRoZW1lRXhhbXBsZSB7fVxuIiwiPGRpdj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwICNjb2xvclRvZ2dsZT1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hhbmdlIGNvbG9yXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicHJpbWFyeVwiPiBQcmltYXJ5IDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYWNjZW50XCI+IEFjY2VudCA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXRvZ2dsZS1sYWJlbFwiPiBDb2xvciA8L3NwYW4+XG48L2Rpdj5cblxuPGRpdj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwICNiYWNrZ3JvdW5kQ29sb3JUb2dnbGU9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5nZSBjb2xvclwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInByaW1hcnlcIj4gUHJpbWFyeSA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImFjY2VudFwiPiBBY2NlbnQgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWxcIj4gQmFja2dyb3VuZCBDb2xvciA8L3NwYW4+XG48L2Rpdj5cblxuPG1hdC10YWItZ3JvdXAgW2NvbG9yXT1cImNvbG9yVG9nZ2xlLnZhbHVlXCIgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JUb2dnbGUudmFsdWVcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPiBDb250ZW50IDEgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPiBDb250ZW50IDIgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+IENvbnRlbnQgMyA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=