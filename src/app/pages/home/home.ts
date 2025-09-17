import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repos } from '../../models/repos.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  projects: Repos['items'] = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.githubService.getRepos().subscribe({
      next: (repos) => {
        this.projects = repos.items;
        console.log('Projects', this.projects);
      },
      error: (e) => {
        console.error('Error fetching repositories: ', e);
      }
    });
  }

}
