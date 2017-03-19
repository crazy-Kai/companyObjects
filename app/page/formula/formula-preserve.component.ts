//
//import { Component, OnInit, Input, trigger, state, style, transition, animate, ViewChild, HostListener} from '@angular/core';
//import { TreeComponent, TreeNode } from 'angular2-tree-component';
//
//@Component({
//	selector: 'formula-preserve',
//	templateUrl:'formula-preserve.component.html',
//	styleUrls:['formula-preserve.component.css']
//})
//export class FormulaPreserveComponent implements OnInit {
//
//	constructor() { }
//
//   ngOnInit() { }
//}
//
//

import { Component,OnInit,ViewChild} from '@angular/core';
import { DataTreeService } from './formula-preserve.service';
import { TreeComponent, TreeNode } from 'angular2-tree-component';

@Component({
	selector: 'formula-preserve',
	templateUrl:'formula-preserve.component.html',
	styleUrls:['formula-preserve.component.css','../../app.component.css'],
	providers:[DataTreeService]
})


export class FormulaPreserveComponent implements OnInit{
	@ViewChild(TreeComponent)
	private tree: TreeComponent;
//	private analysisTypeOption : any = {
//		width:'100%'
//	};
	constructor(
		private dataTreeService: DataTreeService
		) { }
//	private isShow:boolean = false;
//	private isTextShow:boolean =true;

	drugsTreeData:any;

//	isAdd: boolean;						//是否为添加操作
//	searchWord: string;					//搜索条件
	/**
	 * @handlerType => 操作类型
	 * addData => 添加资料, addCate => 添加分类 
	 */
	
//	handlerType: string;

	/**
	 * @docType => 资料类型
	 * data_pharmacy => 书籍, data_periodical => 期刊, data_elec_doc => 电子文献, data_elec_bull => 电子公告, data_others => 其他资料; 
	 */
//	docType: string;					//当前顶级分类
//	curDocType: string;					//当前上级分类

	curNode: any;						//当前节点。  pCode 判断是否为根节点
	curTreeNode: TreeNode;
//	cateType: any = {};						//当前节点的数据类型
	/**
	 * 
	 */


	ngOnInit(){
		console.log(this.tree);
		this.getDataTree();

	}
	/*获取所有父节点*/
	getDataTree(dictValue?: string){
		this.dataTreeService.getDrugsTree(dictValue)
			.then(res => {
				console.log(res)
				/*模拟数据*/

				// for(var i =0;i<res.length;i++ ){
				// 	res[i]['isParent'] =true;
				// 	res[i]['hasChildren']=true;
				// }
//				console.log(res)
				if (res != null) {
					// if (dictValue)
					// 	this.setExpanded(res);
					this.drugsTreeData = res;
			console.log(this.drugsTreeData)
				}
				else this.drugsTreeData = [];
			});
	}
	/*获取子节点*/
	getChildren(node: any): any {
		return this.dataTreeService.getChildrenByNode(node.data);
	}
	 options = {
		getChildren: this.getChildren.bind(this),
		idField: 'id'
	}
	/*选择节点*/
	chooseNode($event: any){
		this.curTreeNode = $event.node;
		this.curNode = this.curTreeNode;
	}

}