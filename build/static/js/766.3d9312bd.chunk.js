"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[766],{157:(s,e,c)=>{c.d(e,{A:()=>a});c(43);const a=c.p+"static/media/turnIconBack.8aca9c3ad1a7f31833bb58931b07645d.svg"},766:(s,e,c)=>{c.r(e),c.d(e,{default:()=>n});var a=c(43),t=c(579);const i=function(s){let{title:e,projectInfo:c,technologies:a,responsibilities:i}=s;return(0,t.jsxs)("div",{className:"projects-card",children:[(0,t.jsx)("h1",{className:"projects-title",children:e}),(0,t.jsx)("span",{className:"projects-label",children:"Project Info"}),(0,t.jsx)("p",{className:"projects-info",children:c}),(0,t.jsx)("span",{className:"projects-label",children:"Used Technologies"}),(0,t.jsx)("ul",{className:"projects-technologies",children:a.map(((s,e)=>(0,t.jsx)("li",{children:s},e)))}),(0,t.jsx)("span",{className:"projects-label",children:"Responsibilities:"}),(0,t.jsx)("p",{className:"projects-responsibilities",children:i})]})};var o=c(157),r=c(475);const n=function(){const[s,e]=(0,a.useState)([]),[c,n]=(0,a.useState)(!0),[l,p]=(0,a.useState)(null);return(0,a.useEffect)((()=>{!async function(){try{const s=await fetch("https://gist.githubusercontent.com/sf911230/2acd779b1c1f4a70c231ca635cfc8e53/raw/75f760f3126d38af0feddde836bd1aba39eda502/projectsData.json");if(!s.ok)throw new Error("Network response was not ok");const c=await s.json();e(c.projects)}catch(l){p(l.message)}finally{n(!1)}}()}),[]),c?(0,t.jsx)("p",{children:"Loading..."}):l?(0,t.jsxs)("p",{children:["Error loading projects: ",l]}):0===s.length?(0,t.jsx)("p",{children:"No projects available."}):(0,t.jsx)("div",{className:"projects",children:(0,t.jsxs)("div",{className:"projects-grid-wrapper",children:[(0,t.jsx)("div",{className:"projects-grid-container",children:s.map(((s,e)=>(0,t.jsx)(i,{title:s.title,projectInfo:s.projectInfo,technologies:s.technologies,responsibilities:s.responsibilities.join(", ")},e)))}),(0,t.jsxs)(r.N_,{className:"back-link",to:"/",children:[(0,t.jsx)("span",{children:" Back"}),(0,t.jsx)("img",{className:"back-arrow",src:o.A,alt:"Back arrow"})]})]})})}}}]);
//# sourceMappingURL=766.3d9312bd.chunk.js.map