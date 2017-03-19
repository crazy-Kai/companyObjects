
import { Component, OnInit, Input, trigger, state, style, transition, animate, ViewChild, HostListener} from '@angular/core';
import { TreeComponent, TreeNode } from 'angular2-tree-component';
import { TablePlugin } from '../common/ug-table/table.module';
@Component({
	selector: 'version-management',
	templateUrl:'version-management.component.html',
	styleUrls:['version-management.component.css','../../app.component.css']
})
export class VersionManagementComponent implements OnInit {
	constructor() { }

     ngOnInit() { }
        
}



