import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-slider-mark',
  template: `
    <div>
      <h4>included=true</h4>
      <nz-slider [nzMarks]="marks" [nzDefaultValue]="37"></nz-slider>
      <nz-slider [nzMarks]="marks" [nzIncluded]="true" nzRange [nzDefaultValue]="[26, 37]"></nz-slider>
      <h4>included=false</h4>
      <nz-slider [nzMarks]="marks" [nzIncluded]="false" [nzDefaultValue]="37"></nz-slider>
      <h4>marks & step</h4>
      <nz-slider [nzMarks]="marks" [nzStep]="10" [nzDefaultValue]="37"></nz-slider>
      <h4>step=null || dots=true</h4>
      <nz-slider [nzMarks]="marks" [nzStep]="null" [nzDefaultValue]="37"></nz-slider>
      <nz-slider [nzMarks]="marks" [nzDots]="true" [nzDefaultValue]="37"></nz-slider>
    </div>
  `,
  styles  : [ `
    h4 {
      margin: 0 0 16px;
    }

    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  ` ]
})
export class NzDemoSliderMarkComponent {

  marks = {
    0  : '0°C',
    26 : '26°C',
    37 : '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: '<strong>100°C</strong>',
    }
  };

}
