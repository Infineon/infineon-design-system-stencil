import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { beforeEach, describe, expect, it } from 'vitest';
import { BooleanValueAccessor } from '../standalone/src/lib/stencil-generated/boolean-value-accessor';
import { IfxCheckbox } from '../standalone/src/lib/stencil-generated/components';

import './setup';

/**
 * Test host component for testing ngModel binding
 */
@Component({
  selector: 'test-host',
  standalone: true,
  imports: [FormsModule, IfxCheckbox, BooleanValueAccessor],
  template: `
    <ifx-checkbox 
      [(ngModel)]="checkboxValue" 
      name="testCheckbox">
    </ifx-checkbox>
  `,
})
class TestHostComponent {
  checkboxValue = false;
}

/**
 * These tests verify that the standalone Angular wrapper for IfxCheckbox correctly implements ngModel
 * via the BooleanValueAccessor directive (ControlValueAccessor pattern).
 * 
 * The ControlValueAccessor:
 * - Uses 'checked' property for the value
 * - Listens to 'ifxChange' event for user interaction
 * - Implements writeValue, registerOnChange, registerOnTouched, setDisabledState
 * 
 * We test ngModel integration by verifying that changes to the model property
 * are reflected in the checkbox and vice versa.
 * 
 * The actual checkbox behavior is tested in the Stencil component's own tests.
 */
describe('IfxCheckbox ngModel integration (standalone)', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let checkboxElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    checkboxElement = fixture.nativeElement.querySelector('ifx-checkbox');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the test host component', () => {
    expect(component).toBeDefined();
    expect(checkboxElement).toBeDefined();
  });

  it('should initialize with false value', () => {
    expect(component.checkboxValue).toBe(false);
  });

  it('should initialize with true value when set', async () => {
    component.checkboxValue = true;
    fixture.detectChanges();
    await fixture.whenStable();
    
    expect(component.checkboxValue).toBe(true);
    expect((checkboxElement as any).checked).toBe(true);
  });

  it('should update checkbox when model value changes programmatically', async () => {
    expect(component.checkboxValue).toBe(false);

    component.checkboxValue = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect((checkboxElement as any).checked).toBe(true);
  });

  it('should update model when checkbox emits ifxChange event', async () => {
    expect(component.checkboxValue).toBe(false);

    // Simulate the checkbox emitting ifxChange event with the checked value
    const event = new CustomEvent('ifxChange', {
      detail: true,
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: { checked: true },
      writable: false,
    });
    checkboxElement.dispatchEvent(event);
    
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.checkboxValue).toBe(true);
  });

  it('should handle toggle between checked states', async () => {
    expect(component.checkboxValue).toBe(false);

    // Toggle to true via event
    let event = new CustomEvent('ifxChange', {
      detail: true,
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: { checked: true },
      writable: false,
    });
    checkboxElement.dispatchEvent(event);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.checkboxValue).toBe(true);

    // Toggle back to false via event
    event = new CustomEvent('ifxChange', {
      detail: false,
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: { checked: false },
      writable: false,
    });
    checkboxElement.dispatchEvent(event);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.checkboxValue).toBe(false);
  });

  it('should support two-way binding synchronization', async () => {
    // Change via model (tests writeValue)
    component.checkboxValue = true;
    fixture.detectChanges();
    await fixture.whenStable();
    expect((checkboxElement as any).checked).toBe(true);

    // Change via event (tests onChange callback)
    const event = new CustomEvent('ifxChange', {
      detail: false,
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: { checked: false },
      writable: false,
    });
    checkboxElement.dispatchEvent(event);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.checkboxValue).toBe(false);

    // Change via model again
    component.checkboxValue = true;
    fixture.detectChanges();
    await fixture.whenStable();
    expect((checkboxElement as any).checked).toBe(true);
  });
});
