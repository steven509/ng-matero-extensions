(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7B1y":function(s,n,a){"use strict";a.r(n),n.default='<button mat-raised-button (click)="openOriginal()">Open Original Dialog</button>\n\n<div *ngIf="animal">\n  You chose: <strong>{{animal}}</strong>\n</div>\n'},"9Y7o":function(s,n,a){"use strict";a.r(n),n.default=".mat-raised-button {\n  margin: 0 .5em;\n}\n"},ARrw:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"openOriginal()"</span>&gt;</span>Open Original Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"animal"</span>&gt;</span>\n  You chose: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{animal}}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},CvZm:function(s,n,a){"use strict";a.r(n),a.d(n,"DialogModule",(function(){return y}));var t=a("sEIs"),l=a("M0ag"),o=a("EM62"),p=a("2kYt"),e=a("Pg5x");function i(s,n){if(1&s&&(o.Ub(0),o.Rb(1,"example-viewer",2),o.Tb()),2&s){const s=n.$implicit;o.Cb(1),o.nc("exampleData",s)}}function c(s,n){if(1&s&&(o.Ub(0),o.Hc(1,i,2,1,"ng-container",1),o.Tb()),2&s){const s=n.ngIf;o.Cb(1),o.nc("ngForOf",s.examples)}}let r=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(o.Qb(t.a))},s.\u0275cmp=o.Kb({type:s,selectors:[["app-dialog"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(o.Wb(0,"p"),o.Jc(1," THe Extensions dialog is a wrapper of Angular Material dialog.\n"),o.Vb(),o.Hc(2,c,2,1,"ng-container",0),o.jc(3,"async")),2&s&&(o.Cb(2),o.nc("ngIf",o.kc(3,1,n.route.data)))},directives:[p.t,p.s,e.a],pipes:[p.b],styles:[""]}),s})();var m=a("U+c6"),g=a("PBFl");const h={title:"Basic confirmation",component:(()=>{class s{constructor(s){this.mtxDialog=s}alert(){this.mtxDialog.alert("My name is Zongbin!",()=>{this.mtxDialog.alert("Glad to meet you!")})}confirm(){this.mtxDialog.confirm("What's your name?",()=>{this.mtxDialog.alert("Hi, Zongbin!")},()=>{this.mtxDialog.alert("I don't know.")})}open(){this.mtxDialog.open({title:"This is the title",description:"You can write some messages here.",buttons:[{type:"",text:"CLOSE",onClick:()=>{this.mtxDialog.alert("You click Close button.")}},{type:"primary",text:"VIEW",onClick:()=>{this.mtxDialog.alert("You click View button.")}},{type:"warn",text:"OK",onClick:()=>{this.mtxDialog.alert("You click Ok button.")}}]})}}return s.\u0275fac=function(n){return new(n||s)(o.Qb(m.a))},s.\u0275cmp=o.Kb({type:s,selectors:[["dialog-example"]],decls:6,vars:0,consts:[["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(s,n){1&s&&(o.Wb(0,"button",0),o.ec("click",(function(){return n.alert()})),o.Jc(1,"Alert"),o.Vb(),o.Wb(2,"button",1),o.ec("click",(function(){return n.confirm()})),o.Jc(3,"Confirm"),o.Vb(),o.Wb(4,"button",2),o.ec("click",(function(){return n.open()})),o.Jc(5,"Open Dialog"),o.Vb())},directives:[g.b],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin:0 .5em}"]}),s})(),files:[{file:"app.component.html",content:a("ddwq"),filecontent:a("Zjmw")},{file:"app.component.ts",content:a("rnnt"),filecontent:a("ePu9")},{file:"app.component.scss",content:a("QSrp"),filecontent:a("9Y7o")}]};var u=a("OZ4H"),d=a("29Wa"),j=a("Cd2c"),b=a("nIj0");function f(s,n){if(1&s&&(o.Wb(0,"div"),o.Jc(1," You chose: "),o.Wb(2,"strong"),o.Jc(3),o.Vb(),o.Vb()),2&s){const s=o.ic();o.Cb(3),o.Kc(s.animal)}}let k=(()=>{class s{constructor(s){this.mtxDialog=s}openOriginal(){this.mtxDialog.originalOpen(w,{width:"550px",data:{name:"nzbin",animal:"panda"}}).afterClosed().subscribe(s=>{console.log("The dialog was closed"),this.animal=s})}}return s.\u0275fac=function(n){return new(n||s)(o.Qb(m.a))},s.\u0275cmp=o.Kb({type:s,selectors:[["dialog-example"]],decls:3,vars:1,consts:[["mat-raised-button","",3,"click"],[4,"ngIf"]],template:function(s,n){1&s&&(o.Wb(0,"button",0),o.ec("click",(function(){return n.openOriginal()})),o.Jc(1,"Open Original Dialog"),o.Vb(),o.Hc(2,f,4,1,"div",1)),2&s&&(o.Cb(2),o.nc("ngIf",n.animal))},directives:[g.b,p.t],styles:["div[_ngcontent-%COMP%]{padding:1em}"]}),s})(),w=(()=>{class s{constructor(s,n){this.dialogRef=s,this.data=n}onNoClick(){this.dialogRef.close()}}return s.\u0275fac=function(n){return new(n||s)(o.Qb(u.g),o.Qb(u.a))},s.\u0275cmp=o.Kb({type:s,selectors:[["dialog-overview"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(s,n){1&s&&(o.Wb(0,"h1",0),o.Jc(1),o.Vb(),o.Wb(2,"div",1),o.Wb(3,"p"),o.Jc(4,"What's your favorite animal?"),o.Vb(),o.Wb(5,"mat-form-field"),o.Wb(6,"input",2),o.ec("ngModelChange",(function(s){return n.data.animal=s})),o.Vb(),o.Vb(),o.Vb(),o.Wb(7,"div",3),o.Wb(8,"button",4),o.ec("click",(function(){return n.onNoClick()})),o.Jc(9,"No Thanks"),o.Vb(),o.Wb(10,"button",5),o.Jc(11,"Ok"),o.Vb(),o.Vb()),2&s&&(o.Cb(1),o.Lc("Hi, ",n.data.name,""),o.Cb(5),o.nc("ngModel",n.data.animal),o.Cb(4),o.nc("mat-dialog-close",n.data.animal))},directives:[u.h,u.e,d.c,j.b,b.c,b.l,b.o,u.c,g.b,u.d],encapsulation:2}),s})();const x={title:"Material original dialog",component:k,files:[{file:"app.component.html",content:a("ARrw"),filecontent:a("7B1y")},{file:"app.component.ts",content:a("Pml+"),filecontent:a("yt42")},{file:"app.component.scss",content:a("SuNE"),filecontent:a("Ptgv")},{file:"dialog.html",content:a("IXrR"),filecontent:a("MPN+")}]};let y=(()=>{class s{}return s.\u0275mod=o.Ob({type:s}),s.\u0275inj=o.Nb({factory:function(n){return new(n||s)},imports:[[l.a,t.i.forChild([{path:"",component:r,data:{examples:[h,x]}}])]]}),s})()},IXrR:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">mat-dialog-title</span>&gt;</span>Hi, {{ data.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>What\'s your favorite animal?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data.animal"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-actions</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"onNoClick()"</span>&gt;</span>No Thanks<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">mat-dialog-close</span>]=<span class="hljs-string">"data.animal"</span> <span class="hljs-attr">cdkFocusInitial</span>&gt;</span>Ok<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},"MPN+":function(s,n,a){"use strict";a.r(n),n.default='<h1 mat-dialog-title>Hi, {{ data.name }}</h1>\n<div mat-dialog-content>\n  <p>What\'s your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]="data.animal" />\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)="onNoClick()">No Thanks</button>\n  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>\n</div>\n'},"Pml+":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-matero/extensions\'</span>;\n<span class="hljs-keyword">import</span> { MatDialogRef, MAT_DIALOG_DATA } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/material/dialog\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'dialog-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'./app.component.scss\'</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  animal: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  openOriginal() {\n    <span class="hljs-keyword">const</span> dialogRef = <span class="hljs-keyword">this</span>.mtxDialog.originalOpen(DialogOverviewComponent, {\n      width: <span class="hljs-string">\'550px\'</span>,\n      data: { name: <span class="hljs-string">\'nzbin\'</span>, animal: <span class="hljs-string">\'panda\'</span> },\n    });\n\n    dialogRef.afterClosed().subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'The dialog was closed\'</span>);\n      <span class="hljs-keyword">this</span>.animal = result;\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'dialog-overview\'</span>,\n  templateUrl: <span class="hljs-string">\'./dialog.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DialogOverviewComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">public</span> dialogRef: MatDialogRef&lt;DialogOverviewComponent&gt;,\n    <span class="hljs-meta">@Inject</span>(MAT_DIALOG_DATA) <span class="hljs-keyword">public</span> data: <span class="hljs-built_in">any</span>\n  </span>) {}\n\n  onNoClick(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.dialogRef.close();\n  }\n}\n'},Ptgv:function(s,n,a){"use strict";a.r(n),n.default="div {\n  padding: 1em;\n}\n"},QSrp:function(s,n){s.exports='<span class="hljs-selector-class">.mat-raised-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5em</span>;\n}\n'},SuNE:function(s,n){s.exports='<span class="hljs-selector-tag">div</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;\n}\n'},Zjmw:function(s,n,a){"use strict";a.r(n),n.default='<button mat-raised-button color="warn" (click)="alert()">Alert</button>\n<button mat-raised-button color="accent" (click)="confirm()">Confirm</button>\n<button mat-raised-button color="primary" (click)="open()">Open Dialog</button>\n'},ddwq:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"warn"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"alert()"</span>&gt;</span>Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"accent"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"confirm()"</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"primary"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"open()"</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},ePu9:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  constructor(private mtxDialog: MtxDialog) {}\n\n  alert() {\n    this.mtxDialog.alert(`My name is Zongbin!`, () => {\n      this.mtxDialog.alert(`Glad to meet you!`);\n    });\n  }\n\n  confirm() {\n    this.mtxDialog.confirm(\n      `What's your name?`,\n      () => {\n        this.mtxDialog.alert(`Hi, Zongbin!`);\n      },\n      () => {\n        this.mtxDialog.alert(`I don't know.`);\n      }\n    );\n  }\n\n  open() {\n    this.mtxDialog.open({\n      title: 'This is the title',\n      description: 'You can write some messages here.',\n      buttons: [\n        {\n          type: '',\n          text: 'CLOSE',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Close button.`);\n          },\n        },\n        {\n          type: 'primary',\n          text: 'VIEW',\n          onClick: () => {\n            this.mtxDialog.alert(`You click View button.`);\n          },\n        },\n        {\n          type: 'warn',\n          text: 'OK',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Ok button.`);\n          },\n        },\n      ],\n    });\n  }\n}\n"},rnnt:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-matero/extensions\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'dialog-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  styleUrls: [<span class="hljs-string">\'./app.component.scss\'</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  alert() {\n    <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`My name is Zongbin!`</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`Glad to meet you!`</span>);\n    });\n  }\n\n  confirm() {\n    <span class="hljs-keyword">this</span>.mtxDialog.confirm(\n      <span class="hljs-string">`What\'s your name?`</span>,\n      <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`Hi, Zongbin!`</span>);\n      },\n      <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`I don\'t know.`</span>);\n      }\n    );\n  }\n\n  open() {\n    <span class="hljs-keyword">this</span>.mtxDialog.open({\n      title: <span class="hljs-string">\'This is the title\'</span>,\n      description: <span class="hljs-string">\'You can write some messages here.\'</span>,\n      buttons: [\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'\'</span>,\n          text: <span class="hljs-string">\'CLOSE\'</span>,\n          onClick: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Close button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'primary\'</span>,\n          text: <span class="hljs-string">\'VIEW\'</span>,\n          onClick: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`You click View button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'warn\'</span>,\n          text: <span class="hljs-string">\'OK\'</span>,\n          onClick: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-keyword">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Ok button.`</span>);\n          },\n        },\n      ],\n    });\n  }\n}\n'},yt42:function(s,n,a){"use strict";a.r(n),n.default="import { Component, Inject } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\nimport { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  animal: string;\n\n  constructor(private mtxDialog: MtxDialog) {}\n\n  openOriginal() {\n    const dialogRef = this.mtxDialog.originalOpen(DialogOverviewComponent, {\n      width: '550px',\n      data: { name: 'nzbin', animal: 'panda' },\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview',\n  templateUrl: './dialog.html',\n})\nexport class DialogOverviewComponent {\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewComponent>,\n    @Inject(MAT_DIALOG_DATA) public data: any\n  ) {}\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n}\n"}}]);