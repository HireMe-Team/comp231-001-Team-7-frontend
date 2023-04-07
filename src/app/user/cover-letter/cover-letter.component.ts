import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css'],
})
export class CoverLetterComponent {
  position: string;
  company: string;
  message: string;
  coverLetter: any = {
    position: 'Full Stack Developer',
    company: 'XYZ Company',
    message:
      'Dear Hiring Manager,\n\nI am excited to apply for the position of Full Stack Developer at XYZ Company. As a highly skilled and motivated developer with over 5 years of experience in web development, I am confident that I have the skills and experience necessary to succeed in this role.\n\nThroughout my career, I have worked on a variety of projects using a range of technologies, including JavaScript, Node.js, React, and MongoDB. I am passionate about building scalable and performant web applications that provide value to users and businesses alike.\n\nIn my current role as a Senior Developer at ABC Company, I have led a team of developers in the successful delivery of several large-scale projects. I have also collaborated with other teams and stakeholders to ensure that project goals and objectives are met on time and within budget.\n\nI am excited about the opportunity to bring my skills and experience to XYZ Company and contribute to the success of the team. Thank you for considering my application.\n\nSincerely,\nJohn Doe',
  };
  showForm = false;

   constructor(private userService: UserService) { }
  // constructor() {}
  ngOnInit() {
    // this.userService.getUserCoverLetter().subscribe(
    //   (data: any) => {
    //     if (data.coverLetter) {
    //       this.coverLetter = data.coverLetter;
    //       this.position = data.coverLetter.position;
    //       this.company = data.coverLetter.company;
    //       this.message = data.coverLetter.message;
    //     }
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
  }

  onSubmit(form) {
    console.log('Cover letter form submitted');
    console.log(form.value); 
    // TODO: to create a method in user service to issue a post request, dependent on Joe's task
    // TODO: Call API to save cover letter to database
    this.userService.createCoverLetter(form.value).subscribe(data => {
      this.coverLetter= {
      position: data.position,
      company: data.company,
      message: data.message,
    };

    })
  }

  editCoverLetter(coverLetter: any) {
    this.userService.editCoverLetter(coverLetter);
  }

  deleteCoverLetter(coverLetter: any) {
    this.userService.deleteCoverLetter(coverLetter);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
