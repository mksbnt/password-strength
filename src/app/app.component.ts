import {Component} from '@angular/core';
import {PASSWORD_COMPLEXITY} from "./core/enums/password-complexity.enum";
import {COLOR} from "./core/enums/color.enum";
import {getColor} from "./core/utils/color.util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Password';
  password: string = '';
  COMPLEXITY = PASSWORD_COMPLEXITY;

  setPassword(value: string): void {
    this.password = value;
  }

  getClass(complexity: PASSWORD_COMPLEXITY, password: string): COLOR {
    return getColor(complexity, password);
  }
}
