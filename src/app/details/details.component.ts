import { Component, OnInit } from '@angular/core';
import { GitService} from '../git.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userData = {};
  public buttonStatus = false;
  constructor(public gitservice: GitService) { }

  ngOnInit() {
  }

  onClick(Name) {
    this.buttonStatus = true;
    this.gitservice.setUserName(Name);
    this.gitservice.userInfo().subscribe(Data => {
      this.userData = Data;
      console.log(Data);
    })
  }


}
