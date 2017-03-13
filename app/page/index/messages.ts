class Field{
	fieldDetail:string;
}
class AdvicecInformationc{
	 adviceNumber:string;
	 informationc:string;
}
export class InvalidInformationc{
		name:string;
		field:Field[];
		advicecInformationc:AdvicecInformationc[];
}


export const invalidInformationcs : InvalidInformationc[] = [
		{
			name:"规则名称",field:[
					{fieldDetail:"缺失XXX字典/字段"},
					{fieldDetail:"缺失XXX字典/字段"}
				],
			advicecInformationc	:[
					{adviceNumber:"一",informationc:"建议在XX出将该值补充完善"},
					{adviceNumber:""}
			]
		}
]