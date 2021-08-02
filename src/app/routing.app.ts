import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { Route } from "@angular/router";

// Componentes
import { CriptomonedaComponent } from "./componentes/criptomoneda/criptomoneda.component";
import { ExchangeComponent } from "./componentes/exchange/exchange.component";
import { ConvertirComponent } from "./componentes/convertir/convertir.component";
import { ContactoComponent } from "./componentes/contacto/contacto.component";

export const appRoutes: Routes = [
        {path: '', component: CriptomonedaComponent},
        {path: 'criptomoneda', component: CriptomonedaComponent},
        {path: 'exchange', component: ExchangeComponent},
        {path: 'convertir', component: ConvertirComponent},
        {path: 'contacto', component: ContactoComponent},
        {path: '**', component: CriptomonedaComponent},

    ];



export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);