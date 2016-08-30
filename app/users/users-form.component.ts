import {Component} from 'angular2/core'
import {ControlGroup,Control,FormBuilder,Validators} from 'angular2/common';
import {UserValidators} from './user-validator'



@Component({
	templateUrl: 'app/users/users-form.component.html',
})

export class UsersFormComponent {
	form: ControlGroup;

	constructor(fb: FormBuilder){
		this.form = fb.group({
			name: ['',Validators.required],
			email: ['',Validators.compose([Validators.required,UserValidators.hasToBeValidEmail])]
		})
	}
}