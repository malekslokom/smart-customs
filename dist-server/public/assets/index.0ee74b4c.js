import{r as b,o as l,c as _,d as p,a as u,b as f,e as t,f as x,w as g,v,g as w,h as k,i as L,u as C,m as I,p as S,j as D,k as E,l as N,n as V,q as A}from"./vendor.754a45ac.js";const B=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};B();var h=(r,a)=>{const o=r.__vccOpts||r;for(const[n,e]of a)o[n]=e;return o};const M={};function P(r,a){const o=b("router-view");return l(),_(o)}var O=h(M,[["render",P]]);var q="/assets/logo.c695bb53.png";const m=r=>(S("data-v-0d4094a3"),r=r(),D(),r),$={class:"container-fluid"},F={class:"row no-gutter"},j=m(()=>t("div",{class:"col-lg-6 col-md-12 p-0 bg-image"},null,-1)),T={class:"col-lg-6 col-md-12 p-0",style:{"background-color":"#C0CCDA"}},U={class:"login d-flex align-items-center py-5"},H={class:"container"},K={class:"row"},R={class:"col-lg-10 col-xl-7 mx-auto"},W=m(()=>t("div",{class:"logo"},[t("img",{style:{"max-width":"300px"},src:q,alt:"Logo"})],-1)),z=m(()=>t("h3",{class:"title"},"Marhab\xE9 !",-1)),G={key:0,class:"alert alert-danger",role:"alert"},J={class:"form-group mb-3"},Q={class:"form-group mb-3"},X={class:"d-grid gap-2"},Y=E("Se connecter"),Z=p({emits:["login"],setup(r,{emit:a}){const o=u(!1),n=u(""),e=u(""),s=()=>{console.log("user name:",n.value),a("login",{email:n.value,motDePasse:e.value})};return(c,i)=>(l(),f("div",$,[t("div",F,[j,t("div",T,[t("div",U,[t("div",H,[t("div",K,[t("div",R,[W,z,o.value?(l(),f("div",G," L\u2019e-mail ou le mot de passe entr\xE9 ne correspond \xE0 aucun compte ")):x("",!0),t("form",null,[t("div",J,[g(t("input",{name:"email",id:"email",class:"form-control",type:"email",placeholder:"Email",required:"","onUpdate:modelValue":i[0]||(i[0]=d=>n.value=d)},null,512),[[v,n.value]])]),t("div",Q,[g(t("input",{name:"motDePasse",id:"motDePasse",class:"form-control",type:"password",placeholder:"Mot de passe",required:"","onUpdate:modelValue":i[1]||(i[1]=d=>e.value=d)},null,512),[[v,e.value]])]),t("div",X,[w(C(I.exports.MDBBtn),{style:{background:"linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(79,183,203,1) 100%)",color:"white"},block:"",onClick:L(s,["prevent"])},{default:k(()=>[Y]),_:1},8,["onClick"])])])])])])])])])]))}});var ee=h(Z,[["__scopeId","data-v-0d4094a3"]]);const oe=p({setup(r){const a=({email:o,motDePasse:n})=>{console.log(o,n)};return(o,n)=>(l(),_(ee,{onLogin:a}))}}),te={},se={},re=N(),ne=[{path:"/login",component:oe},{path:"/administration",component:te},{path:"/accueil",component:se}],y=V({history:re,routes:ne});y.beforeEach((r,a,o)=>{if(r.name=="accueil"&&!localStorage.getItem("user"))return o("/");if(localStorage.getItem("user")){if(localStorage.getItem("user").type=="Administrateur")return o("/administration")}else return o("/accueil");o()});A(O).use(y).mount("#app");
