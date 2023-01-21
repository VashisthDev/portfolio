import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Dev Vashisth'],
    ['DOB', '22/06/2003'],
    ['Work Exp', '0 Years'],
    ['Education', 'B.Tech(2025)'],
    ['Interests', 'We go Jim 🔱'],
  ];

  aboutMe: string[] = [
    'Hi, I am a freelance web developer and student with a strong background in creating high-quality websites.',
    'I have experience working with a variety of programming languages such as HTML, CSS, Typescript and frameworks like Angular .',
    'I am a quick learner and can adapt to new technologies easily.',
    'As a student, I am constantly expanding my knowledge and experience in web development, which allows me to bring fresh ideas and innovative solutions to my projects.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
