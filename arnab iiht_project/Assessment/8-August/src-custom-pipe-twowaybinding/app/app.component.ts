import { Component } from '@angular/core';
import {RemoveSpaces} from './remove-space';
@Component({
  selector: 'remove-spaces-impl',
	template: `
		<input type="text" [(ngModel)]="characterToRemove">
		<h2>Custom pipe : removeSpaces</h2>
		<h4>{{sampleString}}</h4>
			<h4> {{sampleString | removeSpaces:characterToRemove}}</h4>
			<p (click)="somefun()">Click Here to see console output</p>
	    `
})

export class AppComponent {
	sampleString = "Angular is awesome!";
	characterToRemove="a";

	somefun():void{
		//console.log(new RemoveSpaces().transform(this.sampleString,"a"));
	}
}