import{n as t,I as o,i as s,a as n,r as a,b as i}from"./index-7b75c17a.js";import{V as e}from"./vue-qr-74b27c98.js";import"./vueRouter-5522c294.js";const r={};var d=t({components:{VueQr:e},data:()=>({dataInfo:[],curInfo:{appInfo:{},versionInfo:{},history:[]},qrCodeUrl:"",pwd:"",installWithPwd:!1,isPhone:!1,loading:!1}),computed:{isIos:()=>!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:()=>!!navigator.userAgent.match(/(Android)\s+([\d.]+)/),showDownLoadBtn(){return!this.showPasswordInput&&(this.isPhone||1==this.dataInfo.length)},showMergeBtn(){return!this.showPasswordInput&&!this.isPhone&&this.dataInfo.length>1},showPasswordInput(){return this.installWithPwd},showHistoryList(){return!this.showPasswordInput&&this.curInfo.history.length>0}},mounted(){this.getAppInfo(this.$route.params.id,this.pwd),this.isIos||this.isAndroid?this.isPhone=!0:this.isPhone=!1},created(){this.$nextTick((()=>{}))},methods:{formatTime:t=>new Date(t).toFormat(),getTableBackground:t=>t%2==0?"backgroundColor: rgb(244, 245, 247)":"backgroundColor: white",getAppInfo(t,s){o(t,s).then((t=>{console.log(t),null!=t.data?(this.installWithPwd=t.data.needAuth,this.dataInfo=t.data.list,this.dataInfo.length>1?(this.isAndroid&&"android"===this.dataInfo[0].appInfo.platform?this.curInfo=this.dataInfo[0]:this.isAndroid&&"android"===this.dataInfo[1].appInfo.platform?this.curInfo=this.dataInfo[1]:this.isIos&&"ios"===this.dataInfo[0].appInfo.platform?this.curInfo=this.dataInfo[0]:this.isIos&&"ios"===this.dataInfo[1].appInfo.platform?this.curInfo=this.dataInfo[1]:this.curInfo=this.dataInfo[0],console.log("this.curInfo",this.curInfo)):this.curInfo=this.dataInfo[0],this.qrCodeUrl=`${window.origin}${this.$route.fullPath}`,this.loading=!1):this.$message.error("未检测到版本信息")}),(t=>{this.loading=!1,this.pwd=""}))},setDefaultIcon(t,o){"ios"==o.platform?t.target.src=s:"android"==o.platform?t.target.src=n:"rn"==o.platform&&(t.target.src=a)},historyClickDownLoadBtn(t){if(t.grayScaleLimit&&t.grayScaleSize<=t.downloadCount)return this.$message.error("已达到灰度上限"),void this.getAppInfo(this.$route.params.id,this.pwd);if(this.isIos){const o=document.createElement("a");o.setAttribute("href",t.installUrl),o.click()}else{const o=document.createElement("a");let s=t.downloadUrl;o.setAttribute("href",s),o.click(),fetch(s).then((o=>{let s=o.body.getReader(),n=o.headers.get("Content-Length"),a=0;s.read().then((function o(e){if(!e.done)return a+=e.value.length,console.log(`progress: ${a/n*100}%`),s.read().then(o);i(t._id).then((()=>{}),(t=>{}))}))}))}},clickDownLoadBtn(t){if(t.versionInfo.grayScaleLimit&&t.versionInfo.grayScaleSize<=t.versionInfo.downloadCount)return this.$message.error("已达到灰度上限"),void this.getAppInfo(this.$route.params.id,this.pwd);if(this.isIos){const o=document.createElement("a");o.setAttribute("href",t.versionInfo.installUrl),o.click()}else{const o=document.createElement("a");let s=t.versionInfo.downloadUrl;o.setAttribute("href",s),o.click(),fetch(s).then((o=>{let s=o.body.getReader(),n=o.headers.get("Content-Length"),a=0;s.read().then((function o(e){return e.done?(console.log("下载完成"),void i(t.versionInfo._id).then((()=>{}),(t=>{}))):(a+=e.value.length,console.log(`progress: ${a/n*100}%`),s.read().then(o))}))}))}},formatDate:t=>t?new Date(t).toFormat():"",clickSure(){this.pwd?(this.loading=!0,this.getAppInfo(this.$route.params.id,this.pwd)):this.$message.info("请输入密码")}}},(function(){var t=this,o=this,s=o.$createElement,n=o._self._c||s;return n("div",{staticClass:"preview-app-wrapper"},[o.dataInfo.length>0?n("div",{staticClass:"phoneDownLoadWrapper"},[n("img",{staticClass:"app-icon",attrs:{src:this.curInfo.appInfo.icon||"",alt:""},on:{error:function(s){return o.setDefaultIcon(s,t.curInfo.appInfo)}}}),n("p",{staticClass:"title"},[o._v(o._s(this.curInfo.appInfo.appName))]),"rn"!=this.curInfo.appInfo.platform?n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[o._v("版本："+o._s(this.curInfo.versionInfo.versionName)+"("+o._s(this.curInfo.versionInfo.versionCode)+")")]),n("span",[o._v("大小："+o._s((this.curInfo.versionInfo.size/1024/1024).toFixed(1))+"M")])]):o._e(),"rn"==this.curInfo.appInfo.platform?n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[o._v("版本："+o._s(this.curInfo.versionInfo.appVersion))]),n("span",[o._v("大小："+o._s((this.curInfo.versionInfo.size/1024/1024).toFixed(2))+"M")])]):o._e(),n("p",{staticClass:"info"},[o._v("发布日期： "+o._s(o.formatDate(this.curInfo.versionInfo.uploadAt))+" ")]),n("div",{staticClass:"qrcode"},[n("vue-qr",{staticClass:"qrcodeImg",attrs:{colorDark:"#585F69",text:o.qrCodeUrl,margin:15}}),n("p",{staticClass:"tips"},[o._v("用手机扫描二维码"+o._s("rn"==this.curInfo.appInfo.platform?"下载":"安装"))])],1),o.showPasswordInput?n("div",[n("div",[n("el-input",{staticClass:"pwd",attrs:{type:"password",placeholder:"请输入密码"},model:{value:o.pwd,callback:function(t){o.pwd=t},expression:"pwd"}})],1),n("div",[n("el-button",{staticClass:"downloadBtn sureBtn",attrs:{loading:o.loading,type:"primary",round:""},on:{click:o.clickSure}},[o._v("确定")])],1)]):o._e(),"rn"!=o.curInfo.appInfo.platform&&o.showDownLoadBtn?n("el-button",{staticClass:"downloadBtn",attrs:{type:"primary",round:""},on:{click:function(t){return o.clickDownLoadBtn(o.curInfo)}}},[n("i",{class:"ios"===this.curInfo.appInfo.platform?"icon-ic_ios":"icon-ic_andr"}),o._v(" 下载安装")]):o._e(),"rn"==o.curInfo.appInfo.platform&&o.showDownLoadBtn?n("el-button",{staticClass:"downloadBtn",attrs:{type:"primary",round:""},on:{click:function(t){return o.clickDownLoadBtn(o.curInfo)}}},[o._v("下载")]):o._e()],1):o._e(),o.showMergeBtn?n("div",{staticClass:"merge-wrapper"},[n("div",{staticClass:"left"},[n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[o._v("版本："+o._s(o.dataInfo[0].versionInfo.versionName)+"("+o._s(o.dataInfo[0].versionInfo.versionCode)+")")]),n("span",[o._v("大小："+o._s((o.dataInfo[0].versionInfo.size/1024/1024).toFixed(1))+"M")])]),n("p",{staticClass:"info"},[o._v("发布日期： "+o._s(o.formatDate(o.dataInfo[0].versionInfo.uploadAt))+" ")]),n("el-button",{staticClass:"downloadBtn mergeDown",attrs:{type:"primary",round:""},on:{click:function(t){return o.clickDownLoadBtn(o.dataInfo[0])}}},[o._v(o._s("下载 ".concat(o.dataInfo[0].appInfo.platform," 版")))])],1),n("div",{staticClass:"line"}),n("div",{staticClass:"right"},[n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[o._v("版本："+o._s(o.dataInfo[1].versionInfo.versionName)+"("+o._s(o.dataInfo[1].versionInfo.versionCode)+")")]),n("span",[o._v("大小："+o._s((o.dataInfo[1].versionInfo.size/1024/1024).toFixed(1))+"M")])]),n("p",{staticClass:"info"},[o._v("发布日期： "+o._s(o.formatDate(o.dataInfo[1].versionInfo.uploadAt))+" ")]),n("el-button",{staticClass:"downloadBtn mergeDown",attrs:{type:"primary",round:""},on:{click:function(t){return o.clickDownLoadBtn(o.dataInfo[1])}}},[o._v(o._s("下载 ".concat(o.dataInfo[1].appInfo.platform," 版")))])],1)]):o._e(),o.showHistoryList?n("div",{staticClass:"history-wrapper"},[n("ul",o._l(this.curInfo.history,(function(t,s){return n("li",{key:s,on:{click:function(s){return o.historyClickDownLoadBtn(t)}}},["rn"!=o.curInfo.appInfo.platform?n("div",[o._v("V"+o._s(t.versionName)+"(build "+o._s(t.versionCode)+")")]):o._e(),"rn"==o.curInfo.appInfo.platform?n("div",[o._v("V"+o._s(t.appVersion))]):o._e(),n("div",[o._v(o._s(o.formatTime(t.uploadAt)))])])})),0)]):o._e()])}),[],!1,l,null,null,null);function l(t){for(let o in r)this[o]=r[o]}var c=function(){return d.exports}();export{c as default};
