import { Component } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEnvironmentDemo';
  env = environment;
  authUrl = environment.authUrl;

  ngOnInit() {
    if (this.env.production)
      this.title = 'Production Environment';
    else if (this.env.dev)
      this.title = 'Dev Environment';
    else if (this.env.qa)
      this.title = 'Qa Environment';
  }
}
