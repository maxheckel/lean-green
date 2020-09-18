import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenCategoryComponent } from './green-category/green-category.component';
import { LeanCategoryComponent } from './lean-category/lean-category.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../shared/store/reducers/root';
import { LeanFoodComponent } from './lean-food/lean-food.component';
import { GreenFoodComponent } from './green-food/green-food.component';


@NgModule({
  declarations: [
    AppComponent,
    GreenCategoryComponent,
    LeanCategoryComponent,
    LeanFoodComponent,
    GreenFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
