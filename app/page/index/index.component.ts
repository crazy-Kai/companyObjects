import { Component,OnInit} from '@angular/core';

@Component({
	selector:'my-indexApp',
    templateUrl: 'index.component.html',
	styleUrls:['index.component.css','../../app.component.css']
})


export class IndexAppComponent implements OnInit{
	title :string = "欢迎来到首页";
	ngOnInit(){
		
	}

}