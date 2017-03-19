//import {Injectable}     from '@angular/core';
//import {Http, Response} from '@angular/http';
//import {Headers, RequestOptions} from '@angular/http';
//import {InterceptorService } from 'ng2-interceptors';
//
//@Injectable()
//export class FormulaPreserveService {
//
//  constructor(
//      private http: InterceptorService) { }
//
//}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { InterceptorService } from 'ng2-interceptors';

@Injectable()

export class DataTreeService{
	 constructor(private http:InterceptorService ) { }

	 	drugsTreeUrl = "/ipharmacare-distributed-yb-web/drug/getDrugCatalogTree";

	 	 //获取药品树的所有子节点
	   getChildrenByNode(node: any): Promise<any[]> {
	        let tempUrl: string = this.drugsTreeUrl;
             if (node && node.id)
            tempUrl += "?pid=" + node.id;
	        return this.http.get(tempUrl)
	            .toPromise()
	            .then(this.extractData)
	            .catch(this.handleError);
	    };

	     //获取资药品分类树
    getDrugsTree(dictVal?: string) {

        let tempUrl = dictVal ? `${this.drugsTreeUrl}?dictValue=${dictVal}` : this.drugsTreeUrl;

        return this.http.get(tempUrl).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
    	
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }
     private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }



 
}
   let id = 0;
function uuid() {
    id = id + 1;
    return id;
}