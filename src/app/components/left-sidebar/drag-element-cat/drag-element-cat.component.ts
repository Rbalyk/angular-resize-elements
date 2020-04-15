import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { AngularResizeElementEvent } from 'angular-resize-element';
import { AngularResizeElementDirection } from 'angular-resize-element';

@Component({
  selector: 'app-drag-element-cat',
  templateUrl: './drag-element-cat.component.html',
  styleUrls: ['./drag-element-cat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragElementCatComponent implements OnInit {

  readonly AngularResizeElementDirection = AngularResizeElementDirection;
  constructor(public host: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public onResize(evt: AngularResizeElementEvent): void {
    this.renderer.setStyle(this.host.nativeElement, 'min-height', evt.currentHeightValue + 'px');
    this.renderer.setStyle(this.host.nativeElement, 'max-height', evt.currentHeightValue + 'px');
  }

}
