"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[237],{1237:(v,u,p)=>{p.r(u),p.d(u,{EmployerModule:()=>U});var c=p(6895),l=p(6773),e=p(8256),g=p(2593);function m(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"h5",5),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"h6",6),e._uU(6),e.qZA(),e.TgZ(7,"h6",6),e._uU(8),e.qZA(),e.TgZ(9,"h6",6),e._uU(10),e.qZA(),e.TgZ(11,"h6",6),e._uU(12),e.qZA(),e.TgZ(13,"h6",6),e._uU(14),e.qZA(),e.TgZ(15,"h6",6),e._uU(16),e.qZA(),e.TgZ(17,"h6",6),e._uU(18),e.qZA(),e.TgZ(19,"h6",6),e._uU(20),e.qZA(),e.TgZ(21,"h6",6),e._uU(22),e.qZA(),e.TgZ(23,"h6",6),e._uU(24),e.qZA(),e.TgZ(25,"h6",6),e._uU(26),e.qZA(),e.TgZ(27,"p",7)(28,"b"),e._uU(29,"Job Description: "),e.qZA(),e._uU(30),e.qZA(),e._UZ(31,"hr"),e.TgZ(32,"h6",6),e._uU(33),e.qZA(),e.TgZ(34,"h6",6),e._uU(35),e.qZA(),e.TgZ(36,"h6",6),e._uU(37),e.qZA(),e.TgZ(38,"h6",6),e._uU(39),e.qZA(),e.TgZ(40,"h6",6),e._uU(41),e.qZA(),e.TgZ(42,"h6",6),e._uU(43),e.qZA(),e.TgZ(44,"h6",6),e._uU(45),e.qZA(),e.TgZ(46,"button",8),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.viewPDF(r.filename))}),e._uU(47,"View Resume"),e.qZA()()()}if(2&n){const t=a.$implicit;e.xp6(3),e.Oqu(t.Jobname),e.xp6(3),e.hij("Company Name:",t.CompanyName,""),e.xp6(2),e.hij("Location:",t.Place,""),e.xp6(2),e.hij("Salary:",t.Salary,""),e.xp6(2),e.hij("Job Type:",t.JobType,""),e.xp6(2),e.hij("Qualifications:",t.Qualifications,""),e.xp6(2),e.hij("Experience:",t.Experience,""),e.xp6(2),e.hij("Benefits:",t.Benefits,""),e.xp6(2),e.hij("Schedule:",t.Schedule,""),e.xp6(2),e.hij("Language:",t.Language,""),e.xp6(2),e.hij("Contact:",t.Contact,""),e.xp6(2),e.hij("Posted Date:",t.Date,""),e.xp6(4),e.Oqu(t.JobDescription),e.xp6(3),e.hij("Alumni Name:",t.Alumni_name,""),e.xp6(2),e.hij("Alumni Phone:",t.Alumni_phone,""),e.xp6(2),e.hij("Alumni Email:",t.Alumni_email,""),e.xp6(2),e.hij("Alumni Qualification:",t.Alumni_qualification,""),e.xp6(2),e.hij("Alumni Experience:",t.Alumni_Experience,""),e.xp6(2),e.hij("Course Taken:",t.Alumni_course,""),e.xp6(2),e.hij("Branch in ICT:",t.Alumni_branch,"")}}function h(n,a){1&n&&(e.TgZ(0,"div")(1,"div",9)(2,"div")(3,"div",10),e._UZ(4,"div",11),e.qZA(),e.TgZ(5,"h6"),e._uU(6,"Please Wait While Loading..."),e.qZA()()()())}let _=(()=>{class n{constructor(t){this.api=t}ngOnInit(){this.getjob()}getjob(){this.api.getallapprd().subscribe(t=>{this.approvedJobs=t,console.log("ggg",t)})}viewPDF(t){this._loaderShow=!0,this.api.downloadPdf(t).subscribe({next:o=>{const d=new Blob([o],{type:"application/pdf"}),r=URL.createObjectURL(d);window.open(r),this._loaderShow=!1},error:o=>{console.log("File "+o.statusText),this._loaderShow=!1,alert("File "+o.statusText)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-approved-posts"]],decls:4,vars:2,consts:[[1,"text-center","text-white","mt-4"],["class","card  mt-5 h-80","style","width: 50rem;  ",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card","mt-5","h-80",2,"width","50rem"],[1,"card-body"],[1,"card-title","text-center"],[1,"card-subtitle","mb-2"],[1,"card-text"],[1,"btn","btn-primary",3,"click"],[1,"loading"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border","m-4","text-light"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Approved Posts"),e.qZA(),e.YNc(2,m,48,20,"div",1),e.YNc(3,h,7,0,"div",2)),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.approvedJobs),e.xp6(1),e.Q6J("ngIf",o._loaderShow))},dependencies:[c.sg,c.O5],styles:[".card-body[_ngcontent-%COMP%]{background-image:linear-gradient(to right,rgb(135,229,239),rgb(185,72,213));font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.card[_ngcontent-%COMP%]{margin-left:12%}"]}),n})();function Z(n,a){if(1&n&&(e.TgZ(0,"tr")(1,"th",16),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&n){const t=a.$implicit,o=a.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.Jobname),e.xp6(2),e.Oqu(t.CompanyName),e.xp6(2),e.Oqu(t.Place)}}let b=(()=>{class n{constructor(t){this.api=t,this.jobs=[]}ngOnInit(){this.getjob()}getjob(){this.api.getall().subscribe(t=>{this.jobs=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],decls:41,vars:1,consts:[[1,"container-fluid"],[1,"row","mt-3"],[1,"col-md-12","fw-bold","fs-3","text-white"],[1,"value_cards_sec"],[1,"row"],[1,"col-lg-3"],[1,"value_card","card_1","text-center"],[1,"class","fs-5"],[1,"value_card","card_2","text-center"],[1,"value_card","card_3","text-center"],[1,"row","my-5"],[1,"fs-4","mb-3","text-white"],[1,"col"],[1,"table","bg-white","rounded","shadow-sm","table-hover"],["scope","col","width","50"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Dashboard"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h3"),e._uU(9,"56"),e.qZA(),e.TgZ(10,"p",7),e._uU(11,"Jobs posted"),e.qZA()()(),e.TgZ(12,"div",5)(13,"div",8)(14,"h3"),e._uU(15,"20"),e.qZA(),e.TgZ(16,"p",7),e._uU(17,"Companies"),e.qZA()()(),e.TgZ(18,"div",5)(19,"div",9)(20,"h3"),e._uU(21,"70"),e.qZA(),e.TgZ(22,"p",7),e._uU(23,"Users"),e.qZA()()()()(),e.TgZ(24,"div",10)(25,"h3",11),e._uU(26,"Recently Added"),e.qZA(),e.TgZ(27,"div",12)(28,"table",13)(29,"thead")(30,"tr")(31,"th",14),e._uU(32,"#"),e.qZA(),e.TgZ(33,"th",14),e._uU(34,"Job Role"),e.qZA(),e.TgZ(35,"th",14),e._uU(36,"Company Name"),e.qZA(),e.TgZ(37,"th",14),e._uU(38,"Location"),e.qZA()()(),e.TgZ(39,"tbody"),e.YNc(40,Z,9,4,"tr",15),e.qZA()()()()()),2&t&&(e.xp6(40),e.Q6J("ngForOf",o.jobs))},dependencies:[c.sg],styles:[".value_cards_sec[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.value_card[_ngcontent-%COMP%]{border-radius:20px;color:#fff;background-color:#ddd;height:150px;box-shadow:0 16px 20px #ffceb9;padding:1.2rem}.value_card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff!important;font-size:14px}.value_card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff!important;font-weight:700}.card_1[_ngcontent-%COMP%]{height:150px;background:transparent linear-gradient(109deg,#27e099 0%,#338062 100%) 0% 0% no-repeat padding-box;opacity:1}.card_2[_ngcontent-%COMP%]{height:150px;background:transparent linear-gradient(109deg,#ec55b7 0%,rgba(220,6,202,.737) 100%) 0% 0% no-repeat padding-box;opacity:1}.card_3[_ngcontent-%COMP%]{height:150px;background:transparent linear-gradient(109deg,#fa455d 0%,rgba(241,59,77,.737) 100%) 0% 0% no-repeat padding-box;opacity:1}.row[_ngcontent-%COMP%]{margin:50px}"]}),n})();var i=p(433);let f=(()=>{class n{constructor(t,o,d){this.api=t,this.router=o,this.route=d,this.data={}}ngOnInit(){this.id=this.route.snapshot.params.id,this.api.getbyid(this.id).subscribe(t=>{this.data=t,console.log(this.data)})}update(){this.api.updates(this.data,this.id).subscribe(t=>{console.log(this.data),this.data=t,console.log(t),alert("data updated"),this.ngOnInit()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.U),e.Y36(l.F0),e.Y36(l.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit"]],decls:57,vars:12,consts:[[1,"container"],[1,"MyBorder","rounded","my-5","p-3",3,"ngSubmit"],["editform","ngForm"],[1,"text-center","text-white","m-2"],[1,"form-group"],["type","text","name","Jobname",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","CompanyName",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Place",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Salary",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","JobType",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Qualifications",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","JobDescription",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Experience",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Benefits",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Schedule",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Language",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","Contact",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success","btn-lg","btn-block"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"form",1,2),e.NdJ("ngSubmit",function(){return o.update()}),e.TgZ(3,"h2",3),e._uU(4,"Edit Form"),e.qZA(),e.TgZ(5,"div",4)(6,"label"),e._uU(7,"Job Name"),e.qZA(),e.TgZ(8,"input",5),e.NdJ("ngModelChange",function(r){return o.data.Jobname=r}),e.qZA()(),e.TgZ(9,"div",4)(10,"label"),e._uU(11,"Company Name"),e.qZA(),e.TgZ(12,"input",6),e.NdJ("ngModelChange",function(r){return o.data.CompanyName=r}),e.qZA()(),e.TgZ(13,"div",4)(14,"label"),e._uU(15,"Location"),e.qZA(),e.TgZ(16,"input",7),e.NdJ("ngModelChange",function(r){return o.data.Place=r}),e.qZA()(),e.TgZ(17,"div",4)(18,"label"),e._uU(19,"Salary"),e.qZA(),e.TgZ(20,"input",8),e.NdJ("ngModelChange",function(r){return o.data.Salary=r}),e.qZA()(),e.TgZ(21,"div",4)(22,"label"),e._uU(23,"Job Type"),e.qZA(),e.TgZ(24,"input",9),e.NdJ("ngModelChange",function(r){return o.data.JobType=r}),e.qZA()(),e.TgZ(25,"div",4)(26,"label"),e._uU(27,"Qualifications"),e.qZA(),e.TgZ(28,"input",10),e.NdJ("ngModelChange",function(r){return o.data.Qualifications=r}),e.qZA()(),e.TgZ(29,"div",4)(30,"label"),e._uU(31,"Job Description"),e.qZA(),e.TgZ(32,"input",11),e.NdJ("ngModelChange",function(r){return o.data.JobDescription=r}),e.qZA()(),e.TgZ(33,"div",4)(34,"label"),e._uU(35,"Experience"),e.qZA(),e.TgZ(36,"input",12),e.NdJ("ngModelChange",function(r){return o.data.Experience=r}),e.qZA()(),e.TgZ(37,"div",4)(38,"label"),e._uU(39,"Benefits"),e.qZA(),e.TgZ(40,"input",13),e.NdJ("ngModelChange",function(r){return o.data.Benefits=r}),e.qZA()(),e.TgZ(41,"div",4)(42,"label"),e._uU(43,"Schedule"),e.qZA(),e.TgZ(44,"input",14),e.NdJ("ngModelChange",function(r){return o.data.Schedule=r}),e.qZA()(),e.TgZ(45,"div",4)(46,"label"),e._uU(47,"Language"),e.qZA(),e.TgZ(48,"input",15),e.NdJ("ngModelChange",function(r){return o.data.Language=r}),e.qZA()(),e.TgZ(49,"div",4)(50,"label"),e._uU(51,"Contact"),e.qZA(),e.TgZ(52,"input",16),e.NdJ("ngModelChange",function(r){return o.data.Contact=r}),e.qZA()(),e._UZ(53,"div",4)(54,"br"),e.TgZ(55,"button",17),e._uU(56,"UPDATE"),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("ngModel",o.data.Jobname),e.xp6(4),e.Q6J("ngModel",o.data.CompanyName),e.xp6(4),e.Q6J("ngModel",o.data.Place),e.xp6(4),e.Q6J("ngModel",o.data.Salary),e.xp6(4),e.Q6J("ngModel",o.data.JobType),e.xp6(4),e.Q6J("ngModel",o.data.Qualifications),e.xp6(4),e.Q6J("ngModel",o.data.JobDescription),e.xp6(4),e.Q6J("ngModel",o.data.Experience),e.xp6(4),e.Q6J("ngModel",o.data.Benefits),e.xp6(4),e.Q6J("ngModel",o.data.Schedule),e.xp6(4),e.Q6J("ngModel",o.data.Language),e.xp6(4),e.Q6J("ngModel",o.data.Contact))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.On,i.F],styles:[".btn[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:60%}"]}),n})();function A(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"h5",4),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"h6",5),e._uU(6),e.qZA(),e.TgZ(7,"h6",5),e._uU(8),e.qZA(),e.TgZ(9,"h6",5),e._uU(10),e.qZA(),e.TgZ(11,"h6",5),e._uU(12),e.qZA(),e.TgZ(13,"h6",5),e._uU(14),e.qZA(),e.TgZ(15,"h6",5),e._uU(16),e.qZA(),e.TgZ(17,"h6",5),e._uU(18),e.qZA(),e.TgZ(19,"h6",5),e._uU(20),e.qZA(),e.TgZ(21,"h6",5),e._uU(22),e.qZA(),e.TgZ(23,"h6",5),e._uU(24),e.qZA(),e.TgZ(25,"h6",5),e._uU(26),e.qZA(),e.TgZ(27,"p",6),e._uU(28),e.qZA(),e.TgZ(29,"button",7),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.edit(r._id))}),e._uU(30,"EDIT"),e.qZA()()()}if(2&n){const t=a.$implicit;e.xp6(3),e.Oqu(t.Jobname),e.xp6(3),e.hij("Company Name:",t.CompanyName,""),e.xp6(2),e.hij("Location:",t.Place,""),e.xp6(2),e.hij("Salary:",t.Salary,""),e.xp6(2),e.hij("Job Type:",t.JobType,""),e.xp6(2),e.hij("Qualifications:",t.Qualifications,""),e.xp6(2),e.hij("Experience:",t.Experience,""),e.xp6(2),e.hij("Benefits:",t.Benefits,""),e.xp6(2),e.hij("Schedule:",t.Schedule,""),e.xp6(2),e.hij("Language:",t.Language,""),e.xp6(2),e.hij("Contact:",t.Contact,""),e.xp6(2),e.hij("Posted Date:",t.Date,""),e.xp6(2),e.hij("Description:",t.JobDescription,"")}}const q=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-employerhome"]],decls:13,vars:0,consts:[[1,"sidebar"],["routerLink","dashboard",1,"active"],["routerLink","postjob"],["routerLink","viewjob"],["routerLink","approvedposts"],["routerLink","/login"],[1,"content"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"Dashboard"),e.qZA(),e.TgZ(3,"a",2),e._uU(4,"Post Job Details"),e.qZA(),e.TgZ(5,"a",3),e._uU(6,"View Job"),e.qZA(),e.TgZ(7,"a",4),e._uU(8,"Approved Posts"),e.qZA(),e.TgZ(9,"a",5),e._uU(10,"Log Out"),e.qZA()(),e.TgZ(11,"div",6),e._UZ(12,"router-outlet"),e.qZA())},dependencies:[l.lC,l.yS],styles:[".sidebar[_ngcontent-%COMP%]{margin:0;padding:0;width:200px;background-color:#555aa8;position:fixed;height:100%;overflow:auto}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff;padding:16px;font-family:cursive;text-decoration:none}.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#2439c0;color:#fff}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active){background-color:#ac9edb;color:#fff}div.content[_ngcontent-%COMP%]{margin-left:200px;padding:1px 16px;height:1000px}@media screen and (max-width: 700px){.sidebar[_ngcontent-%COMP%]{width:100%;height:auto;position:relative}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left}div.content[_ngcontent-%COMP%]{margin-left:0}}@media screen and (max-width: 400px){.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;float:none}}"]}),n})(),children:[{path:"dashboard",component:b},{path:"postjob",component:(()=>{class n{constructor(t){this.api=t,this.jobpostform=new i.cw({Jobname:new i.NI("",[i.kI.required]),CompanyName:new i.NI("",[i.kI.required]),Place:new i.NI("",[i.kI.required]),Salary:new i.NI("",[i.kI.required]),JobType:new i.NI("",[i.kI.required]),Qualifications:new i.NI("",[i.kI.required]),JobDescription:new i.NI("",[i.kI.required]),Experience:new i.NI("",[i.kI.required]),Benefits:new i.NI("",[i.kI.required]),Schedule:new i.NI("",[i.kI.required]),Language:new i.NI("",[i.kI.required]),Contact:new i.NI("",[i.kI.required])})}ngOnInit(){}postjob(){this.api.addjob(this.jobpostform.value).subscribe(t=>{console.log(this.jobpostform.value),alert("Job Posted")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-postjob"]],decls:56,vars:2,consts:[[1,"container"],[1,"MyBorder","rounded","my-5","p-3",3,"formGroup","ngSubmit"],[1,"text-center","text-white","m-2"],[1,"form-group"],["type","text","id","Jobname","formControlName","Jobname",1,"form-control"],["type","text","id","CompanyName","formControlName","CompanyName",1,"form-control"],["type","text","id","Place","formControlName","Place",1,"form-control"],["type","text","id","Salary","formControlName","Salary",1,"form-control"],["type","text","id","JobType","formControlName","JobType",1,"form-control"],["type","text","id","Qualifications","formControlName","Qualifications",1,"form-control"],["type","text","id","JobDescription","formControlName","JobDescription",1,"form-control"],["type","text","id","Experience","formControlName","Experience",1,"form-control"],["type","text","id","Benefits","formControlName","Benefits",1,"form-control"],["type","text","id","Schedule","formControlName","Schedule",1,"form-control"],["type","text","id","Language","formControlName","Language",1,"form-control"],["type","text","id","Contact","formControlName","Contact",1,"form-control"],["type","submit",1,"btn","btn-success","btn-lg","btn-block",3,"disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return o.postjob()}),e.TgZ(2,"h2",2),e._uU(3,"Post Job Form"),e.qZA(),e.TgZ(4,"div",3)(5,"label"),e._uU(6,"Job Name"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"div",3)(9,"label"),e._uU(10,"Company Name"),e.qZA(),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"div",3)(13,"label"),e._uU(14,"Location"),e.qZA(),e._UZ(15,"input",6),e.qZA(),e.TgZ(16,"div",3)(17,"label"),e._uU(18,"Salary"),e.qZA(),e._UZ(19,"input",7),e.qZA(),e.TgZ(20,"div",3)(21,"label"),e._uU(22,"Job Type"),e.qZA(),e._UZ(23,"input",8),e.qZA(),e.TgZ(24,"div",3)(25,"label"),e._uU(26,"Qualifications"),e.qZA(),e._UZ(27,"input",9),e.qZA(),e.TgZ(28,"div",3)(29,"label"),e._uU(30,"Job Description"),e.qZA(),e._UZ(31,"input",10),e.qZA(),e.TgZ(32,"div",3)(33,"label"),e._uU(34,"Experience"),e.qZA(),e._UZ(35,"input",11),e.qZA(),e.TgZ(36,"div",3)(37,"label"),e._uU(38,"Benefits"),e.qZA(),e._UZ(39,"input",12),e.qZA(),e.TgZ(40,"div",3)(41,"label"),e._uU(42,"Schedule"),e.qZA(),e._UZ(43,"input",13),e.qZA(),e.TgZ(44,"div",3)(45,"label"),e._uU(46,"Language"),e.qZA(),e._UZ(47,"input",14),e.qZA(),e.TgZ(48,"div",3)(49,"label"),e._uU(50,"Contact"),e.qZA(),e._UZ(51,"input",15),e.qZA(),e._UZ(52,"div",3)(53,"br"),e.TgZ(54,"button",16),e._uU(55,"Post Job"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.jobpostform),e.xp6(53),e.Q6J("disabled",!o.jobpostform.valid))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".btn[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:60%}"]}),n})()},{path:"viewjob",component:(()=>{class n{constructor(t,o){this.router=t,this.api=o,this.jobs=[]}ngOnInit(){this.getjob()}edit(t){this.router.navigate([`/employerhome/edit/${t}`])}getjob(){this.api.getall().subscribe(t=>{this.jobs=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(g.U))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-viewjob"]],decls:3,vars:1,consts:[[1,"text-center","text-white","mt-4"],["class","card  mt-5 h-80","style","width: 50rem;  ",4,"ngFor","ngForOf"],[1,"card","mt-5","h-80",2,"width","50rem"],[1,"card-body"],[1,"card-title","text-center"],[1,"card-subtitle","mb-2"],[1,"card-text"],["type","submit",1,"btn","btn-success",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"View All Jobs"),e.qZA(),e.YNc(2,A,31,13,"div",1)),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.jobs))},dependencies:[c.sg],styles:[".card-body[_ngcontent-%COMP%]{background-image:linear-gradient(to right,rgb(135,229,239),rgb(185,72,213));font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.card[_ngcontent-%COMP%]{margin-left:12%}"]}),n})()},{path:"edit/:id",component:f},{path:"approvedposts",component:_},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(q),l.Bz]}),n})();var x=p(529);let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,y,i.u5,i.UX,x.JF,l.Bz]}),n})()}}]);