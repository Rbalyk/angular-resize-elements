import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularResizeElementModule } from 'angular-resize-element';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { DocumentComponent } from './components/document/document.component';
import { DragElementCatComponent } from './components/left-sidebar/drag-element-cat/drag-element-cat.component';
import { DragElementDogComponent } from './components/left-sidebar/drag-element-dog/drag-element-dog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    DocumentComponent,
    DragElementCatComponent,
    DragElementDogComponent
  ],
  imports: [
    BrowserModule,
    AngularResizeElementModule,
    MatIconModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
