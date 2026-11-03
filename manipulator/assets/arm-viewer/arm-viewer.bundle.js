var __ArmViewerBundle=(()=>{var un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,_l=1,ah=2;var lr=1,oh=2,ms=3,wi=0,Ge=1,Ze=2,Ln=0,gs=1,xl=2,yl=3,vl=4,lh=5;var Dn=100,ch=101,hh=102,uh=103,dh=104,fh=200,ph=201,mh=202,gh=203,bl=204,Sl=205,_h=206,xh=207,yh=208,vh=209,bh=210,Sh=211,Mh=212,Th=213,Eh=214,ta=0,ea=1,ia=2,Qn=3,na=4,sa=5,ra=6,aa=7,cr=0,Ah=1,wh=2,Ri=0,Ml=1,Tl=2,El=3,Al=4,wl=5,Rl=6,Cl=7,sl="attached",Rh="detached",Pl=300,Un=301,_s=302,Aa=303,wa=304,ki=1e3,ze=1001,oa=1002,Ae=1003,Ch=1004;var hr=1005;var Ee=1006,Ra=1007;var hi=1008;var Je=1009,Il=1010,Nl=1011,xs=1012,Ca=1013,xi=1014,ui=1015,yi=1016,Pa=1017,Ia=1018,Fn=1020,Ll=35902,Dl=35899,Ul=1021,Fl=1022,di=1023,zi=1026,qi=1027,Ol=1028,Na=1029,fn=1030,La=1031;var Da=1033,ur=33776,dr=33777,fr=33778,pr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Va=37496,Ga=37488,Ha=37489,mr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,Ka=37813,ja=37814,$a=37815,Qa=37816,to=37817,eo=37818,io=37819,no=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,gr=36285,ho=36286;var Tn=2300,la=2301,$r=2302,Ds=2303,rl=2400,al=2401,ol=2402,Ph=2500;var Ih=3200;var _r=0,Nh=1,Yi="",Qt="srgb",Us="srgb-linear",Fs="linear",Kt="srgb";var Qr=7680;var Lh=519,Dh=512,Uh=513,Fh=514,Bl=515,Oh=516,Bh=517,kl=518,zl=519,kh=35044;var Vl="300 es",li=2e3,ts=2001;function Xu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zh(){let s=es("canvas");return s.style.display="block",s}var bc={},is=null;function Gl(...s){let t="THREE."+s.shift();is?is("log",t,...s):console.log(t,...s)}function Vh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function At(...s){s=Vh(s);let t="THREE."+s.shift();if(is)is("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Dt(...s){s=Vh(s);let t="THREE."+s.shift();if(is)is("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Is(...s){let t=s.join(" ");t in bc||(bc[t]=!0,At(...s))}function Gh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Hh={[ta]:ta,[ia]:ra,[na]:na,[Qn]:sa,[ea]:ea,[ra]:ia,[aa]:aa,[sa]:Qn},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=1234567,Ns=Math.PI/180,En=180/Math.PI;function pn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Hl(s,t){return(s%t+t)%t}function Yu(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Zu(s,t,e){return s!==t?(e-s)/(t-s):0}function Ls(s,t,e){return(1-e)*s+e*t}function Ju(s,t,e,i){return Ls(s,t,1-Math.exp(-e*i))}function Ku(s,t=1){return t-Math.abs(Hl(s,t*2)-t)}function ju(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $u(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function td(s,t){return s+Math.random()*(t-s)}function ed(s){return s*(.5-Math.random())}function id(s){s!==void 0&&(Sc=s);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(s){return s*Ns}function sd(s){return s*En}function rd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ad(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function od(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Xl(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wh(s,t){if(t.constructor===Float32Array)return s;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Xh(s,t){if(t.constructor===Float32Array)return s;let e=Xl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Ke={DEG2RAD:Ns,RAD2DEG:En,generateUUID:pn,clamp:Gt,euclideanModulo:Hl,mapLinear:Yu,inverseLerp:Zu,lerp:Ls,damp:Ju,pingpong:Ku,smoothstep:ju,smootherstep:$u,randInt:Qu,randFloat:td,randFloatSpread:ed,seededRandom:id,degToRad:nd,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:ad,floorPowerOfTwo:Wl,setQuaternionFromProperEuler:od,normalize:Xh,denormalize:Wh},Pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let y=Math.acos(p),T=Math.sin(y);m=Math.sin(m*y)/T,o=Math.sin(o*y)/T,c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+x*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+x*o;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(r/2),u=c(i/2),f=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=n+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new F,Mc=new le,Ut=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],T=n[4],v=n[7],A=n[2],E=n[5],_=n[8];return r[0]=a*x+o*y+c*A,r[3]=a*p+o*T+c*E,r[6]=a*m+o*v+c*_,r[1]=l*x+h*y+d*A,r[4]=l*p+h*T+d*E,r[7]=l*m+h*v+d*_,r[2]=u*x+f*y+g*A,r[5]=u*p+f*T+g*E,r[8]=u*m+f*v+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*l-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(h*e-n*c)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fo=new Ut,Tc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){let s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Yi?Fs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Us]:{primaries:t,whitePoint:i,transfer:Fs,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:t,whitePoint:i,transfer:Kt,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),s}var Bt=ld();function Bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bn,ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bn===void 0&&(Bn=es("canvas")),Bn.width=t.width,Bn.height=t.height;let n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Bn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=es("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Oo(n[a].image)):r.push(Oo(n[a]))}else r=Oo(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Oo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}var hd=0,Bo=new F,Ve=class s extends _i{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ze,n=ze,r=Ee,a=hi,o=di,c=Je,l=s.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=pn(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){At(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){At(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Pl;Ve.DEFAULT_ANISOTROPY=1;var te=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(f+1)/2,A=(m+1)/2,E=(h+u)/4,_=(d+x)/4,b=(g+p)/4;return T>v&&T>A?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=E/i,r=_/i):v>A?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=E/n,r=b/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=_/r,n=b/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ha=class extends _i{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ve({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new ns(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends ha{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Os=class extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends Ve{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Nt=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,i,n,r,a,o,c,l,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,x,p)}set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/kn.setFromMatrixColumn(t,0).length(),r=1/kn.setFromMatrixColumn(t,1).length(),a=1/kn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,dd)}lookAt(t,e,i){let n=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Ki.crossVectors(i,Qe),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Ki.crossVectors(i,Qe)),Ki.normalize(),Rr.crossVectors(Qe,Ki),n[0]=Ki.x,n[4]=Rr.x,n[8]=Qe.x,n[1]=Ki.y,n[5]=Rr.y,n[9]=Qe.y,n[2]=Ki.z,n[6]=Rr.z,n[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],T=i[7],v=i[11],A=i[15],E=n[0],_=n[4],b=n[8],R=n[12],C=n[1],P=n[5],N=n[9],B=n[13],I=n[2],k=n[6],D=n[10],z=n[14],Y=n[3],H=n[7],J=n[11],K=n[15];return r[0]=a*E+o*C+c*I+l*Y,r[4]=a*_+o*P+c*k+l*H,r[8]=a*b+o*N+c*D+l*J,r[12]=a*R+o*B+c*z+l*K,r[1]=h*E+d*C+u*I+f*Y,r[5]=h*_+d*P+u*k+f*H,r[9]=h*b+d*N+u*D+f*J,r[13]=h*R+d*B+u*z+f*K,r[2]=g*E+x*C+p*I+m*Y,r[6]=g*_+x*P+p*k+m*H,r[10]=g*b+x*N+p*D+m*J,r[14]=g*R+x*B+p*z+m*K,r[3]=y*E+T*C+v*I+A*Y,r[7]=y*_+T*P+v*k+A*H,r[11]=y*b+T*N+v*D+A*J,r[15]=y*R+T*B+v*z+A*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=c*f-l*u,T=o*f-l*d,v=o*u-c*d,A=a*f-l*h,E=a*u-c*h,_=a*d-o*h;return e*(x*y-p*T+m*v)-i*(g*y-p*A+m*E)+n*(g*T-x*A+m*_)-r*(g*v-x*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+n*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*o-i*a,T=e*c-n*a,v=e*l-r*a,A=i*c-n*o,E=i*l-r*o,_=n*l-r*c,b=h*x-d*g,R=h*p-u*g,C=h*m-f*g,P=d*p-u*x,N=d*m-f*x,B=u*m-f*p,I=y*B-T*N+v*P+A*C-E*R+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*B-c*N+l*P)*k,t[1]=(n*N-i*B-r*P)*k,t[2]=(x*_-p*E+m*A)*k,t[3]=(u*E-d*_-f*A)*k,t[4]=(c*C-a*B-l*R)*k,t[5]=(e*B-n*C+r*R)*k,t[6]=(p*v-g*_-m*T)*k,t[7]=(h*_-u*v+f*T)*k,t[8]=(a*N-o*C+l*b)*k,t[9]=(i*C-e*N-r*b)*k,t[10]=(g*E-x*v+m*y)*k,t[11]=(d*v-h*E-f*y)*k,t[12]=(o*R-a*P-c*b)*k,t[13]=(e*P-i*R+n*b)*k,t[14]=(x*T-g*A-p*y)*k,t[15]=(h*A-d*T+u*y)*k,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,y=c*l,T=c*h,v=c*d,A=i.x,E=i.y,_=i.z;return n[0]=(1-(x+m))*A,n[1]=(f+v)*A,n[2]=(g-T)*A,n[3]=0,n[4]=(f-v)*E,n[5]=(1-(u+m))*E,n[6]=(p+y)*E,n[7]=0,n[8]=(g+T)*_,n[9]=(p-y)*_,n[10]=(1-(u+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=kn.set(n[0],n[1],n[2]).length(),o=kn.set(n[4],n[5],n[6]).length(),c=kn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),pi.copy(this);let l=1/a,h=1/o,d=1/c;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,e.setFromRotationMatrix(pi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,n,r,a,o=li,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===li)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ts)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=li,c=!1){let l=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===li)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ts)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},kn=new F,pi=new Nt,ud=new F(0,0,0),dd=new F(1,1,1),Ki=new F,Rr=new F,Qe=new F,Ac=new Nt,wc=new le,Xe=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fd=0,Rc=new F,zn=new le,Ni=new Nt,Cr=new F,Ms=new F,pd=new F,md=new le,Cc=new F(1,0,0),Pc=new F(0,1,0),Ic=new F(0,0,1),Nc={type:"added"},gd={type:"removed"},Vn={type:"childadded",child:null},ko={type:"childremoved",child:null},de=class s extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new F,e=new Xe,i=new le,n=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ut}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Cr.copy(t):Cr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ms,Cr,this.up):Ni.lookAt(Cr,Ms,this.up),this.quaternion.setFromRotationMatrix(Ni),n&&(Ni.extractRotation(n.matrixWorld),zn.setFromRotationMatrix(Ni),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};de.DEFAULT_UP=new F(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=class extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Bt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Bt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Bt.workingColorSpace){if(t=Hl(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return Bt.colorSpaceToWorking(this,n),this}setStyle(t,e=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){let i=qh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return Bt.workingToColorSpace(Ue.copy(this),t),Math.round(Gt(Ue.r*255,0,255))*65536+Math.round(Gt(Ue.g*255,0,255))*256+Math.round(Gt(Ue.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bt.workingColorSpace){Bt.workingToColorSpace(Ue.copy(this),e);let i=Ue.r,n=Ue.g,r=Ue.b,a=Math.max(i,n,r),o=Math.min(i,n,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-i)/d+2;break;case r:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Bt.workingColorSpace){return Bt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Qt){Bt.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,i=Ue.g,n=Ue.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Pr);let i=Ls(ji.h,Pr.h,e),n=Ls(ji.s,Pr.s,e),r=Ls(ji.l,Pr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Lt;Lt.NAMES=qh;var An=class extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mi=new F,Li=new F,Vo=new F,Di=new F,Gn=new F,Hn=new F,Lc=new F,Go=new F,Ho=new F,Wo=new F,Xo=new te,qo=new te,Yo=new te,Si=class s{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),mi.subVectors(t,e),n.cross(mi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){mi.subVectors(n,e),Li.subVectors(i,e),Vo.subVectors(t,e);let a=mi.dot(mi),o=mi.dot(Li),c=mi.dot(Vo),l=Li.dot(Li),h=Li.dot(Vo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(a,Di.y),c.addScaledVector(o,Di.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Xo,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(t,e,i,n){return mi.subVectors(i,e),Li.subVectors(t,e),mi.cross(Li).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),mi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Gn.subVectors(n,i),Hn.subVectors(r,i),Go.subVectors(t,i);let c=Gn.dot(Go),l=Hn.dot(Go);if(c<=0&&l<=0)return e.copy(i);Ho.subVectors(t,n);let h=Gn.dot(Ho),d=Hn.dot(Ho);if(h>=0&&d<=h)return e.copy(n);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Gn,a);Wo.subVectors(t,r);let f=Gn.dot(Wo),g=Hn.dot(Wo);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Hn,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Lc.subVectors(r,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(Lc,o);let m=1/(p+x+u);return a=x*m,o=u*m,e.copy(i).addScaledVector(Gn,a).addScaledVector(Hn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Nr.subVectors(this.max,Ts),Wn.subVectors(t.a,Ts),Xn.subVectors(t.b,Ts),qn.subVectors(t.c,Ts),$i.subVectors(Xn,Wn),Qi.subVectors(qn,Xn),vn.subVectors(Wn,qn);let e=[0,-$i.z,$i.y,0,-Qi.z,Qi.y,0,-vn.z,vn.y,$i.z,0,-$i.x,Qi.z,0,-Qi.x,vn.z,0,-vn.x,-$i.y,$i.x,0,-Qi.y,Qi.x,0,-vn.y,vn.x,0];return!Zo(e,Wn,Xn,qn,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Wn,Xn,qn,Nr))?!1:(Lr.crossVectors($i,Qi),e=[Lr.x,Lr.y,Lr.z],Zo(e,Wn,Xn,qn,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new F,new F,new F,new F,new F,new F,new F,new F],gi=new F,Ir=new Vi,Wn=new F,Xn=new F,qn=new F,$i=new F,Qi=new F,vn=new F,Ts=new F,Nr=new F,Lr=new F,bn=new F;function Zo(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){bn.fromArray(s,r);let o=n.x*Math.abs(bn.x)+n.y*Math.abs(bn.y)+n.z*Math.abs(bn.z),c=t.dot(bn),l=e.dot(bn),h=i.dot(bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var pe=new F,Dr=new Pt,xd=0,We=class extends _i{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=ui,this.version=0,this._normalizationScale=t!==void 0?Xl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xh(t,this.array)}};var ks=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var zs=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Yt=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}},yd=new Vi,Es=new F,Jo=new F,Gi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Es,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Jo)),this.expandByPoint(Es.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vd=0,oi=new Nt,Ko=new de,Yn=new F,ti=new Vi,As=new Vi,Te=new F,Ie=class s extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?zs:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,i){return oi.makeTranslation(t,e,i),this.applyMatrix4(oi),this}scale(t,e,i){return oi.makeScale(t,e,i),this.applyMatrix4(oi),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(ti.min,As.min),ti.expandByPoint(Te),Te.addVectors(ti.max,As.max),ti.expandByPoint(Te)):(ti.expandByPoint(As.min),ti.expandByPoint(As.max))}ti.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Te.fromBufferAttribute(o,l),c&&(Yn.fromBufferAttribute(t,l),Te.add(Yn)),n=Math.max(n,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new We(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new F,c[R]=new F;let h=new F,d=new F,u=new F,f=new Pt,g=new Pt,x=new Pt,p=new F,m=new F;function y(R,C,P){l[R]=l[C]=l[P]=1,h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),d.sub(h),u.sub(h),g.sub(f),x.sub(f);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(N),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(N),o[R].add(p),o[C].add(p),o[P].add(p),c[R].add(m),c[C].add(m),c[P].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,C=T.length;R<C;++R){let P=T[R],N=P.start,B=P.count;for(let I=N,k=N+B;I<k;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new F,A=new F,E=new F,_=new F;function b(R){E.fromBufferAttribute(n,R),_.copy(E);let C=o[R];v.copy(C),v.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(_,C);let N=A.dot(c[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,N)}for(let R=0,C=i.count;R<C;++R)l[R]&&b(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new We(u,h,d)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let n={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jo=new F,bd=new F,Sd=new Ut,ei=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=jo.subVectors(i,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Sd.getNormalMatrix(t),n=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Md=0,Mi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ei().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new F,$o=new F,Ur=new F,Fr=new F,nn=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){$o.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),c=-Fr.dot(Ur),l=Fr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy($o).addScaledVector(Ur,u),f}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),n=Fi.dot(Fi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=i.x-a.x,y=i.y-a.y,T=i.z-a.z,v=Math.abs(c),A=Math.abs(l),E=Math.abs(h),_,b,R,C,P,N,B,I,k,D,z,Y;if(v>=A&&v>=E?(R=c,N=d,k=g,Y=m,c>=0?(_=l,b=h,C=u,P=f,B=x,I=p,D=y,z=T):(_=h,b=l,C=f,P=u,B=p,I=x,D=T,z=y)):A>=E?(R=l,N=u,k=x,Y=y,l>=0?(_=h,b=c,C=f,P=d,B=p,I=g,D=T,z=m):(_=c,b=h,C=d,P=f,B=g,I=p,D=m,z=T)):(R=h,N=f,k=p,Y=T,h>=0?(_=c,b=l,C=d,P=u,B=g,I=x,D=m,z=y):(_=l,b=c,C=u,P=d,B=x,I=g,D=y,z=m)),R===0)return null;let H=_/R,J=b/R,K=1/R,lt=C-H*N,ut=P-J*N,V=B-H*k,$=I-J*k,tt=D-H*Y,nt=z-J*Y,rt=tt*$-nt*V,wt=lt*nt-ut*tt,ee=V*ut-$*lt;if(n){if(rt<0||wt<0||ee<0)return null}else if((rt<0||wt<0||ee<0)&&(rt>0||wt>0||ee>0))return null;let Rt=rt+wt+ee;if(Rt===0)return null;let jt=K*(rt*N+wt*k+ee*Y);return(Rt>0?jt<0:jt>0)?null:this.at(jt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dc=new Nt,Sn=new nn,Or=new Gi,Uc=new F,Br=new F,kr=new F,zr=new F,Qo=new F,Vr=new F,Fc=new F,Gr=new F,we=class extends de{constructor(t=new Ie,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Qo.fromBufferAttribute(d,t),a?Vr.addScaledVector(Qo,h):Vr.addScaledVector(Qo.sub(e),h))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Sn.copy(t.ray).recast(t.near),!(Or.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Or,Uc)===null||Sn.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),Sn.copy(t.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&Sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Sn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,A=T;v<A;v+=3){let E=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);n=Hr(this,m,t,i,l,h,d,E,_,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=o.getX(p),T=o.getX(p+1),v=o.getX(p+2);n=Hr(this,a,t,i,l,h,d,y,T,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,A=T;v<A;v+=3){let E=v,_=v+1,b=v+2;n=Hr(this,m,t,i,l,h,d,E,_,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,T=p+1,v=p+2;n=Hr(this,a,t,i,l,h,d,y,T,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Td(s,t,e,i,n,r,a,o){let c;if(t.side===Ge?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===wi,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:s}}function Hr(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,Br),s.getVertexPosition(c,kr),s.getVertexPosition(l,zr);let h=Td(s,t,e,i,Br,kr,zr,Fc);if(h){let d=new F;Si.getBarycoord(Fc,Br,kr,zr,d),n&&(h.uv=Si.getInterpolatedAttribute(n,o,c,l,d,new Pt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,d,new Pt)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new F,materialIndex:0};Si.getNormal(Br,kr,zr,u.normal),h.face=u,h.barycoord=d}return h}var ws=new te,Oc=new te,Bc=new te,Ed=new te,kc=new Nt,Wr=new F,tl=new Gi,zc=new Nt,el=new nn,Vs=class extends we{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sl,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Wr),this.boundingSphere.expandByPoint(Wr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(n),t.ray.intersectsSphere(tl)!==!1&&(zc.copy(n).invert(),el.copy(t.ray).applyMatrix4(zc),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,el)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new te,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rh?this.bindMatrixInverse.copy(this.bindMatrix).invert():At("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Oc.fromBufferAttribute(n.attributes.skinIndex,t),Bc.fromBufferAttribute(n.attributes.skinWeight,t),e.isVector4?(ws.copy(e),e.set(0,0,0,0)):(ws.set(e.x,e.y,e.z,1),e.set(0,0,0)),ws.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Bc.getComponent(r);if(a!==0){let o=Oc.getComponent(r);kc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Ed.copy(ws).applyMatrix4(kc),a)}}return e.isVector4&&(e.w=ws.w),e.applyMatrix4(this.bindMatrixInverse)}},rs=class extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rn=class extends Ve{constructor(t=null,e=1,i=1,n,r,a,o,c,l=Ae,h=Ae,d,u){super(null,a,o,c,l,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vc=new Nt,Ad=new Nt,Gs=class s{constructor(t=[],e=[]){this.uuid=pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){At("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Nt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Ad;Vc.multiplyMatrices(o,e[r]),Vc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Rn(e,t,t,di,ui);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let r=t.bones[i],a=e[r];a===void 0&&(At("Skeleton: No bone found with UUID:",r),a=new rs),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}};var Mn=new Gi,wd=new Pt(.5,.5),Xr=new F,sn=class{constructor(t=new ei,e=new ei,i=new ei,n=new ei,r=new ei,a=new ei){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],T=r[13],v=r[14],A=r[15];if(n[0].setComponents(l-a,f-h,m-g,A-y).normalize(),n[1].setComponents(l+a,f+h,m+g,A+y).normalize(),n[2].setComponents(l+o,f+d,m+x,A+T).normalize(),n[3].setComponents(l-o,f-d,m-x,A-T).normalize(),i)n[4].setComponents(c,u,p,v).normalize(),n[5].setComponents(l-c,f-u,m-p,A-v).normalize();else if(n[4].setComponents(l-c,f-u,m-p,A-v).normalize(),e===li)n[5].setComponents(l+c,f+u,m+p,A+v).normalize();else if(e===ts)n[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){Mn.center.set(0,0,0);let e=wd.distanceTo(t.center);return Mn.radius=.7071067811865476+e,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Xr.x=n.normal.x>0?t.max.x:t.min.x,Xr.y=n.normal.y>0?t.max.y:t.min.y,Xr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gc=new Nt,da=class s{constructor(){this.coordinateSystem=li,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];Gc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new sn),i[n].setFromProjectionMatrix(Gc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new sn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var rn=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fa=new F,pa=new F,Hc=new Nt,Rs=new nn,qr=new Gi,il=new F,Wc=new F,as=class extends de{constructor(t=new Ie,e=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)fa.fromBufferAttribute(e,n-1),pa.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new Yt(i,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(n),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;Hc.copy(n).invert(),Rs.copy(t.ray).applyMatrix4(Hc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),y=h.getX(x+1),T=Yr(this,t,Rs,c,m,y,x);T&&e.push(T)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=Yr(this,t,Rs,c,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=l){let m=Yr(this,t,Rs,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Yr(this,t,Rs,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yr(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(fa.fromBufferAttribute(o,n),pa.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,pa,il,Wc)>i)return;il.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(il);if(!(l<t.near||l>t.far))return{distance:l,point:Wc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Xc=new F,qc=new F,os=class extends as{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Xc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Xc.distanceTo(qc);t.setAttribute("lineDistance",new Yt(i,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hs=class extends Ve{constructor(t=[],e=Un,i,n,r,a,o,c,l,h){super(t,e,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Hi=class extends Ve{constructor(t,e,i=xi,n,r,a,o=Ae,c=Ae,l,h=zi,d=1){if(h!==zi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ws=class extends Hi{constructor(t,e=xi,i=Un,n,r,a=Ae,o=Ae,c,l=zi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},an=class s extends Ie{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function g(x,p,m,y,T,v,A,E,_,b,R){let C=v/_,P=A/b,N=v/2,B=A/2,I=E/2,k=_+1,D=b+1,z=0,Y=0,H=new F;for(let J=0;J<D;J++){let K=J*P-B;for(let lt=0;lt<k;lt++){let ut=lt*C-N;H[x]=ut*y,H[p]=K*T,H[m]=I,l.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[m]=E>0?1:-1,h.push(H.x,H.y,H.z),d.push(lt/_),d.push(1-J/b),z+=1}}for(let J=0;J<b;J++)for(let K=0;K<_;K++){let lt=u+K+k*J,ut=u+K+k*(J+1),V=u+(K+1)+k*(J+1),$=u+(K+1)+k*J;c.push(lt,ut,$),c.push(ut,V,$),Y+=6}o.addGroup(f,Y,R),f+=Y,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qs=class s extends Ie{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function y(){let v=new F,A=new F,E=0,_=(e-t)/i;for(let b=0;b<=r;b++){let R=[],C=b/r,P=C*(e-t)+t;for(let N=0;N<=n;N++){let B=N/n,I=B*c+o,k=Math.sin(I),D=Math.cos(I);A.x=P*k,A.y=-C*i+p,A.z=P*D,d.push(A.x,A.y,A.z),v.set(k,_,D).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-C),R.push(g++)}x.push(R)}for(let b=0;b<n;b++)for(let R=0;R<r;R++){let C=x[R][b],P=x[R+1][b],N=x[R+1][b+1],B=x[R][b+1];(t>0||R!==0)&&(h.push(C,P,B),E+=3),(e>0||R!==r-1)&&(h.push(P,N,B),E+=3)}l.addGroup(m,E,0),m+=E}function T(v){let A=g,E=new Pt,_=new F,b=0,R=v===!0?t:e,C=v===!0?1:-1;for(let N=1;N<=n;N++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),g++;let P=g;for(let N=0;N<=n;N++){let I=N/n*c+o,k=Math.cos(I),D=Math.sin(I);_.x=R*D,_.y=p*C,_.z=R*k,d.push(_.x,_.y,_.z),u.push(0,C,0),E.x=k*.5+.5,E.y=D*.5*C+.5,f.push(E.x,E.y),g++}for(let N=0;N<n;N++){let B=A+N,I=P+N;v===!0?h.push(I,I+1,B):h.push(I+1,I,B),b+=3}l.addGroup(m,b,v===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};function Rd(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Yh(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Ld(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,d=c;for(let u=e;u<n;u+=e){let f=s[u],g=s[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Ys(r,a,e,o,c,l,0),a}function Yh(s,t,e,i,n){let r;if(n===Wd(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=Yc(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Yc(a/i|0,s[a],s[a+1],r);return r&&ls(r,r.next)&&(Js(r),r=r.next),r}function Cn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ls(e,e.next)||ue(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ys(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Bd(s,i,n,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Pd(s,i,n,r):Cd(s)){t.push(c.i,s.i,l.i),Js(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Id(Cn(s),t),Ys(s,t,e,i,n,r,2)):a===2&&Nd(s,t,e,i,n,r):Ys(Cn(s),t,e,i,n,r,1);break}}}function Cd(s){let t=s.prev,e=s,i=s.next;if(ue(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(n,r,a),d=Math.min(o,c,l),u=Math.max(n,r,a),f=Math.max(o,c,l),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Cs(n,o,r,c,a,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pd(s,t,e,i){let n=s.prev,r=s,a=s.next;if(ue(n,r,a)>=0)return!1;let o=n.x,c=r.x,l=a.x,h=n.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),x=Math.max(o,c,l),p=Math.max(h,d,u),m=ll(f,g,t,e,i),y=ll(x,p,t,e,i),T=s.prevZ,v=s.nextZ;for(;T&&T.z>=m&&v&&v.z<=y;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==n&&T!==a&&Cs(o,h,c,d,l,u,T.x,T.y)&&ue(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Cs(o,h,c,d,l,u,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==n&&T!==a&&Cs(o,h,c,d,l,u,T.x,T.y)&&ue(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Cs(o,h,c,d,l,u,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Id(s,t){let e=s;do{let i=e.prev,n=e.next.next;!ls(i,n)&&Jh(i,e,e.next,n)&&Zs(i,n)&&Zs(n,i)&&(t.push(i.i,e.i,n.i),Js(e),Js(e.next),e=s=n),e=e.next}while(e!==s);return Cn(e)}function Nd(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vd(a,o)){let c=Kh(a,o);a=Cn(a,a.next),c=Cn(c,c.next),Ys(a,t,e,i,n,r,0),Ys(c,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ld(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:s.length,l=Yh(s,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(zd(l))}n.sort(Dd);for(let r=0;r<n.length;r++)e=Ud(n[r],e);return e}function Dd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Ud(s,t){let e=Fd(s,t);if(!e)return t;let i=Kh(e,s);return Cn(i,i.next),Cn(e,e.next)}function Fd(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(ls(s,e))return e;do{if(ls(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Zh(n<l?i:r,n,c,l,n<l?r:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);Zs(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Od(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Od(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function Bd(s,t,e,i){let n=s;do n.z===0&&(n.z=ll(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,kd(n)}function kd(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function ll(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function zd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zh(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Cs(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&Zh(s,t,e,i,n,r,a,o)}function Vd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gd(s,t)&&(Zs(s,t)&&Zs(t,s)&&Hd(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||ls(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ls(s,t){return s.x===t.x&&s.y===t.y}function Jh(s,t,e,i){let n=Jr(ue(s,t,e)),r=Jr(ue(s,t,i)),a=Jr(ue(e,i,s)),o=Jr(ue(e,i,t));return!!(n!==r&&a!==o||n===0&&Zr(s,e,t)||r===0&&Zr(s,i,t)||a===0&&Zr(e,s,i)||o===0&&Zr(e,t,i))}function Zr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jr(s){return s>0?1:s<0?-1:0}function Gd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zs(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function Hd(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Kh(s,t){let e=cl(s.i,s.x,s.y),i=cl(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Yc(s,t,e,i){let n=cl(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wd(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var hl=class{static triangulate(t,e,i=2){return Rd(t,e,i)}},cs=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];Zc(t),Jc(i,t);let a=t.length;e.forEach(Zc);for(let c=0;c<e.length;c++)n.push(a),a+=e[c].length,Jc(i,e[c]);let o=hl.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Zc(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Jc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ks=class s extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*u-a;for(let T=0;T<l;T++){let v=T*d-r;g.push(v,-y,0),x.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let T=y+l*m,v=y+l*(m+1),A=y+1+l*(m+1),E=y+1+l*m;f.push(T,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var js=class s extends Ie{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,u=new F,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],T=m/i,v=a+T*o,A=t*Math.cos(v),E=Math.sqrt(t*t-A*A),_=0;m===0&&a===0?_=.5/e:m===i&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let R=b/e,C=n+R*r;d.x=-E*Math.cos(C),d.y=A,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(R+_,1-T),y.push(l++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let T=h[m][y+1],v=h[m][y],A=h[m+1][y],E=h[m+1][y+1];(m!==0||a>0)&&f.push(T,v,E),(m!==i-1||c<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function On(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Kc(n))n.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Kc(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Oe(s){let t={};for(let e=0;e<s.length;e++){let i=On(s[e]);for(let n in i)t[n]=i[n]}return t}function Kc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Xd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ql(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var jh={clone:On,merge:Oe},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=On(t.uniforms),this.uniformsGroups=Xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Lt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Pt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new F().fromArray(n.value);break;case"v4":this.uniforms[i].value=new te().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ei=class extends Mi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $s=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ga=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function en(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ps(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Zd(s){function t(n,r){return s[n]-s[r]}let e=s.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function jc(s,t,e){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=e[r]*t;for(let c=0;c!==t;++c)n[a++]=s[o+c]}return n}function Jd(s,t,e,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=s[n++];while(r!==void 0)}var on=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends on{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=t,o=2*e-i;break;case ol:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case al:a=t,c=2*i-e;break;case ol:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,y=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,T=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+y*a[l+A]+T*a[c+A]+v*a[d+A];return r}},ya=class extends on{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},va=class extends on{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ba=class extends on{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(n-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*x+a[c+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[l+g],p=a[c+g],m=f*u+g*2,y=d[m],T=d[m+1],v=t*u+g*2,A=h[v],E=h[v+1],_=jd(i,e,y,A,n);r[g]=$h(_,x,T,E,p)}return r}};function $h(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function Kd(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function jd(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=$h(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let c=Kd(r,t,e,i,n);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var qe=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=en(e,this.TimeBufferType),this.values=en(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:en(t.times,Array),values:en(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Ps(t.settings)&&(i.settings={inTangents:en(t.settings.inTangents,Array),outTangents:en(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tn:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case Ds:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return At("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tn;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return Ds}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Ps(this.settings)&&($c(this.settings.inTangents,t),$c(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Ps(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Dt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&qu(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$r,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(n)c=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Ps(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function $c(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Qc(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}qe.prototype.ValueTypeName="";qe.prototype.TimeBufferType=Float32Array;qe.prototype.ValueBufferType=Float32Array;qe.prototype.DefaultInterpolation=la;var Wi=class extends qe{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Tn;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends qe{constructor(t,e,i,n){super(t,e,i,n)}};Qs.prototype.ValueTypeName="color";var hs=class extends qe{constructor(t,e,i,n){super(t,e,i,n)}};hs.prototype.ValueTypeName="number";var Sa=class extends on{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),l=t*o;for(let h=l+o;l!==h;l+=4)le.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ai=class extends qe{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends qe{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Tn;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fe=class extends qe{constructor(t,e,i,n){super(t,e,i,n)}};Fe.prototype.ValueTypeName="vector";var us=class{constructor(t="",e=-1,i=[],n=Ph){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Qd(i[a]).scale(n));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=i.length;r!==a;++r)e.push(qe.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Zd(c);c=jc(c,1,h),l=jc(l,1,h),!n&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new hs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=n[d];u||(n[d]=u=[]),u.push(l)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function $d(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return Fe;case"color":return Qs;case"quaternion":return Ai;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=$d(s.type);if(s.times===void 0){let i=[],n=[];Jd(s.keys,i,n,"value"),s.times=i,s.values=n}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Ps(s.settings)&&(e.settings={inTangents:en(s.settings.inTangents,Float32Array),outTangents:en(s.settings.outTangents,Float32Array)}),e}var $n={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(th(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!th(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function th(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ma=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uo=new Ma,Ye=class{constructor(t){this.manager=t!==void 0?t:uo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ye.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},ul=class extends Error{constructor(t,e){super(t),this.response=e}},ln=class extends Ye{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=$n.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:i,onError:n});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&At("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Oi[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,x=0,p=new ReadableStream({start(m){y();function y(){d.read().then(({done:T,value:v})=>{if(T)m.close();else{x+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,_=h.length;E<_;E++){let b=h[E];b.onProgress&&b.onProgress(A)}m.enqueue(v),y()}},T=>{m.error(T)})}}});return new Response(p)}else throw new ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{$n.add(`file:${t}`,l);let h=Oi[t];delete Oi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Oi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Oi[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zn=new WeakMap,Ta=class extends Ye{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=$n.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Zn.get(a);d===void 0&&(d=[],Zn.set(a,d)),d.push({onLoad:e,onError:n})}return a}let o=es("img");function c(){h(),e&&e(this);let d=Zn.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Zn.delete(this),r.manager.itemEnd(t)}function l(d){h(),n&&n(d),$n.remove(`image:${t}`);let u=Zn.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Zn.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var tr=class extends Ye{constructor(t){super(t)}load(t,e,i,n){let r=this,a=new Rn,o=new ln(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(c){let l;try{l=r.parse(c)}catch(h){n!==void 0?n(h):Dt(h);return}r._applyTexData(a,l),e&&e(a,l)},i,n),a}createDataTexture(t){let e=new Rn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:ze,t.wrapT=e.wrapT!==void 0?e.wrapT:ze,t.magFilter=e.magFilter!==void 0?e.magFilter:Ee,t.minFilter=e.minFilter!==void 0?e.minFilter:Ee,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=hi),e.mipmapCount===1&&(t.minFilter=Ee),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},Pn=class extends Ye{constructor(t){super(t)}load(t,e,i,n){let r=new Ve,a=new Ta(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},cn=class extends de{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},er=class extends cn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nl=new Nt,eh=new F,ih=new F,ds=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sn,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(nl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kr=new F,jr=new le,bi=new F,ir=class extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,jr,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Kr,jr,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tn=new F,nh=new Pt,sh=new Pt,me=class extends ir{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=En*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return En*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tn.x,tn.y).multiplyScalar(-t/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-t/tn.z)}getViewSize(t,e){return this.getViewBounds(t,nh,sh),e.subVectors(sh,nh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},dl=class extends ds{constructor(){super(new me(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=En*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},nr=class extends cn{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new dl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},fl=class extends ds{constructor(){super(new me(90,1,.5,500)),this.isPointLightShadow=!0}},sr=class extends cn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},In=class extends ir{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pl=class extends ds{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hn=class extends cn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new pl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},rr=class extends cn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Nn=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Jn=-90,Kn=1,fs=class extends de{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new me(Jn,Kn,t,e);n.layers=this.layers,this.add(n);let r=new me(Jn,Kn,t,e);r.layers=this.layers,this.add(r);let a=new me(Jn,Kn,t,e);a.layers=this.layers,this.add(a);let o=new me(Jn,Kn,t,e);o.layers=this.layers,this.add(o);let c=new me(Jn,Kn,t,e);c.layers=this.layers,this.add(c);let l=new me(Jn,Kn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ea=class extends me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Yl="\\[\\]\\.:\\/",tf=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",ef="[^"+Yl.replace("\\.","")+"]",nf=/((?:WC+[\/:])*)/.source.replace("WC",Zl),sf=/(WCOD+)?/.source.replace("WCOD",ef),rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),of=new RegExp("^"+nf+sf+rf+af+"$"),lf=["material","materials","bones","map"],ml=class{constructor(t,e,i){let n=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tf,"")}static parseTrackName(t){let e=of.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);lf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[n];if(a===void 0){let l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=ml;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d0=new Float32Array(1);var ps=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};var ar=class extends os{constructor(t=10,e=10,i=4473924,n=8947848){i=new Lt(i),n=new Lt(n);let r=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,f=0,g=-o;u<=e;u++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let x=u===r?i:n;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}let h=new Ie;h.setAttribute("position",new Yt(c,3)),h.setAttribute("color",new Yt(l,3));let d=new rn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var or=class extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Jl(s,t,e,i){let n=cf(i);switch(e){case Ul:return s*t;case Ol:return s*t/n.components*n.byteLength;case Na:return s*t/n.components*n.byteLength;case fn:return s*t*2/n.components*n.byteLength;case La:return s*t*2/n.components*n.byteLength;case Fl:return s*t*3/n.components*n.byteLength;case di:return s*t*4/n.components*n.byteLength;case Da:return s*t*4/n.components*n.byteLength;case ur:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(s,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(s,8)*Math.max(t,8)/2;case ka:case za:case Ga:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Va:case mr:case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ro:case ao:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lo:case co:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gr:case ho:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(s){switch(s){case Je:case Il:return{byteLength:1,components:1};case xs:case Nl:case yi:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case xi:case Ca:case ui:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vu(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,cp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,hp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
void main() {
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,Um=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,km=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,Hm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:yf,batching_pars_vertex:vf,batching_vertex:bf,begin_vertex:Sf,beginnormal_vertex:Mf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Nf,color_pars_vertex:Lf,color_vertex:Df,common:Uf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:zf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Hf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:np,envmap_vertex:Yf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:jf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Qf,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,lightprobes_pars_fragment:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:yp,map_particle_fragment:vp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Tp,morphcolor_vertex:Ep,morphnormal_vertex:Ap,morphtarget_pars_vertex:wp,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Np,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:kp,packing:zp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Hp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Kp,skinbase_vertex:jp,skinning_pars_vertex:$p,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:im,tonemapping_fragment:nm,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:xm,distance_vert:ym,distance_frag:vm,equirect_vert:bm,equirect_frag:Sm,linedashed_vert:Mm,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:Am,meshlambert_vert:wm,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Nm,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:km,points_frag:zm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Hm,sprite_frag:Wm},yt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Pi={basic:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([yt.points,yt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([yt.common,yt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([yt.sprite,yt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Oe([yt.common,yt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Oe([yt.lights,yt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Pi.physical={uniforms:Oe([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var fo={r:0,b:0,g:0},Xm=new Nt,bu=new Ut;bu.set(-1,0,0,0,1,0,0,0,1);function qm(s,t,e,i,n,r){let a=new Lt(0),o=n===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(y){let T=!1,v=f(y);v===null?p(a,o):v&&v.isColor&&(p(v,1),T=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,T){let v=f(T);v&&v.isCubeTexture?(l===void 0&&(l=new we(new an(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:On(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bu),l.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Kt,(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new we(new Ks(2,2),new Ti({name:"BackgroundMaterial",uniforms:On(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(v.colorSpace)!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,T){y.getRGB(fo,ql(s)),e.buffers.color.setClear(fo.r,fo.g,fo.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Ym(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,a=!1;function o(P,N,B,I,k){let D=!1,z=d(P,I,B,N);r!==z&&(r=z,l(r.object)),D=f(P,I,B,k),D&&g(P,I,B,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(P,N,B,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,N,B,I){let k=I.wireframe===!0,D=i[N.id];D===void 0&&(D={},i[N.id]=D);let z=P.isInstancedMesh===!0?P.id:0,Y=D[z];Y===void 0&&(Y={},D[z]=Y);let H=Y[B.id];H===void 0&&(H={},Y[B.id]=H);let J=H[k];return J===void 0&&(J=u(c()),H[k]=J),J}function u(P){let N=[],B=[],I=[];for(let k=0;k<e;k++)N[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,N,B,I){let k=r.attributes,D=N.attributes,z=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let K=k[H],lt=D[H];if(lt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function g(P,N,B,I){let k={},D=N.attributes,z=0,Y=B.getAttributes();for(let H in Y)if(Y[H].location>=0){let K=D[H];K===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),k[H]=lt,z++}r.attributes=k,r.attributesNum=z,r.index=I}function x(){let P=r.newAttributes;for(let N=0,B=P.length;N<B;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[P]=1,I[P]===0&&(s.enableVertexAttribArray(P),I[P]=1),k[P]!==N&&(s.vertexAttribDivisor(P,N),k[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let B=0,I=N.length;B<I;B++)N[B]!==P[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function T(P,N,B,I,k,D,z){z===!0?s.vertexAttribIPointer(P,N,B,k,D):s.vertexAttribPointer(P,N,B,I,k,D)}function v(P,N,B,I){x();let k=I.attributes,D=B.getAttributes(),z=N.defaultAttributeValues;for(let Y in D){let H=D[Y];if(H.location>=0){let J=k[Y];if(J===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let K=J.normalized,lt=J.itemSize,ut=t.get(J);if(ut===void 0)continue;let V=ut.buffer,$=ut.type,tt=ut.bytesPerElement,nt=$===s.INT||$===s.UNSIGNED_INT||J.gpuType===Ca;if(J.isInterleavedBufferAttribute){let rt=J.data,wt=rt.isInterleavedBuffer===!0?rt.stride:rt.itemSize,ee=J.offset;if(rt.isInstancedInterleavedBuffer||rt.isInstancedBufferAttribute){for(let Rt=0;Rt<H.locationSize;Rt++)m(H.location+Rt,rt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Rt=0;Rt<H.locationSize;Rt++)p(H.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,V);for(let Rt=0;Rt<H.locationSize;Rt++)T(H.location+Rt,lt/H.locationSize,$,K,wt*tt,(ee+lt/H.locationSize*Rt)*tt,nt)}else{if(J.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt,J.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,V);for(let rt=0;rt<H.locationSize;rt++)T(H.location+rt,lt/H.locationSize,$,K,lt*tt,lt/H.locationSize*rt*tt,nt)}}else if(z!==void 0){let K=z[Y];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}y()}function A(){R();for(let P in i){let N=i[P];for(let B in N){let I=N[B];for(let k in I){let D=I[k];for(let z in D)h(D[z].object),delete D[z];delete I[k]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let B in N){let I=N[B];for(let k in I){let D=I[k];for(let z in D)h(D[z].object),delete D[z];delete I[k]}}delete i[P.id]}function _(P){for(let N in i){let B=i[N];for(let I in B){let k=B[I];if(k[P.id]===void 0)continue;let D=k[P.id];for(let z in D)h(D[z].object),delete D[z];delete k[P.id]}}}function b(P){for(let N in i){let B=i[N],I=P.isInstancedMesh===!0?P.id:0,k=B[I];if(k!==void 0){for(let D in k){let z=k[D];for(let Y in z)h(z[Y].object),delete z[Y];delete k[D]}delete B[I],Object.keys(B).length===0&&delete i[N]}}}function R(){C(),a=!0,r!==n&&(r=n,l(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Zm(s,t,e){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==di&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Je&&_!==ui&&!b&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(At("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&At("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:A,samples:E}}function Km(s){let t=this,e=null,i=0,n=!1,r=!1,a=new ei,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):l();else{let y=r?0:i,T=y*4,v=m.clippingState||null;c.value=v,v=h(g,u,T,f);for(let A=0;A!==T;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,v=f;T!==x;++T,v+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var vr=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Hs(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new an(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:Ln});r.uniforms.tEquirect.value=e;let a=new we(n,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Ee),new fs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Qh=256,jm=3,$m=20,Su=256,Mu=16,Qm=3,tg=new F,eg=new Lt,mo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fs(1,10,null),this._boxMesh=new we(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=tg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(eg));let p=new fs(i,n,h);return p.position.copy(o),p.update(c,t),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Qh,Wl(t))}_fromTexture(t,e){t.mapping===Un||t.mapping===_s?this._setSize(t.image.length===0?Qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=tu(t,!1,!1),i=Math.log2(t)-jm;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Un||t.mapping===_s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=eu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ig(),this._integrationMaterial=ng());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Mu);for(let a=0;a<=i;a++){let o=s.lodToRoughness(a,i);if(a>i-Qm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Su*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=sg());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function tu(s,t,e){return new vr(s,{minFilter:hi,generateMipmaps:t,type:yi,colorSpace:Us,depthBuffer:e})}function br(s,t,e){return new Ti({name:s,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:Ge,blending:Ln,depthTest:!1,depthWrite:!1})}function ig(){return br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Su}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ng(){return br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sg(){return br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$m}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function eu(){return br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function iu(){return br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rg(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Aa||f===wa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new vr(g.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Aa||f===wa,x=f===Un||f===_s;if(g||x){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new mo(s)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||x&&y&&c(y)?(i===null&&(i=new mo(s)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Aa?u.mapping=Un:f===wa&&(u.mapping=_s),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function ag(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Is("WebGLRenderer: "+i+" extension not supported."),n}}}function og(s,t,e,i){let n={},r=new WeakMap,a=new FinalizationRegistry(g=>delete n[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete n[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],s.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let y=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?zs:ks,v=new T(Math.ceil(y/3)*6,1),A=v.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,R=0;b<y;b+=3){let C=_[b+0],P=_[b+1],N=_[b+2];A[R++]=C,A[R++]=P,A[R++]=P,A[R++]=N,A[R++]=N,A[R++]=C}}else{m=p.version;for(let _=0,b=0;_<y;_+=3){let R=_+0,C=_+1,P=_+2;A[b++]=R,A[b++]=C,A[b++]=C,A[b++]=P,A[b++]=P,A[b++]=R}}v.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,v)}function u(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function lg(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function cg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function hg(s,t,e){let i=new WeakMap,n=new te;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let R=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*d),_=new Os(E,v,A,d);_.type=ui,_.needsUpdate=!0;let b=T*4;for(let C=0;C<d;C++){let P=p[C],N=m[C],B=y[C],I=v*A*4*C;for(let k=0;k<P.count;k++){let D=k*b;f===!0&&(n.fromBufferAttribute(P,k),E[I+D+0]=n.x,E[I+D+1]=n.y,E[I+D+2]=n.z,E[I+D+3]=0),g===!0&&(n.fromBufferAttribute(N,k),E[I+D+4]=n.x,E[I+D+5]=n.y,E[I+D+6]=n.z,E[I+D+7]=0),x===!0&&(n.fromBufferAttribute(B,k),E[I+D+8]=n.x,E[I+D+9]=n.y,E[I+D+10]=n.z,E[I+D+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new Pt(v,A)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ug(s,t,e,i,n){let r=new WeakMap;function a(l){let h=n.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var dg={[Ml]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Al]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function fg(s,t,e,i,n,r){let a=new ii(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ie;h.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let d=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new we(h,d),f=new In(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,y=null,T=[],v=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),c!==null&&c.setSize(A,E);for(let _=0;_<T.length;_++){let b=T[_];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){T=A,v=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new ii(E,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new ii(E,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&T.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Hi(E,_),r===!0&&(l.format=qi,l.type=Fn)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<T.length;R++){let C=T[R];C.setSize&&C.setSize(E,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,E){if(p||A.toneMapping===Ri&&T.length===0)return!1;if(y=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return v===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Ri,!0},this.hasRenderPass=function(){return v},this.end=function(A,E){A.toneMapping=m,p=!0;let _=a,b=o;for(let R=0;R<T.length;R++){let C=T[R];C.enabled!==!1&&(C.render(A,b,_,E),C.needsSwap!==!1&&(_=b,b=b===o?c:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},Bt.getTransfer(g)===Kt&&(d.defines.SRGB_TRANSFER="");let R=dg[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(u,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Tu=new Ve,Eu=new Hi(1,1),Au=new Ws(1),wu=new Os,Ru=new ua,Cu=new Hs,nu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function vs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=nu[n];if(r===void 0&&(r=new Float32Array(n),nu[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function _o(s,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function pg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function _g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function xg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;ou.set(i),s.uniformMatrix2fv(this.addr,!1,ou),ye(e,i)}}function yg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;au.set(i),s.uniformMatrix3fv(this.addr,!1,au),ye(e,i)}}function vg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;ru.set(i),s.uniformMatrix4fv(this.addr,!1,ru),ye(e,i)}}function bg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Eg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function xo(s){return s.version===0&&(s.compareFunction=zl,s.needsUpdate=!0),s}function Cg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=xo(Eu):r=Tu,e.setTexture2D(t||r,n)}function Pg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ru,n)}function Ig(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=xo(Au):r=Cu,e.setTextureCube(t||r,n)}function Ng(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||wu,n)}function Lg(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return yg;case 35676:return vg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Mg;case 35669:case 35673:return Tg;case 5125:return Eg;case 36294:return Ag;case 36295:return wg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}function Dg(s,t){s.uniform1fv(this.addr,t)}function Ug(s,t){let e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function Fg(s,t){let e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function Og(s,t){let e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function Bg(s,t){let e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kg(s,t){let e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zg(s,t){let e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Vg(s,t){s.uniform1iv(this.addr,t)}function Gg(s,t){s.uniform2iv(this.addr,t)}function Hg(s,t){s.uniform3iv(this.addr,t)}function Wg(s,t){s.uniform4iv(this.addr,t)}function Xg(s,t){s.uniform1uiv(this.addr,t)}function qg(s,t){s.uniform2uiv(this.addr,t)}function Yg(s,t){s.uniform3uiv(this.addr,t)}function Zg(s,t){s.uniform4uiv(this.addr,t)}function Jg(s,t,e){let i=this.cache,n=t.length,r=_o(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=xo(Eu):a=Tu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Kg(s,t,e){let i=this.cache,n=t.length,r=_o(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ru,r[a])}function jg(s,t,e){let i=this.cache,n=t.length,r=_o(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=xo(Au):a=Cu;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function $g(s,t,e){let i=this.cache,n=t.length,r=_o(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||wu,r[a])}function Qg(s){switch(s){case 5126:return Dg;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return $g}}var $l=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}},Ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function lu(s,t){s.seq.push(t),s.map[t.id]=t}function t_(s,t,e){let i=s.name,n=i.length;for(Kl.lastIndex=0;;){let r=Kl.exec(i),a=Kl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){lu(e,l===void 0?new $l(o,s,t):new Ql(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new tc(o),lu(e,d)),e=d}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);t_(o,c,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function cu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var e_=37297,i_=0;function n_(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var hu=new Ut;function s_(s){Bt._getMatrix(hu,Bt.workingColorSpace,s);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(s)){case Fs:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function uu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+n_(s.getShaderSource(t),o)}else return r}function r_(s,t){let e=s_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var a_={[Ml]:"Linear",[Tl]:"Reinhard",[El]:"Cineon",[Al]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[wl]:"Custom"};function o_(s,t){let e=a_[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var po=new F;function l_(){Bt.getLuminanceCoefficients(po);let s=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function h_(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function u_(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function yr(s){return s!==""}function du(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(s){return s.replace(d_,f_)}function f_(s,t){let e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ec(e)}var p_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(s){return s.replace(p_,m_)}function m_(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function mu(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var g_={[lr]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function __(s){return g_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x_={[_s]:"ENVMAP_MODE_REFRACTION"};function y_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v_={[cr]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function b_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":v_[s.combine]||"ENVMAP_BLENDING_NONE"}function S_(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=__(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=y_(e),d=b_(e),u=c_(e),f=h_(r),g=n.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(x=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?o_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,r_("linearToOutputTexel",e.outputColorSpace),l_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=ec(a),a=du(a,e),a=fu(a,e),o=ec(o),o=du(o,e),o=fu(o,e),a=pu(a),o=pu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=m+x+a,T=m+p+o,v=cu(n,n.VERTEX_SHADER,y),A=cu(n,n.FRAGMENT_SHADER,T);n.attachShader(g,v),n.attachShader(g,A),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(C){if(s.debug.checkShaderErrors){let P=n.getProgramInfoLog(g)||"",N=n.getShaderInfoLog(v)||"",B=n.getShaderInfoLog(A)||"",I=P.trim(),k=N.trim(),D=B.trim(),z=!0,Y=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,v,A);else{let H=uu(n,v,"vertex"),J=uu(n,A,"fragment");Dt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+H+`
`+J)}else I!==""?At("WebGLProgram: Program Info Log:",I):(k===""||D==="")&&(Y=!1);Y&&(C.diagnostics={runnable:z,programLog:I,vertexShader:{log:k,prefix:x},fragmentShader:{log:D,prefix:p}})}n.deleteShader(v),n.deleteShader(A),_=new ys(n,g),b=u_(n,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(g,e_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var M_=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nc(t),e.set(t,i)),i}},nc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function T_(s){return s===fn||s===mr||s===gr}function E_(s,t,e,i,n,r){let a=new Bs,o=new ic,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,R,C,P,N){let B=C.fog,I=P.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||k,D),Y=u[_.type],H=i.precision;_.precision!==null&&(H=i.getMaxPrecision(_.precision),H!==_.precision&&At("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=J!==void 0?J.length:0,lt=0;I.morphAttributes.position!==void 0&&(lt=1),I.morphAttributes.normal!==void 0&&(lt=2),I.morphAttributes.color!==void 0&&(lt=3);let ut,V,$,tt;if(Y){let xt=Pi[Y];ut=xt.vertexShader,V=xt.fragmentShader}else{ut=_.vertexShader,V=_.fragmentShader;let xt=o.getVertexShaderStage(_),$t=o.getFragmentShaderStage(_);o.update(_,xt,$t),$=xt.id,tt=$t.id}let nt=s.getRenderTarget(),rt=s.state.buffers.depth.getReversed(),wt=P.isInstancedMesh===!0,ee=P.isBatchedMesh===!0,Rt=!!_.map,jt=!!_.matcap,ie=!!z,Ht=ie&&z.isPMREMTexture===!0,Ce=!!_.aoMap,ge=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,vi=!!_.displacementMap,be=!!_.emissiveMap,ni=!!_.metalnessMap,si=!!_.roughnessMap,ri=_.anisotropy>0,O=_.clearcoat>0,ai=_.diffuseRoughness>0,ae=_.dispersion>0,oe=_.retroreflectivity>0,_t=_.iridescence>0,_e=_.sheen>0,It=_.transmission>0,Ft=ri&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,S=O&&!!_.clearcoatNormalMap,W=O&&!!_.clearcoatRoughnessMap,st=ai&&!!_.diffuseRoughnessMap,it=_t&&!!_.iridescenceMap,ct=_t&&!!_.iridescenceThicknessMap,mt=_e&&!!_.sheenColorMap,j=_e&&!!_.sheenRoughnessMap,Q=!!_.specularMap,dt=!!_.specularColorMap,L=!!_.specularIntensityMap,et=It&&!!_.transmissionMap,Z=It&&!!_.thicknessMap,ft=!!_.gradientMap,ot=!!_.alphaMap,ht=_.alphaTest>0,Et=!!_.alphaHash,zt=!!_.extensions,at=Ri;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(at=s.toneMapping);let Ct=Ht?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,kt={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:ut,fragmentShader:V,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ee,batchingColor:ee&&P._colorsTexture!==null,instancing:wt,instancingColor:wt&&P.instanceColor!==null,instancingMorph:wt&&P.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:jt,envMap:ie,envMapMode:ie&&z.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?Ct.length-1:null,envMapSize:Ht?Ct[0].width:null,aoMap:Ce,lightMap:ge,bumpMap:He,normalMap:ce,displacementMap:vi,emissiveMap:be,normalMapObjectSpace:ce&&_.normalMapType===Nh,normalMapTangentSpace:ce&&_.normalMapType===_r,packedNormalMap:ce&&_.normalMapType===_r&&T_(_.normalMap.format),metalnessMap:ni,roughnessMap:si,anisotropy:ri,anisotropyMap:Ft,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:ai,diffuseRoughnessMap:st,dispersion:ae,retroreflection:oe,iridescence:_t,iridescenceMap:it,iridescenceThicknessMap:ct,sheen:_e,sheenColorMap:mt,sheenRoughnessMap:j,specularMap:Q,specularColorMap:dt,specularIntensityMap:L,transmission:It,transmissionMap:et,thicknessMap:Z,gradientMap:ft,opaque:_.transparent===!1&&_.blending===gs&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Et,combine:_.combine,mapUv:Rt&&f(_.map.channel),aoMapUv:Ce&&f(_.aoMap.channel),lightMapUv:ge&&f(_.lightMap.channel),bumpMapUv:He&&f(_.bumpMap.channel),normalMapUv:ce&&f(_.normalMap.channel),displacementMapUv:vi&&f(_.displacementMap.channel),emissiveMapUv:be&&f(_.emissiveMap.channel),metalnessMapUv:ni&&f(_.metalnessMap.channel),roughnessMapUv:si&&f(_.roughnessMap.channel),anisotropyMapUv:Ft&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:et&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:ot&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ce||ri),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Rt||ot),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:rt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:lt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===Kt,decodeVideoTextureEmissive:be&&_.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(_.emissiveMap.colorSpace)===Kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let b=u[_.type],R;if(b){let C=Pi[b];R=jh.clone(C.uniforms)}else R=_.uniforms;return R}function T(_,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new S_(s,b,_,n),l.push(R),h.set(b,R)),R}function v(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:l,dispose:E}}function A_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function w_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function gu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _u(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,p,m){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function c(u,f,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);let T=o(u,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):e.push(T)}function l(u,f,g,x,p,m){let y=o(u,f,g,x,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||w_),i.length>1&&i.sort(f||gu),n.length>1&&n.sort(f||gu)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:d,sort:h}}function R_(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new _u,s.set(i,[a])):n>=r.length?(a=new _u,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function C_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Lt};break;case"SpotLight":e={position:new F,direction:new F,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function P_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var I_=0;function N_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function L_(s){let t=new C_,e=P_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let n=new F,r=new Nt,a=new Nt;function o(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,T=0,v=0,A=0,E=0,_=0,b=0,R=0,C=0;l.sort(N_);for(let N=0,B=l.length;N<B;N++){let I=l[N],k=I.color,D=I.intensity,z=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===fn?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*D,d+=k.g*D,u+=k.b*D;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],D);C++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,K=e.get(I);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=Y;let lt=J.getViewportCount();for(let ut=0;ut<lt;ut++)i.sunShadowMatrix[x+ut]=J.getMatrix(ut),i.sunShadowCascade[x+ut]=J._cascadeData[ut];x+=lt,g++}i.sun[f]=H,f++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,K=e.get(I);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,A++}i.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(k).multiplyScalar(D),H.distance=z,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[y]=H;let J=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,J.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[y]=J.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=Y,_++}y++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(k).multiplyScalar(D),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=H,T++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let J=I.shadow,K=e.get(I);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(D),H.groundColor.copy(I.groundColor).multiplyScalar(D),i.hemi[v]=H,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==T||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==A||P.numPointShadows!==E||P.numSpotShadows!==_||P.numSpotMaps!==b||P.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=y,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=T,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=A,P.numPointShadows=E,P.numSpotShadows=_,P.numSpotMaps=b,P.numLightProbes=C,i.version=I_++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let v=l[y];if(v.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),u++}else if(v.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(n),A.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function xu(s){let t=new L_(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function a(d){d.isLightProbeGrid?n.push(d):e.push(d)}function o(d){i.push(d)}function c(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function D_(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new xu(s),t.set(n,[o])):r>=a.length?(o=new xu(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`,O_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],B_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],yu=new Nt,xr=new F,jl=new F;function k_(s,t,e){let i=new sn,n=new Pt,r=new Pt,a=new te,o=new ga,c=new _a,l={},h=e.maxTextureSize,d={[wi]:Ge,[Ge]:wi,[Ze]:Ze},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:U_,fragmentShader:F_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===oh&&(At("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);let R=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ln),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=m!==this.type;B&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=E.length;I<k;I++){let D=E[I],z=D.shadow;if(z===void 0){At("WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let Y=z.getFrameExtents();n.multiply(Y),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,z.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ms){if(D.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ii(n.x,n.y,{format:fn,type:yi,minFilter:Ee,magFilter:Ee,generateMipmaps:!1}),z.map.texture.name=D.name+".shadowMap",z.map.depthTexture=new Hi(n.x,n.y,ui),z.map.depthTexture.name=D.name+".shadowMapDepth",z.map.depthTexture.format=zi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae}else D.isPointLight?(z.map=new vr(n.x),z.map.depthTexture=new Ws(n.x,xi)):(z.map=new ii(n.x,n.y),z.map.depthTexture=new Hi(n.x,n.y,xi)),z.map.depthTexture.name=D.name+".shadowMap",z.map.depthTexture.format=zi,this.type===lr?(z.map.depthTexture.compareFunction=H?kl:Bl,z.map.depthTexture.minFilter=Ee,z.map.depthTexture.magFilter=Ee):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();D.isPointLight!==!0&&z.updateMatrices(D,b);let K=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let lt=0;lt<J;lt++){let ut=z.getCamera(lt);if(D.isPointLight){let V=z.camera,$=z.matrix,tt=D.distance||V.far;tt!==V.far&&(V.far=tt,V.updateProjectionMatrix()),xr.setFromMatrixPosition(D.matrixWorld),V.position.copy(xr),jl.copy(V.position),jl.add(O_[lt]),V.up.copy(B_[lt]),V.lookAt(jl),V.updateMatrixWorld(),$.makeTranslation(-xr.x,-xr.y,-xr.z),yu.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),z._frustum.setFromProjectionMatrix(yu,V.coordinateSystem,V.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,lt),s.clear();else{lt===0&&(s.setRenderTarget(z.map),s.clear());let V=z.getViewport(lt);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),N.viewport(a)}i=z.getFrustum(lt),v(_,b,ut,D,K,this.type)}z.isPointLightShadow!==!0&&this.type===ms&&y(z,b),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(R,C,P)};function y(E,_){let b=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(n.x,n.y,{format:fn,type:yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,b,f,x,null)}function T(E,_,b,R){let C=null,P=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=b.isPointLight===!0?c:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=C.uuid,B=_.uuid,I=l[N];I===void 0&&(I={},l[N]=I);let k=I[B];k===void 0&&(k=C.clone(),I[B]=k,_.addEventListener("dispose",A)),C=k}if(C.visible=_.visible,C.wireframe=_.wireframe,R===ms?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=s.properties.get(C);N.light=b}return C}function v(E,_,b,R,C,P){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===ms)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),k=E.material;if(Array.isArray(k)){let D=I.groups;for(let z=0,Y=D.length;z<Y;z++){let H=D[z],J=k[H.materialIndex];if(J&&J.visible){let K=T(E,J,R,P);E.onBeforeShadow(s,E,_,b,I,K,H),s.renderBufferDirect(b,null,I,K,E,H),E.onAfterShadow(s,E,_,b,I,K,H)}}}else if(k.visible){let D=T(E,k,R,P);E.onBeforeShadow(s,E,_,b,I,D,null),s.renderBufferDirect(b,null,I,D,E,null),E.onAfterShadow(s,E,_,b,I,D,null)}}let B=E.children;for(let I=0,k=B.length;I<k;I++)v(B[I],_,b,R,C,P)}function A(E){E.target.removeEventListener("dispose",A);for(let b in l){let R=l[b],C=E.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function z_(s,t){function e(){let L=!1,et=new te,Z=null,ft=new te(0,0,0,0);return{setMask:function(ot){Z!==ot&&!L&&(s.colorMask(ot,ot,ot,ot),Z=ot)},setLocked:function(ot){L=ot},setClear:function(ot,ht,Et,zt,at){at===!0&&(ot*=zt,ht*=zt,Et*=zt),et.set(ot,ht,Et,zt),ft.equals(et)===!1&&(s.clearColor(ot,ht,Et,zt),ft.copy(et))},reset:function(){L=!1,Z=null,ft.set(-1,0,0,0)}}}function i(){let L=!1,et=!1,Z=null,ft=null,ot=null;return{setReversed:function(ht){if(et!==ht){let Et=t.get("EXT_clip_control");ht?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),et=ht;let zt=ot;ot=null,this.setClear(zt)}},getReversed:function(){return et},setTest:function(ht){ht?rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(ht){Z!==ht&&!L&&(s.depthMask(ht),Z=ht)},setFunc:function(ht){if(et&&(ht=Hh[ht]),ft!==ht){switch(ht){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case ia:s.depthFunc(s.LESS);break;case Qn:s.depthFunc(s.LEQUAL);break;case na:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=ht}},setLocked:function(ht){L=ht},setClear:function(ht){ot!==ht&&(ot=ht,et&&(ht=1-ht),s.clearDepth(ht))},reset:function(){L=!1,Z=null,ft=null,ot=null,et=!1}}}function n(){let L=!1,et=null,Z=null,ft=null,ot=null,ht=null,Et=null,zt=null,at=null;return{setTest:function(Ct){L||(Ct?rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ct){et!==Ct&&!L&&(s.stencilMask(Ct),et=Ct)},setFunc:function(Ct,kt,xt){(Z!==Ct||ft!==kt||ot!==xt)&&(s.stencilFunc(Ct,kt,xt),Z=Ct,ft=kt,ot=xt)},setOp:function(Ct,kt,xt){(ht!==Ct||Et!==kt||zt!==xt)&&(s.stencilOp(Ct,kt,xt),ht=Ct,Et=kt,zt=xt)},setLocked:function(Ct){L=Ct},setClear:function(Ct){at!==Ct&&(s.clearStencil(Ct),at=Ct)},reset:function(){L=!1,et=null,Z=null,ft=null,ot=null,ht=null,Et=null,zt=null,at=null}}}let r=new e,a=new i,o=new n,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,T=null,v=null,A=null,E=null,_=null,b=new Lt(0,0,0),R=0,C=!1,P=null,N=null,B=null,I=null,k=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Y=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Y>=2);let J=null,K={},lt=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),V=new te().fromArray(lt),$=new te().fromArray(ut);function tt(L,et,Z,ft){let ot=new Uint8Array(4),ht=s.createTexture();s.bindTexture(L,ht),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<Z;Et++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(et+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return ht}let nt={};nt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(Qn),He(!1),ce(_l),rt(s.CULL_FACE),Ce(Ln);function rt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function wt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ee(L,et){return u[L]!==et?(s.bindFramebuffer(L,et),u[L]=et,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=et),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Rt(L,et){let Z=g,ft=!1;if(L){Z=f.get(et),Z===void 0&&(Z=[],f.set(et,Z));let ot=L.textures;if(Z.length!==ot.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Et=ot.length;ht<Et;ht++)Z[ht]=s.COLOR_ATTACHMENT0+ht;Z.length=ot.length,ft=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ft=!0);ft&&s.drawBuffers(Z)}function jt(L){return x!==L?(s.useProgram(L),x=L,!0):!1}let ie={[Dn]:s.FUNC_ADD,[ch]:s.FUNC_SUBTRACT,[hh]:s.FUNC_REVERSE_SUBTRACT};ie[uh]=s.MIN,ie[dh]=s.MAX;let Ht={[fh]:s.ZERO,[ph]:s.ONE,[mh]:s.SRC_COLOR,[bl]:s.SRC_ALPHA,[bh]:s.SRC_ALPHA_SATURATE,[yh]:s.DST_COLOR,[_h]:s.DST_ALPHA,[gh]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[vh]:s.ONE_MINUS_DST_COLOR,[xh]:s.ONE_MINUS_DST_ALPHA,[Sh]:s.CONSTANT_COLOR,[Mh]:s.ONE_MINUS_CONSTANT_COLOR,[Th]:s.CONSTANT_ALPHA,[Eh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(L,et,Z,ft,ot,ht,Et,zt,at,Ct){if(L===Ln){p===!0&&(wt(s.BLEND),p=!1);return}if(p===!1&&(rt(s.BLEND),p=!0),L!==lh){if(L!==m||Ct!==C){if((y!==Dn||A!==Dn)&&(s.blendEquation(s.FUNC_ADD),y=Dn,A=Dn),Ct)switch(L){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xl:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",L);break}else switch(L){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yl:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",L);break}T=null,v=null,E=null,_=null,b.set(0,0,0),R=0,m=L,C=Ct}return}ot=ot||et,ht=ht||Z,Et=Et||ft,(et!==y||ot!==A)&&(s.blendEquationSeparate(ie[et],ie[ot]),y=et,A=ot),(Z!==T||ft!==v||ht!==E||Et!==_)&&(s.blendFuncSeparate(Ht[Z],Ht[ft],Ht[ht],Ht[Et]),T=Z,v=ft,E=ht,_=Et),(zt.equals(b)===!1||at!==R)&&(s.blendColor(zt.r,zt.g,zt.b,at),b.copy(zt),R=at),m=L,C=!1}function ge(L,et){L.side===Ze?wt(s.CULL_FACE):rt(s.CULL_FACE);let Z=L.side===Ge;et&&(Z=!Z),He(Z),L.blending===gs&&L.transparent===!1?Ce(Ln):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){P!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),P=L)}function ce(L){L!==rh?(rt(s.CULL_FACE),L!==N&&(L===_l?s.cullFace(s.BACK):L===ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),N=L}function vi(L){L!==B&&(z&&s.lineWidth(L),B=L)}function be(L,et,Z){L?(rt(s.POLYGON_OFFSET_FILL),(I!==et||k!==Z)&&(I=et,k=Z,a.getReversed()&&(et=-et,Z=-Z),s.polygonOffset(et,Z))):wt(s.POLYGON_OFFSET_FILL)}function ni(L){L?rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function si(L){L===void 0&&(L=s.TEXTURE0+D-1),J!==L&&(s.activeTexture(L),J=L)}function ri(L,et,Z){Z===void 0&&(J===null?Z=s.TEXTURE0+D-1:Z=J);let ft=K[Z];ft===void 0&&(ft={type:void 0,texture:void 0},K[Z]=ft),(ft.type!==L||ft.texture!==et)&&(J!==Z&&(s.activeTexture(Z),J=Z),s.bindTexture(L,et||nt[L]),ft.type=L,ft.texture=et)}function O(){let L=K[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ai(){try{s.compressedTexImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function oe(){try{s.texSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function _t(){try{s.texSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function Ft(){try{s.texStorage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function w(){try{s.texStorage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function S(){try{s.texImage2D(...arguments)}catch(L){Dt("WebGLState:",L)}}function W(){try{s.texImage3D(...arguments)}catch(L){Dt("WebGLState:",L)}}function st(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function it(L,et){d[L]!==et&&(s.pixelStorei(L,et),d[L]=et)}function ct(L){V.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),V.copy(L))}function mt(L){$.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function j(L,et){let Z=l.get(et);Z===void 0&&(Z=new WeakMap,l.set(et,Z));let ft=Z.get(L);ft===void 0&&(ft=s.getUniformBlockIndex(et,L.name),s.uniformBlockBinding(et,ft,ft),Z.set(L,ft))}function Q(L,et,Z){let ot=l.get(et).get(L);c[ot]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,ot,Z),c[ot]=Z)}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,K={},u={},c={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,T=null,v=null,A=null,E=null,_=null,b=new Lt(0,0,0),R=0,C=!1,P=null,N=null,B=null,I=null,k=null,V.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:wt,bindFramebuffer:ee,drawBuffers:Rt,useProgram:jt,setBlending:Ce,setMaterial:ge,setFlipSided:He,setCullFace:ce,setLineWidth:vi,setPolygonOffset:be,setScissorTest:ni,activeTexture:si,bindTexture:ri,unbindTexture:O,compressedTexImage2D:ai,compressedTexImage3D:ae,texImage2D:S,texImage3D:W,pixelStorei:it,getParameter:st,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ft,texStorage3D:w,texSubImage2D:oe,texSubImage3D:_t,compressedTexSubImage2D:_e,compressedTexSubImage3D:It,scissor:ct,viewport:mt,reset:dt}}function V_(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,x=new FinalizationRegistry(w=>g.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return p?new OffscreenCanvas(w,S):es("canvas")}function y(w,S,W){let st=1,it=Ft(w);if((it.width>W||it.height>W)&&(st=W/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ct=Math.floor(st*it.width),mt=Math.floor(st*it.height);u===void 0&&(u=m(ct,mt));let j=S?m(ct,mt):u;return j.width=ct,j.height=mt,j.getContext("2d").drawImage(w,0,0,ct,mt),At("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ct+"x"+mt+")."),j}else return"data"in w&&At("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function T(w){return w.generateMipmaps}function v(w){s.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(w,S,W,st,it,ct=!1){if(w!==null){if(s[w]!==void 0)return s[w];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let mt;st&&(mt=t.get("EXT_texture_norm16"),mt||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===s.RED&&(W===s.FLOAT&&(j=s.R32F),W===s.HALF_FLOAT&&(j=s.R16F),W===s.UNSIGNED_BYTE&&(j=s.R8),W===s.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),W===s.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(j=s.R8UI),W===s.UNSIGNED_SHORT&&(j=s.R16UI),W===s.UNSIGNED_INT&&(j=s.R32UI),W===s.BYTE&&(j=s.R8I),W===s.SHORT&&(j=s.R16I),W===s.INT&&(j=s.R32I)),S===s.RG&&(W===s.FLOAT&&(j=s.RG32F),W===s.HALF_FLOAT&&(j=s.RG16F),W===s.UNSIGNED_BYTE&&(j=s.RG8),W===s.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),W===s.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(j=s.RG8UI),W===s.UNSIGNED_SHORT&&(j=s.RG16UI),W===s.UNSIGNED_INT&&(j=s.RG32UI),W===s.BYTE&&(j=s.RG8I),W===s.SHORT&&(j=s.RG16I),W===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(j=s.RGB8UI),W===s.UNSIGNED_SHORT&&(j=s.RGB16UI),W===s.UNSIGNED_INT&&(j=s.RGB32UI),W===s.BYTE&&(j=s.RGB8I),W===s.SHORT&&(j=s.RGB16I),W===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),W===s.UNSIGNED_INT&&(j=s.RGBA32UI),W===s.BYTE&&(j=s.RGBA8I),W===s.SHORT&&(j=s.RGBA16I),W===s.INT&&(j=s.RGBA32I)),S===s.RGB&&(W===s.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),W===s.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),S===s.RGBA){let Q=ct?Fs:Bt.getTransfer(it);W===s.FLOAT&&(j=s.RGBA32F),W===s.HALF_FLOAT&&(j=s.RGBA16F),W===s.UNSIGNED_BYTE&&(j=Q===Kt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),W===s.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(w,S){let W;return w?S===null||S===xi||S===Fn?W=s.DEPTH24_STENCIL8:S===ui?W=s.DEPTH32F_STENCIL8:S===xs&&(W=s.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===Fn?W=s.DEPTH_COMPONENT24:S===ui?W=s.DEPTH_COMPONENT32F:S===xs&&(W=s.DEPTH_COMPONENT16),W}function b(w,S){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ae&&w.minFilter!==Ee?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){let S=new WeakRef(w);i.get(w).__ref=S,g.add(S),x.register(w,S,S)}function C(w){let S=i.get(w).__ref;S!==void 0&&(g.delete(S),x.unregister(S))}function P(w){B(w.target)}function N(w){I(w.target)}function B(w){w.removeEventListener("dispose",P),C(w),D(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function I(w){w.removeEventListener("dispose",N),C(w),Y(w)}function k(){for(let w of g){let S=w.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):B(S))}g.clear(),d.clear()}function D(w){let S=i.get(w);if(S.__webglInit===void 0)return;let W=w.source,st=f.get(W);if(st){let it=st[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&z(w),Object.keys(st).length===0&&f.delete(W)}i.remove(w)}function z(w){let S=i.get(w);s.deleteTexture(S.__webglTexture);let W=w.source,st=f.get(W);delete st[S.__cacheKey],a.memory.textures--}function Y(w){let S=i.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=w.depthTexture;if(W&&W.renderTarget===w&&B(W),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ct=0;ct<S.__webglFramebuffer[it].length;ct++)s.deleteFramebuffer(S.__webglFramebuffer[it][ct]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let st=w.textures;for(let it=0,ct=st.length;it<ct;it++){let mt=i.get(st[it]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(st[it])}i.remove(w)}let H=0;function J(){H=0}function K(){return H}function lt(w){H=w}function ut(){let w=H;return w>=n.maxTextures&&At("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+n.maxTextures),H+=1,w}function V(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function $(w,S){let W=i.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let st=w.image;if(st===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,w,S);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+S)}function tt(w,S){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ge(W,w,S);return}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+S)}function nt(w,S){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){ge(W,w,S);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+S)}function rt(w,S){let W=i.get(w);if(w.version>0&&W.__version!==w.version){He(W,w,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+S)}let wt={[ki]:s.REPEAT,[ze]:s.CLAMP_TO_EDGE,[oa]:s.MIRRORED_REPEAT},ee={[Ae]:s.NEAREST,[Ch]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[Ee]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},Rt={[Dh]:s.NEVER,[zl]:s.ALWAYS,[Uh]:s.LESS,[Bl]:s.LEQUAL,[Fh]:s.EQUAL,[kl]:s.GEQUAL,[Oh]:s.GREATER,[Bh]:s.NOTEQUAL};function jt(w,S){if(S.type===ui&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ee||S.magFilter===Ra||S.magFilter===hr||S.magFilter===hi||S.minFilter===Ee||S.minFilter===Ra||S.minFilter===hr||S.minFilter===hi)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,wt[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,wt[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,wt[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ee[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ae||S.minFilter!==hr&&S.minFilter!==hi||S.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(w,S){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",P),R(S));let st=S.source,it=f.get(st);it===void 0&&(it={},f.set(st,it));let ct=V(S);if(ct!==w.__cacheKey){it[ct]===void 0&&(it[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[ct].usedTimes++;let mt=it[w.__cacheKey];mt!==void 0&&(it[w.__cacheKey].usedTimes--,mt.usedTimes===0&&z(S)),w.__cacheKey=ct,w.__webglTexture=it[ct].texture}return W}function Ht(w,S,W){return Math.floor(Math.floor(w/W)/S)}function Ce(w,S,W,st){let ct=w.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,W,st,S.data);else{ct.sort((L,et)=>L.start-et.start);let mt=0;for(let L=1;L<ct.length;L++){let et=ct[mt],Z=ct[L],ft=et.start+et.count,ot=Ht(Z.start,S.width,4),ht=Ht(et.start,S.width,4);Z.start<=ft+1&&ot===ht&&Ht(Z.start+Z.count-1,S.width,4)===ot?et.count=Math.max(et.count,Z.start+Z.count-et.start):(++mt,ct[mt]=Z)}ct.length=mt+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let L=0,et=ct.length;L<et;L++){let Z=ct[L],ft=Math.floor(Z.start/4),ot=Math.ceil(Z.count/4),ht=ft%S.width,Et=Math.floor(ft/S.width),zt=ot,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(s.TEXTURE_2D,0,ht,Et,zt,at,W,st,S.data)}w.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function ge(w,S,W){let st=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=s.TEXTURE_3D);let it=ie(w,S),ct=S.source;e.bindTexture(st,w.__webglTexture,s.TEXTURE0+W);let mt=i.get(ct);if(ct.version!==mt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let at=Bt.getPrimaries(Bt.workingColorSpace),Ct=S.colorSpace===Yi?null:Bt.getPrimaries(S.colorSpace),kt=S.colorSpace===Yi||at===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=y(S.image,!1,n.maxTextureSize);Q=It(S,Q);let dt=r.convert(S.format,S.colorSpace),L=r.convert(S.type),et=E(S.internalFormat,dt,L,S.normalized,S.colorSpace,S.isVideoTexture);jt(st,S);let Z,ft=S.mipmaps,ot=S.isVideoTexture!==!0,ht=mt.__version===void 0||it===!0,Et=ct.dataReady,zt=b(S,Q);if(S.isDepthTexture)et=_(S.format===qi,S.type),ht&&(ot?e.texStorage2D(s.TEXTURE_2D,1,et,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,et,Q.width,Q.height,0,dt,L,null));else if(S.isDataTexture)if(ft.length>0){ot&&ht&&e.texStorage2D(s.TEXTURE_2D,zt,et,ft[0].width,ft[0].height);for(let at=0,Ct=ft.length;at<Ct;at++)Z=ft[at],ot?Et&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Z.width,Z.height,dt,L,Z.data):e.texImage2D(s.TEXTURE_2D,at,et,Z.width,Z.height,0,dt,L,Z.data);S.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(s.TEXTURE_2D,zt,et,Q.width,Q.height),Et&&Ce(S,Q,dt,L)):e.texImage2D(s.TEXTURE_2D,0,et,Q.width,Q.height,0,dt,L,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,et,ft[0].width,ft[0].height,Q.depth);for(let at=0,Ct=ft.length;at<Ct;at++)if(Z=ft[at],S.format!==di)if(dt!==null)if(ot){if(Et)if(S.layerUpdates.size>0){let kt=Jl(Z.width,Z.height,S.format,S.type);for(let xt of S.layerUpdates){let $t=Z.data.subarray(xt*kt/Z.data.BYTES_PER_ELEMENT,(xt+1)*kt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,xt,Z.width,Z.height,1,dt,$t)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Z.width,Z.height,Q.depth,dt,Z.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,et,Z.width,Z.height,Q.depth,0,Z.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Et&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Z.width,Z.height,Q.depth,dt,L,Z.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,et,Z.width,Z.height,Q.depth,0,dt,L,Z.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(s.TEXTURE_2D,zt,et,ft[0].width,ft[0].height);for(let at=0,Ct=ft.length;at<Ct;at++)Z=ft[at],S.format!==di?dt!==null?ot?Et&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,Z.width,Z.height,dt,Z.data):e.compressedTexImage2D(s.TEXTURE_2D,at,et,Z.width,Z.height,0,Z.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Et&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Z.width,Z.height,dt,L,Z.data):e.texImage2D(s.TEXTURE_2D,at,et,Z.width,Z.height,0,dt,L,Z.data)}else if(S.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,et,Q.width,Q.height,Q.depth),Et)if(S.layerUpdates.size>0){let at=Jl(Q.width,Q.height,S.format,S.type);for(let Ct of S.layerUpdates){let kt=Q.data.subarray(Ct*at/Q.data.BYTES_PER_ELEMENT,(Ct+1)*at/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,Q.width,Q.height,1,dt,L,kt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,L,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Q.width,Q.height,Q.depth,0,dt,L,Q.data);else if(S.isData3DTexture)ot?(ht&&e.texStorage3D(s.TEXTURE_3D,zt,et,Q.width,Q.height,Q.depth),Et&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,L,Q.data)):e.texImage3D(s.TEXTURE_3D,0,et,Q.width,Q.height,Q.depth,0,dt,L,Q.data);else if(S.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(s.TEXTURE_2D,zt,et,Q.width,Q.height);else{let at=Q.width,Ct=Q.height;for(let kt=0;kt<zt;kt++)e.texImage2D(s.TEXTURE_2D,kt,et,at,Ct,0,dt,L,null),at>>=1,Ct>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Q.parentNode!==at){at.appendChild(Q),d.add(S),at.onpaint=Ct=>{let kt=Ct.changedElements;for(let xt of d)kt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let kt=s.RGBA,xt=s.RGBA,$t=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,kt,xt,$t,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ot&&ht){let at=Ft(ft[0]);e.texStorage2D(s.TEXTURE_2D,zt,et,at.width,at.height)}for(let at=0,Ct=ft.length;at<Ct;at++)Z=ft[at],ot?Et&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,dt,L,Z):e.texImage2D(s.TEXTURE_2D,at,et,dt,L,Z);S.generateMipmaps=!1}else if(ot){if(ht){let at=Ft(Q);e.texStorage2D(s.TEXTURE_2D,zt,et,at.width,at.height)}Et&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,L,Q)}else e.texImage2D(s.TEXTURE_2D,0,et,dt,L,Q);T(S)&&S.mipmapsAutoUpdate===!0&&v(st),mt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function He(w,S,W){if(S.image.length!==6)return;let st=ie(w,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+W);let ct=i.get(it);if(it.version!==ct.__version||st===!0){e.activeTexture(s.TEXTURE0+W);let mt=Bt.getPrimaries(Bt.workingColorSpace),j=S.colorSpace===Yi?null:Bt.getPrimaries(S.colorSpace),Q=S.colorSpace===Yi||mt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let dt=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,et=[];for(let xt=0;xt<6;xt++)!dt&&!L?et[xt]=y(S.image[xt],!0,n.maxCubemapSize):et[xt]=L?S.image[xt].image:S.image[xt],et[xt]=It(S,et[xt]);let Z=et[0],ft=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),ht=E(S.internalFormat,ft,ot,S.normalized,S.colorSpace),Et=S.isVideoTexture!==!0,zt=ct.__version===void 0||st===!0,at=it.dataReady,Ct=b(S,Z);jt(s.TEXTURE_CUBE_MAP,S);let kt;if(S.isDepthTexture){if(ht=_(S.format===qi,S.type),zt)if(Et)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ht,Z.width,Z.height);else for(let xt=0;xt<6;xt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,Z.width,Z.height,0,ft,ot,null)}else if(dt){Et&&zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ht,Z.width,Z.height);for(let xt=0;xt<6;xt++){kt=et[xt].mipmaps;for(let $t=0;$t<kt.length;$t++){let Se=kt[$t];S.format!==di?ft!==null?Et?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Se.width,Se.height,ft,Se.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ht,Se.width,Se.height,0,Se.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Se.width,Se.height,ft,ot,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ht,Se.width,Se.height,0,ft,ot,Se.data)}}}else{if(kt=S.mipmaps,Et&&zt){kt.length>0&&Ct++;let xt=Ft(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ht,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(L){Et?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,et[xt].width,et[xt].height,ft,ot,et[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,et[xt].width,et[xt].height,0,ft,ot,et[xt].data);for(let $t=0;$t<kt.length;$t++){let Zi=kt[$t].image[xt].image;Et?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,Zi.width,Zi.height,ft,ot,Zi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ht,Zi.width,Zi.height,0,ft,ot,Zi.data)}}else{Et?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ft,ot,et[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,ft,ot,et[xt]);for(let $t=0;$t<kt.length;$t++){let Se=kt[$t];Et?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,ft,ot,Se.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ht,ft,ot,Se.image[xt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),ct.__version=it.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ce(w,S,W,st,it,ct){let mt=r.convert(W.format,W.colorSpace),j=r.convert(W.type),Q=E(W.internalFormat,mt,j,W.normalized,W.colorSpace),dt=i.get(S),L=i.get(W);if(L.__renderTarget=S,!dt.__hasExternalTextures){let et=Math.max(1,S.width>>ct),Z=Math.max(1,S.height>>ct);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ct,Q,et,Z,S.depth,0,mt,j,null):e.texImage2D(it,ct,Q,et,Z,0,mt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),_t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,it,L.__webglTexture,0,oe(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,it,L.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vi(w,S,W){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer){let st=S.depthTexture,it=st&&st.isDepthTexture?st.type:null,ct=_(S.stencilBuffer,it),mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(S),ct,S.width,S.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(S),ct,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ct,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,w)}else{let st=S.textures;for(let it=0;it<st.length;it++){let ct=st[it],mt=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),Q=E(ct.internalFormat,mt,j,ct.normalized,ct.colorSpace);_t(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(S),Q,S.width,S.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(S),Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(w,S,W){let st=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(S.depthTexture);it.__renderTarget=S;let ct=st?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||ct.width!==S.width||ct.height!==S.height)&&(ct.width=S.width,ct.height=S.height,S.depthTexture.needsUpdate=!0),st?rt(S.depthTexture,0):$(S.depthTexture,0);let mt=it.__webglTexture,j=oe(S),Q=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,dt=S.depthTexture.format===qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===zi)_t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Q,mt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,dt,Q,mt,0);else if(S.depthTexture.format===qi)_t(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Q,mt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,dt,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ni(w){let S=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let st=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=st}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let st=0;st<6;st++)be(S.__webglFramebuffer[st],w,st);else w.texture.mipmaps.length>0?be(S.__webglFramebuffer[0],w,0):be(S.__webglFramebuffer,w,0);else if(W){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=s.createRenderbuffer(),vi(S.__webglDepthbuffer[st],w,!1);else{let it=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ct)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),vi(S.__webglDepthbuffer,w,!1);else{let it=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function si(w,S,W){let st=i.get(w);S!==void 0&&ce(st.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ni(w)}function ri(w){let S=w.texture,W=i.get(w),st=i.get(S);w.addEventListener("dispose",N),R(w);let it=w.textures,ct=w.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=S.version,a.memory.textures++),ct){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let Q=0;Q<S.mipmaps.length;Q++)W.__webglFramebuffer[j][Q]=s.createFramebuffer()}else W.__webglFramebuffer[j]=s.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)W.__webglFramebuffer[j]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(mt)for(let j=0,Q=it.length;j<Q;j++){let dt=i.get(it[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&_t(w)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<it.length;j++){let Q=it[j];W.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let dt=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),et=E(Q.internalFormat,dt,L,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),Z=oe(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,et,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,W.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),vi(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),jt(s.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)ce(W.__webglFramebuffer[j][Q],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else ce(W.__webglFramebuffer[j],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);T(S)?v(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let j=0,Q=it.length;j<Q;j++){let dt=it[j],L=i.get(dt),et=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,L.__webglTexture),jt(et,dt),ce(W.__webglFramebuffer,w,dt,s.COLOR_ATTACHMENT0+j,et,0),T(dt)&&v(et)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,st.__webglTexture),jt(j,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)ce(W.__webglFramebuffer[Q],w,S,s.COLOR_ATTACHMENT0,j,Q);else ce(W.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,j,0);T(S)?v(j):S.mipmaps.length>0&&s.texParameteri(j,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&ni(w)}function O(w){let S=w.textures;for(let W=0,st=S.length;W<st;W++){let it=S[W];if(T(it)&&it.mipmapsAutoUpdate===!0){let ct=A(w),mt=i.get(it).__webglTexture;e.bindTexture(ct,mt),v(ct),e.unbindTexture()}}}let ai=[];function ae(w){if(w.samples>0){if(_t(w)===!1){let S=w.textures,W=w.width,st=w.height,it=s.COLOR_BUFFER_BIT,ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=i.get(w),j=S.length>1;if(j)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let L=i.get(S[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,W,st,0,0,W,st,it,s.NEAREST),c===!0&&(ai.length=0,ai.push(s.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&ai.push(ct),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ai))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let L=i.get(S[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let S=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function oe(w){return Math.min(n.maxSamples,w.samples)}function _t(w){let S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(w){let S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function It(w,S){let W=w.colorSpace,st=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Us&&W!==Yi&&(Bt.getTransfer(W)===Kt?(st!==di||it!==Je)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",W)),S}function Ft(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=ut,this.resetTextureUnits=J,this.getTextureUnits=K,this.setTextureUnits=lt,this.setTexture2D=$,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=rt,this.rebindTextures=si,this.setupRenderTarget=ri,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ni,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=_t,this.dispose=k}function G_(s,t){function e(i,n=Yi){let r,a=Bt.getTransfer(n);if(i===Je)return s.UNSIGNED_BYTE;if(i===Pa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ll)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Dl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Il)return s.BYTE;if(i===Nl)return s.SHORT;if(i===xs)return s.UNSIGNED_SHORT;if(i===Ca)return s.INT;if(i===xi)return s.UNSIGNED_INT;if(i===ui)return s.FLOAT;if(i===yi)return s.HALF_FLOAT;if(i===Ul)return s.ALPHA;if(i===Fl)return s.RGB;if(i===di)return s.RGBA;if(i===zi)return s.DEPTH_COMPONENT;if(i===qi)return s.DEPTH_STENCIL;if(i===Ol)return s.RED;if(i===Na)return s.RED_INTEGER;if(i===fn)return s.RG;if(i===La)return s.RG_INTEGER;if(i===Da)return s.RGBA_INTEGER;if(i===ur||i===dr||i===fr||i===pr)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Fa||i===Oa||i===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===za||i===Va||i===Ga||i===Ha||i===mr||i===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ka||i===za)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Va)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ga)return r.COMPRESSED_R11_EAC;if(i===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(i===mr)return r.COMPRESSED_RG11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===Ka||i===ja||i===$a||i===Qa||i===to||i===eo||i===io||i===no||i===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ka)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$a)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===to)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eo)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===no)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===ao||i===oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===gr||i===ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ti({vertexShader:H_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends _i{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new sc,m={},y=e.getContextAttributes(),T=null,v=null,A=[],E=[],_=new Pt,b=null,R=null,C=new me;C.viewport=new te;let P=new me;P.viewport=new te;let N=[C,P],B=new Ea,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=A[V];return $===void 0&&($=new ss,A[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=A[V];return $===void 0&&($=new ss,A[V]=$),$.getGripSpace()},this.getHand=function(V){let $=A[V];return $===void 0&&($=new ss,A[V]=$),$.getHandSpace()};function D(V){let $=E.indexOf(V.inputSource);if($===-1)return;let tt=A[$];tt!==void 0&&(tt.update(V.inputSource,V.frame,l||a),tt.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",Y);for(let V=0;V<A.length;V++){let $=E[V];$!==null&&(E[V]=null,A[V].disconnect($))}I=null,k=null,p.reset();for(let V in m)delete m[V];if(t.setRenderTarget(T),f=null,u=null,d=null,n=null,v=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),R!==null){let V=R.camera;V.fov=R.fov,V.zoom=R.zoom,V.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",z),n.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,nt=null,rt=null;y.depth&&(rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=y.stencil?qi:zi,nt=y.stencil?Fn:xi);let wt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(wt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ii(u.textureWidth,u.textureHeight,{format:di,type:Je,depthTexture:new Hi(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ii(f.framebufferWidth,f.framebufferHeight,{format:di,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ut.setContext(n),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(V){for(let $=0;$<V.removed.length;$++){let tt=V.removed[$],nt=E.indexOf(tt);nt>=0&&(E[nt]=null,A[nt].disconnect(tt))}for(let $=0;$<V.added.length;$++){let tt=V.added[$],nt=E.indexOf(tt);if(nt===-1){for(let wt=0;wt<A.length;wt++)if(wt>=E.length){E.push(tt),nt=wt;break}else if(E[wt]===null){E[wt]=tt,nt=wt;break}if(nt===-1)break}let rt=A[nt];rt&&rt.connect(tt)}}function H(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;let $=V.near,tt=V.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(tt=p.depthFar)),B.near=P.near=C.near=$,B.far=P.far=C.far=tt,(I!==B.near||k!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=V.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let nt=V.parent,rt=B.cameras;H(B,nt);for(let wt=0;wt<rt.length;wt++)H(rt[wt],nt);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&V.isPerspectiveCamera&&(R={camera:V,fov:V.fov,zoom:V.zoom}),J(V,B,nt)};function J(V,$,tt){tt===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(tt.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=En*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(V){return m[V]};let K=null;function lt(V,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let nt=!1;tt.length!==B.cameras.length&&(B.cameras.length=0,nt=!0);for(let Rt=0;Rt<tt.length;Rt++){let jt=tt[Rt],ie=null;if(f!==null)ie=f.getViewport(jt);else{let Ce=d.getViewSubImage(u,jt);ie=Ce.viewport,Rt===0&&(t.setRenderTargetTextures(v,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(v))}let Ht=N[Rt];Ht===void 0&&(Ht=new me,Ht.layers.enable(Rt),Ht.viewport=new te,N[Rt]=Ht),Ht.matrix.fromArray(jt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(jt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ie.x,ie.y,ie.width,ie.height),Rt===0&&(B.matrix.copy(Ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),nt===!0&&B.cameras.push(Ht)}let rt=n.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Rt=d.getDepthInformation(tt[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,n.renderState)}if(rt&&rt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Rt=0;Rt<tt.length;Rt++){let jt=tt[Rt].camera;if(jt){let ie=m[jt];ie||(ie=new Xs,m[jt]=ie);let Ht=d.getCameraImage(jt);ie.sourceTexture=Ht}}}}for(let tt=0;tt<A.length;tt++){let nt=E[tt],rt=A[tt];nt!==null&&rt!==void 0&&rt.update(nt,$,l||a)}K&&K(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let ut=new vu;ut.setAnimationLoop(lt),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}},X_=new Nt,Pu=new Ut;Pu.set(-1,0,0,0,1,0,0,0,1);function q_(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ql(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),T=y.envMap,v=y.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Y_(s,t,e,i){let n={},r={};function a(y,T){let v=T.program;i.uniformBlockBinding(y,v,n[y.id])}function o(y,T){let v=n[y.id];v===void 0&&(g(y),v=c(y),n[y.id]=v,y.addEventListener("dispose",p));let A=T.program;i.updateUBOMapping(y,A);let E=t.render.frame;r[y.id]!==E&&(l(y),r[y.id]=E)}function c(y){let T=s.createBuffer(),v=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,v,A),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function l(y){let T=n[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,_=v.length;E<_;E++){let b=v[E];if(Array.isArray(b))for(let R=0,C=b.length;R<C;R++)h(b[R],E,R,A);else h(b,E,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,T,v,A){if(u(y,T,v,A)===!0){let E=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let R=0;R<_.length;R++){let C=_[R],P=x(C,!0);d(C,y.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function d(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function u(y,T,v,A){let E=y.value,_=T+"_"+v;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);let b=A[_],R=!1;for(let C=0;C<E.length;C++)f(E[C],b,C)===!0&&(R=!0);return R}return f(E,A,_)}function f(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let A=T[v];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(y){let T=y.uniforms,v=0,A=16;for(let _=0,b=T.length;_<b;_++){let R=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,P=R.length;C<P;C++){let N=R[C],B=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(T[_])||Array.isArray(N.value),k=v;for(let z=0,Y=B.length;z<Y;z++){let H=B[z],J=x(H,I),K=v%A,lt=K%J.boundary,ut=K+lt;v+=lt,ut!==0&&A-ut<J.storage&&(v+=A-ut),z===0&&(k=v),v+=J.storage}let D=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new D((v-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}let E=v%A;return E>0&&(v+=A-E),y.__size=v,y.__cache={},this}function x(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):At("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(y){let T=y.target;T.removeEventListener("dispose",p),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function m(){for(let y in n)s.deleteBuffer(n[y]);n={},r={}}return{bind:a,update:o,dispose:m}}var Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function J_(){return Ci===null&&(Ci=new Rn(Z_,16,16,fn,yi),Ci.name="DFG_LUT",Ci.minFilter=Ee,Ci.magFilter=Ee,Ci.wrapS=ze,Ci.wrapT=ze,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var go=class{constructor(t={}){let{canvas:e=zh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Je}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,p=new Set([Da,La,Na]),m=new Set([Je,xi,xs,Fn,Pa,Ia]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,E=null,_=[],b=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,N=null,B=null,I=null,k=null;this._outputColorSpace=Qt;let D=0,z=0,Y=null,H=-1,J=null,K=new te,lt=new te,ut=null,V=new Lt(0),$=0,tt=e.width,nt=e.height,rt=1,wt=null,ee=null,Rt=new te(0,0,tt,nt),jt=new te(0,0,tt,nt),ie=!1,Ht=new sn,Ce=new da,ge=!1,He=!1,ce=new Nt,vi=new F,be=new te,ni={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},si=!1;function ri(){return Y===null?rt:1}let O=i;function ai(M,U){return e.getContext(M,U)}let ae,oe,_t,_e,It,Ft,w,S,W,st,it,ct,mt,j,Q,dt,L,et,Z,ft,ot,ht,Et;try{let M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),O===null){let U="webgl2";if(O=ai(U,M),O===null)throw ai(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(M){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Dt("WebGLRenderer: "+M.message),M}function zt(){ae=new ag(O),ae.init(),ot=new G_(O,ae),oe=new Jm(O,ae,t,ot),_t=new z_(O,ae),oe.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),k=O.createFramebuffer(),_e=new cg(O),It=new A_,Ft=new V_(O,ae,_t,It,oe,ot,_e),w=new rg(C),S=new uf(O),ht=new Ym(O,S),W=new og(O,S,_e,ht),st=new ug(O,W,S,ht,_e),et=new hg(O,oe,Ft),Q=new Km(It),it=new E_(C,w,ae,oe,ht,Q),ct=new q_(C,It),mt=new R_,j=new D_(ae),L=new qm(C,w,_t,st,g,c),dt=new k_(C,st,oe),Et=new Y_(O,_e,oe,_t),Z=new Zm(O,ae,_e),ft=new lg(O,ae,_e),_e.programs=it.programs,C.capabilities=oe,C.extensions=ae,C.properties=It,C.renderLists=mt,C.shadowMap=dt,C.state=_t,C.info=_e}x!==Je&&(R=new fg(x,e.width,e.height,o,n,r));let at=new rc(C,O);this.xr=at,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(M){M!==void 0&&(rt=M,this.setSize(tt,nt,!1))},this.getSize=function(M){return M.set(tt,nt)},this.setSize=function(M,U,q=!0){if(at.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=M,nt=U,e.width=Math.floor(M*rt),e.height=Math.floor(U*rt),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(tt*rt,nt*rt).floor()},this.setDrawingBufferSize=function(M,U,q){tt=M,nt=U,rt=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===Je){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){At("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,U,q,G){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,U,q,G),_t.viewport(K.copy(Rt).multiplyScalar(ri()).round())},this.getScissor=function(M){return M.copy(jt)},this.setScissor=function(M,U,q,G){M.isVector4?jt.set(M.x,M.y,M.z,M.w):jt.set(M,U,q,G),_t.scissor(lt.copy(jt).multiplyScalar(ri()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){_t.setScissorTest(ie=M)},this.setOpaqueSort=function(M){wt=M},this.setTransparentSort=function(M){ee=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let G=0;if(M){let X=!1;if(Y!==null){let gt=Y.texture.format;X=p.has(gt)}if(X){let gt=Y.texture.type,bt=m.has(gt),pt=L.getClearColor(),vt=L.getClearAlpha(),Tt=pt.r,Ot=pt.g,Wt=pt.b;bt?(y[0]=Tt,y[1]=Ot,y[2]=Wt,y[3]=vt,O.clearBufferuiv(O.COLOR,0,y)):(T[0]=Tt,T[1]=Ot,T[2]=Wt,T[3]=vt,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),L.dispose(),mt.dispose(),j.dispose(),Ft.dispose(),It.dispose(),w.dispose(),st.dispose(),W.dispose(),ht.dispose(),Et.dispose(),it.dispose(),at.dispose(),at.removeEventListener("sessionstart",uc),at.removeEventListener("sessionend",dc),_n.stop()};function Ct(M){M.preventDefault(),Gl("WebGLRenderer: Context Lost."),P=!0}function kt(){Gl("WebGLRenderer: Context Restored."),P=!1;let M=_e.autoReset,U=dt.enabled,q=dt.autoUpdate,G=dt.needsUpdate,X=dt.type;zt(),_e.autoReset=M,dt.enabled=U,dt.autoUpdate=q,dt.needsUpdate=G,dt.type=X}function xt(M){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $t(M){let U=M.target;U.removeEventListener("dispose",$t),Se(U)}function Se(M){Zi(M),It.remove(M)}function Zi(M){let U=It.get(M).programs;U!==void 0&&(U.forEach(function(q){it.releaseProgram(q)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,G,X,gt){U===null&&(U=ni);let bt=X.isMesh&&X.matrixWorld.determinantAffine()<0,pt=Gu(M,U,q,G,X);_t.setMaterial(G,bt);let vt=q.index,Tt=1;if(G.wireframe===!0){if(vt=W.getWireframeAttribute(q),vt===void 0)return;Tt=2}let Ot=q.drawRange,Wt=q.attributes.position,St=Ot.start*Tt,Xt=(Ot.start+Ot.count)*Tt;gt!==null&&(St=Math.max(St,gt.start*Tt),Xt=Math.min(Xt,(gt.start+gt.count)*Tt)),vt!==null?(St=Math.max(St,0),Xt=Math.min(Xt,vt.count)):Wt!=null&&(St=Math.max(St,0),Xt=Math.min(Xt,Wt.count));let fe=Xt-St;if(fe<0||fe===1/0)return;ht.setup(X,G,pt,q,vt);let se,ne=Z;if(vt!==null&&(se=S.get(vt),ne=ft,ne.setIndex(se)),X.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*ri()),ne.setMode(O.LINES)):ne.setMode(O.TRIANGLES);else if(X.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),_t.setLineWidth(Ne*ri()),X.isLineSegments?ne.setMode(O.LINES):X.isLineLoop?ne.setMode(O.LINE_LOOP):ne.setMode(O.LINE_STRIP)}else X.isPoints?ne.setMode(O.POINTS):X.isSprite&&ne.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ne=X._multiDrawStarts,Mt=X._multiDrawCounts,ke=X._multiDrawCount,Zt=vt?S.get(vt).bytesPerElement:1,xn=It.get(G).currentProgram.getUniforms();for(let Le=0;Le<ke;Le++)xn.setValue(O,"_gl_DrawID",Le),ne.render(Ne[Le]/Zt,Mt[Le])}else if(X.isInstancedMesh)ne.renderInstances(St,fe,X.count);else if(q.isInstancedBufferGeometry){let Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,Ne);ne.renderInstances(St,fe,Mt)}else ne.render(St,fe)};function hc(M,U,q,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),ge===!0&&Q.setState(M,q,!1),M.transparent===!0&&M.side===Ze&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,Ss(M,U,G),M.side=wi,M.needsUpdate=!0,Ss(M,U,G),M.side=Ze):Ss(M,U,G)}this.compile=function(M,U,q=null){q===null&&(q=M),N!==null&&N.renderStart(M,U,q),E=j.get(q),E.init(U),b.push(E),q.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),M!==q&&M.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),He=this.localClippingEnabled,ge=Q.init(this.clippingPlanes,He),ge===!0&&Q.setGlobalState(this.clippingPlanes,U),N!==null&&dt.render(E.state.shadowsArray,q,U);let G=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let gt=X.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){let pt=gt[bt];hc(pt,q,U,X),G.add(pt)}else hc(gt,q,U,X),G.add(gt)}),E=b.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,U,q=null){let G=this.compile(M,U,q);return new Promise(X=>{function gt(){if(G.forEach(function(bt){let vt=It.get(bt).currentProgram;(vt===void 0||vt.isReady())&&G.delete(bt)}),G.size===0){X(M);return}setTimeout(gt,10)}ae.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Lo=null;function zu(M){Lo&&Lo(M)}function uc(){_n.stop()}function dc(){_n.start()}let _n=new vu;_n.setAnimationLoop(zu),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(M){Lo=M,at.setAnimationLoop(M),M===null?_n.stop():_n.start()},at.addEventListener("sessionstart",uc),at.addEventListener("sessionend",dc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(M,U);let q=at.enabled===!0&&at.isPresenting===!0,G=R!==null&&(Y===null||q)&&R.begin(C,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,Y),E=j.get(M,b.length),E.init(U),E.state.textureUnits=Ft.getTextureUnits(),b.push(E),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ce.setFromArrayCamera(U):Ht.setFromProjectionMatrix(ce,li,U.reversedDepth),He=this.localClippingEnabled,ge=Q.init(this.clippingPlanes,He),A=mt.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let bt=C.xr.getDepthSensingMesh();bt!==null&&Do(bt,U,-1/0,C.sortObjects)}Do(M,U,0,C.sortObjects),A.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(wt,ee),si=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,si&&L.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),ge===!0&&Q.beginShadows();let X=E.state.shadowsArray;if(dt.render(X,M,U),ge===!0&&Q.endShadows(),(G&&R.hasRenderPass())===!1){let bt=A.opaque,pt=A.transmissive;if(E.setupLights(),U.isArrayCamera){let vt=U.cameras;if(pt.length>0)for(let Tt=0,Ot=vt.length;Tt<Ot;Tt++){let Wt=vt[Tt];pc(bt,pt,M,Wt)}si&&L.render(M);for(let Tt=0,Ot=vt.length;Tt<Ot;Tt++){let Wt=vt[Tt];fc(A,M,Wt,Wt.viewport)}}else pt.length>0&&pc(bt,pt,M,U),si&&L.render(M),fc(A,M,U)}Y!==null&&z===0&&(Ft.updateMultisampleRenderTarget(Y),Ft.updateRenderTargetMipmap(Y)),G&&R.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),ht.resetDefaultState(),H=-1,J=null,b.pop(),b.length>0?(E=b[b.length-1],Ft.setTextureUnits(E.state.textureUnits),ge===!0&&Q.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,N!==null&&N.renderEnd()};function Do(M,U,q,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let bt=U.isArrayCamera?Ce:Ht;if(!M.frustumCulled||M.intersectsFrustum(bt)){G&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);let pt=st.update(M),vt=M.material;vt.visible&&A.push(M,pt,vt,q,be.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let bt=U.isArrayCamera?Ce:Ht;if(!M.frustumCulled||M.intersectsFrustum(bt)){let pt=st.update(M),vt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),be.copy(pt.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(vt)){let Tt=pt.groups;for(let Ot=0,Wt=Tt.length;Ot<Wt;Ot++){let St=Tt[Ot],Xt=vt[St.materialIndex];Xt&&Xt.visible&&A.push(M,pt,Xt,q,be.z,St,U)}}else vt.visible&&A.push(M,pt,vt,q,be.z,null,U)}}}let gt=M.children;for(let bt=0,pt=gt.length;bt<pt;bt++)Do(gt[bt],U,q,G)}function fc(M,U,q,G){let{opaque:X,transmissive:gt,transparent:bt}=M;E.setupLightsView(q),ge===!0&&Q.setGlobalState(C.clippingPlanes,q),G&&_t.viewport(K.copy(G)),X.length>0&&Ar(X,U,q),gt.length>0&&Ar(gt,U,q),bt.length>0&&Ar(bt,U,q),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function pc(M,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let St=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new ii(1,1,{generateMipmaps:!0,type:St?yi:Je,minFilter:hi,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let gt=E.state.transmissionRenderTarget[G.id],bt=G.viewport||K;gt.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);let pt=C.getRenderTarget(),vt=C.getActiveCubeFace(),Tt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(V),$=C.getClearAlpha(),$<1&&C.setClearColor(16777215,.5),C.clear(),si&&L.render(q);let Ot=C.toneMapping;C.toneMapping=Ri;let Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ge===!0&&Q.setGlobalState(C.clippingPlanes,G),Ar(M,q,G),Ft.updateMultisampleRenderTarget(gt),Ft.updateRenderTargetMipmap(gt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Xt=0,fe=U.length;Xt<fe;Xt++){let se=U[Xt],{object:ne,geometry:Ne,material:Mt,group:ke}=se;if(Mt.side===Ze&&ne.layers.test(G.layers)){let Zt=Mt.side;Mt.side=Ge,Mt.needsUpdate=!0,mc(ne,q,G,Ne,Mt,ke),Mt.side=Zt,Mt.needsUpdate=!0,St=!0}}St===!0&&(Ft.updateMultisampleRenderTarget(gt),Ft.updateRenderTargetMipmap(gt))}C.setRenderTarget(pt,vt,Tt),C.setClearColor(V,$),Wt!==void 0&&(G.viewport=Wt),C.toneMapping=Ot}function Ar(M,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,gt=M.length;X<gt;X++){let bt=M[X],{object:pt,geometry:vt,group:Tt}=bt,Ot=bt.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),pt.layers.test(q.layers)&&mc(pt,U,q,vt,Ot,Tt)}}function mc(M,U,q,G,X,gt){N!==null&&X.isNodeMaterial&&N.setObject(M,X),M.onBeforeRender(C,U,q,G,X,gt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(C,U,q,G,M,gt),X.transparent===!0&&X.side===Ze&&X.forceSinglePass===!1?(X.side=Ge,X.needsUpdate=!0,C.renderBufferDirect(q,U,G,X,M,gt),X.side=wi,X.needsUpdate=!0,C.renderBufferDirect(q,U,G,X,M,gt),X.side=Ze):C.renderBufferDirect(q,U,G,X,M,gt),M.onAfterRender(C,U,q,G,X,gt)}function gc(M){let U=0;for(let q of M)q.texture!==null&&U++;return U}function Ss(M,U,q){U.isScene!==!0&&(U=ni);let G=It.get(M),X=E.state.lights,gt=E.state.shadowsArray,bt=X.state.version,pt=it.getParameters(M,X.state,gt,U,q,E.state.lightProbeGridArray),vt=it.getProgramCacheKey(pt),Tt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=w.get(M.envMap||G.environment,Ot),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",$t),Tt=new Map,G.programs=Tt,G.programVariants=new Map);let Wt=Tt.get(vt);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===bt)return xc(M,pt),Wt}else pt.uniforms=it.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,q,pt),M.onBeforeCompile(pt,C),Wt=it.acquireProgram(pt,vt),Tt.set(vt,Wt),G.uniforms=pt.uniforms;let St=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=Q.uniform),xc(M,pt),G.needsLights=Wu(M),G.lightsStateVersion=bt,G.needsLights&&(St.ambientLightColor.value=X.state.ambient,St.lightProbe.value=X.state.probe,St.sunLights.value=X.state.sun,St.sunLightShadows.value=X.state.sunShadow,St.directionalLights.value=X.state.directional,St.directionalLightShadows.value=X.state.directionalShadow,St.spotLights.value=X.state.spot,St.spotLightShadows.value=X.state.spotShadow,St.rectAreaLights.value=X.state.rectArea,St.ltc_1.value=X.state.rectAreaLTC1,St.ltc_2.value=X.state.rectAreaLTC2,St.pointLights.value=X.state.point,St.pointLightShadows.value=X.state.pointShadow,St.hemisphereLights.value=X.state.hemi,St.sunShadowMatrix.value=X.state.sunShadowMatrix,St.sunShadowCascade.value=X.state.sunShadowCascade,St.directionalShadowMatrix.value=X.state.directionalShadowMatrix,St.spotLightMatrix.value=X.state.spotLightMatrix,St.spotLightMap.value=X.state.spotLightMap,St.pointShadowMatrix.value=X.state.pointShadowMatrix),G.numLightProbeGrids=gc(E.state.lightProbeGridArray),G.currentProgram=Wt,G.uniformsList=null,Wt}function Vu(M,U,q,G,X){let gt=It.get(M),bt=gt.currentProgram.id+","+G+","+X,pt=gt.programVariants.get(bt);return pt===void 0?(pt=Ss(M,U,q),gt.programVariants.set(bt,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=G,gt.toneMapping=X),pt}function _c(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ys.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function xc(M,U){let q=It.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Gu(M,U,q,G,X){U.isScene!==!0&&(U=ni),Ft.resetTextureUnits();let gt=U.fog,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Bt.workingColorSpace,vt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Tt=w.get(G.envMap||bt,vt),Ot=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!q.morphAttributes.position,Xt=!!q.morphAttributes.normal,fe=!!q.morphAttributes.color,se=Ri;G.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(se=C.toneMapping);let ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ne=ne!==void 0?ne.length:0,Mt=It.get(G),ke=E.state.lights;if(ge===!0&&(He===!0||M!==J)){let he=M===J&&G.id===H;Q.setState(G,M,he)}let Zt=!1,xn=!1;G.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==ke.state.version||X.isBatchedMesh&&Mt.batching===!1||!X.isBatchedMesh&&Mt.batching===!0||X.isBatchedMesh&&Mt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Mt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Mt.instancing===!1||!X.isInstancedMesh&&Mt.instancing===!0||X.isSkinnedMesh&&Mt.skinning===!1||!X.isSkinnedMesh&&Mt.skinning===!0||X.isInstancedMesh&&Mt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Mt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Mt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Mt.instancingMorph===!1&&X.morphTexture!==null||Mt.envMap!==Tt||G.fog===!0&&Mt.fog!==gt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ot||Mt.vertexTangents!==Wt||Mt.morphTargets!==St||Mt.morphNormals!==Xt||Mt.morphColors!==fe||Mt.morphTargetsCount!==Ne||Mt.numLightProbeGrids!==gc(E.state.lightProbeGridArray)?Zt=!0:(Mt.outputColorSpace!==pt||Mt.toneMapping!==se)&&(xn=!0):(Zt=!0,Mt.__version=G.version);let Le=Mt.currentProgram;(Zt===!0||xn===!0)&&(Le=xn===!0?Vu(G,U,X,pt,se):Ss(G,U,X),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Le,Mt));let wr=!1,Ji=!1,yn=!1,qt=Le.getUniforms(),Pe=Mt.uniforms;if(_t.useProgram(Le.program)&&(wr=!0,Ji=!0,yn=!0),G.id!==H&&(H=G.id,Ji=!0),wr||J!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),qt.setValue(O,"projectionMatrix",M.projectionMatrix),qt.setValue(O,"viewMatrix",M.matrixWorldInverse);let Me=qt.map.cameraPosition;Me!==void 0&&Me.setValue(O,vi.setFromMatrixPosition(M.matrixWorld)),oe.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&qt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Ji=!0,yn=!0)}if(Mt.needsLights&&(ke.state.sunShadowMap.length>0&&qt.setValue(O,"sunShadowMap",ke.state.sunShadowMap,Ft),ke.state.directionalShadowMap.length>0&&qt.setValue(O,"directionalShadowMap",ke.state.directionalShadowMap,Ft),ke.state.spotShadowMap.length>0&&qt.setValue(O,"spotShadowMap",ke.state.spotShadowMap,Ft),ke.state.pointShadowMap.length>0&&qt.setValue(O,"pointShadowMap",ke.state.pointShadowMap,Ft)),X.isSkinnedMesh){qt.setOptional(O,X,"bindMatrix"),qt.setOptional(O,X,"bindMatrixInverse");let he=X.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),qt.setValue(O,"boneTexture",he.boneTexture,Ft))}X.isBatchedMesh&&(qt.setOptional(O,X,"batchingTexture"),qt.setValue(O,"batchingTexture",X._matricesTexture,Ft),qt.setOptional(O,X,"batchingIdTexture"),qt.setValue(O,"batchingIdTexture",X._indirectTexture,Ft),qt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&qt.setValue(O,"batchingColorTexture",X._colorsTexture,Ft));let fi=q.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&et.update(X,q,Le),(Ji||Mt.receiveShadow!==X.receiveShadow)&&(Mt.receiveShadow=X.receiveShadow,qt.setValue(O,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Pe.envMapIntensity.value=U.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=J_()),Ji){if(qt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&Hu(Pe,yn),gt&&G.fog===!0&&ct.refreshFogUniforms(Pe,gt),ct.refreshMaterialUniforms(Pe,G,rt,nt,E.state.transmissionRenderTarget[M.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let he=v,Me=0;for(let Ii of E.state.lightProbeGridArray)Ii.texture!==null&&(he.textures[Me]=Ii.texture,he.min[Me]=Ii.boundingBox.min,he.max[Me]=Ii.boundingBox.max,he.resolution[Me]=Ii.resolution,Me++);for(let Ii in he)he[Ii].length=Me;Pe.probesSH.value=he.textures,Pe.probesMin.value=he.min,Pe.probesMax.value=he.max,Pe.probesResolution.value=he.resolution}ys.upload(O,_c(Mt),Pe,Ft)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(O,_c(Mt),Pe,Ft),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&qt.setValue(O,"center",X.center),qt.setValue(O,"modelViewMatrix",X.modelViewMatrix),qt.setValue(O,"normalMatrix",X.normalMatrix),qt.setValue(O,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let he=G.uniformsGroups;for(let Me=0,Ii=he.length;Me<Ii;Me++){let vc=he[Me];Et.update(vc,Le),Et.bind(vc,Le)}}return Le}function Hu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Wu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,U,q){let G=It.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),It.get(M.texture).__webglTexture=U,It.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=It.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){Y=M,D=U,z=q;let G=null,X=!1,gt=!1;if(M){let pt=It.get(M);if(pt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,pt.__webglFramebuffer),K.copy(M.viewport),lt.copy(M.scissor),ut=M.scissorTest,_t.viewport(K),_t.scissor(lt),_t.setScissorTest(ut),H=-1;return}else if(pt.__webglFramebuffer===void 0)Ft.setupRenderTarget(M);else if(pt.__hasExternalTextures)Ft.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ot=M.depthTexture;if(pt.__boundDepthTexture!==Ot){if(Ot!==null&&It.has(Ot)&&(M.width!==Ot.image.width||M.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(M)}}let vt=M.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(gt=!0);let Tt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?G=Tt[U][q]:G=Tt[U],X=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?G=It.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?G=Tt[q]:G=Tt,K.copy(M.viewport),lt.copy(M.scissor),ut=M.scissorTest}else K.copy(Rt).multiplyScalar(rt).floor(),lt.copy(jt).multiplyScalar(rt).floor(),ut=ie;if(q!==0&&(G=B),_t.bindFramebuffer(O.FRAMEBUFFER,G)&&_t.drawBuffers(M,G),_t.viewport(K),_t.scissor(lt),_t.setScissorTest(ut),X){let pt=It.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,q)}else if(gt){let pt=U;for(let vt=0;vt<M.textures.length;vt++){let Tt=It.get(M.textures[vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,q,pt)}}else if(M!==null&&q!==0){let pt=It.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,q)}H=-1};function yc(M){let U=It.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=oe.textureFormatReadable(M.format),U.__typeReadable=oe.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,G,X,gt,bt,pt=0){if(!(M&&M.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(vt=vt[bt],Array.isArray(vt)&&(vt=vt[0])),vt){_t.bindFramebuffer(O.FRAMEBUFFER,vt);try{let Tt=M.textures[pt],Ot=Tt.format,Wt=Tt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);let St=yc(Tt);if(St.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&q>=0&&q<=M.height-X&&O.readPixels(U,q,G,X,ot.convert(Ot),ot.convert(Wt),gt)}finally{let Tt=Y!==null?It.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,G,X,gt,bt,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(vt=vt[bt],Array.isArray(vt)&&(vt=vt[0])),vt)if(U>=0&&U<=M.width-G&&q>=0&&q<=M.height-X){_t.bindFramebuffer(O.FRAMEBUFFER,vt);let Tt=M.textures[pt],Ot=Tt.format,Wt=Tt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);let St=yc(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xt),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(U,q,G,X,ot.convert(Ot),ot.convert(Wt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let fe=Y!==null?It.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,fe);let se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gh(O,se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Xt),O.deleteSync(se),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let G=Math.pow(2,-q),X=Math.floor(M.image.width*G),gt=Math.floor(M.image.height*G),bt=U!==null?U.x:0,pt=U!==null?U.y:0;Ft.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,bt,pt,X,gt),_t.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,G=null,X=0,gt=0){let bt,pt,vt,Tt,Ot,Wt,St,Xt,fe,se=M.isCompressedTexture?M.mipmaps[gt]:M.image;if(q!==null)bt=q.max.x-q.min.x,pt=q.max.y-q.min.y,vt=q.isBox3?q.max.z-q.min.z:1,Tt=q.min.x,Ot=q.min.y,Wt=q.isBox3?q.min.z:0;else{let qt=Math.pow(2,-X);bt=Math.floor(se.width*qt),pt=Math.floor(se.height*qt),M.isDataArrayTexture?vt=se.depth:M.isData3DTexture?vt=Math.floor(se.depth*qt):vt=1,Tt=0,Ot=0,Wt=0}G!==null?(St=G.x,Xt=G.y,fe=G.z):(St=0,Xt=0,fe=0);let ne=ot.convert(U.format),Ne=ot.convert(U.type),Mt;U.isData3DTexture?(Ft.setTexture3D(U,0),Mt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ft.setTexture2DArray(U,0),Mt=O.TEXTURE_2D_ARRAY):(Ft.setTexture2D(U,0),Mt=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ke=_t.getParameter(O.UNPACK_ROW_LENGTH),Zt=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=_t.getParameter(O.UNPACK_SKIP_PIXELS),Le=_t.getParameter(O.UNPACK_SKIP_ROWS),wr=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,se.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),_t.pixelStorei(O.UNPACK_SKIP_ROWS,Ot),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);let Ji=M.isDataArrayTexture||M.isData3DTexture,yn=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let qt=It.get(M),Pe=It.get(U),fi=It.get(qt.__renderTarget),he=It.get(Pe.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,fi.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Me=0;Me<vt;Me++)Ji&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(M).__webglTexture,X,Wt+Me),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(U).__webglTexture,gt,fe+Me)),O.blitFramebuffer(Tt,Ot,Tt+bt,Ot+pt,St,Xt,St+bt,Xt+pt,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||It.has(M)){let qt=It.get(M),Pe=It.get(U);_t.bindFramebuffer(O.READ_FRAMEBUFFER,I),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let fi=0;fi<vt;fi++)Ji?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.__webglTexture,X,Wt+fi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qt.__webglTexture,X),yn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,gt,fe+fi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,gt),X!==0?O.blitFramebuffer(Tt,Ot,Tt+bt,Ot+pt,St,Xt,St+bt,Xt+pt,O.COLOR_BUFFER_BIT,O.NEAREST):yn?O.copyTexSubImage3D(Mt,gt,St,Xt,fe+fi,Tt,Ot,bt,pt):O.copyTexSubImage2D(Mt,gt,St,Xt,Tt,Ot,bt,pt);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yn?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Mt,gt,St,Xt,fe,bt,pt,vt,ne,Ne,se.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,gt,St,Xt,fe,bt,pt,vt,ne,se.data):O.texSubImage3D(Mt,gt,St,Xt,fe,bt,pt,vt,ne,Ne,se):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,St,Xt,bt,pt,ne,Ne,se.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,St,Xt,se.width,se.height,ne,se.data):O.texSubImage2D(O.TEXTURE_2D,gt,St,Xt,bt,pt,ne,Ne,se);_t.pixelStorei(O.UNPACK_ROW_LENGTH,ke),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Zt),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),_t.pixelStorei(O.UNPACK_SKIP_ROWS,Le),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,wr),gt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Mt),_t.unbindTexture()},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){D=0,z=0,Y=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Bt._getUnpackColorSpace()}};var Nu={type:"change"},oc={type:"start"},Du={type:"end"},yo=new nn,Lu=new ei,K_=Math.cos(70*Ke.DEG2RAD),ve=new F,je=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ac=1e-6,vo=class extends or{constructor(t,e=null){super(t,e),this.state=Jt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new le,this._lastTargetPosition=new F,this._quat=new le().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ps,this._sphericalDelta=new ps,this._scale=1,this._panOffset=new F,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new F,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$_.bind(this),this._onPointerDown=j_.bind(this),this._onPointerUp=Q_.bind(this),this._onContextMenu=a0.bind(this),this._onMouseWheel=i0.bind(this),this._onKeyDown=n0.bind(this),this._onTouchStart=s0.bind(this),this._onTouchMove=r0.bind(this),this._onMouseDown=t0.bind(this),this._onMouseMove=e0.bind(this),this._interceptControlDown=o0.bind(this),this._interceptControlUp=l0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nu),this.update(),this.state=Jt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===Jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=je:i>Math.PI&&(i-=je),n<-Math.PI?n+=je:n>Math.PI&&(n-=je),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(yo.origin.copy(this.object.position),yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yo.direction))<K_?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),yo.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ac||this._lastTargetPosition.distanceToSquared(this.target)>ac?(this.dispatchEvent(Nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;ve.copy(n).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function j_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Q_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Du),this.state=Jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function t0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Jt.DOLLY;break;case un.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}break;case un.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Jt.PAN}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(oc)}function e0(s){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function i0(s){this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE||(s.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Du))}function n0(s){this.enabled!==!1&&this._handleKeyDown(s)}function s0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case dn.ROTATE:if(this.enableRotate===!1){this.state=Jt.NONE;break}this._handleTouchStartRotate(s),this.state=Jt.TOUCH_ROTATE;break;case dn.PAN:if(this.enablePan===!1){this.state=Jt.NONE;break}this._handleTouchStartPan(s),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case dn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Jt.TOUCH_DOLLY_PAN;break;case dn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(oc)}function r0(s){switch(this._trackPointer(s),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Jt.NONE}}function a0(s){this.enabled!==!1&&s.preventDefault()}function o0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bo=class extends Ye{constructor(t){super(t)}load(t,e,i,n){let r=this,a=new ln(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){n?n(c):console.error(c),r.manager.itemError(t)}},i,n)}parse(t){function e(l){let h=new DataView(l),d=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*d===h.byteLength)return!0;let g=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(g,h,x))return!1;return!0}function i(l,h,d){for(let u=0,f=l.length;u<f;u++)if(l[u]!==h.getUint8(d+u))return!1;return!0}function n(l){let h=new DataView(l),d=h.getUint32(80,!0),u,f,g,x=!1,p,m,y,T,v;for(let P=0;P<=70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(x=!0,p=new Float32Array(d*3*3),m=h.getUint8(P+6)/255,y=h.getUint8(P+7)/255,T=h.getUint8(P+8)/255,v=h.getUint8(P+9)/255);let A=84,E=50,_=new Ie,b=new Float32Array(d*3*3),R=new Float32Array(d*3*3),C=new Lt;for(let P=0;P<d;P++){let N=A+P*E,B=h.getFloat32(N,!0),I=h.getFloat32(N+4,!0),k=h.getFloat32(N+8,!0);if(x){let D=h.getUint16(N+48,!0);(D&32768)===0?(u=(D&31)/31,f=(D>>5&31)/31,g=(D>>10&31)/31):(u=m,f=y,g=T)}for(let D=1;D<=3;D++){let z=N+D*12,Y=P*3*3+(D-1)*3;b[Y]=h.getFloat32(z,!0),b[Y+1]=h.getFloat32(z+4,!0),b[Y+2]=h.getFloat32(z+8,!0),R[Y]=B,R[Y+1]=I,R[Y+2]=k,x&&(C.setRGB(u,f,g,Qt),p[Y]=C.r,p[Y+1]=C.g,p[Y+2]=C.b)}}return _.setAttribute("position",new We(b,3)),_.setAttribute("normal",new We(R,3)),x&&(_.setAttribute("color",new We(p,3)),_.hasColors=!0,_.alpha=v),_}function r(l){let h=new Ie,d=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/,g=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+x+x+x,"g"),m=new RegExp("normal"+x+x+x,"g"),y=[],T=[],v=[],A=new F,E,_=0,b=0,R=0;for(;(E=d.exec(l))!==null;){b=R;let C=E[0],P=(E=f.exec(C))!==null?E[1]:"";for(v.push(P);(E=u.exec(C))!==null;){let I=0,k=0,D=E[0];for(;(E=m.exec(D))!==null;)A.x=parseFloat(E[1]),A.y=parseFloat(E[2]),A.z=parseFloat(E[3]),k++;for(;(E=p.exec(D))!==null;)y.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),T.push(A.x,A.y,A.z),I++,R++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let N=b,B=R-b;h.userData.groupNames=v,h.addGroup(N,B,_),_++}return h.setAttribute("position",new Yt(y,3)),h.setAttribute("normal",new Yt(T,3)),h}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){let h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d)&255;return h.buffer||h}else return l}let c=o(t);return e(c)?n(c):r(a(t))}};var Sr=class extends tr{constructor(t){super(t)}parse(t){function e(D){switch(D.image_type){case u:case x:if(D.colormap_length>256||D.colormap_size!==24||D.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case p:case m:if(D.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+D.image_type)}if(D.width<=0||D.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(D.pixel_size!==8&&D.pixel_size!==16&&D.pixel_size!==24&&D.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+D.pixel_size)}function i(D,z,Y,H,J){let K,lt,ut=Y.pixel_size>>3,V=Y.width*Y.height*ut;if(z&&(lt=J.subarray(H,H+=Y.colormap_length*(Y.colormap_size>>3))),D){K=new Uint8Array(V);let $,tt,nt,rt=0,wt=new Uint8Array(ut);for(;rt<V;)if($=J[H++],tt=($&127)+1,$&128){for(nt=0;nt<ut;++nt)wt[nt]=J[H++];for(nt=0;nt<tt;++nt)K.set(wt,rt+nt*ut);rt+=ut*tt}else{for(tt*=ut,nt=0;nt<tt;++nt)K[rt+nt]=J[H++];rt+=tt}}else K=J.subarray(H,H+=z?Y.width*Y.height:V);return{pixel_data:K,palettes:lt}}function n(D,z,Y,H,J,K,lt,ut,V){let $=V,tt=C.colormap_index,nt,rt=0,wt,ee,Rt=C.width;for(ee=z;ee!==H;ee+=Y)for(wt=J;wt!==lt;wt+=K,rt++)nt=ut[rt]-tt,D[(wt+Rt*ee)*4+3]=255,D[(wt+Rt*ee)*4+2]=$[nt*3+0],D[(wt+Rt*ee)*4+1]=$[nt*3+1],D[(wt+Rt*ee)*4+0]=$[nt*3+2];return D}function r(D,z,Y,H,J,K,lt,ut){let V,$=0,tt,nt,rt=C.width;for(nt=z;nt!==H;nt+=Y)for(tt=J;tt!==lt;tt+=K,$+=2)V=ut[$+0]+(ut[$+1]<<8),D[(tt+rt*nt)*4+0]=(V&31744)>>7,D[(tt+rt*nt)*4+1]=(V&992)>>2,D[(tt+rt*nt)*4+2]=(V&31)<<3,D[(tt+rt*nt)*4+3]=V&32768?0:255;return D}function a(D,z,Y,H,J,K,lt,ut){let V=0,$,tt,nt=C.width;for(tt=z;tt!==H;tt+=Y)for($=J;$!==lt;$+=K,V+=3)D[($+nt*tt)*4+3]=255,D[($+nt*tt)*4+2]=ut[V+0],D[($+nt*tt)*4+1]=ut[V+1],D[($+nt*tt)*4+0]=ut[V+2];return D}function o(D,z,Y,H,J,K,lt,ut){let V=0,$,tt,nt=C.width;for(tt=z;tt!==H;tt+=Y)for($=J;$!==lt;$+=K,V+=4)D[($+nt*tt)*4+2]=ut[V+0],D[($+nt*tt)*4+1]=ut[V+1],D[($+nt*tt)*4+0]=ut[V+2],D[($+nt*tt)*4+3]=ut[V+3];return D}function c(D,z,Y,H,J,K,lt,ut){let V,$=0,tt,nt,rt=C.width;for(nt=z;nt!==H;nt+=Y)for(tt=J;tt!==lt;tt+=K,$++)V=ut[$],D[(tt+rt*nt)*4+0]=V,D[(tt+rt*nt)*4+1]=V,D[(tt+rt*nt)*4+2]=V,D[(tt+rt*nt)*4+3]=255;return D}function l(D,z,Y,H,J,K,lt,ut){let V=0,$,tt,nt=C.width;for(tt=z;tt!==H;tt+=Y)for($=J;$!==lt;$+=K,V+=2)D[($+nt*tt)*4+0]=ut[V+0],D[($+nt*tt)*4+1]=ut[V+0],D[($+nt*tt)*4+2]=ut[V+0],D[($+nt*tt)*4+3]=ut[V+1];return D}function h(D,z,Y,H,J){let K,lt,ut,V,$,tt;switch((C.flags&y)>>T){default:case E:K=0,ut=1,$=z,lt=0,V=1,tt=Y;break;case v:K=0,ut=1,$=z,lt=Y-1,V=-1,tt=-1;break;case _:K=z-1,ut=-1,$=-1,lt=0,V=1,tt=Y;break;case A:K=z-1,ut=-1,$=-1,lt=Y-1,V=-1,tt=-1;break}if(B)switch(C.pixel_size){case 8:c(D,lt,V,tt,K,ut,$,H);break;case 16:l(D,lt,V,tt,K,ut,$,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(C.pixel_size){case 8:n(D,lt,V,tt,K,ut,$,H,J);break;case 16:r(D,lt,V,tt,K,ut,$,H);break;case 24:a(D,lt,V,tt,K,ut,$,H);break;case 32:o(D,lt,V,tt,K,ut,$,H);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return D}let d=0,u=1,f=2,g=3,x=9,p=10,m=11,y=48,T=4,v=0,A=1,E=2,_=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let b=0,R=new Uint8Array(t),C={id_length:R[b++],colormap_type:R[b++],image_type:R[b++],colormap_index:R[b++]|R[b++]<<8,colormap_length:R[b++]|R[b++]<<8,colormap_size:R[b++],origin:[R[b++]|R[b++]<<8,R[b++]|R[b++]<<8],width:R[b++]|R[b++]<<8,height:R[b++]|R[b++]<<8,pixel_size:R[b++],flags:R[b++]};if(e(C),C.id_length+b>t.length)throw new Error("THREE.TGALoader: No data.");b+=C.id_length;let P=!1,N=!1,B=!1;switch(C.image_type){case x:P=!0,N=!0;break;case u:N=!0;break;case p:P=!0;break;case f:break;case m:P=!0,B=!0;break;case g:B=!0;break}let I=new Uint8Array(C.width*C.height*4),k=i(P,N,C,b,R);return h(I,C.width,C.height,k.pixel_data,k.palettes),{data:I,width:C.width,height:C.height,flipY:!0,generateMipmaps:!0,minFilter:hi}}};function $e(s,t){let e=[],i=s.childNodes;for(let n=0,r=i.length;n<r;n++){let a=i[n];a.nodeName===t&&e.push(a)}return e}function c0(s){return s.length===0?[]:s.trim().split(/\s+/)}function Be(s){return s.length===0?[]:s.trim().split(/\s+/).map(parseFloat)}function So(s){return s.length===0?[]:s.trim().split(/\s+/).map(t=>parseInt(t))}function Re(s){return s.substring(1)}var Mo=class{constructor(){this.count=0}generateId(){return"three_default_"+this.count++}parse(t){if(t.length===0)return null;let e=new DOMParser().parseFromString(t,"application/xml"),i=$e(e,"COLLADA")[0],n=e.getElementsByTagName("parsererror")[0];if(n!==void 0){let c=$e(n,"div")[0],l;return c?l=c.textContent:l=this.parserErrorToText(n),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,l),null}let r=i.getAttribute("version");console.debug("THREE.ColladaLoader: File version",r);let a=this.parseAsset($e(i,"asset")[0]),o={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{},joints:{}};return this.library=o,this.collada=i,this.parseLibrary(i,"library_animations","animation",this.parseAnimation.bind(this)),this.parseLibrary(i,"library_animation_clips","animation_clip",this.parseAnimationClip.bind(this)),this.parseLibrary(i,"library_controllers","controller",this.parseController.bind(this)),this.parseLibrary(i,"library_images","image",this.parseImage.bind(this)),this.parseLibrary(i,"library_effects","effect",this.parseEffect.bind(this)),this.parseLibrary(i,"library_materials","material",this.parseMaterial.bind(this)),this.parseLibrary(i,"library_cameras","camera",this.parseCamera.bind(this)),this.parseLibrary(i,"library_lights","light",this.parseLight.bind(this)),this.parseLibrary(i,"library_geometries","geometry",this.parseGeometry.bind(this)),this.parseLibrary(i,"library_nodes","node",this.parseNode.bind(this)),this.parseLibrary(i,"library_visual_scenes","visual_scene",this.parseVisualScene.bind(this)),this.parseLibrary(i,"library_joints","joint",this.parseLibraryJoint.bind(this)),this.parseLibrary(i,"library_kinematics_models","kinematics_model",this.parseKinematicsModel.bind(this)),this.parseLibrary(i,"library_physics_models","physics_model",this.parsePhysicsModel.bind(this)),this.parseLibrary(i,"scene","instance_kinematics_scene",this.parseKinematicsScene.bind(this)),{library:o,asset:a,collada:i}}parserErrorToText(t){let e=[],i=[t];for(;i.length;){let n=i.shift();n.nodeType===Node.TEXT_NODE?e.push(n.textContent):(e.push(`
`),i.push(...n.childNodes))}return e.join("").trim()}parseAsset(t){return{unit:this.parseAssetUnit($e(t,"unit")[0]),upAxis:this.parseAssetUpAxis($e(t,"up_axis")[0])}}parseAssetUnit(t){return t!==void 0&&t.hasAttribute("meter")===!0?parseFloat(t.getAttribute("meter")):1}parseAssetUpAxis(t){return t!==void 0?t.textContent:"Y_UP"}parseLibrary(t,e,i,n){let r=$e(t,e)[0];if(r!==void 0){let a=$e(r,i);for(let o=0;o<a.length;o++)n(a[o])}}parseAnimation(t){let e={sources:{},samplers:{},channels:{}},i=!1;for(let n=0,r=t.childNodes.length;n<r;n++){let a=t.childNodes[n];if(a.nodeType!==1)continue;let o;switch(a.nodeName){case"source":o=a.getAttribute("id"),e.sources[o]=this.parseSource(a);break;case"sampler":o=a.getAttribute("id"),e.samplers[o]=this.parseAnimationSampler(a);break;case"channel":o=a.getAttribute("target"),e.channels[o]=this.parseAnimationChannel(a);break;case"animation":this.parseAnimation(a),i=!0;break;default:}}i===!1&&(this.library.animations[t.getAttribute("id")||Ke.generateUUID()]=e)}parseAnimationSampler(t){let e={inputs:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1&&r.nodeName==="input"){let a=Re(r.getAttribute("source")),o=r.getAttribute("semantic");e.inputs[o]=a}}return e}parseAnimationChannel(t){let e={},n=t.getAttribute("target").split("/"),r=n.shift(),a=n.shift(),o=a.indexOf("(")!==-1,c=a.indexOf(".")!==-1;if(c)n=a.split("."),a=n.shift(),e.member=n.shift();else if(o){let l=a.split("(");a=l.shift();for(let h=0;h<l.length;h++)l[h]=parseInt(l[h].replace(/\)/,""));e.indices=l}return e.id=r,e.sid=a,e.arraySyntax=o,e.memberSyntax=c,e.sampler=Re(t.getAttribute("source")),e}parseAnimationClip(t){let e={name:t.getAttribute("id")||"default",start:parseFloat(t.getAttribute("start")||0),end:parseFloat(t.getAttribute("end")||0),animations:[]};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="instance_animation"&&e.animations.push(Re(r.getAttribute("url")))}this.library.clips[t.getAttribute("id")]=e}parseController(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"skin":e.id=Re(r.getAttribute("source")),e.skin=this.parseSkin(r);break;case"morph":e.id=Re(r.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}this.library.controllers[t.getAttribute("id")]=e}parseSkin(t){let e={sources:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"bind_shape_matrix":e.bindShapeMatrix=Be(r.textContent);break;case"source":let a=r.getAttribute("id");e.sources[a]=this.parseSource(r);break;case"joints":e.joints=this.parseJoints(r);break;case"vertex_weights":e.vertexWeights=this.parseVertexWeights(r);break}}return e}parseJoints(t){let e={inputs:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1&&r.nodeName==="input"){let a=r.getAttribute("semantic"),o=Re(r.getAttribute("source"));e.inputs[a]=o}}return e}parseVertexWeights(t){let e={inputs:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"input":let a=r.getAttribute("semantic"),o=Re(r.getAttribute("source")),c=parseInt(r.getAttribute("offset"));e.inputs[a]={id:o,offset:c};break;case"vcount":e.vcount=So(r.textContent);break;case"v":e.v=So(r.textContent);break}}return e}parseImage(t){let e={init_from:$e(t,"init_from")[0].textContent};this.library.images[t.getAttribute("id")]=e}parseEffect(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="profile_COMMON"&&(e.profile=this.parseEffectProfileCOMMON(r))}this.library.effects[t.getAttribute("id")]=e}parseEffectProfileCOMMON(t){let e={surfaces:{},samplers:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"newparam":this.parseEffectNewparam(r,e);break;case"technique":e.technique=this.parseEffectTechnique(r);break;case"extra":e.extra=this.parseEffectExtra(r);break}}return e}parseEffectNewparam(t,e){let i=t.getAttribute("sid");for(let n=0,r=t.childNodes.length;n<r;n++){let a=t.childNodes[n];if(a.nodeType===1)switch(a.nodeName){case"surface":e.surfaces[i]=this.parseEffectSurface(a);break;case"sampler2D":e.samplers[i]=this.parseEffectSampler(a);break}}}parseEffectSurface(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="init_from"&&(e.init_from=r.textContent)}return e}parseEffectSampler(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="source"&&(e.source=r.textContent)}return e}parseEffectTechnique(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"constant":case"lambert":case"blinn":case"phong":e.type=r.nodeName,e.parameters=this.parseEffectParameters(r);break;case"extra":e.extra=this.parseEffectExtra(r);break}}return e}parseEffectParameters(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":e[r.nodeName]=this.parseEffectParameter(r);break;case"transparent":e[r.nodeName]={opaque:r.hasAttribute("opaque")?r.getAttribute("opaque"):"A_ONE",data:this.parseEffectParameter(r)};break}}return e}parseEffectParameter(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"color":e[r.nodeName]=Be(r.textContent);break;case"float":e[r.nodeName]=parseFloat(r.textContent);break;case"texture":e[r.nodeName]={id:r.getAttribute("texture"),extra:this.parseEffectParameterTexture(r)};break}}return e}parseEffectParameterTexture(t){let e={technique:{}};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="extra"&&this.parseEffectParameterTextureExtra(r,e)}return e}parseEffectParameterTextureExtra(t,e){for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="technique"&&this.parseEffectParameterTextureExtraTechnique(r,e)}}parseEffectParameterTextureExtraTechnique(t,e){for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":e.technique[r.nodeName]=parseFloat(r.textContent);break;case"wrapU":case"wrapV":r.textContent.toUpperCase()==="TRUE"?e.technique[r.nodeName]=1:r.textContent.toUpperCase()==="FALSE"?e.technique[r.nodeName]=0:e.technique[r.nodeName]=parseInt(r.textContent);break;case"bump":e[r.nodeName]=this.parseEffectExtraTechniqueBump(r);break}}}parseEffectExtra(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="technique"&&(e.technique=this.parseEffectExtraTechnique(r))}return e}parseEffectExtraTechnique(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"double_sided":e[r.nodeName]=parseInt(r.textContent);break;case"bump":e[r.nodeName]=this.parseEffectExtraTechniqueBump(r);break}}return e}parseEffectExtraTechniqueBump(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="texture"&&(e[r.nodeName]={id:r.getAttribute("texture"),texcoord:r.getAttribute("texcoord"),extra:this.parseEffectParameterTexture(r)})}return e}parseMaterial(t){let e={name:t.getAttribute("name")};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="instance_effect"&&(e.url=Re(r.getAttribute("url")))}this.library.materials[t.getAttribute("id")]=e}parseCamera(t){let e={name:t.getAttribute("name")};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="optics"&&(e.optics=this.parseCameraOptics(r))}this.library.cameras[t.getAttribute("id")]=e}parseCameraOptics(t){for(let e=0;e<t.childNodes.length;e++){let i=t.childNodes[e];if(i.nodeName==="technique_common")return this.parseCameraTechnique(i)}return{}}parseCameraTechnique(t){let e={};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];switch(n.nodeName){case"perspective":case"orthographic":e.technique=n.nodeName,e.parameters=this.parseCameraParameters(n);break}}return e}parseCameraParameters(t){let e={};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];switch(n.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":e[n.nodeName]=parseFloat(n.textContent);break}}return e}parseLight(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];r.nodeType===1&&r.nodeName==="technique_common"&&(e=this.parseLightTechnique(r))}this.library.lights[t.getAttribute("id")]=e}parseLightTechnique(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"directional":case"point":case"spot":case"ambient":e.technique=r.nodeName,e.parameters=this.parseLightParameters(r);break}}return e}parseLightParameters(t){let e={};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"color":let a=Be(r.textContent);e.color=new Lt().fromArray(a),Bt.colorSpaceToWorking(e.color,Qt);break;case"falloff_angle":e.falloffAngle=parseFloat(r.textContent);break;case"quadratic_attenuation":let o=parseFloat(r.textContent);e.distance=o?Math.sqrt(1/o):0;break}}return e}parseGeometry(t){let e={name:t.getAttribute("name"),sources:{},vertices:{},primitives:[]},i=$e(t,"mesh")[0];if(i!==void 0){for(let n=0;n<i.childNodes.length;n++){let r=i.childNodes[n];if(r.nodeType!==1)continue;let a=r.getAttribute("id");switch(r.nodeName){case"source":e.sources[a]=this.parseSource(r);break;case"vertices":e.vertices=this.parseGeometryVertices(r);break;case"polygons":case"lines":case"linestrips":case"polylist":case"triangles":e.primitives.push(this.parseGeometryPrimitive(r));break;default:}}this.library.geometries[t.getAttribute("id")]=e}}parseSource(t){let e={array:[],stride:3};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"float_array":e.array=Be(n.textContent);break;case"Name_array":e.array=c0(n.textContent);break;case"technique_common":let r=$e(n,"accessor")[0];r!==void 0&&(e.stride=parseInt(r.getAttribute("stride")));break}}return e}parseGeometryVertices(t){let e={};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];n.nodeType===1&&(e[n.getAttribute("semantic")]=Re(n.getAttribute("source")))}return e}parseGeometryPrimitive(t){let e={type:t.nodeName,material:t.getAttribute("material"),count:parseInt(t.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let i=0,n=t.childNodes.length;i<n;i++){let r=t.childNodes[i];if(r.nodeType===1)switch(r.nodeName){case"input":let a=Re(r.getAttribute("source")),o=r.getAttribute("semantic"),c=parseInt(r.getAttribute("offset")),l=parseInt(r.getAttribute("set")),h=l>0?o+l:o;e.inputs[h]={id:a,offset:c},e.stride=Math.max(e.stride,c+1),o==="TEXCOORD"&&(e.hasUV=!0);break;case"vcount":e.vcount=So(r.textContent);break;case"p":e.p=So(r.textContent);break}}return e.type==="polygons"&&(e.vcount=[e.p.length/e.stride]),e}parseLibraryJoint(t){this.library.joints[t.getAttribute("id")]=this.parseKinematicsJoint(t)}parseKinematicsModel(t){let e={name:t.getAttribute("name")||"",joints:{},links:[]};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];n.nodeType===1&&n.nodeName==="technique_common"&&this.parseKinematicsTechniqueCommon(n,e)}this.library.kinematicsModels[t.getAttribute("id")]=e}parseKinematicsTechniqueCommon(t,e){for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"joint":e.joints[n.getAttribute("sid")]=this.parseKinematicsJoint(n);break;case"instance_joint":e.joints[n.getAttribute("sid")]=this.library.joints[Re(n.getAttribute("url"))];break;case"link":e.links.push(this.parseKinematicsLink(n));break}}}parseKinematicsJoint(t){let e;for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"prismatic":case"revolute":e=this.parseKinematicsJointParameter(n);break}}return e}parseKinematicsJointParameter(t){let e={sid:t.getAttribute("sid"),name:t.getAttribute("name")||"",axis:new F,limits:{min:0,max:0},type:t.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"axis":let r=Be(n.textContent);e.axis.fromArray(r);break;case"limits":let a=n.getElementsByTagName("max")[0],o=n.getElementsByTagName("min")[0];e.limits.max=parseFloat(a.textContent),e.limits.min=parseFloat(o.textContent);break}}return e.limits.min>=e.limits.max&&(e.static=!0),e.middlePosition=(e.limits.min+e.limits.max)/2,e}parseKinematicsLink(t){let e={sid:t.getAttribute("sid"),name:t.getAttribute("name")||"",attachments:[],transforms:[]};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"attachment_full":e.attachments.push(this.parseKinematicsAttachment(n));break;case"matrix":case"translate":case"rotate":e.transforms.push(this.parseKinematicsTransform(n));break}}return e}parseKinematicsAttachment(t){let e={joint:t.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"link":e.links.push(this.parseKinematicsLink(n));break;case"matrix":case"translate":case"rotate":e.transforms.push(this.parseKinematicsTransform(n));break}}return e}parseKinematicsTransform(t){let e={type:t.nodeName},i=Be(t.textContent);switch(e.type){case"matrix":e.obj=new Nt,e.obj.fromArray(i).transpose();break;case"translate":e.obj=new F,e.obj.fromArray(i);break;case"rotate":e.obj=new F,e.obj.fromArray(i),e.angle=Ke.degToRad(i[3]);break}return e}parsePhysicsModel(t){let e={name:t.getAttribute("name")||"",rigidBodies:{}};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];n.nodeType===1&&n.nodeName==="rigid_body"&&(e.rigidBodies[n.getAttribute("name")]={},this.parsePhysicsRigidBody(n,e.rigidBodies[n.getAttribute("name")]))}this.library.physicsModels[t.getAttribute("id")]=e}parsePhysicsRigidBody(t,e){for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];n.nodeType===1&&n.nodeName==="technique_common"&&this.parsePhysicsTechniqueCommon(n,e)}}parsePhysicsTechniqueCommon(t,e){for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1)switch(n.nodeName){case"inertia":e.inertia=Be(n.textContent);break;case"mass":e.mass=Be(n.textContent)[0];break}}}parseKinematicsScene(t){let e={bindJointAxis:[]};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];n.nodeType===1&&n.nodeName==="bind_joint_axis"&&e.bindJointAxis.push(this.parseKinematicsBindJointAxis(n))}this.library.kinematicsScenes[Re(t.getAttribute("url"))]=e}parseKinematicsBindJointAxis(t){let e={target:t.getAttribute("target").split("/").pop()};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];if(n.nodeType===1&&n.nodeName==="axis"){let r=n.getElementsByTagName("param")[0];e.axis=r.textContent;let a=e.axis.split("inst_").pop().split("axis")[0];e.jointIndex=a.substring(0,a.length-1)}}return e}prepareNodes(t){let e=t.getElementsByTagName("node");for(let i=0;i<e.length;i++){let n=e[i];n.hasAttribute("id")===!1&&n.setAttribute("id",this.generateId())}}parseNode(t){let e=new Nt,i=new F,n={name:t.getAttribute("name")||"",type:t.getAttribute("type"),id:t.getAttribute("id"),sid:t.getAttribute("sid"),matrix:new Nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{},transformData:{},transformOrder:[]};for(let r=0;r<t.childNodes.length;r++){let a=t.childNodes[r];if(a.nodeType!==1)continue;let o;switch(a.nodeName){case"node":n.nodes.push(a.getAttribute("id")),this.parseNode(a);break;case"instance_camera":n.instanceCameras.push(Re(a.getAttribute("url")));break;case"instance_controller":n.instanceControllers.push(this.parseNodeInstance(a));break;case"instance_light":n.instanceLights.push(Re(a.getAttribute("url")));break;case"instance_geometry":n.instanceGeometries.push(this.parseNodeInstance(a));break;case"instance_node":n.instanceNodes.push(Re(a.getAttribute("url")));break;case"matrix":o=Be(a.textContent),n.matrix.multiply(e.fromArray(o).transpose());{let c=a.getAttribute("sid");n.transforms[c]=a.nodeName,n.transformData[c]={type:"matrix",array:o},n.transformOrder.push(c)}break;case"translate":o=Be(a.textContent),i.fromArray(o),n.matrix.multiply(e.makeTranslation(i.x,i.y,i.z));{let c=a.getAttribute("sid");n.transforms[c]=a.nodeName,n.transformData[c]={type:"translate",x:o[0],y:o[1],z:o[2]},n.transformOrder.push(c)}break;case"rotate":o=Be(a.textContent);{let c=Ke.degToRad(o[3]);n.matrix.multiply(e.makeRotationAxis(i.fromArray(o),c));let l=a.getAttribute("sid");n.transforms[l]=a.nodeName,n.transformData[l]={type:"rotate",axis:[o[0],o[1],o[2]],angle:o[3]},n.transformOrder.push(l)}break;case"scale":o=Be(a.textContent),n.matrix.scale(i.fromArray(o));{let c=a.getAttribute("sid");n.transforms[c]=a.nodeName,n.transformData[c]={type:"scale",x:o[0],y:o[1],z:o[2]},n.transformOrder.push(c)}break;case"extra":break;default:}}return this.hasNode(n.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",n.id):this.library.nodes[n.id]=n,n}parseNodeInstance(t){let e={id:Re(t.getAttribute("url")),materials:{},skeletons:[]};for(let i=0;i<t.childNodes.length;i++){let n=t.childNodes[i];switch(n.nodeName){case"bind_material":let r=n.getElementsByTagName("instance_material");for(let a=0;a<r.length;a++){let o=r[a],c=o.getAttribute("symbol"),l=o.getAttribute("target");e.materials[c]=Re(l)}break;case"skeleton":e.skeletons.push(Re(n.textContent));break;default:break}}return e}parseVisualScene(t){let e={name:t.getAttribute("name"),children:[]};this.prepareNodes(t);let i=$e(t,"node");for(let n=0;n<i.length;n++)e.children.push(this.parseNode(i[n]));this.library.visualScenes[t.getAttribute("id")]=e}hasNode(t){return this.library.nodes[t]!==void 0}};var To=class{constructor(t,e,i,n){this.library=t,this.collada=e,this.textureLoader=i,this.tgaLoader=n,this.tempColor=new Lt,this.animations=[],this.kinematics={},this.position=new F,this.scale=new F,this.quaternion=new le,this.matrix=new Nt,this.deferredPivotAnimations={},this.transformNodes={}}compose(){let t=this.library;this.buildLibrary(t.animations,this.buildAnimation.bind(this)),this.buildLibrary(t.clips,this.buildAnimationClip.bind(this)),this.buildLibrary(t.controllers,this.buildController.bind(this)),this.buildLibrary(t.images,this.buildImage.bind(this)),this.buildLibrary(t.effects,this.buildEffect.bind(this)),this.buildLibrary(t.materials,this.buildMaterial.bind(this)),this.buildLibrary(t.cameras,this.buildCamera.bind(this)),this.buildLibrary(t.lights,this.buildLight.bind(this)),this.buildLibrary(t.geometries,this.buildGeometry.bind(this)),this.buildLibrary(t.visualScenes,this.buildVisualScene.bind(this)),this.setupAnimations(),this.setupKinematics();let e=this.parseScene($e(this.collada,"scene")[0]);return e.animations=this.animations,{scene:e,animations:this.animations,kinematics:this.kinematics}}buildLibrary(t,e){for(let i in t){let n=t[i];n.build=e(t[i])}}getBuild(t,e){return t.build!==void 0||(t.build=e(t)),t.build}isEmpty(t){return Object.keys(t).length===0}buildAnimation(t){let e=[],i=t.channels,n=t.samplers,r=t.sources,a=this.aggregateAnimationChannels(i,n,r);for(let o in a){let c=this.library.nodes[o];if(!c)continue;let l=a[o];if(this.hasPivotTransforms(c))this.collectDeferredPivotAnimation(o,l);else{let h=this.getNode(o),d=!1;for(let u in l){let f=c.transforms[u],g=c.transformData[u],x=l[u];switch(f){case"matrix":this.buildMatrixTracks(h,x,c,e);break;case"translate":this.buildTranslateTrack(h,x,g,e);break;case"rotate":d||(this.buildRotateTrack(h,u,x,g,c,e),d=!0);break;case"scale":this.buildScaleTrack(h,x,g,e);break}}}}return e}collectDeferredPivotAnimation(t,e){this.deferredPivotAnimations[t]||(this.deferredPivotAnimations[t]={});let i=this.deferredPivotAnimations[t];for(let n in e){i[n]||(i[n]={});for(let r in e[n])i[n][r]=e[n][r]}}hasPivotTransforms(t){let e=["rotatePivot","rotatePivotInverse","rotatePivotTranslation","scalePivot","scalePivotInverse","scalePivotTranslation"];for(let i of e)if(t.transforms[i]!==void 0)return!0;return!1}getAnimation(t){return this.getBuild(this.library.animations[t],this.buildAnimation.bind(this))}aggregateAnimationChannels(t,e,i){let n={};for(let r in t){if(!t.hasOwnProperty(r))continue;let a=t[r],o=e[a.sampler],c=o.inputs.INPUT,l=o.inputs.OUTPUT,h=i[c],d=i[l],u=o.inputs.INTERPOLATION,f=o.inputs.IN_TANGENT,g=o.inputs.OUT_TANGENT,x=u?i[u]:null,p=f?i[f]:null,m=g?i[g]:null,y=a.id,T=a.sid,v=a.member||"default";n[y]||(n[y]={}),n[y][T]||(n[y][T]={}),n[y][T][v]={times:h.array,values:d.array,stride:d.stride,arraySyntax:a.arraySyntax,indices:a.indices,interpolation:x?x.array:null,inTangent:p?p.array:null,outTangent:m?m.array:null,inTangentStride:p?p.stride:0,outTangentStride:m?m.stride:0}}return n}buildMatrixTracks(t,e,i,n){let r=i.matrix.clone().transpose(),a={};for(let l in e){let h=e[l],d=h.times,u=h.values,f=h.stride;for(let g=0,x=d.length;g<x;g++){let p=d[g],m=g*f;if(a[p]===void 0&&(a[p]={}),h.arraySyntax===!0){let y=u[m],T=h.indices[0]+4*h.indices[1];a[p][T]=y}else for(let y=0;y<f;y++)a[p][y]=u[m+y]}}let o=this.prepareAnimationData(a,r),c={name:t.uuid,keyframes:o};this.createKeyframeTracks(c,n)}buildTranslateTrack(t,e,i,n){if(e.default&&e.default.stride===3){let l=e.default,h=Array.from(l.times),d=Array.from(l.values),u=new Fe(t.uuid+".position",h,d),f=this.getInterpolationInfo(e);this.applyInterpolation(u,f,e),n.push(u);return}let r=this.getTimesForAllAxes(e);if(r.length===0)return;let a=[],o=this.getInterpolationInfo(e);for(let l=0;l<r.length;l++){let h=r[l],d=this.getValueAtTime(e.X,h,i.x),u=this.getValueAtTime(e.Y,h,i.y),f=this.getValueAtTime(e.Z,h,i.z);a.push(d,u,f)}let c=new Fe(t.uuid+".position",r,a);this.applyInterpolation(c,o),n.push(c)}buildRotateTrack(t,e,i,n,r,a){let o=i.ANGLE||i.default;if(!o)return;let c=Array.from(o.times);if(c.length===0)return;let l=[];for(let p of r.transformOrder)if(r.transforms[p]==="rotate"){let y=r.transformData[p];l.push({sid:p,axis:new F(y.axis[0],y.axis[1],y.axis[2]),defaultAngle:y.angle})}let h=new le,d=new le,u=new le,f=[],g=this.getInterpolationInfo(i);for(let p=0;p<c.length;p++){let m=c[p];h.identity();for(let y of l){let T;y.sid===e?T=this.getValueAtTime(o,m,y.defaultAngle):T=y.defaultAngle;let v=Ke.degToRad(T);u.setFromAxisAngle(y.axis,v),h.multiply(u)}p>0&&d.dot(h)<0&&(h.x=-h.x,h.y=-h.y,h.z=-h.z,h.w=-h.w),d.copy(h),f.push(h.x,h.y,h.z,h.w)}let x=new Ai(t.uuid+".quaternion",c,f);this.applyInterpolation(x,g),a.push(x)}buildScaleTrack(t,e,i,n){if(e.default&&e.default.stride===3){let l=e.default,h=Array.from(l.times),d=Array.from(l.values),u=new Fe(t.uuid+".scale",h,d),f=this.getInterpolationInfo(e);this.applyInterpolation(u,f,e),n.push(u);return}let r=this.getTimesForAllAxes(e);if(r.length===0)return;let a=[],o=this.getInterpolationInfo(e);for(let l=0;l<r.length;l++){let h=r[l],d=this.getValueAtTime(e.X,h,i.x),u=this.getValueAtTime(e.Y,h,i.y),f=this.getValueAtTime(e.Z,h,i.z);a.push(d,u,f)}let c=new Fe(t.uuid+".scale",r,a);this.applyInterpolation(c,o),n.push(c)}getTimesForAllAxes(t){let e=[];return t.X&&(e=e.concat(Array.from(t.X.times))),t.Y&&(e=e.concat(Array.from(t.Y.times))),t.Z&&(e=e.concat(Array.from(t.Z.times))),t.ANGLE&&(e=e.concat(Array.from(t.ANGLE.times))),t.default&&(e=e.concat(Array.from(t.default.times))),e=[...new Set(e)].sort((i,n)=>i-n),e}getValueAtTime(t,e,i){if(!t)return i;let n=t.times,r=t.values,a=t.interpolation;for(let o=0;o<n.length;o++){if(n[o]===e)return r[o];if(n[o]>e){if(o===0)return r[0];let c=o-1,l=o,h=n[c],d=n[l],u=r[c],f=r[l],g=a?a[c]:"LINEAR";if(g==="STEP")return u;if(g==="BEZIER"&&t.inTangent&&t.outTangent)return this.evaluateBezierComponent(t,c,l,h,d,e);{let x=(e-h)/(d-h);return u+x*(f-u)}}}return r[r.length-1]}evaluateBezierComponent(t,e,i,n,r,a){let o=t.values,c=t.inTangent,l=t.outTangent,h=t.inTangentStride||1,d=o[e],u=o[i],f,g,x,p;h===2?(f=l[e*2],g=l[e*2+1],x=c[i*2],p=c[i*2+1]):(f=n+(r-n)/3,g=l[e],x=r-(r-n)/3,p=c[i]);let m=(a-n)/(r-n);for(let _=0;_<8;_++){let b=m*m,R=b*m,C=1-m,P=C*C,B=P*C*n+3*P*m*f+3*C*b*x+R*r,I=3*P*(f-n)+6*C*m*(x-f)+3*b*(r-x);if(Math.abs(I)<1e-10)break;let k=B-a;if(Math.abs(k)<1e-10)break;m=m-k/I,m=Math.max(0,Math.min(1,m))}let y=m*m,T=y*m,v=1-m,A=v*v;return A*v*d+3*A*m*g+3*v*y*p+T*u}getInterpolationInfo(t){let e=["X","Y","Z","ANGLE","default"],i=null,n=!0;for(let r of e){let a=t[r];if(!a||!a.interpolation)continue;let o=a.interpolation;for(let c=0;c<o.length;c++){let l=o[c];i===null?i=l:l!==i&&(n=!1)}}return{type:i||"LINEAR",uniform:n}}applyInterpolation(t,e,i=null){if(e.type==="STEP"&&e.uniform)t.setInterpolation(Tn);else if(e.type==="BEZIER"&&e.uniform&&i){let n=i.default;n&&n.inTangent&&n.outTangent&&(t.setInterpolation(Ds),t.settings={inTangents:new Float32Array(n.inTangent),outTangents:new Float32Array(n.outTangent)})}}prepareAnimationData(t,e){let i=[];for(let n in t)i.push({time:parseFloat(n),value:t[n]});i.sort((n,r)=>n.time-r.time);for(let n=0;n<16;n++)this.transformAnimationData(i,n,e.elements[n]);return i}createKeyframeTracks(t,e){let i=t.keyframes,n=t.name,r=[],a=[],o=[],c=[],l=this.position,h=this.quaternion,d=this.scale,u=this.matrix;for(let f=0,g=i.length;f<g;f++){let x=i[f],p=x.time,m=x.value;u.fromArray(m).transpose(),u.decompose(l,h,d),r.push(p),a.push(l.x,l.y,l.z),o.push(h.x,h.y,h.z,h.w),c.push(d.x,d.y,d.z)}return a.length>0&&e.push(new Fe(n+".position",r,a)),o.length>0&&e.push(new Ai(n+".quaternion",r,o)),c.length>0&&e.push(new Fe(n+".scale",r,c)),e}transformAnimationData(t,e,i){let n,r=!0,a,o;for(a=0,o=t.length;a<o;a++)n=t[a],n.value[e]===void 0?n.value[e]=null:r=!1;if(r===!0)for(a=0,o=t.length;a<o;a++)n=t[a],n.value[e]=i;else this.createMissingKeyframes(t,e)}createMissingKeyframes(t,e){let i,n;for(let r=0,a=t.length;r<a;r++){let o=t[r];if(o.value[e]===null){if(i=this.getPrev(t,r,e),n=this.getNext(t,r,e),i===null){o.value[e]=n.value[e];continue}if(n===null){o.value[e]=i.value[e];continue}this.interpolate(o,i,n,e)}}}getPrev(t,e,i){for(;e>=0;){let n=t[e];if(n.value[i]!==null)return n;e--}return null}getNext(t,e,i){for(;e<t.length;){let n=t[e];if(n.value[i]!==null)return n;e++}return null}interpolate(t,e,i,n){if(i.time-e.time===0){t.value[n]=e.value[n];return}t.value[n]=(t.time-e.time)*(i.value[n]-e.value[n])/(i.time-e.time)+e.value[n]}buildAnimationClip(t){let e=[],i=t.name,n=t.end-t.start||-1,r=t.animations;for(let a=0,o=r.length;a<o;a++){let c=this.getAnimation(r[a]);for(let l=0,h=c.length;l<h;l++)e.push(c[l])}return new us(i,n,e)}getAnimationClip(t){return this.getBuild(this.library.clips[t],this.buildAnimationClip.bind(this))}buildController(t){let e={id:t.id},i=this.library.geometries[e.id];return t.skin!==void 0&&(e.skin=this.buildSkin(t.skin),i.sources.skinIndices=e.skin.indices,i.sources.skinWeights=e.skin.weights),e}buildSkin(t){let i={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},n=t.sources,r=t.vertexWeights,a=r.vcount,o=r.v,c=r.inputs.JOINT.offset,l=r.inputs.WEIGHT.offset,h=t.sources[t.joints.inputs.JOINT],d=t.sources[t.joints.inputs.INV_BIND_MATRIX],u=n[r.inputs.WEIGHT.id].array,f=0,g,x,p;for(g=0,p=a.length;g<p;g++){let y=a[g],T=[];for(x=0;x<y;x++){let v=o[f+c],A=o[f+l],E=u[A];T.push({index:v,weight:E}),f+=2}for(T.sort(m),x=0;x<4;x++){let v=T[x];v!==void 0?(i.indices.array.push(v.index),i.weights.array.push(v.weight)):(i.indices.array.push(0),i.weights.array.push(0))}}for(t.bindShapeMatrix?i.bindMatrix=new Nt().fromArray(t.bindShapeMatrix).transpose():i.bindMatrix=new Nt().identity(),g=0,p=h.array.length;g<p;g++){let y=h.array[g],T=new Nt().fromArray(d.array,g*d.stride).transpose();i.joints.push({name:y,boneInverse:T})}return i;function m(y,T){return T.weight-y.weight}}getController(t){return this.getBuild(this.library.controllers[t],this.buildController.bind(this))}buildImage(t){return t.build!==void 0?t.build:t.init_from}getImage(t){let e=this.library.images[t];return e!==void 0?this.getBuild(e,this.buildImage.bind(this)):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",t),null)}buildEffect(t){return t}getEffect(t){return this.getBuild(this.library.effects[t],this.buildEffect.bind(this))}getTextureLoader(t){let e,i=t.slice((t.lastIndexOf(".")-1>>>0)+2);return i=i.toLowerCase(),i==="tga"?e=this.tgaLoader:e=this.textureLoader,e}buildMaterial(t){let e=this.getEffect(t.url),i=e.profile.technique,n;switch(i.type){case"phong":case"blinn":n=new Ei;break;case"lambert":n=new $s;break;default:n=new wn;break}n.name=t.name||"";let r=this;function a(h,d=null){let u=e.profile.samplers[h.id],f=null;if(u!==void 0){let g=e.profile.surfaces[u.source];f=r.getImage(g.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),f=r.getImage(h.id);if(f!==null){let g=r.getTextureLoader(f);if(g!==void 0){let x=g.load(f),p=h.extra;if(p!==void 0&&p.technique!==void 0&&r.isEmpty(p.technique)===!1){let m=p.technique;x.wrapS=m.wrapU?ki:ze,x.wrapT=m.wrapV?ki:ze,x.offset.set(m.offsetU||0,m.offsetV||0),x.repeat.set(m.repeatU||1,m.repeatV||1)}else x.wrapS=ki,x.wrapT=ki;return d!==null&&(x.colorSpace=d),x}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",f),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",h.id),null}let o=i.parameters;for(let h in o){let d=o[h];switch(h){case"diffuse":d.color&&n.color.fromArray(d.color),d.texture&&(n.map=a(d.texture,Qt));break;case"specular":d.color&&n.specular&&n.specular.fromArray(d.color),d.texture&&(n.specularMap=a(d.texture));break;case"bump":d.texture&&(n.normalMap=a(d.texture));break;case"ambient":d.texture&&(n.lightMap=a(d.texture,Qt));break;case"shininess":d.float&&n.shininess&&(n.shininess=d.float);break;case"emission":d.color&&n.emissive&&n.emissive.fromArray(d.color),d.texture&&(n.emissiveMap=a(d.texture,Qt));break}}Bt.colorSpaceToWorking(n.color,Qt),n.specular&&Bt.colorSpaceToWorking(n.specular,Qt),n.emissive&&Bt.colorSpaceToWorking(n.emissive,Qt);let c=o.transparent,l=o.transparency;if(l===void 0&&c&&(l={float:1}),c===void 0&&l&&(c={opaque:"A_ONE",data:{color:[1,1,1,1]}}),c&&l)if(c.data.texture)n.transparent=!0;else{let h=c.data.color;switch(c.opaque){case"A_ONE":n.opacity=h[3]*l.float;break;case"RGB_ZERO":n.opacity=1-h[0]*l.float;break;case"A_ZERO":n.opacity=1-h[3]*l.float;break;case"RGB_ONE":n.opacity=h[0]*l.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',c.opaque)}n.opacity<1&&(n.transparent=!0)}if(i.extra!==void 0&&i.extra.technique!==void 0){let h=i.extra.technique;for(let d in h){let u=h[d];switch(d){case"double_sided":n.side=u===1?Ze:wi;break;case"bump":n.normalMap=a(u.texture),n.normalScale=new Pt(1,1);break}}}return n}getMaterial(t){return this.getBuild(this.library.materials[t],this.buildMaterial.bind(this))}buildCamera(t){let e;switch(t.optics.technique){case"perspective":e=new me(t.optics.parameters.yfov,t.optics.parameters.aspect_ratio,t.optics.parameters.znear,t.optics.parameters.zfar);break;case"orthographic":let i=t.optics.parameters.ymag,n=t.optics.parameters.xmag,r=t.optics.parameters.aspect_ratio;n=n===void 0?i*r:n,i=i===void 0?n/r:i,n*=.5,i*=.5,e=new In(-n,n,i,-i,t.optics.parameters.znear,t.optics.parameters.zfar);break;default:e=new me;break}return e.name=t.name||"",e}getCamera(t){let e=this.library.cameras[t];return e!==void 0?this.getBuild(e,this.buildCamera.bind(this)):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",t),null)}buildLight(t){let e;switch(t.technique){case"directional":e=new hn;break;case"point":e=new sr;break;case"spot":e=new nr;break;case"ambient":e=new rr;break}return t.parameters.color&&e.color.copy(t.parameters.color),t.parameters.distance&&(e.distance=t.parameters.distance),t.parameters.falloffAngle&&(e.angle=Ke.degToRad(t.parameters.falloffAngle)),e}getLight(t){let e=this.library.lights[t];return e!==void 0?this.getBuild(e,this.buildLight.bind(this)):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",t),null)}groupPrimitives(t){let e={};for(let i=0;i<t.length;i++){let n=t[i];e[n.type]===void 0&&(e[n.type]=[]),e[n.type].push(n)}return e}checkUVCoordinates(t){let e=0;for(let i=0,n=t.length;i<n;i++)t[i].hasUV===!0&&e++;e>0&&e<t.length&&(t.uvsNeedsFix=!0)}buildGeometry(t){let e={},i=t.sources,n=t.vertices,r=t.primitives;if(r.length===0)return{};let a=this.groupPrimitives(r);for(let o in a){let c=a[o];this.checkUVCoordinates(c),e[o]=this.buildGeometryType(c,i,n)}return e}buildGeometryType(t,e,i){let n={},r={array:[],stride:0},a={array:[],stride:0},o={array:[],stride:0},c={array:[],stride:0},l={array:[],stride:0},h={array:[],stride:4},d={array:[],stride:4},u=new Ie,f=[],g=0;for(let x=0;x<t.length;x++){let p=t[x],m=p.inputs,y=0;switch(p.type){case"lines":case"linestrips":y=p.count*2;break;case"triangles":y=p.count*3;break;case"polygons":case"polylist":for(let T=0;T<p.count;T++){let v=p.vcount[T];switch(v){case 3:y+=3;break;case 4:y+=6;break;default:y+=(v-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",p.type)}u.addGroup(g,y,x),g+=y,p.material&&f.push(p.material),p.positionSource=e[i.POSITION],p.positionOffset=m.VERTEX.offset;for(let T in m){let v=m[T];switch(T){case"VERTEX":for(let A in i){let E=i[A];switch(A){case"POSITION":let _=r.array.length;if(this.buildGeometryData(p,e[E],v.offset,r.array),r.stride=e[E].stride,e.skinWeights&&e.skinIndices&&(this.buildGeometryData(p,e.skinIndices,v.offset,h.array),this.buildGeometryData(p,e.skinWeights,v.offset,d.array)),p.hasUV===!1&&t.uvsNeedsFix===!0){let b=(r.array.length-_)/r.stride;for(let R=0;R<b;R++)o.array.push(0,0)}break;case"NORMAL":this.buildGeometryData(p,e[E],v.offset,a.array),a.stride=e[E].stride;break;case"COLOR":this.buildGeometryData(p,e[E],v.offset,l.array,!0),l.stride=e[E].stride;break;case"TEXCOORD":this.buildGeometryData(p,e[E],v.offset,o.array),o.stride=e[E].stride;break;case"TEXCOORD1":this.buildGeometryData(p,e[E],v.offset,c.array),o.stride=e[E].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',A)}}break;case"NORMAL":this.buildGeometryData(p,e[v.id],v.offset,a.array),a.stride=e[v.id].stride;break;case"COLOR":this.buildGeometryData(p,e[v.id],v.offset,l.array,!0),l.stride=e[v.id].stride;break;case"TEXCOORD":this.buildGeometryData(p,e[v.id],v.offset,o.array),o.stride=e[v.id].stride;break;case"TEXCOORD1":this.buildGeometryData(p,e[v.id],v.offset,c.array),c.stride=e[v.id].stride;break}}}return r.array.length>0&&u.setAttribute("position",new Yt(r.array,r.stride)),a.array.length>0&&u.setAttribute("normal",new Yt(a.array,a.stride)),l.array.length>0&&u.setAttribute("color",new Yt(l.array,l.stride)),o.array.length>0&&u.setAttribute("uv",new Yt(o.array,o.stride)),c.array.length>0&&u.setAttribute("uv1",new Yt(c.array,c.stride)),h.array.length>0&&u.setAttribute("skinIndex",new Yt(h.array,h.stride)),d.array.length>0&&u.setAttribute("skinWeight",new Yt(d.array,d.stride)),n.data=u,n.type=t[0].type,n.materialKeys=f,n}buildGeometryData(t,e,i,n,r=!1){let a=t.p,o=t.stride,c=t.vcount,l=t.positionSource,h=t.positionOffset,d=this.tempColor;function u(x){let p=a[x+i]*g,m=p+g;for(;p<m;p++)n.push(f[p]);if(r){let y=n.length-g;d.setRGB(n[y+0],n[y+1],n[y+2],Qt),n[y+0]=d.r,n[y+1]=d.g,n[y+2]=d.b}}let f=e.array,g=e.stride;if(t.vcount!==void 0){let x=0;for(let p=0,m=c.length;p<m;p++){let y=c[p];if(y===4){let T=x+o*0,v=x+o*1,A=x+o*2,E=x+o*3;u(T),u(v),u(E),u(v),u(A),u(E)}else if(y===3){let T=x+o*0,v=x+o*1,A=x+o*2;u(T),u(v),u(A)}else if(y>4){let T=[];for(let R=0;R<y;R++){let C=x+o*R+h,P=a[C]*l.stride,N=l.array[P],B=l.array[P+1],I=l.array[P+2];T.push(new F(N,B,I))}let v=new F,A=new Si;A.a=T[0],A.b=T[1],A.c=T[2],A.getNormal(v);let E=[];if(Math.abs(v.x)>Math.abs(v.y)&&Math.abs(v.x)>Math.abs(v.z))for(let R=0;R<y;R++)E.push(new Pt(T[R].y,T[R].z));else if(Math.abs(v.y)>Math.abs(v.z))for(let R=0;R<y;R++)E.push(new Pt(T[R].x,T[R].z));else for(let R=0;R<y;R++)E.push(new Pt(T[R].x,T[R].y));let _=cs.isClockWise(E);_===!0&&E.reverse();let b=cs.triangulateShape(E,[]);for(let R=0;R<b.length;R++){let C=b[R],P,N,B;_===!1?(P=C[0],N=C[1],B=C[2]):(P=y-1-C[0],N=y-1-C[2],B=y-1-C[1]);let I=x+o*P,k=x+o*N,D=x+o*B;u(I),u(k),u(D)}}x+=o*y}}else for(let x=0,p=a.length;x<p;x+=o)u(x)}getGeometry(t){return this.getBuild(this.library.geometries[t],this.buildGeometry.bind(this))}buildKinematicsModel(t){return t.build!==void 0?t.build:t}getKinematicsModel(t){return this.getBuild(this.library.kinematicsModels[t],this.buildKinematicsModel.bind(this))}buildKinematicsScene(t){return t.build!==void 0?t.build:t}getKinematicsScene(t){return this.getBuild(this.library.kinematicsScenes[t],this.buildKinematicsScene.bind(this))}setupKinematics(){let t=Object.keys(this.library.kinematicsModels)[0],e=Object.keys(this.library.kinematicsScenes)[0],i=Object.keys(this.library.visualScenes)[0];if(t===void 0||e===void 0)return;let n=this.getKinematicsModel(t),r=this.getKinematicsScene(e),a=this.getVisualScene(i),o=r.bindJointAxis,c={},l=this.collada,h=this;for(let g=0,x=o.length;g<x;g++){let p=o[g],m=l.querySelector('[sid="'+p.target+'"]');if(m){let y=m.parentElement;d(p.jointIndex,y)}}function d(g,x){let p=x.getAttribute("name"),m=n.joints[g],y=h.buildTransformList(x);a.traverse(function(T){T.name===p&&(c[g]={object:T,transforms:y,joint:m,position:m.zeroPosition})})}let u=new Nt,f=this.matrix;this.kinematics={joints:n&&n.joints,getJointValue:function(g){let x=c[g];if(x)return x.position;console.warn("THREE.ColladaLoader: Joint "+g+" doesn't exist.")},setJointValue:function(g,x){let p=c[g];if(p){let m=p.joint;if(x>m.limits.max||x<m.limits.min)console.warn("THREE.ColladaLoader: Joint "+g+" value "+x+" outside of limits (min: "+m.limits.min+", max: "+m.limits.max+").");else if(m.static)console.warn("THREE.ColladaLoader: Joint "+g+" is static.");else{let y=p.object,T=m.axis,v=p.transforms;f.identity();for(let A=0;A<v.length;A++){let E=v[A];if(E.sid&&E.sid.indexOf(g)!==-1)switch(m.type){case"revolute":f.multiply(u.makeRotationAxis(T,Ke.degToRad(x)));break;case"prismatic":f.multiply(u.makeTranslation(T.x*x,T.y*x,T.z*x));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+m.type);break}else switch(E.type){case"matrix":f.multiply(E.obj);break;case"translate":f.multiply(u.makeTranslation(E.obj.x,E.obj.y,E.obj.z));break;case"scale":f.scale(E.obj);break;case"rotate":f.multiply(u.makeRotationAxis(E.obj,E.angle));break}}y.matrix.copy(f),y.matrix.decompose(y.position,y.quaternion,y.scale),c[g].position=x}}else console.warn("THREE.ColladaLoader: Joint "+g+" does not exist.")}}}buildTransformList(t){let e=[],i=this.collada.querySelector('[id="'+t.id+'"]');for(let n=0;n<i.childNodes.length;n++){let r=i.childNodes[n];if(r.nodeType!==1)continue;let a,o;switch(r.nodeName){case"matrix":a=Be(r.textContent);let c=new Nt().fromArray(a).transpose();e.push({sid:r.getAttribute("sid"),type:r.nodeName,obj:c});break;case"translate":case"scale":a=Be(r.textContent),o=new F().fromArray(a),e.push({sid:r.getAttribute("sid"),type:r.nodeName,obj:o});break;case"rotate":a=Be(r.textContent),o=new F().fromArray(a);let l=Ke.degToRad(a[3]);e.push({sid:r.getAttribute("sid"),type:r.nodeName,obj:o,angle:l});break}}return e}buildSkeleton(t,e){let i=[],n=[],r,a,o;for(r=0;r<t.length;r++){let h=t[r],d;if(this.hasNode(h))d=this.getNode(h),this.buildBoneHierarchy(d,e,i);else if(this.hasVisualScene(h)){let f=this.library.visualScenes[h].children;for(let g=0;g<f.length;g++){let x=f[g];if(x.type==="JOINT"){let p=this.getNode(x.id);this.buildBoneHierarchy(p,e,i)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",h)}for(r=0;r<e.length;r++)for(a=0;a<i.length;a++)if(o=i[a],o.bone.name===e[r].name){n[r]=o,o.processed=!0;break}for(r=0;r<i.length;r++)o=i[r],o.processed===!1&&(n.push(o),o.processed=!0);let c=[],l=[];for(r=0;r<n.length;r++)o=n[r],c.push(o.bone),l.push(o.boneInverse);return new Gs(c,l)}buildBoneHierarchy(t,e,i){t.traverse(function(n){if(n.isBone===!0){let r;for(let a=0;a<e.length;a++){let o=e[a];if(o.name===n.name){r=o.boneInverse;break}}r===void 0&&(r=new Nt),i.push({bone:n,boneInverse:r,processed:!1})}})}buildNode(t){let e=[],i=t.matrix,n=t.nodes,r=t.type,a=t.instanceCameras,o=t.instanceControllers,c=t.instanceLights,l=t.instanceGeometries,h=t.instanceNodes;for(let u=0,f=n.length;u<f;u++)e.push(this.getNode(n[u]));for(let u=0,f=a.length;u<f;u++){let g=this.getCamera(a[u]);g!==null&&e.push(g.clone())}for(let u=0,f=o.length;u<f;u++){let g=o[u],x=this.getController(g.id),p=this.getGeometry(x.id),m=this.buildObjects(p,g.materials),y=g.skeletons,T=x.skin.joints,v=this.buildSkeleton(y,T);for(let A=0,E=m.length;A<E;A++){let _=m[A];_.isSkinnedMesh&&(_.bind(v,x.skin.bindMatrix),_.normalizeSkinWeights()),e.push(_)}}for(let u=0,f=c.length;u<f;u++){let g=this.getLight(c[u]);g!==null&&e.push(g.clone())}for(let u=0,f=l.length;u<f;u++){let g=l[u],x=this.getGeometry(g.id),p=this.buildObjects(x,g.materials);for(let m=0,y=p.length;m<y;m++)e.push(p[m])}for(let u=0,f=h.length;u<f;u++)e.push(this.getNode(h[u]).clone());let d;if(n.length===0&&e.length===1)d=e[0];else{d=r==="JOINT"?new rs:new ci;for(let u=0;u<e.length;u++)d.add(e[u])}return d.name=r==="JOINT"?t.sid:t.name,r!=="JOINT"&&this.hasPivotTransforms(t)?this.wrapWithTransformHierarchy(d,t):(d.matrix.copy(i),d.matrix.decompose(d.position,d.quaternion,d.scale),d)}wrapWithTransformHierarchy(t,e){let i=e.id;this.transformNodes[i]={};let n=e.transformOrder,r=e.transformData,a=new ci;a.name=e.name;let o=a;for(let c=0;c<n.length;c++){let l=n[c],h=r[l],d=new ci;switch(d.name=e.name+"_"+l,h.type){case"translate":d.position.set(h.x,h.y,h.z);break;case"rotate":{let u=new F(h.axis[0],h.axis[1],h.axis[2]),f=Ke.degToRad(h.angle);d.quaternion.setFromAxisAngle(u,f),d.userData.rotationAxis=u;break}case"scale":d.scale.set(h.x,h.y,h.z);break;case"matrix":{new Nt().fromArray(h.array).transpose().decompose(d.position,d.quaternion,d.scale);break}}this.transformNodes[i][l]=d,o.add(d),o=d}return o.add(t),a}resolveMaterialBinding(t,e){let i=[];for(let n=0,r=t.length;n<r;n++){let a=e[t[n]];a===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",t[n]),i.push(this.fallbackMaterial)):i.push(this.getMaterial(a))}return i}get fallbackMaterial(){return this._fallbackMaterial===void 0&&(this._fallbackMaterial=new wn({name:Ye.DEFAULT_MATERIAL_NAME,color:16711935})),this._fallbackMaterial}buildObjects(t,e){let i=[];for(let n in t){let r=t[n],a=this.resolveMaterialBinding(r.materialKeys,e);if(a.length===0&&(n==="lines"||n==="linestrips"?a.push(new rn):a.push(new Ei)),n==="lines"||n==="linestrips")for(let h=0,d=a.length;h<d;h++){let u=a[h];if(u.isMeshPhongMaterial===!0||u.isMeshLambertMaterial===!0){let f=new rn;f.color.copy(u.color),f.opacity=u.opacity,f.transparent=u.transparent,a[h]=f}}let o=r.data.attributes.skinIndex!==void 0,c=a.length===1?a[0]:a,l;switch(n){case"lines":l=new os(r.data,c);break;case"linestrips":l=new as(r.data,c);break;case"triangles":case"polygons":case"polylist":o?l=new Vs(r.data,c):l=new we(r.data,c);break}i.push(l)}return i}hasNode(t){return this.library.nodes[t]!==void 0}getNode(t){return this.getBuild(this.library.nodes[t],this.buildNode.bind(this))}buildVisualScene(t){let e=new ci;e.name=t.name;let i=t.children;for(let n=0;n<i.length;n++){let r=i[n];e.add(this.getNode(r.id))}return e}hasVisualScene(t){return this.library.visualScenes[t]!==void 0}getVisualScene(t){return this.getBuild(this.library.visualScenes[t],this.buildVisualScene.bind(this))}parseScene(t){let e=$e(t,"instance_visual_scene")[0];return this.getVisualScene(this.parseId(e.getAttribute("url")))}parseId(t){return t.substring(1)}setupAnimations(){let t=this.library.clips;if(this.isEmpty(t)===!0){if(this.isEmpty(this.library.animations)===!1){let e=[];for(let i in this.library.animations){let n=this.getAnimation(i);for(let r=0,a=n.length;r<a;r++)e.push(n[r])}this.buildDeferredPivotAnimationTracks(e),this.animations.push(new us("default",-1,e))}}else for(let e in t)this.animations.push(this.getAnimationClip(e))}buildDeferredPivotAnimationTracks(t){for(let e in this.deferredPivotAnimations){let i=this.library.nodes[e];if(!i)continue;let n=this.deferredPivotAnimations[e];this.buildTransformHierarchyTracks(e,n,i,t)}}buildTransformHierarchyTracks(t,e,i,n){let r=this.transformNodes[t];if(!r){console.warn("THREE.ColladaLoader: Transform hierarchy not found for node:",t);return}for(let a in e){let o=r[a];if(!o)continue;let c=i.transforms[a],l=i.transformData[a],h=e[a];switch(c){case"translate":this.buildHierarchyTranslateTrack(o,h,l,n);break;case"rotate":this.buildHierarchyRotateTrack(o,h,l,n);break;case"scale":this.buildHierarchyScaleTrack(o,h,l,n);break}}}buildHierarchyTranslateTrack(t,e,i,n){if(e.default&&e.default.stride===3){let l=e.default,h=new Fe(t.uuid+".position",Array.from(l.times),Array.from(l.values)),d=this.getInterpolationInfo(e);this.applyInterpolation(h,d,e),n.push(h);return}let r=this.getTimesForAllAxes(e);if(r.length===0)return;let a=[],o=this.getInterpolationInfo(e);for(let l=0;l<r.length;l++){let h=r[l],d=this.getValueAtTime(e.X,h,i.x),u=this.getValueAtTime(e.Y,h,i.y),f=this.getValueAtTime(e.Z,h,i.z);a.push(d,u,f)}let c=new Fe(t.uuid+".position",r,a);this.applyInterpolation(c,o),n.push(c)}buildHierarchyRotateTrack(t,e,i,n){let r=e.ANGLE||e.default;if(!r)return;let a=Array.from(r.times);if(a.length===0)return;let o=t.userData.rotationAxis||new F(i.axis[0],i.axis[1],i.axis[2]),c=new le,l=new le,h=[],d=this.getInterpolationInfo(e);for(let f=0;f<a.length;f++){let g=a[f],x=this.getValueAtTime(r,g,i.angle),p=Ke.degToRad(x);c.setFromAxisAngle(o,p),f>0&&l.dot(c)<0&&(c.x=-c.x,c.y=-c.y,c.z=-c.z,c.w=-c.w),l.copy(c),h.push(c.x,c.y,c.z,c.w)}let u=new Ai(t.uuid+".quaternion",a,h);this.applyInterpolation(u,d),n.push(u)}buildHierarchyScaleTrack(t,e,i,n){if(e.default&&e.default.stride===3){let l=e.default,h=new Fe(t.uuid+".scale",Array.from(l.times),Array.from(l.values)),d=this.getInterpolationInfo(e);this.applyInterpolation(h,d,e),n.push(h);return}let r=this.getTimesForAllAxes(e);if(r.length===0)return;let a=[],o=this.getInterpolationInfo(e);for(let l=0;l<r.length;l++){let h=r[l],d=this.getValueAtTime(e.X,h,i.x),u=this.getValueAtTime(e.Y,h,i.y),f=this.getValueAtTime(e.Z,h,i.z);a.push(d,u,f)}let c=new Fe(t.uuid+".scale",r,a);this.applyInterpolation(c,o),n.push(c)}};var Eo=class extends Ye{load(t,e,i,n){let r=this,a=r.path===""?Nn.extractUrlBase(t):r.path,o=new ln(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(c){try{e(r.parse(c,a))}catch(l){n?n(l):console.error(l),r.manager.itemError(t)}},i,n)}parse(t,e){if(t.length===0)return{scene:new An};let n=new Mo().parse(t);if(n===null)return null;let{library:r,asset:a,collada:o}=n,c=new Pn(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let l;Sr&&(l=new Sr(this.manager),l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.resourcePath||e),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials));let h=new To(r,o,c,l),{scene:d,animations:u,kinematics:f}=h.compose();return d.animations=u,a.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),d.rotation.set(-Math.PI/2,0,0)),d.scale.multiplyScalar(a.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),u},kinematics:f,library:r,scene:d}}};var Uu=new F,h0=new Xe,Ao=new Nt,mn=new Nt,wo=new le,Ro=new F(1,1,1),Co=new F,bs=class extends de{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}},Po=class extends bs{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}},Io=class extends bs{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}},Mr=class extends bs{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink",this.name="",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(t,e){return super.copy(t,e),this.inertial={mass:t.inertial.mass,origin:{xyz:[...t.inertial.origin.xyz],rpy:[...t.inertial.origin.rpy]},inertia:{...t.inertial.inertia}},this}},Tr=class extends bs{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new F(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.name="",this.jointValue=null,this.jointType="fixed",this.axis=new F(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.limit.effort=t.limit.effort,this.limit.velocity=t.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(i=>{e=i.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let i=t[0];return i==null||i===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let i=t[0];return i==null||i===this.jointValue[0]?e:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),Uu.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Uu,i),this.jointValue[0]!==i?(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((i,n)=>t[n]===i||t[n]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],mn.compose(this.origPosition,this.origQuaternion,Ro),wo.setFromEuler(h0.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Co.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Ao.compose(Co,wo,Ro),mn.premultiply(Ao),this.position.setFromMatrixPosition(mn),this.rotation.setFromRotationMatrix(mn),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,n)=>t[n]===i||t[n]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],mn.compose(this.origPosition,this.origQuaternion,Ro),wo.setFromAxisAngle(this.axis,this.jointValue[2]),Co.set(this.jointValue[0],this.jointValue[1],0),Ao.compose(Co,wo,Ro),mn.premultiply(Ao),this.position.setFromMatrixPosition(mn),this.rotation.setFromRotationMatrix(mn),this.matrixWorldNeedsUpdate=!0,!0)}return e}},Er=class extends Tr{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){let e=t.map(i=>i===null?null:i*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}},No=class extends Mr{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in t.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in t.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in t.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in t.visual&&(this.visual[i.urdfName]=i)});for(let i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(n=>this.joints[n.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){let i=this.joints[t];return i?i.setJointValue(...e):!1}setJointValues(t){let e=!1;for(let i in t){let n=t[i];Array.isArray(n)?e=this.setJointValue(i,...n)||e:e=this.setJointValue(i,n)||e}return e}};var lc=new le,Fu=new Xe;function gn(s){return s?s.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function Ou(s,t,e=!1){e||s.rotation.set(0,0,0),Fu.set(t[0],t[1],t[2],"ZYX"),lc.setFromEuler(Fu),lc.multiply(s.quaternion),s.quaternion.copy(lc)}var cc=class{constructor(t){this.manager=t||uo,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,i)=>{this.load(t,e,null,i)})}load(t,e,i,n){let r=this.manager,a=Nn.extractUrlBase(t),o=this.manager.resolveURL(t);r.itemStart(o),fetch(o,this.fetchOptions).then(c=>{if(c.ok)return i&&i(null),c.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{let l=this.parse(c,this.workingPath||a);e(l),r.itemEnd(o)}).catch(c=>{n?n(c):console.error("URDFLoader: Error loading file.",c),r.itemError(o),r.itemEnd(o)})}parse(t,e=this.workingPath){let i=this.packages,n=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,c={},l={},h={};function d(y){if(!/^package:\/\//.test(y))return e?e+y:y;let[T,v]=y.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(T)?i+"/"+v:i+"/"+T+"/"+v;if(typeof i=="function")return i(T)+"/"+v;if(typeof i=="object")return T in i?i[T]+"/"+v:(console.error(`URDFLoader : ${T} not found in provided package list.`),null)}function u(y){let T;y instanceof Document?T=[...y.children]:y instanceof Element?T=[y]:T=[...new DOMParser().parseFromString(y,"text/xml").children];let v=T.filter(A=>A.nodeName==="robot").pop();return f(v)}function f(y){let T=[...y.children],v=T.filter(P=>P.nodeName.toLowerCase()==="link"),A=T.filter(P=>P.nodeName.toLowerCase()==="joint"),E=T.filter(P=>P.nodeName.toLowerCase()==="material"),_=new No;_.robotName=y.getAttribute("name"),_.urdfRobotNode=y,E.forEach(P=>{let N=P.getAttribute("name");h[N]=p(P)});let b={},R={};v.forEach(P=>{let N=P.getAttribute("name"),B=y.querySelector(`child[link="${N}"]`)===null;c[N]=x(P,b,R,B?_:null)}),A.forEach(P=>{let N=P.getAttribute("name");l[N]=g(P)}),_.joints=l,_.links=c,_.colliders=R,_.visual=b;let C=Object.values(l);return C.forEach(P=>{P instanceof Er&&l[P.mimicJoint].mimicJoints.push(P)}),C.forEach(P=>{let N=new Set,B=I=>{if(N.has(I))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");N.add(I),I.mimicJoints.forEach(k=>{B(k)})};B(P)}),_.frames={...R,...b,...c,...l},_}function g(y){let T=[...y.children],v=y.getAttribute("type"),A,E=T.find(N=>N.nodeName.toLowerCase()==="mimic");E?(A=new Er,A.mimicJoint=E.getAttribute("joint"),A.multiplier=parseFloat(E.getAttribute("multiplier")||1),A.offset=parseFloat(E.getAttribute("offset")||0)):A=new Tr,A.urdfNode=y,A.name=y.getAttribute("name"),A.urdfName=A.name,A.jointType=v;let _=null,b=null,R=[0,0,0],C=[0,0,0];T.forEach(N=>{let B=N.nodeName.toLowerCase();B==="origin"?(R=gn(N.getAttribute("xyz")),C=gn(N.getAttribute("rpy"))):B==="child"?b=c[N.getAttribute("link")]:B==="parent"?_=c[N.getAttribute("link")]:B==="limit"&&(A.limit.lower=parseFloat(N.getAttribute("lower")||A.limit.lower),A.limit.upper=parseFloat(N.getAttribute("upper")||A.limit.upper),A.limit.effort=parseFloat(N.getAttribute("effort")||A.limit.effort),A.limit.velocity=parseFloat(N.getAttribute("velocity")||A.limit.velocity))}),_.add(A),A.add(b),Ou(A,C),A.position.set(R[0],R[1],R[2]);let P=T.filter(N=>N.nodeName.toLowerCase()==="axis")[0];if(P){let N=P.getAttribute("xyz").split(/\s+/g).map(B=>parseFloat(B));A.axis=new F(N[0],N[1],N[2]),A.axis.normalize()}return A}function x(y,T,v,A=null){A===null&&(A=new Mr);let E=[...y.children];A.name=y.getAttribute("name"),A.urdfName=A.name,A.urdfNode=y;let _=E.find(b=>b.nodeName.toLowerCase()==="inertial");return _&&[..._.children].forEach(b=>{let R=b.nodeName.toLowerCase();R==="origin"?(A.inertial.origin.xyz=gn(b.getAttribute("xyz")),A.inertial.origin.rpy=gn(b.getAttribute("rpy"))):R==="mass"?A.inertial.mass=parseFloat(b.getAttribute("value"))||0:R==="inertia"&&(A.inertial.inertia.ixx=parseFloat(b.getAttribute("ixx"))||0,A.inertial.inertia.ixy=parseFloat(b.getAttribute("ixy"))||0,A.inertial.inertia.ixz=parseFloat(b.getAttribute("ixz"))||0,A.inertial.inertia.iyy=parseFloat(b.getAttribute("iyy"))||0,A.inertial.inertia.iyz=parseFloat(b.getAttribute("iyz"))||0,A.inertial.inertia.izz=parseFloat(b.getAttribute("izz"))||0)}),r&&E.filter(R=>R.nodeName.toLowerCase()==="visual").forEach(R=>{let C=m(R,h);if(A.add(C),R.hasAttribute("name")){let P=R.getAttribute("name");C.name=P,C.urdfName=P,T[P]=C}}),a&&E.filter(R=>R.nodeName.toLowerCase()==="collision").forEach(R=>{let C=m(R);if(A.add(C),R.hasAttribute("name")){let P=R.getAttribute("name");C.name=P,C.urdfName=P,v[P]=C}}),A}function p(y){let T=[...y.children],v=new Ei;return v.name=y.getAttribute("name")||"",T.forEach(A=>{let E=A.nodeName.toLowerCase();if(E==="color"){let _=A.getAttribute("rgba").split(/\s/g).map(b=>parseFloat(b));v.color.setRGB(_[0],_[1],_[2]),v.opacity=_[3],v.transparent=_[3]<1,v.depthWrite=!v.transparent}else if(E==="texture"){let _=A.getAttribute("filename");if(_){let b=new Pn(o),R=d(_);v.map=b.load(R),v.map.colorSpace=Qt}}}),v}function m(y,T={}){let v=y.nodeName.toLowerCase()==="collision",A=[...y.children],E=null,_=A.filter(R=>R.nodeName.toLowerCase()==="material")[0];if(_){let R=_.getAttribute("name");R&&R in T?E=T[R]:E=p(_)}else E=new Ei;let b=v?new Po:new Io;return b.urdfNode=y,A.forEach(R=>{let C=R.nodeName.toLowerCase();if(C==="geometry"){let P=R.children[0].nodeName.toLowerCase();if(P==="mesh"){let N=R.children[0].getAttribute("filename"),B=d(N);if(B!==null){let I=R.children[0].getAttribute("scale");if(I){let k=gn(I);b.scale.set(k[0],k[1],k[2])}n(B,o,E,(k,D)=>{D?console.error("URDFLoader: Error loading mesh.",D):k&&(k.position.set(0,0,0),k.quaternion.identity(),b.add(k))})}}else if(P==="box"){let N=new we;N.geometry=new an(1,1,1),N.material=E;let B=gn(R.children[0].getAttribute("size"));N.scale.set(B[0],B[1],B[2]),b.add(N)}else if(P==="sphere"){let N=new we;N.geometry=new js(1,30,30),N.material=E;let B=parseFloat(R.children[0].getAttribute("radius"))||0;N.scale.set(B,B,B),b.add(N)}else if(P==="cylinder"){let N=new we;N.geometry=new qs(1,1,1,30),N.material=E;let B=parseFloat(R.children[0].getAttribute("radius"))||0,I=parseFloat(R.children[0].getAttribute("length"))||0;N.scale.set(B,I,B),N.rotation.set(Math.PI/2,0,0),b.add(N)}}else if(C==="origin"){let P=gn(R.getAttribute("xyz")),N=gn(R.getAttribute("rpy"));b.position.set(P[0],P[1],P[2]),b.rotation.set(0,0,0),Ou(b,N)}}),b}return u(t)}defaultMeshLoader(t,e,i,n){/\.stl$/i.test(t)?new bo(e).load(t,a=>{let o=new we(a,i||new Ei);n(o)},null,a=>n(null,a)):/\.dae$/i.test(t)?new Eo(e).load(t,a=>n(a.scene),null,a=>n(null,a)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}},Bu=cc;var ku={joint_1:"Base rotation",joint_2:"Shoulder",joint_3:"Elbow rotation",joint_4:"Elbow pitch",joint_5:"Wrist rotation",joint_6:"Wrist pitch",joint_7:"Wrist roll"};function u0(s,t){let{urdfUrl:e,onReady:i,onError:n}=t,r=s.querySelector("[data-arm-viewport]"),a=s.querySelector("[data-arm-panel]"),o=s.querySelector("[data-arm-status]"),c=new An;c.background=null;let l=new me(45,1,.01,50);l.position.set(.85,.5,1.05);let h=new go({antialias:!0,alpha:!0}),d=Math.min(window.devicePixelRatio||1,2);h.setPixelRatio(d),h.outputColorSpace=Qt,r.appendChild(h.domElement);let u=new er(13624319,1119004,1.1);c.add(u);let f=new hn(16777215,2.2);f.position.set(2,3,2),c.add(f);let g=new hn(5232895,.8);g.position.set(-2,1,-2),c.add(g);let x=new ar(1.2,12,2831696,1712437);x.position.y=-.001,c.add(x);let p=new vo(l,h.domElement);p.target.set(0,.3,0),p.enableDamping=!0,p.dampingFactor=.08,p.minDistance=.3,p.maxDistance=2.2,p.maxPolarAngle=Math.PI*.52,p.update();let m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=null;new Bu().load(e,P=>{y=P,y.rotation.x=-Math.PI/2,y.traverse(N=>{N.isMesh&&(N.castShadow=!1,N.receiveShadow=!1,N.material&&(N.material.metalness=.35,N.material.roughness=.55,N.material.color.set(9082285),N.material.side=Ze))}),c.add(y),v(y),o.textContent="",typeof i=="function"&&i(y)},void 0,P=>{o.textContent="Could not load the 3D model.",typeof n=="function"&&n(P)});function v(P){a.innerHTML="";let N=Object.keys(ku).filter(I=>P.joints[I]);N.forEach(I=>{let k=P.joints[I],D=document.createElement("div");D.className="arm-joint-row";let z=document.createElement("label");z.setAttribute("for",`armjoint-${I}`),z.textContent=ku[I]||I;let Y=document.createElement("input");Y.type="range",Y.id=`armjoint-${I}`;let H=Number.isFinite(k.limit.lower)?k.limit.lower:-Math.PI,J=Number.isFinite(k.limit.upper)?k.limit.upper:Math.PI;Y.min=String(H),Y.max=String(J),Y.step="0.01",Y.value=String(k.angle||0),Y.addEventListener("input",()=>{P.setJointValue(I,parseFloat(Y.value))}),D.appendChild(z),D.appendChild(Y),a.appendChild(D)});let B=document.createElement("button");B.type="button",B.className="arm-reset-btn",B.textContent="Reset pose",B.addEventListener("click",()=>{N.forEach(I=>{P.setJointValue(I,0);let k=document.getElementById(`armjoint-${I}`);k&&(k.value="0")})}),a.appendChild(B)}function A(){let P=r.clientWidth,N=r.clientHeight;P===0||N===0||(h.setSize(P,N,!1),l.aspect=P/N,l.updateProjectionMatrix())}A(),window.addEventListener("resize",A),new ResizeObserver(A).observe(r);let E=!0,_=null;function b(){E&&(p.update(),h.render(c,l),_=requestAnimationFrame(b))}function R(){E&&_===null&&(_=requestAnimationFrame(b))}function C(){E=!1,_!==null&&cancelAnimationFrame(_),_=null}return new IntersectionObserver(P=>{E=P[0].isIntersecting&&!document.hidden,E?R():C()},{threshold:.01}).observe(r),document.addEventListener("visibilitychange",()=>{E=!document.hidden,E?R():C()}),m&&(p.autoRotate=!1),R(),{dispose(){C(),window.removeEventListener("resize",A),h.dispose(),r.contains(h.domElement)&&r.removeChild(h.domElement)}}}window.ArmViewer={init:u0};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
