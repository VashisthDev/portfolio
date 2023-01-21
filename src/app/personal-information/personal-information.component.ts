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
    
    ['Education', 'B.Tech(2025)'],
    ['Interests', 'Football'],
  ];

  aboutMe: string[] = [
    'Hey, my name is Dev Vashisth. I’m a graphic designer, UX/UI designer & front-end web developer from India.',
     'I’m also passionate about pop music and football and I’m always curious to learn more when it comes to new technologies and creative coding.',
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
