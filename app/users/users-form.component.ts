import {Component} from 'angular2/core'
import {ControlGroup,Control,FormBuilder,Validators} from 'angular2/common'
import {UserValidators} from './user-validator'
import {router,CanDeactivate} from 'angular2/router'



@Component({
	templateUrl: 'app/users/users-form.component.html',
})

export class UsersFormComponent implements canDeactivate {
	form: ControlGroup;

	constructor(fb: FormBuilder){
		this.form = fb.group({
			name: ['',Validators.required],
			email: ['',Validators.compose([Validators.required,UserValidators.hasToBeValidEmail])]
		})
	}

	routerCanDeactivate(next,previous){
		if(this.form.dirty){
			return confirm("are you sure?")
		}
	}	
}