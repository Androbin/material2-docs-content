import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';

/**
 * @title Menu with icons
 */
class MenuIconsExample {
}
MenuIconsExample.ɵfac = function MenuIconsExample_Factory(t) { return new (t || MenuIconsExample)(); };
MenuIconsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuIconsExample, selectors: [["menu-icons-example"]], decls: 20, vars: 1, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""]], template: function MenuIconsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "more_vert");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-menu", null, 1);
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "dialpad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span");
        i0.ɵɵtext(9, "Redial");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵelementStart(11, "mat-icon");
        i0.ɵɵtext(12, "voicemail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, "Check voice mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 2);
        i0.ɵɵelementStart(16, "mat-icon");
        i0.ɵɵtext(17, "notifications_off");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span");
        i0.ɵɵtext(19, "Disable alerts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i3.MatIcon, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuIconsExample, [{
        type: Component,
        args: [{ selector: 'menu-icons-example', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n" }]
    }], null, null); })();

/**
 * @title Basic menu
 */
class MenuOverviewExample {
}
MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
MenuOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-menu", null, 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵtext(7, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{ selector: 'menu-overview-example', template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
    }], null, null); })();

/**
 * @title Menu positioning
 */
class MenuPositionExample {
}
MenuPositionExample.ɵfac = function MenuPositionExample_Factory(t) { return new (t || MenuPositionExample)(); };
MenuPositionExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuPositionExample, selectors: [["menu-position-example"]], decls: 32, vars: 4, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["xPosition", "after"], ["afterMenu", "matMenu"]], template: function MenuPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Above");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-menu", 1, 2);
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵtext(5, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵtext(7, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 0);
        i0.ɵɵtext(9, "Below");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-menu", 4, 5);
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵtext(13, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 3);
        i0.ɵɵtext(15, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 0);
        i0.ɵɵtext(17, "Before");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-menu", 6, 7);
        i0.ɵɵelementStart(20, "button", 3);
        i0.ɵɵtext(21, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 3);
        i0.ɵɵtext(23, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 0);
        i0.ɵɵtext(25, "After");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-menu", 8, 9);
        i0.ɵɵelementStart(28, "button", 3);
        i0.ɵɵtext(29, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 3);
        i0.ɵɵtext(31, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        const _r1 = i0.ɵɵreference(11);
        const _r2 = i0.ɵɵreference(19);
        const _r3 = i0.ɵɵreference(27);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r2);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuPositionExample, [{
        type: Component,
        args: [{ selector: 'menu-position-example', template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<!-- #docregion menu-position -->\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n<!-- #enddocregion menu-position -->\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
    }], null, null); })();

/**
 * @title Nested menu
 */
