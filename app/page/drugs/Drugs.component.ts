import { Component,OnInit} from '@angular/core';


@Component({
	selector:'drgus-app',
    templateUrl: 'Drugs.component.html',
	styleUrls:['Drugs.component.css','../../app.component.css']
})


export class DrgusComponentApp implements OnInit{
	private analysisTypeOption : any = {
		width:'100%'
	};
	private isShow:boolean = false;
	private isTextShow:boolean =true;
	ngOnInit(){
		
	}

}