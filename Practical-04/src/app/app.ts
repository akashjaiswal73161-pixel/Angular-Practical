import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio';

  student = {
    name: 'Akash Jaiswal',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with experience in Angular, Node.js, and modern web technologies.',

    skills: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'CSS'
    ],

    projects: [
      {
        name: 'Portfolio Website',
        description: 'A personal website to showcase my work and skills.',
        link: 'https://github.com/AkashJaiswal/Angular-Practicals'
      },
      {
        name: 'Task Manager App',
        description: 'A task management app built with Angular and Firebase.',
        link: 'https://github.com/Shiv'
      }
    ],

    contact: {
      email: 'AkashJaiswal@gmail.com',
      phone: '+91 XXXXX XXXXX',
      linkedin: 'https://linkedin.com/in/AkashJaiswal',
      github: 'https://github.com/AkashJaiswal'
    }
  };
}