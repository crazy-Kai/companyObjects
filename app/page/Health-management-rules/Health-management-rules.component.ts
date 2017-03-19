import { Component, OnInit, Input, trigger, state, style, transition, animate, ViewChild, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'Health-management-rules',
	templateUrl:'Health-management-rules.component.html',
	styleUrls:['Health-management-rules.component.css']
})
export class HealthManagementRules implements OnInit {
	constructor(
		private router: Router
	) { }


    ngOnInit() {  }
    
    
    
    //版本管理
    versionManagementTitle(){
    	let link = ['page/Health-management-rules/Health-management-rules/version-management'];
    	this.router.navigate(link);
    }
    //规则校验
    RulesCheckTitle(){
        let link = ['page/Health-management-rules/Health-management-rules/Rules-checkout'];
    	this.router.navigate(link);
    }
     
     
     
}



