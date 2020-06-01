import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule], // other Angular modules your module will need
  declarations: [AppComponent], // make components, directives, pipes available to your module
  bootstrap: [AppComponent], // will let Angular know which component or components will be starting point for bootstrap process
})
export class AppModule {}