class MenuNestedExample {
}
MenuNestedExample.ɵfac = function MenuNestedExample_Factory(t) { return new (t || MenuNestedExample)(); };
MenuNestedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuNestedExample, selectors: [["menu-nested-example"]], decls: 70, vars: 6, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["animals", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", ""], ["invertebrates", "matMenu"], ["fish", "matMenu"], ["amphibians", "matMenu"], ["reptiles", "matMenu"], ["mat-menu-item", "", "disabled", ""]], template: function MenuNestedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Animal index");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-menu", null, 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Vertebrates");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵtext(7, "Invertebrates");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-menu", null, 3);
        i0.ɵɵelementStart(10, "button", 2);
        i0.ɵɵtext(11, "Fishes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵtext(13, "Amphibians");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 2);
        i0.ɵɵtext(15, "Reptiles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 4);
        i0.ɵɵtext(17, "Birds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 4);
        i0.ɵɵtext(19, "Mammals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-menu", null, 5);
        i0.ɵɵelementStart(22, "button", 4);
        i0.ɵɵtext(23, "Insects");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 4);
        i0.ɵɵtext(25, "Molluscs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "button", 4);
        i0.ɵɵtext(27, "Crustaceans");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 4);
        i0.ɵɵtext(29, "Corals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 4);
        i0.ɵɵtext(31, "Arachnids");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "button", 4);
        i0.ɵɵtext(33, "Velvet worms");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "button", 4);
        i0.ɵɵtext(35, "Horseshoe crabs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "mat-menu", null, 6);
        i0.ɵɵelementStart(38, "button", 4);
        i0.ɵɵtext(39, "Baikal oilfish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "button", 4);
        i0.ɵɵtext(41, "Bala shark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 4);
        i0.ɵɵtext(43, "Ballan wrasse");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 4);
        i0.ɵɵtext(45, "Bamboo shark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 4);
        i0.ɵɵtext(47, "Banded killifish");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "mat-menu", null, 7);
        i0.ɵɵelementStart(50, "button", 4);
        i0.ɵɵtext(51, "Sonoran desert toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "button", 4);
        i0.ɵɵtext(53, "Western toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "button", 4);
        i0.ɵɵtext(55, "Arroyo toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "button", 4);
        i0.ɵɵtext(57, "Yosemite toad");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "mat-menu", null, 8);
        i0.ɵɵelementStart(60, "button", 4);
        i0.ɵɵtext(61, "Banded Day Gecko");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "button", 4);
        i0.ɵɵtext(63, "Banded Gila Monster");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "button", 4);
        i0.ɵɵtext(65, "Black Tree Monitor");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "button", 4);
        i0.ɵɵtext(67, "Blue Spiny Lizard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "button", 9);
        i0.ɵɵtext(69, "Velociraptor");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        const _r1 = i0.ɵɵreference(9);
        const _r2 = i0.ɵɵreference(21);
        const _r3 = i0.ɵɵreference(37);
        const _r4 = i0.ɵɵreference(49);
        const _r5 = i0.ɵɵreference(59);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r4);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r5);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuNestedExample, [{
        type: Component,
        args: [{ selector: 'menu-nested-example', template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<!-- #docregion sub-menu -->\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<!-- #enddocregion sub-menu -->\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n" }]
    }], null, null); })();

/**
 * @title Testing with MatMenuHarness
 */
class MenuHarnessExample {
}
MenuHarnessExample.ɵfac = function MenuHarnessExample_Factory(t) { return new (t || MenuHarnessExample)(); };
MenuHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MenuHarnessExample, selectors: [["menu-harness-example"]], decls: 10, vars: 2, consts: [["type", "button", 3, "matMenuTriggerFor"], ["type", "button", "disabled", "", 3, "matMenuTriggerFor"], ["settingsMenu", ""], ["mat-menu-item", ""]], template: function MenuHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵtext(3, "Disabled menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-menu", null, 2);
        i0.ɵɵelementStart(6, "menu", 3);
        i0.ɵɵtext(7, "Profile");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "menu", 3);
        i0.ɵɵtext(9, "Account");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matMenuTriggerFor", _r0);
    } }, directives: [i2.MatMenuTrigger, i2.MatMenu, i2.MatMenuItem], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuHarnessExample, [{
        type: Component,
        args: [{ selector: 'menu-harness-example', template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
    }], null, null); })();

const EXAMPLES = [
    MenuHarnessExample,
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    MenuNestedExample,
];
class MenuExamplesModule {
}
MenuExamplesModule.ɵfac = function MenuExamplesModule_Factory(t) { return new (t || MenuExamplesModule)(); };
MenuExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MenuExamplesModule });
MenuExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatIconModule,
            MatMenuModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatMenuModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuExamplesModule, { declarations: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample], imports: [MatButtonModule,
        MatIconModule,
        MatMenuModule], exports: [MenuHarnessExample,
        MenuIconsExample,
        MenuOverviewExample,
        MenuPositionExample,
        MenuNestedExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { MenuExamplesModule, MenuHarnessExample, MenuIconsExample, MenuNestedExample, MenuOverviewExample, MenuPositionExample };
//# sourceMappingURL=menu.js.map
