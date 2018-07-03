import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';

const appRoutes: Routes = [
{path: '', redirectTo: '/todoTask', pathMatch: 'full'},
{path: 'todoTask', component: TodoTaskComponent},
{path: 'doneTask', component: DoneTaskComponent}
];

@NgModule ({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
