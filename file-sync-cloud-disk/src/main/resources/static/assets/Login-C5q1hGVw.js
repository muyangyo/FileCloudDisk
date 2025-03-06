import{_ as S,r as m,o as f,c as _,b as u,ac as k,q,a,w as o,e as w,L as E,f as U,i as d,U as F,R as L,h as v}from"./index-iYnnpkLh.js";import{e as y,R as x}from"./RequestTool-BGG1PA9N.js";import{r as c}from"./RSAEncryptUtils-B9dLK6AK.js";const N={class:"login-container"},M={key:0,class:"warning-banner"},P={class:"banner-content"},$={class:"login-box"},B={__name:"Login",setup(D){const g=m(!1),h=U(),p=m(null),s=m({username:"",password:""}),C={username:[{required:!0,type:"string",message:"请输入账号",trigger:"blur"}],password:[{required:!0,type:"string",message:"请输入密码",trigger:"blur"}]},V=()=>{p.value.validate(async b=>{var e,l;if(b){let r=await y(x.GET,"/user/getPublicKey","");c.setPublicKey(r.data);const i={username:c.encryptData(s.value.username),password:c.encryptData(s.value.password)};try{const t=await y(x.POST,"/user/login",i);t.statusCode==="SUCCESS"&&t.data===!0?(F.login(L.user,s.value.username),v({message:`欢迎回来, ${s.value.username}`,type:"success"}),await h.push("/user")):v.error(t.errMsg||"账号或密码错误")}catch(t){v.error(((l=(e=t.response)==null?void 0:e.data)==null?void 0:l.message)||"登录失败")}}})},R=()=>{p.value.resetFields()};return(b,e)=>{const l=d("el-input"),r=d("el-form-item"),i=d("el-button"),t=d("el-form");return f(),_("div",N,[g.value?q("",!0):(f(),_("div",M,[u("div",P,[e[5]||(e[5]=k('<div class="banner-title" data-v-678e582e>⚠️ 提示</div><div class="banner-text" data-v-678e582e>由于本服务器带宽有限，部分功能受限制，此处展示非完全体</div><div class="banner-text" data-v-678e582e> 测试账号(仅读权限): <span class="highlight-text" data-v-678e582e>123</span> 密码: <span class="highlight-text" data-v-678e582e>3ora7wfi53</span></div><div class="banner-section" data-v-678e582e><div class="banner-subtitle" data-v-678e582e>Ps:</div><ul class="banner-list" data-v-678e582e><li data-v-678e582e><span class="highlight-text" data-v-678e582e>手机与平板</span>浏览建议开启<span class="highlight-text" data-v-678e582e>电脑模式</span></li><li data-v-678e582e>若需要完整体验，请下载 <span class="highlight-text" data-v-678e582e>文件云盘</span> 文件夹内的压缩包</li><li data-v-678e582e>若需要更多权限，请联系作者QQ: <span class="highlight-text" data-v-678e582e>3560775787</span></li></ul></div>',4)),u("button",{class:"close-button",onClick:e[0]||(e[0]=n=>g.value=!0)},"×")])])),u("div",$,[e[8]||(e[8]=u("div",{style:{"text-align":"center","margin-bottom":"20px","font-size":"36px","font-weight":"bold"}}," Login ",-1)),a(t,{model:s.value,rules:C,ref_key:"loginForm",ref:p,"label-width":"80px",onSubmit:E(V,["prevent"])},{default:o(()=>[a(r,{label:"账号",prop:"username"},{default:o(()=>[a(l,{modelValue:s.value.username,"onUpdate:modelValue":e[1]||(e[1]=n=>s.value.username=n),onChange:e[2]||(e[2]=n=>s.value.username=s.value.username.trim()),placeholder:"请输入账号"},null,8,["modelValue"])]),_:1}),a(r,{label:"密码",prop:"password"},{default:o(()=>[a(l,{type:"password",modelValue:s.value.password,"onUpdate:modelValue":e[3]||(e[3]=n=>s.value.password=n),onChange:e[4]||(e[4]=n=>s.value.password=s.value.password.trim()),placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),a(r,null,{default:o(()=>[a(i,{type:"primary","native-type":"submit"},{default:o(()=>e[6]||(e[6]=[w("登录")])),_:1}),a(i,{onClick:R},{default:o(()=>e[7]||(e[7]=[w("重置")])),_:1})]),_:1})]),_:1},8,["model"])])])}}},Q=S(B,[["__scopeId","data-v-678e582e"]]);export{Q as default};
