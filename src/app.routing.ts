import { CollatzComponent } from './app/components/collatz/collatz.component';


//Necesitamos los siguientes modulos para reaizar el routing
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

//Definimos un array de objetos Routes

const appRoutes: Routes = [

  {
    path: "collatz/:numero", component:CollatzComponent
  },





]

//De esta clase debemos exportar los elementos app.module.ts
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
