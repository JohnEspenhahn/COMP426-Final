import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

//loads the posts and comments from a particular course
@Component({
selector: 'forumc',
template: `
<ul id="slide-out" class="side-nav">
	<li><div class="userView" style = "width: 300px; height: 175px;">
		<div class="background">
			<img src="images/chapelhill.jpg">
		</div>
		<a href="#!name"><span class="white-text name">John Doe</span></a>
		<a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
	</div>
</li>
  <ul style = "overflow-y: auto;" class="collapsible" data-collapsible="accordion">
    <li [class.active]="open">
      <div class="collapsible-header" (click)="open = !open" [class.active]="open"><i class="fa fa-book" aria-hidden="true"></i>Class</div>
      <div class="collapsible-body">
      	<ul>
      	  <div style = "max-height:200px; overflow-y: auto;">
      		  <button *ngFor="let course of courseService.getTakenCourses() | async" ng-class="{course.code: true}" class = "blue" style = "background-color:white; width:100%" type = "button" >
      			  {{ course.code }}
      		  </button>
      		</div>
      	</ul>
      </div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">forum</i>Forum</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header" ><i class="material-icons">backup</i>Resources</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
  </ul>
</ul>
`,
styles: [
`
.side-nav {
transform: translateX(0px);
margin-top: 112px;
}

.collapsible li.active .collapsible-body {
	display: block !important;
}
`
]
})
export class FormComponent{
	open: boolean;
	constructor(public courseService: CoursesService) {
	}

}