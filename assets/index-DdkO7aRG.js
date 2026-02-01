(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="182",ap=0,ph=1,op=2,kr=1,Kh=2,zs=3,ln=0,Vt=1,_n=2,Vn=0,ii=1,Jr=2,mh=3,gh=4,lp=5,Ri=100,cp=101,hp=102,up=103,dp=104,fp=200,pp=201,mp=202,gp=203,So=204,Mo=205,_p=206,vp=207,yp=208,xp=209,bp=210,Sp=211,Mp=212,wp=213,Ep=214,wo=0,Eo=1,To=2,Zi=3,Ao=4,Co=5,Ro=6,Po=7,Tl=0,Tp=1,Ap=2,Hn=0,Al=1,Cl=2,Rl=3,aa=4,Pl=5,Il=6,Ll=7,_h="attached",Cp="detached",Jh=300,Ui=301,Qi=302,Io=303,Lo=304,oa=306,tn=1e3,kn=1001,Zr=1002,Rt=1003,Zh=1004,Vs=1005,Pt=1006,zr=1007,ei=1008,an=1009,Qh=1010,eu=1011,qs=1012,Dl=1013,Wn=1014,yn=1015,cn=1016,Nl=1017,Ul=1018,js=1020,tu=35902,nu=35899,iu=1021,su=1022,xn=1023,si=1026,Pi=1027,Fl=1028,Ol=1029,es=1030,Bl=1031,kl=1033,Vr=33776,Hr=33777,Gr=33778,Wr=33779,Do=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,ko=37496,zo=37488,Vo=37489,Ho=37490,Go=37491,Wo=37808,$o=37809,Xo=37810,qo=37811,jo=37812,Yo=37813,Ko=37814,Jo=37815,Zo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,cl=36285,hl=36286,Ys=2300,Ks=2301,no=2302,vh=2400,yh=2401,xh=2402,Rp=2500,Pp=0,ru=1,ul=2,Ip=3200,zl=0,Lp=1,_i="",Ze="srgb",$t="srgb-linear",Qr="linear",nt="srgb",Xi=7680,bh=519,Dp=512,Np=513,Up=514,Vl=515,Fp=516,Op=517,Hl=518,Bp=519,dl=35044,Sh="300 es",zn=2e3,ea=2001;function kp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function w_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zp(){const s=ta("canvas");return s.style.display="block",s}const hd={};function na(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ae(...s){const e="THREE."+s.shift();console.warn(e,...s)}function De(...s){const e="THREE."+s.shift();console.error(e,...s)}function Js(...s){const e=s.join(" ");e in hd||(hd[e]=!0,Ae(...s))}function E_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ud=1234567;const $r=Math.PI/180,Zs=180/Math.PI;function Gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function au(s,e){return(s%e+e)%e}function T_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function A_(s,e,t){return s!==e?(t-s)/(e-s):0}function Xr(s,e,t){return(1-t)*s+t*e}function C_(s,e,t,n){return Xr(s,e,1-Math.exp(-t*n))}function R_(s,e=1){return e-Math.abs(au(s,e*2)-e)}function P_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function I_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function L_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function D_(s,e){return s+Math.random()*(e-s)}function N_(s){return s*(.5-Math.random())}function U_(s){s!==void 0&&(ud=s);let e=ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F_(s){return s*$r}function O_(s){return s*Zs}function B_(s){return(s&s-1)===0&&s!==0}function k_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function z_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function V_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fn={DEG2RAD:$r,RAD2DEG:Zs,generateUUID:Gn,clamp:Ye,euclideanModulo:au,mapLinear:T_,inverseLerp:A_,lerp:Xr,damp:C_,pingpong:R_,smoothstep:P_,smootherstep:I_,randInt:L_,randFloat:D_,randFloatSpread:N_,seededRandom:U_,degToRad:F_,radToDeg:O_,isPowerOfTwo:B_,ceilPowerOfTwo:k_,floorPowerOfTwo:z_,setQuaternionFromProperEuler:V_,normalize:ct,denormalize:Bn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new P,dd=new $n;class Ve{constructor(e,t,n,i,r,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],w=i[4],x=i[7],E=i[2],A=i[5],T=i[8];return r[0]=a*_+o*b+l*E,r[3]=a*m+o*w+l*A,r[6]=a*p+o*x+l*T,r[1]=c*_+h*b+u*E,r[4]=c*m+h*w+u*A,r[7]=c*p+h*x+u*T,r[2]=d*_+f*b+g*E,r[5]=d*m+f*w+g*A,r[8]=d*p+f*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Ve,fd=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pd=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){const s={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$t]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),s}const je=H_();function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class Vp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=ta("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(vc(i[a].image)):r.push(vc(i[a]))}else r=vc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let W_=0;const yc=new P;class Lt extends os{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=kn,i=kn,r=Pt,a=ei,o=xn,l=an,c=Lt.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Gn(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tn:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tn:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Jh;Lt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(f+1)/2,E=(p+1)/2,A=(h+d)/4,T=(u+_)/4,L=(g+m)/4;return w>x&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=T/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=L/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hp extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Lt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends Hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ou extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),va.subVectors(this.max,fr),ms.subVectors(e.a,fr),gs.subVectors(e.b,fr),_s.subVectors(e.c,fr),yi.subVectors(gs,ms),xi.subVectors(_s,gs),ki.subVectors(ms,_s);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-ki.z,ki.y,yi.z,0,-yi.x,xi.z,0,-xi.x,ki.z,0,-ki.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-ki.y,ki.x,0];return!xc(t,ms,gs,_s,va)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,ms,gs,_s,va))?!1:(ya.crossVectors(yi,xi),t=[ya.x,ya.y,ya.z],xc(t,ms,gs,_s,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,_a=new oi,ms=new P,gs=new P,_s=new P,yi=new P,xi=new P,ki=new P,fr=new P,va=new P,ya=new P,zi=new P;function xc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $_=new oi,pr=new P,bc=new P;class Xn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(bc)),this.expandByPoint(pr.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new P,Sc=new P,xa=new P,bi=new P,Mc=new P,ba=new P,wc=new P;class ir{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Sc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xa),o=bi.dot(this.direction),l=-bi.dot(xa),c=bi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sc).addScaledVector(xa,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,r){Mc.subVectors(t,e),ba.subVectors(n,e),wc.crossVectors(Mc,ba);let a=this.direction.dot(wc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(bi,ba));if(l<0)return null;const c=o*this.direction.dot(Mc.cross(bi));if(c<0||l+c>a)return null;const h=-o*bi.dot(wc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,q_)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(n,dn),Si.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(n,dn)),Si.normalize(),Sa.crossVectors(dn,Si),i[0]=Si.x,i[4]=Sa.x,i[8]=dn.x,i[1]=Si.y,i[5]=Sa.y,i[9]=dn.y,i[2]=Si.z,i[6]=Sa.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],w=n[7],x=n[11],E=n[15],A=i[0],T=i[4],L=i[8],y=i[12],S=i[1],R=i[5],F=i[9],B=i[13],$=i[2],W=i[6],G=i[10],O=i[14],Y=i[3],ne=i[7],se=i[11],ae=i[15];return r[0]=a*A+o*S+l*$+c*Y,r[4]=a*T+o*R+l*W+c*ne,r[8]=a*L+o*F+l*G+c*se,r[12]=a*y+o*B+l*O+c*ae,r[1]=h*A+u*S+d*$+f*Y,r[5]=h*T+u*R+d*W+f*ne,r[9]=h*L+u*F+d*G+f*se,r[13]=h*y+u*B+d*O+f*ae,r[2]=g*A+_*S+m*$+p*Y,r[6]=g*T+_*R+m*W+p*ne,r[10]=g*L+_*F+m*G+p*se,r[14]=g*y+_*B+m*O+p*ae,r[3]=b*A+w*S+x*$+E*Y,r[7]=b*T+w*R+x*W+E*ne,r[11]=b*L+w*F+x*G+E*se,r[15]=b*y+w*B+x*O+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],b=l*f-c*d,w=o*f-c*u,x=o*d-l*u,E=a*f-c*h,A=a*d-l*h,T=a*u-o*h;return t*(_*b-m*w+p*x)-n*(g*b-m*E+p*A)+i*(g*w-_*E+p*T)-r*(g*x-_*A+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,w=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=t*b+n*w+i*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=b*T,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=w*T,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,w=l*h,x=l*u,E=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+x)*E,i[2]=(g-w)*E,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+w)*T,i[9]=(m-b)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Ln.copy(this);const c=1/r,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=zn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ea)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=zn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===zn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ea)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new P,Ln=new ke,X_=new P(0,0,0),q_=new P(1,1,1),Si=new P,Sa=new P,dn=new P,md=new ke,gd=new $n;class Sn{constructor(e=0,t=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const _d=new P,ys=new $n,ui=new ke,Ma=new P,mr=new P,Y_=new P,K_=new $n,vd=new P(1,0,0),yd=new P(0,1,0),xd=new P(0,0,1),bd={type:"added"},J_={type:"removed"},xs={type:"childadded",child:null},Ec={type:"childremoved",child:null};class yt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new Sn,n=new $n,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ma.copy(e):Ma.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(mr,Ma,this.up):ui.lookAt(Ma,mr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(ui),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),xs.child=e,this.dispatchEvent(xs),xs.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J_),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,di=new P,Tc=new P,fi=new P,bs=new P,Ss=new P,Sd=new P,Ac=new P,Cc=new P,Rc=new P,Pc=new vt,Ic=new vt,Lc=new vt;class vn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),di.subVectors(n,t),Tc.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(di),l=Dn.dot(Tc),c=di.dot(di),h=di.dot(Tc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Pc,r.x),a.addScaledVector(Ic,r.y),a.addScaledVector(Lc,r.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),di.subVectors(e,t),Dn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Dn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;bs.subVectors(i,n),Ss.subVectors(r,n),Ac.subVectors(e,n);const l=bs.dot(Ac),c=Ss.dot(Ac);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,i);const h=bs.dot(Cc),u=Ss.dot(Cc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bs,a);Rc.subVectors(e,r);const f=bs.dot(Rc),g=Ss.dot(Rc);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sd.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Sd,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Dc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=au(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dc(a,r,e+1/3),this.g=Dc(a,r,e),this.b=Dc(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=Wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return je.workingToColorSpace(jt.copy(this),e),Math.round(Ye(jt.r*255,0,255))*65536+Math.round(Ye(jt.g*255,0,255))*256+Math.round(Ye(jt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ze){je.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(wa);const n=Xr(Mi.h,wa.h,t),i=Xr(Mi.s,wa.s,t),r=Xr(Mi.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new re;re.NAMES=Wp;let Z_=0;class bn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=ii,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Mo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new P,Ea=new Ce;let Q_=0;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class lu extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e0=0;const wn=new ke,Nc=new yt,Ms=new P,fn=new oi,gr=new oi,kt=new P;class pt extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?cu:lu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(fn.min,gr.min),fn.expandByPoint(kt),kt.addVectors(fn.max,gr.max),fn.expandByPoint(kt)):(fn.expandByPoint(gr.min),fn.expandByPoint(gr.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),kt.add(Ms)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,u=new P,d=new Ce,f=new Ce,g=new Ce,_=new P,m=new P;function p(L,y,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(_),o[y].add(_),o[S].add(_),l[L].add(m),l[y].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,y=b.length;L<y;++L){const S=b[L],R=S.start,F=S.count;for(let B=R,$=R+F;B<$;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new P,x=new P,E=new P,A=new P;function T(L){E.fromBufferAttribute(i,L),A.copy(E);const y=o[L];w.copy(y),w.sub(E.multiplyScalar(E.dot(y))).normalize(),x.crossVectors(A,y);const R=x.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,R)}for(let L=0,y=b.length;L<y;++L){const S=b[L],R=S.start,F=S.count;for(let B=R,$=R+F;B<$;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ut(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new ke,Vi=new ir,Ta=new Xn,wd=new P,Aa=new P,Ca=new P,Ra=new P,Uc=new P,Pa=new P,Ed=new P,Ia=new P;class rt extends yt{constructor(e=new pt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Uc.fromBufferAttribute(u,e),a?Pa.addScaledVector(Uc,h):Pa.addScaledVector(Uc.sub(t),h))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Ta.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ta,wd)===null||Vi.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Md),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){const A=o.getX(x),T=o.getX(x+1),L=o.getX(x+2);i=La(this,p,e,n,c,h,u,A,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);i=La(this,a,e,n,c,h,u,b,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=w;x<E;x+=3){const A=x,T=x+1,L=x+2;i=La(this,p,e,n,c,h,u,A,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,w=m+1,x=m+2;i=La(this,a,e,n,c,h,u,b,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function t0(s,e,t,n,i,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ln,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:s}}function La(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Aa),s.getVertexPosition(l,Ca),s.getVertexPosition(c,Ra);const h=t0(s,e,t,n,Aa,Ca,Ra,Ed);if(h){const u=new P;vn.getBarycoord(Ed,Aa,Ca,Ra,u),i&&(h.uv=vn.getInterpolatedAttribute(i,o,l,c,u,new Ce)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new Ce)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};vn.getNormal(Aa,Ca,Ra,d.normal),h.face=d,h.barycoord=u}return h}class ls extends pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function g(_,m,p,b,w,x,E,A,T,L,y){const S=x/T,R=E/L,F=x/2,B=E/2,$=A/2,W=T+1,G=L+1;let O=0,Y=0;const ne=new P;for(let se=0;se<G;se++){const ae=se*R-B;for(let ze=0;ze<W;ze++){const Oe=ze*S-F;ne[_]=Oe*b,ne[m]=ae*w,ne[p]=$,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(ze/T),u.push(1-se/L),O+=1}}for(let se=0;se<L;se++)for(let ae=0;ae<T;ae++){const ze=d+ae+W*se,Oe=d+ae+W*(se+1),bt=d+(ae+1)+W*(se+1),St=d+(ae+1)+W*se;l.push(ze,Oe,St),l.push(Oe,bt,St),Y+=6}o.addGroup(f,Y,y),f+=Y,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=Qs(s[t]);for(const i in n)e[i]=n[i]}return e}function n0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $p(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const ri={clone:Qs,merge:Zt};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new P,Td=new Ce,Ad=new Ce;class Wt extends hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Td,Ad),t.subVectors(Ad,Td)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Es=1;class Xp extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(ws,Es,e,t);i.layers=this.layers,this.add(i);const r=new Wt(ws,Es,e,t);r.layers=this.layers,this.add(r);const a=new Wt(ws,Es,e,t);a.layers=this.layers,this.add(a);const o=new Wt(ws,Es,e,t);o.layers=this.layers,this.add(o);const l=new Wt(ws,Es,e,t);l.layers=this.layers,this.add(l);const c=new Wt(ws,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends Lt{constructor(e=[],t=Ui,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class du extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ls(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Vn});r.uniforms.tEquirect.value=t;const a=new rt(i,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Pt),new Xp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Yt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fu extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $l{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new P;class ts{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pu extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const _r=new P,As=new P,Cs=new P,Rs=new Ce,vr=new Ce,qp=new ke,Da=new P,yr=new P,Na=new P,Cd=new Ce,Fc=new Ce,Rd=new Ce;class jp extends yt{constructor(e=new pu){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $l(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new ts(n,3,0,!1)),Ts.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new Ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),qp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ua(Da.set(-.5,-.5,0),Cs,a,As,i,r),Ua(yr.set(.5,-.5,0),Cs,a,As,i,r),Ua(Na.set(.5,.5,0),Cs,a,As,i,r),Cd.set(0,0),Fc.set(1,0),Rd.set(1,1);let o=e.ray.intersectTriangle(Da,yr,Na,!1,_r);if(o===null&&(Ua(yr.set(-.5,.5,0),Cs,a,As,i,r),Fc.set(0,1),o=e.ray.intersectTriangle(Da,Na,yr,!1,_r),o===null))return;const l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:vn.getInterpolation(_r,Da,yr,Na,Cd,Fc,Rd,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(s,e,t,n,i,r){Rs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(vr.x=r*Rs.x-i*Rs.y,vr.y=i*Rs.x+r*Rs.y):vr.copy(Rs),s.copy(e),s.x+=vr.x,s.y+=vr.y,s.applyMatrix4(qp)}const Pd=new P,Id=new vt,Ld=new vt,a0=new P,Dd=new ke,Fa=new P,Oc=new Xn,Nd=new ke,Bc=new ir;class Yp extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(Nd.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(Nd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Id.fromBufferAttribute(i.attributes.skinIndex,e),Ld.fromBufferAttribute(i.attributes.skinWeight,e),Pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ld.getComponent(r);if(a!==0){const o=Id.getComponent(r);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(a0.copy(Pd).applyMatrix4(Dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mu extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xl extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,h=Rt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new ke,o0=new ke;class ql{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:o0;Ud.multiplyMatrices(o,t[r]),Ud.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xl(t,e,e,xn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new mu),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class fl extends ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new ke,Fd=new ke,Oa=[],Od=new oi,l0=new ke,xr=new rt,br=new Xn;class Kp extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,l0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Od.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),br.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ps),Fd.multiplyMatrices(n,Ps),xr.matrixWorld=Fd,xr.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){const l=Oa[a];l.instanceId=r,l.object=this,t.push(l)}Oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xl(new Float32Array(i*this.count),i,this.count,Fl,yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kc=new P,c0=new P,h0=new Ve;class Ci{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kc.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Xn,u0=new Ce(.5,.5),Ba=new P;class jl{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],w=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,p-g,E-b).normalize(),i[1].setComponents(c+a,f+h,p+g,E+b).normalize(),i[2].setComponents(c+o,f+u,p+_,E+w).normalize(),i[3].setComponents(c-o,f-u,p-_,E-w).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,E-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,E-x).normalize(),t===zn)i[5].setComponents(c+l,f+d,p+m,E+x).normalize();else if(t===ea)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=u0.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class la extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new P,ml=new P,Bd=new ke,Sr=new ir,ka=new Xn,zc=new P,kd=new P;class ca extends yt{constructor(e=new pt,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pl.fromBufferAttribute(t,i-1),ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new xt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Bd.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),w=za(this,e,Sr,l,p,b,_);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=za(this,e,Sr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=za(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=za(this,e,Sr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function za(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(pl.fromBufferAttribute(o,i),ml.fromBufferAttribute(o,r),t.distanceSqToSegment(pl,ml,zc,kd)>n)return;zc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:kd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const zd=new P,Vd=new P;class qr extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zd.fromBufferAttribute(t,i),Vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zd.distanceTo(Vd);e.setAttribute("lineDistance",new xt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jp extends ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class er extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hd=new ke,Mh=new ir,Va=new Xn,Ha=new P;class ia extends yt{constructor(e=new pt,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Hd.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(Hd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ha.fromBufferAttribute(u,m),Gd(Ha,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ha.fromBufferAttribute(u,g),Gd(Ha,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gd(s,e,t,n,i,r,a){const o=Mh.distanceSqToPoint(s);if(o<t){const l=new P;Mh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class cs extends Lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends Lt{constructor(e,t,n=Wn,i,r,a,o=Rt,l=Rt,c,h=si,u=1){if(h!==si&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zp extends tr{constructor(e,t=Wn,n=Ui,i,r,a=Rt,o=Rt,l,c=si){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gu extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sr extends pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function b(){const x=new P,E=new P;let A=0;const T=(t-e)/n;for(let L=0;L<=r;L++){const y=[],S=L/r,R=S*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,$=B*l+o,W=Math.sin($),G=Math.cos($);E.x=R*W,E.y=-S*n+m,E.z=R*G,u.push(E.x,E.y,E.z),x.set(W,T,G).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-S),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<r;y++){const S=_[y][L],R=_[y+1][L],F=_[y+1][L+1],B=_[y][L+1];(e>0||y!==0)&&(h.push(S,R,B),A+=3),(t>0||y!==r-1)&&(h.push(R,F,B),A+=3)}c.addGroup(p,A,0),p+=A}function w(x){const E=g,A=new Ce,T=new P;let L=0;const y=x===!0?e:t,S=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=i;F++){const $=F/i*l+o,W=Math.cos($),G=Math.sin($);T.x=y*G,T.y=m*S,T.z=y*W,u.push(T.x,T.y,T.z),d.push(0,S,0),A.x=W*.5+.5,A.y=G*.5*S+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const B=E+F,$=R+F;x===!0?h.push($,$+1,B):h.push($+1,$,B),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends sr{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-a;for(let w=0;w<c;w++){const x=w*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,x=b+c*(p+1),E=b+1+c*(p+1),A=b+1+c*p;f.push(w,x,A),f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class ua extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new P,g=new Ce;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,w=b,x=b+n+1,E=b+n+2,A=b+1;o.push(w,x,A),o.push(x,E,A)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cn extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],w=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const w=h[p][b+1],x=h[p][b],E=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(w,x,A),(p!==n-1||l<Math.PI)&&f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,b=(i+1)*f+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _u extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ii extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class so extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qp extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ga(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function d0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function tm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class rr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nm extends rr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yh:r=e,o=2*t-n;break;case xh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yh:a=e,l=2*n-t;break;case xh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+b*a[c+E]+w*a[l+E]+x*a[u+E];return r}}class im extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class sm extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case no:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&w_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ks;class hs extends Pn{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ys;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}vu.prototype.ValueTypeName="color";class ns extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}ns.prototype.ValueTypeName="number";class rm extends rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)$n.slerpFlat(r,0,a,c-o,a,c,l);return r}}class is extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new rm(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Pn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ys;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}ss.prototype.ValueTypeName="vector";class am{constructor(e="",t=-1,n=[],i=Rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p0(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=d0(l);l=Wd(l,1,h),c=Wd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ns(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return De("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];tm(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const w=d[g];m.push(w.time),p.push(w.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(ss,f+".position",d,"pos",i),n(is,f+".quaternion",d,"rot",i),n(ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return vu;case"quaternion":return is;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function p0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f0(s.type);if(s.times===void 0){const t=[],n=[];tm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};let om=class{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};const lm=new om;class Fi{constructor(e){this.manager=e!==void 0?e:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class m0 extends Error{constructor(e,t){super(e),this.response=t}}class sa extends Fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:w,value:x})=>{if(w)p.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const L=h[A];L.onProgress&&L.onProgress(E)}p.enqueue(x),b()}},w=>{p.error(w)})}}});return new Response(m)}else throw new m0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ti.add(`file:${e}`,c);const h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=pi[e];if(h===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Is=new WeakMap;class cm extends Fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Is.get(a);u===void 0&&(u=[],Is.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ta("img");function l(){h(),t&&t(this);const u=Is.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ti.remove(`image:${e}`);const d=Is.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class yu extends Fi{constructor(e){super(e)}load(e,t,n,i){const r=new Lt,a=new cm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ar extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hm extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vc=new ke,$d=new P,Xd=new P;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g0 extends xu{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class um extends ar{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new g0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _0 extends xu{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class rs extends ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class or extends hu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class v0 extends xu{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bu extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new v0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Su extends ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ws{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hc=new WeakMap;class dm extends Fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Hc.has(a)===!0)i&&i(Hc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Hc.set(l,c),ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class fm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Mu="\\[\\]\\.:\\/",y0=new RegExp("["+Mu+"]","g"),wu="[^"+Mu+"]",x0="[^"+Mu.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",wu),S0=/(WCOD+)?/.source.replace("WCOD",x0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),E0=new RegExp("^"+b0+S0+M0+w0+"$"),T0=["material","materials","bones","map"];class A0{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(e){const t=E0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);T0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=A0;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qd=new ke;class Eu{constructor(e,t,n=0,i=1/0){this.ray=new ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):De("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qd),this}intersectObject(e,t=!0,n=[]){return wh(e,this,n,t),n.sort(jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)wh(e[i],this,n,t);return n.sort(jd),n}}function jd(s,e){return s.distance-e.distance}function wh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],e,t,!0)}}function Yd(s,e,t,n){const i=C0(n);switch(t){case iu:return s*e;case Fl:return s*e/i.components*i.byteLength;case Ol:return s*e/i.components*i.byteLength;case es:return s*e*2/i.components*i.byteLength;case Bl:return s*e*2/i.components*i.byteLength;case su:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case kl:return s*e*4/i.components*i.byteLength;case Vr:case Hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case No:case Fo:return Math.max(s,16)*Math.max(e,8)/4;case Do:case Uo:return Math.max(s,8)*Math.max(e,8)/2;case Oo:case Bo:case zo:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(s){switch(s){case an:case Qh:return{byteLength:1,components:1};case qs:case eu:case cn:return{byteLength:2,components:1};case Nl:case Ul:return{byteLength:2,components:4};case Wn:case Dl:case yn:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function R0(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ev=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,av="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,By=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:P0,alphahash_pars_fragment:I0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:F0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:j0,color_fragment:Y0,color_pars_fragment:K0,color_pars_vertex:J0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:ev,defaultnormal_vertex:tv,displacementmap_pars_vertex:nv,displacementmap_vertex:iv,emissivemap_fragment:sv,emissivemap_pars_fragment:rv,colorspace_fragment:av,colorspace_pars_fragment:ov,envmap_fragment:lv,envmap_common_pars_fragment:cv,envmap_pars_fragment:hv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:Sv,envmap_vertex:dv,fog_vertex:fv,fog_pars_vertex:pv,fog_fragment:mv,fog_pars_fragment:gv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:vv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:xv,lights_pars_begin:bv,lights_toon_fragment:Mv,lights_toon_pars_fragment:wv,lights_phong_fragment:Ev,lights_phong_pars_fragment:Tv,lights_physical_fragment:Av,lights_physical_pars_fragment:Cv,lights_fragment_begin:Rv,lights_fragment_maps:Pv,lights_fragment_end:Iv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Uv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:kv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Hv,morphcolor_vertex:Gv,morphnormal_vertex:Wv,morphtarget_pars_vertex:$v,morphtarget_vertex:Xv,normal_fragment_begin:qv,normal_fragment_maps:jv,normal_pars_fragment:Yv,normal_pars_vertex:Kv,normal_vertex:Jv,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:ay,dithering_fragment:oy,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:dy,shadowmap_vertex:fy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:_y,skinnormal_vertex:vy,specularmap_fragment:yy,specularmap_pars_fragment:xy,tonemapping_fragment:by,tonemapping_pars_fragment:Sy,transmission_fragment:My,transmission_pars_fragment:wy,uv_pars_fragment:Ey,uv_pars_vertex:Ty,uv_vertex:Ay,worldpos_vertex:Cy,background_vert:Ry,background_frag:Py,backgroundCube_vert:Iy,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Ny,depth_vert:Uy,depth_frag:Fy,distance_vert:Oy,distance_frag:By,equirect_vert:ky,equirect_frag:zy,linedashed_vert:Vy,linedashed_frag:Hy,meshbasic_vert:Gy,meshbasic_frag:Wy,meshlambert_vert:$y,meshlambert_frag:Xy,meshmatcap_vert:qy,meshmatcap_frag:jy,meshnormal_vert:Yy,meshnormal_frag:Ky,meshphong_vert:Jy,meshphong_frag:Zy,meshphysical_vert:Qy,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ax,sprite_vert:ox,sprite_frag:lx},de={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},On={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Wa={r:0,b:0,g:0},Gi=new Sn,cx=new ke;function hx(s,e,t,n,i,r,a){const o=new re(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function _(w){let x=!1;const E=g(w);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===oa)?(h===void 0&&(h=new rt(new ls(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Qs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Gi)),h.material.toneMapped=je.getTransfer(E.colorSpace)!==nt,(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new rt(new ha(2,2),new Et({name:"BackgroundMaterial",uniforms:Qs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Wa,$p(s)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,x,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:_,addToRenderList:m,dispose:b}}function ux(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,R,F,B,$){let W=!1;const G=u(B,F,R);r!==G&&(r=G,c(r.object)),W=f(S,B,F,$),W&&g(S,B,F,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(S,R,F,B),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,R,F){const B=F.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let W=$[R.id];W===void 0&&(W={},$[R.id]=W);let G=W[B];return G===void 0&&(G=d(l()),W[B]=G),G}function d(S){const R=[],F=[],B=[];for(let $=0;$<t;$++)R[$]=0,F[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,R,F,B){const $=r.attributes,W=R.attributes;let G=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){const se=$[Y];let ae=W[Y];if(ae===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),se===void 0||se.attribute!==ae||ae&&se.data!==ae.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(S,R,F,B){const $={},W=R.attributes;let G=0;const O=F.getAttributes();for(const Y in O)if(O[Y].location>=0){let se=W[Y];se===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const ae={};ae.attribute=se,se&&se.data&&(ae.data=se.data),$[Y]=ae,G++}r.attributes=$,r.attributesNum=G,r.index=B}function _(){const S=r.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const F=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;F[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),$[S]!==R&&(s.vertexAttribDivisor(S,R),$[S]=R)}function b(){const S=r.newAttributes,R=r.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function w(S,R,F,B,$,W,G){G===!0?s.vertexAttribIPointer(S,R,F,$,W):s.vertexAttribPointer(S,R,F,B,$,W)}function x(S,R,F,B){_();const $=B.attributes,W=F.getAttributes(),G=R.defaultAttributeValues;for(const O in W){const Y=W[O];if(Y.location>=0){let ne=$[O];if(ne===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const se=ne.normalized,ae=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;const Oe=ze.buffer,bt=ze.type,St=ze.bytesPerElement,j=bt===s.INT||bt===s.UNSIGNED_INT||ne.gpuType===Dl;if(ne.isInterleavedBufferAttribute){const Z=ne.data,ve=Z.stride,He=ne.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<Y.locationSize;be++)p(Y.location+be,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<Y.locationSize;be++)m(Y.location+be);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let be=0;be<Y.locationSize;be++)w(Y.location+be,ae/Y.locationSize,bt,se,ve*St,(He+ae/Y.locationSize*be)*St,j)}else{if(ne.isInstancedBufferAttribute){for(let Z=0;Z<Y.locationSize;Z++)p(Y.location+Z,ne.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Z=0;Z<Y.locationSize;Z++)m(Y.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Z=0;Z<Y.locationSize;Z++)w(Y.location+Z,ae/Y.locationSize,bt,se,ae*St,ae/Y.locationSize*Z*St,j)}}else if(G!==void 0){const se=G[O];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(Y.location,se);break;case 3:s.vertexAttrib3fv(Y.location,se);break;case 4:s.vertexAttrib4fv(Y.location,se);break;default:s.vertexAttrib1fv(Y.location,se)}}}}b()}function E(){L();for(const S in n){const R=n[S];for(const F in R){const B=R[F];for(const $ in B)h(B[$].object),delete B[$];delete R[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const F in R){const B=R[F];for(const $ in B)h(B[$].object),delete B[$];delete R[F]}delete n[S.id]}function T(S){for(const R in n){const F=n[R];if(F[S.id]===void 0)continue;const B=F[S.id];for(const $ in B)h(B[$].object),delete B[$];delete F[S.id]}}function L(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function dx(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==xn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!L)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:A}}function px(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ci,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,w=b*4;let x=p.clippingState||null;l.value=x,x=h(g,d,w,f);for(let E=0;E!==w;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==_;++w,x+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function mx(s){let e=new WeakMap;function t(a,o){return o===Io?a.mapping=Ui:o===Lo&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new du(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Li=4,Kd=[.125,.215,.35,.446,.526,.582],ji=20,gx=256,Mr=new or,Jd=new re;let Gc=null,Wc=0,$c=0,Xc=!1;const _x=new P;class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=_x}=r;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,$c),this._renderer.xr.enabled=Xc,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:cn,format:xn,colorSpace:$t,depthBuffer:!1},i=Zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vx(r)),this._blurMaterial=xx(r,e,t),this._ggxMaterial=yx(r,e,t)}return i}_compileMaterial(e){const t=new rt(new pt,e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jd),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new ls,new on({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Jd),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const E=this._cubeSize;Ls(i,x*E,w>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Li?n-g+Li:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ls(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ls(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Mr)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let b=0;for(let T=0;T<ji;++T){const L=T/_,y=Math.exp(-L*L/2);p.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[i],E=3*x*(i>w-Li?i-w+Li:0),A=4*(this._cubeSize-x);Ls(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Mr)}}function vx(s){const e=[],t=[],n=[];let i=s;const r=s-Li+1+Kd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Li?l=Kd[a-s+Li-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,L=A>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];b.set(y,_*g*A),w.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const E=new pt;E.setAttribute("position",new ut(b,_)),E.setAttribute("uv",new ut(w,m)),E.setAttribute("faceIndex",new ut(x,p)),n.push(new rt(E,null)),i>Li&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zd(s,e,t){const n=new en(s,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function yx(s,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function xx(s,e,t){const n=new Float32Array(ji),i=new P(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Qd(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ef(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Io||l===Lo,h=l===Ui||l===Qi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Eh(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Eh(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Js("WebGLRenderer: "+n+" extension not supported."),i}}}function Mx(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let w=0,x=b.length;w<x;w+=3){const E=b[w+0],A=b[w+1],T=b[w+2];d.push(E,A,A,T,T,E)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){const E=w+0,A=w+1,T=w+2;d.push(E,A,A,T,T,E)}}else return;const m=new(kp(d)?cu:lu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ex(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tx(s,e,t){const n=new WeakMap,i=new vt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=o.attributes.position.count*x,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*A*4*u),L=new ou(T,E,A,u);L.type=yn,L.needsUpdate=!0;const y=x*4;for(let R=0;R<u;R++){const F=p[R],B=b[R],$=w[R],W=E*A*4*R;for(let G=0;G<F.count;G++){const O=G*y;g===!0&&(i.fromBufferAttribute(F,G),T[W+O+0]=i.x,T[W+O+1]=i.y,T[W+O+2]=i.z,T[W+O+3]=0),_===!0&&(i.fromBufferAttribute(B,G),T[W+O+4]=i.x,T[W+O+5]=i.y,T[W+O+6]=i.z,T[W+O+7]=0),m===!0&&(i.fromBufferAttribute($,G),T[W+O+8]=i.x,T[W+O+9]=i.y,T[W+O+10]=i.z,T[W+O+11]=$.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new Ce(E,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Cx={[Al]:"LINEAR_TONE_MAPPING",[Cl]:"REINHARD_TONE_MAPPING",[Rl]:"CINEON_TONE_MAPPING",[aa]:"ACES_FILMIC_TONE_MAPPING",[Il]:"AGX_TONE_MAPPING",[Ll]:"NEUTRAL_TONE_MAPPING",[Pl]:"CUSTOM_TONE_MAPPING"};function Rx(s,e,t,n,i){const r=new en(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new en(e,t,{type:cn,depthBuffer:!1,stencilBuffer:!1}),o=new pt;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new _u({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new rt(o,l),h=new or(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(b,w){r.setSize(b,w),a.setSize(b,w);for(let x=0;x<m.length;x++){const E=m[x];E.setSize&&E.setSize(b,w)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const w=r.width,x=r.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(w,x)}},this.begin=function(b,w){if(f||b.toneMapping===Hn&&m.length===0)return!1;if(_=w,w!==null){const x=w.width,E=w.height;(r.width!==x||r.height!==E)&&this.setSize(x,E)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=Hn,!0},this.hasRenderPass=function(){return p},this.end=function(b,w){b.toneMapping=g,f=!0;let x=r,E=a;for(let A=0;A<m.length;A++){const T=m[A];if(T.enabled!==!1&&(T.render(b,E,x,w),T.needsSwap!==!1)){const L=x;x=E,E=L}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},je.getTransfer(u)===nt&&(l.defines.SRGB_TRANSFER="");const A=Cx[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mm=new Lt,Th=new tr(1,1),gm=new ou,_m=new Gp,vm=new uu,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function lr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tf[i];if(r===void 0&&(r=new Float32Array(i),tf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ql(s,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function Lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function Dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Nx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;af.set(n),s.uniformMatrix2fv(this.addr,!1,af),Ot(t,n)}}function Ux(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;rf.set(n),s.uniformMatrix3fv(this.addr,!1,rf),Ot(t,n)}}function Fx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;sf.set(n),s.uniformMatrix4fv(this.addr,!1,sf),Ot(t,n)}}function Ox(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function Vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function Gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function Wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function $x(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?Hl:Vl,r=Th):r=mm,t.setTexture2D(e||r,i)}function Xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_m,i)}function qx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vm,i)}function jx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gm,i)}function Yx(s){switch(s){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Nx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return zx;case 5125:return Vx;case 36294:return Hx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return jx}}function Kx(s,e){s.uniform1fv(this.addr,e)}function Jx(s,e){const t=lr(e,this.size,2);s.uniform2fv(this.addr,t)}function Zx(s,e){const t=lr(e,this.size,3);s.uniform3fv(this.addr,t)}function Qx(s,e){const t=lr(e,this.size,4);s.uniform4fv(this.addr,t)}function eb(s,e){const t=lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tb(s,e){const t=lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nb(s,e){const t=lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ib(s,e){s.uniform1iv(this.addr,e)}function sb(s,e){s.uniform2iv(this.addr,e)}function rb(s,e){s.uniform3iv(this.addr,e)}function ab(s,e){s.uniform4iv(this.addr,e)}function ob(s,e){s.uniform1uiv(this.addr,e)}function lb(s,e){s.uniform2uiv(this.addr,e)}function cb(s,e){s.uniform3uiv(this.addr,e)}function hb(s,e){s.uniform4uiv(this.addr,e)}function ub(s,e,t){const n=this.cache,i=e.length,r=Ql(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Th:a=mm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function db(s,e,t){const n=this.cache,i=e.length,r=Ql(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||_m,r[a])}function fb(s,e,t){const n=this.cache,i=e.length,r=Ql(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vm,r[a])}function pb(s,e,t){const n=this.cache,i=e.length,r=Ql(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||gm,r[a])}function mb(s){switch(s){case 5126:return Kx;case 35664:return Jx;case 35665:return Zx;case 35666:return Qx;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ab;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}}class _b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mb(t.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function of(s,e){s.seq.push(e),s.map[e.id]=e}function yb(s,e,t){const n=s.name,i=n.length;for(qc.lastIndex=0;;){const r=qc.exec(n),a=qc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){of(t,c===void 0?new gb(o,s,e):new _b(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new vb(o),of(t,u)),t=u}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);yb(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function lf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const xb=37297;let bb=0;function Sb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cf=new Ve;function Mb(s){je._getMatrix(cf,je.workingColorSpace,s);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Qr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sb(s.getShaderSource(e),o)}else return r}function wb(s,e){const t=Mb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Eb={[Al]:"Linear",[Cl]:"Reinhard",[Rl]:"Cineon",[aa]:"ACESFilmic",[Il]:"AgX",[Ll]:"Neutral",[Pl]:"Custom"};function Tb(s,e){const t=Eb[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new P;function Ab(){je.getLuminanceCoefficients($a);const s=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Rb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Cr(s){return s!==""}function uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(s){return s.replace(Ib,Db)}const Lb=new Map;function Db(s,e){let t=Ge[e];if(t===void 0){const n=Lb.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ah(t)}const Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(s){return s.replace(Nb,Ub)}function Ub(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fb={[kr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Ob(s){return Fb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bb={[Ui]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function kb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Bb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const zb={[Qi]:"ENVMAP_MODE_REFRACTION"};function Vb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hb={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function Gb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Hb[s.combine]||"ENVMAP_BLENDING_NONE"}function Wb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $b(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ob(t),c=kb(t),h=Vb(t),u=Gb(t),d=Wb(t),f=Cb(t),g=Rb(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,wb("linearToOutputTexel",t.outputColorSpace),Ab(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ah(a),a=uf(a,t),a=df(a,t),o=Ah(o),o=uf(o,t),o=df(o,t),a=ff(a),o=ff(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+a,x=b+p+o,E=lf(i,i.VERTEX_SHADER,w),A=lf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(E)||"",$=i.getShaderInfoLog(A)||"",W=F.trim(),G=B.trim(),O=$.trim();let Y=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,A);else{const se=hf(i,E,"vertex"),ae=hf(i,A,"fragment");De("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+se+`
`+ae)}else W!==""?Ae("WebGLProgram: Program Info Log:",W):(G===""||O==="")&&(ne=!1);ne&&(R.diagnostics={runnable:Y,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(E),i.deleteShader(A),L=new ro(i,_),y=Pb(i,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,xb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let Xb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jb(e),t.set(e,n)),n}}class jb{constructor(e){this.id=Xb++,this.code=e,this.usedTimes=0}}function Yb(s,e,t,n,i,r,a){const o=new Wl,l=new qb,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,F,B){const $=F.fog,W=B.geometry,G=y.isMeshStandardMaterial?F.environment:null,O=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),Y=O&&O.mapping===oa?O.image.height:null,ne=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ae("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=se!==void 0?se.length:0;let ze=0;W.morphAttributes.position!==void 0&&(ze=1),W.morphAttributes.normal!==void 0&&(ze=2),W.morphAttributes.color!==void 0&&(ze=3);let Oe,bt,St,j;if(ne){const ot=On[ne];Oe=ot.vertexShader,bt=ot.fragmentShader}else Oe=y.vertexShader,bt=y.fragmentShader,l.update(y),St=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const Z=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,be=B.isBatchedMesh===!0,et=!!y.map,Bt=!!y.matcap,Qe=!!O,at=!!y.aoMap,dt=!!y.lightMap,We=!!y.bumpMap,Tt=!!y.normalMap,I=!!y.displacementMap,At=!!y.emissiveMap,it=!!y.metalnessMap,mt=!!y.roughnessMap,Me=y.anisotropy>0,C=y.clearcoat>0,v=y.dispersion>0,N=y.iridescence>0,q=y.sheen>0,J=y.transmission>0,X=Me&&!!y.anisotropyMap,Ee=C&&!!y.clearcoatMap,le=C&&!!y.clearcoatNormalMap,Se=C&&!!y.clearcoatRoughnessMap,Fe=N&&!!y.iridescenceMap,te=N&&!!y.iridescenceThicknessMap,he=q&&!!y.sheenColorMap,xe=q&&!!y.sheenRoughnessMap,we=!!y.specularMap,ce=!!y.specularColorMap,$e=!!y.specularIntensityMap,D=J&&!!y.transmissionMap,pe=J&&!!y.thicknessMap,ie=!!y.gradientMap,me=!!y.alphaMap,ee=y.alphaTest>0,K=!!y.alphaHash,oe=!!y.extensions;let Be=Hn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Be=s.toneMapping);const gt={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:bt,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:be,batchingColor:be&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$t,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:Bt,envMap:Qe,envMapMode:Qe&&O.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:dt,bumpMap:We,normalMap:Tt,displacementMap:I,emissiveMap:At,normalMapObjectSpace:Tt&&y.normalMapType===Lp,normalMapTangentSpace:Tt&&y.normalMapType===zl,metalnessMap:it,roughnessMap:mt,anisotropy:Me,anisotropyMap:X,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:v,iridescence:N,iridescenceMap:Fe,iridescenceThicknessMap:te,sheen:q,sheenColorMap:he,sheenRoughnessMap:xe,specularMap:we,specularColorMap:ce,specularIntensityMap:$e,transmission:J,transmissionMap:D,thicknessMap:pe,gradientMap:ie,opaque:y.transparent===!1&&y.blending===ii&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:K,combine:y.combine,mapUv:et&&_(y.map.channel),aoMapUv:at&&_(y.aoMap.channel),lightMapUv:dt&&_(y.lightMap.channel),bumpMapUv:We&&_(y.bumpMap.channel),normalMapUv:Tt&&_(y.normalMap.channel),displacementMapUv:I&&_(y.displacementMap.channel),emissiveMapUv:At&&_(y.emissiveMap.channel),metalnessMapUv:it&&_(y.metalnessMap.channel),roughnessMapUv:mt&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(y.sheenRoughnessMap.channel),specularMapUv:we&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:$e&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:pe&&_(y.thicknessMap.channel),alphaMapUv:me&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Tt||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(et||me),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:At&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(S,y),w(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function w(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const S=g[y.type];let R;if(S){const F=On[S];R=ri.clone(F.uniforms)}else R=y.uniforms;return R}function E(y,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new $b(s,S,y,r),h.push(R),u.set(S,R)),R}function A(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:L}}function Kb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Jb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Jb),n.length>1&&n.sort(d||mf),i.length>1&&i.sort(d||mf)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Zb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new gf,s.set(n,[a])):i>=r.length?(a=new gf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Qb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new re};break;case"SpotLight":t={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function eS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tS=0;function nS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iS(s){const e=new Qb,t=eS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,w=0,x=0,E=0,A=0,T=0;c.sort(nS);for(let y=0,S=c.length;y<S;y++){const R=c[y],F=R.color,B=R.intensity,$=R.distance;let W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===es?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],B);T++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,Y=t.get(R);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=G,f++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=$,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const O=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,O.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=O.matrix,R.castShadow){const Y=t.get(R);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=W,x++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const O=R.shadow,Y=t.get(R);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(B),G.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==E||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=E,L.numLightProbes=T,n.version=tS++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function _f(s){const e=new iS(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sS(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new _f(s),e.set(i,[o])):r>=a.length?(o=new _f(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],lS=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],vf=new ke,wr=new P,jc=new P;function cS(s,e,t){let n=new jl;const i=new Ce,r=new Ce,a=new vt,o=new Qp,l=new em,c={},h=t.maxTextureSize,u={[ln]:Vt,[Vt]:ln,[_n]:_n},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:rS,fragmentShader:aS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let p=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Kh&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=kr);const y=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Vn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==this.type;B&&T.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(W=>W.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,W=A.length;$<W;$++){const G=A[$],O=G.shadow;if(O===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Y=O.getFrameExtents();if(i.multiply(Y),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zs){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new en(i.x,i.y,{format:es,type:cn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new tr(i.x,i.y,yn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=si,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Rt,O.map.depthTexture.magFilter=Rt}else{G.isPointLight?(O.map=new du(i.x),O.map.depthTexture=new Zp(i.x,Wn)):(O.map=new en(i.x,i.y),O.map.depthTexture=new tr(i.x,i.y,Wn)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=si;const se=s.state.buffers.depth.getReversed();this.type===kr?(O.map.depthTexture.compareFunction=se?Hl:Vl,O.map.depthTexture.minFilter=Pt,O.map.depthTexture.magFilter=Pt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Rt,O.map.depthTexture.magFilter=Rt)}O.camera.updateProjectionMatrix()}const ne=O.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ne;se++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,se),s.clear();else{se===0&&(s.setRenderTarget(O.map),s.clear());const ae=O.getViewport(se);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),F.viewport(a)}if(G.isPointLight){const ae=O.camera,ze=O.matrix,Oe=G.distance||ae.far;Oe!==ae.far&&(ae.far=Oe,ae.updateProjectionMatrix()),wr.setFromMatrixPosition(G.matrixWorld),ae.position.copy(wr),jc.copy(ae.position),jc.add(oS[se]),ae.up.copy(lS[se]),ae.lookAt(jc),ae.updateMatrixWorld(),ze.makeTranslation(-wr.x,-wr.y,-wr.z),vf.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vf,ae.coordinateSystem,ae.reversedDepth)}else O.updateMatrices(G);n=O.getFrustum(),x(T,L,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===zs&&b(O,L),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,S,R)};function b(A,T){const L=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new en(i.x,i.y,{format:es,type:cn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,L,f,_,null)}function w(A,T,L,y){let S=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=S.uuid,B=T.uuid;let $=c[F];$===void 0&&($={},c[F]=$);let W=$[B];W===void 0&&(W=S.clone(),$[B]=W,T.addEventListener("dispose",E)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,y===zs?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=L}return S}function x(A,T,L,y,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===zs)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=e.update(A),$=A.material;if(Array.isArray($)){const W=B.groups;for(let G=0,O=W.length;G<O;G++){const Y=W[G],ne=$[Y.materialIndex];if(ne&&ne.visible){const se=w(A,ne,y,S);A.onBeforeShadow(s,A,T,L,B,se,Y),s.renderBufferDirect(L,null,B,se,A,Y),A.onAfterShadow(s,A,T,L,B,se,Y)}}}else if($.visible){const W=w(A,$,y,S);A.onBeforeShadow(s,A,T,L,B,W,null),s.renderBufferDirect(L,null,B,W,A,null),A.onAfterShadow(s,A,T,L,B,W,null)}}const F=A.children;for(let B=0,$=F.length;B<$;B++)x(F[B],T,L,y,S)}function E(A){A.target.removeEventListener("dispose",E);for(const L in c){const y=c[L],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const hS={[wo]:Eo,[To]:Ro,[Ao]:Po,[Zi]:Co,[Eo]:wo,[Ro]:To,[Po]:Ao,[Co]:Zi};function uS(s,e){function t(){let D=!1;const pe=new vt;let ie=null;const me=new vt(0,0,0,0);return{setMask:function(ee){ie!==ee&&!D&&(s.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){D=ee},setClear:function(ee,K,oe,Be,gt){gt===!0&&(ee*=Be,K*=Be,oe*=Be),pe.set(ee,K,oe,Be),me.equals(pe)===!1&&(s.clearColor(ee,K,oe,Be),me.copy(pe))},reset:function(){D=!1,ie=null,me.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,ie=null,me=null,ee=null;return{setReversed:function(K){if(pe!==K){const oe=e.get("EXT_clip_control");K?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),pe=K;const Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return pe},setTest:function(K){K?Z(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(K){ie!==K&&!D&&(s.depthMask(K),ie=K)},setFunc:function(K){if(pe&&(K=hS[K]),me!==K){switch(K){case wo:s.depthFunc(s.NEVER);break;case Eo:s.depthFunc(s.ALWAYS);break;case To:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case Ao:s.depthFunc(s.EQUAL);break;case Co:s.depthFunc(s.GEQUAL);break;case Ro:s.depthFunc(s.GREATER);break;case Po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=K}},setLocked:function(K){D=K},setClear:function(K){ee!==K&&(pe&&(K=1-K),s.clearDepth(K),ee=K)},reset:function(){D=!1,ie=null,me=null,ee=null,pe=!1}}}function i(){let D=!1,pe=null,ie=null,me=null,ee=null,K=null,oe=null,Be=null,gt=null;return{setTest:function(ot){D||(ot?Z(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!D&&(s.stencilMask(ot),pe=ot)},setFunc:function(ot,jn,li){(ie!==ot||me!==jn||ee!==li)&&(s.stencilFunc(ot,jn,li),ie=ot,me=jn,ee=li)},setOp:function(ot,jn,li){(K!==ot||oe!==jn||Be!==li)&&(s.stencilOp(ot,jn,li),K=ot,oe=jn,Be=li)},setLocked:function(ot){D=ot},setClear:function(ot){gt!==ot&&(s.clearStencil(ot),gt=ot)},reset:function(){D=!1,pe=null,ie=null,me=null,ee=null,K=null,oe=null,Be=null,gt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,x=null,E=null,A=null,T=new re(0,0,0),L=0,y=!1,S=null,R=null,F=null,B=null,$=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=O>=2);let ne=null,se={};const ae=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),Oe=new vt().fromArray(ae),bt=new vt().fromArray(ze);function St(D,pe,ie,me){const ee=new Uint8Array(4),K=s.createTexture();s.bindTexture(D,K),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<ie;oe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(pe+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return K}const j={};j[s.TEXTURE_2D]=St(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=St(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=St(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=St(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(Zi),We(!1),Tt(ph),Z(s.CULL_FACE),at(Vn);function Z(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function ve(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function He(D,pe){return u[D]!==pe?(s.bindFramebuffer(D,pe),u[D]=pe,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(D,pe){let ie=f,me=!1;if(D){ie=d.get(pe),ie===void 0&&(ie=[],d.set(pe,ie));const ee=D.textures;if(ie.length!==ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let K=0,oe=ee.length;K<oe;K++)ie[K]=s.COLOR_ATTACHMENT0+K;ie.length=ee.length,me=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,me=!0);me&&s.drawBuffers(ie)}function et(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Bt={[Ri]:s.FUNC_ADD,[cp]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};Bt[up]=s.MIN,Bt[dp]=s.MAX;const Qe={[fp]:s.ZERO,[pp]:s.ONE,[mp]:s.SRC_COLOR,[So]:s.SRC_ALPHA,[bp]:s.SRC_ALPHA_SATURATE,[yp]:s.DST_COLOR,[_p]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[Mo]:s.ONE_MINUS_SRC_ALPHA,[xp]:s.ONE_MINUS_DST_COLOR,[vp]:s.ONE_MINUS_DST_ALPHA,[Sp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function at(D,pe,ie,me,ee,K,oe,Be,gt,ot){if(D===Vn){_===!0&&(ve(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),D!==lp){if(D!==m||ot!==y){if((p!==Ri||x!==Ri)&&(s.blendEquation(s.FUNC_ADD),p=Ri,x=Ri),ot)switch(D){case ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",D);break}else switch(D){case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mh:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",D);break}b=null,w=null,E=null,A=null,T.set(0,0,0),L=0,m=D,y=ot}return}ee=ee||pe,K=K||ie,oe=oe||me,(pe!==p||ee!==x)&&(s.blendEquationSeparate(Bt[pe],Bt[ee]),p=pe,x=ee),(ie!==b||me!==w||K!==E||oe!==A)&&(s.blendFuncSeparate(Qe[ie],Qe[me],Qe[K],Qe[oe]),b=ie,w=me,E=K,A=oe),(Be.equals(T)===!1||gt!==L)&&(s.blendColor(Be.r,Be.g,Be.b,gt),T.copy(Be),L=gt),m=D,y=!1}function dt(D,pe){D.side===_n?ve(s.CULL_FACE):Z(s.CULL_FACE);let ie=D.side===Vt;pe&&(ie=!ie),We(ie),D.blending===ii&&D.transparent===!1?at(Vn):at(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function Tt(D){D!==ap?(Z(s.CULL_FACE),D!==R&&(D===ph?s.cullFace(s.BACK):D===op?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),R=D}function I(D){D!==F&&(G&&s.lineWidth(D),F=D)}function At(D,pe,ie){D?(Z(s.POLYGON_OFFSET_FILL),(B!==pe||$!==ie)&&(s.polygonOffset(pe,ie),B=pe,$=ie)):ve(s.POLYGON_OFFSET_FILL)}function it(D){D?Z(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function mt(D){D===void 0&&(D=s.TEXTURE0+W-1),ne!==D&&(s.activeTexture(D),ne=D)}function Me(D,pe,ie){ie===void 0&&(ne===null?ie=s.TEXTURE0+W-1:ie=ne);let me=se[ie];me===void 0&&(me={type:void 0,texture:void 0},se[ie]=me),(me.type!==D||me.texture!==pe)&&(ne!==ie&&(s.activeTexture(ie),ne=ie),s.bindTexture(D,pe||j[D]),me.type=D,me.texture=pe)}function C(){const D=se[ne];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function q(){try{s.texSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function J(){try{s.texSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function Ee(){try{s.compressedTexSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function le(){try{s.texStorage2D(...arguments)}catch(D){De("WebGLState:",D)}}function Se(){try{s.texStorage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Fe(){try{s.texImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function te(){try{s.texImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function he(D){Oe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Oe.copy(D))}function xe(D){bt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),bt.copy(D))}function we(D,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let me=ie.get(D);me===void 0&&(me=s.getUniformBlockIndex(pe,D.name),ie.set(D,me))}function ce(D,pe){const me=c.get(pe).get(D);l.get(pe)!==me&&(s.uniformBlockBinding(pe,me,D.__bindingPointIndex),l.set(pe,me))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,se={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,w=null,x=null,E=null,A=null,T=new re(0,0,0),L=0,y=!1,S=null,R=null,F=null,B=null,$=null,Oe.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ve,bindFramebuffer:He,drawBuffers:be,useProgram:et,setBlending:at,setMaterial:dt,setFlipSided:We,setCullFace:Tt,setLineWidth:I,setPolygonOffset:At,setScissorTest:it,activeTexture:mt,bindTexture:Me,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Fe,texImage3D:te,updateUBOMapping:we,uniformBlockBinding:ce,texStorage2D:le,texStorage3D:Se,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:he,viewport:xe,reset:$e}}function dS(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):ta("canvas")}function _(C,v,N){let q=1;const J=Me(C);if((J.width>N||J.height>N)&&(q=N/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(q*J.width),Ee=Math.floor(q*J.height);u===void 0&&(u=g(X,Ee));const le=v?g(X,Ee):u;return le.width=X,le.height=Ee,le.getContext("2d").drawImage(C,0,0,X,Ee),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Ee+")."),le}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(C,v,N,q,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===s.RED&&(N===s.FLOAT&&(X=s.R32F),N===s.HALF_FLOAT&&(X=s.R16F),N===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.R8UI),N===s.UNSIGNED_SHORT&&(X=s.R16UI),N===s.UNSIGNED_INT&&(X=s.R32UI),N===s.BYTE&&(X=s.R8I),N===s.SHORT&&(X=s.R16I),N===s.INT&&(X=s.R32I)),v===s.RG&&(N===s.FLOAT&&(X=s.RG32F),N===s.HALF_FLOAT&&(X=s.RG16F),N===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RG8UI),N===s.UNSIGNED_SHORT&&(X=s.RG16UI),N===s.UNSIGNED_INT&&(X=s.RG32UI),N===s.BYTE&&(X=s.RG8I),N===s.SHORT&&(X=s.RG16I),N===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGB8UI),N===s.UNSIGNED_SHORT&&(X=s.RGB16UI),N===s.UNSIGNED_INT&&(X=s.RGB32UI),N===s.BYTE&&(X=s.RGB8I),N===s.SHORT&&(X=s.RGB16I),N===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),N===s.UNSIGNED_INT&&(X=s.RGBA32UI),N===s.BYTE&&(X=s.RGBA8I),N===s.SHORT&&(X=s.RGBA16I),N===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(N===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),N===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){const Ee=J?Qr:je.getTransfer(q);N===s.FLOAT&&(X=s.RGBA32F),N===s.HALF_FLOAT&&(X=s.RGBA16F),N===s.UNSIGNED_BYTE&&(X=Ee===nt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,v){let N;return C?v===null||v===Wn||v===js?N=s.DEPTH24_STENCIL8:v===yn?N=s.DEPTH32F_STENCIL8:v===qs&&(N=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===js?N=s.DEPTH_COMPONENT24:v===yn?N=s.DEPTH_COMPONENT32F:v===qs&&(N=s.DEPTH_COMPONENT16),N}function E(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&h.delete(v)}function T(C){const v=C.target;v.removeEventListener("dispose",T),S(v)}function L(C){const v=n.get(C);if(v.__webglInit===void 0)return;const N=C.source,q=d.get(N);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(q).length===0&&d.delete(N)}n.remove(C)}function y(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const N=C.source,q=d.get(N);delete q[v.__cacheKey],a.memory.textures--}function S(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[q][J]);else s.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)s.deleteFramebuffer(v.__webglFramebuffer[q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=C.textures;for(let q=0,J=N.length;q<J;q++){const X=n.get(N[q]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(C)}let R=0;function F(){R=0}function B(){const C=R;return C>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function $(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const N=n.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const q=C.image;if(q===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,C,v);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function G(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,v);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function O(C,v){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){j(N,C,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function Y(C,v){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){Z(N,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const ne={[tn]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[Zr]:s.MIRRORED_REPEAT},se={[Rt]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},ae={[Dp]:s.NEVER,[Bp]:s.ALWAYS,[Np]:s.LESS,[Vl]:s.LEQUAL,[Up]:s.EQUAL,[Hl]:s.GEQUAL,[Fp]:s.GREATER,[Op]:s.NOTEQUAL};function ze(C,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===zr||v.magFilter===Vs||v.magFilter===ei||v.minFilter===Pt||v.minFilter===zr||v.minFilter===Vs||v.minFilter===ei)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ne[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ne[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ne[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,se[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rt||v.minFilter!==Vs&&v.minFilter!==ei||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(C,v){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const X=$(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[X].usedTimes++;const Ee=J[C.__cacheKey];Ee!==void 0&&(J[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return N}function bt(C,v,N){return Math.floor(Math.floor(C/N)/v)}function St(C,v,N,q){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,N,q,v.data);else{X.sort((te,he)=>te.start-he.start);let Ee=0;for(let te=1;te<X.length;te++){const he=X[Ee],xe=X[te],we=he.start+he.count,ce=bt(xe.start,v.width,4),$e=bt(he.start,v.width,4);xe.start<=we+1&&ce===$e&&bt(xe.start+xe.count-1,v.width,4)===ce?he.count=Math.max(he.count,xe.start+xe.count-he.start):(++Ee,X[Ee]=xe)}X.length=Ee+1;const le=s.getParameter(s.UNPACK_ROW_LENGTH),Se=s.getParameter(s.UNPACK_SKIP_PIXELS),Fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let te=0,he=X.length;te<he;te++){const xe=X[te],we=Math.floor(xe.start/4),ce=Math.ceil(xe.count/4),$e=we%v.width,D=Math.floor(we/v.width),pe=ce,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,$e,D,pe,ie,N,q,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),s.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function j(C,v,N){let q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=s.TEXTURE_3D);const J=Oe(C,v),X=v.source;t.bindTexture(q,C.__webglTexture,s.TEXTURE0+N);const Ee=n.get(X);if(X.version!==Ee.__version||J===!0){t.activeTexture(s.TEXTURE0+N);const le=je.getPrimaries(je.workingColorSpace),Se=v.colorSpace===_i?null:je.getPrimaries(v.colorSpace),Fe=v.colorSpace===_i||le===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let te=_(v.image,!1,i.maxTextureSize);te=mt(v,te);const he=r.convert(v.format,v.colorSpace),xe=r.convert(v.type);let we=w(v.internalFormat,he,xe,v.colorSpace,v.isVideoTexture);ze(q,v);let ce;const $e=v.mipmaps,D=v.isVideoTexture!==!0,pe=Ee.__version===void 0||J===!0,ie=X.dataReady,me=E(v,te);if(v.isDepthTexture)we=x(v.format===Pi,v.type),pe&&(D?t.texStorage2D(s.TEXTURE_2D,1,we,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,we,te.width,te.height,0,he,xe,null));else if(v.isDataTexture)if($e.length>0){D&&pe&&t.texStorage2D(s.TEXTURE_2D,me,we,$e[0].width,$e[0].height);for(let ee=0,K=$e.length;ee<K;ee++)ce=$e[ee],D?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,xe,ce.data):t.texImage2D(s.TEXTURE_2D,ee,we,ce.width,ce.height,0,he,xe,ce.data);v.generateMipmaps=!1}else D?(pe&&t.texStorage2D(s.TEXTURE_2D,me,we,te.width,te.height),ie&&St(v,te,he,xe)):t.texImage2D(s.TEXTURE_2D,0,we,te.width,te.height,0,he,xe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,we,$e[0].width,$e[0].height,te.depth);for(let ee=0,K=$e.length;ee<K;ee++)if(ce=$e[ee],v.format!==xn)if(he!==null)if(D){if(ie)if(v.layerUpdates.size>0){const oe=Yd(ce.width,ce.height,v.format,v.type);for(const Be of v.layerUpdates){const gt=ce.data.subarray(Be*oe/ce.data.BYTES_PER_ELEMENT,(Be+1)*oe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Be,ce.width,ce.height,1,he,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,he,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,te.depth,0,ce.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,he,xe,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,we,ce.width,ce.height,te.depth,0,he,xe,ce.data)}else{D&&pe&&t.texStorage2D(s.TEXTURE_2D,me,we,$e[0].width,$e[0].height);for(let ee=0,K=$e.length;ee<K;ee++)ce=$e[ee],v.format!==xn?he!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,we,ce.width,ce.height,0,ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,xe,ce.data):t.texImage2D(s.TEXTURE_2D,ee,we,ce.width,ce.height,0,he,xe,ce.data)}else if(v.isDataArrayTexture)if(D){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,we,te.width,te.height,te.depth),ie)if(v.layerUpdates.size>0){const ee=Yd(te.width,te.height,v.format,v.type);for(const K of v.layerUpdates){const oe=te.data.subarray(K*ee/te.data.BYTES_PER_ELEMENT,(K+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,he,xe,oe)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,xe,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,he,xe,te.data);else if(v.isData3DTexture)D?(pe&&t.texStorage3D(s.TEXTURE_3D,me,we,te.width,te.height,te.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,xe,te.data)):t.texImage3D(s.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,he,xe,te.data);else if(v.isFramebufferTexture){if(pe)if(D)t.texStorage2D(s.TEXTURE_2D,me,we,te.width,te.height);else{let ee=te.width,K=te.height;for(let oe=0;oe<me;oe++)t.texImage2D(s.TEXTURE_2D,oe,we,ee,K,0,he,xe,null),ee>>=1,K>>=1}}else if($e.length>0){if(D&&pe){const ee=Me($e[0]);t.texStorage2D(s.TEXTURE_2D,me,we,ee.width,ee.height)}for(let ee=0,K=$e.length;ee<K;ee++)ce=$e[ee],D?ie&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he,xe,ce):t.texImage2D(s.TEXTURE_2D,ee,we,he,xe,ce);v.generateMipmaps=!1}else if(D){if(pe){const ee=Me(te);t.texStorage2D(s.TEXTURE_2D,me,we,ee.width,ee.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,xe,te)}else t.texImage2D(s.TEXTURE_2D,0,we,he,xe,te);m(v)&&p(q),Ee.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Z(C,v,N){if(v.image.length!==6)return;const q=Oe(C,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+N);const X=n.get(J);if(J.version!==X.__version||q===!0){t.activeTexture(s.TEXTURE0+N);const Ee=je.getPrimaries(je.workingColorSpace),le=v.colorSpace===_i?null:je.getPrimaries(v.colorSpace),Se=v.colorSpace===_i||Ee===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!Fe&&!te?he[K]=_(v.image[K],!0,i.maxCubemapSize):he[K]=te?v.image[K].image:v.image[K],he[K]=mt(v,he[K]);const xe=he[0],we=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),$e=w(v.internalFormat,we,ce,v.colorSpace),D=v.isVideoTexture!==!0,pe=X.__version===void 0||q===!0,ie=J.dataReady;let me=E(v,xe);ze(s.TEXTURE_CUBE_MAP,v);let ee;if(Fe){D&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,$e,xe.width,xe.height);for(let K=0;K<6;K++){ee=he[K].mipmaps;for(let oe=0;oe<ee.length;oe++){const Be=ee[oe];v.format!==xn?we!==null?D?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Be.width,Be.height,we,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,$e,Be.width,Be.height,0,Be.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Be.width,Be.height,we,ce,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,$e,Be.width,Be.height,0,we,ce,Be.data)}}}else{if(ee=v.mipmaps,D&&pe){ee.length>0&&me++;const K=Me(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,$e,K.width,K.height)}for(let K=0;K<6;K++)if(te){D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,we,ce,he[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,he[K].width,he[K].height,0,we,ce,he[K].data);for(let oe=0;oe<ee.length;oe++){const gt=ee[oe].image[K].image;D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,gt.width,gt.height,we,ce,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,$e,gt.width,gt.height,0,we,ce,gt.data)}}else{D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,ce,he[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,we,ce,he[K]);for(let oe=0;oe<ee.length;oe++){const Be=ee[oe];D?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,we,ce,Be.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,$e,we,ce,Be.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ve(C,v,N,q,J,X){const Ee=r.convert(N.format,N.colorSpace),le=r.convert(N.type),Se=w(N.internalFormat,Ee,le,N.colorSpace),Fe=n.get(v),te=n.get(N);if(te.__renderTarget=v,!Fe.__hasExternalTextures){const he=Math.max(1,v.width>>X),xe=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Se,he,xe,v.depth,0,Ee,le,null):t.texImage2D(J,X,Se,he,xe,0,Ee,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,te.__webglTexture,0,I(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,te.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(C,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=x(v.stencilBuffer,J),Ee=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),X,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,C)}else{const q=v.textures;for(let J=0;J<q.length;J++){const X=q[J],Ee=r.convert(X.format,X.colorSpace),le=r.convert(X.type),Se=w(X.internalFormat,Ee,le,X.colorSpace);At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),Se,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),Se,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Se,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(C,v,N){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ze(s.TEXTURE_CUBE_MAP,v.depthTexture);const Fe=r.convert(v.depthTexture.format),te=r.convert(v.depthTexture.type);let he;v.depthTexture.format===si?he=s.DEPTH_COMPONENT24:v.depthTexture.format===Pi&&(he=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,v.width,v.height,0,Fe,te,null)}}else W(v.depthTexture,0);const X=J.__webglTexture,Ee=I(v),le=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+N:s.TEXTURE_2D,Se=v.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===si)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,le,X,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,Se,le,X,0);else if(v.depthTexture.format===Pi)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,le,X,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,Se,le,X,0);else throw new Error("Unknown depthTexture format")}function et(C){const v=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)be(v.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?be(v.__webglFramebuffer[0],C,0):be(v.__webglFramebuffer,C,0)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=s.createRenderbuffer(),He(v.__webglDepthbuffer[q],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),He(v.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,v,N){const q=n.get(C);v!==void 0&&ve(q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&et(C)}function Qe(C){const v=C.texture,N=n.get(C),q=n.get(v);C.addEventListener("dispose",T);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=v.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Se=0;Se<v.mipmaps.length;Se++)N.__webglFramebuffer[le][Se]=s.createFramebuffer()}else N.__webglFramebuffer[le]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)N.__webglFramebuffer[le]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let le=0,Se=J.length;le<Se;le++){const Fe=n.get(J[le]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&At(C)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Se=J[le];N.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Fe=r.convert(Se.format,Se.colorSpace),te=r.convert(Se.type),he=w(Se.internalFormat,Fe,te,Se.colorSpace,C.isXRRenderTarget===!0),xe=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,he,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,N.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),He(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ze(s.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)ve(N.__webglFramebuffer[le][Se],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se);else ve(N.__webglFramebuffer[le],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,Se=J.length;le<Se;le++){const Fe=J[le],te=n.get(Fe);let he=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),ze(he,Fe),ve(N.__webglFramebuffer,C,Fe,s.COLOR_ATTACHMENT0+le,he,0),m(Fe)&&p(he)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),ze(le,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)ve(N.__webglFramebuffer[Se],C,v,s.COLOR_ATTACHMENT0,le,Se);else ve(N.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}C.depthBuffer&&et(C)}function at(C){const v=C.textures;for(let N=0,q=v.length;N<q;N++){const J=v[N];if(m(J)){const X=b(C),Ee=n.get(J).__webglTexture;t.bindTexture(X,Ee),p(X),t.unbindTexture()}}}const dt=[],We=[];function Tt(C){if(C.samples>0){if(At(C)===!1){const v=C.textures,N=C.width,q=C.height;let J=s.COLOR_BUFFER_BIT;const X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(C),le=v.length>1;if(le)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Se=C.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const te=n.get(v[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,N,q,0,0,N,q,J,s.NEAREST),l===!0&&(dt.length=0,We.length=0,dt.push(s.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(dt.push(X),We.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const te=n.get(v[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function At(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function mt(C,v){const N=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==$t&&N!==_i&&(je.getTransfer(N)===nt?(q!==xn||J!==an)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",N)),v}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=Bt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ym(s,e){function t(n,i=_i){let r;const a=je.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===Nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return s.BYTE;if(n===eu)return s.SHORT;if(n===qs)return s.UNSIGNED_SHORT;if(n===Dl)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===cn)return s.HALF_FLOAT;if(n===iu)return s.ALPHA;if(n===su)return s.RGB;if(n===xn)return s.RGBA;if(n===si)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Fl)return s.RED;if(n===Ol)return s.RED_INTEGER;if(n===es)return s.RG;if(n===Bl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===Vr||n===Hr||n===Gr||n===Wr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return r.COMPRESSED_R11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ho)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===$o||n===Xo||n===qo||n===jo||n===Yo||n===Ko||n===Jo||n===Zo||n===Qo||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Et({vertexShader:fS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gS extends os{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new mS,p={},b=t.getContextAttributes();let w=null,x=null;const E=[],A=[],T=new Ce;let L=null;const y=new Wt;y.viewport=new vt;const S=new Wt;S.viewport=new vt;const R=[y,S],F=new fm;let B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=E[j];return Z===void 0&&(Z=new io,E[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=E[j];return Z===void 0&&(Z=new io,E[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=E[j];return Z===void 0&&(Z=new io,E[j]=Z),Z.getHandSpace()};function W(j){const Z=A.indexOf(j.inputSource);if(Z===-1)return;const ve=E[Z];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",O);for(let j=0;j<E.length;j++){const Z=A[j];Z!==null&&(A[j]=null,E[j].disconnect(Z))}B=null,$=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(w),f=null,d=null,u=null,i=null,x=null,St.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,be=null;b.depth&&(be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=b.stencil?Pi:si,He=b.stencil?js:Wn);const et={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(et),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new en(d.textureWidth,d.textureHeight,{format:xn,type:an,depthTexture:new tr(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new en(f.framebufferWidth,f.framebufferHeight,{format:xn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(j){for(let Z=0;Z<j.removed.length;Z++){const ve=j.removed[Z],He=A.indexOf(ve);He>=0&&(A[He]=null,E[He].disconnect(ve))}for(let Z=0;Z<j.added.length;Z++){const ve=j.added[Z];let He=A.indexOf(ve);if(He===-1){for(let et=0;et<E.length;et++)if(et>=A.length){A.push(ve),He=et;break}else if(A[et]===null){A[et]=ve,He=et;break}if(He===-1)break}const be=E[He];be&&be.connect(ve)}}const Y=new P,ne=new P;function se(j,Z,ve){Y.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const He=Y.distanceTo(ne),be=Z.projectionMatrix.elements,et=ve.projectionMatrix.elements,Bt=be[14]/(be[10]-1),Qe=be[14]/(be[10]+1),at=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],We=(be[8]-1)/be[0],Tt=(et[8]+1)/et[0],I=Bt*We,At=Bt*Tt,it=He/(-We+Tt),mt=it*-We;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(mt),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Me=Bt+it,C=Qe+it,v=I-mt,N=At+(He-mt),q=at*Qe/C*Me,J=dt*Qe/C*Me;j.projectionMatrix.makePerspective(v,N,q,J,Me,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Z=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),F.near=S.near=y.near=Z,F.far=S.far=y.far=ve,(B!==F.near||$!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,$=F.far),F.layers.mask=j.layers.mask|6,y.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const He=j.parent,be=F.cameras;ae(F,He);for(let et=0;et<be.length;et++)ae(be[et],He);be.length===2?se(F,y,S):F.projectionMatrix.copy(y.projectionMatrix),ze(j,F,He)};function ze(j,Z,ve){ve===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let Oe=null;function bt(j,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let He=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,He=!0);for(let Qe=0;Qe<ve.length;Qe++){const at=ve[Qe];let dt=null;if(f!==null)dt=f.getViewport(at);else{const Tt=u.getViewSubImage(d,at);dt=Tt.viewport,Qe===0&&(e.setRenderTargetTextures(x,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(x))}let We=R[Qe];We===void 0&&(We=new Wt,We.layers.enable(Qe),We.viewport=new vt,R[Qe]=We),We.matrix.fromArray(at.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(at.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(dt.x,dt.y,dt.width,dt.height),Qe===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),He===!0&&F.cameras.push(We)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Qe=u.getDepthInformation(ve[0]);Qe&&Qe.isValid&&Qe.texture&&m.init(Qe,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Qe=0;Qe<ve.length;Qe++){const at=ve[Qe].camera;if(at){let dt=p[at];dt||(dt=new gu,p[at]=dt);const We=u.getCameraImage(at);dt.sourceTexture=We}}}}for(let ve=0;ve<E.length;ve++){const He=A[ve],be=E[ve];He!==null&&be!==void 0&&be.update(He,Z,c||a)}Oe&&Oe(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const St=new pm;St.setAnimationLoop(bt),this.setAnimationLoop=function(j){Oe=j},this.dispose=function(){}}}const Wi=new Sn,_S=new ke;function vS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$p(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,x=b.envMapRotation;w&&(m.envMap.value=w,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(Wi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yS(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const x=w.program;n.uniformBlockBinding(b,x)}function c(b,w){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));const E=w.program;n.updateUBOMapping(b,E);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){const w=u();b.__bindingPointIndex=w;const x=s.createBuffer(),E=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=i[b.id],x=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let A=0,T=x.length;A<T;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,S=L.length;y<S;y++){const R=L[y];if(f(R,A,y,E)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let W=0;W<B.length;W++){const G=B[W],O=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,F+$,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,$),$+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,w,x,E){const A=b.value,T=w+"_"+x;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const L=E[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return E[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){const w=b.uniforms;let x=0;const E=16;for(let T=0,L=w.length;T<L;T++){const y=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,R=y.length;S<R;S++){const F=y[S],B=Array.isArray(F.value)?F.value:[F.value];for(let $=0,W=B.length;$<W;$++){const G=B[$],O=_(G),Y=x%E,ne=Y%O.boundary,se=Y+ne;x+=ne,se!==0&&E-se<O.storage&&(x+=E-se),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=O.storage}}}const A=x%E;return A>0&&(x+=E-A),b.__size=x,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}const xS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function bS(){return Yn===null&&(Yn=new Xl(xS,16,16,es,cn),Yn.name="DFG_LUT",Yn.minFilter=Pt,Yn.magFilter=Pt,Yn.wrapS=kn,Yn.wrapT=kn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class Tu{constructor(e={}){const{canvas:t=zp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([kl,Bl,Ol]),p=new Set([an,Wn,qs,js,Nl,Ul]),b=new Uint32Array(4),w=new Int32Array(4);let x=null,E=null;const A=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let S=!1;this._outputColorSpace=Ze;let R=0,F=0,B=null,$=-1,W=null;const G=new vt,O=new vt;let Y=null;const ne=new re(0);let se=0,ae=t.width,ze=t.height,Oe=1,bt=null,St=null;const j=new vt(0,0,ae,ze),Z=new vt(0,0,ae,ze);let ve=!1;const He=new jl;let be=!1,et=!1;const Bt=new ke,Qe=new P,at=new vt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Tt(){return B===null?Oe:1}let I=n;function At(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",ot,!1),I===null){const U="webgl2";if(I=At(U,M),I===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw De("WebGLRenderer: "+M.message),M}let it,mt,Me,C,v,N,q,J,X,Ee,le,Se,Fe,te,he,xe,we,ce,$e,D,pe,ie,me,ee;function K(){it=new Sx(I),it.init(),ie=new ym(I,it),mt=new fx(I,it,e,ie),Me=new uS(I,it),mt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),C=new Ex(I),v=new Kb,N=new dS(I,it,Me,v,mt,ie,C),q=new mx(y),J=new bx(y),X=new R0(I),me=new ux(I,X),Ee=new Mx(I,X,C,me),le=new Ax(I,Ee,X,C),$e=new Tx(I,mt,N),xe=new px(v),Se=new Yb(y,q,J,it,mt,me,xe),Fe=new vS(y,v),te=new Zb,he=new sS(it),ce=new hx(y,q,J,Me,le,g,l),we=new cS(y,le,mt),ee=new yS(I,C,mt,Me),D=new dx(I,it,C),pe=new wx(I,it,C),C.programs=Se.programs,y.capabilities=mt,y.extensions=it,y.properties=v,y.renderLists=te,y.shadowMap=we,y.state=Me,y.info=C}K(),_!==an&&(L=new Rx(_,t.width,t.height,i,r));const oe=new gS(y,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(M){M!==void 0&&(Oe=M,this.setSize(ae,ze,!1))},this.getSize=function(M){return M.set(ae,ze)},this.setSize=function(M,U,H=!0){if(oe.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,ze=U,t.width=Math.floor(M*Oe),t.height=Math.floor(U*Oe),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ae*Oe,ze*Oe).floor()},this.setDrawingBufferSize=function(M,U,H){ae=M,ze=U,Oe=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,U,H,V){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,H,V),Me.viewport(G.copy(j).multiplyScalar(Oe).round())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,U,H,V){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,U,H,V),Me.scissor(O.copy(Z).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(M){Me.setScissorTest(ve=M)},this.setOpaqueSort=function(M){bt=M},this.setTransparentSort=function(M){St=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let k=!1;if(B!==null){const ue=B.texture.format;k=m.has(ue)}if(k){const ue=B.texture.type,ge=p.has(ue),fe=ce.getClearColor(),ye=ce.getClearAlpha(),Te=fe.r,Ne=fe.g,Ie=fe.b;ge?(b[0]=Te,b[1]=Ne,b[2]=Ie,b[3]=ye,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=Te,w[1]=Ne,w[2]=Ie,w[3]=ye,I.clearBufferiv(I.COLOR,0,w))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),ce.dispose(),te.dispose(),he.dispose(),v.dispose(),q.dispose(),J.dispose(),le.dispose(),me.dispose(),ee.dispose(),Se.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",id),oe.removeEventListener("sessionend",sd),Oi.stop()};function Be(M){M.preventDefault(),na("WebGLRenderer: Context Lost."),S=!0}function gt(){na("WebGLRenderer: Context Restored."),S=!1;const M=C.autoReset,U=we.enabled,H=we.autoUpdate,V=we.needsUpdate,k=we.type;K(),C.autoReset=M,we.enabled=U,we.autoUpdate=H,we.needsUpdate=V,we.type=k}function ot(M){De("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function jn(M){const U=M.target;U.removeEventListener("dispose",jn),li(U)}function li(M){g_(M),v.remove(M)}function g_(M){const U=v.get(M).programs;U!==void 0&&(U.forEach(function(H){Se.releaseProgram(H)}),M.isShaderMaterial&&Se.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,k,ue){U===null&&(U=dt);const ge=k.isMesh&&k.matrixWorld.determinant()<0,fe=v_(M,U,H,V,k);Me.setMaterial(V,ge);let ye=H.index,Te=1;if(V.wireframe===!0){if(ye=Ee.getWireframeAttribute(H),ye===void 0)return;Te=2}const Ne=H.drawRange,Ie=H.attributes.position;let qe=Ne.start*Te,ht=(Ne.start+Ne.count)*Te;ue!==null&&(qe=Math.max(qe,ue.start*Te),ht=Math.min(ht,(ue.start+ue.count)*Te)),ye!==null?(qe=Math.max(qe,0),ht=Math.min(ht,ye.count)):Ie!=null&&(qe=Math.max(qe,0),ht=Math.min(ht,Ie.count));const Mt=ht-qe;if(Mt<0||Mt===1/0)return;me.setup(k,V,fe,H,ye);let wt,ft=D;if(ye!==null&&(wt=X.get(ye),ft=pe,ft.setIndex(wt)),k.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*Tt()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(k.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Me.setLineWidth(Le*Tt()),k.isLineSegments?ft.setMode(I.LINES):k.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else k.isPoints?ft.setMode(I.POINTS):k.isSprite&&ft.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,lt=k._multiDrawCounts,tt=k._multiDrawCount,hn=ye?X.get(ye).bytesPerElement:1,fs=v.get(V).currentProgram.getUniforms();for(let un=0;un<tt;un++)fs.setValue(I,"_gl_DrawID",un),ft.render(Le[un]/hn,lt[un])}else if(k.isInstancedMesh)ft.renderInstances(qe,Mt,k.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,lt=Math.min(H.instanceCount,Le);ft.renderInstances(qe,Mt,lt)}else ft.render(qe,Mt)};function nd(M,U,H){M.transparent===!0&&M.side===_n&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,ga(M,U,H),M.side=ln,M.needsUpdate=!0,ga(M,U,H),M.side=_n):ga(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),E=he.get(H),E.init(U),T.push(E),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const V=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const fe=ue[ge];nd(fe,H,k),V.add(fe)}else nd(ue,H,k),V.add(ue)}),E=T.pop(),V},this.compileAsync=function(M,U,H=null){const V=this.compile(M,U,H);return new Promise(k=>{function ue(){if(V.forEach(function(ge){v.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){k(M);return}setTimeout(ue,10)}it.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let fc=null;function __(M){fc&&fc(M)}function id(){Oi.stop()}function sd(){Oi.start()}const Oi=new pm;Oi.setAnimationLoop(__),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(M){fc=M,oe.setAnimationLoop(M),M===null?Oi.stop():Oi.start()},oe.addEventListener("sessionstart",id),oe.addEventListener("sessionend",sd),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const H=oe.enabled===!0&&oe.isPresenting===!0,V=L!==null&&(B===null||H)&&L.begin(y,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,B),E=he.get(M,T.length),E.init(U),T.push(E),Bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(Bt,zn,U.reversedDepth),et=this.localClippingEnabled,be=xe.init(this.clippingPlanes,et),x=te.get(M,A.length),x.init(),A.push(x),oe.enabled===!0&&oe.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&pc(ge,U,-1/0,y.sortObjects)}pc(M,U,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(bt,St),We=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,We&&ce.addToRenderList(x,M),this.info.render.frame++,be===!0&&xe.beginShadows();const k=E.state.shadowsArray;if(we.render(k,M,U),be===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&L.hasRenderPass())===!1){const ge=x.opaque,fe=x.transmissive;if(E.setupLights(),U.isArrayCamera){const ye=U.cameras;if(fe.length>0)for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ie=ye[Te];ad(ge,fe,M,Ie)}We&&ce.render(M);for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ie=ye[Te];rd(x,M,Ie,Ie.viewport)}}else fe.length>0&&ad(ge,fe,M,U),We&&ce.render(M),rd(x,M,U)}B!==null&&F===0&&(N.updateMultisampleRenderTarget(B),N.updateRenderTargetMipmap(B)),V&&L.end(y),M.isScene===!0&&M.onAfterRender(y,M,U),me.resetDefaultState(),$=-1,W=null,T.pop(),T.length>0?(E=T[T.length-1],be===!0&&xe.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function pc(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||He.intersectsSprite(M)){V&&at.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Bt);const ge=le.update(M),fe=M.material;fe.visible&&x.push(M,ge,fe,H,at.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||He.intersectsObject(M))){const ge=le.update(M),fe=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),at.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),at.copy(ge.boundingSphere.center)),at.applyMatrix4(M.matrixWorld).applyMatrix4(Bt)),Array.isArray(fe)){const ye=ge.groups;for(let Te=0,Ne=ye.length;Te<Ne;Te++){const Ie=ye[Te],qe=fe[Ie.materialIndex];qe&&qe.visible&&x.push(M,ge,qe,H,at.z,Ie)}}else fe.visible&&x.push(M,ge,fe,H,at.z,null)}}const ue=M.children;for(let ge=0,fe=ue.length;ge<fe;ge++)pc(ue[ge],U,H,V)}function rd(M,U,H,V){const{opaque:k,transmissive:ue,transparent:ge}=M;E.setupLightsView(H),be===!0&&xe.setGlobalState(y.clippingPlanes,H),V&&Me.viewport(G.copy(V)),k.length>0&&ma(k,U,H),ue.length>0&&ma(ue,U,H),ge.length>0&&ma(ge,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ad(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const qe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:qe?cn:an,minFilter:ei,samples:mt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ue=E.state.transmissionRenderTarget[V.id],ge=V.viewport||G;ue.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const fe=y.getRenderTarget(),ye=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(ne),se=y.getClearAlpha(),se<1&&y.setClearColor(16777215,.5),y.clear(),We&&ce.render(H);const Ne=y.toneMapping;y.toneMapping=Hn;const Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),be===!0&&xe.setGlobalState(y.clippingPlanes,V),ma(M,H,V),N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue),it.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ht=0,Mt=U.length;ht<Mt;ht++){const wt=U[ht],{object:ft,geometry:Le,material:lt,group:tt}=wt;if(lt.side===_n&&ft.layers.test(V.layers)){const hn=lt.side;lt.side=Vt,lt.needsUpdate=!0,od(ft,H,V,Le,lt,tt),lt.side=hn,lt.needsUpdate=!0,qe=!0}}qe===!0&&(N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue))}y.setRenderTarget(fe,ye,Te),y.setClearColor(ne,se),Ie!==void 0&&(V.viewport=Ie),y.toneMapping=Ne}function ma(M,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ue=M.length;k<ue;k++){const ge=M[k],{object:fe,geometry:ye,group:Te}=ge;let Ne=ge.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),fe.layers.test(H.layers)&&od(fe,U,H,ye,Ne,Te)}}function od(M,U,H,V,k,ue){M.onBeforeRender(y,U,H,V,k,ue),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(y,U,H,V,M,ue),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Vt,k.needsUpdate=!0,y.renderBufferDirect(H,U,V,k,M,ue),k.side=ln,k.needsUpdate=!0,y.renderBufferDirect(H,U,V,k,M,ue),k.side=_n):y.renderBufferDirect(H,U,V,k,M,ue),M.onAfterRender(y,U,H,V,k,ue)}function ga(M,U,H){U.isScene!==!0&&(U=dt);const V=v.get(M),k=E.state.lights,ue=E.state.shadowsArray,ge=k.state.version,fe=Se.getParameters(M,k.state,ue,U,H),ye=Se.getProgramCacheKey(fe);let Te=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?J:q).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",jn),Te=new Map,V.programs=Te);let Ne=Te.get(ye);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===ge)return cd(M,fe),Ne}else fe.uniforms=Se.getUniforms(M),M.onBeforeCompile(fe,y),Ne=Se.acquireProgram(fe,ye),Te.set(ye,Ne),V.uniforms=fe.uniforms;const Ie=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=xe.uniform),cd(M,fe),V.needsLights=x_(M),V.lightsStateVersion=ge,V.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function ld(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=ro.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function cd(M,U){const H=v.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function v_(M,U,H,V,k){U.isScene!==!0&&(U=dt),N.resetTextureUnits();const ue=U.fog,ge=V.isMeshStandardMaterial?U.environment:null,fe=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$t,ye=(V.isMeshStandardMaterial?J:q).get(V.envMap||ge),Te=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,ht=!!H.morphAttributes.color;let Mt=Hn;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const wt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=wt!==void 0?wt.length:0,Le=v.get(V),lt=E.state.lights;if(be===!0&&(et===!0||M!==W)){const Kt=M===W&&V.id===$;xe.setState(V,M,Kt)}let tt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==lt.state.version||Le.outputColorSpace!==fe||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==ye||V.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==xe.numPlanes||Le.numIntersection!==xe.numIntersection)||Le.vertexAlphas!==Te||Le.vertexTangents!==Ne||Le.morphTargets!==Ie||Le.morphNormals!==qe||Le.morphColors!==ht||Le.toneMapping!==Mt||Le.morphTargetsCount!==ft)&&(tt=!0):(tt=!0,Le.__version=V.version);let hn=Le.currentProgram;tt===!0&&(hn=ga(V,U,k));let fs=!1,un=!1,dr=!1;const _t=hn.getUniforms(),nn=Le.uniforms;if(Me.useProgram(hn.program)&&(fs=!0,un=!0,dr=!0),V.id!==$&&($=V.id,un=!0),fs||W!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",M.projectionMatrix),_t.setValue(I,"viewMatrix",M.matrixWorldInverse);const sn=_t.map.cameraPosition;sn!==void 0&&sn.setValue(I,Qe.setFromMatrixPosition(M.matrixWorld)),mt.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,un=!0,dr=!0)}if(Le.needsLights&&(lt.state.directionalShadowMap.length>0&&_t.setValue(I,"directionalShadowMap",lt.state.directionalShadowMap,N),lt.state.spotShadowMap.length>0&&_t.setValue(I,"spotShadowMap",lt.state.spotShadowMap,N),lt.state.pointShadowMap.length>0&&_t.setValue(I,"pointShadowMap",lt.state.pointShadowMap,N)),k.isSkinnedMesh){_t.setOptional(I,k,"bindMatrix"),_t.setOptional(I,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),_t.setValue(I,"boneTexture",Kt.boneTexture,N))}k.isBatchedMesh&&(_t.setOptional(I,k,"batchingTexture"),_t.setValue(I,"batchingTexture",k._matricesTexture,N),_t.setOptional(I,k,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",k._indirectTexture,N),_t.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",k._colorsTexture,N));const Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&$e.update(k,H,hn),(un||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,_t.setValue(I,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=ye,nn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=bS()),un&&(_t.setValue(I,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&y_(nn,dr),ue&&V.fog===!0&&Fe.refreshFogUniforms(nn,ue),Fe.refreshMaterialUniforms(nn,V,Oe,ze,E.state.transmissionRenderTarget[M.id]),ro.upload(I,ld(Le),nn,N)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ro.upload(I,ld(Le),nn,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(I,"center",k.center),_t.setValue(I,"modelViewMatrix",k.modelViewMatrix),_t.setValue(I,"normalMatrix",k.normalMatrix),_t.setValue(I,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Kt=V.uniformsGroups;for(let sn=0,mc=Kt.length;sn<mc;sn++){const Bi=Kt[sn];ee.update(Bi,hn),ee.bind(Bi,hn)}}return hn}function y_(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function x_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,U,H){const V=v.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=U,v.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const H=v.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const b_=I.createFramebuffer();this.setRenderTarget=function(M,U=0,H=0){B=M,R=U,F=H;let V=null,k=!1,ue=!1;if(M){const fe=v.get(M);if(fe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),G.copy(M.viewport),O.copy(M.scissor),Y=M.scissorTest,Me.viewport(G),Me.scissor(O),Me.setScissorTest(Y),$=-1;return}else if(fe.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(fe.__hasExternalTextures)N.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(fe.__boundDepthTexture!==Ne){if(Ne!==null&&v.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ue=!0);const Te=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?V=Te[U][H]:V=Te[U],k=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?V=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[H]:V=Te,G.copy(M.viewport),O.copy(M.scissor),Y=M.scissorTest}else G.copy(j).multiplyScalar(Oe).floor(),O.copy(Z).multiplyScalar(Oe).floor(),Y=ve;if(H!==0&&(V=b_),Me.bindFramebuffer(I.FRAMEBUFFER,V)&&Me.drawBuffers(M,V),Me.viewport(G),Me.scissor(O),Me.setScissorTest(Y),k){const fe=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,H)}else if(ue){const fe=U;for(let ye=0;ye<M.textures.length;ye++){const Te=v.get(M.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,Te.__webglTexture,H,fe)}}else if(M!==null&&H!==0){const fe=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,H)}$=-1},this.readRenderTargetPixels=function(M,U,H,V,k,ue,ge,fe=0){if(!(M&&M.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Me.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Te=M.textures[fe],Ne=Te.format,Ie=Te.type;if(!mt.textureFormatReadable(Ne)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ie)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-k&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),I.readPixels(U,H,V,k,ie.convert(Ne),ie.convert(Ie),ue))}finally{const Te=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,k,ue,ge,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-k){Me.bindFramebuffer(I.FRAMEBUFFER,ye);const Te=M.textures[fe],Ne=Te.format,Ie=Te.type;if(!mt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),I.readPixels(U,H,V,k,ie.convert(Ne),ie.convert(Ie),0);const ht=B!==null?v.get(B).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,ht);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await E_(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(qe),I.deleteSync(Mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,H=0){const V=Math.pow(2,-H),k=Math.floor(M.image.width*V),ue=Math.floor(M.image.height*V),ge=U!==null?U.x:0,fe=U!==null?U.y:0;N.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ge,fe,k,ue),Me.unbindTexture()};const S_=I.createFramebuffer(),M_=I.createFramebuffer();this.copyTextureToTexture=function(M,U,H=null,V=null,k=0,ue=null){ue===null&&(k!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=k,k=0):ue=0);let ge,fe,ye,Te,Ne,Ie,qe,ht,Mt;const wt=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(H!==null)ge=H.max.x-H.min.x,fe=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,Ne=H.min.y,Ie=H.isBox3?H.min.z:0;else{const Mn=Math.pow(2,-k);ge=Math.floor(wt.width*Mn),fe=Math.floor(wt.height*Mn),M.isDataArrayTexture?ye=wt.depth:M.isData3DTexture?ye=Math.floor(wt.depth*Mn):ye=1,Te=0,Ne=0,Ie=0}V!==null?(qe=V.x,ht=V.y,Mt=V.z):(qe=0,ht=0,Mt=0);const ft=ie.convert(U.format),Le=ie.convert(U.type);let lt;U.isData3DTexture?(N.setTexture3D(U,0),lt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),lt=I.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const tt=I.getParameter(I.UNPACK_ROW_LENGTH),hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fs=I.getParameter(I.UNPACK_SKIP_PIXELS),un=I.getParameter(I.UNPACK_SKIP_ROWS),dr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);const _t=M.isDataArrayTexture||M.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Mn=v.get(M),Kt=v.get(U),sn=v.get(Mn.__renderTarget),mc=v.get(Kt.__renderTarget);Me.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,mc.__webglFramebuffer);for(let Bi=0;Bi<ye;Bi++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(M).__webglTexture,k,Ie+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ue,Mt+Bi)),I.blitFramebuffer(Te,Ne,ge,fe,qe,ht,ge,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||v.has(M)){const Mn=v.get(M),Kt=v.get(U);Me.bindFramebuffer(I.READ_FRAMEBUFFER,S_),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,M_);for(let sn=0;sn<ye;sn++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mn.__webglTexture,k,Ie+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mn.__webglTexture,k),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,ue,Mt+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,ue),k!==0?I.blitFramebuffer(Te,Ne,ge,fe,qe,ht,ge,fe,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(lt,ue,qe,ht,Mt+sn,Te,Ne,ge,fe):I.copyTexSubImage2D(lt,ue,qe,ht,Te,Ne,ge,fe);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(lt,ue,qe,ht,Mt,ge,fe,ye,ft,Le,wt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(lt,ue,qe,ht,Mt,ge,fe,ye,ft,wt.data):I.texSubImage3D(lt,ue,qe,ht,Mt,ge,fe,ye,ft,Le,wt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,qe,ht,ge,fe,ft,Le,wt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,qe,ht,wt.width,wt.height,ft,wt.data):I.texSubImage2D(I.TEXTURE_2D,ue,qe,ht,ge,fe,ft,Le,wt);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fs),I.pixelStorei(I.UNPACK_SKIP_ROWS,un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dr),ue===0&&U.generateMipmaps&&I.generateMipmap(lt),Me.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){R=0,F=0,B=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const SS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:aa,AddEquation:Ri,AddOperation:Ap,AdditiveBlending:Jr,AgXToneMapping:Il,AlphaFormat:iu,AlwaysCompare:Bp,AlwaysDepth:Eo,AlwaysStencilFunc:bh,AmbientLight:Su,AnimationClip:am,ArrayCamera:fm,AttachedBindMode:_h,BackSide:Vt,BasicDepthPacking:Ip,Bone:mu,BooleanKeyframeTrack:hs,Box3:oi,BoxGeometry:ls,BufferAttribute:ut,BufferGeometry:pt,ByteType:Qh,Cache:ti,Camera:hu,CanvasTexture:cs,CineonToneMapping:Rl,ClampToEdgeWrapping:kn,Clock:Jl,Color:re,ColorKeyframeTrack:vu,ColorManagement:je,ConeGeometry:Yl,ConstantAlphaFactor:wp,ConstantColorFactor:Sp,CubeCamera:Xp,CubeDepthTexture:Zp,CubeReflectionMapping:Ui,CubeRefractionMapping:Qi,CubeTexture:uu,CubeUVReflectionMapping:oa,CubicInterpolant:nm,CullFaceBack:ph,CullFaceFront:op,CullFaceNone:ap,CustomBlending:lp,CustomToneMapping:Pl,CylinderGeometry:sr,Data3DTexture:Gp,DataArrayTexture:ou,DataTexture:Xl,DefaultLoadingManager:lm,DepthFormat:si,DepthStencilFormat:Pi,DepthTexture:tr,DetachedBindMode:Cp,DirectionalLight:bu,DiscreteInterpolant:sm,DoubleSide:_n,DstAlphaFactor:_p,DstColorFactor:yp,EqualCompare:Up,EqualDepth:Ao,EquirectangularReflectionMapping:Io,EquirectangularRefractionMapping:Lo,Euler:Sn,EventDispatcher:os,ExternalTexture:gu,FileLoader:sa,Float32BufferAttribute:xt,FloatType:yn,FrontSide:ln,Frustum:jl,GLSL3:Sh,GreaterCompare:Fp,GreaterDepth:Ro,GreaterEqualCompare:Hl,GreaterEqualDepth:Co,Group:Yt,HalfFloatType:cn,HemisphereLight:hm,ImageBitmapLoader:dm,ImageLoader:cm,ImageUtils:Vp,InstancedBufferAttribute:fl,InstancedMesh:Kp,IntType:Dl,InterleavedBuffer:$l,InterleavedBufferAttribute:ts,Interpolant:rr,InterpolateDiscrete:Ys,InterpolateLinear:Ks,InterpolateSmooth:no,KeepStencilOp:Xi,KeyframeTrack:Pn,Layers:Wl,LessCompare:Np,LessDepth:To,LessEqualCompare:Vl,LessEqualDepth:Zi,Light:ar,Line:ca,LineBasicMaterial:la,LineLoop:Jp,LineSegments:qr,LinearFilter:Pt,LinearInterpolant:im,LinearMipmapLinearFilter:ei,LinearMipmapNearestFilter:zr,LinearSRGBColorSpace:$t,LinearToneMapping:Al,LinearTransfer:Qr,Loader:Fi,LoaderUtils:Ws,LoadingManager:om,Material:bn,MathUtils:Fn,Matrix3:Ve,Matrix4:ke,MaxEquation:dp,Mesh:rt,MeshBasicMaterial:on,MeshDepthMaterial:Qp,MeshDistanceMaterial:em,MeshPhongMaterial:so,MeshPhysicalMaterial:qn,MeshStandardMaterial:Ii,MinEquation:up,MirroredRepeatWrapping:Zr,MixOperation:Tp,MultiplyBlending:gh,MultiplyOperation:Tl,NearestFilter:Rt,NearestMipmapLinearFilter:Vs,NearestMipmapNearestFilter:Zh,NeutralToneMapping:Ll,NeverCompare:Dp,NeverDepth:wo,NoBlending:Vn,NoColorSpace:_i,NoToneMapping:Hn,NormalAnimationBlendMode:Rp,NormalBlending:ii,NotEqualCompare:Op,NotEqualDepth:Po,NumberKeyframeTrack:ns,Object3D:yt,ObjectSpaceNormalMap:Lp,OneFactor:pp,OneMinusConstantAlphaFactor:Ep,OneMinusConstantColorFactor:Mp,OneMinusDstAlphaFactor:vp,OneMinusDstColorFactor:xp,OneMinusSrcAlphaFactor:Mo,OneMinusSrcColorFactor:gp,OrthographicCamera:or,PCFShadowMap:kr,PCFSoftShadowMap:Kh,PMREMGenerator:Eh,PerspectiveCamera:Wt,Plane:Ci,PlaneGeometry:ha,PointLight:rs,Points:ia,PointsMaterial:er,PropertyBinding:st,Quaternion:$n,QuaternionKeyframeTrack:is,QuaternionLinearInterpolant:rm,R11_EAC_Format:zo,RED_GREEN_RGTC2_Format:cl,RED_RGTC1_Format:ol,REVISION:El,RG11_EAC_Format:Ho,RGBAFormat:xn,RGBAIntegerFormat:kl,RGBA_ASTC_10x10_Format:tl,RGBA_ASTC_10x5_Format:Zo,RGBA_ASTC_10x6_Format:Qo,RGBA_ASTC_10x8_Format:el,RGBA_ASTC_12x10_Format:nl,RGBA_ASTC_12x12_Format:il,RGBA_ASTC_4x4_Format:Wo,RGBA_ASTC_5x4_Format:$o,RGBA_ASTC_5x5_Format:Xo,RGBA_ASTC_6x5_Format:qo,RGBA_ASTC_6x6_Format:jo,RGBA_ASTC_8x5_Format:Yo,RGBA_ASTC_8x6_Format:Ko,RGBA_ASTC_8x8_Format:Jo,RGBA_BPTC_Format:sl,RGBA_ETC2_EAC_Format:ko,RGBA_PVRTC_2BPPV1_Format:Fo,RGBA_PVRTC_4BPPV1_Format:Uo,RGBA_S3TC_DXT1_Format:Hr,RGBA_S3TC_DXT3_Format:Gr,RGBA_S3TC_DXT5_Format:Wr,RGBFormat:su,RGB_BPTC_SIGNED_Format:rl,RGB_BPTC_UNSIGNED_Format:al,RGB_ETC1_Format:Oo,RGB_ETC2_Format:Bo,RGB_PVRTC_2BPPV1_Format:No,RGB_PVRTC_4BPPV1_Format:Do,RGB_S3TC_DXT1_Format:Vr,RGFormat:es,RGIntegerFormat:Bl,RawShaderMaterial:_u,Ray:ir,Raycaster:Eu,RedFormat:Fl,RedIntegerFormat:Ol,ReinhardToneMapping:Cl,RenderTarget:Hp,RepeatWrapping:tn,ReverseSubtractEquation:hp,RingGeometry:ua,SIGNED_R11_EAC_Format:Vo,SIGNED_RED_GREEN_RGTC2_Format:hl,SIGNED_RED_RGTC1_Format:ll,SIGNED_RG11_EAC_Format:Go,SRGBColorSpace:Ze,SRGBTransfer:nt,Scene:fu,ShaderChunk:Ge,ShaderLib:On,ShaderMaterial:Et,ShortType:eu,Skeleton:ql,SkinnedMesh:Yp,Source:Gl,Sphere:Xn,SphereGeometry:Cn,SpotLight:um,Sprite:jp,SpriteMaterial:pu,SrcAlphaFactor:So,SrcAlphaSaturateFactor:bp,SrcColorFactor:mp,StaticDrawUsage:dl,StringKeyframeTrack:us,SubtractEquation:cp,SubtractiveBlending:mh,TangentSpaceNormalMap:zl,Texture:Lt,TextureLoader:yu,TorusGeometry:Kl,Triangle:vn,TriangleFanDrawMode:ul,TriangleStripDrawMode:ru,TrianglesDrawMode:Pp,UVMapping:Jh,Uint16BufferAttribute:lu,Uint32BufferAttribute:cu,UniformsLib:de,UniformsUtils:ri,UnsignedByteType:an,UnsignedInt101111Type:nu,UnsignedInt248Type:js,UnsignedInt5999Type:tu,UnsignedIntType:Wn,UnsignedShort4444Type:Nl,UnsignedShort5551Type:Ul,UnsignedShortType:qs,VSMShadowMap:zs,Vector2:Ce,Vector3:P,Vector4:vt,VectorKeyframeTrack:ss,WebGLCoordinateSystem:zn,WebGLCubeRenderTarget:du,WebGLRenderTarget:en,WebGLRenderer:Tu,WebGLUtils:ym,WebGPUCoordinateSystem:ea,WebXRController:io,WrapAroundEnding:xh,ZeroCurvatureEnding:vh,ZeroFactor:fp,ZeroSlopeEnding:yh,createCanvasElement:zp,error:De,log:na,warn:Ae,warnOnce:Js},Symbol.toStringTag,{value:"Module"}));class MS{constructor(){this.scene=new fu,this.setupScene()}setupScene(){this.scene.background=new re(17);const e=new Su(16777215,1.5);this.scene.add(e);const t=new hm(4478310,2236962,.8);this.scene.add(t);const n=new bu(16777215,.5);n.position.set(2e3,500,2e3),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=1e3;const i=400;n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.bias=-1e-4,this.scene.add(n)}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}getScene(){return this.scene}}class wS{constructor(e){this.camera=this.createCamera(e),this.setupCameraPosition()}createCamera(e){const t=e.clientWidth/e.clientHeight,n=75,i=1,r=1e9;return new Wt(n,t,i,r)}setupCameraPosition(){this.camera.position.set(0,50,150),this.camera.lookAt(0,0,0),this.cameraLight=new rs(16777215,2.5,2e3),this.cameraLight.position.set(0,0,0),this.camera.add(this.cameraLight)}updateAspect(e){const t=e.clientWidth/e.clientHeight;this.camera.aspect=t,this.camera.updateProjectionMatrix()}getCamera(){return this.camera}}const ao={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ES=new or(-1,1,1,-1,0,1);class TS extends pt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const AS=new TS;class ec{constructor(e){this._mesh=new rt(AS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ES)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class CS extends ds{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ri.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ec(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yf extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class RS extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class PS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new CS(ao),this.copyPass.material.blending=Vn,this.clock=new Jl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yf!==void 0&&(a instanceof yf?n=!0:a instanceof RS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class IS extends ds{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const LS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class nr extends ds{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new en(r,a,{type:cn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new en(r,a,{type:cn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=LS;this.highPassUniforms=ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ri.clone(ao.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader,premultipliedAlpha:!0,blending:Jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new ec(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}nr.BlurDirectionX=new Ce(1,0);nr.BlurDirectionY=new Ce(0,1);const DS={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class NS extends ds{constructor(e=.5,t=!1){super();const n=DS;this.uniforms=ri.clone(n.uniforms),this.material=new Et({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this._fsQuad=new ec(this.material)}render(e,t,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class US extends ds{constructor(){super(),this.isOutputPass=!0,this.uniforms=ri.clone(Xa.uniforms),this.material=new _u({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new ec(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Al?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class FS{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.composer=null,this.bloomPass=null,this.initComposer()}initComposer(){const e=window.innerWidth,t=window.innerHeight;this.composer=new PS(this.renderer);const n=new IS(this.scene,this.camera);this.composer.addPass(n),this.bloomPass=new nr(new Ce(e,t),0,.4,.95),this.composer.addPass(this.bloomPass);const i=new NS(.35,0,0,!1);this.composer.addPass(i);const r=new US;this.composer.addPass(r)}setSize(e,t){this.composer.setSize(e,t)}render(){this.composer.render()}dispose(){this.composer.dispose()}}class OS{constructor(e){this.renderer=this.createRenderer(e),this.configureRenderer(),this.composer=null}createRenderer(e){const t=new Tu({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0});return t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t}configureRenderer(){this.renderer.physicallyCorrectLights=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kh,this.renderer.toneMapping=aa,this.renderer.toneMappingExposure=1,this.renderer.sortObjects=!0}initPostProcessing(e,t){this.composer||(this.composer=new FS(this.renderer,e,t))}render(e,t){this.composer||this.initPostProcessing(e,t),this.composer?this.composer.render():this.renderer.render(e,t)}updateSize(e){this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer&&this.composer.setSize(e.clientWidth,e.clientHeight)}dispose(){this.composer&&this.composer.dispose(),this.renderer.dispose()}getRenderer(){return this.renderer}}const Rn=new Map;function Au(s,e){return`${s}_${JSON.stringify(e)}`}function Yc(s,e){const t=s*12.9898+e*78.233,n=Math.sin(t)*43758.5453;return n-Math.floor(n)}function Di(s,e,t=6){let n=0,i=.5,r=1;for(let a=0;a<t;a++){const o=Yc(s*r,e*r)*.1,l=Yc(s*r+1.2,e*r+3.4)*.1;n+=i*Yc(s*r+o,e*r+l),r*=2.1,i*=.5}return n}function Kc(s,e){const t=(s||"").toLowerCase(),n=e;return n>1200&&(t.includes("rocky")||t.includes("silicates")||t.includes("iron"))?{base:1710618,detail:16729344,atmosphere:16737095}:t.includes("gas")||t.includes("hydrogen")||t.includes("helium")?n>1e3?{base:16747520,detail:16766720,atmosphere:16766720}:n<150?{base:10536191,detail:1734143,atmosphere:8900331}:{base:13142842,detail:15116380,atmosphere:16045992}:t.includes("ice")||t.includes("methane")||t.includes("ammonia")||t.includes("water")?t.includes("water")||t.includes("ocean")?{base:16746,detail:30654,atmosphere:11393254}:n<100?{base:4286945,detail:139,atmosphere:11393254}:{base:5230823,detail:52945,atmosphere:52945}:t.includes("rocky")||t.includes("silicates")||t.includes("iron")||t.includes("metal")?n<200?{base:15792383,detail:11584734,atmosphere:16777215}:t.includes("iron")||t.includes("metal")?{base:4868682,detail:7372944,atmosphere:0}:t.includes("sulfur")?{base:15720379,detail:14789921,atmosphere:16776960}:t.includes("oxide")||t.includes("rust")?{base:13458524,detail:9124410,atmosphere:16729344}:{base:9205843,detail:7036239,atmosphere:9205843}:t.includes("habitabl")||t.includes("vegetation")||t.includes("earth")?{base:2263842,detail:2003199,atmosphere:4886754}:{base:8947848,detail:6710886,atmosphere:4886754}}function BS(s,e,t=512){const n=Au("rocky",{baseColor:s,detailColor:e,size:t});if(Rn.has(n))return Rn.get(n);const i=document.createElement("canvas");i.width=t,i.height=t;const r=i.getContext("2d"),a=r.createImageData(t,t),o=a.data,l=new re(s),c=new re(e);for(let u=0;u<t;u++)for(let d=0;d<t;d++){const f=d/t,g=u/t,_=Di(f*4,g*4,5),m=l.clone().lerp(c,_),p=(u*t+d)*4;o[p]=m.r*255,o[p+1]=m.g*255,o[p+2]=m.b*255,o[p+3]=255}r.putImageData(a,0,0);const h=new cs(i);return h.wrapS=tn,h.wrapT=tn,h.colorSpace=Ze,Rn.set(n,h),h}function kS(s,e=512){const t=Au("gas",{colors:s,size:e});if(Rn.has(t))return Rn.get(t);const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=i.createImageData(e,e),a=r.data;for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=c/e,u=l/e,d=Math.sin(u*Math.PI*8+Di(h*2,u*2,3)*2),f=Math.floor((d+1)*.5*(s.length-1)),g=new re(s[Math.min(f,s.length-1)]),_=Di(h*6,u*6,4)*.3;g.multiplyScalar(.7+_);const m=(l*e+c)*4;a[m]=g.r*255,a[m+1]=g.g*255,a[m+2]=g.b*255,a[m+3]=255}i.putImageData(r,0,0);const o=new cs(n);return o.wrapS=tn,o.wrapT=tn,o.colorSpace=Ze,Rn.set(t,o),o}function zS(s,e=512){const t=Au("ice",{baseColor:s,size:e});if(Rn.has(t))return Rn.get(t);const n=document.createElement("canvas");n.width=e,n.height=e;const i=n.getContext("2d"),r=i.createImageData(e,e),a=r.data,o=new re(s);for(let c=0;c<e;c++)for(let h=0;h<e;h++){const u=h/e,d=c/e,f=Math.sin(d*Math.PI*4+Di(u,d,2)*.5),g=Di(u*3,d*3,4),_=o.clone(),m=.8+f*.1+g*.1;_.multiplyScalar(m);const p=(c*e+h)*4;a[p]=_.r*255,a[p+1]=_.g*255,a[p+2]=_.b*255,a[p+3]=255}i.putImageData(r,0,0);const l=new cs(n);return l.wrapS=tn,l.wrapT=tn,l.colorSpace=Ze,Rn.set(t,l),l}function Kn(s=512,e=1){const t=document.createElement("canvas");t.width=s,t.height=s;const n=t.getContext("2d"),i=n.createImageData(s,s),r=i.data;for(let o=0;o<s;o++)for(let l=0;l<s;l++){const c=l/s,h=o/s,u=1/s,d=Di(c,h,5),f=Di(c+u,h,5),g=Di(c,h+u,5),_=(f-d)*e,m=(g-d)*e,p=(o*s+l)*4;r[p]=(_+1)*.5*255,r[p+1]=(m+1)*.5*255,r[p+2]=255,r[p+3]=255}n.putImageData(i,0,0);const a=new cs(t);return a.wrapS=tn,a.wrapT=tn,a}function VS(s=64){const e=`star_${s}`;if(Rn.has(e))return Rn.get(e);const t=document.createElement("canvas");t.width=s,t.height=s;const n=t.getContext("2d"),i=s/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),r.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=r,n.fillRect(0,0,s,s);const a=new cs(t);return Rn.set(e,a),a}const Ds={uniforms:{atmosphereColor:{value:new re(4886754)},sunDirection:{value:new P(1,0,0)},intensity:{value:1},falloff:{value:5},rimPower:{value:3},scatterStrength:{value:.5}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        
        void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vPosition = mvPosition.xyz;
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
        uniform vec3 atmosphereColor;
        uniform vec3 sunDirection;
        uniform float intensity;
        uniform float falloff;
        uniform float rimPower;
        uniform float scatterStrength;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        
        void main() {
            // View direction
            vec3 viewDirection = normalize(-vPosition);
            
            // Fresnel effect (rim lighting)
            float fresnel = 1.0 - max(0.0, dot(vNormal, viewDirection));
            fresnel = pow(fresnel, rimPower) * intensity;
            
            // Atmospheric scattering (Rayleigh approximation)
            vec3 lightDir = normalize(sunDirection);
            float scatter = max(0.0, dot(vNormal, lightDir));
            scatter = pow(scatter, 2.0) * scatterStrength;
            
            // Combine effects
            float alpha = fresnel + scatter * 0.3;
            alpha = smoothstep(0.0, 1.0, alpha);
            
            // Color variation based on angle
            vec3 finalColor = atmosphereColor;
            finalColor = mix(finalColor, vec3(1.0, 0.9, 0.8), scatter * 0.5);
            
            // Soft falloff
            alpha *= exp(-falloff * (1.0 - fresnel));
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    `},Jc={uniforms:{cloudTexture:{value:null},cloudColor:{value:new re(16777215)},time:{value:0},cloudSpeed:{value:.01},cloudOpacity:{value:.6},cloudCoverage:{value:.5}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vPosition = mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
        uniform sampler2D cloudTexture;
        uniform vec3 cloudColor;
        uniform float time;
        uniform float cloudSpeed;
        uniform float cloudOpacity;
        uniform float cloudCoverage;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        // Procedural noise function
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 2.0;
            
            for (int i = 0; i < 5; i++) {
                value += amplitude * noise(p * frequency);
                amplitude *= 0.5;
                frequency *= 2.0;
            }
            
            return value;
        }
        
        void main() {
            // Animate UV coordinates
            vec2 animatedUv = vUv;
            animatedUv.x += time * cloudSpeed;
            
            // Generate cloud pattern
            float cloudPattern;
            if (cloudTexture != null) {
                cloudPattern = texture2D(cloudTexture, animatedUv).r;
            } else {
                cloudPattern = fbm(animatedUv * 8.0 + time * 0.1);
            }
            
            // Apply coverage threshold
            cloudPattern = smoothstep(1.0 - cloudCoverage, 1.0, cloudPattern);
            
            // View direction for edge fade
            vec3 viewDirection = normalize(-vPosition);
            float edgeFade = pow(max(0.0, dot(vNormal, viewDirection)), 0.5);
            
            // Calculate final alpha
            float alpha = cloudPattern * cloudOpacity * edgeFade;
            
            // Soft cloud color
            vec3 finalColor = cloudColor;
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    `};function HS(s,e){const t=[],n=s*1.03,i=new Cn(n,64,64),r=new Et({uniforms:ri.clone(Ds.uniforms),vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,transparent:!0,blending:ii,side:Vt,depthWrite:!1,depthTest:!0});r.uniforms.atmosphereColor.value=new re(e.color||4886754),r.uniforms.intensity.value=.8,r.uniforms.rimPower.value=2.5,r.uniforms.falloff.value=3;const a=new rt(i,r);a.renderOrder=11,t.push(a);const o=s*1.08,l=new Cn(o,64,64),c=new Et({uniforms:ri.clone(Ds.uniforms),vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,transparent:!0,blending:ii,side:Vt,depthWrite:!1,depthTest:!0});c.uniforms.atmosphereColor.value=new re(e.color||4886754),c.uniforms.intensity.value=.4,c.uniforms.rimPower.value=4,c.uniforms.falloff.value=5,c.uniforms.scatterStrength.value=.7;const h=new rt(l,c);return h.renderOrder=11,t.push(h),t}function GS(s,e=null){const t=s*1.02,n=new Cn(t,64,64),i=new Et({uniforms:ri.clone(Jc.uniforms),vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader,transparent:!0,depthWrite:!1,depthTest:!0,side:ln});e&&(i.uniforms.cloudTexture.value=e),i.uniforms.cloudOpacity.value=.5,i.uniforms.cloudCoverage.value=.6,i.uniforms.cloudSpeed.value=.005;const r=new rt(n,i);return r.renderOrder=11,r}class WS{constructor(e=2e4,t=2e3){this.count=e,this.spread=t,this.geometry=new pt,this.positions=new Float32Array(this.count*3),this.colors=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count),this.velocities=new Float32Array(this.count*3),this.starColors=[new re(10203903),new re(12307711),new re(16513279),new re(16774642),new re(16773793),new re(16765601),new re(16764015)],this.lastCameraPosition=new P,this.createStarField()}createStarField(){for(let t=0;t<this.count;t++)this.resetStar(t);this.geometry.setAttribute("position",new ut(this.positions,3)),this.geometry.setAttribute("color",new ut(this.colors,3)),this.geometry.setAttribute("size",new ut(this.sizes,1));const e=new er({size:1.5,map:VS(64),vertexColors:!0,sizeAttenuation:!0,transparent:!0,opacity:.9,alphaTest:.05,blending:ii,depthWrite:!1,depthTest:!0});this.mesh=new ia(this.geometry,e),this.mesh.renderOrder=-999}resetStar(e){const t=e*3;this.positions[t]=(Math.random()-.5)*this.spread*2,this.positions[t+1]=(Math.random()-.5)*this.spread*2,this.positions[t+2]=(Math.random()-.5)*this.spread*2;const n=this.starColors[Math.floor(Math.random()*this.starColors.length)].clone(),i=.5+Math.random()*.5;n.multiplyScalar(i),this.colors[t]=n.r,this.colors[t+1]=n.g,this.colors[t+2]=n.b,this.sizes[e]=Math.random()*2.5+.5,this.velocities[t]=(Math.random()-.5)*.1,this.velocities[t+1]=(Math.random()-.5)*.1,this.velocities[t+2]=(Math.random()-.5)*.1}update(e){for(let t=0;t<this.count;t++){const n=t*3;this.positions[n]+=this.velocities[n],this.positions[n+1]+=this.velocities[n+1],this.positions[n+2]+=this.velocities[n+2];const i=this.positions[n]+this.lastCameraPosition.x-e.x,r=this.positions[n+1]+this.lastCameraPosition.y-e.y,a=this.positions[n+2]+this.lastCameraPosition.z-e.z;if(Math.sqrt(i*i+r*r+a*a)>this.spread*1.2){const l=Math.random()*Math.PI*2,c=Math.random()*Math.PI*2,h=this.spread*(.3+Math.random()*.4);this.positions[n]=e.x+Math.cos(l)*Math.sin(c)*h-this.lastCameraPosition.x,this.positions[n+1]=e.y+Math.sin(l)*Math.sin(c)*h-this.lastCameraPosition.y,this.positions[n+2]=e.z+Math.cos(c)*h-this.lastCameraPosition.z}}this.lastCameraPosition.copy(e),this.mesh.position.copy(e),this.geometry.attributes.position.needsUpdate=!0}dispose(){this.geometry.dispose(),this.mesh.material.dispose()}}function xf(s,e){if(e===Pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ul||e===ru){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ul)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class xm extends Fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ws.extractUrlBase(e);a=Ws.resolveURL(c,this.path)}else a=Ws.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bm){try{a[Ke.KHR_BINARY_GLTF]=new hM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new MM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new qS;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new uM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new dM;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new fM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $S(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XS{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$t);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=u;break;case"spot":c=new um(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class qS{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ze))}return Promise.all(i)}}class jS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class YS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(r)}}class KS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class JS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ZS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ze)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class QS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(o[0],o[1],o[2],$t),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ze)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class rM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class aM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class oM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class lM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class cM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new ke,m=new P,p=new $n,b=new P(1,1,1),w=new Kp(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),w.setMatrixAt(x,_.compose(m,p,b));for(const x in l)if(x==="_COLOR_0"){const E=l[x];w.instanceColor=new fl(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);yt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const bm="glTF",Er=12,bf={JSON:1313821514,BIN:5130562};class hM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,r=new DataView(e,Er);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===bf.JSON){const c=new Uint8Array(e,Er+a,o);this.content=n.decode(c)}else if(l===bf.BIN){const c=Er+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Ch[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Ch[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=$s[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,$t,d)})})}}class dM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fM{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Sm extends rr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,b=1-m,w=p-d+u;for(let x=0;x!==o;x++){const E=a[_+x+o],A=a[_+x+l]*h,T=a[g+x+o],L=a[g+x]*h;r[x]=b*E+w*A+m*T+p*L}return r}}const pM=new $n;class mM extends Sm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return pM.fromArray(r).normalize().toArray(r),r}}const En={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:Rt,9729:Pt,9984:Zh,9985:zr,9986:Vs,9987:ei},Mf={33071:kn,33648:Zr,10497:tn},Zc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gM={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _M(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ii({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ln})),s.DefaultMaterial}function $i(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function yM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xM(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eh(t.attributes):e=s.indices+":"+eh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+eh(s.targets[n]);return e}function eh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Rh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const SM=new ke;class MM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $S,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new yu(this.options.manager):this.textureLoader=new dm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $i(r,o,i),Zn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ws.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Zc[i.type],o=$s[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ut(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Zc[i.type],c=$s[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(b);w||(_=new c(o,p*f,i.count*f/h),w=new $l(_,f/h),t.cache.add(b,w)),m=new ts(w,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new ut(_,l,g);if(i.sparse!==void 0){const p=Zc.SCALAR,b=$s[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new b(a[1],w,i.sparse.count*p),A=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,L=E.length;T<L;T++){const y=E[T];if(m.setX(y,A[T*l]),l>=2&&m.setY(y,A[T*l+1]),l>=3&&m.setZ(y,A[T*l+2]),l>=4&&m.setW(y,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sf[d.magFilter]||Pt,h.minFilter=Sf[d.minFilter]||ei,h.wrapS=Mf[d.wrapS]||tn,h.wrapT=Mf[d.wrapT]||tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Pt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Lt(_);m.needsUpdate=!0,d(m)}),t.load(Ws.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Zn(u,a),u.userData.mimeType=a.mimeType||bM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new er,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new la,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ii}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ze)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const h=r.alphaMode||Qc.OPAQUE;if(h===Qc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){const u=r.emissiveFactor;o.emissive=new re().setRGB(u[0],u[1],u[2],$t)}return r.emissiveTexture!==void 0&&a!==on&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ze)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&$i(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return wf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=xM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=wf(new pt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?_M(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const b=c[f];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Yp(_,b):new rt(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?p.geometry=xf(p.geometry,ru):m.mode===En.TRIANGLE_FAN&&(p.geometry=xf(p.geometry,ul));else if(m.mode===En.LINES)p=new qr(_,b);else if(m.mode===En.LINE_STRIP)p=new ca(_,b);else if(m.mode===En.LINE_LOOP)p=new Jp(_,b);else if(m.mode===En.POINTS)p=new ia(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&yM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zn(p,r),m.extensions&&$i(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&$i(i,u[0],r),u[0];const d=new Yt;r.extensions&&$i(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Fn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new or(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ql(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let w=0,x=d.length;w<x;w++){const E=d[w],A=f[w],T=g[w],L=_[w],y=m[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const S=n._createAnimationTracks(E,A,T,L,y);if(S)for(let R=0;R<S.length;R++)p.push(S[R])}const b=new am(r,void 0,p);return Zn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,SM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new mu:c.length>1?h=new Yt:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Zn(h,r),r.extensions&&$i(n,h,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Yt;n.name&&(r.name=i.createUniqueName(n.name)),Zn(r,n),n.extensions&&$i(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof bn||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ei[r.path]===Ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ei[r.path]){case Ei.weights:c=ns;break;case Ei.rotation:c=is;break;case Ei.translation:case Ei.scale:c=ss;break;default:switch(n.itemSize){case 1:c=ns;break;case 2:case 3:default:c=ss;break}break}const h=i.interpolation!==void 0?gM[i.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?mM:Sm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wM(s,e,t){const n=e.attributes,i=new oi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=Rh($s[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Rh($s[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function wf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Ch[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return je.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Zn(s,e),wM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vM(s,e.targets,t):s})}const th=new WeakMap;class Mm extends Fi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new sa(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ze,n).catch(n)}decodeDracoFile(e,t,n,i,r=$t,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(th.has(e)){const l=th.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),th.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new pt;e.index&&t.setIndex(new ut(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new ut(r,a);else{const h=new $l(r,o);c=new ts(h,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ze)return;const n=new re;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),je.colorSpaceToWorking(n,Ze),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new sa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=EM.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function EM(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let b,w;if(c.useUniqueIDs)w=h[m],b=o.GetAttributeByUniqueId(d,w);else{if(w=o.GetAttributeId(d,a[h[m]]),w===-1)continue;b=o.GetAttribute(d,w)}const x=i(a,o,d,m,p,b);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=l.num_points(),f=u.num_components(),g=r(a,h),_=f*h.BYTES_PER_ELEMENT,m=Math.ceil(_/4)*4,p=m/h.BYTES_PER_ELEMENT,b=d*_,w=d*m,x=a._malloc(b);o.GetAttributeDataArrayForAllPoints(l,u,g,b,x);const E=new h(a.HEAPF32.buffer,x,b/h.BYTES_PER_ELEMENT);let A;if(_===m)A=E.slice();else{A=new h(w/h.BYTES_PER_ELEMENT);let T=0;for(let L=0,y=E.length;L<y;L++){for(let S=0;S<f;S++)A[T+S]=E[L*f+S];T+=p}}return a._free(x),{name:c,count:d,itemSize:f,array:A,stride:p}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class TM{constructor(){this.group=new Yt,this.group.position.set(0,0,0),this.minSpeed=15,this.maxSpeed=2e5,this.forwardSpeed=30,this.autopilotSpeed=100,this.turnSpeed=1.5,this.pitchSpeed=1.2,this.bankLimit=.6,this.strafeFactor=30,this.autoLevelSpeed=4,this.strafeDecay=4,this.steeringForce=8,this.velocity=new P(0,0,0),this.lateralVelocity=0,this.autopilot={enabled:!1,target:null,minDistance:30},this.animationTime=0,this.viewMode="CHASE",this.createSpacecraft()}createSpacecraft(){this.mesh=new Yt,this.group.add(this.mesh),this.loadModel(),this.createNavLights()}loadModel(){const e=new xm,t=new Mm;t.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),e.setDRACOLoader(t),e.load("assets/space_shuttle.glb",n=>{console.log("Spacecraft Model Loaded");const i=n.scene;i.scale.set(1.5,1.5,1.5),i.rotation.y=0,i.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.castShadow=!0,r.receiveShadow=!1,r.material&&(r.material.metalness=.6,r.material.roughness=.4))}),this.mesh.add(i),this.mesh.rotation.y=-Math.PI/2},void 0,n=>{console.error("An error occurred loading the spacecraft:",n)})}createNavLights(){const e=new rs(16711680,1,5);e.position.set(2,-.5,4),this.mesh.add(e);const t=new rs(65280,1,5);t.position.set(2,-.5,-4),this.mesh.add(t),this.portLight=e,this.starboardLight=t}engageAutopilot(e){this.autopilot.enabled=!0,this.autopilot.target=e,this.forwardSpeed=this.autopilotSpeed}disengageAutopilot(){this.autopilot.enabled&&(this.autopilot.enabled=!1,this.autopilot.target=null,this.forwardSpeed=this.defaultSpeed)}toggleView(){this.viewMode=this.viewMode==="CHASE"?"COCKPIT":"CHASE"}steer(e,t,n={x:0,y:0}){(e.left||e.right||e.up||e.down||e.speedUp||e.speedDown||e.boost||e.brake)&&this.disengageAutopilot(),this.autopilot.enabled&&this.autopilot.target?this.updateAutopilot(t):this.updateManualControl(e,t);const r=new P(1,0,0);r.applyQuaternion(this.group.quaternion),this.velocity.copy(r).multiplyScalar(this.forwardSpeed);const a=new P(0,0,1);a.applyQuaternion(this.group.quaternion),this.velocity.add(a.multiplyScalar(this.lateralVelocity)),this.group.position.add(this.velocity.clone().multiplyScalar(t))}updateAutopilot(e){if(!this.autopilot.target)return;const t=new P().subVectors(this.autopilot.target,this.group.position);if(t.length()<this.autopilot.minDistance){this.disengageAutopilot(),this.forwardSpeed=0;return}const n=new $n().setFromUnitVectors(new P(1,0,0),t.normalize());this.group.quaternion.slerp(n,2*e)}updateManualControl(e,t){const n=Math.max(50,this.forwardSpeed*1.5);e.speedUp&&(this.forwardSpeed+=n*t),e.speedDown&&(this.forwardSpeed-=n*t),this.forwardSpeed=Fn.clamp(this.forwardSpeed,this.minSpeed,this.maxSpeed);let i=(e.left?1:0)-(e.right?1:0);if(Math.abs(i)>.01){this.group.rotateY(i*this.turnSpeed*t);const o=i*this.strafeFactor;this.lateralVelocity=Fn.lerp(this.lateralVelocity,o,t*5)}else this.lateralVelocity=Fn.lerp(this.lateralVelocity,0,t*this.strafeDecay);let r=(e.up?1:0)-(e.down?1:0);Math.abs(r)>.01&&this.group.rotateZ(r*this.pitchSpeed*t);const a=-i*this.bankLimit;this.mesh.rotation.x=Fn.lerp(this.mesh.rotation.x,a,t*this.autoLevelSpeed)}updateCamera(e){let t=this.viewMode==="COCKPIT"?new P(15,3,0):new P(-120,35,0),n=this.viewMode==="COCKPIT"?new P(60,0,0):new P(20,0,0);t.applyQuaternion(this.group.quaternion).add(this.group.position);const i=e.position.distanceTo(t);let r=.1;this.viewMode==="COCKPIT"?r=1:(i>500&&(r=.5),i>2e3&&(e.position.copy(t),r=1)),e.position.lerp(t,r),n.applyQuaternion(this.group.quaternion).add(this.group.position),e.lookAt(n)}checkProximity(e){if(!e)return;let t=1/0,n=1;for(const r of e){let a=new P,o=1e3;r.position&&r.position.isVector3&&(a.copy(r.position),r.geometry&&r.geometry.parameters?o=r.geometry.parameters.radius:r.userData&&r.userData.radius&&(o=r.userData.radius));const l=this.group.position.distanceTo(a);l<t&&(t=l,n=o)}const i=n*4;if(t<i){const r=Math.max(0,(t-n)/(i-n)),a=Fn.lerp(50,5e3,r);this.forwardSpeed>a&&(this.forwardSpeed=Fn.lerp(this.forwardSpeed,a,.05))}}update(e,t=[]){if(this.animationTime+=e,this.checkProximity(t),this.portLight&&this.starboardLight){const n=Math.floor(this.animationTime*2)%2===0;this.portLight.intensity=n?1:.1,this.starboardLight.intensity=n?1:.1}}getPosition(){return this.group.position.clone()}getSpeed(){return this.forwardSpeed}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}class AM{constructor(){this.clusters=new Map,this.allPlanets=[],this.isLoading=!1,this.loadedClusters=new Set,this.clusterIndex=null,this.sceneScale=10}async initialize(){if(this.clusterIndex)return console.log("✓ Cluster index already loaded"),this.clusterIndex;try{console.log("Loading cluster index...");const e=await fetch("nasa_data/clusters/cluster_index.json");if(!e.ok)throw new Error(`Failed to load cluster index: ${e.status}`);return this.clusterIndex=await e.json(),console.log(`✓ Cluster index loaded: ${this.clusterIndex.total_clusters} clusters, ${this.clusterIndex.total_planets} total planets`),this.clusterIndex}catch(e){throw console.error("❌ Error loading cluster index:",e),e}}enrichPlanetData(e){if(this.computeCoordinates(e),!e.planetType){const t=e.pl_rade||1,n=e.pl_eqt||288,i=this.classifyPlanet(t,n);e.planetType=i.type,e.planetSubType=i.subType,e.radius=this.getScaledRadius(t);const r=this.generatePlanetColors(i,e.pl_name);e.color=r.base,e.detailColor=r.detail,i.type==="gasGiant"&&(e.gasColors=r.gasColors),e.atmosphere=this.generateAtmosphere(i,r),e.rings=this.generateRings(i,e.pl_name),e.flattening=this.calculateFlattening(i,e.pl_name),e.mass=this.calculateMass(e),e.hostname==="Sun"&&this.applySolarSystemOverrides(e)}return e}calculateFlattening(e,t){const{type:n}=e;let i=0;for(let a=0;a<t.length;a++)i+=t.charCodeAt(a);const r=i%100/100;return n==="gasGiant"?.05+r*.05:n==="iceGiant"?.015+r*.01:.002+r*.003}calculateMass(e){if(e.pl_masse)return e.pl_masse;const t=e.pl_rade||1,n=Math.pow(t,3);let i=1;return e.planetType==="rocky"?i=5:e.planetType==="iceGiant"&&(i=1.5),n*(i/5.5)}applySolarSystemOverrides(e){const t=e.pl_name;switch(e.isSolar=!0,t){case"Mercury":e.color=10855845,e.detailColor=6052956,e.atmosphere.enabled=!1;break;case"Venus":e.color=14924662,e.detailColor=13938487,e.atmosphere.enabled=!0,e.atmosphere.color=12752199,e.atmosphere.density=.9;break;case"Earth":e.color=2263842,e.detailColor=2003199,e.atmosphere.enabled=!0,e.atmosphere.color=4886754,e.atmosphere.density=.2;break;case"Mars":e.color=12330802,e.detailColor=9127187,e.atmosphere.enabled=!0,e.atmosphere.color=12330802,e.atmosphere.density=.05;break;case"Jupiter":e.color=14262374,e.detailColor=9193246,e.rings.enabled=!1;break;case"Saturn":e.color=15390392,e.detailColor=10522480,e.rarings=!0,e.rings.enabled=!0,e.rings.innerRadius=1.2,e.rings.outerRadius=2.3,e.rings.color1=13482646,e.rings.color2=9141611;break;case"Uranus":e.color=13756391,e.detailColor=8958147,e.rings.enabled=!0,e.rings.innerRadius=1.6,e.rings.outerRadius=2,e.rings.color1=5592405,e.rings.color2=7829367,e.tilt=97.77*(Math.PI/180);break;case"Neptune":e.color=5987807,e.detailColor=3027086,e.rings.enabled=!0,e.rings.innerRadius=1.5,e.rings.outerRadius=2.2,e.rings.color1=3815994,e.rings.color2=4868682;break;case"Pluto":e.color=14929844,e.detailColor=6048322,e.atmosphere.enabled=!1;break}}computeCoordinates(e){var l,c,h,u;if(((c=(l=e.characteristics)==null?void 0:l.coordinates_3d)==null?void 0:c.x_light_years)!==null&&((u=(h=e.characteristics)==null?void 0:h.coordinates_3d)==null?void 0:u.x_light_years)!==void 0)return;if(e.characteristics||(e.characteristics={}),e.position&&e.position.x!==null&&e.position.x!==void 0){const f=(e.sy_dist||0)*3.26156,g=Math.max(Math.abs(e.position.x),Math.abs(e.position.y),Math.abs(e.position.z));let _,m,p;if(g<50&&f>1){const b=e.ra,w=e.dec;if(b!=null&&w!=null){const x=b*Math.PI/180,E=w*Math.PI/180;_=f*Math.cos(E)*Math.cos(x),m=f*Math.cos(E)*Math.sin(x),p=f*Math.sin(E)}else _=e.position.x,m=e.position.y,p=e.position.z}else _=e.position.x,m=e.position.y,p=e.position.z;e.characteristics.coordinates_3d={x_light_years:_,y_light_years:m,z_light_years:p,system:"Galactic (from position field)"},!e.characteristics.distance_to_earth_ly&&f>0&&(e.characteristics.distance_to_earth_ly=f);return}const t=e.ra,n=e.dec,i=e.sy_dist;if(t==null||n==null||i==null)return;const r=i*3.26156,a=t*Math.PI/180,o=n*Math.PI/180;e.characteristics.coordinates_3d={x_light_years:r*Math.cos(o)*Math.cos(a),y_light_years:r*Math.cos(o)*Math.sin(a),z_light_years:r*Math.sin(o),system:"Galactic (computed from RA/Dec/Dist)"},e.characteristics.distance_to_earth_ly||(e.characteristics.distance_to_earth_ly=r)}classifyPlanet(e,t){let n="rocky",i="terrestrial";return e>6?(n="gasGiant",i="gas_giant"):e>=3?(n="iceGiant",i="ice_giant"):e>=1.5?(n="rocky",i="super_earth"):e>=1?(n="rocky",i="earth_sized"):(n="rocky",i="sub_earth"),t>1e3?i=n==="gasGiant"?"hot_jupiter":"lava_world":t<200?i=n==="gasGiant"?"cold_giant":"ice_world":t>=200&&t<=350?n==="rocky"&&e<=2&&(i="habitable"):n==="rocky"&&(i="desert_world"),{type:n,subType:i}}getScaledRadius(e){let t=e*.5;return Math.min(t,15)}getCompounds(){return{IRON_OXIDE:12330802,SILICATE:10855845,SULFUR:15122985,METHANE:32896,ICE:15792383,WATER:139,CHLOROPHYLL:2263842,CARBON:3092271,HYDROGEN:16113331}}generatePlanetColors(e,t){let n=0;const i=t||"default";for(let f=0;f<i.length;f++)n=i.charCodeAt(f)+((n<<5)-n);const r=()=>{const f=Math.sin(n++)*1e4;return f-Math.floor(f)},{type:a,subType:o}=e,l=this.getCompounds();let c=l.SILICATE,h=l.CARBON,u=[];o==="lava_world"?(c=l.IRON_OXIDE,h=l.SULFUR):o==="ice_world"?(c=l.ICE,h=l.SILICATE):o==="habitable"?(c=l.WATER,h=l.SILICATE,r()>.5&&(h=l.CHLOROPHYLL)):o==="desert_world"?(c=13808780,h=l.IRON_OXIDE):o==="gas_giant"||o==="hot_jupiter"?(c=l.HYDROGEN,h=o==="hot_jupiter"?4915330:l.SULFUR,u=[c,h,r()>.5?l.METHANE:l.IRON_OXIDE]):o==="ice_giant"&&(c=l.METHANE,h=l.ICE,u=[c,h,4620980]);const d=(f,g=20)=>{let _=f>>16&255,m=f>>8&255,p=f&255;const b=Math.floor(r()*g*2)-g;return _=Math.min(255,Math.max(0,_+b)),m=Math.min(255,Math.max(0,m+b)),p=Math.min(255,Math.max(0,p+b)),(_<<16)+(m<<8)+p};return{base:d(c,30),detail:d(h,30),gasColors:u.map(f=>d(f,20))}}generateAtmosphere(e,t){const{type:n,subType:i}=e,r=this.getCompounds();if(i==="sub_earth"&&i!=="ice_world")return{enabled:!1};let a=!0,o=8900331,l=.2,c=!0;return i==="lava_world"?(o=r.IRON_OXIDE,l=.4,c=!1):i==="ice_world"?(o=r.ICE,l=.15,c=!0):i==="desert_world"?(o=16032864,l=.3,c=!0):n==="gasGiant"?(o=t.base,l=.6,c=!0):n==="iceGiant"?(o=r.METHANE,l=.6,c=!0):i==="habitable"&&(o=4886754,l=.2,c=!0),{enabled:a,color:o,density:l,hasClouds:c}}generateRings(e,t){const{type:n}=e;let i=!1;if(n==="gasGiant"||n==="iceGiant"){let r=0;for(let a=0;a<t.length;a++)r+=t.charCodeAt(a);i=r%2===0}return i?{enabled:!0,innerRadius:1.4,outerRadius:2.2+Math.random(),color1:9205843,color2:4868682}:{enabled:!1}}async loadSolarSystem(){console.log("  🌍 Loading solar system from PlanetDataService...");const e=await this.loadCluster("solar_system");return e&&e.length>0?(e.forEach(t=>t.isSolar=!0),console.log(`  ✓ Loaded ${e.length} solar system planets`)):console.warn("  ⚠️ No solar system planets loaded"),e}async loadCluster(e){if(this.loadedClusters.has(e))return console.log(`  ↪ Cluster ${e} already loaded (cached)`),this.clusters.get(e);try{this.isLoading=!0,console.log(`  ⬇ Loading cluster ${e}...`);const t=await fetch(`nasa_data/clusters/${e}.json`);if(!t.ok){if(t.status===404)return console.warn(`  ⚠️ Cluster ${e} not found (404) - skipping`),this.loadedClusters.add(e),[];throw new Error(`Failed to load cluster: ${e} (${t.status})`)}const n=await t.json();if(Array.isArray(n)){const i=n.map(r=>this.enrichPlanetData(r));return this.clusters.set(e,i),this.loadedClusters.add(e),this.allPlanets.push(...i),console.log(`  ✓ Loaded ${e}: ${i.length} planets (total: ${this.allPlanets.length})`),i}else return console.error(`  ❌ Invalid cluster format for ${e}`),this.loadedClusters.add(e),[]}catch(t){return console.error(`  ❌ Error loading cluster ${e}:`,t),[]}finally{this.isLoading=!1}}async loadClusters(e){const t=[];for(const n of e){const i=await this.loadCluster(n);t.push(i)}return t}async loadClustersNearPosition(e,t=500){this.clusterIndex||await this.initialize();const n=Math.sqrt(e.x**2+e.y**2+e.z**2);let i="nearby";n>1e3?i="veryfar":n>500?i="far":n>200&&(i="medium");const r=Math.atan2(e.z,e.x),a=Math.floor((r+Math.PI)/(Math.PI/2))%4+1;console.log(`📍 Position-based loading: distance=${n.toFixed(1)}, tier=${i}, quad=${a}`);const o=[],l=`${i}_quad${a}`;this.clusterIndex.clusters[l]&&o.push(l);const c=[a%4+1,a===1?4:a-1];for(const u of c){const d=`${i}_quad${u}`;this.clusterIndex.clusters[d]&&o.push(d)}const h=["nearby_quad1","nearby_quad2","nearby_quad3","nearby_quad4"];for(const u of h)o.includes(u)||o.push(u);return console.log(`  Loading clusters: ${o.join(", ")}`),await this.loadClusters(o),this.allPlanets}async loadNearbyFirst(){this.clusterIndex||await this.initialize(),console.log("📦 Loading nearby quadrants...");const e=["nearby_quad1","nearby_quad2","nearby_quad3","nearby_quad4"];return await this.loadClusters(e),console.log(`✓ Loaded ${this.allPlanets.length} nearby planets`),this.allPlanets}async loadAllClusters(){this.clusterIndex||await this.initialize();const e=Object.keys(this.clusterIndex.clusters);return console.log(`📦 Loading all ${e.length} clusters...`),await this.loadClusters(e),console.log(`✓ Loaded all ${this.allPlanets.length} planets from ${this.loadedClusters.size} clusters`),this.allPlanets}getAllPlanets(){const e=this.allPlanets.filter(i=>{var a;const r=(a=i.characteristics)==null?void 0:a.coordinates_3d;return r&&r.x_light_years!==null&&r.x_light_years!==void 0}),t=new Map;for(const i of e)t.has(i.pl_name)||t.set(i.pl_name,i);const n=Array.from(t.values());return n.length<e.length&&console.warn(`⚠️ Deduplicated planets: ${e.length} → ${n.length} (removed ${e.length-n.length} duplicates)`),n}searchByName(e){if(!e)return this.allPlanets;const t=e.toLowerCase();return this.allPlanets.filter(n=>{var i;return(i=n.pl_name)==null?void 0:i.toLowerCase().includes(t)})}filterByHabitability(e=0,t=100){return this.allPlanets.filter(n=>{var r;const i=((r=n.characteristics)==null?void 0:r.habitability_percent)||0;return i>=e&&i<=t})}filterByDistance(e){return this.allPlanets.filter(t=>(t.sy_dist||0)<=e)}filter(e={}){let t=[...this.allPlanets];if(t=t.filter(n=>{var r;const i=(r=n.characteristics)==null?void 0:r.coordinates_3d;return i&&i.x_light_years!==null&&i.x_light_years!==void 0}),e.name){const n=e.name.toLowerCase();t=t.filter(i=>{var r;return(r=i.pl_name)==null?void 0:r.toLowerCase().includes(n)})}return e.minHabitability!==void 0&&(t=t.filter(n=>{var i;return(((i=n.characteristics)==null?void 0:i.habitability_percent)||0)>=e.minHabitability})),e.maxToxicity!==void 0&&(t=t.filter(n=>{var i;return(((i=n.characteristics)==null?void 0:i.toxicity_percent)||0)<=e.maxToxicity})),e.maxDistance!==void 0&&(t=t.filter(n=>(n.sy_dist||0)<=e.maxDistance)),e.planetType&&(t=t.filter(n=>{var i,r;return(r=(i=n.characteristics)==null?void 0:i.radius_position)==null?void 0:r.toLowerCase().includes(e.planetType.toLowerCase())})),t}getPlanetByName(e){return this.allPlanets.find(t=>t.pl_name===e)}getRandomPlanet(){const e=this.getAllPlanets();if(e.length===0)return null;const t=Math.floor(Math.random()*e.length);return e[t]}getStats(){return{totalPlanets:this.getAllPlanets().length,totalRawEntries:this.allPlanets.length,clustersLoaded:this.loadedClusters.size,clusterNames:Array.from(this.loadedClusters)}}}class CM{constructor(e){this.dataService=e,this.meshGroup=new Yt,this.meshGroup.name="NASA_Exoplanets_3D",this.planets=[],this.loaded=!1,this.renderedPlanets=new Set,this.sceneScale=10,this.earthRadiusScale=.5,this.mesh=this.meshGroup,this.textureLoader=new yu}async load(){if(this.loaded)return;console.log("  📦 Loading planet data incrementally...");const e=await this.dataService.loadNearbyFirst();this.planets=e,this.create3DMeshes(e),this.loaded=!0;const t=await this.dataService.initialize(),n=Object.keys(t.clusters).filter(i=>i!=="no_position"&&!i.startsWith("nearby"));console.log(`  📋 Loading ${n.length} additional clusters: ${n.join(", ")}`),this.loadClustersProgressively(n),console.log("🔧 Applying x10000 scale to all planets..."),this.meshGroup.scale.set(1e4,1e4,1e4)}async loadClustersProgressively(e){let t=0;const n=e.length;for(const i of e){const r=await this.dataService.loadCluster(i);r&&r.length>0&&(this.planets.push(...r),this.create3DMeshes(r),t++,console.log(`  📦 Progress: ${t}/${n} clusters loaded (${this.dataService.getAllPlanets().length} total planets)`),await new Promise(a=>setTimeout(a,500)))}console.log(`✨ All ${n} clusters loaded! Total: ${this.dataService.getAllPlanets().length} planets rendered.`)}async create3DMeshes(e=this.planets){if(!e||e.length===0)return;const t=new Cn(1,8,6);t.computeVertexNormals();const n=new Cn(1,12,10);n.computeVertexNormals();const i=new Cn(1,24,20);i.computeVertexNormals();const r=new Map,a=30;let o=0;const l=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],c=()=>{var u,d,f,g;const h=Math.min(o+a,e.length);for(;o<h;o++){const _=e[o],m=_.hostname==="Sun"&&l.includes(_.pl_name);if(this.renderedPlanets.has(_.pl_name))continue;const p=(u=_.characteristics)==null?void 0:u.coordinates_3d;if(!p||p.x_light_years===null){console.warn(`⚠️ Skipping ${_.pl_name}: missing coordinates_3d`);continue}const b=_.sy_dist*3.26156||Math.sqrt(p.x_light_years**2+p.y_light_years**2+p.z_light_years**2),w=_.pl_rade||1,x=w*this.earthRadiusScale;let E=3;b<25?E=1:b<100&&(E=2);const A=_.pl_eqt||300;let T,L=_.planetType;if(!L){const R=(((d=_.characteristics)==null?void 0:d.radius_position)||"").toLowerCase();L="rocky",R.includes("jupiter")||w>6?L="gasGiant":(R.includes("neptune")||w>2)&&(L="iceGiant")}if(E===1){let R;_.color&&_.detailColor?R={base:_.color,detail:_.detailColor}:R=Kc(((f=_.characteristics)==null?void 0:f.principal_material)||L,A);let F=.9,B=0,$=0,W=0;const G=_.planetSubType||"";G==="habitable"||G==="ice_world"?F=.5:G==="lava_world"||G==="hot_jupiter"?(F=.8,$=16711680,W=.3):(G==="gas_giant"||G==="ice_giant")&&(F=.6);let O,Y,ne,se,ae=!1;const ze=_.pl_name||_.name,Oe=ze==="Earth";if(m||_.isSolar||Oe)switch(console.log(`🪐 Loading solar system planet: ${ze}`),ze){case"Earth":O=this.textureLoader.load("/textures/planets/earth/earth_day_2048.jpg"),Y=this.textureLoader.load("/textures/planets/earth/earth_specular_2048.jpg"),ne=this.textureLoader.load("/textures/planets/earth/earth_normal_2048.jpg"),se=this.textureLoader.load("/textures/planets/earth/earth_lights_2048.png"),O.colorSpace=Ze,se&&(se.colorSpace=Ze),ae=!0;break;case"Mars":O=this.textureLoader.load("/textures/planets/mars/2k_mars.jpg"),O.colorSpace=Ze,ne=Kn(512,2.5),ae=!0;break;case"Jupiter":O=this.textureLoader.load("/textures/planets/jupiter/2k_jupiter.jpg"),O.colorSpace=Ze,ne=Kn(512,.5),ae=!0;break;case"Saturn":O=this.textureLoader.load("/textures/planets/saturn/2k_saturn.jpg"),O.colorSpace=Ze,ne=Kn(512,.3),ae=!0;break;case"Neptune":O=this.textureLoader.load("/textures/planets/neptune/2k_neptune.jpg"),O.colorSpace=Ze,ne=Kn(512,.4),ae=!0;break;case"Uranus":O=this.textureLoader.load("/textures/planets/uranus/2k_uranus.jpg"),O.colorSpace=Ze,ne=Kn(512,.2),ae=!0;break;case"Venus":O=this.textureLoader.load("/textures/planets/venus/2k_venus_atmosphere.jpg"),O.colorSpace=Ze,ne=Kn(512,.1),ae=!0;break;case"Mercury":O=this.textureLoader.load("/textures/planets/mercury/2k_mercury.jpg"),O.colorSpace=Ze,ne=Kn(512,3),ae=!0;break}if(!ae)if(L==="gasGiant"){const bt=[R.base,R.detail,R.base];O=kS(bt,256),ne=Kn(256,.5)}else L==="iceGiant"?(O=zS(R.base,256),ne=Kn(256,.3)):(O=BS(R.base,R.detail,256),ne=Kn(256,2));T=new Ii({color:O?new re(16777215):new re(R.base),roughness:Oe?.35:F,metalness:Oe?0:B,emissive:se?new re(16755268):$||new re(0),emissiveIntensity:se?.8:W,transparent:!1,opacity:1,alphaTest:0,depthWrite:!0,depthTest:!0,side:ln}),O&&(T.map=O,ne&&(T.normalMap=ne)),se&&(T.emissiveMap=se),ae&&Oe&&Y&&(T.metalnessMap=Y,T.metalness=.5,T.roughness=.2)}else if(E===2){let R;_.color&&_.detailColor?R={base:_.color,detail:_.detailColor}:R=Kc(((g=_.characteristics)==null?void 0:g.principal_material)||L,A),T=new Ii({color:new re(R.base),roughness:.9,metalness:.1,transparent:!1,opacity:1,alphaTest:0,depthWrite:!0,depthTest:!0,side:ln})}else{let R=_.color;R||(R=Kc(L,A).base);const F=`mat_${R}`;r.has(F)?T=r.get(F):(T=new Ii({color:new re(R),roughness:.9,metalness:0,transparent:!1,opacity:1,alphaTest:0,depthWrite:!0,depthTest:!0,side:ln}),r.set(F,T))}const y=E===1?i.clone():E===2?n.clone():t.clone();y.scale(x,x,x);const S=new rt(y,T);if(S.renderOrder=10,_.flattening&&S.scale.set(1,1-_.flattening,1),S.position.set(p.x_light_years*this.sceneScale,p.y_light_years*this.sceneScale,p.z_light_years*this.sceneScale),S.userData.planetData=_,S.userData.planet=_,S.userData.planetName=_.pl_name,S.userData.isSolar=m,S.castShadow=!0,S.receiveShadow=!0,E===1){if((_.pl_name||_.name)==="Earth"){const F=this.textureLoader.load("/textures/planets/earth/earth_clouds_2048.png");F.colorSpace=Ze;const B=GS(x,F);B.material.uniforms.cloudOpacity.value=.5,B.material.uniforms.cloudCoverage.value=.5,B.name="EarthClouds",B.userData.isClouds=!0,S.add(B),HS(x,{color:4886754}).forEach(G=>{S.add(G)}),S.name="Earth"}if(_.rings&&_.rings.enabled){const F=_.rings.innerRadius||1.4,B=_.rings.outerRadius||2.2,$=new ua(F,B,32),W=new Ii({color:_.rings.color1||9205843,side:_n,transparent:!0,opacity:.8,depthWrite:!0,depthTest:!0,roughness:.8,metalness:.2}),G=$.attributes.position,O=new P;for(let ne=0;ne<G.count;ne++)O.fromBufferAttribute(G,ne),$.attributes.uv.setXY(ne,O.length()<(F+B)/2?0:1,1);const Y=new rt($,W);Y.renderOrder=10,Y.rotation.x=Math.PI/2,Y.receiveShadow=!0,Y.castShadow=!0,S.add(Y)}}this.meshGroup.add(S),this.renderedPlanets.add(_.pl_name)}o<e.length&&(window.requestIdleCallback?window.requestIdleCallback(c):setTimeout(c,16))};c()}update3DMeshes(){this.create3DMeshes()}getColorByHabitability(e){return e>70?new re(3800852):e>40?new re(16739072):e>20?new re(16711790):new re(9109759)}update(e){const t=this.meshGroup.getObjectByName("Earth");if(t){t.rotation.y+=e*.1;const n=t.getObjectByName("EarthClouds");n&&(n.rotation.y+=e*.03)}}getPlanetAtPosition(e,t=5){return this.planets.find(n=>{var a;const i=(a=n.characteristics)==null?void 0:a.coordinates_3d;return i?new P(i.x_light_years*this.sceneScale,i.y_light_years*this.sceneScale,i.z_light_years*this.sceneScale).distanceTo(e)<t:!1})}dispose(){for(;this.meshGroup.children.length>0;){const e=this.meshGroup.children[0];e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),this.meshGroup.remove(e)}this.renderedPlanets.clear()}}class RM{constructor(e){this.container=e,this.scene=new fu,this.camera=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Tu({antialias:!0,alpha:!0}),this.clock=new Jl,this.rockets=[],this.particles=[],this.discoLights=[],this.spAIceFace=null,this.init()}init(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.zIndex="1",this.camera.position.z=20,this.createSpAIceFace(),this.createRockets(),this.createPartyParticles(),this.createDiscoLights(),this.createStars(),window.addEventListener("resize",()=>this.onResize()),this.animate()}createSpAIceFace(){const e=new Yt,t=new ls(4,4,3),n=new so({color:65535,emissive:65535,emissiveIntensity:.5,shininess:100}),i=new rt(t,n);e.add(i);const r=new Cn(.6,16,16),a=new on({color:16711935,emissive:16711935}),o=new rt(r,a);o.position.set(-1,.5,1.6),e.add(o);const l=new rt(r,a);l.position.set(1,.5,1.6),e.add(l);const c=new Kl(1.2,.2,16,32,Math.PI),h=new on({color:3800852}),u=new rt(c,h);u.position.set(0,-.8,1.5),u.rotation.z=Math.PI,e.add(u);const d=new sr(.1,.1,2,8),f=new so({color:16776960}),g=new rt(d,f);g.position.set(0,3,0),e.add(g);const _=new Cn(.5,16,16),m=new on({color:16711935,emissive:16711935}),p=new rt(_,m);p.position.set(0,4,0),e.add(p);const b=new rs(65535,2,20);e.add(b),this.spAIceFace=e,this.scene.add(e),this.leftEye=o,this.rightEye=l,this.antenna=g,this.antennaBall=p}createRockets(){for(let e=0;e<5;e++){const t=new Yt,n=new Yl(.5,2,8),i=new so({color:[16711680,16739072,16776960,65280,255][e],emissive:[16711680,16739072,16776960,65280,255][e],emissiveIntensity:.3}),r=new rt(n,i);r.rotation.x=-Math.PI/2,t.add(r);const a=new Cn(.4,8,8),o=new on({color:16739072,emissive:16739072}),l=new rt(a,o);l.position.z=1,t.add(l),t.position.set(Math.random()*30-15,Math.random()*20-10,Math.random()*10-5),t.userData.velocity=new P((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*.5),t.userData.rotationSpeed=(Math.random()-.5)*.1,t.userData.flame=l,this.rockets.push(t),this.scene.add(t)}}createPartyParticles(){const t=new pt,n=new Float32Array(600),i=new Float32Array(600);for(let a=0;a<200;a++){n[a*3]=Math.random()*40-20,n[a*3+1]=Math.random()*30-15,n[a*3+2]=Math.random()*20-10;const o=new re;o.setHSL(Math.random(),1,.5),i[a*3]=o.r,i[a*3+1]=o.g,i[a*3+2]=o.b}t.setAttribute("position",new ut(n,3)),t.setAttribute("color",new ut(i,3));const r=new er({size:.3,vertexColors:!0,transparent:!0,opacity:.8});this.particleSystem=new ia(t,r),this.scene.add(this.particleSystem)}createDiscoLights(){const e=[16711680,65280,255,16711935,16776960,65535];for(let n=0;n<6;n++){const i=new rs(e[n],2,30),r=n/6*Math.PI*2;i.position.set(Math.cos(r)*15,Math.sin(r)*10,5),this.discoLights.push(i),this.scene.add(i)}const t=new Su(4210752,1);this.scene.add(t)}createStars(){const e=new pt,t=500,n=new Float32Array(t*3);for(let a=0;a<t;a++)n[a*3]=(Math.random()-.5)*100,n[a*3+1]=(Math.random()-.5)*100,n[a*3+2]=(Math.random()-.5)*100;e.setAttribute("position",new ut(n,3));const i=new er({color:16777215,size:.1,transparent:!0,opacity:.6}),r=new ia(e,i);this.scene.add(r),this.stars=r}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime();this.clock.getDelta(),this.spAIceFace&&(this.spAIceFace.position.y=Math.sin(e*2)*3,this.spAIceFace.rotation.y=Math.sin(e*.5)*.3,this.spAIceFace.rotation.z=Math.cos(e*.7)*.2,Math.sin(e*5)>.9?(this.leftEye.scale.y=.1,this.rightEye.scale.y=.1):(this.leftEye.scale.y=1,this.rightEye.scale.y=1),this.antenna.rotation.x=Math.sin(e*3)*.2,this.antennaBall.position.y=4+Math.sin(e*5)*.3),this.rockets.forEach((t,n)=>{t.position.add(t.userData.velocity);const i=t.userData.velocity;t.lookAt(t.position.clone().add(i)),Math.abs(t.position.x)>20&&(t.userData.velocity.x*=-1),Math.abs(t.position.y)>15&&(t.userData.velocity.y*=-1),Math.abs(t.position.z)>10&&(t.userData.velocity.z*=-1),t.rotation.z+=t.userData.rotationSpeed,t.userData.flame.scale.setScalar(.8+Math.sin(e*10+n)*.4)}),this.particleSystem&&(this.particleSystem.rotation.y+=.001,this.particleSystem.rotation.x=Math.sin(e*.3)*.1),this.discoLights.forEach((t,n)=>{const i=n/this.discoLights.length*Math.PI*2+e;t.position.x=Math.cos(i)*15,t.position.z=Math.sin(i)*10,t.position.y=Math.sin(e*2+n)*5,t.intensity=1.5+Math.sin(e*5+n)*.5}),this.stars&&(this.stars.rotation.y+=2e-4),this.renderer.render(this.scene,this.camera)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}dispose(){window.removeEventListener("resize",()=>this.onResize()),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.renderer.dispose()}}class PM{constructor(){this.screen=document.getElementById("loading-screen"),this.statusElement=document.getElementById("loading-status"),this.detailElement=document.getElementById("loading-detail"),this.progressBar=document.querySelector(".loading-progress-bar"),this.startButton=document.getElementById("start-exploring-btn"),this.totalSteps=0,this.completedSteps=0,this.startTime=Date.now(),this.currentSlide=0,this.totalSlides=4,this.slideInterval=null,this.partyScene=null,this.initPartyScene(),this.startSlideshow(),this.setupStartButton()}setupStartButton(){this.startButton&&this.startButton.addEventListener("click",()=>{this.hideLoadingScreen()})}hideLoadingScreen(){this.stopSlideshow(),this.screen&&this.screen.classList.add("hidden"),this.partyScene&&(this.partyScene.dispose(),this.partyScene=null),setTimeout(()=>{this.screen&&this.screen.parentNode&&this.screen.parentNode.removeChild(this.screen)},500)}initPartyScene(){if(this.screen)try{this.partyScene=new RM(this.screen),console.log("🎉 Party loading scene initialized!")}catch(e){console.warn("Could not initialize party scene:",e)}}startSlideshow(){document.querySelectorAll(".indicator").forEach((t,n)=>{t.addEventListener("click",()=>{this.goToSlide(n)})})}goToSlide(e){var i,r,a,o,l;const t=document.querySelectorAll(".loading-slide"),n=document.querySelectorAll(".indicator");e<0||e>=this.totalSlides||((i=t[this.currentSlide])==null||i.classList.remove("active"),(r=t[this.currentSlide])==null||r.classList.add("exiting"),(a=n[this.currentSlide])==null||a.classList.remove("active"),setTimeout(()=>{var c;(c=t[this.currentSlide])==null||c.classList.remove("exiting")},600),this.currentSlide=e,(o=t[this.currentSlide])==null||o.classList.add("active"),(l=n[this.currentSlide])==null||l.classList.add("active"))}nextSlide(){const e=(this.currentSlide+1)%this.totalSlides;this.goToSlide(e)}resetSlideInterval(){this.slideInterval&&clearInterval(this.slideInterval),this.slideInterval=setInterval(()=>{this.nextSlide()},this.SLIDE_DURATION)}stopSlideshow(){this.slideInterval&&(clearInterval(this.slideInterval),this.slideInterval=null)}start(e=5){this.totalSteps=e,this.completedSteps=0,this.startTime=Date.now(),this.updateProgress()}updateStatus(e,t=""){this.statusElement&&(this.statusElement.textContent=e),this.detailElement&&t&&(this.detailElement.textContent=t),console.log(`📦 Loading: ${e}${t?" - "+t:""}`)}completeStep(e){this.completedSteps++,this.updateProgress(),console.log(`✓ Completed: ${e} (${this.completedSteps}/${this.totalSteps})`)}updateProgress(){if(!this.progressBar)return;const e=this.completedSteps/this.totalSteps*100;this.progressBar.style.width=`${Math.min(e,100)}%`}setProgress(e){this.progressBar&&(this.progressBar.style.width=`${Math.min(e,100)}%`)}finish(){const e=((Date.now()-this.startTime)/1e3).toFixed(1);this.updateStatus("Ready for Launch! 🚀",`Loaded in ${e}s`),this.setProgress(100),console.log(`✓ Loading complete in ${e}s`),this.startButton&&setTimeout(()=>{this.startButton.classList.remove("hidden")},300)}error(e){this.updateStatus("Error Loading",e),this.progressBar&&(this.progressBar.style.background="linear-gradient(90deg, #ff0000, #ff6b00)"),this.stopSlideshow(),console.error("❌ Loading error:",e)}}class IM{constructor(e,t){this.dataService=e,this.onPlanetSelect=t,this.nearbyPlanets=[],this.filteredPlanets=[],this.currentPage=0,this.planetsPerPage=5,this.createUI(),this.attachEventListeners()}createUI(){this.container=document.createElement("div"),this.container.id="planet-navigator",this.container.className="planet-navigator",this.container.innerHTML=`
            <div class="nav-header">
                <div>
                    <h2>🌍 PLANET NAVIGATOR</h2>
                    <p class="nav-subtitle">Click any planet to travel instantly</p>
                </div>
            </div>
            
            <div class="nav-search">
                <input 
                    type="text" 
                    id="nav-search" 
                    placeholder="🔍 Search planets..."
                    class="nav-search-input"
                />
            </div>
            
            <div class="nav-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="habitable">Habitable</button>
                <button class="filter-btn" data-filter="nearby">Nearby</button>
            </div>
            
            <div id="nav-planet-list" class="nav-planet-list">
                <div class="nav-loading">Loading planets...</div>
            </div>
            
            <div class="nav-pagination">
                <button id="nav-prev" class="nav-btn">« Prev</button>
                <span id="nav-page-info" class="nav-page-info">Page 1</span>
                <button id="nav-next" class="nav-btn">Next »</button>
            </div>
            
            <div class="nav-footer">
                <button id="nav-toggle" class="nav-toggle-btn">◀ Minimize</button>
            </div>
        `,document.body.appendChild(this.container)}attachEventListeners(){document.getElementById("nav-search").addEventListener("input",e=>{this.handleSearch(e.target.value)}),document.querySelectorAll(".filter-btn").forEach(e=>{e.addEventListener("click",t=>{document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),e.classList.add("active"),this.applyFilter(e.dataset.filter)})}),document.getElementById("nav-prev").addEventListener("click",()=>this.prevPage()),document.getElementById("nav-next").addEventListener("click",()=>this.nextPage()),document.getElementById("nav-toggle").addEventListener("click",()=>this.toggle()),this.container.addEventListener("click",e=>{this.container.classList.contains("minimized")&&!e.target.closest("#nav-toggle")&&this.show()})}async loadPlanets(){try{console.log("🗺️ Navigator: Waiting for all planet data..."),this.nearbyPlanets=this.dataService.getAllPlanets(),this.filteredPlanets=this.nearbyPlanets,this.renderPlanetList();const e=setInterval(()=>{this.dataService.getAllPlanets().length>this.nearbyPlanets.length&&(this.nearbyPlanets=this.dataService.getAllPlanets(),this.filteredPlanets=this.nearbyPlanets,this.renderPlanetList(),console.log(`🗺️ Navigator updated: ${this.nearbyPlanets.length} planets`))},2e3);await this.waitForAllClusters(),clearInterval(e),this.nearbyPlanets=this.dataService.getAllPlanets(),this.filteredPlanets=this.nearbyPlanets;const t=this.dataService.getStats();console.log(`✓ Navigator complete: ${this.nearbyPlanets.length} planets from ${t.clustersLoaded} clusters`),this.renderPlanetList()}catch(e){console.error("❌ Navigator: Error loading planets:",e);const t=document.getElementById("nav-planet-list");t&&(t.innerHTML=`
                    <div class="nav-error">
                        <p>❌ Failed to load planet data</p>
                        <p style="font-size: 12px;">${e.message}</p>
                    </div>
                `)}}async waitForAllClusters(){const e=await this.dataService.initialize(),t=Object.keys(e.clusters).length;return console.log(`🗺️ Navigator: Waiting for ${t} clusters to load...`),new Promise(n=>{const i=setInterval(()=>{const r=this.dataService.getStats();r.clustersLoaded>=t&&(console.log(`✅ Navigator: All ${r.clustersLoaded} clusters loaded!`),console.log(`📋 Loaded clusters: ${r.clusterNames.join(", ")}`),clearInterval(i),n())},1e3);setTimeout(()=>{clearInterval(i);const r=this.dataService.getStats();console.warn(`⚠️ Navigator: Timeout after 60s (${r.clustersLoaded}/${t} clusters loaded)`),n()},6e4)})}handleSearch(e){e?this.nearbyPlanets=this.dataService.searchByName(e):this.nearbyPlanets=this.dataService.getAllPlanets(),this.filteredPlanets=this.nearbyPlanets,this.currentPage=0,this.renderPlanetList()}applyFilter(e){const t=this.dataService.getAllPlanets();switch(e){case"habitable":this.nearbyPlanets=t.filter(n=>{var i;return(((i=n.characteristics)==null?void 0:i.habitability_percent)||0)>50});break;case"nearby":this.nearbyPlanets=t.filter(n=>(n.sy_dist||0)*3.262<100);break;default:this.nearbyPlanets=t}this.filteredPlanets=this.nearbyPlanets,this.currentPage=0,this.renderPlanetList()}renderPlanetList(){const e=document.getElementById("nav-planet-list");if(!this.filteredPlanets||this.filteredPlanets.length===0){const r=this.dataService.getStats();e.innerHTML=`
                <div class="nav-loading">
                    <p>⏳ Loading planets...</p>
                    <p style="font-size: 12px;">${r.clustersLoaded} clusters loaded</p>
                </div>
            `;return}const t=this.currentPage*this.planetsPerPage,n=t+this.planetsPerPage,i=this.filteredPlanets.slice(t,n);if(i.length===0){e.innerHTML='<div class="nav-no-results">No planets found</div>';return}e.innerHTML=i.map(r=>{var m,p,b,w,x;const a=r.pl_name||"Unknown Planet",o=r.sy_dist!==void 0&&r.sy_dist!==null?`${r.sy_dist.toFixed(6)} pc`:"Unknown",l=((m=r.characteristics)==null?void 0:m.habitability_percent)||0,c=((p=r.characteristics)==null?void 0:p.toxicity_percent)||0,h=((b=r.characteristics)==null?void 0:b.radius_position)||"Unknown",u=((w=r.characteristics)==null?void 0:w.atmosphere_type)||"Unknown",d=((x=r.characteristics)==null?void 0:x.principal_material)||"Unknown",f=r.pl_rade?`${r.pl_rade.toFixed(2)}`:"N/A",g=r.pl_bmasse?`${r.pl_bmasse.toFixed(2)}`:"N/A";let _="low";return l>=70?_="high":l>=40&&(_="medium"),`
                <div class="nav-planet-item" data-planet="${a}">
                    <div class="nav-planet-header">
                        <div class="nav-planet-name">${a}</div>
                        <button class="nav-go-btn" data-planet-name="${a}">GO →</button>
                    </div>
                    
                    <div class="nav-planet-details">
                        <div class="nav-detail-row">
                            <span class="nav-label">📍 Distance:</span>
                            <span class="nav-value">${o}</span>
                        </div>
                        <div class="nav-detail-row">
                            <span class="nav-label">🌍 Type:</span>
                            <span class="nav-value">${h}</span>
                        </div>
                        <div class="nav-detail-row">
                            <span class="nav-label">📏 Radius:</span>
                            <span class="nav-value">${f}</span>
                        </div>
                        <div class="nav-detail-row">
                            <span class="nav-label">⚖️ Mass:</span>
                            <span class="nav-value">${g}</span>
                        </div>
                        <div class="nav-detail-row">
                            <span class="nav-label">🌫️ Atmosphere:</span>
                            <span class="nav-value nav-value-small">${u}</span>
                        </div>
                        <div class="nav-detail-row">
                            <span class="nav-label">🪨 Material:</span>
                            <span class="nav-value nav-value-small">${d}</span>
                        </div>
                        
                        <div class="nav-metrics">
                            <div class="nav-metric">
                                <span class="nav-metric-label">Habitability</span>
                                <div class="nav-metric-bar ${_}">
                                    <div class="nav-metric-fill" style="width: ${l}%"></div>
                                </div>
                                <span class="nav-metric-value ${_}">${l}%</span>
                            </div>
                            <div class="nav-metric">
                                <span class="nav-metric-label">Toxicity</span>
                                <div class="nav-metric-bar toxicity">
                                    <div class="nav-metric-fill" style="width: ${c}%"></div>
                                </div>
                                <span class="nav-metric-value toxicity">${c}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            `}).join(""),e.querySelectorAll(".nav-go-btn").forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation();const o=r.dataset.planetName,l=this.dataService.getPlanetByName(o);l&&this.onPlanetSelect&&this.onPlanetSelect(l)})}),this.updatePagination()}updatePagination(){const e=Math.ceil(this.filteredPlanets.length/this.planetsPerPage),t=document.getElementById("nav-page-info"),n=document.getElementById("nav-prev"),i=document.getElementById("nav-next"),r=this.currentPage*this.planetsPerPage+1,a=Math.min((this.currentPage+1)*this.planetsPerPage,this.filteredPlanets.length);t.textContent=`${r}-${a} of ${this.filteredPlanets.length} planets`,n.disabled=this.currentPage===0,i.disabled=this.currentPage>=e-1}prevPage(){this.currentPage>0&&(this.currentPage--,this.renderPlanetList())}nextPage(){const e=Math.ceil(this.filteredPlanets.length/this.planetsPerPage);this.currentPage<e-1&&(this.currentPage++,this.renderPlanetList())}toggle(){this.container.classList.toggle("minimized");const e=document.getElementById("nav-toggle");this.container.classList.contains("minimized")?e.textContent="▶ Show":e.textContent="◀ Minimize"}show(){this.container.classList.remove("minimized"),document.getElementById("nav-toggle").textContent="◀ Minimize"}hide(){this.container.classList.add("minimized"),document.getElementById("nav-toggle").textContent="▶ Show"}dispose(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)}}class LM{constructor(e,t,n){this.camera=e,this.planets=t,this.dataService=n,this.raycaster=null,this.mouse={x:0,y:0},this.hoveredPlanet=null,this.infoPanel=null,this.init()}init(){typeof SS<"u"&&(this.raycaster=new Eu,this.raycaster.params.Points.threshold=5),this.createInfoPanel(),this.setupMouseTracking()}createInfoPanel(){this.infoPanel=document.createElement("div"),this.infoPanel.id="planet-hover-info",this.infoPanel.className="planet-hover-info hidden",this.infoPanel.innerHTML=`
            <div class="hover-header"></div>
            <div class="hover-content"></div>
        `,document.body.appendChild(this.infoPanel)}setupMouseTracking(){window.addEventListener("mousemove",e=>{e.target.tagName==="CANVAS"?(this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.infoPanel.style.left=`${e.clientX+20}px`,this.infoPanel.style.top=`${e.clientY-20}px`,this.checkHover()):this.hideInfo()})}async checkHover(){if(!this.raycaster||!this.camera)return;this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.planets.map(n=>n.mesh),t=this.raycaster.intersectObjects(e,!0);if(t.length>0){const n=t[0].object,i=this.planets.find(r=>r.mesh===n||r.group===n||r.group&&r.group.children.includes(n));if(i&&i.config){const r=this.dataService?this.dataService.getPlanetByName(i.config.name):null;r?this.showEnrichedInfo(r):this.showBasicInfo(i.config),this.hoveredPlanet=i}}else this.hoveredPlanet&&(this.hideInfo(),this.hoveredPlanet=null)}showBasicInfo(e){var i,r,a;const t=this.infoPanel.querySelector(".hover-header"),n=this.infoPanel.querySelector(".hover-content");t.textContent=e.name||"Unknown Planet",n.innerHTML=`
            <div class="hover-row">
                <span>Distance:</span>
                <span>${((i=e.distance)==null?void 0:i.toFixed(1))||"Unknown"} AU</span>
            </div>
            <div class="hover-row">
                <span>Radius:</span>
                <span>${((r=e.radius)==null?void 0:r.toFixed(1))||"Unknown"} km</span>
            </div>
            <div class="hover-row">
                <span>Color:</span>
                <span style="color: #${((a=e.color)==null?void 0:a.toString(16).padStart(6,"0"))||"ffffff"}">●</span>
            </div>
        `,this.infoPanel.classList.remove("hidden")}showEnrichedInfo(e){const t=this.infoPanel.querySelector(".hover-header"),n=this.infoPanel.querySelector(".hover-content"),i=e.characteristics||{},r=e.sy_dist!==void 0&&e.sy_dist!==null?`${(e.sy_dist*3.262).toFixed(4)} ly`:"Unknown";t.textContent=e.pl_name||"Unknown",n.innerHTML=`
            <div class="hover-row">
                <span>Type:</span>
                <span>${i.radius_position||"Unknown"}</span>
            </div>
            <div class="hover-row">
                <span>Distance:</span>
                <span>${r} light-years</span>
            </div>
            <div class="hover-row">
                <span>Habitability:</span>
                <span class="${this.getHabitabilityClass(i.habitability_percent)}">
                    ${i.habitability_percent||0}%
                </span>
            </div>
            <div class="hover-row">
                <span>Atmosphere:</span>
                <span>${i.atmosphere_type||"Unknown"}</span>
            </div>
            <div class="hover-row">
                <span>Host Star:</span>
                <span>${e.hostname||"Unknown"}</span>
            </div>
            ${e.disc_year?`
                <div class="hover-row">
                    <span>Discovered:</span>
                    <span>${e.disc_year}</span>
                </div>
            `:""}
        `,this.infoPanel.classList.remove("hidden")}hideInfo(){this.infoPanel.classList.add("hidden")}getHabitabilityClass(e){return e?e>70?"value-high":e>40?"value-medium":"value-low":""}update(e){e&&(this.camera=e)}dispose(){this.hideInfo(),this.infoPanel&&this.infoPanel.parentNode&&this.infoPanel.parentNode.removeChild(this.infoPanel)}}class wm{constructor(e=null,t=null,n=null){this.openAIService=e,this.elevenLabsService=t,this.app=n,this.currentPlanet=null,this.currentTab="overview",this.audioElement=null,this.insightsAudioElement=null,this.isAudioPlaying=!1,this.isInsightsAudioPlaying=!1,this.cachedDescriptions=new Map,this.cachedInsights=new Map,this.cachedAudio=new Map,this.cachedInsightsAudio=new Map,this.chatHistory=[],this.init()}init(){this.createDialogElements(),this.attachEventListeners(),console.log("✓ Planet Exploration Dialog initialized")}createDialogElements(){this.overlay=document.createElement("div"),this.overlay.className="exploration-dialog-overlay",this.overlay.id="exploration-dialog-overlay",this.dialog=document.createElement("div"),this.dialog.className="planet-exploration-dialog",this.dialog.id="planet-exploration-dialog",this.dialog.innerHTML=`
            <div class="exploration-dialog-header">
                <h2 class="exploration-dialog-title" id="exploration-title">Planet Name</h2>
                <p class="exploration-dialog-subtitle" id="exploration-subtitle">Planet Type</p>
                <button class="exploration-dialog-close" id="exploration-close" aria-label="Close">×</button>
            </div>
            
            <div class="exploration-dialog-body">
                <div class="exploration-hero-container" id="exploration-hero">
                    <!-- Hero image set dynamically -->
                </div>
                
                <div class="exploration-tabs">
                    <button class="exploration-tab active" data-tab="overview">Overview</button>
                    <button class="exploration-tab" data-tab="characteristics">Characteristics</button>
                    <button class="exploration-tab" data-tab="ai-description">💬 AI Chat</button>
                </div>
                
                <div class="exploration-content">
                    <!-- Overview Tab -->
                    <div class="exploration-tab-panel active" id="panel-overview">
                        <div class="overview-grid" id="overview-grid">
                            <!-- Populated dynamically -->
                        </div>
                    </div>
                    
                    <!-- Characteristics Tab -->
                    <div class="exploration-tab-panel" id="panel-characteristics">
                        <div id="characteristics-content">
                            <!-- Populated dynamically -->
                        </div>
                    </div>
                    
                    <!-- AI Chat Tab -->
                    <div class="exploration-tab-panel" id="panel-ai-description">
                        <div class="ai-chat-section">
                            <h3 class="ai-chat-title">💬 Chat with AI</h3>
                            
                            <!-- Chat messages container -->
                            <div class="ai-chat-messages" id="ai-chat-messages">
                                <!-- Messages appear here -->
                            </div>
                            
                            <!-- Input container -->
                            <div class="ai-chat-input-container">
                                <input 
                                    type="text" 
                                    id="ai-chat-input" 
                                    class="ai-chat-input" 
                                    placeholder="💬 Ask a question..."
                                    maxlength="200"
                                />
                                <button class="ai-chat-send-btn" id="ai-chat-send-btn">
                                    <span class="btn-icon">🚀</span>
                                    <span class="btn-text">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="exploration-dialog-footer">
                <button class="exploration-btn" id="exploration-close-btn">Close</button>
            </div>
        `,document.body.appendChild(this.overlay),document.body.appendChild(this.dialog),this.elements={title:this.dialog.querySelector("#exploration-title"),subtitle:this.dialog.querySelector("#exploration-subtitle"),overviewGrid:this.dialog.querySelector("#overview-grid"),characteristicsContent:this.dialog.querySelector("#characteristics-content"),chatMessages:this.dialog.querySelector("#ai-chat-messages"),chatInput:this.dialog.querySelector("#ai-chat-input"),chatSendBtn:this.dialog.querySelector("#ai-chat-send-btn"),tabs:this.dialog.querySelectorAll(".exploration-tab"),tabPanels:this.dialog.querySelectorAll(".exploration-tab-panel"),heroContainer:document.getElementById("exploration-hero")};const t=["title","subtitle","overviewGrid","characteristicsContent","chatMessages","chatInput","chatSendBtn"].filter(n=>!this.elements[n]);t.length>0?(console.error("❌ Missing dialog elements:",t),console.error("Dialog HTML:",this.dialog.innerHTML.substring(0,500))):console.log("✅ All dialog elements cached successfully")}attachEventListeners(){const e=this.dialog.querySelector("#exploration-close"),t=this.dialog.querySelector("#exploration-close-btn");e?e.addEventListener("click",()=>this.hide()):console.warn("⚠️ Close button not found"),t?t.addEventListener("click",()=>this.hide()):console.warn("⚠️ Footer close button not found"),this.overlay&&this.overlay.addEventListener("click",()=>this.hide()),this.elements.tabs&&this.elements.tabs.length>0?(this.elements.tabs.forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.tab;console.log("🔄 Switching to tab:",i),this.switchTab(i)})}),console.log(`✅ Attached ${this.elements.tabs.length} tab listeners`)):console.error("❌ No tabs found for event listeners"),this.elements.chatSendBtn?(this.elements.chatSendBtn.addEventListener("click",()=>{console.log("🚀 Chat send button clicked"),this.handleChatSend()}),console.log("✅ Chat send button listener attached")):console.warn("⚠️ Chat send button not found"),this.elements.chatInput?(this.elements.chatInput.addEventListener("keypress",n=>{n.key==="Enter"&&(console.log("⏎ Enter key pressed in chat"),this.handleChatSend())}),console.log("✅ Chat input listener attached")):console.warn("⚠️ Chat input not found"),document.addEventListener("keydown",n=>{this.isVisible()&&n.key==="Escape"&&this.hide()})}async show(e){this.currentPlanet=e,this.app&&(this.app.controlsEnabled=!1),this.stopAudio(),this.stopInsightsAudio(),this.clearAllContent(),this.elements.title.textContent=e.pl_name||"Unknown Planet",this.elements.subtitle.textContent=this.getPlanetType(e),this.updateHeroImage(e),this.populateOverview(e),this.populateCharacteristics(e),this.initializeChatForPlanet(e),this.switchTab("overview"),this.overlay.classList.add("visible"),this.dialog.classList.add("visible")}clearAllContent(){this.elements.overviewGrid&&(this.elements.overviewGrid.innerHTML=""),this.elements.characteristicsContent&&(this.elements.characteristicsContent.innerHTML='<div class="loading">Loading characteristics...</div>'),this.elements.chatMessages&&(this.elements.chatMessages.innerHTML=""),this.elements.chatInput&&(this.elements.chatInput.value=""),this.chatHistory=[]}hide(){this.overlay.classList.remove("visible"),this.dialog.classList.remove("visible"),this.stopAudio(),this.stopInsightsAudio(),this.chatHistory=[],this.elements.chatMessages&&(this.elements.chatMessages.innerHTML=""),this.elements.chatInput&&(this.elements.chatInput.value=""),this.currentPlanet=null,this.app&&(this.app.controlsEnabled=!0)}handleChatSend(){if(!this.elements.chatInput){console.error("❌ Chat input element not found");return}if(!this.currentPlanet){console.error("❌ No current planet set");return}const e=this.elements.chatInput.value.trim();if(!e){console.log("Empty message, ignoring");return}console.log("📤 Sending chat message:",e),this.elements.chatInput.value="",this.sendChatMessage(e,this.currentPlanet)}initializeChatForPlanet(e){if(console.log("🔧 Initializing chat for planet:",e.pl_name),!this.elements.chatMessages){console.error("❌ Chat messages container not found");return}this.chatHistory=[],this.elements.chatMessages.innerHTML=`
            <div class="ai-chat-welcome">
                <span class="welcome-icon">👋</span>
                <p>Hi! I'm your AI assistant for <strong>${e.pl_name}</strong>.</p>
                <p>Ask me anything about this planet!</p>
            </div>
        `,this.elements.chatInput&&this.elements.chatSendBtn?this.openAIService?(this.elements.chatInput.disabled=!1,this.elements.chatSendBtn.disabled=!1,this.elements.chatInput.placeholder=`💬 Ask about ${e.pl_name}...`,console.log("✅ Chat interface enabled")):(this.elements.chatInput.disabled=!0,this.elements.chatSendBtn.disabled=!0,this.elements.chatInput.placeholder="AI not configured",this.elements.chatMessages.innerHTML+=`
                    <div class="ai-chat-message error-message">
                        <div class="message-avatar">⚠️</div>
                        <div class="message-content">OpenAI service is not configured. Please check your API key.</div>
                    </div>
                `,console.warn("⚠️ OpenAI service not available")):console.error("❌ Chat input or send button not found")}updateHeroImage(e){e.pl_name==="Earth"||e.name==="Earth"?(this.elements.heroContainer.innerHTML=`
                <img src="/textures/planets/earth/earth_day_2048.jpg" class="exploration-hero-img" alt="Planet Earth">
                <div class="exploration-hero-overlay"></div>
            `,this.elements.heroContainer.style.display="block"):(this.elements.heroContainer.innerHTML="",this.elements.heroContainer.style.display="none")}isVisible(){return this.dialog.classList.contains("visible")}switchTab(e){this.currentTab=e,this.elements.tabs.forEach(t=>{t.dataset.tab===e?t.classList.add("active"):t.classList.remove("active")}),this.elements.tabPanels.forEach(t=>{t.id===`panel-${e}`?t.classList.add("active"):t.classList.remove("active")})}populateOverview(e){if(!this.elements.overviewGrid){console.error("❌ Overview grid element not found");return}console.log("📊 Populating overview for:",e.pl_name);const t=e.characteristics||{},n=[{label:"Distance",value:e.sy_dist!==void 0&&e.sy_dist!==null?`${(e.sy_dist*3.262).toFixed(4)} light-years`:"Unknown",highlight:!1},{label:"Host Star",value:e.hostname||"Unknown",highlight:!1},{label:"Radius",value:e.pl_rade?`${e.pl_rade.toFixed(2)} Earth radii`:"Unknown",highlight:!1},{label:"Mass",value:e.pl_masse?`${e.pl_masse.toFixed(2)} Earth masses`:"Unknown",highlight:!1},{label:"Temperature",value:e.pl_eqt?`${e.pl_eqt} K`:"Unknown",highlight:!1},{label:"Discovery Year",value:e.disc_year>0?e.disc_year:"Ancient",highlight:!1},{label:"Habitability",value:t.habitability_percent!==void 0?`${t.habitability_percent}%`:"Unknown",highlight:t.habitability_percent>50?"highlight":t.habitability_percent>0?"warning":"danger"},{label:"Toxicity",value:t.toxicity_percent!==void 0?`${t.toxicity_percent}%`:"Unknown",highlight:t.toxicity_percent>70?"danger":t.toxicity_percent>30?"warning":"highlight"},{label:"Planet Type",value:t.radius_position||"Unknown",highlight:!1},{label:"Atmosphere",value:t.atmosphere_type||"Unknown",highlight:!1},{label:"Material",value:t.principal_material||"Unknown",highlight:!1},{label:"Orbit",value:t.orbit_type||"Unknown",highlight:!1}];this.elements.overviewGrid.innerHTML=n.map(i=>`
            <div class="overview-field">
                <div class="overview-field-label">${i.label}</div>
                <div class="overview-field-value ${i.highlight}">${i.value}</div>
            </div>
        `).join(""),console.log("✅ Overview populated successfully")}populateCharacteristics(e){var i,r,a,o,l,c;if(!this.elements.characteristicsContent){console.error("❌ Characteristics content element not found");return}console.log("📋 Populating characteristics for:",e.pl_name);const t=e.characteristics||{},n=[{title:"Orbital Data",items:[{label:"Orbital Period",value:e.pl_orbper?`${e.pl_orbper.toFixed(2)} days`:"N/A"},{label:"Semi-major Axis",value:e.pl_orbsmax?`${e.pl_orbsmax.toFixed(3)} AU`:"N/A"},{label:"Eccentricity",value:e.pl_orbeccen!==void 0?e.pl_orbeccen.toFixed(4):"N/A"},{label:"Inclination",value:e.pl_orbincl?`${e.pl_orbincl.toFixed(2)}°`:"N/A"},{label:"Orbit Classification",value:t.orbit_type||"Unknown"}]},{title:"Physical Properties",items:[{label:"Radius",value:e.pl_rade?`${e.pl_rade.toFixed(3)} R⊕`:"N/A"},{label:"Mass",value:e.pl_masse?`${e.pl_masse.toFixed(3)} M⊕`:"N/A"},{label:"Temperature",value:e.pl_eqt?`${e.pl_eqt} K`:"N/A"},{label:"Size Category",value:t.radius_position||"Unknown"},{label:"Principal Material",value:t.principal_material||"Unknown"}]},{title:"Habitability Assessment",items:[{label:"Habitability Score",value:t.habitability_percent!==void 0?`${t.habitability_percent}%`:"N/A"},{label:"Toxicity Level",value:t.toxicity_percent!==void 0?`${t.toxicity_percent}%`:"N/A"},{label:"Atmosphere Type",value:t.atmosphere_type||"Unknown"},{label:"Has Moons",value:(i=t.satellites)!=null&&i.has_satellites?"Yes":"No"},{label:"Moon Count",value:((r=t.satellites)==null?void 0:r.count)||0}]},{title:"3D Coordinates",items:[{label:"X Position",value:(a=t.coordinates_3d)!=null&&a.x_light_years?`${t.coordinates_3d.x_light_years.toFixed(2)} ly`:"N/A"},{label:"Y Position",value:(o=t.coordinates_3d)!=null&&o.y_light_years?`${t.coordinates_3d.y_light_years.toFixed(2)} ly`:"N/A"},{label:"Z Position",value:(l=t.coordinates_3d)!=null&&l.z_light_years?`${t.coordinates_3d.z_light_years.toFixed(2)} ly`:"N/A"},{label:"System",value:((c=t.coordinates_3d)==null?void 0:c.system)||"Unknown"}]},{title:"Discovery",items:[{label:"Discovery Method",value:e.discoverymethod||"Unknown"},{label:"Discovery Year",value:e.disc_year>0?e.disc_year:"Ancient"},{label:"Host Star",value:e.hostname||"Unknown"},{label:"Distance to Earth",value:e.sy_dist?`${(e.sy_dist*3.262).toFixed(2)} light-years`:"N/A"}]}];this.elements.characteristicsContent.innerHTML=n.map(h=>`
            <div class="characteristics-section">
                <h3 class="characteristics-title">${h.title}</h3>
                <div class="characteristics-grid">
                    ${h.items.map(u=>`
                        <div class="characteristic-item">
                            <div class="characteristic-label">${u.label}</div>
                            <div class="characteristic-value">${u.value}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join(""),console.log("✅ Characteristics populated successfully")}async loadAIDescription(e){const t=e.pl_name;if(this.cachedDescriptions.has(t)){this.displayAIDescription(this.cachedDescriptions.get(t));return}this.elements.aiDescriptionContainer.innerHTML=`
            <div class="ai-description-loading">
                <div class="ai-spinner"></div>
                <p>Generating questions...</p>
            </div>
        `;try{const n=await this.openAIService.generatePlanetDescription(e);this.cachedDescriptions.set(t,n),this.displayAIDescription(n),this.elevenLabsService&&this.loadAudio(n,t)}catch(n){console.error("Error generating AI description:",n),this.elements.aiDescriptionContainer.innerHTML=`
                <div class="ai-description-error">
                    <p>Failed to generate description. Please try again.</p>
                    <div class="ai-description-actions">
                        <button class="ai-regenerate-btn" onclick="window.planetExplorationDialog.loadAIDescription(window.planetExplorationDialog.currentPlanet)">
                            Retry
                        </button>
                    </div>
                </div>
            `}}displayAIDescription(e){this.elements.aiDescriptionContainer.innerHTML=`
            <div class="ai-description-text">${e}</div>
            <div class="ai-description-actions">
                <button class="ai-regenerate-btn" id="regenerate-description">
                    Regenerate Description
                </button>
            </div>
        `,document.getElementById("regenerate-description").addEventListener("click",()=>{this.currentPlanet&&(this.cachedDescriptions.delete(this.currentPlanet.pl_name),this.cachedAudio.delete(this.currentPlanet.pl_name),this.loadAIDescription(this.currentPlanet))})}async loadCharacteristicsInsights(e){const t=e.pl_name,n=document.getElementById("ai-insights-container"),i=document.getElementById("generate-insights-btn");if(!(!n||!i)){if(this.cachedInsights.has(t)){this.displayCharacteristicsInsights(this.cachedInsights.get(t),e);return}i.disabled=!0,i.innerHTML=`
            <span class="btn-icon">⏳</span>
            <span class="btn-text">Generating...</span>
        `,n.innerHTML=`
            <div class="ai-insights-loading">
                <div class="ai-spinner"></div>
                <p>Generating questions...</p>
            </div>
        `;try{const r=await this.openAIService.generateCharacteristicsInsights(e);this.cachedInsights.set(t,r),this.displayCharacteristicsInsights(r,e),i.disabled=!1,i.innerHTML=`
                <span class="btn-icon">🔄</span>
                <span class="btn-text">Regenerate Questions</span>
            `}catch(r){console.error("Error generating characteristics insights:",r),n.innerHTML=`
                <div class="ai-insights-error">
                    <p>❌ Failed to generate insights: ${r.message}</p>
                    <button class="ai-retry-btn" onclick="document.getElementById('generate-insights-btn').click()">
                        Try Again
                    </button>
                </div>
            `,i.disabled=!1,i.innerHTML=`
                <span class="btn-icon">✨</span>
                <span class="btn-text">Generate AI Insights</span>
            `}}}displayCharacteristicsInsights(e,t){const n=document.getElementById("ai-insights-container");n&&(n.innerHTML=`
            <div class="ai-insights-content">
                <div class="ai-insights-text">${e}</div>
                <div class="ai-insights-footer">
                    <small class="ai-insights-attribution">✨ Generated by AI • Based on NASA Exoplanet Archive data</small>
                </div>
            </div>
        `)}async loadAudio(e,t){if(this.cachedAudio.has(t)){this.setupAudioPlayer(this.cachedAudio.get(t));return}try{document.getElementById("audio-status").textContent="Generating audio...";const n=await this.elevenLabsService.textToSpeech(e),i=new Blob([n],{type:"audio/mpeg"}),r=URL.createObjectURL(i);this.cachedAudio.set(t,r),this.setupAudioPlayer(r)}catch(n){console.error("Error generating audio:",n),document.getElementById("audio-status").textContent="Audio generation failed"}}setupAudioPlayer(e){this.audioElement=new Audio(e),this.elements.audioPlayer.style.display="block",document.getElementById("audio-status").textContent="Ready to play",this.audioElement.addEventListener("ended",()=>{this.isAudioPlaying=!1,document.getElementById("audio-play").style.display="block",document.getElementById("audio-pause").style.display="none",document.getElementById("audio-status").textContent="Playback complete"})}playAudio(){this.audioElement&&(this.audioElement.play(),this.isAudioPlaying=!0,document.getElementById("audio-play").style.display="none",document.getElementById("audio-pause").style.display="block",document.getElementById("audio-status").textContent="Playing...")}pauseAudio(){this.audioElement&&(this.audioElement.pause(),this.isAudioPlaying=!1,document.getElementById("audio-play").style.display="block",document.getElementById("audio-pause").style.display="none",document.getElementById("audio-status").textContent="Paused")}stopAudio(){this.audioElement&&(this.audioElement.pause(),this.audioElement.currentTime=0,this.isAudioPlaying=!1,document.getElementById("audio-play").style.display="block",document.getElementById("audio-pause").style.display="none",document.getElementById("audio-status").textContent="Stopped")}async loadInsightsAudio(e,t){const n=`insights_${t}`;if(console.log("loadInsightsAudio called for:",t),this.cachedInsightsAudio.has(n)){console.log("Using cached insights audio"),this.setupInsightsAudioPlayer(this.cachedInsightsAudio.get(n));return}try{console.log("Calling ElevenLabs textToSpeech...");const i=await this.elevenLabsService.textToSpeech(e);console.log("Audio ArrayBuffer received:",i);const r=new Blob([i],{type:"audio/mpeg"}),a=URL.createObjectURL(r);console.log("Audio URL created:",a),this.cachedInsightsAudio.set(n,a),this.setupInsightsAudioPlayer(a)}catch(i){console.error("Error generating insights audio:",i);const r=document.getElementById("audio-loading-bar-container");r&&(r.innerHTML=`
                    <div class="audio-loading-error">
                        ❌ Audio generation failed: ${i.message}
                    </div>
                `)}}setupInsightsAudioPlayer(e){console.log("setupInsightsAudioPlayer called with URL:",e),this.insightsAudioElement=new Audio(e);const t=document.getElementById("audio-loading-bar-container");t&&(t.style.display="none");const n=document.getElementById("insights-audio-player"),i=document.getElementById("insights-audio-status");console.log("Player element found:",!!n),n&&(n.style.display="block"),i&&(i.textContent="Ready to play"),this.insightsAudioElement.addEventListener("ended",()=>{this.isInsightsAudioPlaying=!1;const r=document.getElementById("insights-audio-play"),a=document.getElementById("insights-audio-pause");r&&(r.style.display="block"),a&&(a.style.display="none"),i&&(i.textContent="Playback complete")})}playInsightsAudio(){if(this.insightsAudioElement){this.insightsAudioElement.play(),this.isInsightsAudioPlaying=!0;const e=document.getElementById("insights-audio-play"),t=document.getElementById("insights-audio-pause"),n=document.getElementById("insights-audio-status");e&&(e.style.display="none"),t&&(t.style.display="block"),n&&(n.textContent="Playing...")}}pauseInsightsAudio(){if(this.insightsAudioElement){this.insightsAudioElement.pause(),this.isInsightsAudioPlaying=!1;const e=document.getElementById("insights-audio-play"),t=document.getElementById("insights-audio-pause"),n=document.getElementById("insights-audio-status");e&&(e.style.display="block"),t&&(t.style.display="none"),n&&(n.textContent="Paused")}}stopInsightsAudio(){if(this.insightsAudioElement){this.insightsAudioElement.pause(),this.insightsAudioElement.currentTime=0,this.isInsightsAudioPlaying=!1;const e=document.getElementById("insights-audio-play"),t=document.getElementById("insights-audio-pause"),n=document.getElementById("insights-audio-status");e&&(e.style.display="block"),t&&(t.style.display="none"),n&&(n.textContent="Stopped")}}async sendChatMessage(e,t){if(!this.elements.chatMessages){console.error("Chat messages container not found!");return}console.log("📤 Sending:",e),this.addChatMessage("user",e);const n=this.addChatMessage("loading","Thinking...");this.elements.chatInput&&(this.elements.chatInput.disabled=!0),this.elements.chatSendBtn&&(this.elements.chatSendBtn.disabled=!0);try{const i=await this.openAIService.chatAboutPlanet(e,t,this.chatHistory);this.chatHistory.push({role:"user",content:e}),this.chatHistory.push({role:"assistant",content:i}),this.removeChatMessage(n),this.addChatMessage("ai",i)}catch(i){console.error("Chat error:",i),this.removeChatMessage(n),this.addChatMessage("error",`Sorry, I couldn't process that. ${i.message}`)}finally{this.elements.chatInput&&(this.elements.chatInput.disabled=!1),this.elements.chatSendBtn&&(this.elements.chatSendBtn.disabled=!1)}}addChatMessage(e,t){if(!this.elements.chatMessages)return;const n=`msg-${Date.now()}-${Math.random()}`,i=document.createElement("div");i.id=n,i.className=`ai-chat-message ${e}-message`;const r=e==="user"?"👤":e==="ai"?"🤖":e==="loading"?"⏳":"⚠️";return i.innerHTML=`
            <div class="message-avatar">${r}</div>
            <div class="message-content">${t}</div>
        `,this.elements.chatMessages.appendChild(i),this.elements.chatMessages.scrollTop=this.elements.chatMessages.scrollHeight,n}removeChatMessage(e){const t=document.getElementById(e);t&&t.remove()}getPlanetType(e){var t;return((t=e.characteristics)==null?void 0:t.radius_position)||"Unknown Type"}destroy(){this.stopAudio(),this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.dialog&&this.dialog.parentNode&&this.dialog.parentNode.removeChild(this.dialog),this.cachedDescriptions.clear(),this.cachedAudio.forEach(e=>URL.revokeObjectURL(e)),this.cachedAudio.clear()}}typeof window<"u"&&(window.PlanetExplorationDialog=wm);class DM{constructor(e){this.scene=e,this.targetSquare=null,this.targetedPlanet=null,this.animationPhase=0,this.createSquare()}createSquare(){this.targetSquare=new Yt,this.targetSquare.visible=!1,this.targetSquare.name="PlanetTargetingSquare";const e=1,t=.3,n=new la({color:65535,linewidth:3,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),i=new pt,r=new Float32Array([-e,e-t,0,-e,e,0,-e,e,0,-e+t,e,0,e-t,e,0,e,e,0,e,e,0,e,e-t,0,e,-e+t,0,e,-e,0,e,-e,0,e-t,-e,0,-e+t,-e,0,-e,-e,0,-e,-e,0,-e,-e+t,0]);i.setAttribute("position",new ut(r,3)),this.cornerBrackets=new qr(i,n),this.targetSquare.add(this.cornerBrackets);const a=new ua(e*1.1,e*1.15,32),o=new on({color:65535,transparent:!0,opacity:.3,side:_n,depthTest:!0,depthWrite:!1});this.outerRing=new rt(a,o),this.targetSquare.add(this.outerRing);const l=new pt,c=.15,h=new Float32Array([-c,0,0,c,0,0,0,-c,0,0,c,0]);l.setAttribute("position",new ut(h,3)),this.centerCross=new qr(l,n.clone()),this.centerCross.material.linewidth=3,this.targetSquare.add(this.centerCross);const u=new pt,d=new Float32Array([-e*.8,e*.5,0,e*.8,e*.5,0,-e*.8,0,0,e*.8,0,0,-e*.8,-e*.5,0,e*.8,-e*.5,0]);u.setAttribute("position",new ut(d,3)),this.scanLines=new qr(u,n.clone()),this.scanLines.material.opacity=.4,this.targetSquare.add(this.scanLines),this.scene.add(this.targetSquare)}target(e,t=null,n=null){if(console.log("🎯 target() called with:",{mesh:e==null?void 0:e.type,planetName:t==null?void 0:t.pl_name,hasParentGroup:!!n}),!e){console.warn("⚠️ No planetMesh provided to target()"),this.hide();return}this.targetedPlanet=e,this.planetData=t,this.parentGroup=n;const i=this.getPlanetRadius(e),r=i*3,a=new P;if(e.getWorldPosition(a),this.targetSquare.position.copy(a),console.log("🎯 Positioning square at:",a),console.log("🎯 Planet radius:",i,"Square size:",r),n&&n.scale){const o=n.scale.x;this.targetSquare.scale.setScalar(r*o),console.log("🎯 Using parent group scale:",o,"Final scale:",r*o)}else this.targetSquare.scale.setScalar(r),console.log("🎯 No parent group, scale:",r);this.targetSquare.visible=!0,this.animationPhase=0,console.log("✅ Target square now visible:",this.targetSquare.visible),console.log("✅ Target square in scene:",this.scene.children.includes(this.targetSquare))}getPlanetRadius(e){return e.geometry&&e.geometry.boundingSphere?(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),e.geometry.boundingSphere.radius*e.scale.x):e.scale.x||1}update(e){if(!this.targetSquare.visible||!this.targetedPlanet)return;const t=new P;this.targetedPlanet.getWorldPosition(t),this.targetSquare.position.copy(t),e&&this.targetSquare.quaternion.copy(e.quaternion),this.animationPhase+=.05;const n=Math.sin(this.animationPhase)*.5+.5;this.cornerBrackets&&(this.cornerBrackets.material.opacity=.7+n*.3),this.outerRing&&(this.outerRing.rotation.z+=.01,this.outerRing.material.opacity=.2+n*.2),this.centerCross&&(this.centerCross.material.opacity=.8+n*.2,this.centerCross.scale.setScalar(.9+n*.2)),this.scanLines&&(this.scanLines.material.opacity=.3+n*.3,this.scanLines.position.y=Math.sin(this.animationPhase*2)*.1),this.cornerBrackets&&(this.cornerBrackets.rotation.z+=.005)}hide(){this.targetSquare&&(this.targetSquare.visible=!1),this.targetedPlanet=null,this.planetData=null}isTargeting(){return this.targetSquare&&this.targetSquare.visible}dispose(){this.targetSquare&&(this.targetSquare.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.scene.remove(this.targetSquare))}}class NM{constructor(e,t){this.dataService=e,this.exoplanetField=t,this.lastClosestPlanet=null,this.updateThrottle=500,this.lastUpdateTime=0,this.searchRadius=5e6}getClosestPlanet(e){var c;const t=Date.now();if(t-this.lastUpdateTime<this.updateThrottle)return this.lastClosestPlanet;this.lastUpdateTime=t;const n=this.dataService.getAllPlanets();if(!n||n.length===0)return null;let i=null,r=1/0,a=null,o=null;const l=1e4;for(const h of n){let u;const d=h.hostname==="Sun";if((c=h.characteristics)!=null&&c.coordinates_3d){const g=h.characteristics.coordinates_3d;u=new P(g.x_light_years*10*l,g.y_light_years*10*l,g.z_light_years*10*l),console.log(`📍 ${h.pl_name} using coordinates_3d:`,g.x_light_years,g.y_light_years,g.z_light_years)}else if(d&&h.position)u=new P(h.position.x*10*l,h.position.y*10*l,h.position.z*10*l),console.log(`📍 ${h.pl_name} using position (fallback):`,h.position.x,h.position.y,h.position.z);else{console.warn("⚠️ Planet missing both coordinates_3d AND position:",h.pl_name);continue}const f=e.distanceTo(u);if(f<this.searchRadius&&f<r){r=f,i=h,a=u;let g=null;this.exoplanetField&&this.exoplanetField.meshGroup&&(this.exoplanetField.meshGroup.traverse(_=>{_.isMesh&&_.userData&&_.userData.planetData&&_.userData.planetData.pl_name===h.pl_name&&(g=_)}),g?console.log(`✅ Found mesh for ${h.pl_name}`):console.warn(`❌ Mesh NOT found for ${h.pl_name}`)),o=g}}return i?(console.log(`🎯 Closest planet: ${i.pl_name} (${(r/1e4).toFixed(2)} scaled units) - hasMesh: ${!!o}`),this.lastClosestPlanet={planet:i,distance:r,worldPosition:a,mesh:o},this.lastClosestPlanet):(this.lastClosestPlanet=null,null)}hasClosestPlanetChanged(e){return!this.lastClosestPlanet&&!e?!1:!this.lastClosestPlanet||!e?!0:this.lastClosestPlanet.planet.pl_name!==e.planet.pl_name}reset(){this.lastClosestPlanet=null}}class UM{constructor(e,t){this.openAIService=e,this.elevenLabsService=t,this.textCache=new Map,this.audioCache=new Map,this.isGenerating=!1,this.queue=[]}async generateNarration(e){const t=e.pl_name||"Unknown Planet";if(console.log(`🎙️ Generating narration for ${t}...`),this.textCache.has(t)&&this.audioCache.has(t))return console.log(`✅ Using cached narration for ${t}`),{text:this.textCache.get(t),audio:this.audioCache.get(t)};try{console.log("📝 Step 1: Generating text description...");const n=await this.generateDescription(e);this.textCache.set(t,n),console.log(`✅ Text generated: "${n.substring(0,60)}..."`);let i=null;return this.elevenLabsService?(console.log("🎤 Step 2: Generating audio narration..."),i=await this.generateAudio(n),i?(this.audioCache.set(t,i),console.log("✅ Audio cached successfully")):console.log("⚠️ Continuing without audio")):console.log("ℹ️ ElevenLabs not configured - text-only mode"),console.log(`✅ Narration ready for ${t}`),{text:n,audio:i}}catch(n){throw console.error("❌ Narration generation failed:",n),n}}async generateDescription(e){if(console.log("🤖 generateDescription called for",e.pl_name),!this.openAIService)return console.log("⚠️ No OpenAI service, using fallback"),this.generateFallbackDescription(e);const t=e.pl_name||"Unknown Planet",n=e.characteristics||{},i=n.radius_position||"Unknown type",r=e.sy_dist?`${(e.sy_dist*3.26156).toFixed(2)} light years`:"unknown distance",a=n.habitability_percent||0,o=n.principal_material||"unknown composition",l=n.atmosphere_type||"unknown atmosphere",u=`You are SpAIce, an enthusiastic AI space guide. Create a brief, engaging 2-3 sentence narration about this ${e.hostname==="Sun"||e.isSolar===!0?"planet in our Solar System":"exoplanet"} for a space explorer who just approached it:

Planet: ${t}
Type: ${i}
Distance from Earth: ${r}
Habitability: ${a}%
Composition: ${o}
Atmosphere: ${l}

Make it sound like a friendly documentary narrator - informative but captivating. Focus on the most interesting characteristics. Keep it under 50 words.`;try{console.log("📡 Calling OpenAI...");const d=await this.openAIService.generateCompletion(u);return console.log("✅ OpenAI response received"),d.trim()}catch(d){return console.error("❌ OpenAI call failed:",d),this.generateFallbackDescription(e)}}generateFallbackDescription(e){const t=e.pl_name||"Unknown Planet",n=e.characteristics||{},i=n.radius_position||"exoplanet",r=e.sy_dist?`${(e.sy_dist*3.26156).toFixed(2)} light years from Earth`:"an unknown distance away",a=n.habitability_percent||0;if(e.hostname==="Sun"||e.isSolar===!0){let c=`${t}, a planet in our Solar System. `;return a>70?c+="This world shows promising signs of habitability with conditions that could support life.":a>40?c+="Conditions here are challenging, but not impossible for hardy organisms.":c+="A fascinating world that has captivated human imagination for millennia.",c}let l=`${t}, a ${i}, located ${r}. `;return a>70?l+="This world shows promising signs of habitability with conditions that could support life.":a>40?l+="Conditions here are challenging, but not impossible for hardy organisms.":l+="A harsh environment where survival would be extremely difficult.",l}async generateAudio(e){if(!this.elevenLabsService)return console.warn("⚠️ Eleven Labs not configured, skipping audio"),null;console.log("🎤 Generating audio with ElevenLabs..."),console.log(`📝 Text length: ${e.length} characters`);try{const t=await this.elevenLabsService.textToSpeech(e);return t?(console.log(`✅ Audio generated: ${t.size} bytes (${(t.size/1024).toFixed(2)} KB)`),t):(console.warn("⚠️ ElevenLabs returned no audio data"),null)}catch(t){return console.error("❌ Audio generation failed:",t),console.error("Error details:",t.message),null}}clearCache(){this.textCache.clear(),this.audioCache.clear(),console.log("🗑️ Narration cache cleared")}getCacheStats(){return{textCached:this.textCache.size,audioCached:this.audioCache.size}}}class FM{constructor(e=null){this.narrationService=e,this.isVisible=!1,this.audioElement=null,this.currentPlanet=null,this.typewriterInterval=null,this.chatHistory=[],this.createDialog(),this.attachEventListeners()}createDialog(){this.container=document.createElement("div"),this.container.id="narrator-dialog",this.container.className="narrator-dialog",this.container.innerHTML=`
            <div class="narrator-content">
                <!-- Loading Screen -->
                <div class="spaice-loading-overlay" id="spaice-loading">
                    <div class="spaice-loading-content">
                        <div class="chatbot-face-large">
                            <div class="face-inner">
                                <div class="eye eye-left">
                                    <div class="pupil"></div>
                                </div>
                                <div class="eye eye-right">
                                    <div class="pupil"></div>
                                </div>
                                <div class="mouth mouth-closed">
                                    <div class="mouth-line-closed"></div>
                                </div>
                                <div class="antenna">
                                    <div class="antenna-tip"></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading-text">SpAIce is thinking...</div>
                        <div class="loading-dots">
                            <span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                </div>
                
                <div class="narrator-header">
                    <div class="chatbot-face-container">
                        <div class="chatbot-face" id="chatbot-face">
                            <div class="face-inner">
                                <div class="eye eye-left">
                                    <div class="pupil"></div>
                                </div>
                                <div class="eye eye-right">
                                    <div class="pupil"></div>
                                </div>
                                <div class="mouth">
                                    <div class="mouth-line"></div>
                                </div>
                                <div class="antenna">
                                    <div class="antenna-tip"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="narrator-info">
                        <div class="narrator-planet-name" id="narrator-planet-name">Planet Name</div>
                        <div class="narrator-subtitle">SpAIce - Your AI Guide</div>
                    </div>
                    <button class="narrator-close" id="narrator-close" title="Close (Esc)">×</button>
                </div>
                
                <div class="narrator-body">
                    <div class="narrator-narration-section">
                        <div class="narrator-text" id="narrator-text">
                            Loading narration...
                        </div>
                        
                        <div class="narrator-audio-indicator" id="narrator-audio-indicator">
                            <div class="audio-wave">
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <span class="audio-status">🔊 SpAIce is speaking...</span>
                        </div>
                    </div>
                    
                    <!-- Chat Section -->
                    <div class="narrator-chat-section" id="narrator-chat-section">
                        <div class="narrator-chat-header">
                            <span class="chat-header-icon">💬</span>
                            <span>Ask SpAIce about this planet</span>
                        </div>
                        <div class="narrator-chat-messages" id="narrator-chat-messages">
                            <!-- Messages appear here -->
                        </div>
                        <div class="narrator-chat-input-wrapper">
                            <input 
                                type="text" 
                                id="narrator-chat-input" 
                                class="narrator-chat-input" 
                                placeholder="Ask SpAIce anything..."
                                maxlength="200"
                            />
                            <button class="narrator-chat-send" id="narrator-chat-send" title="Send (Enter)">
                                <span class="send-icon">➤</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="narrator-footer">
                    <button class="narrator-action-btn" id="narrator-skip">Skip Audio</button>
                    <button class="narrator-action-btn secondary" id="narrator-minimize">Minimize</button>
                </div>
            </div>
        `,document.body.appendChild(this.container),this.elements={planetName:document.getElementById("narrator-planet-name"),text:document.getElementById("narrator-text"),audioIndicator:document.getElementById("narrator-audio-indicator"),closeBtn:document.getElementById("narrator-close"),skipBtn:document.getElementById("narrator-skip"),minimizeBtn:document.getElementById("narrator-minimize"),chatSection:document.getElementById("narrator-chat-section"),chatMessages:document.getElementById("narrator-chat-messages"),chatInput:document.getElementById("narrator-chat-input"),chatSend:document.getElementById("narrator-chat-send"),chatbotFace:document.getElementById("chatbot-face"),loadingOverlay:document.getElementById("spaice-loading")}}attachEventListeners(){this.elements.closeBtn.addEventListener("click",()=>{console.log("❌ Close button clicked"),this.hide()}),this.elements.skipBtn.addEventListener("click",()=>{console.log("⏭️ Skip button clicked"),this.skip()}),this.elements.minimizeBtn.addEventListener("click",()=>{console.log("🔽 Minimize button clicked"),this.minimize()}),this.elements.chatSend.addEventListener("click",()=>this.handleChatSend()),this.elements.chatInput.addEventListener("keypress",e=>{e.key==="Enter"&&this.handleChatSend()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isVisible&&(console.log("⌨️ ESC pressed - closing dialog"),this.hide())}),console.log("✅ NarratorDialog event listeners attached")}showLoading(){this.elements.loadingOverlay.style.display="flex"}hideLoading(){this.elements.loadingOverlay.style.display="none"}async show(e,t,n=null){console.log("🎬 NarratorDialog.show() called with:",{planet:e==null?void 0:e.pl_name,textLength:t==null?void 0:t.length,hasAudio:!!n}),this.currentPlanet=e,this.chatHistory=[],this.elements.chatMessages.innerHTML="",this.narrationService&&this.narrationService.openAIService?(this.elements.chatInput.disabled=!1,this.elements.chatSend.disabled=!1):(this.elements.chatInput.disabled=!0,this.elements.chatSend.disabled=!0,this.elements.chatInput.placeholder="AI not configured"),this.elements.planetName.textContent=e.pl_name||"Unknown Planet",console.log("✅ Planet name set to:",this.elements.planetName.textContent),this.elements.text.textContent="",console.log("👁️ Adding visible class to container..."),this.container.classList.add("visible"),this.container.classList.remove("minimized"),this.isVisible=!0,this.hideLoading(),console.log("📝 Container classes:",this.container.className),console.log("📏 Container computed display:",window.getComputedStyle(this.container).display),this.typewriterEffect(t),n?setTimeout(()=>{this.playAudio(n)},500):this.elements.audioIndicator.style.display="none",console.log("✅ show() method completed")}typewriterEffect(e,t=30){let n=0;this.elements.text.textContent="",this.typewriterInterval&&clearInterval(this.typewriterInterval),this.typewriterInterval=setInterval(()=>{n<e.length?(this.elements.text.textContent+=e.charAt(n),n++):(clearInterval(this.typewriterInterval),this.typewriterInterval=null)},t)}async playAudio(e){this.stopAudio(),this.elements.audioIndicator.style.display="flex",this.elements.chatbotFace&&this.elements.chatbotFace.classList.add("talking"),this.audioElement=new Audio,this.audioElement.src=URL.createObjectURL(e),this.audioElement.addEventListener("ended",()=>{console.log("🎙️ Audio finished"),this.elements.audioIndicator.style.display="none",this.elements.chatbotFace&&this.elements.chatbotFace.classList.remove("talking"),setTimeout(()=>{this.isVisible&&this.hide()},2e3)}),this.audioElement.addEventListener("error",t=>{console.error("❌ Audio playback error:",t),this.elements.audioIndicator.style.display="none"});try{await this.audioElement.play(),console.log("🔊 Audio playing")}catch(t){console.error("❌ Failed to play audio:",t),this.elements.audioIndicator.style.display="none"}}stopAudio(){this.audioElement&&(this.audioElement.pause(),this.audioElement.currentTime=0,this.audioElement.src&&URL.revokeObjectURL(this.audioElement.src),this.audioElement=null)}skip(){this.typewriterInterval&&(clearInterval(this.typewriterInterval),this.typewriterInterval=null),this.stopAudio(),this.hide()}hide(){this.container.classList.remove("visible"),this.container.classList.remove("minimized"),this.isVisible=!1,this.typewriterInterval&&(clearInterval(this.typewriterInterval),this.typewriterInterval=null),this.stopAudio(),this.hideLoading(),this.currentPlanet=null,this.chatHistory=[],this.elements.chatMessages.innerHTML="",this.elements.chatInput.value="",console.log("✅ NarratorDialog closed and cleaned up")}minimize(){this.container.classList.toggle("minimized")}async handleChatSend(){const e=this.elements.chatInput,t=e.value.trim();if(!(!t||!this.currentPlanet)){e.value="",this.addChatMessage("user",t),this.showLoading(),this.elements.chatInput.disabled=!0,this.elements.chatSend.disabled=!0;try{const n=await this.askQuestion(t);this.hideLoading(),this.elements.chatInput.disabled=!1,this.elements.chatSend.disabled=!1,this.addChatMessage("assistant",n)}catch(n){console.error("❌ Chat error:",n),this.hideLoading(),this.elements.chatInput.disabled=!1,this.elements.chatSend.disabled=!1,this.addChatMessage("assistant","Sorry, I encountered an error. Please try again.")}this.elements.chatInput.focus()}}async askQuestion(e){if(!this.narrationService||!this.narrationService.openAIService)return"AI service is not available.";const t=this.currentPlanet,n=t.characteristics||{},i=`You are SpAIce, an enthusiastic AI space guide. Answer this question about ${t.pl_name}:

Question: ${e}

Planet Information:
- Type: ${n.radius_position||"Unknown"}
- Distance: ${t.sy_dist?(t.sy_dist*3.26156).toFixed(2)+" light years":"Unknown"}
- Habitability: ${n.habitability_percent||0}%
- Atmosphere: ${n.atmosphere_type||"Unknown"}
- Composition: ${n.principal_material||"Unknown"}
- Radius: ${t.pl_rade||"Unknown"} Earth radii
- Mass: ${t.pl_bmasse||"Unknown"} Earth masses

Provide a concise, friendly answer (2-3 sentences). Be enthusiastic and educational.`;try{return(await this.narrationService.openAIService.generateCompletion(i)).trim()}catch(r){throw console.error("❌ OpenAI error:",r),r}}addChatMessage(e,t,n=!1){const i=`msg-${Date.now()}-${Math.random()}`,r=document.createElement("div");r.className=`narrator-chat-message ${e}`,r.id=i,n&&r.classList.add("loading");const a=e==="user"?"👤":"🤖";return r.innerHTML=`
            <div class="message-icon">${a}</div>
            <div class="message-text">${t}</div>
        `,this.elements.chatMessages.appendChild(r),this.elements.chatMessages.scrollTop=this.elements.chatMessages.scrollHeight,i}removeChatMessage(e){const t=document.getElementById(e);t&&t.remove()}isShowing(){return this.isVisible}}function Ue(s,e,t,n,i){if(typeof e=="function"?s!==e||!0:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(s,t),t}function z(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)}let Em=function(){const{crypto:s}=globalThis;if(s!=null&&s.randomUUID)return Em=s.randomUUID.bind(s),s.randomUUID();const e=new Uint8Array(1),t=s?()=>s.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,n=>(+n^t()&15>>+n/4).toString(16))};function Ph(s){return typeof s=="object"&&s!==null&&("name"in s&&s.name==="AbortError"||"message"in s&&String(s.message).includes("FetchRequestCanceledException"))}const Ih=s=>{if(s instanceof Error)return s;if(typeof s=="object"&&s!==null){try{if(Object.prototype.toString.call(s)==="[object Error]"){const e=new Error(s.message,s.cause?{cause:s.cause}:{});return s.stack&&(e.stack=s.stack),s.cause&&!e.cause&&(e.cause=s.cause),s.name&&(e.name=s.name),e}}catch{}try{return new Error(JSON.stringify(s))}catch{}}return new Error(s)};class Pe extends Error{}class Xt extends Pe{constructor(e,t,n,i){super(`${Xt.makeMessage(e,t,n)}`),this.status=e,this.headers=i,this.requestID=i==null?void 0:i.get("x-request-id"),this.error=t;const r=t;this.code=r==null?void 0:r.code,this.param=r==null?void 0:r.param,this.type=r==null?void 0:r.type}static makeMessage(e,t,n){const i=t!=null&&t.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):n;return e&&i?`${e} ${i}`:e?`${e} status code (no body)`:i||"(no status code or body)"}static generate(e,t,n,i){if(!e||!i)return new tc({message:n,cause:Ih(t)});const r=t==null?void 0:t.error;return e===400?new Tm(e,r,n,i):e===401?new Am(e,r,n,i):e===403?new Cm(e,r,n,i):e===404?new Rm(e,r,n,i):e===409?new Pm(e,r,n,i):e===422?new Im(e,r,n,i):e===429?new Lm(e,r,n,i):e>=500?new Dm(e,r,n,i):new Xt(e,r,n,i)}}class An extends Xt{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class tc extends Xt{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}}class Cu extends tc{constructor({message:e}={}){super({message:e??"Request timed out."})}}class Tm extends Xt{}class Am extends Xt{}class Cm extends Xt{}class Rm extends Xt{}class Pm extends Xt{}class Im extends Xt{}class Lm extends Xt{}class Dm extends Xt{}class Nm extends Pe{constructor(){super("Could not parse response content as the length limit was reached")}}class Um extends Pe{constructor(){super("Could not parse response content as the request was rejected by the content filter")}}class Rr extends Error{constructor(e){super(e)}}const OM=/^[a-z][a-z0-9+.-]*:/i,BM=s=>OM.test(s);let rn=s=>(rn=Array.isArray,rn(s)),Ef=rn;function Fm(s){return typeof s!="object"?{}:s??{}}function kM(s){if(!s)return!0;for(const e in s)return!1;return!0}function zM(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function nh(s){return s!=null&&typeof s=="object"&&!Array.isArray(s)}const VM=(s,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new Pe(`${s} must be an integer`);if(e<0)throw new Pe(`${s} must be a positive integer`);return e},HM=s=>{try{return JSON.parse(s)}catch{return}},da=s=>new Promise(e=>setTimeout(e,s)),Os="6.17.0",GM=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function WM(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const $M=()=>{var t;const s=WM();if(s==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Os,"X-Stainless-OS":Af(Deno.build.os),"X-Stainless-Arch":Tf(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:((t=Deno.version)==null?void 0:t.deno)??"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Os,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(s==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Os,"X-Stainless-OS":Af(globalThis.process.platform??"unknown"),"X-Stainless-Arch":Tf(globalThis.process.arch??"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":globalThis.process.version??"unknown"};const e=XM();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Os,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Os,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function XM(){if(typeof navigator>"u"||!navigator)return null;const s=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:t}of s){const n=t.exec(navigator.userAgent);if(n){const i=n[1]||0,r=n[2]||0,a=n[3]||0;return{browser:e,version:`${i}.${r}.${a}`}}}return null}const Tf=s=>s==="x32"?"x32":s==="x86_64"||s==="x64"?"x64":s==="arm"?"arm":s==="aarch64"||s==="arm64"?"arm64":s?`other:${s}`:"unknown",Af=s=>(s=s.toLowerCase(),s.includes("ios")?"iOS":s==="android"?"Android":s==="darwin"?"MacOS":s==="win32"?"Windows":s==="freebsd"?"FreeBSD":s==="openbsd"?"OpenBSD":s==="linux"?"Linux":s?`Other:${s}`:"Unknown");let Cf;const qM=()=>Cf??(Cf=$M());function jM(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new OpenAI({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Om(...s){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...s)}function Bm(s){let e=Symbol.asyncIterator in s?s[Symbol.asyncIterator]():s[Symbol.iterator]();return Om({start(){},async pull(t){const{done:n,value:i}=await e.next();n?t.close():t.enqueue(i)},async cancel(){var t;await((t=e.return)==null?void 0:t.call(e))}})}function km(s){if(s[Symbol.asyncIterator])return s;const e=s.getReader();return{async next(){try{const t=await e.read();return t!=null&&t.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){const t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function YM(s){var n,i;if(s===null||typeof s!="object")return;if(s[Symbol.asyncIterator]){await((i=(n=s[Symbol.asyncIterator]()).return)==null?void 0:i.call(n));return}const e=s.getReader(),t=e.cancel();e.releaseLock(),await t}const KM=({headers:s,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)}),zm="RFC3986",Vm=s=>String(s),Rf={RFC1738:s=>String(s).replace(/%20/g,"+"),RFC3986:Vm},JM="RFC1738";let Lh=(s,e)=>(Lh=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),Lh(s,e));const Jn=(()=>{const s=[];for(let e=0;e<256;++e)s.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return s})(),ih=1024,ZM=(s,e,t,n,i)=>{if(s.length===0)return s;let r=s;if(typeof s=="symbol"?r=Symbol.prototype.toString.call(s):typeof s!="string"&&(r=String(s)),t==="iso-8859-1")return escape(r).replace(/%u[0-9a-f]{4}/gi,function(o){return"%26%23"+parseInt(o.slice(2),16)+"%3B"});let a="";for(let o=0;o<r.length;o+=ih){const l=r.length>=ih?r.slice(o,o+ih):r,c=[];for(let h=0;h<l.length;++h){let u=l.charCodeAt(h);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||i===JM&&(u===40||u===41)){c[c.length]=l.charAt(h);continue}if(u<128){c[c.length]=Jn[u];continue}if(u<2048){c[c.length]=Jn[192|u>>6]+Jn[128|u&63];continue}if(u<55296||u>=57344){c[c.length]=Jn[224|u>>12]+Jn[128|u>>6&63]+Jn[128|u&63];continue}h+=1,u=65536+((u&1023)<<10|l.charCodeAt(h)&1023),c[c.length]=Jn[240|u>>18]+Jn[128|u>>12&63]+Jn[128|u>>6&63]+Jn[128|u&63]}a+=c.join("")}return a};function QM(s){return!s||typeof s!="object"?!1:!!(s.constructor&&s.constructor.isBuffer&&s.constructor.isBuffer(s))}function Pf(s,e){if(rn(s)){const t=[];for(let n=0;n<s.length;n+=1)t.push(e(s[n]));return t}return e(s)}const Hm={brackets(s){return String(s)+"[]"},comma:"comma",indices(s,e){return String(s)+"["+e+"]"},repeat(s){return String(s)}},Gm=function(s,e){Array.prototype.push.apply(s,rn(e)?e:[e])};let If;const Ut={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:ZM,encodeValuesOnly:!1,format:zm,formatter:Vm,indices:!1,serializeDate(s){return(If??(If=Function.prototype.call.bind(Date.prototype.toISOString)))(s)},skipNulls:!1,strictNullHandling:!1};function ew(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s=="symbol"||typeof s=="bigint"}const sh={};function Wm(s,e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m,p){let b=s,w=p,x=0,E=!1;for(;(w=w.get(sh))!==void 0&&!E;){const S=w.get(s);if(x+=1,typeof S<"u"){if(S===x)throw new RangeError("Cyclic object value");E=!0}typeof w.get(sh)>"u"&&(x=0)}if(typeof c=="function"?b=c(e,b):b instanceof Date?b=d==null?void 0:d(b):t==="comma"&&rn(b)&&(b=Pf(b,function(S){return S instanceof Date?d==null?void 0:d(S):S})),b===null){if(r)return l&&!_?l(e,Ut.encoder,m,"key",f):e;b=""}if(ew(b)||QM(b)){if(l){const S=_?e:l(e,Ut.encoder,m,"key",f);return[(g==null?void 0:g(S))+"="+(g==null?void 0:g(l(b,Ut.encoder,m,"value",f)))]}return[(g==null?void 0:g(e))+"="+(g==null?void 0:g(String(b)))]}const A=[];if(typeof b>"u")return A;let T;if(t==="comma"&&rn(b))_&&l&&(b=Pf(b,l)),T=[{value:b.length>0?b.join(",")||null:void 0}];else if(rn(c))T=c;else{const S=Object.keys(b);T=h?S.sort(h):S}const L=o?String(e).replace(/\./g,"%2E"):String(e),y=n&&rn(b)&&b.length===1?L+"[]":L;if(i&&rn(b)&&b.length===0)return y+"[]";for(let S=0;S<T.length;++S){const R=T[S],F=typeof R=="object"&&typeof R.value<"u"?R.value:b[R];if(a&&F===null)continue;const B=u&&o?R.replace(/\./g,"%2E"):R,$=rn(b)?typeof t=="function"?t(y,B):y:y+(u?"."+B:"["+B+"]");p.set(s,x);const W=new WeakMap;W.set(sh,p),Gm(A,Wm(F,$,t,n,i,r,a,o,t==="comma"&&_&&rn(b)?null:l,c,h,u,d,f,g,_,m,W))}return A}function tw(s=Ut){if(typeof s.allowEmptyArrays<"u"&&typeof s.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof s.encodeDotInKeys<"u"&&typeof s.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(s.encoder!==null&&typeof s.encoder<"u"&&typeof s.encoder!="function")throw new TypeError("Encoder has to be a function.");const e=s.charset||Ut.charset;if(typeof s.charset<"u"&&s.charset!=="utf-8"&&s.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");let t=zm;if(typeof s.format<"u"){if(!Lh(Rf,s.format))throw new TypeError("Unknown format option provided.");t=s.format}const n=Rf[t];let i=Ut.filter;(typeof s.filter=="function"||rn(s.filter))&&(i=s.filter);let r;if(s.arrayFormat&&s.arrayFormat in Hm?r=s.arrayFormat:"indices"in s?r=s.indices?"indices":"repeat":r=Ut.arrayFormat,"commaRoundTrip"in s&&typeof s.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");const a=typeof s.allowDots>"u"?s.encodeDotInKeys?!0:Ut.allowDots:!!s.allowDots;return{addQueryPrefix:typeof s.addQueryPrefix=="boolean"?s.addQueryPrefix:Ut.addQueryPrefix,allowDots:a,allowEmptyArrays:typeof s.allowEmptyArrays=="boolean"?!!s.allowEmptyArrays:Ut.allowEmptyArrays,arrayFormat:r,charset:e,charsetSentinel:typeof s.charsetSentinel=="boolean"?s.charsetSentinel:Ut.charsetSentinel,commaRoundTrip:!!s.commaRoundTrip,delimiter:typeof s.delimiter>"u"?Ut.delimiter:s.delimiter,encode:typeof s.encode=="boolean"?s.encode:Ut.encode,encodeDotInKeys:typeof s.encodeDotInKeys=="boolean"?s.encodeDotInKeys:Ut.encodeDotInKeys,encoder:typeof s.encoder=="function"?s.encoder:Ut.encoder,encodeValuesOnly:typeof s.encodeValuesOnly=="boolean"?s.encodeValuesOnly:Ut.encodeValuesOnly,filter:i,format:t,formatter:n,serializeDate:typeof s.serializeDate=="function"?s.serializeDate:Ut.serializeDate,skipNulls:typeof s.skipNulls=="boolean"?s.skipNulls:Ut.skipNulls,sort:typeof s.sort=="function"?s.sort:null,strictNullHandling:typeof s.strictNullHandling=="boolean"?s.strictNullHandling:Ut.strictNullHandling}}function nw(s,e={}){let t=s;const n=tw(e);let i,r;typeof n.filter=="function"?(r=n.filter,t=r("",t)):rn(n.filter)&&(r=n.filter,i=r);const a=[];if(typeof t!="object"||t===null)return"";const o=Hm[n.arrayFormat],l=o==="comma"&&n.commaRoundTrip;i||(i=Object.keys(t)),n.sort&&i.sort(n.sort);const c=new WeakMap;for(let d=0;d<i.length;++d){const f=i[d];n.skipNulls&&t[f]===null||Gm(a,Wm(t[f],f,o,l,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,c))}const h=a.join(n.delimiter);let u=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?u+="utf8=%26%2310003%3B&":u+="utf8=%E2%9C%93&"),h.length>0?u+h:""}function iw(s){let e=0;for(const i of s)e+=i.length;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.length;return t}let Lf;function Ru(s){let e;return(Lf??(e=new globalThis.TextEncoder,Lf=e.encode.bind(e)))(s)}let Df;function Nf(s){let e;return(Df??(e=new globalThis.TextDecoder,Df=e.decode.bind(e)))(s)}var pn,mn;class nc{constructor(){pn.set(this,void 0),mn.set(this,void 0),Ue(this,pn,new Uint8Array),Ue(this,mn,null)}decode(e){if(e==null)return[];const t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Ru(e):e;Ue(this,pn,iw([z(this,pn,"f"),t]));const n=[];let i;for(;(i=sw(z(this,pn,"f"),z(this,mn,"f")))!=null;){if(i.carriage&&z(this,mn,"f")==null){Ue(this,mn,i.index);continue}if(z(this,mn,"f")!=null&&(i.index!==z(this,mn,"f")+1||i.carriage)){n.push(Nf(z(this,pn,"f").subarray(0,z(this,mn,"f")-1))),Ue(this,pn,z(this,pn,"f").subarray(z(this,mn,"f"))),Ue(this,mn,null);continue}const r=z(this,mn,"f")!==null?i.preceding-1:i.preceding,a=Nf(z(this,pn,"f").subarray(0,r));n.push(a),Ue(this,pn,z(this,pn,"f").subarray(i.index)),Ue(this,mn,null)}return n}flush(){return z(this,pn,"f").length?this.decode(`
`):[]}}pn=new WeakMap,mn=new WeakMap;nc.NEWLINE_CHARS=new Set([`
`,"\r"]);nc.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function sw(s,e){for(let i=e??0;i<s.length;i++){if(s[i]===10)return{preceding:i,index:i+1,carriage:!1};if(s[i]===13)return{preceding:i,index:i+1,carriage:!0}}return null}function rw(s){for(let n=0;n<s.length-1;n++){if(s[n]===10&&s[n+1]===10||s[n]===13&&s[n+1]===13)return n+2;if(s[n]===13&&s[n+1]===10&&n+3<s.length&&s[n+2]===13&&s[n+3]===10)return n+4}return-1}const gl={off:0,error:200,warn:300,info:400,debug:500},Uf=(s,e,t)=>{if(s){if(zM(gl,s))return s;Ht(t).warn(`${e} was set to ${JSON.stringify(s)}, expected one of ${JSON.stringify(Object.keys(gl))}`)}};function Pr(){}function qa(s,e,t){return!e||gl[s]>gl[t]?Pr:e[s].bind(e)}const aw={error:Pr,warn:Pr,info:Pr,debug:Pr};let Ff=new WeakMap;function Ht(s){const e=s.logger,t=s.logLevel??"off";if(!e)return aw;const n=Ff.get(e);if(n&&n[0]===t)return n[1];const i={error:qa("error",e,t),warn:qa("warn",e,t),info:qa("info",e,t),debug:qa("debug",e,t)};return Ff.set(e,[t,i]),i}const qi=s=>(s.options&&(s.options={...s.options},delete s.options.headers),s.headers&&(s.headers=Object.fromEntries((s.headers instanceof Headers?[...s.headers]:Object.entries(s.headers)).map(([e,t])=>[e,e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in s&&(s.retryOfRequestLogID&&(s.retryOf=s.retryOfRequestLogID),delete s.retryOfRequestLogID),s);var Tr;class ni{constructor(e,t,n){this.iterator=e,Tr.set(this,void 0),this.controller=t,Ue(this,Tr,n)}static fromSSEResponse(e,t,n){let i=!1;const r=n?Ht(n):console;async function*a(){if(i)throw new Pe("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let o=!1;try{for await(const l of ow(e,t))if(!o){if(l.data.startsWith("[DONE]")){o=!0;continue}if(l.event===null||!l.event.startsWith("thread.")){let c;try{c=JSON.parse(l.data)}catch(h){throw r.error("Could not parse message into JSON:",l.data),r.error("From chunk:",l.raw),h}if(c&&c.error)throw new Xt(void 0,c.error,void 0,e.headers);yield c}else{let c;try{c=JSON.parse(l.data)}catch(h){throw console.error("Could not parse message into JSON:",l.data),console.error("From chunk:",l.raw),h}if(l.event=="error")throw new Xt(void 0,c.error,c.message,void 0);yield{event:l.event,data:c}}}o=!0}catch(l){if(Ph(l))return;throw l}finally{o||t.abort()}}return new ni(a,t,n)}static fromReadableStream(e,t,n){let i=!1;async function*r(){const o=new nc,l=km(e);for await(const c of l)for(const h of o.decode(c))yield h;for(const c of o.flush())yield c}async function*a(){if(i)throw new Pe("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let o=!1;try{for await(const l of r())o||l&&(yield JSON.parse(l));o=!0}catch(l){if(Ph(l))return;throw l}finally{o||t.abort()}}return new ni(a,t,n)}[(Tr=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){const e=[],t=[],n=this.iterator(),i=r=>({next:()=>{if(r.length===0){const a=n.next();e.push(a),t.push(a)}return r.shift()}});return[new ni(()=>i(e),this.controller,z(this,Tr,"f")),new ni(()=>i(t),this.controller,z(this,Tr,"f"))]}toReadableStream(){const e=this;let t;return Om({async start(){t=e[Symbol.asyncIterator]()},async pull(n){try{const{value:i,done:r}=await t.next();if(r)return n.close();const a=Ru(JSON.stringify(i)+`
`);n.enqueue(a)}catch(i){n.error(i)}},async cancel(){var n;await((n=t.return)==null?void 0:n.call(t))}})}}async function*ow(s,e){if(!s.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Pe("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Pe("Attempted to iterate over a response with no body");const t=new cw,n=new nc,i=km(s.body);for await(const r of lw(i))for(const a of n.decode(r)){const o=t.decode(a);o&&(yield o)}for(const r of n.flush()){const a=t.decode(r);a&&(yield a)}}async function*lw(s){let e=new Uint8Array;for await(const t of s){if(t==null)continue;const n=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Ru(t):t;let i=new Uint8Array(e.length+n.length);i.set(e),i.set(n,e.length),e=i;let r;for(;(r=rw(e))!==-1;)yield e.slice(0,r),e=e.slice(r)}e.length>0&&(yield e)}class cw{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const r={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],r}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,n,i]=hw(e,":");return i.startsWith(" ")&&(i=i.substring(1)),t==="event"?this.event=i:t==="data"&&this.data.push(i),null}}function hw(s,e){const t=s.indexOf(e);return t!==-1?[s.substring(0,t),e,s.substring(t+e.length)]:[s,"",""]}async function $m(s,e){const{response:t,requestLogID:n,retryOfRequestLogID:i,startTime:r}=e,a=await(async()=>{var u;if(e.options.stream)return Ht(s).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller,s):ni.fromSSEResponse(t,e.controller,s);if(t.status===204)return null;if(e.options.__binaryResponse)return t;const o=t.headers.get("content-type"),l=(u=o==null?void 0:o.split(";")[0])==null?void 0:u.trim();if((l==null?void 0:l.includes("application/json"))||(l==null?void 0:l.endsWith("+json"))){const d=await t.json();return Xm(d,t)}return await t.text()})();return Ht(s).debug(`[${n}] response parsed`,qi({retryOfRequestLogID:i,url:t.url,status:t.status,body:a,durationMs:Date.now()-r})),a}function Xm(s,e){return!s||typeof s!="object"||Array.isArray(s)?s:Object.defineProperty(s,"_request_id",{value:e.headers.get("x-request-id"),enumerable:!1})}var Ir;class ic extends Promise{constructor(e,t,n=$m){super(i=>{i(null)}),this.responsePromise=t,this.parseResponse=n,Ir.set(this,void 0),Ue(this,Ir,e)}_thenUnwrap(e){return new ic(z(this,Ir,"f"),this.responsePromise,async(t,n)=>Xm(e(await this.parseResponse(t,n),n),n.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get("x-request-id")}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(z(this,Ir,"f"),e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}Ir=new WeakMap;var ja;class Pu{constructor(e,t,n,i){ja.set(this,void 0),Ue(this,ja,e),this.options=i,this.response=t,this.body=n}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){const e=this.nextPageRequestOptions();if(!e)throw new Pe("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await z(this,ja,"f").requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(ja=new WeakMap,Symbol.asyncIterator)](){for await(const e of this.iterPages())for(const t of e.getPaginatedItems())yield t}}class uw extends ic{constructor(e,t,n){super(e,t,async(i,r)=>new n(i,r.response,await $m(i,r),r.options))}async*[Symbol.asyncIterator](){const e=await this;for await(const t of e)yield t}}class sc extends Pu{constructor(e,t,n,i){super(e,t,n,i),this.data=n.data||[],this.object=n.object}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){return null}}class Dt extends Pu{constructor(e,t,n,i){super(e,t,n,i),this.data=n.data||[],this.has_more=n.has_more||!1}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){var n;const e=this.getPaginatedItems(),t=(n=e[e.length-1])==null?void 0:n.id;return t?{...this.options,query:{...Fm(this.options.query),after:t}}:null}}class _l extends Pu{constructor(e,t,n,i){super(e,t,n,i),this.data=n.data||[],this.has_more=n.has_more||!1,this.last_id=n.last_id||""}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more===!1?!1:super.hasNextPage()}nextPageRequestOptions(){const e=this.last_id;return e?{...this.options,query:{...Fm(this.options.query),after:e}}:null}}const qm=()=>{var s;if(typeof File>"u"){const{process:e}=globalThis,t=typeof((s=e==null?void 0:e.versions)==null?void 0:s.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function jr(s,e,t){return qm(),new File(s,e??"unknown_file",t)}function oo(s){return(typeof s=="object"&&s!==null&&("name"in s&&s.name&&String(s.name)||"url"in s&&s.url&&String(s.url)||"filename"in s&&s.filename&&String(s.filename)||"path"in s&&s.path&&String(s.path))||"").split(/[\\/]/).pop()||void 0}const Iu=s=>s!=null&&typeof s=="object"&&typeof s[Symbol.asyncIterator]=="function",Of=async(s,e)=>Dh(s.body)?{...s,body:await jm(s.body,e)}:s,as=async(s,e)=>({...s,body:await jm(s.body,e)}),Bf=new WeakMap;function dw(s){const e=typeof s=="function"?s:s.fetch,t=Bf.get(e);if(t)return t;const n=(async()=>{try{const i="Response"in e?e.Response:(await e("data:,")).constructor,r=new FormData;return r.toString()!==await new i(r).text()}catch{return!0}})();return Bf.set(e,n),n}const jm=async(s,e)=>{if(!await dw(e))throw new TypeError("The provided fetch function does not support file uploads with the current global FormData class.");const t=new FormData;return await Promise.all(Object.entries(s||{}).map(([n,i])=>Nh(t,n,i))),t},Ym=s=>s instanceof Blob&&"name"in s,fw=s=>typeof s=="object"&&s!==null&&(s instanceof Response||Iu(s)||Ym(s)),Dh=s=>{if(fw(s))return!0;if(Array.isArray(s))return s.some(Dh);if(s&&typeof s=="object"){for(const e in s)if(Dh(s[e]))return!0}return!1},Nh=async(s,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")s.append(e,String(t));else if(t instanceof Response)s.append(e,jr([await t.blob()],oo(t)));else if(Iu(t))s.append(e,jr([await new Response(Bm(t)).blob()],oo(t)));else if(Ym(t))s.append(e,t,oo(t));else if(Array.isArray(t))await Promise.all(t.map(n=>Nh(s,e+"[]",n)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([n,i])=>Nh(s,`${e}[${n}]`,i)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}},Km=s=>s!=null&&typeof s=="object"&&typeof s.size=="number"&&typeof s.type=="string"&&typeof s.text=="function"&&typeof s.slice=="function"&&typeof s.arrayBuffer=="function",pw=s=>s!=null&&typeof s=="object"&&typeof s.name=="string"&&typeof s.lastModified=="number"&&Km(s),mw=s=>s!=null&&typeof s=="object"&&typeof s.url=="string"&&typeof s.blob=="function";async function gw(s,e,t){if(qm(),s=await s,pw(s))return s instanceof File?s:jr([await s.arrayBuffer()],s.name);if(mw(s)){const i=await s.blob();return e||(e=new URL(s.url).pathname.split(/[\\/]/).pop()),jr(await Uh(i),e,t)}const n=await Uh(s);if(e||(e=oo(s)),!(t!=null&&t.type)){const i=n.find(r=>typeof r=="object"&&"type"in r&&r.type);typeof i=="string"&&(t={...t,type:i})}return jr(n,e,t)}async function Uh(s){var t;let e=[];if(typeof s=="string"||ArrayBuffer.isView(s)||s instanceof ArrayBuffer)e.push(s);else if(Km(s))e.push(s instanceof Blob?s:await s.arrayBuffer());else if(Iu(s))for await(const n of s)e.push(...await Uh(n));else{const n=(t=s==null?void 0:s.constructor)==null?void 0:t.name;throw new Error(`Unexpected data type: ${typeof s}${n?`; constructor: ${n}`:""}${_w(s)}`)}return e}function _w(s){return typeof s!="object"||s===null?"":`; props: [${Object.getOwnPropertyNames(s).map(t=>`"${t}"`).join(", ")}]`}class Re{constructor(e){this._client=e}}function Jm(s){return s.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const kf=Object.freeze(Object.create(null)),vw=(s=Jm)=>function(t,...n){if(t.length===1)return t[0];let i=!1;const r=[],a=t.reduce((h,u,d)=>{var _;/[?#]/.test(u)&&(i=!0);const f=n[d];let g=(i?encodeURIComponent:s)(""+f);return d!==n.length&&(f==null||typeof f=="object"&&f.toString===((_=Object.getPrototypeOf(Object.getPrototypeOf(f.hasOwnProperty??kf)??kf))==null?void 0:_.toString))&&(g=f+"",r.push({start:h.length+u.length,length:g.length,error:`Value of type ${Object.prototype.toString.call(f).slice(8,-1)} is not a valid path parameter`})),h+u+(d===n.length?"":g)},""),o=a.split(/[?#]/,1)[0],l=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let c;for(;(c=l.exec(o))!==null;)r.push({start:c.index,length:c[0].length,error:`Value "${c[0]}" can't be safely passed as a path parameter`});if(r.sort((h,u)=>h.start-u.start),r.length>0){let h=0;const u=r.reduce((d,f)=>{const g=" ".repeat(f.start-h),_="^".repeat(f.length);return h=f.start+f.length,d+g+_},"");throw new Pe(`Path parameters result in path with invalid segments:
${r.map(d=>d.error).join(`
`)}
${a}
${u}`)}return a},Q=vw(Jm);let Zm=class extends Re{list(e,t={},n){return this._client.getAPIList(Q`/chat/completions/${e}/messages`,Dt,{query:t,...n})}};function vl(s){return s!==void 0&&"function"in s&&s.function!==void 0}function Lu(s){return(s==null?void 0:s.$brand)==="auto-parseable-response-format"}function fa(s){return(s==null?void 0:s.$brand)==="auto-parseable-tool"}function yw(s,e){return!e||!Qm(e)?{...s,choices:s.choices.map(t=>(eg(t.message.tool_calls),{...t,message:{...t.message,parsed:null,...t.message.tool_calls?{tool_calls:t.message.tool_calls}:void 0}}))}:Du(s,e)}function Du(s,e){const t=s.choices.map(n=>{var i;if(n.finish_reason==="length")throw new Nm;if(n.finish_reason==="content_filter")throw new Um;return eg(n.message.tool_calls),{...n,message:{...n.message,...n.message.tool_calls?{tool_calls:((i=n.message.tool_calls)==null?void 0:i.map(r=>bw(e,r)))??void 0}:void 0,parsed:n.message.content&&!n.message.refusal?xw(e,n.message.content):null}}});return{...s,choices:t}}function xw(s,e){var t,n;return((t=s.response_format)==null?void 0:t.type)!=="json_schema"?null:((n=s.response_format)==null?void 0:n.type)==="json_schema"?"$parseRaw"in s.response_format?s.response_format.$parseRaw(e):JSON.parse(e):null}function bw(s,e){var n;const t=(n=s.tools)==null?void 0:n.find(i=>{var r;return vl(i)&&((r=i.function)==null?void 0:r.name)===e.function.name});return{...e,function:{...e.function,parsed_arguments:fa(t)?t.$parseRaw(e.function.arguments):t!=null&&t.function.strict?JSON.parse(e.function.arguments):null}}}function Sw(s,e){var n;if(!s||!("tools"in s)||!s.tools)return!1;const t=(n=s.tools)==null?void 0:n.find(i=>{var r;return vl(i)&&((r=i.function)==null?void 0:r.name)===e.function.name});return vl(t)&&(fa(t)||(t==null?void 0:t.function.strict)||!1)}function Qm(s){var e;return Lu(s.response_format)?!0:((e=s.tools)==null?void 0:e.some(t=>fa(t)||t.type==="function"&&t.function.strict===!0))??!1}function eg(s){for(const e of s||[])if(e.type!=="function")throw new Pe(`Currently only \`function\` tool calls are supported; Received \`${e.type}\``)}function Mw(s){for(const e of s??[]){if(e.type!=="function")throw new Pe(`Currently only \`function\` tool types support auto-parsing; Received \`${e.type}\``);if(e.function.strict!==!0)throw new Pe(`The \`${e.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`)}}const yl=s=>(s==null?void 0:s.role)==="assistant",tg=s=>(s==null?void 0:s.role)==="tool";var Fh,lo,co,Lr,Dr,ho,Nr,gi,Ur,xl,bl,Bs,ng;class Nu{constructor(){Fh.add(this),this.controller=new AbortController,lo.set(this,void 0),co.set(this,()=>{}),Lr.set(this,()=>{}),Dr.set(this,void 0),ho.set(this,()=>{}),Nr.set(this,()=>{}),gi.set(this,{}),Ur.set(this,!1),xl.set(this,!1),bl.set(this,!1),Bs.set(this,!1),Ue(this,lo,new Promise((e,t)=>{Ue(this,co,e,"f"),Ue(this,Lr,t,"f")})),Ue(this,Dr,new Promise((e,t)=>{Ue(this,ho,e,"f"),Ue(this,Nr,t,"f")})),z(this,lo,"f").catch(()=>{}),z(this,Dr,"f").catch(()=>{})}_run(e){setTimeout(()=>{e().then(()=>{this._emitFinal(),this._emit("end")},z(this,Fh,"m",ng).bind(this))},0)}_connected(){this.ended||(z(this,co,"f").call(this),this._emit("connect"))}get ended(){return z(this,Ur,"f")}get errored(){return z(this,xl,"f")}get aborted(){return z(this,bl,"f")}abort(){this.controller.abort()}on(e,t){return(z(this,gi,"f")[e]||(z(this,gi,"f")[e]=[])).push({listener:t}),this}off(e,t){const n=z(this,gi,"f")[e];if(!n)return this;const i=n.findIndex(r=>r.listener===t);return i>=0&&n.splice(i,1),this}once(e,t){return(z(this,gi,"f")[e]||(z(this,gi,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{Ue(this,Bs,!0),e!=="error"&&this.once("error",n),this.once(e,t)})}async done(){Ue(this,Bs,!0),await z(this,Dr,"f")}_emit(e,...t){if(z(this,Ur,"f"))return;e==="end"&&(Ue(this,Ur,!0),z(this,ho,"f").call(this));const n=z(this,gi,"f")[e];if(n&&(z(this,gi,"f")[e]=n.filter(i=>!i.once),n.forEach(({listener:i})=>i(...t))),e==="abort"){const i=t[0];!z(this,Bs,"f")&&!(n!=null&&n.length)&&Promise.reject(i),z(this,Lr,"f").call(this,i),z(this,Nr,"f").call(this,i),this._emit("end");return}if(e==="error"){const i=t[0];!z(this,Bs,"f")&&!(n!=null&&n.length)&&Promise.reject(i),z(this,Lr,"f").call(this,i),z(this,Nr,"f").call(this,i),this._emit("end")}}_emitFinal(){}}lo=new WeakMap,co=new WeakMap,Lr=new WeakMap,Dr=new WeakMap,ho=new WeakMap,Nr=new WeakMap,gi=new WeakMap,Ur=new WeakMap,xl=new WeakMap,bl=new WeakMap,Bs=new WeakMap,Fh=new WeakSet,ng=function(e){if(Ue(this,xl,!0),e instanceof Error&&e.name==="AbortError"&&(e=new An),e instanceof An)return Ue(this,bl,!0),this._emit("abort",e);if(e instanceof Pe)return this._emit("error",e);if(e instanceof Error){const t=new Pe(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new Pe(String(e)))};function ww(s){return typeof s.parse=="function"}var Qt,Oh,Sl,Bh,kh,zh,ig,sg;const Ew=10;class rg extends Nu{constructor(){super(...arguments),Qt.add(this),this._chatCompletions=[],this.messages=[]}_addChatCompletion(e){var n;this._chatCompletions.push(e),this._emit("chatCompletion",e);const t=(n=e.choices[0])==null?void 0:n.message;return t&&this._addMessage(t),e}_addMessage(e,t=!0){if("content"in e||(e.content=null),this.messages.push(e),t){if(this._emit("message",e),tg(e)&&e.content)this._emit("functionToolCallResult",e.content);else if(yl(e)&&e.tool_calls)for(const n of e.tool_calls)n.type==="function"&&this._emit("functionToolCall",n.function)}}async finalChatCompletion(){await this.done();const e=this._chatCompletions[this._chatCompletions.length-1];if(!e)throw new Pe("stream ended without producing a ChatCompletion");return e}async finalContent(){return await this.done(),z(this,Qt,"m",Oh).call(this)}async finalMessage(){return await this.done(),z(this,Qt,"m",Sl).call(this)}async finalFunctionToolCall(){return await this.done(),z(this,Qt,"m",Bh).call(this)}async finalFunctionToolCallResult(){return await this.done(),z(this,Qt,"m",kh).call(this)}async totalUsage(){return await this.done(),z(this,Qt,"m",zh).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emitFinal(){const e=this._chatCompletions[this._chatCompletions.length-1];e&&this._emit("finalChatCompletion",e);const t=z(this,Qt,"m",Sl).call(this);t&&this._emit("finalMessage",t);const n=z(this,Qt,"m",Oh).call(this);n&&this._emit("finalContent",n);const i=z(this,Qt,"m",Bh).call(this);i&&this._emit("finalFunctionToolCall",i);const r=z(this,Qt,"m",kh).call(this);r!=null&&this._emit("finalFunctionToolCallResult",r),this._chatCompletions.some(a=>a.usage)&&this._emit("totalUsage",z(this,Qt,"m",zh).call(this))}async _createChatCompletion(e,t,n){const i=n==null?void 0:n.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),z(this,Qt,"m",ig).call(this,t);const r=await e.chat.completions.create({...t,stream:!1},{...n,signal:this.controller.signal});return this._connected(),this._addChatCompletion(Du(r,t))}async _runChatCompletion(e,t,n){for(const i of t.messages)this._addMessage(i,!1);return await this._createChatCompletion(e,t,n)}async _runTools(e,t,n){var f,g,_;const i="tool",{tool_choice:r="auto",stream:a,...o}=t,l=typeof r!="string"&&r.type==="function"&&((f=r==null?void 0:r.function)==null?void 0:f.name),{maxChatCompletions:c=Ew}=n||{},h=t.tools.map(m=>{if(fa(m)){if(!m.$callback)throw new Pe("Tool given to `.runTools()` that does not have an associated function");return{type:"function",function:{function:m.$callback,name:m.function.name,description:m.function.description||"",parameters:m.function.parameters,parse:m.$parseRaw,strict:!0}}}return m}),u={};for(const m of h)m.type==="function"&&(u[m.function.name||m.function.function.name]=m.function);const d="tools"in t?h.map(m=>m.type==="function"?{type:"function",function:{name:m.function.name||m.function.function.name,parameters:m.function.parameters,description:m.function.description,strict:m.function.strict}}:m):void 0;for(const m of t.messages)this._addMessage(m,!1);for(let m=0;m<c;++m){const b=(g=(await this._createChatCompletion(e,{...o,tool_choice:r,tools:d,messages:[...this.messages]},n)).choices[0])==null?void 0:g.message;if(!b)throw new Pe("missing message in ChatCompletion response");if(!((_=b.tool_calls)!=null&&_.length))return;for(const w of b.tool_calls){if(w.type!=="function")continue;const x=w.id,{name:E,arguments:A}=w.function,T=u[E];if(T){if(l&&l!==E){const R=`Invalid tool_call: ${JSON.stringify(E)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:i,tool_call_id:x,content:R});continue}}else{const R=`Invalid tool_call: ${JSON.stringify(E)}. Available options are: ${Object.keys(u).map(F=>JSON.stringify(F)).join(", ")}. Please try again`;this._addMessage({role:i,tool_call_id:x,content:R});continue}let L;try{L=ww(T)?await T.parse(A):A}catch(R){const F=R instanceof Error?R.message:String(R);this._addMessage({role:i,tool_call_id:x,content:F});continue}const y=await T.function(L,this),S=z(this,Qt,"m",sg).call(this,y);if(this._addMessage({role:i,tool_call_id:x,content:S}),l)return}}}}Qt=new WeakSet,Oh=function(){return z(this,Qt,"m",Sl).call(this).content??null},Sl=function(){let e=this.messages.length;for(;e-- >0;){const t=this.messages[e];if(yl(t))return{...t,content:t.content??null,refusal:t.refusal??null}}throw new Pe("stream ended without producing a ChatCompletionMessage with role=assistant")},Bh=function(){var e,t;for(let n=this.messages.length-1;n>=0;n--){const i=this.messages[n];if(yl(i)&&((e=i==null?void 0:i.tool_calls)!=null&&e.length))return(t=i.tool_calls.filter(r=>r.type==="function").at(-1))==null?void 0:t.function}},kh=function(){for(let e=this.messages.length-1;e>=0;e--){const t=this.messages[e];if(tg(t)&&t.content!=null&&typeof t.content=="string"&&this.messages.some(n=>{var i;return n.role==="assistant"&&((i=n.tool_calls)==null?void 0:i.some(r=>r.type==="function"&&r.id===t.tool_call_id))}))return t.content}},zh=function(){const e={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(const{usage:t}of this._chatCompletions)t&&(e.completion_tokens+=t.completion_tokens,e.prompt_tokens+=t.prompt_tokens,e.total_tokens+=t.total_tokens);return e},ig=function(e){if(e.n!=null&&e.n>1)throw new Pe("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},sg=function(e){return typeof e=="string"?e:e===void 0?"undefined":JSON.stringify(e)};class Uu extends rg{static runTools(e,t,n){const i=new Uu,r={...n,headers:{...n==null?void 0:n.headers,"X-Stainless-Helper-Method":"runTools"}};return i._run(()=>i._runTools(e,t,r)),i}_addMessage(e,t=!0){super._addMessage(e,t),yl(e)&&e.content&&this._emit("content",e.content)}}const ag=1,og=2,lg=4,cg=8,hg=16,ug=32,dg=64,fg=128,pg=256,mg=fg|pg,gg=hg|ug|mg|dg,_g=ag|og|gg,vg=lg|cg,Tw=_g|vg,zt={STR:ag,NUM:og,ARR:lg,OBJ:cg,NULL:hg,BOOL:ug,NAN:dg,INFINITY:fg,MINUS_INFINITY:pg,INF:mg,SPECIAL:gg,ATOM:_g,COLLECTION:vg,ALL:Tw};class Aw extends Error{}class Cw extends Error{}function Rw(s,e=zt.ALL){if(typeof s!="string")throw new TypeError(`expecting str, got ${typeof s}`);if(!s.trim())throw new Error(`${s} is empty`);return Pw(s.trim(),e)}const Pw=(s,e)=>{const t=s.length;let n=0;const i=d=>{throw new Aw(`${d} at position ${n}`)},r=d=>{throw new Cw(`${d} at position ${n}`)},a=()=>(u(),n>=t&&i("Unexpected end of input"),s[n]==='"'?o():s[n]==="{"?l():s[n]==="["?c():s.substring(n,n+4)==="null"||zt.NULL&e&&t-n<4&&"null".startsWith(s.substring(n))?(n+=4,null):s.substring(n,n+4)==="true"||zt.BOOL&e&&t-n<4&&"true".startsWith(s.substring(n))?(n+=4,!0):s.substring(n,n+5)==="false"||zt.BOOL&e&&t-n<5&&"false".startsWith(s.substring(n))?(n+=5,!1):s.substring(n,n+8)==="Infinity"||zt.INFINITY&e&&t-n<8&&"Infinity".startsWith(s.substring(n))?(n+=8,1/0):s.substring(n,n+9)==="-Infinity"||zt.MINUS_INFINITY&e&&1<t-n&&t-n<9&&"-Infinity".startsWith(s.substring(n))?(n+=9,-1/0):s.substring(n,n+3)==="NaN"||zt.NAN&e&&t-n<3&&"NaN".startsWith(s.substring(n))?(n+=3,NaN):h()),o=()=>{const d=n;let f=!1;for(n++;n<t&&(s[n]!=='"'||f&&s[n-1]==="\\");)f=s[n]==="\\"?!f:!1,n++;if(s.charAt(n)=='"')try{return JSON.parse(s.substring(d,++n-Number(f)))}catch(g){r(String(g))}else if(zt.STR&e)try{return JSON.parse(s.substring(d,n-Number(f))+'"')}catch{return JSON.parse(s.substring(d,s.lastIndexOf("\\"))+'"')}i("Unterminated string literal")},l=()=>{n++,u();const d={};try{for(;s[n]!=="}";){if(u(),n>=t&&zt.OBJ&e)return d;const f=o();u(),n++;try{const g=a();Object.defineProperty(d,f,{value:g,writable:!0,enumerable:!0,configurable:!0})}catch(g){if(zt.OBJ&e)return d;throw g}u(),s[n]===","&&n++}}catch{if(zt.OBJ&e)return d;i("Expected '}' at end of object")}return n++,d},c=()=>{n++;const d=[];try{for(;s[n]!=="]";)d.push(a()),u(),s[n]===","&&n++}catch{if(zt.ARR&e)return d;i("Expected ']' at end of array")}return n++,d},h=()=>{if(n===0){s==="-"&&zt.NUM&e&&i("Not sure what '-' is");try{return JSON.parse(s)}catch(f){if(zt.NUM&e)try{return s[s.length-1]==="."?JSON.parse(s.substring(0,s.lastIndexOf("."))):JSON.parse(s.substring(0,s.lastIndexOf("e")))}catch{}r(String(f))}}const d=n;for(s[n]==="-"&&n++;s[n]&&!",]}".includes(s[n]);)n++;n==t&&!(zt.NUM&e)&&i("Unterminated number literal");try{return JSON.parse(s.substring(d,n))}catch{s.substring(d,n)==="-"&&zt.NUM&e&&i("Not sure what '-' is");try{return JSON.parse(s.substring(d,s.lastIndexOf("e")))}catch(g){r(String(g))}}},u=()=>{for(;n<t&&` 
\r	`.includes(s[n]);)n++};return a()},zf=s=>Rw(s,zt.ALL^zt.NUM);var Nt,mi,Ns,Ti,rh,Ya,ah,oh,lh,Ka,ch,Vf;class ra extends rg{constructor(e){super(),Nt.add(this),mi.set(this,void 0),Ns.set(this,void 0),Ti.set(this,void 0),Ue(this,mi,e),Ue(this,Ns,[])}get currentChatCompletionSnapshot(){return z(this,Ti,"f")}static fromReadableStream(e){const t=new ra(null);return t._run(()=>t._fromReadableStream(e)),t}static createChatCompletion(e,t,n){const i=new ra(t);return i._run(()=>i._runChatCompletion(e,{...t,stream:!0},{...n,headers:{...n==null?void 0:n.headers,"X-Stainless-Helper-Method":"stream"}})),i}async _createChatCompletion(e,t,n){var a;super._createChatCompletion;const i=n==null?void 0:n.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),z(this,Nt,"m",rh).call(this);const r=await e.chat.completions.create({...t,stream:!0},{...n,signal:this.controller.signal});this._connected();for await(const o of r)z(this,Nt,"m",ah).call(this,o);if((a=r.controller.signal)!=null&&a.aborted)throw new An;return this._addChatCompletion(z(this,Nt,"m",Ka).call(this))}async _fromReadableStream(e,t){var a;const n=t==null?void 0:t.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),z(this,Nt,"m",rh).call(this),this._connected();const i=ni.fromReadableStream(e,this.controller);let r;for await(const o of i)r&&r!==o.id&&this._addChatCompletion(z(this,Nt,"m",Ka).call(this)),z(this,Nt,"m",ah).call(this,o),r=o.id;if((a=i.controller.signal)!=null&&a.aborted)throw new An;return this._addChatCompletion(z(this,Nt,"m",Ka).call(this))}[(mi=new WeakMap,Ns=new WeakMap,Ti=new WeakMap,Nt=new WeakSet,rh=function(){this.ended||Ue(this,Ti,void 0)},Ya=function(t){let n=z(this,Ns,"f")[t.index];return n||(n={content_done:!1,refusal_done:!1,logprobs_content_done:!1,logprobs_refusal_done:!1,done_tool_calls:new Set,current_tool_call_index:null},z(this,Ns,"f")[t.index]=n,n)},ah=function(t){var i,r,a,o,l,c,h,u,d,f,g,_,m,p,b;if(this.ended)return;const n=z(this,Nt,"m",Vf).call(this,t);this._emit("chunk",t,n);for(const w of t.choices){const x=n.choices[w.index];w.delta.content!=null&&((i=x.message)==null?void 0:i.role)==="assistant"&&((r=x.message)!=null&&r.content)&&(this._emit("content",w.delta.content,x.message.content),this._emit("content.delta",{delta:w.delta.content,snapshot:x.message.content,parsed:x.message.parsed})),w.delta.refusal!=null&&((a=x.message)==null?void 0:a.role)==="assistant"&&((o=x.message)!=null&&o.refusal)&&this._emit("refusal.delta",{delta:w.delta.refusal,snapshot:x.message.refusal}),((l=w.logprobs)==null?void 0:l.content)!=null&&((c=x.message)==null?void 0:c.role)==="assistant"&&this._emit("logprobs.content.delta",{content:(h=w.logprobs)==null?void 0:h.content,snapshot:((u=x.logprobs)==null?void 0:u.content)??[]}),((d=w.logprobs)==null?void 0:d.refusal)!=null&&((f=x.message)==null?void 0:f.role)==="assistant"&&this._emit("logprobs.refusal.delta",{refusal:(g=w.logprobs)==null?void 0:g.refusal,snapshot:((_=x.logprobs)==null?void 0:_.refusal)??[]});const E=z(this,Nt,"m",Ya).call(this,x);x.finish_reason&&(z(this,Nt,"m",lh).call(this,x),E.current_tool_call_index!=null&&z(this,Nt,"m",oh).call(this,x,E.current_tool_call_index));for(const A of w.delta.tool_calls??[])E.current_tool_call_index!==A.index&&(z(this,Nt,"m",lh).call(this,x),E.current_tool_call_index!=null&&z(this,Nt,"m",oh).call(this,x,E.current_tool_call_index)),E.current_tool_call_index=A.index;for(const A of w.delta.tool_calls??[]){const T=(m=x.message.tool_calls)==null?void 0:m[A.index];T!=null&&T.type&&((T==null?void 0:T.type)==="function"?this._emit("tool_calls.function.arguments.delta",{name:(p=T.function)==null?void 0:p.name,index:A.index,arguments:T.function.arguments,parsed_arguments:T.function.parsed_arguments,arguments_delta:((b=A.function)==null?void 0:b.arguments)??""}):(T==null||T.type,void 0))}}},oh=function(t,n){var a,o,l;if(z(this,Nt,"m",Ya).call(this,t).done_tool_calls.has(n))return;const r=(a=t.message.tool_calls)==null?void 0:a[n];if(!r)throw new Error("no tool call snapshot");if(!r.type)throw new Error("tool call snapshot missing `type`");if(r.type==="function"){const c=(l=(o=z(this,mi,"f"))==null?void 0:o.tools)==null?void 0:l.find(h=>vl(h)&&h.function.name===r.function.name);this._emit("tool_calls.function.arguments.done",{name:r.function.name,index:n,arguments:r.function.arguments,parsed_arguments:fa(c)?c.$parseRaw(r.function.arguments):c!=null&&c.function.strict?JSON.parse(r.function.arguments):null})}else r.type},lh=function(t){var i,r;const n=z(this,Nt,"m",Ya).call(this,t);if(t.message.content&&!n.content_done){n.content_done=!0;const a=z(this,Nt,"m",ch).call(this);this._emit("content.done",{content:t.message.content,parsed:a?a.$parseRaw(t.message.content):null})}t.message.refusal&&!n.refusal_done&&(n.refusal_done=!0,this._emit("refusal.done",{refusal:t.message.refusal})),(i=t.logprobs)!=null&&i.content&&!n.logprobs_content_done&&(n.logprobs_content_done=!0,this._emit("logprobs.content.done",{content:t.logprobs.content})),(r=t.logprobs)!=null&&r.refusal&&!n.logprobs_refusal_done&&(n.logprobs_refusal_done=!0,this._emit("logprobs.refusal.done",{refusal:t.logprobs.refusal}))},Ka=function(){if(this.ended)throw new Pe("stream has ended, this shouldn't happen");const t=z(this,Ti,"f");if(!t)throw new Pe("request ended without sending any chunks");return Ue(this,Ti,void 0),Ue(this,Ns,[]),Iw(t,z(this,mi,"f"))},ch=function(){var n;const t=(n=z(this,mi,"f"))==null?void 0:n.response_format;return Lu(t)?t:null},Vf=function(t){var n,i,r,a;let o=z(this,Ti,"f");const{choices:l,...c}=t;o?Object.assign(o,c):o=Ue(this,Ti,{...c,choices:[]});for(const{delta:h,finish_reason:u,index:d,logprobs:f=null,...g}of t.choices){let _=o.choices[d];if(_||(_=o.choices[d]={finish_reason:u,index:d,message:{},logprobs:f,...g}),f)if(!_.logprobs)_.logprobs=Object.assign({},f);else{const{content:A,refusal:T,...L}=f;Object.assign(_.logprobs,L),A&&((n=_.logprobs).content??(n.content=[]),_.logprobs.content.push(...A)),T&&((i=_.logprobs).refusal??(i.refusal=[]),_.logprobs.refusal.push(...T))}if(u&&(_.finish_reason=u,z(this,mi,"f")&&Qm(z(this,mi,"f")))){if(u==="length")throw new Nm;if(u==="content_filter")throw new Um}if(Object.assign(_,g),!h)continue;const{content:m,refusal:p,function_call:b,role:w,tool_calls:x,...E}=h;if(Object.assign(_.message,E),p&&(_.message.refusal=(_.message.refusal||"")+p),w&&(_.message.role=w),b&&(_.message.function_call?(b.name&&(_.message.function_call.name=b.name),b.arguments&&((r=_.message.function_call).arguments??(r.arguments=""),_.message.function_call.arguments+=b.arguments)):_.message.function_call=b),m&&(_.message.content=(_.message.content||"")+m,!_.message.refusal&&z(this,Nt,"m",ch).call(this)&&(_.message.parsed=zf(_.message.content))),x){_.message.tool_calls||(_.message.tool_calls=[]);for(const{index:A,id:T,type:L,function:y,...S}of x){const R=(a=_.message.tool_calls)[A]??(a[A]={});Object.assign(R,S),T&&(R.id=T),L&&(R.type=L),y&&(R.function??(R.function={name:y.name??"",arguments:""})),y!=null&&y.name&&(R.function.name=y.name),y!=null&&y.arguments&&(R.function.arguments+=y.arguments,Sw(z(this,mi,"f"),R)&&(R.function.parsed_arguments=zf(R.function.arguments)))}}}return o},Symbol.asyncIterator)](){const e=[],t=[];let n=!1;return this.on("chunk",i=>{const r=t.shift();r?r.resolve(i):e.push(i)}),this.on("end",()=>{n=!0;for(const i of t)i.resolve(void 0);t.length=0}),this.on("abort",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),this.on("error",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((r,a)=>t.push({resolve:r,reject:a})).then(r=>r?{value:r,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new ni(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}function Iw(s,e){const{id:t,choices:n,created:i,model:r,system_fingerprint:a,...o}=s,l={...o,id:t,choices:n.map(({message:c,finish_reason:h,index:u,logprobs:d,...f})=>{if(!h)throw new Pe(`missing finish_reason for choice ${u}`);const{content:g=null,function_call:_,tool_calls:m,...p}=c,b=c.role;if(!b)throw new Pe(`missing role for choice ${u}`);if(_){const{arguments:w,name:x}=_;if(w==null)throw new Pe(`missing function_call.arguments for choice ${u}`);if(!x)throw new Pe(`missing function_call.name for choice ${u}`);return{...f,message:{content:g,function_call:{arguments:w,name:x},role:b,refusal:c.refusal??null},finish_reason:h,index:u,logprobs:d}}return m?{...f,index:u,finish_reason:h,logprobs:d,message:{...p,role:b,content:g,refusal:c.refusal??null,tool_calls:m.map((w,x)=>{const{function:E,type:A,id:T,...L}=w,{arguments:y,name:S,...R}=E||{};if(T==null)throw new Pe(`missing choices[${u}].tool_calls[${x}].id
${Ja(s)}`);if(A==null)throw new Pe(`missing choices[${u}].tool_calls[${x}].type
${Ja(s)}`);if(S==null)throw new Pe(`missing choices[${u}].tool_calls[${x}].function.name
${Ja(s)}`);if(y==null)throw new Pe(`missing choices[${u}].tool_calls[${x}].function.arguments
${Ja(s)}`);return{...L,id:T,type:A,function:{...R,name:S,arguments:y}}})}}:{...f,message:{...p,content:g,role:b,refusal:c.refusal??null},finish_reason:h,index:u,logprobs:d}}),created:i,model:r,object:"chat.completion",...a?{system_fingerprint:a}:{}};return yw(l,e)}function Ja(s){return JSON.stringify(s)}class Ml extends ra{static fromReadableStream(e){const t=new Ml(null);return t._run(()=>t._fromReadableStream(e)),t}static runTools(e,t,n){const i=new Ml(t),r={...n,headers:{...n==null?void 0:n.headers,"X-Stainless-Helper-Method":"runTools"}};return i._run(()=>i._runTools(e,t,r)),i}}let Fu=class extends Re{constructor(){super(...arguments),this.messages=new Zm(this._client)}create(e,t){return this._client.post("/chat/completions",{body:e,...t,stream:e.stream??!1})}retrieve(e,t){return this._client.get(Q`/chat/completions/${e}`,t)}update(e,t,n){return this._client.post(Q`/chat/completions/${e}`,{body:t,...n})}list(e={},t){return this._client.getAPIList("/chat/completions",Dt,{query:e,...t})}delete(e,t){return this._client.delete(Q`/chat/completions/${e}`,t)}parse(e,t){return Mw(e.tools),this._client.chat.completions.create(e,{...t,headers:{...t==null?void 0:t.headers,"X-Stainless-Helper-Method":"chat.completions.parse"}})._thenUnwrap(n=>Du(n,e))}runTools(e,t){return e.stream?Ml.runTools(this._client,e,t):Uu.runTools(this._client,e,t)}stream(e,t){return ra.createChatCompletion(this._client,e,t)}};Fu.Messages=Zm;class Ou extends Re{constructor(){super(...arguments),this.completions=new Fu(this._client)}}Ou.Completions=Fu;const yg=Symbol("brand.privateNullableHeaders");function*Lw(s){if(!s)return;if(yg in s){const{values:n,nulls:i}=s;yield*n.entries();for(const r of i)yield[r,null];return}let e=!1,t;s instanceof Headers?t=s.entries():Ef(s)?t=s:(e=!0,t=Object.entries(s??{}));for(let n of t){const i=n[0];if(typeof i!="string")throw new TypeError("expected header name to be a string");const r=Ef(n[1])?n[1]:[n[1]];let a=!1;for(const o of r)o!==void 0&&(e&&!a&&(a=!0,yield[i,null]),yield[i,o])}}const _e=s=>{const e=new Headers,t=new Set;for(const n of s){const i=new Set;for(const[r,a]of Lw(n)){const o=r.toLowerCase();i.has(o)||(e.delete(r),i.add(o)),a===null?(e.delete(r),t.add(o)):(e.append(r,a),t.delete(o))}}return{[yg]:!0,values:e,nulls:t}};class xg extends Re{create(e,t){return this._client.post("/audio/speech",{body:e,...t,headers:_e([{Accept:"application/octet-stream"},t==null?void 0:t.headers]),__binaryResponse:!0})}}class bg extends Re{create(e,t){return this._client.post("/audio/transcriptions",as({body:e,...t,stream:e.stream??!1,__metadata:{model:e.model}},this._client))}}class Sg extends Re{create(e,t){return this._client.post("/audio/translations",as({body:e,...t,__metadata:{model:e.model}},this._client))}}let pa=class extends Re{constructor(){super(...arguments),this.transcriptions=new bg(this._client),this.translations=new Sg(this._client),this.speech=new xg(this._client)}};pa.Transcriptions=bg;pa.Translations=Sg;pa.Speech=xg;class Mg extends Re{create(e,t){return this._client.post("/batches",{body:e,...t})}retrieve(e,t){return this._client.get(Q`/batches/${e}`,t)}list(e={},t){return this._client.getAPIList("/batches",Dt,{query:e,...t})}cancel(e,t){return this._client.post(Q`/batches/${e}/cancel`,t)}}class wg extends Re{create(e,t){return this._client.post("/assistants",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}retrieve(e,t){return this._client.get(Q`/assistants/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}update(e,t,n){return this._client.post(Q`/assistants/${e}`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e={},t){return this._client.getAPIList("/assistants",Dt,{query:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}delete(e,t){return this._client.delete(Q`/assistants/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}}let Eg=class extends Re{create(e,t){return this._client.post("/realtime/sessions",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}};class Tg extends Re{create(e,t){return this._client.post("/realtime/transcription_sessions",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}}let rc=class extends Re{constructor(){super(...arguments),this.sessions=new Eg(this._client),this.transcriptionSessions=new Tg(this._client)}};rc.Sessions=Eg;rc.TranscriptionSessions=Tg;class Ag extends Re{create(e,t){return this._client.post("/chatkit/sessions",{body:e,...t,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},t==null?void 0:t.headers])})}cancel(e,t){return this._client.post(Q`/chatkit/sessions/${e}/cancel`,{...t,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},t==null?void 0:t.headers])})}}let Cg=class extends Re{retrieve(e,t){return this._client.get(Q`/chatkit/threads/${e}`,{...t,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},t==null?void 0:t.headers])})}list(e={},t){return this._client.getAPIList("/chatkit/threads",_l,{query:e,...t,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},t==null?void 0:t.headers])})}delete(e,t){return this._client.delete(Q`/chatkit/threads/${e}`,{...t,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},t==null?void 0:t.headers])})}listItems(e,t={},n){return this._client.getAPIList(Q`/chatkit/threads/${e}/items`,_l,{query:t,...n,headers:_e([{"OpenAI-Beta":"chatkit_beta=v1"},n==null?void 0:n.headers])})}};class ac extends Re{constructor(){super(...arguments),this.sessions=new Ag(this._client),this.threads=new Cg(this._client)}}ac.Sessions=Ag;ac.Threads=Cg;class Rg extends Re{create(e,t,n){return this._client.post(Q`/threads/${e}/messages`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}retrieve(e,t,n){const{thread_id:i}=t;return this._client.get(Q`/threads/${i}/messages/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}update(e,t,n){const{thread_id:i,...r}=t;return this._client.post(Q`/threads/${i}/messages/${e}`,{body:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e,t={},n){return this._client.getAPIList(Q`/threads/${e}/messages`,Dt,{query:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}delete(e,t,n){const{thread_id:i}=t;return this._client.delete(Q`/threads/${i}/messages/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}}class Pg extends Re{retrieve(e,t,n){const{thread_id:i,run_id:r,...a}=t;return this._client.get(Q`/threads/${i}/runs/${r}/steps/${e}`,{query:a,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e,t,n){const{thread_id:i,...r}=t;return this._client.getAPIList(Q`/threads/${i}/runs/${e}/steps`,Dt,{query:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}}const Dw=s=>{if(typeof Buffer<"u"){const e=Buffer.from(s,"base64");return Array.from(new Float32Array(e.buffer,e.byteOffset,e.length/Float32Array.BYTES_PER_ELEMENT))}else{const e=atob(s),t=e.length,n=new Uint8Array(t);for(let i=0;i<t;i++)n[i]=e.charCodeAt(i);return Array.from(new Float32Array(n.buffer))}};var hh={};const Us=s=>{var e,t,n,i;if(typeof globalThis.process<"u")return((e=hh==null?void 0:hh[s])==null?void 0:e.trim())??void 0;if(typeof globalThis.Deno<"u")return(i=(n=(t=globalThis.Deno.env)==null?void 0:t.get)==null?void 0:n.call(t,s))==null?void 0:i.trim()};var Gt,Ki,Vh,Qn,uo,Nn,Ji,Hs,Yi,wl,gn,fo,po,Yr,Fr,Or,Hf,Gf,Wf,$f,Xf,qf,jf;class Kr extends Nu{constructor(){super(...arguments),Gt.add(this),Vh.set(this,[]),Qn.set(this,{}),uo.set(this,{}),Nn.set(this,void 0),Ji.set(this,void 0),Hs.set(this,void 0),Yi.set(this,void 0),wl.set(this,void 0),gn.set(this,void 0),fo.set(this,void 0),po.set(this,void 0),Yr.set(this,void 0)}[(Vh=new WeakMap,Qn=new WeakMap,uo=new WeakMap,Nn=new WeakMap,Ji=new WeakMap,Hs=new WeakMap,Yi=new WeakMap,wl=new WeakMap,gn=new WeakMap,fo=new WeakMap,po=new WeakMap,Yr=new WeakMap,Gt=new WeakSet,Symbol.asyncIterator)](){const e=[],t=[];let n=!1;return this.on("event",i=>{const r=t.shift();r?r.resolve(i):e.push(i)}),this.on("end",()=>{n=!0;for(const i of t)i.resolve(void 0);t.length=0}),this.on("abort",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),this.on("error",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((r,a)=>t.push({resolve:r,reject:a})).then(r=>r?{value:r,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}static fromReadableStream(e){const t=new Ki;return t._run(()=>t._fromReadableStream(e)),t}async _fromReadableStream(e,t){var r;const n=t==null?void 0:t.signal;n&&(n.aborted&&this.controller.abort(),n.addEventListener("abort",()=>this.controller.abort())),this._connected();const i=ni.fromReadableStream(e,this.controller);for await(const a of i)z(this,Gt,"m",Fr).call(this,a);if((r=i.controller.signal)!=null&&r.aborted)throw new An;return this._addRun(z(this,Gt,"m",Or).call(this))}toReadableStream(){return new ni(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(e,t,n,i){const r=new Ki;return r._run(()=>r._runToolAssistantStream(e,t,n,{...i,headers:{...i==null?void 0:i.headers,"X-Stainless-Helper-Method":"stream"}})),r}async _createToolAssistantStream(e,t,n,i){var l;const r=i==null?void 0:i.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort()));const a={...n,stream:!0},o=await e.submitToolOutputs(t,a,{...i,signal:this.controller.signal});this._connected();for await(const c of o)z(this,Gt,"m",Fr).call(this,c);if((l=o.controller.signal)!=null&&l.aborted)throw new An;return this._addRun(z(this,Gt,"m",Or).call(this))}static createThreadAssistantStream(e,t,n){const i=new Ki;return i._run(()=>i._threadAssistantStream(e,t,{...n,headers:{...n==null?void 0:n.headers,"X-Stainless-Helper-Method":"stream"}})),i}static createAssistantStream(e,t,n,i){const r=new Ki;return r._run(()=>r._runAssistantStream(e,t,n,{...i,headers:{...i==null?void 0:i.headers,"X-Stainless-Helper-Method":"stream"}})),r}currentEvent(){return z(this,fo,"f")}currentRun(){return z(this,po,"f")}currentMessageSnapshot(){return z(this,Nn,"f")}currentRunStepSnapshot(){return z(this,Yr,"f")}async finalRunSteps(){return await this.done(),Object.values(z(this,Qn,"f"))}async finalMessages(){return await this.done(),Object.values(z(this,uo,"f"))}async finalRun(){if(await this.done(),!z(this,Ji,"f"))throw Error("Final run was not received.");return z(this,Ji,"f")}async _createThreadAssistantStream(e,t,n){var o;const i=n==null?void 0:n.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort()));const r={...t,stream:!0},a=await e.createAndRun(r,{...n,signal:this.controller.signal});this._connected();for await(const l of a)z(this,Gt,"m",Fr).call(this,l);if((o=a.controller.signal)!=null&&o.aborted)throw new An;return this._addRun(z(this,Gt,"m",Or).call(this))}async _createAssistantStream(e,t,n,i){var l;const r=i==null?void 0:i.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort()));const a={...n,stream:!0},o=await e.create(t,a,{...i,signal:this.controller.signal});this._connected();for await(const c of o)z(this,Gt,"m",Fr).call(this,c);if((l=o.controller.signal)!=null&&l.aborted)throw new An;return this._addRun(z(this,Gt,"m",Or).call(this))}static accumulateDelta(e,t){for(const[n,i]of Object.entries(t)){if(!e.hasOwnProperty(n)){e[n]=i;continue}let r=e[n];if(r==null){e[n]=i;continue}if(n==="index"||n==="type"){e[n]=i;continue}if(typeof r=="string"&&typeof i=="string")r+=i;else if(typeof r=="number"&&typeof i=="number")r+=i;else if(nh(r)&&nh(i))r=this.accumulateDelta(r,i);else if(Array.isArray(r)&&Array.isArray(i)){if(r.every(a=>typeof a=="string"||typeof a=="number")){r.push(...i);continue}for(const a of i){if(!nh(a))throw new Error(`Expected array delta entry to be an object but got: ${a}`);const o=a.index;if(o==null)throw console.error(a),new Error("Expected array delta entry to have an `index` property");if(typeof o!="number")throw new Error(`Expected array delta entry \`index\` property to be a number but got ${o}`);const l=r[o];l==null?r.push(a):r[o]=this.accumulateDelta(l,a)}continue}else throw Error(`Unhandled record type: ${n}, deltaValue: ${i}, accValue: ${r}`);e[n]=r}return e}_addRun(e){return e}async _threadAssistantStream(e,t,n){return await this._createThreadAssistantStream(t,e,n)}async _runAssistantStream(e,t,n,i){return await this._createAssistantStream(t,e,n,i)}async _runToolAssistantStream(e,t,n,i){return await this._createToolAssistantStream(t,e,n,i)}}Ki=Kr,Fr=function(e){if(!this.ended)switch(Ue(this,fo,e),z(this,Gt,"m",Wf).call(this,e),e.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.incomplete":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":z(this,Gt,"m",jf).call(this,e);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":z(this,Gt,"m",Gf).call(this,e);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":z(this,Gt,"m",Hf).call(this,e);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier")}},Or=function(){if(this.ended)throw new Pe("stream has ended, this shouldn't happen");if(!z(this,Ji,"f"))throw Error("Final run has not been received");return z(this,Ji,"f")},Hf=function(e){const[t,n]=z(this,Gt,"m",Xf).call(this,e,z(this,Nn,"f"));Ue(this,Nn,t),z(this,uo,"f")[t.id]=t;for(const i of n){const r=t.content[i.index];(r==null?void 0:r.type)=="text"&&this._emit("textCreated",r.text)}switch(e.event){case"thread.message.created":this._emit("messageCreated",e.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",e.data.delta,t),e.data.delta.content)for(const i of e.data.delta.content){if(i.type=="text"&&i.text){let r=i.text,a=t.content[i.index];if(a&&a.type=="text")this._emit("textDelta",r,a.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(i.index!=z(this,Hs,"f")){if(z(this,Yi,"f"))switch(z(this,Yi,"f").type){case"text":this._emit("textDone",z(this,Yi,"f").text,z(this,Nn,"f"));break;case"image_file":this._emit("imageFileDone",z(this,Yi,"f").image_file,z(this,Nn,"f"));break}Ue(this,Hs,i.index)}Ue(this,Yi,t.content[i.index])}break;case"thread.message.completed":case"thread.message.incomplete":if(z(this,Hs,"f")!==void 0){const i=e.data.content[z(this,Hs,"f")];if(i)switch(i.type){case"image_file":this._emit("imageFileDone",i.image_file,z(this,Nn,"f"));break;case"text":this._emit("textDone",i.text,z(this,Nn,"f"));break}}z(this,Nn,"f")&&this._emit("messageDone",e.data),Ue(this,Nn,void 0)}},Gf=function(e){const t=z(this,Gt,"m",$f).call(this,e);switch(Ue(this,Yr,t),e.event){case"thread.run.step.created":this._emit("runStepCreated",e.data);break;case"thread.run.step.delta":const n=e.data.delta;if(n.step_details&&n.step_details.type=="tool_calls"&&n.step_details.tool_calls&&t.step_details.type=="tool_calls")for(const r of n.step_details.tool_calls)r.index==z(this,wl,"f")?this._emit("toolCallDelta",r,t.step_details.tool_calls[r.index]):(z(this,gn,"f")&&this._emit("toolCallDone",z(this,gn,"f")),Ue(this,wl,r.index),Ue(this,gn,t.step_details.tool_calls[r.index]),z(this,gn,"f")&&this._emit("toolCallCreated",z(this,gn,"f")));this._emit("runStepDelta",e.data.delta,t);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":Ue(this,Yr,void 0),e.data.step_details.type=="tool_calls"&&z(this,gn,"f")&&(this._emit("toolCallDone",z(this,gn,"f")),Ue(this,gn,void 0)),this._emit("runStepDone",e.data,t);break}},Wf=function(e){z(this,Vh,"f").push(e),this._emit("event",e)},$f=function(e){switch(e.event){case"thread.run.step.created":return z(this,Qn,"f")[e.data.id]=e.data,e.data;case"thread.run.step.delta":let t=z(this,Qn,"f")[e.data.id];if(!t)throw Error("Received a RunStepDelta before creation of a snapshot");let n=e.data;if(n.delta){const i=Ki.accumulateDelta(t,n.delta);z(this,Qn,"f")[e.data.id]=i}return z(this,Qn,"f")[e.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":z(this,Qn,"f")[e.data.id]=e.data;break}if(z(this,Qn,"f")[e.data.id])return z(this,Qn,"f")[e.data.id];throw new Error("No snapshot available")},Xf=function(e,t){let n=[];switch(e.event){case"thread.message.created":return[e.data,n];case"thread.message.delta":if(!t)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let i=e.data;if(i.delta.content)for(const r of i.delta.content)if(r.index in t.content){let a=t.content[r.index];t.content[r.index]=z(this,Gt,"m",qf).call(this,r,a)}else t.content[r.index]=r,n.push(r);return[t,n];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(t)return[t,n];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},qf=function(e,t){return Ki.accumulateDelta(t,e)},jf=function(e){switch(Ue(this,po,e.data),e.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":case"thread.run.incomplete":Ue(this,Ji,e.data),z(this,gn,"f")&&(this._emit("toolCallDone",z(this,gn,"f")),Ue(this,gn,void 0));break}};let Bu=class extends Re{constructor(){super(...arguments),this.steps=new Pg(this._client)}create(e,t,n){const{include:i,...r}=t;return this._client.post(Q`/threads/${e}/runs`,{query:{include:i},body:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers]),stream:t.stream??!1})}retrieve(e,t,n){const{thread_id:i}=t;return this._client.get(Q`/threads/${i}/runs/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}update(e,t,n){const{thread_id:i,...r}=t;return this._client.post(Q`/threads/${i}/runs/${e}`,{body:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e,t={},n){return this._client.getAPIList(Q`/threads/${e}/runs`,Dt,{query:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}cancel(e,t,n){const{thread_id:i}=t;return this._client.post(Q`/threads/${i}/runs/${e}/cancel`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}async createAndPoll(e,t,n){const i=await this.create(e,t,n);return await this.poll(i.id,{thread_id:e},n)}createAndStream(e,t,n){return Kr.createAssistantStream(e,this._client.beta.threads.runs,t,n)}async poll(e,t,n){var r;const i=_e([n==null?void 0:n.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":((r=n==null?void 0:n.pollIntervalMs)==null?void 0:r.toString())??void 0}]);for(;;){const{data:a,response:o}=await this.retrieve(e,t,{...n,headers:{...n==null?void 0:n.headers,...i}}).withResponse();switch(a.status){case"queued":case"in_progress":case"cancelling":let l=5e3;if(n!=null&&n.pollIntervalMs)l=n.pollIntervalMs;else{const c=o.headers.get("openai-poll-after-ms");if(c){const h=parseInt(c);isNaN(h)||(l=h)}}await da(l);break;case"requires_action":case"incomplete":case"cancelled":case"completed":case"failed":case"expired":return a}}}stream(e,t,n){return Kr.createAssistantStream(e,this._client.beta.threads.runs,t,n)}submitToolOutputs(e,t,n){const{thread_id:i,...r}=t;return this._client.post(Q`/threads/${i}/runs/${e}/submit_tool_outputs`,{body:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers]),stream:t.stream??!1})}async submitToolOutputsAndPoll(e,t,n){const i=await this.submitToolOutputs(e,t,n);return await this.poll(i.id,t,n)}submitToolOutputsStream(e,t,n){return Kr.createToolAssistantStream(e,this._client.beta.threads.runs,t,n)}};Bu.Steps=Pg;class oc extends Re{constructor(){super(...arguments),this.runs=new Bu(this._client),this.messages=new Rg(this._client)}create(e={},t){return this._client.post("/threads",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}retrieve(e,t){return this._client.get(Q`/threads/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}update(e,t,n){return this._client.post(Q`/threads/${e}`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}delete(e,t){return this._client.delete(Q`/threads/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}createAndRun(e,t){return this._client.post("/threads/runs",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers]),stream:e.stream??!1})}async createAndRunPoll(e,t){const n=await this.createAndRun(e,t);return await this.runs.poll(n.id,{thread_id:n.thread_id},t)}createAndRunStream(e,t){return Kr.createThreadAssistantStream(e,this._client.beta.threads,t)}}oc.Runs=Bu;oc.Messages=Rg;class cr extends Re{constructor(){super(...arguments),this.realtime=new rc(this._client),this.chatkit=new ac(this._client),this.assistants=new wg(this._client),this.threads=new oc(this._client)}}cr.Realtime=rc;cr.ChatKit=ac;cr.Assistants=wg;cr.Threads=oc;class Ig extends Re{create(e,t){return this._client.post("/completions",{body:e,...t,stream:e.stream??!1})}}class Lg extends Re{retrieve(e,t,n){const{container_id:i}=t;return this._client.get(Q`/containers/${i}/files/${e}/content`,{...n,headers:_e([{Accept:"application/binary"},n==null?void 0:n.headers]),__binaryResponse:!0})}}let ku=class extends Re{constructor(){super(...arguments),this.content=new Lg(this._client)}create(e,t,n){return this._client.post(Q`/containers/${e}/files`,as({body:t,...n},this._client))}retrieve(e,t,n){const{container_id:i}=t;return this._client.get(Q`/containers/${i}/files/${e}`,n)}list(e,t={},n){return this._client.getAPIList(Q`/containers/${e}/files`,Dt,{query:t,...n})}delete(e,t,n){const{container_id:i}=t;return this._client.delete(Q`/containers/${i}/files/${e}`,{...n,headers:_e([{Accept:"*/*"},n==null?void 0:n.headers])})}};ku.Content=Lg;class zu extends Re{constructor(){super(...arguments),this.files=new ku(this._client)}create(e,t){return this._client.post("/containers",{body:e,...t})}retrieve(e,t){return this._client.get(Q`/containers/${e}`,t)}list(e={},t){return this._client.getAPIList("/containers",Dt,{query:e,...t})}delete(e,t){return this._client.delete(Q`/containers/${e}`,{...t,headers:_e([{Accept:"*/*"},t==null?void 0:t.headers])})}}zu.Files=ku;class Dg extends Re{create(e,t,n){const{include:i,...r}=t;return this._client.post(Q`/conversations/${e}/items`,{query:{include:i},body:r,...n})}retrieve(e,t,n){const{conversation_id:i,...r}=t;return this._client.get(Q`/conversations/${i}/items/${e}`,{query:r,...n})}list(e,t={},n){return this._client.getAPIList(Q`/conversations/${e}/items`,_l,{query:t,...n})}delete(e,t,n){const{conversation_id:i}=t;return this._client.delete(Q`/conversations/${i}/items/${e}`,n)}}class Vu extends Re{constructor(){super(...arguments),this.items=new Dg(this._client)}create(e={},t){return this._client.post("/conversations",{body:e,...t})}retrieve(e,t){return this._client.get(Q`/conversations/${e}`,t)}update(e,t,n){return this._client.post(Q`/conversations/${e}`,{body:t,...n})}delete(e,t){return this._client.delete(Q`/conversations/${e}`,t)}}Vu.Items=Dg;class Ng extends Re{create(e,t){const n=!!e.encoding_format;let i=n?e.encoding_format:"base64";n&&Ht(this._client).debug("embeddings/user defined encoding_format:",e.encoding_format);const r=this._client.post("/embeddings",{body:{...e,encoding_format:i},...t});return n?r:(Ht(this._client).debug("embeddings/decoding base64 embeddings from base64"),r._thenUnwrap(a=>(a&&a.data&&a.data.forEach(o=>{const l=o.embedding;o.embedding=Dw(l)}),a)))}}class Ug extends Re{retrieve(e,t,n){const{eval_id:i,run_id:r}=t;return this._client.get(Q`/evals/${i}/runs/${r}/output_items/${e}`,n)}list(e,t,n){const{eval_id:i,...r}=t;return this._client.getAPIList(Q`/evals/${i}/runs/${e}/output_items`,Dt,{query:r,...n})}}class Hu extends Re{constructor(){super(...arguments),this.outputItems=new Ug(this._client)}create(e,t,n){return this._client.post(Q`/evals/${e}/runs`,{body:t,...n})}retrieve(e,t,n){const{eval_id:i}=t;return this._client.get(Q`/evals/${i}/runs/${e}`,n)}list(e,t={},n){return this._client.getAPIList(Q`/evals/${e}/runs`,Dt,{query:t,...n})}delete(e,t,n){const{eval_id:i}=t;return this._client.delete(Q`/evals/${i}/runs/${e}`,n)}cancel(e,t,n){const{eval_id:i}=t;return this._client.post(Q`/evals/${i}/runs/${e}`,n)}}Hu.OutputItems=Ug;class Gu extends Re{constructor(){super(...arguments),this.runs=new Hu(this._client)}create(e,t){return this._client.post("/evals",{body:e,...t})}retrieve(e,t){return this._client.get(Q`/evals/${e}`,t)}update(e,t,n){return this._client.post(Q`/evals/${e}`,{body:t,...n})}list(e={},t){return this._client.getAPIList("/evals",Dt,{query:e,...t})}delete(e,t){return this._client.delete(Q`/evals/${e}`,t)}}Gu.Runs=Hu;let Fg=class extends Re{create(e,t){return this._client.post("/files",as({body:e,...t},this._client))}retrieve(e,t){return this._client.get(Q`/files/${e}`,t)}list(e={},t){return this._client.getAPIList("/files",Dt,{query:e,...t})}delete(e,t){return this._client.delete(Q`/files/${e}`,t)}content(e,t){return this._client.get(Q`/files/${e}/content`,{...t,headers:_e([{Accept:"application/binary"},t==null?void 0:t.headers]),__binaryResponse:!0})}async waitForProcessing(e,{pollInterval:t=5e3,maxWait:n=1800*1e3}={}){const i=new Set(["processed","error","deleted"]),r=Date.now();let a=await this.retrieve(e);for(;!a.status||!i.has(a.status);)if(await da(t),a=await this.retrieve(e),Date.now()-r>n)throw new Cu({message:`Giving up on waiting for file ${e} to finish processing after ${n} milliseconds.`});return a}};class Og extends Re{}let Bg=class extends Re{run(e,t){return this._client.post("/fine_tuning/alpha/graders/run",{body:e,...t})}validate(e,t){return this._client.post("/fine_tuning/alpha/graders/validate",{body:e,...t})}};class Wu extends Re{constructor(){super(...arguments),this.graders=new Bg(this._client)}}Wu.Graders=Bg;class kg extends Re{create(e,t,n){return this._client.getAPIList(Q`/fine_tuning/checkpoints/${e}/permissions`,sc,{body:t,method:"post",...n})}retrieve(e,t={},n){return this._client.get(Q`/fine_tuning/checkpoints/${e}/permissions`,{query:t,...n})}delete(e,t,n){const{fine_tuned_model_checkpoint:i}=t;return this._client.delete(Q`/fine_tuning/checkpoints/${i}/permissions/${e}`,n)}}let $u=class extends Re{constructor(){super(...arguments),this.permissions=new kg(this._client)}};$u.Permissions=kg;class zg extends Re{list(e,t={},n){return this._client.getAPIList(Q`/fine_tuning/jobs/${e}/checkpoints`,Dt,{query:t,...n})}}class Xu extends Re{constructor(){super(...arguments),this.checkpoints=new zg(this._client)}create(e,t){return this._client.post("/fine_tuning/jobs",{body:e,...t})}retrieve(e,t){return this._client.get(Q`/fine_tuning/jobs/${e}`,t)}list(e={},t){return this._client.getAPIList("/fine_tuning/jobs",Dt,{query:e,...t})}cancel(e,t){return this._client.post(Q`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},n){return this._client.getAPIList(Q`/fine_tuning/jobs/${e}/events`,Dt,{query:t,...n})}pause(e,t){return this._client.post(Q`/fine_tuning/jobs/${e}/pause`,t)}resume(e,t){return this._client.post(Q`/fine_tuning/jobs/${e}/resume`,t)}}Xu.Checkpoints=zg;class hr extends Re{constructor(){super(...arguments),this.methods=new Og(this._client),this.jobs=new Xu(this._client),this.checkpoints=new $u(this._client),this.alpha=new Wu(this._client)}}hr.Methods=Og;hr.Jobs=Xu;hr.Checkpoints=$u;hr.Alpha=Wu;class Vg extends Re{}class qu extends Re{constructor(){super(...arguments),this.graderModels=new Vg(this._client)}}qu.GraderModels=Vg;class Hg extends Re{createVariation(e,t){return this._client.post("/images/variations",as({body:e,...t},this._client))}edit(e,t){return this._client.post("/images/edits",as({body:e,...t,stream:e.stream??!1},this._client))}generate(e,t){return this._client.post("/images/generations",{body:e,...t,stream:e.stream??!1})}}class Gg extends Re{retrieve(e,t){return this._client.get(Q`/models/${e}`,t)}list(e){return this._client.getAPIList("/models",sc,e)}delete(e,t){return this._client.delete(Q`/models/${e}`,t)}}class Wg extends Re{create(e,t){return this._client.post("/moderations",{body:e,...t})}}class $g extends Re{accept(e,t,n){return this._client.post(Q`/realtime/calls/${e}/accept`,{body:t,...n,headers:_e([{Accept:"*/*"},n==null?void 0:n.headers])})}hangup(e,t){return this._client.post(Q`/realtime/calls/${e}/hangup`,{...t,headers:_e([{Accept:"*/*"},t==null?void 0:t.headers])})}refer(e,t,n){return this._client.post(Q`/realtime/calls/${e}/refer`,{body:t,...n,headers:_e([{Accept:"*/*"},n==null?void 0:n.headers])})}reject(e,t={},n){return this._client.post(Q`/realtime/calls/${e}/reject`,{body:t,...n,headers:_e([{Accept:"*/*"},n==null?void 0:n.headers])})}}class Xg extends Re{create(e,t){return this._client.post("/realtime/client_secrets",{body:e,...t})}}class lc extends Re{constructor(){super(...arguments),this.clientSecrets=new Xg(this._client),this.calls=new $g(this._client)}}lc.ClientSecrets=Xg;lc.Calls=$g;function Nw(s,e){return!e||!Fw(e)?{...s,output_parsed:null,output:s.output.map(t=>t.type==="function_call"?{...t,parsed_arguments:null}:t.type==="message"?{...t,content:t.content.map(n=>({...n,parsed:null}))}:t)}:qg(s,e)}function qg(s,e){const t=s.output.map(i=>{if(i.type==="function_call")return{...i,parsed_arguments:kw(e,i)};if(i.type==="message"){const r=i.content.map(a=>a.type==="output_text"?{...a,parsed:Uw(e,a.text)}:a);return{...i,content:r}}return i}),n=Object.assign({},s,{output:t});return Object.getOwnPropertyDescriptor(s,"output_text")||Hh(n),Object.defineProperty(n,"output_parsed",{enumerable:!0,get(){for(const i of n.output)if(i.type==="message"){for(const r of i.content)if(r.type==="output_text"&&r.parsed!==null)return r.parsed}return null}}),n}function Uw(s,e){var t,n,i,r;return((n=(t=s.text)==null?void 0:t.format)==null?void 0:n.type)!=="json_schema"?null:"$parseRaw"in((i=s.text)==null?void 0:i.format)?((r=s.text)==null?void 0:r.format).$parseRaw(e):JSON.parse(e)}function Fw(s){var e;return!!Lu((e=s.text)==null?void 0:e.format)}function Ow(s){return(s==null?void 0:s.$brand)==="auto-parseable-tool"}function Bw(s,e){return s.find(t=>t.type==="function"&&t.name===e)}function kw(s,e){const t=Bw(s.tools??[],e.name);return{...e,...e,parsed_arguments:Ow(t)?t.$parseRaw(e.arguments):t!=null&&t.strict?JSON.parse(e.arguments):null}}function Hh(s){const e=[];for(const t of s.output)if(t.type==="message")for(const n of t.content)n.type==="output_text"&&e.push(n.text);s.output_text=e.join("")}var Fs,Za,Ai,Qa,Yf,Kf,Jf,Zf;class ju extends Nu{constructor(e){super(),Fs.add(this),Za.set(this,void 0),Ai.set(this,void 0),Qa.set(this,void 0),Ue(this,Za,e)}static createResponse(e,t,n){const i=new ju(t);return i._run(()=>i._createOrRetrieveResponse(e,t,{...n,headers:{...n==null?void 0:n.headers,"X-Stainless-Helper-Method":"stream"}})),i}async _createOrRetrieveResponse(e,t,n){var o;const i=n==null?void 0:n.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),z(this,Fs,"m",Yf).call(this);let r,a=null;"response_id"in t?(r=await e.responses.retrieve(t.response_id,{stream:!0},{...n,signal:this.controller.signal,stream:!0}),a=t.starting_after??null):r=await e.responses.create({...t,stream:!0},{...n,signal:this.controller.signal}),this._connected();for await(const l of r)z(this,Fs,"m",Kf).call(this,l,a);if((o=r.controller.signal)!=null&&o.aborted)throw new An;return z(this,Fs,"m",Jf).call(this)}[(Za=new WeakMap,Ai=new WeakMap,Qa=new WeakMap,Fs=new WeakSet,Yf=function(){this.ended||Ue(this,Ai,void 0)},Kf=function(t,n){if(this.ended)return;const i=(a,o)=>{(n==null||o.sequence_number>n)&&this._emit(a,o)},r=z(this,Fs,"m",Zf).call(this,t);switch(i("event",t),t.type){case"response.output_text.delta":{const a=r.output[t.output_index];if(!a)throw new Pe(`missing output at index ${t.output_index}`);if(a.type==="message"){const o=a.content[t.content_index];if(!o)throw new Pe(`missing content at index ${t.content_index}`);if(o.type!=="output_text")throw new Pe(`expected content to be 'output_text', got ${o.type}`);i("response.output_text.delta",{...t,snapshot:o.text})}break}case"response.function_call_arguments.delta":{const a=r.output[t.output_index];if(!a)throw new Pe(`missing output at index ${t.output_index}`);a.type==="function_call"&&i("response.function_call_arguments.delta",{...t,snapshot:a.arguments});break}default:i(t.type,t);break}},Jf=function(){if(this.ended)throw new Pe("stream has ended, this shouldn't happen");const t=z(this,Ai,"f");if(!t)throw new Pe("request ended without sending any events");Ue(this,Ai,void 0);const n=zw(t,z(this,Za,"f"));return Ue(this,Qa,n),n},Zf=function(t){var i;let n=z(this,Ai,"f");if(!n){if(t.type!=="response.created")throw new Pe(`When snapshot hasn't been set yet, expected 'response.created' event, got ${t.type}`);return n=Ue(this,Ai,t.response),n}switch(t.type){case"response.output_item.added":{n.output.push(t.item);break}case"response.content_part.added":{const r=n.output[t.output_index];if(!r)throw new Pe(`missing output at index ${t.output_index}`);const a=r.type,o=t.part;a==="message"&&o.type!=="reasoning_text"?r.content.push(o):a==="reasoning"&&o.type==="reasoning_text"&&(r.content||(r.content=[]),r.content.push(o));break}case"response.output_text.delta":{const r=n.output[t.output_index];if(!r)throw new Pe(`missing output at index ${t.output_index}`);if(r.type==="message"){const a=r.content[t.content_index];if(!a)throw new Pe(`missing content at index ${t.content_index}`);if(a.type!=="output_text")throw new Pe(`expected content to be 'output_text', got ${a.type}`);a.text+=t.delta}break}case"response.function_call_arguments.delta":{const r=n.output[t.output_index];if(!r)throw new Pe(`missing output at index ${t.output_index}`);r.type==="function_call"&&(r.arguments+=t.delta);break}case"response.reasoning_text.delta":{const r=n.output[t.output_index];if(!r)throw new Pe(`missing output at index ${t.output_index}`);if(r.type==="reasoning"){const a=(i=r.content)==null?void 0:i[t.content_index];if(!a)throw new Pe(`missing content at index ${t.content_index}`);if(a.type!=="reasoning_text")throw new Pe(`expected content to be 'reasoning_text', got ${a.type}`);a.text+=t.delta}break}case"response.completed":{Ue(this,Ai,t.response);break}}return n},Symbol.asyncIterator)](){const e=[],t=[];let n=!1;return this.on("event",i=>{const r=t.shift();r?r.resolve(i):e.push(i)}),this.on("end",()=>{n=!0;for(const i of t)i.resolve(void 0);t.length=0}),this.on("abort",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),this.on("error",i=>{n=!0;for(const r of t)r.reject(i);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((r,a)=>t.push({resolve:r,reject:a})).then(r=>r?{value:r,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}async finalResponse(){await this.done();const e=z(this,Qa,"f");if(!e)throw new Pe("stream ended without producing a ChatCompletion");return e}}function zw(s,e){return Nw(s,e)}class jg extends Re{list(e,t={},n){return this._client.getAPIList(Q`/responses/${e}/input_items`,Dt,{query:t,...n})}}class Yg extends Re{count(e={},t){return this._client.post("/responses/input_tokens",{body:e,...t})}}class cc extends Re{constructor(){super(...arguments),this.inputItems=new jg(this._client),this.inputTokens=new Yg(this._client)}create(e,t){return this._client.post("/responses",{body:e,...t,stream:e.stream??!1})._thenUnwrap(n=>("object"in n&&n.object==="response"&&Hh(n),n))}retrieve(e,t={},n){return this._client.get(Q`/responses/${e}`,{query:t,...n,stream:(t==null?void 0:t.stream)??!1})._thenUnwrap(i=>("object"in i&&i.object==="response"&&Hh(i),i))}delete(e,t){return this._client.delete(Q`/responses/${e}`,{...t,headers:_e([{Accept:"*/*"},t==null?void 0:t.headers])})}parse(e,t){return this._client.responses.create(e,t)._thenUnwrap(n=>qg(n,e))}stream(e,t){return ju.createResponse(this._client,e,t)}cancel(e,t){return this._client.post(Q`/responses/${e}/cancel`,t)}compact(e,t){return this._client.post("/responses/compact",{body:e,...t})}}cc.InputItems=jg;cc.InputTokens=Yg;class Kg extends Re{create(e,t,n){return this._client.post(Q`/uploads/${e}/parts`,as({body:t,...n},this._client))}}class Yu extends Re{constructor(){super(...arguments),this.parts=new Kg(this._client)}create(e,t){return this._client.post("/uploads",{body:e,...t})}cancel(e,t){return this._client.post(Q`/uploads/${e}/cancel`,t)}complete(e,t,n){return this._client.post(Q`/uploads/${e}/complete`,{body:t,...n})}}Yu.Parts=Kg;const Vw=async s=>{const e=await Promise.allSettled(s),t=e.filter(i=>i.status==="rejected");if(t.length){for(const i of t)console.error(i.reason);throw new Error(`${t.length} promise(s) failed - see the above errors`)}const n=[];for(const i of e)i.status==="fulfilled"&&n.push(i.value);return n};class Jg extends Re{create(e,t,n){return this._client.post(Q`/vector_stores/${e}/file_batches`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}retrieve(e,t,n){const{vector_store_id:i}=t;return this._client.get(Q`/vector_stores/${i}/file_batches/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}cancel(e,t,n){const{vector_store_id:i}=t;return this._client.post(Q`/vector_stores/${i}/file_batches/${e}/cancel`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}async createAndPoll(e,t,n){const i=await this.create(e,t);return await this.poll(e,i.id,n)}listFiles(e,t,n){const{vector_store_id:i,...r}=t;return this._client.getAPIList(Q`/vector_stores/${i}/file_batches/${e}/files`,Dt,{query:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}async poll(e,t,n){var r;const i=_e([n==null?void 0:n.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":((r=n==null?void 0:n.pollIntervalMs)==null?void 0:r.toString())??void 0}]);for(;;){const{data:a,response:o}=await this.retrieve(t,{vector_store_id:e},{...n,headers:i}).withResponse();switch(a.status){case"in_progress":let l=5e3;if(n!=null&&n.pollIntervalMs)l=n.pollIntervalMs;else{const c=o.headers.get("openai-poll-after-ms");if(c){const h=parseInt(c);isNaN(h)||(l=h)}}await da(l);break;case"failed":case"cancelled":case"completed":return a}}}async uploadAndPoll(e,{files:t,fileIds:n=[]},i){if(t==null||t.length==0)throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");const r=(i==null?void 0:i.maxConcurrency)??5,a=Math.min(r,t.length),o=this._client,l=t.values(),c=[...n];async function h(d){for(let f of d){const g=await o.files.create({file:f,purpose:"assistants"},i);c.push(g.id)}}const u=Array(a).fill(l).map(h);return await Vw(u),await this.createAndPoll(e,{file_ids:c})}}class Zg extends Re{create(e,t,n){return this._client.post(Q`/vector_stores/${e}/files`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}retrieve(e,t,n){const{vector_store_id:i}=t;return this._client.get(Q`/vector_stores/${i}/files/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}update(e,t,n){const{vector_store_id:i,...r}=t;return this._client.post(Q`/vector_stores/${i}/files/${e}`,{body:r,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e,t={},n){return this._client.getAPIList(Q`/vector_stores/${e}/files`,Dt,{query:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}delete(e,t,n){const{vector_store_id:i}=t;return this._client.delete(Q`/vector_stores/${i}/files/${e}`,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}async createAndPoll(e,t,n){const i=await this.create(e,t,n);return await this.poll(e,i.id,n)}async poll(e,t,n){var r;const i=_e([n==null?void 0:n.headers,{"X-Stainless-Poll-Helper":"true","X-Stainless-Custom-Poll-Interval":((r=n==null?void 0:n.pollIntervalMs)==null?void 0:r.toString())??void 0}]);for(;;){const a=await this.retrieve(t,{vector_store_id:e},{...n,headers:i}).withResponse(),o=a.data;switch(o.status){case"in_progress":let l=5e3;if(n!=null&&n.pollIntervalMs)l=n.pollIntervalMs;else{const c=a.response.headers.get("openai-poll-after-ms");if(c){const h=parseInt(c);isNaN(h)||(l=h)}}await da(l);break;case"failed":case"completed":return o}}}async upload(e,t,n){const i=await this._client.files.create({file:t,purpose:"assistants"},n);return this.create(e,{file_id:i.id},n)}async uploadAndPoll(e,t,n){const i=await this.upload(e,t,n);return await this.poll(e,i.id,n)}content(e,t,n){const{vector_store_id:i}=t;return this._client.getAPIList(Q`/vector_stores/${i}/files/${e}/content`,sc,{...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}}class hc extends Re{constructor(){super(...arguments),this.files=new Zg(this._client),this.fileBatches=new Jg(this._client)}create(e,t){return this._client.post("/vector_stores",{body:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}retrieve(e,t){return this._client.get(Q`/vector_stores/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}update(e,t,n){return this._client.post(Q`/vector_stores/${e}`,{body:t,...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}list(e={},t){return this._client.getAPIList("/vector_stores",Dt,{query:e,...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}delete(e,t){return this._client.delete(Q`/vector_stores/${e}`,{...t,headers:_e([{"OpenAI-Beta":"assistants=v2"},t==null?void 0:t.headers])})}search(e,t,n){return this._client.getAPIList(Q`/vector_stores/${e}/search`,sc,{body:t,method:"post",...n,headers:_e([{"OpenAI-Beta":"assistants=v2"},n==null?void 0:n.headers])})}}hc.Files=Zg;hc.FileBatches=Jg;class Qg extends Re{create(e,t){return this._client.post("/videos",Of({body:e,...t},this._client))}retrieve(e,t){return this._client.get(Q`/videos/${e}`,t)}list(e={},t){return this._client.getAPIList("/videos",_l,{query:e,...t})}delete(e,t){return this._client.delete(Q`/videos/${e}`,t)}downloadContent(e,t={},n){return this._client.get(Q`/videos/${e}/content`,{query:t,...n,headers:_e([{Accept:"application/binary"},n==null?void 0:n.headers]),__binaryResponse:!0})}remix(e,t,n){return this._client.post(Q`/videos/${e}/remix`,Of({body:t,...n},this._client))}}var ks,e_,mo;class t_ extends Re{constructor(){super(...arguments),ks.add(this)}async unwrap(e,t,n=this._client.webhookSecret,i=300){return await this.verifySignature(e,t,n,i),JSON.parse(e)}async verifySignature(e,t,n=this._client.webhookSecret,i=300){if(typeof crypto>"u"||typeof crypto.subtle.importKey!="function"||typeof crypto.subtle.verify!="function")throw new Error("Webhook signature verification is only supported when the `crypto` global is defined");z(this,ks,"m",e_).call(this,n);const r=_e([t]).values,a=z(this,ks,"m",mo).call(this,r,"webhook-signature"),o=z(this,ks,"m",mo).call(this,r,"webhook-timestamp"),l=z(this,ks,"m",mo).call(this,r,"webhook-id"),c=parseInt(o,10);if(isNaN(c))throw new Rr("Invalid webhook timestamp format");const h=Math.floor(Date.now()/1e3);if(h-c>i)throw new Rr("Webhook timestamp is too old");if(c>h+i)throw new Rr("Webhook timestamp is too new");const u=a.split(" ").map(_=>_.startsWith("v1,")?_.substring(3):_),d=n.startsWith("whsec_")?Buffer.from(n.replace("whsec_",""),"base64"):Buffer.from(n,"utf-8"),f=l?`${l}.${o}.${e}`:`${o}.${e}`,g=await crypto.subtle.importKey("raw",d,{name:"HMAC",hash:"SHA-256"},!1,["verify"]);for(const _ of u)try{const m=Buffer.from(_,"base64");if(await crypto.subtle.verify("HMAC",g,m,new TextEncoder().encode(f)))return}catch{continue}throw new Rr("The given webhook signature does not match the expected signature")}}ks=new WeakSet,e_=function(e){if(typeof e!="string"||e.length===0)throw new Error("The webhook secret must either be set using the env var, OPENAI_WEBHOOK_SECRET, on the client class, OpenAI({ webhookSecret: '123' }), or passed to this function")},mo=function(e,t){if(!e)throw new Error("Headers are required");const n=e.get(t);if(n==null)throw new Error(`Missing required header: ${t}`);return n};var Gh,Ku,go,n_;class Xe{constructor({baseURL:e=Us("OPENAI_BASE_URL"),apiKey:t=Us("OPENAI_API_KEY"),organization:n=Us("OPENAI_ORG_ID")??null,project:i=Us("OPENAI_PROJECT_ID")??null,webhookSecret:r=Us("OPENAI_WEBHOOK_SECRET")??null,...a}={}){if(Gh.add(this),go.set(this,void 0),this.completions=new Ig(this),this.chat=new Ou(this),this.embeddings=new Ng(this),this.files=new Fg(this),this.images=new Hg(this),this.audio=new pa(this),this.moderations=new Wg(this),this.models=new Gg(this),this.fineTuning=new hr(this),this.graders=new qu(this),this.vectorStores=new hc(this),this.webhooks=new t_(this),this.beta=new cr(this),this.batches=new Mg(this),this.uploads=new Yu(this),this.responses=new cc(this),this.realtime=new lc(this),this.conversations=new Vu(this),this.evals=new Gu(this),this.containers=new zu(this),this.videos=new Qg(this),t===void 0)throw new Pe("Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.");const o={apiKey:t,organization:n,project:i,webhookSecret:r,...a,baseURL:e||"https://api.openai.com/v1"};if(!o.dangerouslyAllowBrowser&&GM())throw new Pe(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);this.baseURL=o.baseURL,this.timeout=o.timeout??Ku.DEFAULT_TIMEOUT,this.logger=o.logger??console;const l="warn";this.logLevel=l,this.logLevel=Uf(o.logLevel,"ClientOptions.logLevel",this)??Uf(Us("OPENAI_LOG"),"process.env['OPENAI_LOG']",this)??l,this.fetchOptions=o.fetchOptions,this.maxRetries=o.maxRetries??2,this.fetch=o.fetch??jM(),Ue(this,go,KM),this._options=o,this.apiKey=typeof t=="string"?t:"Missing Key",this.organization=n,this.project=i,this.webhookSecret=r}withOptions(e){return new this.constructor({...this._options,baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,organization:this.organization,project:this.project,webhookSecret:this.webhookSecret,...e})}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){}async authHeaders(e){return _e([{Authorization:`Bearer ${this.apiKey}`}])}stringifyQuery(e){return nw(e,{arrayFormat:"brackets"})}getUserAgent(){return`${this.constructor.name}/JS ${Os}`}defaultIdempotencyKey(){return`stainless-node-retry-${Em()}`}makeStatusError(e,t,n,i){return Xt.generate(e,t,n,i)}async _callApiKey(){const e=this._options.apiKey;if(typeof e!="function")return!1;let t;try{t=await e()}catch(n){throw n instanceof Pe?n:new Pe(`Failed to get token from 'apiKey' function: ${n.message}`,{cause:n})}if(typeof t!="string"||!t)throw new Pe(`Expected 'apiKey' function argument to return a string but it returned ${t}`);return this.apiKey=t,!0}buildURL(e,t,n){const i=!z(this,Gh,"m",n_).call(this)&&n||this.baseURL,r=BM(e)?new URL(e):new URL(i+(i.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),a=this.defaultQuery();return kM(a)||(t={...a,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(r.search=this.stringifyQuery(t)),r.toString()}async prepareOptions(e){await this._callApiKey()}async prepareRequest(e,{url:t,options:n}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,n){return this.request(Promise.resolve(n).then(i=>({method:e,path:t,...i})))}request(e,t=null){return new ic(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,n){var p,b;const i=await e,r=i.maxRetries??this.maxRetries;t==null&&(t=r),await this.prepareOptions(i);const{req:a,url:o,timeout:l}=await this.buildRequest(i,{retryCount:r-t});await this.prepareRequest(a,{url:o,options:i});const c="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),h=n===void 0?"":`, retryOf: ${n}`,u=Date.now();if(Ht(this).debug(`[${c}] sending request`,qi({retryOfRequestLogID:n,method:i.method,url:o,options:i,headers:a.headers})),(p=i.signal)!=null&&p.aborted)throw new An;const d=new AbortController,f=await this.fetchWithTimeout(o,a,l,d).catch(Ih),g=Date.now();if(f instanceof globalThis.Error){const w=`retrying, ${t} attempts remaining`;if((b=i.signal)!=null&&b.aborted)throw new An;const x=Ph(f)||/timed? ?out/i.test(String(f)+("cause"in f?String(f.cause):""));if(t)return Ht(this).info(`[${c}] connection ${x?"timed out":"failed"} - ${w}`),Ht(this).debug(`[${c}] connection ${x?"timed out":"failed"} (${w})`,qi({retryOfRequestLogID:n,url:o,durationMs:g-u,message:f.message})),this.retryRequest(i,t,n??c);throw Ht(this).info(`[${c}] connection ${x?"timed out":"failed"} - error; no more retries left`),Ht(this).debug(`[${c}] connection ${x?"timed out":"failed"} (error; no more retries left)`,qi({retryOfRequestLogID:n,url:o,durationMs:g-u,message:f.message})),x?new Cu:new tc({cause:f})}const _=[...f.headers.entries()].filter(([w])=>w==="x-request-id").map(([w,x])=>", "+w+": "+JSON.stringify(x)).join(""),m=`[${c}${h}${_}] ${a.method} ${o} ${f.ok?"succeeded":"failed"} with status ${f.status} in ${g-u}ms`;if(!f.ok){const w=await this.shouldRetry(f);if(t&&w){const y=`retrying, ${t} attempts remaining`;return await YM(f.body),Ht(this).info(`${m} - ${y}`),Ht(this).debug(`[${c}] response error (${y})`,qi({retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:g-u})),this.retryRequest(i,t,n??c,f.headers)}const x=w?"error; no more retries left":"error; not retryable";Ht(this).info(`${m} - ${x}`);const E=await f.text().catch(y=>Ih(y).message),A=HM(E),T=A?void 0:E;throw Ht(this).debug(`[${c}] response error (${x})`,qi({retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,message:T,durationMs:Date.now()-u})),this.makeStatusError(f.status,A,T,f.headers)}return Ht(this).info(m),Ht(this).debug(`[${c}] response start`,qi({retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:g-u})),{response:f,options:i,controller:d,requestLogID:c,retryOfRequestLogID:n,startTime:u}}getAPIList(e,t,n){return this.requestAPIList(t,{method:"get",path:e,...n})}requestAPIList(e,t){const n=this.makeRequest(t,null,void 0);return new uw(this,n,e)}async fetchWithTimeout(e,t,n,i){const{signal:r,method:a,...o}=t||{};r&&r.addEventListener("abort",()=>i.abort());const l=setTimeout(()=>i.abort(),n),c=globalThis.ReadableStream&&o.body instanceof globalThis.ReadableStream||typeof o.body=="object"&&o.body!==null&&Symbol.asyncIterator in o.body,h={signal:i.signal,...c?{duplex:"half"}:{},method:"GET",...o};a&&(h.method=a.toUpperCase());try{return await this.fetch.call(void 0,e,h)}finally{clearTimeout(l)}}async shouldRetry(e){const t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,n,i){let r;const a=i==null?void 0:i.get("retry-after-ms");if(a){const l=parseFloat(a);Number.isNaN(l)||(r=l)}const o=i==null?void 0:i.get("retry-after");if(o&&!r){const l=parseFloat(o);Number.isNaN(l)?r=Date.parse(o)-Date.now():r=l*1e3}if(!(r&&0<=r&&r<60*1e3)){const l=e.maxRetries??this.maxRetries;r=this.calculateDefaultRetryTimeoutMillis(t,l)}return await da(r),this.makeRequest(e,t-1,n)}calculateDefaultRetryTimeoutMillis(e,t){const r=t-e,a=Math.min(.5*Math.pow(2,r),8),o=1-Math.random()*.25;return a*o*1e3}async buildRequest(e,{retryCount:t=0}={}){const n={...e},{method:i,path:r,query:a,defaultBaseURL:o}=n,l=this.buildURL(r,a,o);"timeout"in n&&VM("timeout",n.timeout),n.timeout=n.timeout??this.timeout;const{bodyHeaders:c,body:h}=this.buildBody({options:n}),u=await this.buildHeaders({options:e,method:i,bodyHeaders:c,retryCount:t});return{req:{method:i,headers:u,...n.signal&&{signal:n.signal},...globalThis.ReadableStream&&h instanceof globalThis.ReadableStream&&{duplex:"half"},...h&&{body:h},...this.fetchOptions??{},...n.fetchOptions??{}},url:l,timeout:n.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:n,retryCount:i}){let r={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),r[this.idempotencyHeader]=e.idempotencyKey);const a=_e([r,{Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(i),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...qM(),"OpenAI-Organization":this.organization,"OpenAI-Project":this.project},await this.authHeaders(e),this._options.defaultHeaders,n,e.headers]);return this.validateHeaders(a),a.values}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};const n=_e([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&n.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:Bm(e)}:z(this,go,"f").call(this,{body:e,headers:n})}}Ku=Xe,go=new WeakMap,Gh=new WeakSet,n_=function(){return this.baseURL!=="https://api.openai.com/v1"};Xe.OpenAI=Ku;Xe.DEFAULT_TIMEOUT=6e5;Xe.OpenAIError=Pe;Xe.APIError=Xt;Xe.APIConnectionError=tc;Xe.APIConnectionTimeoutError=Cu;Xe.APIUserAbortError=An;Xe.NotFoundError=Rm;Xe.ConflictError=Pm;Xe.RateLimitError=Lm;Xe.BadRequestError=Tm;Xe.AuthenticationError=Am;Xe.InternalServerError=Dm;Xe.PermissionDeniedError=Cm;Xe.UnprocessableEntityError=Im;Xe.InvalidWebhookSignatureError=Rr;Xe.toFile=gw;Xe.Completions=Ig;Xe.Chat=Ou;Xe.Embeddings=Ng;Xe.Files=Fg;Xe.Images=Hg;Xe.Audio=pa;Xe.Moderations=Wg;Xe.Models=Gg;Xe.FineTuning=hr;Xe.Graders=qu;Xe.VectorStores=hc;Xe.Webhooks=t_;Xe.Beta=cr;Xe.Batches=Mg;Xe.Uploads=Yu;Xe.Responses=cc;Xe.Realtime=lc;Xe.Conversations=Vu;Xe.Evals=Gu;Xe.Containers=zu;Xe.Videos=Qg;class Hw{constructor(){this.group=new Yt,this.isActive=!1,this.uniforms={time:{value:0},opacity:{value:0},speed:{value:0},color:{value:new re(16777215)}},this.createTunnel()}createTunnel(){const e=new sr(50,50,1e3,32,1,!0);e.rotateX(-Math.PI/2);const t=new Et({uniforms:this.uniforms,vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float time;
                uniform float opacity;
                uniform float speed;
                uniform vec3 color;
                varying vec2 vUv;

                // Simple pseudo-random
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }

                void main() {
                    // Create star streak effect
                    
                    // Scroll speed based on ship speed
                    float scrollSpeed = speed * time * 5.0; // Faster scroll for streaks
                    
                    // Distort UVs to stretch stars
                    vec2 uv = vUv;
                    
                    // Create grid for stars
                    vec2 grid = vec2(uv.x * 40.0, (uv.y - scrollSpeed) * 10.0);
                    vec2 ipos = floor(grid);
                    vec2 fpos = fract(grid);
                    
                    // Random brightness for each cell
                    float rnd = random(ipos);
                    
                    // Threshold to keep only few "stars"
                    float star = smoothstep(0.9, 1.0, rnd);
                    
                    // Fade out at ends of cylinder
                    float fade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.7, uv.y);
                    
                    // Final intensity
                    float intensity = star * fade * opacity;
                    
                    gl_FragColor = vec4(color, intensity);
                }
            `,transparent:!0,side:Vt,depthWrite:!1,blending:Jr});this.mesh=new rt(e,t),this.group.add(this.mesh)}update(e,t,n,i){let a=0;t>2e3&&(a=Math.min(.8,(t-2e3)/5e3)),this.uniforms.opacity.value+=(a-this.uniforms.opacity.value)*e*2,this.uniforms.opacity.value>.01?(this.isActive=!0,this.group.visible=!0,this.uniforms.time.value+=e,this.uniforms.speed.value=t/1e4,this.group.position.copy(n),this.group.quaternion.copy(i)):(this.isActive=!1,this.group.visible=!1)}}const ai=Object.create(null);ai.open="0";ai.close="1";ai.ping="2";ai.pong="3";ai.message="4";ai.upgrade="5";ai.noop="6";const _o=Object.create(null);Object.keys(ai).forEach(s=>{_o[ai[s]]=s});const Wh={type:"error",data:"parser error"},i_=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",s_=typeof ArrayBuffer=="function",r_=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Ju=({type:s,data:e},t,n)=>i_&&e instanceof Blob?t?n(e):Qf(e,n):s_&&(e instanceof ArrayBuffer||r_(e))?t?n(e):Qf(new Blob([e]),n):n(ai[s]+(e||"")),Qf=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(s)};function ep(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let uh;function Gw(s,e){if(i_&&s.data instanceof Blob)return s.data.arrayBuffer().then(ep).then(e);if(s_&&(s.data instanceof ArrayBuffer||r_(s.data)))return e(ep(s.data));Ju(s,!1,t=>{uh||(uh=new TextEncoder),e(uh.encode(t))})}const tp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Br=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<tp.length;s++)Br[tp.charCodeAt(s)]=s;const Ww=s=>{let e=s.length*.75,t=s.length,n,i=0,r,a,o,l;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const c=new ArrayBuffer(e),h=new Uint8Array(c);for(n=0;n<t;n+=4)r=Br[s.charCodeAt(n)],a=Br[s.charCodeAt(n+1)],o=Br[s.charCodeAt(n+2)],l=Br[s.charCodeAt(n+3)],h[i++]=r<<2|a>>4,h[i++]=(a&15)<<4|o>>2,h[i++]=(o&3)<<6|l&63;return c},$w=typeof ArrayBuffer=="function",Zu=(s,e)=>{if(typeof s!="string")return{type:"message",data:a_(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:Xw(s.substring(1),e)}:_o[t]?s.length>1?{type:_o[t],data:s.substring(1)}:{type:_o[t]}:Wh},Xw=(s,e)=>{if($w){const t=Ww(s);return a_(t,e)}else return{base64:!0,data:s}},a_=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},o_="",qw=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,a)=>{Ju(r,!1,o=>{n[a]=o,++i===t&&e(n.join(o_))})})},jw=(s,e)=>{const t=s.split(o_),n=[];for(let i=0;i<t.length;i++){const r=Zu(t[i],e);if(n.push(r),r.type==="error")break}return n};function Yw(){return new TransformStream({transform(s,e){Gw(s,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}s.data&&typeof s.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let dh;function eo(s){return s.reduce((e,t)=>e+t.length,0)}function to(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=s[0][n++],n===s[0].length&&(s.shift(),n=0);return s.length&&n<s[0].length&&(s[0]=s[0].slice(n)),t}function Kw(s,e){dh||(dh=new TextDecoder);const t=[];let n=0,i=-1,r=!1;return new TransformStream({transform(a,o){for(t.push(a);;){if(n===0){if(eo(t)<1)break;const l=to(t,1);r=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(eo(t)<2)break;const l=to(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(eo(t)<8)break;const l=to(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(Wh);break}i=h*Math.pow(2,32)+c.getUint32(4),n=3}else{if(eo(t)<i)break;const l=to(t,i);o.enqueue(Zu(r?l:dh.decode(l),e)),n=0}if(i===0||i>s){o.enqueue(Wh);break}}}})}const l_=4;function It(s){if(s)return Jw(s)}function Jw(s){for(var e in It.prototype)s[e]=It.prototype[e];return s}It.prototype.on=It.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};It.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};It.prototype.off=It.prototype.removeListener=It.prototype.removeAllListeners=It.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};It.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};It.prototype.emitReserved=It.prototype.emit;It.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};It.prototype.hasListeners=function(s){return!!this.listeners(s).length};const uc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Tn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Zw="arraybuffer";function c_(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const Qw=Tn.setTimeout,eE=Tn.clearTimeout;function dc(s,e){e.useNativeTimers?(s.setTimeoutFn=Qw.bind(Tn),s.clearTimeoutFn=eE.bind(Tn)):(s.setTimeoutFn=Tn.setTimeout.bind(Tn),s.clearTimeoutFn=Tn.clearTimeout.bind(Tn))}const tE=1.33;function nE(s){return typeof s=="string"?iE(s):Math.ceil((s.byteLength||s.size)*tE)}function iE(s){let e=0,t=0;for(let n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function h_(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function sE(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function rE(s){let e={},t=s.split("&");for(let n=0,i=t.length;n<i;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class aE extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Qu extends It{constructor(e){super(),this.writable=!1,dc(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new aE(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Zu(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=sE(e);return t.length?"?"+t:""}}class oE extends Qu{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};jw(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,qw(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=h_()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let u_=!1;try{u_=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const lE=u_;function cE(){}class hE extends oE{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let Xs=class vo extends It{constructor(e,t,n){super(),this.createRequest=e,dc(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=c_(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=vo.requestsCount++,vo.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=cE,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete vo.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Xs.requestsCount=0;Xs.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",np);else if(typeof addEventListener=="function"){const s="onpagehide"in Tn?"pagehide":"unload";addEventListener(s,np,!1)}}function np(){for(let s in Xs.requests)Xs.requests.hasOwnProperty(s)&&Xs.requests[s].abort()}const uE=(function(){const s=d_({xdomain:!1});return s&&s.responseType!==null})();class dE extends hE{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=uE&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Xs(d_,this.uri(),e)}}function d_(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||lE))return new XMLHttpRequest}catch{}if(!e)try{return new Tn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const f_=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class fE extends Qu{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=f_?{}:c_(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Ju(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}i&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=h_()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const fh=Tn.WebSocket||Tn.MozWebSocket;class pE extends fE{createSocket(e,t,n){return f_?new fh(e,t,n):t?new fh(e,t):new fh(e)}doWrite(e,t){this.ws.send(t)}}class mE extends Qu{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=Kw(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=Yw();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const r=()=>{n.read().then(({done:o,value:l})=>{o||(this.onPacket(l),r())}).catch(o=>{})};r();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then(()=>{i&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const gE={websocket:pE,webtransport:mE,polling:dE},_E=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,vE=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function $h(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),n=s.indexOf("]");t!=-1&&n!=-1&&(s=s.substring(0,t)+s.substring(t,n).replace(/:/g,";")+s.substring(n,s.length));let i=_E.exec(s||""),r={},a=14;for(;a--;)r[vE[a]]=i[a]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=yE(r,r.path),r.queryKey=xE(r,r.query),r}function yE(s,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function xE(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}const Xh=typeof addEventListener=="function"&&typeof removeEventListener=="function",yo=[];Xh&&addEventListener("offline",()=>{yo.forEach(s=>s())},!1);class Ni extends It{constructor(e,t){if(super(),this.binaryType=Zw,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=$h(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=$h(t.host).host);dc(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=rE(this.opts.query)),Xh&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},yo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=l_,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ni.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Ni.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=nE(i)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,uc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Ni.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Xh&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=yo.indexOf(this._offlineEventListener);n!==-1&&yo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Ni.protocol=l_;class bE extends Ni{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;Ni.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",u=>{if(!n)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ni.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){n||(n=!0,h(),t.close(),t=null)}const a=u=>{const d=new Error("probe error: "+u);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function o(){a("transport closed")}function l(){a("socket closed")}function c(u){t&&u.name!==t.name&&r()}const h=()=>{t.removeListener("open",i),t.removeListener("error",a),t.removeListener("close",o),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",a),t.once("close",o),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let SE=class extends bE{constructor(e,t={}){const n=typeof e=="object"?e:t;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>gE[i]).filter(i=>!!i)),super(e,n)}};function ME(s,e="",t){let n=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),n=$h(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const wE=typeof ArrayBuffer=="function",EE=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,p_=Object.prototype.toString,TE=typeof Blob=="function"||typeof Blob<"u"&&p_.call(Blob)==="[object BlobConstructor]",AE=typeof File=="function"||typeof File<"u"&&p_.call(File)==="[object FileConstructor]";function ed(s){return wE&&(s instanceof ArrayBuffer||EE(s))||TE&&s instanceof Blob||AE&&s instanceof File}function xo(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(xo(s[t]))return!0;return!1}if(ed(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return xo(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&xo(s[t]))return!0;return!1}function CE(s){const e=[],t=s.data,n=s;return n.data=qh(t,e),n.attachments=e.length,{packet:n,buffers:e}}function qh(s,e){if(!s)return s;if(ed(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=qh(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=qh(s[n],e));return t}return s}function RE(s,e){return s.data=jh(s.data,e),delete s.attachments,s}function jh(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=jh(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=jh(s[t],e));return s}const PE=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Je;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Je||(Je={}));class IE{constructor(e){this.replacer=e}encode(e){return(e.type===Je.EVENT||e.type===Je.ACK)&&xo(e)?this.encodeAsBinary({type:e.type===Je.EVENT?Je.BINARY_EVENT:Je.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Je.BINARY_EVENT||e.type===Je.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=CE(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}class td extends It{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Je.BINARY_EVENT;n||t.type===Je.BINARY_ACK?(t.type=n?Je.EVENT:Je.ACK,this.reconstructor=new LE(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(ed(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Je[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Je.BINARY_EVENT||n.type===Je.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const a=e.substring(r,t);if(a!=Number(a)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(a)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const a=e.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(td.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Je.CONNECT:return ip(t);case Je.DISCONNECT:return t===void 0;case Je.CONNECT_ERROR:return typeof t=="string"||ip(t);case Je.EVENT:case Je.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&PE.indexOf(t[0])===-1);case Je.ACK:case Je.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class LE{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=RE(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function ip(s){return Object.prototype.toString.call(s)==="[object Object]"}const DE=Object.freeze(Object.defineProperty({__proto__:null,Decoder:td,Encoder:IE,get PacketType(){return Je}},Symbol.toStringTag,{value:"Module"}));function Un(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const NE=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class m_ extends It{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Un(e,"open",this.onopen.bind(this)),Un(e,"packet",this.onpacket.bind(this)),Un(e,"error",this.onerror.bind(this)),Un(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,r;if(NE.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const a={type:Je.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,u=t.pop();this._registerAckCallback(h,u),a.id=h}const o=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!o||(l?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},i),a=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...t){return new Promise((n,i)=>{const r=(a,o)=>a?i(a):n(o);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Je.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Je.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Je.EVENT:case Je.BINARY_EVENT:this.onevent(e);break;case Je.ACK:case Je.BINARY_ACK:this.onack(e);break;case Je.DISCONNECT:this.ondisconnect();break;case Je.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:Je.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Je.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function ur(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}ur.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};ur.prototype.reset=function(){this.attempts=0};ur.prototype.setMin=function(s){this.ms=s};ur.prototype.setMax=function(s){this.max=s};ur.prototype.setJitter=function(s){this.jitter=s};class Yh extends It{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,dc(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new ur({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||DE;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new SE(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Un(t,"open",function(){n.onopen(),e&&e()}),r=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=Un(t,"error",r);if(this._timeout!==!1){const o=this._timeout,l=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},o);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Un(e,"ping",this.onping.bind(this)),Un(e,"data",this.ondata.bind(this)),Un(e,"error",this.onerror.bind(this)),Un(e,"close",this.onclose.bind(this)),Un(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){uc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new m_(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ar={};function bo(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=ME(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,a=Ar[i]&&r in Ar[i].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let l;return o?l=new Yh(n,e):(Ar[i]||(Ar[i]=new Yh(n,e)),l=Ar[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(bo,{Manager:Yh,Socket:m_,io:bo,connect:bo});class UE{constructor(e,t){this.playerId=e,this.nickname=t.nickname||`Player ${e.slice(0,6)}`,this.group=new Yt,this.targetPosition=new P,this.targetRotation=new Sn,this.targetQuaternion=null,this.currentSpeed=0,this.viewMode=t.viewMode||"CHASE",this.lastLogTime=0,t.position&&(this.targetPosition.copy(t.position),this.group.position.copy(t.position)),t.rotation&&(this.targetRotation.copy(t.rotation),this.group.rotation.copy(t.rotation)),this.mesh=null,this.loadModel(),this.createNameTag(),this.createTrailEffect()}loadModel(){const e=new xm,t=new Mm;t.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),e.setDRACOLoader(t),e.load("assets/space_shuttle.glb",n=>{this.mesh=n.scene,this.mesh.scale.set(1.5,1.5,1.5),this.mesh.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!1,i.material&&(i.material=i.material.clone(),i.material.opacity=.85,i.material.transparent=!0,i.material.emissive=new re(65416),i.material.emissiveIntensity=.2))}),this.mesh.rotation.y=-Math.PI/2,this.group.add(this.mesh)},void 0,n=>{console.error("Failed to load remote player model:",n)})}createNameTag(){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=512,e.height=128,t.fillStyle="rgba(0, 0, 0, 0.7)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#00ff88",t.lineWidth=4,t.strokeRect(2,2,e.width-4,e.height-4),t.fillStyle="#00ff88",t.font="bold 48px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(this.nickname,e.width/2,e.height/2);const n=new cs(e);n.needsUpdate=!0;const i=new pu({map:n,transparent:!0,depthTest:!1});this.nameTag=new jp(i),this.nameTag.scale.set(100,25,1),this.nameTag.position.y=35,this.group.add(this.nameTag)}createTrailEffect(){const e=new pt,t=new Float32Array(300);e.setAttribute("position",new ut(t,3));const n=new la({color:65416,transparent:!0,opacity:.3});this.trail=new ca(e,n),this.trailPositions=[],this.group.add(this.trail)}updateFromNetwork(e){e.position&&this.targetPosition.set(e.position.x,e.position.y,e.position.z),e.rotation&&this.targetRotation.set(e.rotation.x,e.rotation.y,e.rotation.z),e.quaternion&&(this.targetQuaternion=new $n(e.quaternion.x,e.quaternion.y,e.quaternion.z,e.quaternion.w)),e.speed!==void 0&&(this.currentSpeed=e.speed),e.viewMode&&(this.viewMode=e.viewMode);const t=Date.now();(!this.lastLogTime||t-this.lastLogTime>3e3)&&(console.log(`🎮 Remote player "${this.nickname}" at (${e.position.x.toFixed(1)}, ${e.position.y.toFixed(1)}, ${e.position.z.toFixed(1)})`),this.lastLogTime=t)}updateNickname(e){this.nickname=e,this.group.remove(this.nameTag),this.createNameTag()}update(e){const t=Math.min(e*10,1);this.group.position.lerp(this.targetPosition,t),this.targetQuaternion?this.group.quaternion.slerp(this.targetQuaternion,t):(this.group.rotation.x=Fn.lerp(this.group.rotation.x,this.targetRotation.x,t),this.group.rotation.y=Fn.lerp(this.group.rotation.y,this.targetRotation.y,t),this.group.rotation.z=Fn.lerp(this.group.rotation.z,this.targetRotation.z,t)),this.updateTrail(),this.nameTag&&this.nameTag.quaternion.copy(this.group.quaternion)}updateTrail(){if(this.trailPositions.push(this.group.position.clone()),this.trailPositions.length>30&&this.trailPositions.shift(),this.trail&&this.trailPositions.length>1){const e=this.trail.geometry.attributes.position.array;for(let t=0;t<this.trailPositions.length;t++){const n=this.trailPositions[t];e[t*3]=n.x,e[t*3+1]=n.y,e[t*3+2]=n.z}this.trail.geometry.attributes.position.needsUpdate=!0,this.trail.geometry.setDrawRange(0,this.trailPositions.length)}}dispose(){this.mesh&&this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),this.nameTag&&(this.nameTag.material.map.dispose(),this.nameTag.material.dispose()),this.trail&&(this.trail.geometry.dispose(),this.trail.material.dispose())}}class sp{constructor(e,t){this.scene=e.scene,this.localSpacecraft=t,this.remotePlayers=new Map,this.socket=null,this.connected=!1,this.playerId=null,this.lastUpdateTime=0,this.updateInterval=50,this.serverAvailable=!1}static async checkServerAvailability(e="http://localhost:3000"){try{const t=new AbortController,n=setTimeout(()=>t.abort(),2e3),i=await fetch(`${e}/health`,{method:"GET",signal:t.signal});return clearTimeout(n),i.ok}catch{return console.log("Multiplayer server not available"),!1}}async connect(e="http://localhost:3000"){return new Promise((t,n)=>{console.log("🔌 Connecting to multiplayer server..."),this.socket=bo(e,{transports:["websocket","polling"],timeout:5e3,reconnection:!0,reconnectionAttempts:3}),this.socket.on("connect",()=>{console.log("✓ Connected to multiplayer server"),this.connected=!0,this.serverAvailable=!0}),this.socket.on("init",i=>{console.log("📡 Received initialization data:",i),this.playerId=i.playerId,i.players.forEach(r=>{r.id!==this.playerId&&this.addRemotePlayer(r)}),t(i)}),this.socket.on("playerJoined",i=>{console.log(`🚀 Player joined: ${i.nickname}`),this.addRemotePlayer(i),this.showNotification(`${i.nickname} joined`,"info")}),this.socket.on("playerMoved",i=>{this.updateRemotePlayer(i)}),this.socket.on("playerUpdated",i=>{const r=this.remotePlayers.get(i.id);r&&i.nickname&&r.updateNickname(i.nickname)}),this.socket.on("playerLeft",i=>{this.removeRemotePlayer(i),this.showNotification("A player left","warning")}),this.socket.on("chatMessage",i=>{console.log(`💬 ${i.nickname}: ${i.message}`)}),this.socket.on("serverShutdown",i=>{console.warn("⚠️ Server is shutting down:",i.message),this.showNotification("Server shutting down","error"),this.disconnect()}),this.socket.on("connect_error",i=>{console.error("Connection error:",i),this.serverAvailable=!1,n(i)}),this.socket.on("disconnect",i=>{console.log("Disconnected:",i),this.connected=!1,this.remotePlayers.forEach((r,a)=>{this.removeRemotePlayer(a)}),i==="io server disconnect"?this.showNotification("Disconnected from server","error"):this.showNotification("Connection lost, reconnecting...","warning")})})}disconnect(){this.socket&&(console.log("👋 Disconnecting from multiplayer..."),this.socket.disconnect(),this.connected=!1,this.remotePlayers.forEach((e,t)=>{this.removeRemotePlayer(t)}))}addRemotePlayer(e){if(this.remotePlayers.has(e.id))return;const t=new UE(e.id,e);this.scene.add(t.group),this.remotePlayers.set(e.id,t),console.log(`✓ Added remote player: ${t.nickname}`)}updateRemotePlayer(e){const t=this.remotePlayers.get(e.id);t&&t.updateFromNetwork(e)}removeRemotePlayer(e){const t=this.remotePlayers.get(e);t&&(console.log(`👋 Removing player: ${t.nickname}`),this.scene.remove(t.group),t.dispose(),this.remotePlayers.delete(e))}sendUpdate(){if(!this.connected||!this.socket)return;const e=Date.now();if(e-this.lastUpdateTime<this.updateInterval)return;this.lastUpdateTime=e;const t=this.localSpacecraft.group.position,n=this.localSpacecraft.group.quaternion,i={position:{x:t.x,y:t.y,z:t.z},rotation:{x:this.localSpacecraft.group.rotation.x,y:this.localSpacecraft.group.rotation.y,z:this.localSpacecraft.group.rotation.z},quaternion:{x:n.x,y:n.y,z:n.z,w:n.w},speed:this.localSpacecraft.forwardSpeed,viewMode:this.localSpacecraft.viewMode};e%2e3<this.updateInterval&&console.log("📡 Sending position:",{pos:`(${t.x.toFixed(1)}, ${t.y.toFixed(1)}, ${t.z.toFixed(1)})`,speed:this.localSpacecraft.forwardSpeed.toFixed(1)}),this.socket.emit("updatePosition",i)}update(e){this.remotePlayers.forEach(t=>{t.update(e)})}shareTarget(e){this.connected&&this.socket&&this.socket.emit("shareTarget",e)}showNotification(e,t="info"){console.log(`[${t.toUpperCase()}] ${e}`);const n=document.createElement("div");n.className=`multiplayer-notification ${t}`,n.textContent=e,n.style.cssText=`
            position: fixed;
            top: 80px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: ${t==="error"?"#ff4444":t==="warning"?"#ffaa00":"#00ff88"};
            padding: 12px 20px;
            border-radius: 8px;
            border: 2px solid ${t==="error"?"#ff4444":t==="warning"?"#ffaa00":"#00ff88"};
            font-family: 'Orbitron', monospace;
            font-size: 14px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `,document.body.appendChild(n),setTimeout(()=>{n.style.animation="slideOut 0.3s ease-in",setTimeout(()=>n.remove(),300)},3e3)}getPlayerCount(){return this.remotePlayers.size+(this.connected?1:0)}getStatus(){return{connected:this.connected,playerId:this.playerId,playerCount:this.getPlayerCount(),remotePlayers:this.remotePlayers.size}}}class rp{constructor(){this.canvas=document.getElementById("canvas"),this.loadingManager=new PM,this.uiVisible=!0,this.exoplanetsVisible=!0,this.controlsEnabled=!0,this.multiplayerManager=null,this.multiplayerEnabled=!1,this.multiplayerServerUrl=localStorage.getItem("multiplayerServerUrl")||"http://localhost:3000",this.init()}async init(){this.loadingManager.start(4);try{this.loadingManager.updateStatus("Initializing Engine","Setting up 3D renderer..."),this.sceneManager=new MS,this.cameraManager=new wS(this.canvas),this.rendererManager=new OS(this.canvas),this.clock=new Jl,this.sceneManager.add(this.cameraManager.camera),this.loadingManager.completeStep("Engine"),this.loadingManager.updateStatus("Configuring Controls","Mapping keyboard and mouse..."),this.keys={up:!1,down:!1,left:!1,right:!1,speedUp:!1,speedDown:!1,boost:!1,brake:!1},this.setupControls(),this.mouse={x:0,y:0},this.setupMouse(),this.loadingManager.completeStep("Controls"),this.loadingManager.updateStatus("Building Universe","Loading from NASA data clusters..."),await this.createSceneObjects(),this.initPlanetSelector(),this.initExplorationDialog(),this.initTargetingSquare(),this.loadingManager.completeStep("Universe"),this.loadingManager.updateStatus("Starting Mission","Engaging warp drive..."),this.setupUIControls(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate(),this.loadingManager.completeStep("Animation"),this.loadingManager.finish(),this.spacecraft&&this.updateViewUI(),this.initializeMultiplayerSettings(),this.checkMultiplayerAvailability()}catch(e){console.error("Initialization error:",e),this.loadingManager.error(e.message)}}initializeMultiplayerSettings(){const e=document.getElementById("multiplayer-url");e&&(e.value=this.multiplayerServerUrl,e.addEventListener("change",t=>{const n=t.target.value.trim()||"http://localhost:3000";this.multiplayerServerUrl=n,localStorage.setItem("multiplayerServerUrl",n),console.log("🔧 Multiplayer server URL updated:",n),this.checkMultiplayerAvailability()}),e.addEventListener("blur",t=>{const n=t.target.value.trim()||"http://localhost:3000";n!==this.multiplayerServerUrl&&(this.multiplayerServerUrl=n,localStorage.setItem("multiplayerServerUrl",n),console.log("🔧 Multiplayer server URL updated:",n),this.checkMultiplayerAvailability())}))}async checkMultiplayerAvailability(){console.log("🔍 Checking multiplayer server:",this.multiplayerServerUrl);const e=await sp.checkServerAvailability(this.multiplayerServerUrl),t=document.getElementById("multiplayer-status-inline"),n=document.getElementById("multiplayer-btn");e?(console.log("✓ Multiplayer server detected"),t&&(t.textContent="READY"),t&&(t.style.color="#00FF88"),n&&(n.style.borderColor="#00FF88")):(console.log("ℹ Multiplayer server not available"),t&&(t.textContent="SERVER OFFLINE"),t&&(t.style.color="#888"),n&&(n.style.opacity="0.5"))}async toggleMultiplayer(){if(document.getElementById("multiplayer-status-inline"),document.getElementById("multiplayer-btn"),this.multiplayerEnabled)this.multiplayerManager&&(this.multiplayerManager.disconnect(),this.multiplayerManager=null),this.multiplayerEnabled=!1,this.updateMultiplayerUI(!1),console.log("👋 Multiplayer disabled");else try{console.log("🔌 Enabling multiplayer..."),this.multiplayerManager=new sp(this.sceneManager,this.spacecraft),await this.multiplayerManager.connect(this.multiplayerServerUrl),this.multiplayerEnabled=!0,this.updateMultiplayerUI(!0),console.log("✓ Multiplayer enabled")}catch(e){console.error("Failed to connect to multiplayer:",e),this.multiplayerManager=null,this.multiplayerEnabled=!1,alert(`Could not connect to multiplayer server at ${this.multiplayerServerUrl}
Make sure the server is running.`)}}updateMultiplayerUI(e){const t=document.getElementById("multiplayer-btn"),n=document.getElementById("multiplayer-status-inline");if(t&&(t.textContent=e?"🔌 Disconnect":"🌐 Join Multiplayer",e?(t.style.background="rgba(0, 255, 136, 0.3)",t.style.borderColor="#00FF88",t.style.opacity="1"):(t.style.background="rgba(0, 217, 255, 0.2)",t.style.borderColor="#00D9FF",t.style.opacity="1")),n)if(e&&this.multiplayerManager){const i=this.multiplayerManager.getStatus();n.textContent=`CONNECTED (${i.playerCount} players)`,n.style.color="#00FF88"}else n.textContent=e?"CONNECTED":"READY",n.style.color=e?"#00FF88":"#00D9FF"}setupControls(){window.addEventListener("keydown",e=>{if(this.narratorDialog&&this.narratorDialog.isShowing()){if(e.code==="ArrowUp"){this.keys.up=!0,e.preventDefault();return}if(e.code==="ArrowDown"){this.keys.down=!0,e.preventDefault();return}if(e.code==="ArrowLeft"){this.keys.left=!0,e.preventDefault();return}if(e.code==="ArrowRight"){this.keys.right=!0,e.preventDefault();return}return e.code==="Escape",void 0}this.controlsEnabled&&(e.code==="KeyW"&&(this.keys.speedUp=!0),e.code==="KeyS"&&(this.keys.speedDown=!0),e.code==="ArrowUp"&&(this.keys.up=!0),e.code==="ArrowDown"&&(this.keys.down=!0),e.code==="ArrowLeft"&&(this.keys.left=!0),e.code==="ArrowRight"&&(this.keys.right=!0),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.keys.boost=!0),e.code==="Space"&&(this.keys.brake=!0),(e.code==="KeyV"||e.key==="v"||e.key==="V")&&this.handleViewToggle(),e.code==="KeyT"&&this.togglePlanetNavigator(),e.code==="KeyH"&&this.toggleUI(),e.code==="KeyN"&&this.narrateClosestPlanet(),e.code==="Escape"&&this.closePlanetNavigator())}),window.addEventListener("keyup",e=>{if(this.narratorDialog&&this.narratorDialog.isShowing()){e.code==="ArrowUp"&&(this.keys.up=!1),e.code==="ArrowDown"&&(this.keys.down=!1),e.code==="ArrowLeft"&&(this.keys.left=!1),e.code==="ArrowRight"&&(this.keys.right=!1);return}this.controlsEnabled&&(e.code==="KeyW"&&(this.keys.speedUp=!1),e.code==="KeyS"&&(this.keys.speedDown=!1),e.code==="ArrowUp"&&(this.keys.up=!1),e.code==="ArrowDown"&&(this.keys.down=!1),e.code==="ArrowLeft"&&(this.keys.left=!1),e.code==="ArrowRight"&&(this.keys.right=!1),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.keys.boost=!1),e.code==="Space"&&(this.keys.brake=!1),(e.code==="Equal"||e.code==="NumpadAdd"||e.key==="+"||e.key==="=")&&(this.keys.speedUp=!1,console.log("🚀 Speed UP key released!")),(e.code==="Minus"||e.code==="NumpadSubtract"||e.key==="-"||e.key==="_")&&(this.keys.speedDown=!1,console.log("🔻 Speed DOWN key released!")))})}setupMouse(){console.log("Initializing Mouse Controls..."),this.canvas.addEventListener("mousemove",i=>{const r=this.canvas.getBoundingClientRect(),a=r.width/2,o=r.height/2;this.mouse.x=(i.clientX-r.left-a)/(a*.8),this.mouse.y=(i.clientY-r.top-o)/(o*.8),this.mouse.x=Math.max(-1,Math.min(1,this.mouse.x)),this.mouse.y=Math.max(-1,Math.min(1,this.mouse.y))}),this.canvas.style.cursor="default";const e=new Eu,t=new Ce;window.addEventListener("click",i=>{var r;if(this.spacecraft&&this.spacecraft.viewMode==="COCKPIT"?(t.x=0,t.y=0):(t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1),this.cameraManager&&this.cameraManager.camera){e.setFromCamera(t,this.cameraManager.camera);const a=e.intersectObjects(this.sceneManager.scene.children,!0);if(a.length>0){const o=a.find(l=>{let c=l.object;for(;c;){if(this.planets&&this.planets.some(h=>h.mesh===c||h.group===c)||c.userData&&c.userData.planetData)return!0;c=c.parent}return!1});if(o)if(o.object.userData&&o.object.userData.planetData){const l=o.object.userData.planetData;if(console.log("🪐 Planet Selected:",l.pl_name,l.isSolar?"(Solar System)":"(Exoplanet)"),this.lastClickedPlanet=l,this.targetingSquare){const c=(r=this.exoplanetField)==null?void 0:r.meshGroup;this.targetingSquare.target(o.object,l,c)}this.explorationDialog&&this.explorationDialog.show(l)}else console.warn("⚠️ Clicked object has no planetData:",o.object)}}});const n=document.getElementById("btn-toggle-view");n&&n.addEventListener("click",i=>{console.log("View Button Clicked"),n.blur(),this.handleViewToggle()})}updateViewUI(){const e=document.getElementById("cockpit-overlay");document.getElementById("flight-cursor"),this.spacecraft.viewMode==="COCKPIT"?e&&e.classList.add("visible"):e&&e.classList.remove("visible")}async createSceneObjects(){console.log("🌌 Initializing scene..."),await this.initializePlanetDataService(),await this.createEnvironment(),await this.loadAllPlanets(),this.createSpacecraft()}async initializePlanetDataService(){console.log("  📊 Initializing planet data service..."),this.planetDataService=new AM,await this.planetDataService.initialize(),console.log("  ✓ Data service ready")}async createEnvironment(){console.log("  ✨ Creating star field..."),this.dynamicStarField=new WS(2e4,2e3),this.sceneManager.add(this.dynamicStarField.mesh),this.warpTunnel=new Hw,this.sceneManager.add(this.warpTunnel.group),console.log("  ✓ Environment created")}async loadAllPlanets(){console.log("🪐 Loading all planets from nasa_data/clusters/...");try{this.exoplanetField=new CM(this.planetDataService),console.log("  🌍 Loading solar system..."),await this.planetDataService.loadSolarSystem(),console.log("  🌌 Loading exoplanets..."),await this.exoplanetField.load(),this.exoplanetField.mesh&&this.sceneManager.add(this.exoplanetField.mesh);const e=this.planetDataService.getAllPlanets().length;console.log(`✓ Total planets loaded: ${e}`),this.planets=[]}catch(e){console.error("✗ Failed to load planets:",e),this.planets=[]}}createSpacecraft(){console.log("  🚀 Creating spacecraft..."),this.spacecraft=new TM,this.sceneManager.add(this.spacecraft.group),console.log("  ✓ Spacecraft ready")}initPlanetSelector(){this.planetNavigator=new IM(this.planetDataService,e=>this.teleportToPlanet(e)),this.planetNavigator.loadPlanets(),setTimeout(()=>this.setupSpAIceButton(),100),this.planetHoverInfo=new LM(this.cameraManager.camera,[],this.planetDataService),console.log("✓ Planet navigator initialized - loading all planets...")}initExplorationDialog(){let e=null,t=null;console.log("ℹ OpenAI not configured - AI descriptions disabled"),console.log("ℹ Eleven Labs not configured - Audio narration disabled"),this.explorationDialog=new wm(e,t,this),this.proximityDetector=new NM(this.planetDataService,this.exoplanetField),this.narrationService=new UM(e,t),this.narratorDialog=new FM(this.narrationService),window.planetExplorationDialog=this.explorationDialog,window.narratorDialog=this.narratorDialog,console.log("✓ Planet exploration dialog initialized"),console.log("✓ Proximity narration system initialized")}initTargetingSquare(){this.targetingSquare=new DM(this.sceneManager.scene),console.log("✓ Planet targeting square initialized")}setupUIControls(){const e=document.getElementById("toggle-ui-btn");e&&e.addEventListener("click",()=>this.toggleUI());const t=document.getElementById("modal-close"),n=document.getElementById("modal-overlay");t&&t.addEventListener("click",()=>this.closeModal()),n&&n.addEventListener("click",()=>this.closeModal())}togglePlanetNavigator(){this.planetNavigator&&this.planetNavigator.toggle()}closePlanetNavigator(){this.planetNavigator&&this.planetNavigator.hide()}handleViewToggle(){this.spacecraft?(console.log("🚀 Toggling viewpoint"),this.spacecraft.toggleView(),this.updateViewUI()):console.warn("⚠️ Spacecraft not ready for view toggle")}toggleUI(){this.uiVisible=!this.uiVisible,document.querySelectorAll(".ui-panel:not(#planet-modal)").forEach(n=>{this.uiVisible?n.classList.remove("hidden"):n.classList.add("hidden")}),this.planetNavigator&&(this.uiVisible?this.planetNavigator.container.style.display="flex":this.planetNavigator.container.style.display="none");const t=document.getElementById("toggle-ui-btn");t&&(t.style.opacity=this.uiVisible?"1":"0.3")}showLastClickedPlanetInfo(){this.lastClickedPlanet&&this.explorationDialog?this.explorationDialog.show(this.lastClickedPlanet):console.log("No planet selected yet. Click on a planet first.")}async narrateClosestPlanet(){var i;if(!this.spacecraft||!this.proximityDetector||!this.narrationService||!this.narratorDialog){console.warn("⚠️ Narration system not initialized");return}if(this.narratorDialog.isShowing()){console.log("⏩ Narration already in progress");return}const e=this.proximityDetector.getClosestPlanet(this.spacecraft.group.position);if(!e){console.log("⚠️ No planet nearby to narrate");return}const t=e.planet,n=e.distance;if(console.log(`🎙️ Narrating ${t.pl_name} (${(n/1e4).toFixed(2)} scaled units away)`),this.narratorDialog.container.classList.add("visible"),this.narratorDialog.isVisible=!0,this.narratorDialog.elements.planetName.textContent=t.pl_name||"Unknown Planet",this.narratorDialog.showLoading(),this.targetingSquare&&e.mesh){const r=(i=this.exoplanetField)==null?void 0:i.meshGroup;this.targetingSquare.target(e.mesh,t,r),console.log("🎯 Targeting square shown for",t.pl_name),console.log("   Mesh:",e.mesh.type,"Position:",e.worldPosition),console.log("   Parent group scale:",r?r.scale.x:"none")}else console.warn("⚠️ Could not show targeting square"),console.warn("   targetingSquare exists:",!!this.targetingSquare),console.warn("   closest.mesh exists:",!!e.mesh),console.warn("   closest object:",e);try{console.log("📝 Generating narration...");const{text:r,audio:a}=await this.narrationService.generateNarration(t);console.log("💬 Showing narrator dialog..."),await this.narratorDialog.show(t,r,a),console.log("✅ Narrator dialog displayed")}catch(r){console.error("❌ Narration failed:",r),this.narratorDialog.hideLoading(),this.narratorDialog.hide()}}closeModal(){const e=document.getElementById("planet-modal"),t=document.getElementById("modal-overlay");e&&e.classList.remove("visible"),t&&t.classList.remove("visible")}updateHUD(){if(!this.spacecraft)return;this.spacecraft.velocity.length();const e=this.spacecraft.group.position,t=this.spacecraft.group.rotation,n=document.getElementById("hud-velocity"),i=document.getElementById("cockpit-speed"),r=this.spacecraft.getSpeed();n&&(n.textContent=`${r.toFixed(2)} u/s`),i&&(i.textContent=`SPD: ${r.toFixed(2)}`);const a=document.getElementById("hud-pos-x"),o=document.getElementById("hud-pos-y"),l=document.getElementById("hud-pos-z");a&&(a.textContent=(e.x/10).toFixed(2)),o&&(o.textContent=(e.y/10).toFixed(2)),l&&(l.textContent=(e.z/10).toFixed(2));const c=document.getElementById("hud-heading");if(c){const h=(t.y*180/Math.PI%360+360)%360;c.textContent=`${h.toFixed(1)}°`}this.updateTargetDisplay()}updateTargetDisplay(){const e=document.querySelector(".cockpit-data-right .data-line");if(e)if(this.targetingSquare&&this.targetingSquare.isTargeting()&&this.targetingSquare.planetData){const t=this.targetingSquare.planetData.pl_name||"Unknown";e.textContent=`TARGET: ${t}`}else e.textContent="TARGET: NONE"}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getDelta();if(this.dynamicStarField&&this.spacecraft&&this.dynamicStarField.update(this.spacecraft.group.position),this.planets&&this.planets.forEach(t=>t.update(e)),this.exoplanetField&&this.exoplanetField.update(e),this.spacecraft){this.spacecraft.steer(this.keys,e,this.mouse);const t=this.sceneManager.scene.children.filter(n=>n.userData&&n.userData.planetData);this.spacecraft.update(e,t),this.spacecraft.updateCamera(this.cameraManager.camera),this.updateHUD()}this.planetHoverInfo&&this.planetHoverInfo.update(),this.warpTunnel&&this.spacecraft&&this.warpTunnel.update(e,this.spacecraft.getSpeed(),this.cameraManager.camera.position,this.cameraManager.camera.quaternion),this.targetingSquare&&this.targetingSquare.update(this.cameraManager.camera),this.multiplayerEnabled&&this.multiplayerManager&&(this.multiplayerManager.sendUpdate(),this.multiplayerManager.update(e)),this.rendererManager.render(this.sceneManager.scene,this.cameraManager.camera)}onWindowResize(){this.cameraManager.updateAspect(this.canvas),this.rendererManager.updateSize(this.canvas)}teleportToPlanet(e){var c;if(!e)return;console.log(`🚀 Teleporting to ${e.pl_name}`);let t;const n=1e4;if(e.hostname==="Sun"&&e.position)t=new P(e.position.x*10*n,e.position.y*10*n,e.position.z*10*n);else if((c=e.characteristics)!=null&&c.coordinates_3d){const h=e.characteristics.coordinates_3d;t=new P(h.x_light_years*10*n,h.y_light_years*10*n,h.z_light_years*10*n)}if(!t){console.warn(`Cannot teleport to ${e.pl_name}: No coordinates available`);return}this.createTeleportFlash();const a=(e.pl_rade||1)*.5*n*1.5,o=t.clone().normalize(),l=t.clone().sub(o.multiplyScalar(a));setTimeout(()=>{this.spacecraft.group.position.copy(l),this.spacecraft.velocity&&(this.spacecraft.velocity.set(0,0,0),this.spacecraft.forwardSpeed=100),this.spacecraft.group.lookAt(t),console.log(`✓ Teleported to ${e.pl_name} at distance ${a.toFixed(0)} units`)},200)}createTeleportFlash(){const e=document.createElement("div");if(e.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle, rgba(0,212,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(0,212,255,0.4) 70%, transparent 100%);
            pointer-events: none;
            z-index: 10000;
            opacity: 0;
            animation: teleportFlash 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        `,!document.getElementById("teleport-flash-animation")){const n=document.createElement("style");n.id="teleport-flash-animation",n.textContent=`
                @keyframes teleportFlash {
                    0% { opacity: 0; transform: scale(0.8); }
                    15% { opacity: 1; transform: scale(1.1); }
                    50% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 0; transform: scale(1); }
                }
                
                @keyframes screenShake {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-5px, 2px); }
                    20% { transform: translate(5px, -2px); }
                    30% { transform: translate(-5px, -2px); }
                    40% { transform: translate(5px, 2px); }
                    50% { transform: translate(-5px, 2px); }
                    60% { transform: translate(5px, -2px); }
                    70% { transform: translate(-5px, -2px); }
                    80% { transform: translate(5px, 2px); }
                    90% { transform: translate(-5px, 2px); }
                }
                
                .camera-shake {
                    animation: screenShake 0.4s cubic-bezier(.36,.07,.19,.97);
                }
            `,document.head.appendChild(n)}document.body.appendChild(e);const t=document.getElementById("canvas");t&&(t.classList.add("camera-shake"),setTimeout(()=>t.classList.remove("camera-shake"),400)),this.playWarpSound(),setTimeout(()=>{e.remove()},600)}playWarpSound(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(60,t.currentTime),n.frequency.exponentialRampToValueAtTime(800,t.currentTime+.15),n.frequency.exponentialRampToValueAtTime(40,t.currentTime+.4),i.gain.setValueAtTime(0,t.currentTime),i.gain.linearRampToValueAtTime(.2,t.currentTime+.05),i.gain.exponentialRampToValueAtTime(.01,t.currentTime+.4),n.connect(i),i.connect(t.destination);const r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(2e3,t.currentTime),r.frequency.exponentialRampToValueAtTime(400,t.currentTime+.3),a.gain.setValueAtTime(0,t.currentTime),a.gain.linearRampToValueAtTime(.15,t.currentTime+.08),a.gain.exponentialRampToValueAtTime(.01,t.currentTime+.5),r.connect(a),a.connect(t.destination),n.start(),r.start(),n.stop(t.currentTime+.5),r.stop(t.currentTime+.5)}catch(e){console.warn("Web Audio API not supported:",e)}}setupSpAIceButton(){const e=document.getElementById("spaice-btn");if(!e){console.warn("⚠️ SpAIce button not found in DOM");return}e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),console.log("🤖 SpAIce button clicked!"),this.narrateClosestPlanet()}),console.log("✅ SpAIce floating button initialized");const t=document.getElementById("multiplayer-btn");t&&(t.addEventListener("click",()=>{this.toggleMultiplayer()}),console.log("✅ Multiplayer button initialized"))}dispose(){var e,t,n;(e=this.planets)==null||e.forEach(i=>i.dispose()),this.rendererManager.dispose(),(t=this.exoplanetField)==null||t.dispose(),(n=this.dynamicStarField)==null||n.dispose()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.app=new rp}):window.app=new rp;
