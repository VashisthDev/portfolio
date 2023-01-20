import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    
    {
      institute: 'GGSIPU (Delhi)',
      course: 'BTech in Information Technology',
      duration: '2021-Present',
      score: '95%',
    },
    {
      institute: 'S.R. Century Public School',
      course: 'HSC',
      duration: '2019-2021',
      score: '87%',
    },
    {
      institute: 'S.R. Century Public School',
      course: 'SSC',
      duration: '2017-2019',
      score: '88%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
