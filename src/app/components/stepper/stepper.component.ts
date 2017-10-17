import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {timeInterval} from "rxjs/operator/timeInterval";

const noop = () => {
};
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StepperComponent),
  multi: true
}

@Component({
  selector: 'wgp-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit, ControlValueAccessor {
  get amount(): number {
    console.log('value called from stepper', this._amount);
    return 1; // this._amount;
  }
  set amount(value: number) {
    Promise.resolve(null).then(a => this._amount = value);
    setTimeout(a => {
      console.log(value, 'value changed in the stepper');
    });

    // this.onChangeCallback();
  }
  private _amount = 0;
  private onChangeCallback = () => {};

  constructor() {
  }

  ngOnInit() {
  }

  step(amount: number) {
    this._amount += amount;
  }

  writeValue(obj: any): void {
    if (!obj) { return; };
    this.amount = obj;
  }

  registerOnChange(fn: any): void {
    fn(this.amount);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
