import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  userData1;
  userData = [];
  total;
  buttonStatus=false;
  constructor(public gitservice: GitService) { }

  ngOnInit() {
  }

  onClick(Name){
    this.buttonStatus=true;
    this.gitservice.setRepoName(Name);
      this.gitservice.RepoInfo().subscribe(Data=>{
        this.userData1 = Data;
        this.total=Data.total_count;
        for(var i =0 ; i <this.userData1.items.length; i++){
          this.userData[i] = this.userData1.items[i];
        }
        // this.total = Data.total_count;
        console.log(this.userData);
                  // console.log(Data);
      })
}


}
