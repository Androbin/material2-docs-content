import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function TreeFlatOverviewExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function TreeFlatOverviewExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
const TREE_DATA = [
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
export class TreeFlatOverviewExample {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
    }
}
TreeFlatOverviewExample.ɵfac = function TreeFlatOverviewExample_Factory(t) { return new (t || TreeFlatOverviewExample)(); };
TreeFlatOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeFlatOverviewExample, selectors: [["tree-flat-overview-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function TreeFlatOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeFlatOverviewExample_mat_tree_node_1_Template, 3, 1, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeFlatOverviewExample_mat_tree_node_2_Template, 5, 3, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodePadding, i2.MatButton, i1.MatTreeNodeToggle, i3.MatIcon], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeFlatOverviewExample, [{
        type: Component,
        args: [{ selector: 'tree-flat-overview-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQ0E3RSx3Q0FBNkQ7SUFFM0QsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQURkLGVBQ0Y7SUFERSw2Q0FDRjs7O0lBRUEsd0NBQTRFO0lBQzFFLGlDQUNrRDtJQUNoRCxtQ0FBc0M7SUFDcEMsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNGO0lBQUEsaUJBQWdCOzs7O0lBTk4sZUFBeUM7SUFBekMsc0RBQXlDO0lBRTdDLGVBQ0Y7SUFERSx5R0FDRjtJQUVGLGVBQ0Y7SUFERSw2Q0FDRjs7QURIRixNQUFNLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQztpQkFDM0I7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBU0Y7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQztRQWhCUSxpQkFBWSxHQUFHLENBQUMsSUFBYyxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ3ZELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3ZELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7UUFDSixDQUFDLENBQUE7UUFFRCxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakQsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0YsZUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNN0UsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFIL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7OzhGQW5CVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ3hEcEMsbUNBQWdFO1FBRTlELDRGQUlnQjtRQUVoQiw0RkFRZ0I7UUFDbEIsaUJBQVc7O1FBakJELDJDQUF5QixnQ0FBQTtRQVFRLGVBQWM7UUFBZCxpREFBYzs7dUZEZ0Q1Qyx1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuXG4vKipcbiAqIEZvb2QgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYWwgbGlzdCBvZiBjaGlsZHJlbi5cbiAqL1xuaW50ZXJmYWNlIEZvb2ROb2RlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjaGlsZHJlbj86IEZvb2ROb2RlW107XG59XG5cbmNvbnN0IFRSRUVfREFUQTogRm9vZE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtuYW1lOiAnQXBwbGUnfSxcbiAgICAgIHtuYW1lOiAnQmFuYW5hJ30sXG4gICAgICB7bmFtZTogJ0ZydWl0IGxvb3BzJ30sXG4gICAgXVxuICB9LCB7XG4gICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge25hbWU6ICdCcm9jY29saSd9LFxuICAgICAgICAgIHtuYW1lOiAnQnJ1c3NlbHMgc3Byb3V0cyd9LFxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtuYW1lOiAnUHVtcGtpbnMnfSxcbiAgICAgICAgICB7bmFtZTogJ0NhcnJvdHMnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5dO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBmbGF0IG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyID0gKG5vZGU6IEZvb2ROb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZGFibGU6ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDAsXG4gICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICBsZXZlbDogbGV2ZWwsXG4gICAgfTtcbiAgfVxuXG4gIHRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxFeGFtcGxlRmxhdE5vZGU+KFxuICAgICAgbm9kZSA9PiBub2RlLmxldmVsLCBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSk7XG5cbiAgdHJlZUZsYXR0ZW5lciA9IG5ldyBNYXRUcmVlRmxhdHRlbmVyKFxuICAgICAgdGhpcy5fdHJhbnNmb3JtZXIsIG5vZGUgPT4gbm9kZS5sZXZlbCwgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUsIG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XG5cbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFRSRUVfREFUQTtcbiAgfVxuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRXhhbXBsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG59XG4iLCI8bWF0LXRyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTt3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==