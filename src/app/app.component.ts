import { Component ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

 state = [{
  state:'TN'
 },{
  state:'PY'
 },{
  state:'AP'
 },{
  state:'KL'
 },{
  state:'UP'
 }]
  onSubmit=(userForm:NgForm)=>{
       console.log(userForm.value);
  }
}
