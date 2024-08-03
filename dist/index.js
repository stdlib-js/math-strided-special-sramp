"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,n){
var j=require('@stdlib/strided-base-smap/dist'),x=require('@stdlib/math-base-special-rampf/dist');function l(e,r,a,i,s){return j(e,r,a,i,s,x)}n.exports=l
});var q=t(function(A,p){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-rampf/dist');function E(e,r,a,i,s,d,y){return R(e,r,a,i,s,d,y,_)}p.exports=E
});var c=t(function(B,o){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=v(),b=q();O(m,"ndarray",b);o.exports=m
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=c(),u,f=h(g(__dirname,"./native.js"));f instanceof Error?u=k:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
