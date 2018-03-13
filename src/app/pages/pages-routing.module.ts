import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    // {
    //     path: '',
    //     redirectTo: 'pages',
    //     pathMatch: 'full',
    // },
    // {
    //     path: '**',
    //     redirectTo: 'pages',
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}