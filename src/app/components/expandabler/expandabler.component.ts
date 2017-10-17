import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'wgp-expandabler-title',
  template: `<ng-content></ng-content>`
})
export class ExpandablerTitleComponent {
}

@Component({
  selector: 'wgp-expandabler-body',
  animations: [
    trigger('heroState', [
        state('inactive', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })),
        state('active', style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
        ,
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('1500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  template: `<ng-content></ng-content>`
})
export class ExpandablerBodyComponent {
}

// button-text onclicke
@Component({
  selector: 'wgp-expandabler',
  templateUrl: './expandabler.component.html',
  styleUrls: ['./expandabler.component.scss']
})
export class ExpandablerComponent implements OnInit {
  @Input() buttonText: string;
  @Input() isExpanded = false;
  @Output() onClicked: EventEmitter<any> = new EventEmitter()
  bnCollapse = false;
  stateval = 'active';

  constructor() {
  }

  ngOnInit() {
  }

  _clicked() {
    this.onClicked.emit('add');
  }
}
