import { Component } from '@angular/core';
import {FilterData} from './filterData';
@Component({
  selector: 'remove-spaces-impl',
	template: `
	<input type="text" #filter (keyup)="0">
	<ul>
	<li *ngFor="let point of (points | filterData: filter.value)">
	{{point}}
	</li>
	</ul>
	    `
})

export class AppComponent {
	points: string[] = [
		 'aa',
		 'bb',
		 'cc',
		 'dd' 
	];
}