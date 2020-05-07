import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-prac',
  templateUrl: './directives-prac.component.html',
  styleUrls: ['./directives-prac.component.css']
})
export class DirectivesPracComponent implements OnInit {
  showToggle = false;
  log = []

  constructor() { }

  ngOnInit(): void {
  }


  onShowToggle() {
    this.showToggle = !this.showToggle;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
