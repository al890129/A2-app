import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';


import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts.component';
import {UsersFormComponent} from './users/users-form.component'

@RouteConfig([
		{path:'/',name:'Home',component: HomeComponent},
		{path:'/users',name: 'Users',component: UsersComponent},
		{path:'/users/new',name: 'NewUsers',component: UsersFormComponent},
		{path: '/posts',name: 'Posts', component: PostsComponent},
		{path: '/*other',name: 'Other', redirectTo: ['Home']}

	])

@Component({
	selector: 'my-app',
	template: `
		<navbar></navbar>
		<div class="container"> 
			<router-outlet></router-outlet>
		</div>
		
	`,
	directives: [NavbarComponent,ROUTER_DIRECTIVES]
})

export class AppComponent {

}