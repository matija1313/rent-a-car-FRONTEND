import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pageTitle = 'HomePage';
  showDiv = true;
  angularConcepts = [
    'Components',
    'Services',
    'Modules',
    'Pipes',
    'Directives',
  ];
}
