import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProposComponent } from './propos/propos.component';
import { EquipeComponent } from './equipe/equipe.component';

export const routes: Routes = [
    {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
    {path: 'acceuil' , component: AcceuilComponent},
    {path: 'propos' , component: ProposComponent},   
    {path: 'equipe' , component: EquipeComponent}, 
    {path:'**', redirectTo: 'acceuil', pathMatch: 'full'},
];
