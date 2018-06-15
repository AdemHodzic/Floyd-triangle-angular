import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptComponent } from '../components/prompt/prompt.component';
import { ContainerComponent } from '../components/container/container.component';
import { ErrorComponent } from '../components/error/error.component';

const routes: Routes = [
  {path: '', component: PromptComponent},
  {path: 'container', component: ContainerComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
