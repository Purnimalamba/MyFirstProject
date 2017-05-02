import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {RepositoryComponent} from './repository/repository.component';
import { DetailsComponent } from './details/details.component';
import {GitService} from './git.service';


const routes:Routes =[
{
  path:'details' , component:DetailsComponent
} ,
  {
    path : 'repo' , component :RepositoryComponent
  },
  {
    path: "**", component : RepositoryComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
