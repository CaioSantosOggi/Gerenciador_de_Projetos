import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetoComponent } from './projeto/projeto.component';

const routes: Routes = [

  { path: '', component: HomeComponent },  // Definindo a rota padrão para o Home
  { path: 'projeto', component: ProjetoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
