
import { Component, OnInit, Input, trigger, state, style, transition, animate, ViewChild, HostListener,Injectable} from '@angular/core';
//引入插件
import { DialogPlugin, DialogModel } from '../common/ug-dialog/dialog';

@Component({
	selector: 'Version-effect',
	templateUrl:'Version-effect.component.html',
	styleUrls:['Version-effect.component.css']
})
export class VersionEffectComponent implements OnInit {
    @ViewChild(DialogPlugin) dialogPlugin: DialogPlugin;
	constructor(

	) { }
	
	//时间控件参数
	startDate: string;
	maxStartDate:any = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
	minEndDate: any;

    //定时生效
    timeTakeEffect(){
    	alert(123)
    }
    
     ngOnInit() { 
        
     }
     
     
     //点击修改数据
     modification(){
		this.dialogPlugin.myModule();
     }
     
     //时间格式转化
     
     
    //选择时间
    setEndInterval($event: any){
		if($event){
			this.minEndDate = $event;
		}else{
			this.minEndDate = null;
		}
	}
    setStrartInterval($event: any){
		if($event){
			this.maxStartDate = $event;
		}else{
			this.maxStartDate = {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};
		}
	}
     
}


