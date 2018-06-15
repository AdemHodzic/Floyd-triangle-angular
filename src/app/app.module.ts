import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { NodeComponent } from './components/node/node.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { ContentService } from './services/content.service';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NodeComponent,
    PromptComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
