import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Gaming Database',
      technologies: 'Angular, Angular Material',
      description: [
        'Worked on building a gaming database frontend using angular and web API.',
        'Got to learn about Angular and Angular Material.',
        'Built a well-designed gaming database which helps folks get in touch with latest games.',
      ],
    },
    {
      title: 'To-Do App',
      technologies: 'Angular, MongoDB, ExpressJS, Node.js',
      description: [
        'Worked to build a To-Do Application',
        'Got to learn about MEAN stack technology',
        'Built productivity enhancing application which helps folks store & manage lists of tasks',
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
