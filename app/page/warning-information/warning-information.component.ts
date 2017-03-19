
import { Component, OnInit, Input, trigger, state, style, transition, animate, ViewChild, HostListener} from '@angular/core';
import { TreeComponent, TreeNode } from 'angular2-tree-component';

@Component({
	selector: ' warning-information',
	templateUrl:' warning-information.component.html',
	styleUrls:[' warning-information.component.css']
})
export class WarningInformationComponent implements OnInit {
   //依赖注入
	constructor() { }
	
	
	//添加保存
    WarimgSave() {
		alert(123)
	}
    
    //添加组合
    AddGroups(){
    	alert(456)
    	
    }
    
    //定时生效
    timeTakeEffect(){
    	alert(23)
    }
    
    //图片点击删除一行的设置
    settingRemove(){
    	alert(123)
    }
    
    //初始化
     ngOnInit() { }
}


