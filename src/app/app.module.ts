import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { CongratsViewComponent } from './views/congrats-view/congrats-view.component';
import { GameViewComponent } from './views/game-view/game-view.component';

@NgModule({
  declarations: [
    CustomPipePipe,
    AppComponent,
    CongratsViewComponent,
    GameViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
