import { NgModule } from "@angular/core";
import { provideServerRendering, withRoutes } from "@angular/ssr";
import { App } from "./app";
import { serverRoutes } from "./app.routes.server";
import { AppModule } from "./app-module";

@NgModule({
	imports: [AppModule],
	providers: [provideServerRendering(withRoutes(serverRoutes))],
	bootstrap: [App],
})
export class AppServerModule {}
