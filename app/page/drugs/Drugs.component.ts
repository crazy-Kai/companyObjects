import { Component,OnInit,ViewChild} from '@angular/core';
import { DataTreeService } from './Drugs.service';
import { TreeComponent, TreeNode } from 'angular2-tree-component';

@Component({
	selector:'drgus-app',
    templateUrl: 'Drugs.component.html',
	styleUrls:['Drugs.component.css','../../app.component.css'],
	providers:[DataTreeService]
})


export class DrgusComponentApp implements OnInit{
	@ViewChild(TreeComponent)
	private tree: TreeComponent;
	private analysisTypeOption : any = {
		width:'100%'
	};
	constructor(
		private dataTreeService: DataTreeService
		) { }
	drugsTreeData:any;
	private isShow:boolean = false;
	private isTextShow:boolean =true;


	ngOnInit(){
		console.log(this.tree);
		this.getDataTree();
	}
	/*获取所有父节点*/
	getDataTree(dictValue?: string){
		this.dataTreeService.getDrugsTree(dictValue)
			.then(res => {
				console.log(res)
				if (res != null) {
					// if (dictValue)
					// 	this.setExpanded(res);
					this.drugsTreeData = res;
				}
				else this.drugsTreeData = [];
			});
	}
	/*获取子节点*/
	getChildren(node: any): any {
		return this.dataTreeService.getChildrenByNode(node.data);
	}

}