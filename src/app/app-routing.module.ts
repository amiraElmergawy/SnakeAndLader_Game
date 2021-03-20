import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameViewComponent } from './views/game-view/game-view.component';
import { CongratsViewComponent } from './views/congrats-view/congrats-view.component';

const routes: Routes = [
  {path:'', component:GameViewComponent},
  {path:'congrats', component:CongratsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
