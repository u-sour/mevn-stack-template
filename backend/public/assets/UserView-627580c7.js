import{d as i,u,i as m,j as h,c as o,e,k as p,l as d,S as b,o as c,t,f as v,F as f,m as w,p as x,h as y}from"./index-83564f43.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const r=a=>(x("data-v-b05de212"),a=a(),y(),a),g={id:"user"},k={class:"container"},U={key:0,class:"card card-body mt-5"},N={class:"card-title"},V={class:"card-subtitle mb-2 text-muted"},B={class:"card-subtitle mb-2 text-muted"},F={class:"card-subtitle mb-2 text-muted"},I={class:"card-subtitle mb-2 text-muted"},C={class:"card card-body mt-5"},D=r(()=>e("h5",{class:"card-title placeholder-glow"},[e("span",{class:"placeholder col-6"})],-1)),E=r(()=>e("span",{class:"placeholder col-6"},null,-1)),L=[E],j=i({__name:"UserView",setup(a){const l=u(),s=m(()=>l.userDetail),_=async()=>{await l.getUser()};return h(async()=>await _()),(A,M)=>(c(),o("div",g,[e("div",k,[(c(),p(b,null,{default:d(()=>[s.value?(c(),o("div",U,[e("h5",N,"Username: "+t(s.value.username),1),e("h6",V,"Email: "+t(s.value.email),1),e("h6",B,"First Name: "+t(s.value.first_name),1),e("h6",F,"Last Name: "+t(s.value.last_name),1),e("h6",I,"Full Name: "+t(s.value.full_name),1)])):v("",!0)]),fallback:d(()=>[e("div",C,[D,(c(),o(f,null,w(4,n=>e("h5",{key:n,class:"card-subtitle mb-2 placeholder-glow"},L)),64))])]),_:1}))])]))}});const G=S(j,[["__scopeId","data-v-b05de212"]]);export{G as default};