import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 75,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Python',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
