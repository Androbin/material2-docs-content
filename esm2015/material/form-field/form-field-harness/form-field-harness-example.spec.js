import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldHarnessExample } from './form-field-harness-example';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputHarness } from '@angular/material/input/testing';
describe('FormFieldHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NoopAnimationsModule],
            declarations: [FormFieldHarnessExample]
        }).compileComponents();
        fixture = TestBed.createComponent(FormFieldHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    }));
    it('should be able to load harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const formFields = yield loader.getAllHarnesses(MatFormFieldHarness);
        expect(formFields.length).toBe(1);
    }));
    it('should be able to get control of form-field', () => __awaiter(void 0, void 0, void 0, function* () {
        const formField = yield loader.getHarness(MatFormFieldHarness);
        expect((yield formField.getControl()) instanceof MatInputHarness).toBe(true);
    }));
    it('should be able to get error messages and hints of form-field', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const formField = yield loader.getHarness(MatFormFieldHarness);
        expect(yield formField.getTextErrors()).toEqual([]);
        expect(yield formField.getTextHints()).toEqual(['Hint']);
        fixture.componentInstance.requiredControl.setValue('');
        (_a = (yield formField.getControl())) === null || _a === void 0 ? void 0 : _a.blur();
        expect(yield formField.getTextErrors()).toEqual(['Error 1']);
        expect(yield formField.getTextHints()).toEqual([]);
    }));
    it('should be able to check if form field is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const formField = yield loader.getHarness(MatFormFieldHarness);
        expect(yield formField.isControlValid()).toBe(true);
        fixture.componentInstance.requiredControl.setValue('');
        expect(yield formField.isControlValid()).toBe(false);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oYXJuZXNzL2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQW9CLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXpFLE9BQU8sRUFBQywyQkFBMkIsRUFBRSw2QkFBNkIsRUFBQyxNQUM1RCwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRWhFLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDdkMsSUFBSSxPQUFrRCxDQUFDO0lBQ3ZELElBQUksTUFBcUIsQ0FBQztJQUUxQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FDUixZQUFZLENBQUMsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUM7WUFDeEYsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDeEMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsTUFBTSxHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBRUYsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtRQUNoRCxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEdBQVMsRUFBRTtRQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsQ0FBQSxNQUFNLFNBQVMsQ0FBQyxVQUFVLEVBQUUsYUFBWSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxHQUFTLEVBQUU7O1FBQzVFLE1BQU0sU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXpELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQUEsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywwQ0FBRSxJQUFJLEdBQUc7UUFDdkMsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrREFBa0QsRUFBRSxHQUFTLEVBQUU7UUFDaEUsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rlc3RCZWQsIENvbXBvbmVudEZpeHR1cmUsIHdhaXRGb3JBc3luY30gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7VGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcvdGVzdGJlZCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZEhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQvdGVzdGluZyc7XG5pbXBvcnQge0hhcm5lc3NMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7QnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZ31cbiAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtGb3JtRmllbGRIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Tm9vcEFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge01hdElucHV0SGFybmVzc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQvdGVzdGluZyc7XG5cbmRlc2NyaWJlKCdGb3JtRmllbGRIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8Rm9ybUZpZWxkSGFybmVzc0V4YW1wbGU+O1xuICBsZXQgbG9hZGVyOiBIYXJuZXNzTG9hZGVyO1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5pbml0VGVzdEVudmlyb25tZW50KEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcoKSk7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goXG4gICAgd2FpdEZvckFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBOb29wQW5pbWF0aW9uc01vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW0Zvcm1GaWVsZEhhcm5lc3NFeGFtcGxlXVxuICAgICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChGb3JtRmllbGRIYXJuZXNzRXhhbXBsZSk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGxvYWRlciA9IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQubG9hZGVyKGZpeHR1cmUpO1xuICAgIH0pXG4gICk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGxvYWQgaGFybmVzc2VzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1GaWVsZHMgPSBhd2FpdCBsb2FkZXIuZ2V0QWxsSGFybmVzc2VzKE1hdEZvcm1GaWVsZEhhcm5lc3MpO1xuICAgIGV4cGVjdChmb3JtRmllbGRzLmxlbmd0aCkudG9CZSgxKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGdldCBjb250cm9sIG9mIGZvcm0tZmllbGQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gYXdhaXQgbG9hZGVyLmdldEhhcm5lc3MoTWF0Rm9ybUZpZWxkSGFybmVzcyk7XG4gICAgZXhwZWN0KGF3YWl0IGZvcm1GaWVsZC5nZXRDb250cm9sKCkgaW5zdGFuY2VvZiBNYXRJbnB1dEhhcm5lc3MpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBnZXQgZXJyb3IgbWVzc2FnZXMgYW5kIGhpbnRzIG9mIGZvcm0tZmllbGQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gYXdhaXQgbG9hZGVyLmdldEhhcm5lc3MoTWF0Rm9ybUZpZWxkSGFybmVzcyk7XG4gICAgZXhwZWN0KGF3YWl0IGZvcm1GaWVsZC5nZXRUZXh0RXJyb3JzKCkpLnRvRXF1YWwoW10pO1xuICAgIGV4cGVjdChhd2FpdCBmb3JtRmllbGQuZ2V0VGV4dEhpbnRzKCkpLnRvRXF1YWwoWydIaW50J10pO1xuXG4gICAgZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS5yZXF1aXJlZENvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIChhd2FpdCBmb3JtRmllbGQuZ2V0Q29udHJvbCgpKT8uYmx1cigpO1xuICAgIGV4cGVjdChhd2FpdCBmb3JtRmllbGQuZ2V0VGV4dEVycm9ycygpKS50b0VxdWFsKFsnRXJyb3IgMSddKTtcbiAgICBleHBlY3QoYXdhaXQgZm9ybUZpZWxkLmdldFRleHRIaW50cygpKS50b0VxdWFsKFtdKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGNoZWNrIGlmIGZvcm0gZmllbGQgaXMgaW52YWxpZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmb3JtRmllbGQgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRGb3JtRmllbGRIYXJuZXNzKTtcbiAgICBleHBlY3QoYXdhaXQgZm9ybUZpZWxkLmlzQ29udHJvbFZhbGlkKCkpLnRvQmUodHJ1ZSk7XG5cbiAgICBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlLnJlcXVpcmVkQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgZXhwZWN0KGF3YWl0IGZvcm1GaWVsZC5pc0NvbnRyb2xWYWxpZCgpKS50b0JlKGZhbHNlKTtcbiAgfSk7XG59KTtcbiJdfQ==