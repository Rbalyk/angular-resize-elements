import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { AngularResizeElementEvent } from 'angular-resize-element';
import { AngularResizeElementDirection } from 'angular-resize-element';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightSidebarComponent implements OnInit {

  readonly AngularResizeElementDirection = AngularResizeElementDirection;
  constructor(public host: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public onResize(evt: AngularResizeElementEvent): void {
    this.renderer.setStyle(this.host.nativeElement, 'min-width', evt.currentWidthValue + 'px');
    this.renderer.setStyle(this.host.nativeElement, 'max-width', evt.currentWidthValue + 'px');
  }
}
