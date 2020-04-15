import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { AngularResizeElementEvent } from 'angular-resize-element';
import { AngularResizeElementDirection } from 'angular-resize-element';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftSidebarComponent implements OnInit {
  readonly AngularResizeElementDirection = AngularResizeElementDirection;
  constructor(public host: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.host.nativeElement.children);
  }

  public onResize(evt: AngularResizeElementEvent): void {
    this.renderer.setStyle(this.host.nativeElement, 'min-width', evt.currentWidthValue + 'px');
    this.renderer.setStyle(this.host.nativeElement, 'max-width', evt.currentWidthValue + 'px');
  }
}
