(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-164abcd3"],{"0798":function(e,t,r){"use strict";r("0c18");var s=r("10d2"),a=r("afdd"),n=r("9d26"),i=r("f2e7"),o=r("7560"),c=r("f40d"),l=r("58df"),u=r("d9bd");t["a"]=Object(l["a"])(s["a"],i["a"],c["a"]).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(n["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(n["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e["v-alert--border-"+this.border]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},"5cf2":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$loading().is?e._e():r("v-container",{staticClass:"timetable-student-teacher",attrs:{fluid:""}},[r("v-row",{staticClass:"mb-0"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"auto"}},[r("v-select",{attrs:{label:"Учебный год",items:e.years,"item-text":"name","item-value":"id",disabled:e.isTimetableLoading,dense:"",outlined:"","hide-details":""},on:{change:e.onChangeYear},model:{value:e.selectedYearId,callback:function(t){e.selectedYearId=t},expression:"selectedYearId"}})],1),e.selectedYear?r("v-col",{attrs:{cols:"12",md:"12"}},["student"===e.userType?r("info-card-student",{attrs:{groups:e.groups,"group-id":e.groupId,"study-year":e.studyYear,"year-id":e.selectedYearId,"year-start":e.yearStart,"user-sfc":e.userSfc,"has-session":e.hasSession,"is-spo":e.isSpo},on:{"change-group":e.changeGroup}}):r("info-card-teacher",{attrs:{"staff-id":e.staffId,"study-year":e.studyYear,"year-id":e.selectedYearId,"year-start":e.yearStart,"has-session":e.hasSession}})],1):e._e()],1),r("v-alert",{attrs:{border:"left",color:"error",outlined:""}},[r("span",[e._v(" Расписание находится в процессе корректировки. Обязательна ежедневная сверка расписания! Для уточнения информации обращайтесь в учебный отдел по телефонам: "),r("a",{attrs:{target:"_self",href:"tel:+78462674417"}},[e._v("267-44-17")]),e._v(" (южная площадка), "),r("a",{attrs:{target:"_self",href:"tel:+78463345421"}},[e._v("334-54-21")]),e._v(" (северная площадка). ")])]),r("timetable",{attrs:{"user-type":e.userType,lessons:e.lessons,lessonsIET:e.lessonsIET,"current-week":e.currentWeek,"is-elongated":e.isElongated,"last-week":e.lastWeek,"year-id":e.selectedYearId,"year-start":e.yearStart,"is-spo":e.isSpo,"is-loading":e.isTimetableLoading},on:{"change-week":e.changeWeek,"update-link":e.fetchTimetable}}),r("div",{staticClass:"text-center my-4"},[e._v(" По всем вопросам, связанным с расписанием, обращайтесь по адресу "),r("a",{attrs:{href:"mailto:rasp@ssau.ru"}},[e._v(" rasp@ssau.ru ")])])],1)},a=[],n=r("1da1"),i=r("5530"),o=(r("96cf"),r("d81d"),r("7db0"),r("d3b7"),r("5633")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"card-info"},[r("v-row",[e.groups.length?r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-row",{staticClass:"title-row"},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"title"},[e._v(e._s(e.currentGroup.name))]),e.groups.length>1?r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.attrs,a=t.on;return[r("div",{staticClass:"pt-1"},[r("span",e._g(e._b({staticClass:"select-group"},"span",s,!1),a),[e._v(" Выбрать группу ")])])]}}],null,!1,183278174)},[r("v-list",e._l(e.groups,(function(t){return r("v-list-item",{key:t.id,on:{click:function(r){return e.changeGroup(t.id)}}},[r("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)})),1)],1):e._e()],1)],1),r("v-row",{staticClass:"desc"},[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[e._v(" "+e._s(e.getSpecCode(e.currentGroup.spec.code))+" "+e._s(e.currentGroup.spec.name)+" ")])],1),r("v-row",{staticClass:"desc"},[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[e._v(" "+e._s(e.currentGroup.studyLevel.name)+" ("+e._s(e.currentGroup.studyForm.name)+") ")])],1),r("v-row",{staticClass:"desc"},[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[e._v(" "+e._s(e.studyYear)+" уч.год ")])],1),r("v-row",{staticClass:"desc"},[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[e._v(" Начало учебного года: "+e._s(e.yearAt)+" ")])],1)],1):e._e(),r("v-spacer"),e.hasSession?r("v-col",{staticClass:"actions-block text-center",attrs:{cols:"6",md:"2"}},[r("v-list-item",{staticClass:"d-flex justify-center",attrs:{link:"",to:"/timetable/session/"+e.groupId}},[r("div",[r("v-icon",{attrs:{color:"white",size:"32"}},[e._v("mdi-timetable")]),r("span",{staticClass:"d-block"},[e._v("Расписание сессии")])],1)])],1):e._e(),e.userSfc.length?r("v-col",{staticClass:"actions-block text-center",attrs:{cols:"12",md:"2"}},[r("dialog-gia",{attrs:{"user-sfc":e.userSfc}})],1):e._e(),e.isSpo?e._e():r("v-col",{staticClass:"actions-block text-center",attrs:{cols:"12",md:"2"}},[r("v-list-item",{staticClass:"d-flex justify-center",attrs:{link:"",href:"/timetable/printing-form/group/"+e.groupId+"?yearId="+e.yearId,target:"_blank"}},[r("div",[r("v-icon",{attrs:{color:"white",size:"32"}},[e._v("mdi-file-pdf-box")]),r("span",{staticClass:"d-block"},[e._v("Скачать PDF")])],1)])],1)],1)],1)},l=[],u=(r("a9e3"),r("ac1f"),r("1276"),r("fb6a"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[r("v-list-item",e._g(e._b({staticClass:"d-flex justify-center",attrs:{link:""}},"v-list-item",a,!1),s),[r("div",[r("v-icon",{attrs:{color:"white",size:"32"}},[e._v("mdi-file-pdf-box")]),r("span",{staticClass:"d-block"},[e._v("Расписание ГИА")])],1)])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Расписание ГИА ")]),r("v-card-text",[r("v-list",e._l(e.userSfc,(function(t){return r("v-list-item",{key:t.id,attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(t.name)+" ")]),r("v-list-item-subtitle",{staticClass:"subtitle-1"},[e._v(" "+e._s(t.date)+" "+e._s(t.time)+" ")]),r("v-list-item-subtitle",{staticClass:"caption"},[r("a",{attrs:{href:t.resource}},[e._v(" "+e._s(t.resource)+" ")])])],1)],1)})),1)],1),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Закрыть ")])],1)],1)],1)}),d=[],f={name:"DialogGia",props:{userSfc:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1}}},p=f,h=r("2877"),v=r("6544"),m=r.n(v),g=r("8336"),b=r("b0af"),y=r("99d9"),_=r("169a"),C=r("132d"),k=r("8860"),w=r("da13"),x=r("5d23"),I=r("71d9"),Y=Object(h["a"])(p,u,d,!1,null,"79c18e06",null),S=Y.exports;m()(Y,{VBtn:g["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["c"],VDialog:_["a"],VIcon:C["a"],VList:k["a"],VListItem:w["a"],VListItemContent:x["b"],VListItemSubtitle:x["c"],VListItemTitle:x["d"],VToolbar:I["a"]});var T=r("c1df"),$=r.n(T),V={name:"InfoCardStudent",components:{DialogGia:S},props:{groups:{type:Array,default:function(){return[]}},groupId:{type:Number,default:function(){return null}},studyYear:{type:Number},yearId:{type:Number,default:function(){return null}},yearStart:{type:String,default:function(){return""}},hasSession:{type:Boolean,default:function(){return!1}},userSfc:{type:Array,default:function(){return[]}},isSpo:{type:Boolean,default:function(){return!1}}},computed:{currentGroup:function(){var e,t=this;return null!==(e=this.groups.find((function(e){return e.id===t.groupId})))&&void 0!==e?e:null},yearAt:function(){return $()(this.yearStart,"YYYY-MM-DD").format("DD.MM.YYYY")}},methods:{changeGroup:function(e){this.$emit("change-group",e)},getSpecCode:function(e){var t=e.split("#")[0];return 6===t.length?t.replace(/(.{2})/g,"$1.").slice(0,8):t}}},j=V,B=r("62ad"),E=r("e449"),D=r("0fd9"),O=r("2fa4"),W=Object(h["a"])(j,c,l,!1,null,null,null),R=W.exports;m()(W,{VCard:b["a"],VCol:B["a"],VIcon:C["a"],VList:k["a"],VListItem:w["a"],VListItemTitle:x["d"],VMenu:E["a"],VRow:D["a"],VSpacer:O["a"]});var L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"card-info-teacher"},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"year"},[e._v(" "+e._s(e.studyYear)+" уч.год ")]),r("div",{staticClass:"year-start"},[e._v(" Начало учебного года: "+e._s(e.yearAt)+" ")])]),r("v-spacer"),e.hasSession?r("v-col",{staticClass:"actions-block d-flex justify-content-end",attrs:{cols:"6",md:"3"}},[r("a",{attrs:{href:"/timetable/session/"+e.staffId}},[r("span",{staticClass:"d-block"},[r("v-icon",{attrs:{color:"primary",size:"32"}},[e._v(" mdi-timetable ")]),e._v(" Расписание сессии ")],1)])]):e._e(),r("v-col",{staticClass:"actions-block d-flex flex-row justify-content-end",attrs:{cols:"12",md:"3"}},[r("a",{attrs:{href:"/timetable/printing-form/teacher/"+e.staffId+"?yearId="+e.yearId,target:"_blank"}},[r("span",{staticClass:"d-block"},[r("v-icon",{attrs:{color:"primary",size:"32"}},[e._v(" mdi-file-pdf-box ")]),e._v(" Скачать PDF ")],1)])])],1)},A=[],M={name:"InfoCardTeacher",props:{staffId:{type:Number,default:function(){return null}},studyYear:{type:Number,default:function(){return null}},yearId:{type:Number},yearStart:{type:String,default:function(){return""}},hasSession:{type:Boolean,default:function(){return!1}}},computed:{yearAt:function(){return $()(this.yearStart,"YYYY-MM-DD").format("DD.MM.YYYY")}}},G=M,P=Object(h["a"])(G,L,A,!1,null,null,null),N=P.exports;m()(P,{VCol:B["a"],VIcon:C["a"],VRow:D["a"],VSpacer:O["a"]});var z=r("a805"),F=r("bc3a"),J=r.n(F),q={name:"StudentTeacherTimetable",props:{userType:{type:String,default:function(){return""}}},components:{Timetable:o["a"],InfoCardStudent:R,InfoCardTeacher:N},data:function(){return{groups:[],groupId:null,staffId:null,selectedYearId:null,lessons:[],lessonsIET:[],currentWeek:null,hasSession:!1,userSfc:[],isTimetableLoading:!1}},computed:{years:function(){return this.$store.state.timetable.unifiedYears.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{name:e.year+" г., начало занятий "+$()(e.startDate).format("DD.MM.YYYY")})}))},currentYear:function(){return this.years.find((function(e){return e.isCurrent}))},selectedYear:function(){var e=this;return this.years.find((function(t){return t.id==e.selectedYearId}))},lastWeek:function(){return this.selectedYear?this.selectedYear.weeks:1},yearStart:function(){return this.selectedYear?this.selectedYear.startDate:null},studyYear:function(){return this.selectedYear?this.selectedYear.year:null},isElongated:function(){return!!this.selectedYear&&this.selectedYear.isElongated},isSpo:function(){var e,t=this,r=this.groups.find((function(e){return e.id===t.groupId}));return!!r&&(null===(e=r.studyLevel)||void 0===e?void 0:e.id)===z["g"]}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$loading().is=!0,e.staffId=e.$user().staff.id,t.next=4,e.fetchYears();case 4:return t.next=6,e.fetchTimes();case 6:return t.next=8,e.fetchWeekdays();case 8:return t.next=10,e.fetchGroups();case 10:return t.next=12,e.onChangeYear();case 12:e.$loading().is=!1;case 13:case"end":return t.stop()}}),t)})))()},methods:{fetchYears:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.years.length){t.next=5;break}return t.next=3,e.$store.dispatch("timetable/fetchYears");case 3:s=t.sent,s||e.showServerErrorMessage("Не удалось получить cписок учебных годов");case 5:e.selectedYearId=e.currentYear?e.currentYear.id:null===(r=e.years[0])||void 0===r?void 0:r.id;case 6:case"end":return t.stop()}}),t)})))()},fetchTimes:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("timetable/fetchTimes");case 2:r=t.sent,r||e.showServerErrorMessage("Не удалось получить расписание звонков");case 4:case"end":return t.stop()}}),t)})))()},fetchWeekdays:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("timetable/fetchWeekdays");case 2:r=t.sent,r||e.showServerErrorMessage("Не удалось получить дни недели");case 4:case"end":return t.stop()}}),t)})))()},fetchGroups:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("student"!==e.userType){t.next=12;break}return t.prev=1,t.next=4,J.a.get("/personal/groups");case 4:r=t.sent,e.groups=r.data,e.groupId=e.groups[0].id,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.showServerErrorMessage("Не удалось получить список групп");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},fetchTimetable:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isTimetableLoading=!0,t.prev=1,t.next=4,J.a.get("/timetable/get-timetable",{params:{yearId:e.selectedYearId,week:e.currentWeek,userType:e.userType,groupId:e.groupId}});case 4:r=t.sent,s=r.data,e.lessons=s.lessons,e.lessonsIET=s.ietLessons,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.showServerErrorMessage("Данные расписания не найдены");case 13:e.isTimetableLoading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},setCurrentWeek:function(){var e,t,r=null!==(e=this.selectedYear)&&void 0!==e&&e.isElongated?0:1;if(this.selectedYearId===(null===(t=this.currentYear)||void 0===t?void 0:t.id)){var s=$()(),a=$()(this.selectedYear.startDate).startOf("week");if(a.isValid()){var n=s.diff(a,"week")+1;this.currentWeek=this.lastWeek>=n?n:r}else this.currentWeek=r}else this.currentWeek=r},onChangeYear:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setCurrentWeek(),t.next=3,e.fetchTimetable();case 3:case"end":return t.stop()}}),t)})))()},changeGroup:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.groupId=e,t.setCurrentWeek(),r.next=4,t.fetchTimetable();case 4:case"end":return r.stop()}}),r)})))()},changeWeek:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.currentWeek=e,r.next=3,t.fetchTimetable();case 3:case"end":return r.stop()}}),r)})))()}}},H=q,K=r("0798"),Q=r("a523"),U=r("b974"),X=Object(h["a"])(H,s,a,!1,null,null,null);t["default"]=X.exports;m()(X,{VAlert:K["a"],VCol:B["a"],VContainer:Q["a"],VRow:D["a"],VSelect:U["a"]})},a523:function(e,t,r){"use strict";r("20f6"),r("4b85");var s=r("2b0e");function a(e){return s["default"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:r,data:s,children:a}){s.staticClass=`${e} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const e=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(s.staticClass+=" "+e.join(" "))}return r.id&&(s.domProps=s.domProps||{},s.domProps.id=r.id),t(r.tag,s,a)}})}var n=r("d9f7");t["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:r,children:s}){let a;const{attrs:i}=r;return i&&(r.attrs={},a=Object.keys(i).filter(e=>{if("slot"===e)return!1;const t=i[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(r.domProps=r.domProps||{},r.domProps.id=t.id),e(t.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),s)}})},afdd:function(e,t,r){"use strict";var s=r("8336");t["a"]=s["a"]}}]);