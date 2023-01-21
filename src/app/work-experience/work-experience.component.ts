import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    
    {
      role: 'Web Developer Intern',
      company: 'UPHILL HR SERVICES',
      duration: 'Nov 2022 - Jan 2023',
      description: [
        'Worked to develop the official website for the firm',
        'Worked on different technologies such as (Angular,Material)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
