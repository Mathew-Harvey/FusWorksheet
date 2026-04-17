var RF_OPTIONS='<option value="">—</option><option value="1.0">1.0</option><option value="1.1">1.1</option><option value="1.2">1.2</option><option value="1.3">1.3</option><option value="1.4">1.4</option><option value="1.5">1.5</option><option value="1.6">1.6</option><option value="1.7">1.7</option><option value="1.8">1.8</option><option value="1.9">1.9</option><option value="2.0">2.0</option>';
var RG_OPTIONS='<option value="">—</option><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option><option value="K">K</option><option value="L">L</option><option value="M">M</option><option value="N">N</option><option value="O">O</option>';


var isDivingMode=true;
function toggleDivingMode(){isDivingMode=!isDivingMode;applyDivingMode();scheduleSave();}
function applyDivingMode(){var btn=document.getElementById('diveToggleBtn');var status=document.getElementById('diveToggleStatus');var divePage=document.getElementById('page-divingLog');var sideBtns=document.querySelectorAll('.sidebar-btn[data-tab="divingLog"]');var pillBtns=document.querySelectorAll('.pill-tab[data-tab="divingLog"]');if(isDivingMode){btn.innerHTML='<img class="dive-helmet" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gPGRlZnM+IDxsaW5lYXJHcmFkaWVudCBpZD0iaGciIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4gPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTg0MyIvPiA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiODg2MGIiLz4gPC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPiA8IS0tIEhlbG1ldCBkb21lIC0tPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI0NSIgcng9IjMyIiByeT0iMzYiIGZpbGw9InVybCgjaGcpIiBzdHJva2U9IiM4QjY5MTQiIHN0cm9rZS13aWR0aD0iMi41Ii8+IDwhLS0gVmlld3BvcnQvZmFjZXBsYXRlIC0tPiA8cmVjdCB4PSIzMCIgeT0iMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjYiIGZpbGw9IiMxYTNhNWMiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4gPHJlY3QgeD0iMzMiIHk9IjMzIiB3aWR0aD0iMzQiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjMmU2MDkwIiBvcGFjaXR5PSIwLjgiLz4gPCEtLSBWaWV3cG9ydCBzaGluZSAtLT4gPGVsbGlwc2UgY3g9IjQyIiBjeT0iNDAiIHJ4PSI2IiByeT0iNCIgZmlsbD0iIzVjYjhlNiIgb3BhY2l0eT0iMC4zIi8+IDwhLS0gTmVjayByaW5nIC8gY29sbGFyIC0tPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI3NiIgcng9IjI4IiByeT0iOCIgZmlsbD0iIzhCNjkxNCIgc3Ryb2tlPSIjNkI1MjEwIiBzdHJva2Utd2lkdGg9IjEuNSIvPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI3MyIgcng9IjI4IiByeT0iOCIgZmlsbD0idXJsKCNoZykiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4gPCEtLSBTaWRlIGJvbHRzIC0tPiA8Y2lyY2xlIGN4PSIyNCIgY3k9IjUwIiByPSIzLjUiIGZpbGw9IiM4QjY5MTQiIHN0cm9rZT0iIzZCNTIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+IDxjaXJjbGUgY3g9Ijc2IiBjeT0iNTAiIHI9IjMuNSIgZmlsbD0iIzhCNjkxNCIgc3Ryb2tlPSIjNkI1MjEwIiBzdHJva2Utd2lkdGg9IjEiLz4gPCEtLSBUb3AgdmFsdmUgLS0+IDxyZWN0IHg9IjQ1IiB5PSI2IiB3aWR0aD0iMTAiIGhlaWdodD0iOCIgcng9IjIiIGZpbGw9IiM4QjY5MTQiIHN0cm9rZT0iIzZCNTIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+IDxjaXJjbGUgY3g9IjUwIiBjeT0iNyIgcj0iMyIgZmlsbD0iI2I4ODYwYiIvPiA8IS0tIENoaW4gZ3JpbGwgLS0+IDxsaW5lIHgxPSIzNSIgeTE9IjYyIiB4Mj0iNjUiIHkyPSI2MiIgc3Ryb2tlPSIjOEI2OTE0IiBzdHJva2Utd2lkdGg9IjEuNSIvPiA8bGluZSB4MT0iMzciIHkxPSI2NSIgeDI9IjYzIiB5Mj0iNjUiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=" alt=""> Switch to Non-Diving Worksheet';btn.style.borderColor='var(--accent)';btn.style.color='var(--accent)';status.textContent='Diving Log is currently visible';divePage.classList.remove('no-dive');sideBtns.forEach(function(b){b.style.display='';});pillBtns.forEach(function(b){b.style.display='';});}else{btn.innerHTML='<img class="dive-helmet" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4gPGRlZnM+IDxsaW5lYXJHcmFkaWVudCBpZD0iaGciIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj4gPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YTg0MyIvPiA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiODg2MGIiLz4gPC9saW5lYXJHcmFkaWVudD4gPC9kZWZzPiA8IS0tIEhlbG1ldCBkb21lIC0tPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI0NSIgcng9IjMyIiByeT0iMzYiIGZpbGw9InVybCgjaGcpIiBzdHJva2U9IiM4QjY5MTQiIHN0cm9rZS13aWR0aD0iMi41Ii8+IDwhLS0gVmlld3BvcnQvZmFjZXBsYXRlIC0tPiA8cmVjdCB4PSIzMCIgeT0iMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyOCIgcng9IjYiIGZpbGw9IiMxYTNhNWMiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4gPHJlY3QgeD0iMzMiIHk9IjMzIiB3aWR0aD0iMzQiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjMmU2MDkwIiBvcGFjaXR5PSIwLjgiLz4gPCEtLSBWaWV3cG9ydCBzaGluZSAtLT4gPGVsbGlwc2UgY3g9IjQyIiBjeT0iNDAiIHJ4PSI2IiByeT0iNCIgZmlsbD0iIzVjYjhlNiIgb3BhY2l0eT0iMC4zIi8+IDwhLS0gTmVjayByaW5nIC8gY29sbGFyIC0tPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI3NiIgcng9IjI4IiByeT0iOCIgZmlsbD0iIzhCNjkxNCIgc3Ryb2tlPSIjNkI1MjEwIiBzdHJva2Utd2lkdGg9IjEuNSIvPiA8ZWxsaXBzZSBjeD0iNTAiIGN5PSI3MyIgcng9IjI4IiByeT0iOCIgZmlsbD0idXJsKCNoZykiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4gPCEtLSBTaWRlIGJvbHRzIC0tPiA8Y2lyY2xlIGN4PSIyNCIgY3k9IjUwIiByPSIzLjUiIGZpbGw9IiM4QjY5MTQiIHN0cm9rZT0iIzZCNTIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+IDxjaXJjbGUgY3g9Ijc2IiBjeT0iNTAiIHI9IjMuNSIgZmlsbD0iIzhCNjkxNCIgc3Ryb2tlPSIjNkI1MjEwIiBzdHJva2Utd2lkdGg9IjEiLz4gPCEtLSBUb3AgdmFsdmUgLS0+IDxyZWN0IHg9IjQ1IiB5PSI2IiB3aWR0aD0iMTAiIGhlaWdodD0iOCIgcng9IjIiIGZpbGw9IiM4QjY5MTQiIHN0cm9rZT0iIzZCNTIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+IDxjaXJjbGUgY3g9IjUwIiBjeT0iNyIgcj0iMyIgZmlsbD0iI2I4ODYwYiIvPiA8IS0tIENoaW4gZ3JpbGwgLS0+IDxsaW5lIHgxPSIzNSIgeTE9IjYyIiB4Mj0iNjUiIHkyPSI2MiIgc3Ryb2tlPSIjOEI2OTE0IiBzdHJva2Utd2lkdGg9IjEuNSIvPiA8bGluZSB4MT0iMzciIHkxPSI2NSIgeDI9IjYzIiB5Mj0iNjUiIHN0cm9rZT0iIzhCNjkxNCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=" alt=""> Switch to Diving Worksheet';btn.style.borderColor='var(--success)';btn.style.color='var(--success)';status.textContent='Diving Log is hidden (non-diving mode)';divePage.classList.add('no-dive');sideBtns.forEach(function(b){b.style.display='none';});pillBtns.forEach(function(b){b.style.display='none';});var activeTab=document.querySelector('.pill-tab.active');if(activeTab&&activeTab.dataset.tab==='divingLog')switchTab('dailyActivities');}}

function toggleOptions(){var panel=document.getElementById('optionsPanel');var btn=document.getElementById('optionsBtn');if(panel.style.display==='none'){panel.style.display='block';btn.classList.add('active');}else{panel.style.display='none';btn.classList.remove('active');}}
var teamMembers=[];isDivingMode=true;applyDivingMode();
function addTeamMember(n){teamMembers.push(typeof n==='string'?n:'');renderTeamInputs();refreshAllSignSections();}
function removeTeamMember(i){teamMembers.splice(i,1);renderTeamInputs();refreshAllSignSections();}
function updateTeamMember(i,v){teamMembers[i]=v;refreshAllSignSections();}
function esc(s){return(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function renderTeamInputs(){var c=document.getElementById('teamRosterInputs');c.innerHTML='';teamMembers.forEach(function(n,i){var r=document.createElement('div');r.style.cssText='display:flex;align-items:center;gap:8px;margin-bottom:6px';r.innerHTML='<span style="font-weight:700;font-size:12px;color:var(--mid-gray);width:24px">'+(i+1)+'</span><input value="'+esc(n)+'" oninput="updateTeamMember('+i+',this.value)" style="flex:1;padding:7px 10px;border:1.5px solid var(--light-gray);border-radius:6px;font-size:13px" placeholder="Team member name"><button onclick="removeTeamMember('+i+')" style="background:none;border:1px solid var(--light-gray);border-radius:4px;padding:4px 8px;font-size:14px;color:var(--mid-gray);cursor:pointer">✕</button>';c.appendChild(r);});}

function initSigCanvas(id){var c=document.getElementById(id);if(!c||c.dataset.si)return;c.dataset.si='1';var ctx=c.getContext('2d');c._sigDrawing=false;function pos(e){var r=c.getBoundingClientRect(),t=e.touches?e.touches[0]:e;return{x:t.clientX-r.left,y:t.clientY-r.top};}c.addEventListener('mousedown',function(e){e.preventDefault();c._sigDrawing=true;var q=pos(e);ctx.beginPath();ctx.moveTo(q.x,q.y);});window.addEventListener('mousemove',function(e){if(!c._sigDrawing)return;var q=pos(e);ctx.lineWidth=2;ctx.lineCap='round';ctx.strokeStyle='#0a1628';ctx.lineTo(q.x,q.y);ctx.stroke();});window.addEventListener('mouseup',function(){if(c._sigDrawing){c._sigDrawing=false;scheduleSave();}});c.addEventListener('touchstart',function(e){e.preventDefault();c._sigDrawing=true;var q=pos(e);ctx.beginPath();ctx.moveTo(q.x,q.y);},{passive:false});window.addEventListener('touchmove',function(e){if(!c._sigDrawing)return;e.preventDefault();var q=pos(e);ctx.lineWidth=2;ctx.lineCap='round';ctx.strokeStyle='#0a1628';ctx.lineTo(q.x,q.y);ctx.stroke();},{passive:false});window.addEventListener('touchend',function(){if(c._sigDrawing){c._sigDrawing=false;scheduleSave();}});}
var HAT_INVENTORY={
Perth:{
'KM18':['11716','20703','21010'],
'KM28':['20334B','18454B','18298B','21193B','16353B','21579B','16354B','14473B'],
'SL 27':['4C089','4C091'],
'KM37':['1073 KM','1074KM','K13835']
},
Sydney:{
'Bandmask 28':['12717 (Blue Tag)','11489 (Blue/Green Tag)','11706 (Blue/Green/Blue Tag)','10198 (Red/Green Tag)','10188 (Red/Yellow Tag)'],
'KM 37':['21050 (Black Tag)','21040 (Black/Black Tag)']
}
};
var REGION_CONFIG={
NSW:{city:'Sydney',chamber:'Prince of Wales Hospital, Nurses Dr, Randwick NSW 2031',phone:'(02) 9382 3880'},
WA:{city:'Perth',chamber:'Fiona Stanley Hospital, Robin Warren Drive, Murdoch 6150',phone:'(08) 6152 5222'}
};
function setRegion(r){
  var cfg=REGION_CONFIG[r];if(!cfg)return;
  document.querySelectorAll('[data-proj="region"]').forEach(function(i){i.value=r;});
  document.querySelectorAll('.region-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-region')===r);});
  var ch=document.getElementById('chamberInput');if(ch)ch.value=cfg.chamber;
  var ph=document.getElementById('chamberPhoneInput');if(ph)ph.value=cfg.phone;
  updateHatModelOptions();
  if(typeof scheduleSave==='function')scheduleSave();
}
function getCurrentHatLocation(){var h=document.querySelector('[data-proj="region"]');if(!h||!h.value)return '';return (REGION_CONFIG[h.value]||{}).city||'';}
function updateHatModelOptions(){var loc=getCurrentHatLocation();[1,2].forEach(function(n){var sel=document.getElementById('hatModel'+n);var serSel=document.getElementById('hatSerial'+n);if(!sel||!serSel)return;if(!loc||!HAT_INVENTORY[loc]){sel.innerHTML='<option value="">— select Region first —</option>';serSel.innerHTML='<option value="">— select model first —</option>';return;}var prev=sel.value;var opts='<option value="">—</option>';Object.keys(HAT_INVENTORY[loc]).forEach(function(m){opts+='<option value="'+m+'">'+m+'</option>';});sel.innerHTML=opts;if(prev&&HAT_INVENTORY[loc][prev]){sel.value=prev;updateHatSerialOptions(n);}else{serSel.innerHTML='<option value="">— select model first —</option>';}});}
function updateHatSerialOptions(diverNum){var loc=getCurrentHatLocation();var model=document.getElementById('hatModel'+diverNum).value;var serSel=document.getElementById('hatSerial'+diverNum);if(!loc||!model||!HAT_INVENTORY[loc]||!HAT_INVENTORY[loc][model]){serSel.innerHTML='<option value="">— select model first —</option>';return;}var prev=serSel.value;var opts='<option value="">—</option>';HAT_INVENTORY[loc][model].forEach(function(s){opts+='<option value="'+s+'">'+s+'</option>';});serSel.innerHTML=opts;if(prev&&HAT_INVENTORY[loc][model].indexOf(prev)>=0)serSel.value=prev;if(typeof scheduleSave==='function')scheduleSave();}
function clearSig(id){var c=document.getElementById(id);if(c)c.getContext('2d').clearRect(0,0,c.width,c.height);}
function isSigEmpty(c){var d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;for(var i=3;i<d.length;i+=4)if(d[i]>0)return false;return true;}
function createSigRow(name,pfx){var id=pfx+'_'+Math.random().toString(36).slice(2,8);var row=document.createElement('div');row.className='sig-row';var empty=!name||!name.trim();row.innerHTML='<span class="sig-name '+(empty?'empty':'')+'">'+(empty?'(empty slot)':esc(name))+"</span><canvas id=\""+id+"\" width=\"280\" height=\"50\"></canvas><button class=\"sig-clear\" onclick=\"clearSig('"+id+"')\">Clear</button>";return{row:row,canvasId:id};}
function updateHatCheckLists(){var opts='';teamMembers.forEach(function(n){if(n&&n.trim()){var v=n.replace(/"/g,'&quot;');opts+='<option value="'+v+'">';}});var dl1=document.getElementById('hatCheckList1');var dl2=document.getElementById('hatCheckList2');if(dl1)dl1.innerHTML=opts;if(dl2)dl2.innerHTML=opts;var dlr=document.getElementById('diverReviewList');if(dlr)dlr.innerHTML=opts;var dnl=document.getElementById('diveNameList');if(dnl)dnl.innerHTML=opts;}
function refreshAllSignSections(){updateHatCheckLists();var msg='<p style="font-size:12px;color:var(--mid-gray);padding:12px;font-style:italic">Add team members on Daily Activities to see sign-on fields.</p>';['dl_fitToDive','tb_signOn','swms_signOff','ed_attendees_list'].forEach(function(cid){var c=document.getElementById(cid);c.innerHTML='';if(!teamMembers.length){c.innerHTML=msg;return;}teamMembers.forEach(function(name){var o=createSigRow(name,cid);c.appendChild(o.row);setTimeout(function(){initSigCanvas(o.canvasId);},0);});
var pinp=document.getElementById('permitsFileInput');if(pinp){pinp.addEventListener('change',function(){handlePermitsUpload(pinp);});}var pzone=document.getElementById('permitsUploadZone');if(pzone){pzone.addEventListener('dragover',function(e){e.preventDefault();pzone.style.borderColor='var(--accent)';pzone.style.background='#f0f6fc';});pzone.addEventListener('dragleave',function(){pzone.style.borderColor='';pzone.style.background='';});pzone.addEventListener('drop',function(e){e.preventDefault();pzone.style.borderColor='';pzone.style.background='';var files=e.dataTransfer.files;if(files.length){var inp=document.getElementById('permitsFileInput');var dt=new DataTransfer();for(var i=0;i<files.length;i++)dt.items.add(files[i]);inp.files=dt.files;handlePermitsUpload(inp);}});}
});}



function sortActivityLog(){var tbody=document.getElementById('da_activities');if(!tbody)return;var rows=[];for(var i=0;i<tbody.rows.length;i++)rows.push(tbody.rows[i]);rows.sort(function(a,b){var inpA=a.getElementsByTagName('input')[0];var inpB=b.getElementsByTagName('input')[0];var vA=inpA?inpA.value:'';var vB=inpB?inpB.value:'';if(!vA&&!vB)return 0;if(!vA)return 1;if(!vB)return -1;if(vA<vB)return -1;if(vA>vB)return 1;return 0;});for(var j=0;j<rows.length;j++)tbody.appendChild(rows[j]);}
function calcDiveTotalTimes(){document.querySelectorAll('.dive-sub').forEach(function(entry){var inputs=entry.querySelectorAll('[data-dive-field]');var ls='',lb='',as='',ttField=null,btField=null;inputs.forEach(function(inp){var k=inp.getAttribute('data-dive-field');if(k==='leftSurface')ls=inp.value;if(k==='leftBottom')lb=inp.value;if(k==='arrivedSurface')as=inp.value;if(k==='totalTime')ttField=inp;if(k==='bottomTime')btField=inp;});if(btField&&ls&&lb&&!btField.dataset.userEdited){var lsParts2=ls.split(':');var lbParts2=lb.split(':');var lsMin2=parseInt(lsParts2[0])*60+parseInt(lsParts2[1]);var lbMin2=parseInt(lbParts2[0])*60+parseInt(lbParts2[1]);var diff2=lbMin2-lsMin2;if(diff2<0)diff2+=1440;btField.value=diff2+' min';}if(ttField&&ls&&as&&!ttField.dataset.userEdited){var lsParts=ls.split(':');var asParts=as.split(':');var lsMin=parseInt(lsParts[0])*60+parseInt(lsParts[1]);var asMin=parseInt(asParts[0])*60+parseInt(asParts[1]);var diff=asMin-lsMin;if(diff<0)diff+=1440;ttField.value=diff+' min';}});}
var autoRowEdits={};
function syncDivesToActivity(){var diveGroups=[];document.querySelectorAll('.dive-entry').forEach(function(entry,di){var nameInp=entry.querySelector('[data-dive-field="diverName"]');var diverName=nameInp?nameInp.value:'';var label=diverName||'Diver '+(di+1);var subs=entry.querySelectorAll('.dive-sub');var firstDepth='';var firstLS='';subs.forEach(function(sub,si){var v={};sub.querySelectorAll('[data-dive-field]').forEach(function(inp){v[inp.getAttribute('data-dive-field')]=inp.value;});var diveLabel=subs.length>1?label+' D'+(si+1):label;var depth=v.depth?' \u2014 '+v.depth+'m':'';var events=[];var key='d'+di+'s'+si;if(v.leftSurface)events.push({key:key+'_ls',time:v.leftSurface,defaultDesc:'left surface'+depth,order:0});if(v.leftBottom)events.push({key:key+'_lb',time:v.leftBottom,defaultDesc:'left bottom'+depth,order:1});if(v.arrivedSurface)events.push({key:key+'_as',time:v.arrivedSurface,defaultDesc:'arrived surface',order:2});events.forEach(function(ev){ev.colorIdx=di;ev.diverLabel=diveLabel;});if(events.length)diveGroups.push({sortTime:v.leftSurface||v.leftBottom||v.arrivedSurface||'99:99',events:events});if(si===0){firstDepth=v.depth;firstLS=v.leftSurface;}});var summary=entry.querySelector('.dive-summary');var lbl='Diver '+(di+1);if(diverName)lbl+=' \u2014 '+diverName;var diveCount=entry.querySelectorAll('.dive-sub').length;if(diveCount>1)lbl+=' ('+diveCount+' dives)';else{if(firstDepth)lbl+=' @ '+firstDepth+'m';if(firstLS)lbl+=' ['+firstLS+']';}summary.textContent=lbl;});diveGroups.sort(function(a,b){var ta=a.sortTime.replace(':','');var tb=b.sortTime.replace(':','');return parseInt(ta||'9999')-parseInt(tb||'9999');});var allEvents=[];diveGroups.forEach(function(g){g.events.forEach(function(e){allEvents.push(e);});});var tbody=document.getElementById('da_activities');tbody.querySelectorAll('.auto-dive-row').forEach(function(r){var k=r.getAttribute('data-dive-key');var di=r.querySelector('.auto-desc');if(k&&di&&di.dataset.userEdited==='true')autoRowEdits[k]=di.value;r.remove();});allEvents.forEach(function(ev){var tr=document.createElement('tr');tr.className='auto-dive-row';tr.setAttribute('data-dive-key',ev.key);tr.setAttribute('data-diver-color',ev.colorIdx);var desc=autoRowEdits[ev.key]||ev.defaultDesc;var _dc=_diverColors[ev.colorIdx]||'#0a1628';tr.innerHTML='<td><input type="time" value="'+ev.time+'" readonly style="pointer-events:none;background:transparent;border-color:transparent"></td><td><span class="auto-dive-text" style="color:'+_dc+';font-weight:700;font-size:12px;padding:5px 6px;display:block">'+esc(ev.diverLabel)+' \u2014 '+esc(desc)+'</span></td>';tbody.appendChild(tr);});var activeKeys=new Set(allEvents.map(function(e){return e.key;}));Object.keys(autoRowEdits).forEach(function(k){if(!activeKeys.has(k))delete autoRowEdits[k];});calcDiveTotalTimes();setTimeout(sortActivityLog,0);}

function syncDrillToActivity(){var tbody=document.getElementById('da_activities');tbody.querySelectorAll('.auto-drill-row').forEach(function(r){r.remove();});var steps=document.querySelectorAll('#ed_steps tr');var lastTime='';steps.forEach(function(tr){var inp=tr.querySelectorAll('input');if(inp[0]&&inp[0].value&&inp[1]&&inp[1].value)lastTime=inp[0].value;});var drillType=document.getElementById('ed_drillType').value;if(!lastTime||!drillType)return;var tr=document.createElement('tr');tr.className='auto-drill-row';tr.innerHTML='<td><input type="time" value="'+lastTime+'"></td><td><input value="DIVING DRILL COMPLETED \u2014 '+esc(drillType)+'" style="color:var(--danger);font-weight:700"></td>';tbody.appendChild(tr);setTimeout(sortActivityLog,0);}

var swmsPdfDoc=null;
function handleSWMSUpload(input){var file=input.files[0];if(!file)return;if(file.type!=='application/pdf'){alert('Please upload a PDF file.');input.value='';return;}if(!window.pdfjsLib||!window._pdfjsReady){setTimeout(function(){handleSWMSUpload(input);},500);return;}var reader=new FileReader();reader.onload=function(e){var data=new Uint8Array(e.target.result);document.getElementById('swmsUploadZone').classList.add('has-file');document.getElementById('swmsFileName').textContent='\u2713 '+file.name;document.getElementById('swmsRemoveBtn').style.display='inline-block';var t=document.getElementById('swms_title');if(!t.value)t.value=file.name.replace('.pdf','');pdfjsLib.getDocument({data:data}).promise.then(function(pdf){swmsPdfDoc=pdf;renderSwmsPages();}).catch(function(err){alert('Error reading PDF: '+err.message);});};reader.readAsArrayBuffer(file);}
function renderSwmsPages(){if(!swmsPdfDoc)return;var sc=document.getElementById('swmsScreenPages');sc.innerHTML='';var renderPage=function(i){if(i>swmsPdfDoc.numPages)return;swmsPdfDoc.getPage(i).then(function(page){var sv=page.getViewport({scale:2});var scv=document.createElement('canvas');scv.width=sv.width;scv.height=sv.height;scv.style.maxWidth='100%';page.render({canvasContext:scv.getContext('2d'),viewport:sv}).promise.then(function(){sc.appendChild(scv);renderPage(i+1);});});};renderPage(1);}
function removeSWMS(){swmsPdfDoc=null;document.getElementById('swmsScreenPages').innerHTML='';document.getElementById('swmsUploadZone').classList.remove('has-file');document.getElementById('swmsFileName').textContent='Click to upload SWMS PDF';document.getElementById('swmsRemoveBtn').style.display='none';document.getElementById('swmsFileInput').value='';}
document.addEventListener('DOMContentLoaded',function(){var zone=document.getElementById('swmsUploadZone');zone.addEventListener('dragover',function(e){e.preventDefault();zone.style.borderColor='var(--accent)';zone.style.background='#f0f6fc';});zone.addEventListener('dragleave',function(){zone.style.borderColor='';zone.style.background='';});zone.addEventListener('drop',function(e){e.preventDefault();zone.style.borderColor='';zone.style.background='';var file=e.dataTransfer.files[0];if(file){var inp=document.getElementById('swmsFileInput');var dt=new DataTransfer();dt.items.add(file);inp.files=dt.files;handleSWMSUpload(inp);}});});

function syncProj(el){var k=el.getAttribute('data-proj');document.querySelectorAll('[data-proj="'+k+'"]').forEach(function(i){i.value=el.value;});}
function switchTab(tab){document.querySelectorAll('.form-page').forEach(function(p){p.classList.remove('active');});document.getElementById('page-'+tab).classList.add('active');document.querySelectorAll('.sidebar-btn').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab);});document.querySelectorAll('.pill-tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab);});if(window.innerWidth<768)document.getElementById('sidebar').classList.add('closed');}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('closed');}


function makeHazardRows(id,n){var tbody=document.getElementById(id);for(var i=0;i<n;i++){var tr=document.createElement('tr');var td1=document.createElement('td');var inp1=document.createElement('input');td1.appendChild(inp1);var td2=document.createElement('td');var inp2=document.createElement('input');td2.appendChild(inp2);var td3=document.createElement('td');var inp3=document.createElement('input');inp3.setAttribute('list','byWhomList');td3.appendChild(inp3);tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tbody.appendChild(tr);}}


function addQuickLog(){var timeInp=document.getElementById('quickLogTime');var descInp=document.getElementById('quickLogDesc');var desc=descInp.value.trim();if(!desc)return;var time=timeInp.value;if(!time){var now=new Date();time=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');}var tbody=document.getElementById('da_activities');var tr=document.createElement('tr');var td1=document.createElement('td');var inp1=document.createElement('input');inp1.type='time';inp1.value=time;td1.appendChild(inp1);var td2=document.createElement('td');var inp2=document.createElement('input');inp2.value=desc;td2.appendChild(inp2);tr.appendChild(td1);tr.appendChild(td2);tbody.appendChild(tr);setTimeout(sortActivityLog,0);descInp.value='';timeInp.value='';scheduleSave();}
document.addEventListener('DOMContentLoaded',function(){var descInp=document.getElementById('quickLogDesc');if(descInp)descInp.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();addQuickLog();}});});

function exportDiveCSV(){var projFields={};document.querySelectorAll('[data-proj]').forEach(function(el){if(el.value)projFields[el.getAttribute('data-proj')]=el.value;});var headers=['Diver #','Diver Name','Dive #','Surface Interval','RF','Bail Out Pressure (Bar)','Left Surface','Depth (m)','NDL','Left Bottom','Arrived Surface','Total Dive Time','Total Bottom Time','RG'];var rows=[headers.join(',')];document.querySelectorAll('.dive-entry').forEach(function(entry,di){var nameInp=entry.querySelector('[data-dive-field="diverName"]');var diverName=nameInp?nameInp.value:'';var subs=entry.querySelectorAll('.dive-sub');var hasData=false;subs.forEach(function(sub,si){var v={};sub.querySelectorAll('[data-dive-field]').forEach(function(inp){var k=inp.getAttribute('data-dive-field');v[k]=inp.value||'';});if(v.leftSurface||v.depth||v.leftBottom||v.arrivedSurface||v.surfaceInt||v.rf||v.bailout)hasData=true;});if(!hasData&&!diverName)return;subs.forEach(function(sub,si){var v={};sub.querySelectorAll('[data-dive-field]').forEach(function(inp){var k=inp.getAttribute('data-dive-field');v[k]=inp.value||'';});var row=[(di+1),csvEsc(diverName),(si+1),csvEsc(v.surfaceInt||''),csvEsc(v.rf||''),csvEsc(v.bailout||''),csvEsc(v.leftSurface||''),csvEsc(v.depth||''),csvEsc(v.ndl||''),csvEsc(v.leftBottom||''),csvEsc(v.arrivedSurface||''),csvEsc(v.totalTime||''),csvEsc(v.bottomTime||''),csvEsc(v.rg||'')];rows.push(row.join(','));});});var meta=['Project,'+csvEsc(projFields.project||''),'Date,'+csvEsc(projFields.date||''),'Job No.,'+csvEsc(projFields.jobNo||''),'Location,'+csvEsc(projFields.location||''),'Vessel,'+csvEsc(projFields.vessel||''),'Client,'+csvEsc(projFields.client||''),'Supervisor,'+csvEsc(projFields.supervisor||''),'',''];var csv=meta.join('\n')+'\n'+rows.join('\n');var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});var url=URL.createObjectURL(blob);var a=document.createElement('a');var jobNo=projFields.jobNo||'';var dateVal=projFields.date||'';var fname='Dive_Log';if(jobNo)fname=jobNo+'_Dive_Log';if(dateVal)fname+='_'+dateVal;a.href=url;a.download=fname+'.csv';a.click();URL.revokeObjectURL(url);}
function csvEsc(v){v=String(v);if(v.indexOf(',')>=0||v.indexOf('"')>=0||v.indexOf('\n')>=0)return '"'+v.replace(/"/g,'""')+'"';return v;}
function addActivityRow(){var tbody=document.getElementById('da_activities');var tr=document.createElement('tr');var td1=document.createElement('td');var inp1=document.createElement('input');inp1.type='time';td1.appendChild(inp1);var td2=document.createElement('td');var inp2=document.createElement('input');td2.appendChild(inp2);tr.appendChild(td1);tr.appendChild(td2);tbody.appendChild(tr);scheduleSave();}
function makeRows(id,n,fields){var tbody=document.getElementById(id);for(var i=0;i<n;i++){var tr=document.createElement('tr');fields.forEach(function(f){var td=document.createElement('td');var inp=document.createElement('input');inp.type=f.type||'text';td.appendChild(inp);tr.appendChild(td);});tbody.appendChild(tr);}}

function hideEmptyForPrint(){document.querySelectorAll('#da_activities tr:not(.auto-dive-row):not(.auto-drill-row)').forEach(function(tr){if(![].slice.call(tr.querySelectorAll('input')).some(function(i){return i.value.trim();}))tr.classList.add('print-hide');});document.querySelectorAll('.dive-entry').forEach(function(e){if(![].slice.call(e.querySelectorAll('[data-dive-field]')).some(function(i){return i.value&&i.value.trim();}))e.classList.add('print-hide');else e.classList.add('open');});['tb_hazards','ed_steps','ed_actions'].forEach(function(id){document.querySelectorAll('#'+id+' tr').forEach(function(tr){if(![].slice.call(tr.querySelectorAll('input')).some(function(i){return i.value.trim();}))tr.classList.add('print-hide');});});document.querySelectorAll('.sig-row').forEach(function(r){var c=r.querySelector('canvas');var n=r.querySelector('.sig-name');if(c&&isSigEmpty(c)&&n&&n.classList.contains('empty'))r.classList.add('print-hide');});document.querySelectorAll('.checklist-item').forEach(function(i){var s=i.querySelector('select');if(s&&!s.value)i.classList.add('print-hide');});}
function restoreAfterPrint(){document.querySelectorAll('.print-hide').forEach(function(e){e.classList.remove('print-hide');});}
function clearAll(){if(!confirm('Clear ALL data and signatures? This will also clear saved data.'))return;localStorage.removeItem(SAVE_KEY);document.querySelectorAll('input:not([type=file]),textarea').forEach(function(el){el.value='';});document.querySelectorAll('select').forEach(function(el){el.selectedIndex=0;el.className=el.className.replace(/cl-yes|cl-no|cl-na/g,'').trim();});document.querySelectorAll('canvas').forEach(function(c){c.getContext('2d').clearRect(0,0,c.width,c.height);});teamMembers=[];renderTeamInputs();refreshAllSignSections();removeSWMS();removePermits();document.querySelectorAll('.auto-dive-row,.auto-drill-row').forEach(function(r){r.remove();});autoRowEdits={};}
function exportPDF(){var _origTitle=document.title;var jobNo='';var dateVal='';document.querySelectorAll('[data-proj="jobNo"]').forEach(function(el){if(el.value)jobNo=el.value;});document.querySelectorAll('[data-proj="date"]').forEach(function(el){if(el.value)dateVal=el.value;});if(jobNo||dateVal){var parts=[];if(jobNo)parts.push(jobNo);parts.push('Daily Worksheet');if(dateVal)parts.push(dateVal);document.title=parts.join(' - ');}document.querySelectorAll('.form-page').forEach(function(p){p.classList.add('active');});hideEmptyForPrint();setTimeout(function(){window.print();setTimeout(function(){restoreAfterPrint();document.title=_origTitle;var a=document.querySelector('.pill-tab.active');if(a)switchTab(a.dataset.tab);},500);},150);}

function init(){
makeRows('da_activities',20,[{type:'time'},{}]);
var dc=document.getElementById('dl_dives');
var diveFields=[
[{label:'Surface Interval',key:'surfaceInt',type:'datalist',listId:'siDatalist'},{label:'RF',key:'rf',type:'select',options:RF_OPTIONS},{label:'Bail Out Pressure (Bar)',key:'bailout',type:'text'}],
[{label:'Left Surface',key:'leftSurface',type:'time'},{label:'Depth (m)',key:'depth',type:'text'},{label:'NDL',key:'ndl',type:'text'},{label:'Left Bottom',key:'leftBottom',type:'time'},{label:'Arrived Surface',key:'arrivedSurface',type:'time'}],
[{label:'Total Dive Time',key:'totalTime',type:'text'},{label:'Total Bottom Time',key:'bottomTime',type:'text'},{label:'RG',key:'rg',type:'select',options:RG_OPTIONS}]
];
var tracked=['diverName','leftSurface','depth','leftBottom','arrivedSurface'];

function reindexDiveSubs(diverIdx){var entry=document.querySelectorAll('.dive-entry')[diverIdx];if(!entry)return;var subs=entry.querySelectorAll('.dive-sub');subs.forEach(function(sub,si){sub.setAttribute('data-sub-dive',si);sub.querySelectorAll('[data-sub-dive]').forEach(function(inp){inp.setAttribute('data-sub-dive',si);});var lbl=sub.querySelector('span');if(si===0){var header=sub.querySelector('div[style*="border-top"]');if(header)header.remove();}else if(lbl)lbl.textContent='Dive '+(si+1);});}
function createDiveSubEntry(diverIdx,subIdx,container){var wrap=document.createElement('div');wrap.className='dive-sub';wrap.setAttribute('data-dive-index',diverIdx);wrap.setAttribute('data-sub-dive',subIdx);if(subIdx>0){var subHeader=document.createElement('div');subHeader.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:8px 0 4px;border-top:1px dashed var(--light-gray);margin-top:8px';var subLabel=document.createElement('span');subLabel.style.cssText='font:700 12px/1 SF Mono,Consolas,monospace;color:var(--mid-gray)';subLabel.textContent='Dive '+(subIdx+1);subHeader.appendChild(subLabel);var rmBtn=document.createElement('button');rmBtn.className='sig-clear remove-dive-btn';rmBtn.textContent='Remove';rmBtn.style.cssText='background:none;border:1px solid var(--danger);border-radius:4px;padding:3px 8px;font-size:10px;color:var(--danger);font-weight:600;cursor:pointer';(function(w,di){rmBtn.onclick=function(){w.remove();reindexDiveSubs(di);syncDivesToActivity();scheduleSave();};})(wrap,diverIdx);subHeader.appendChild(rmBtn);wrap.appendChild(subHeader);}diveFields.forEach(function(row){var fr=document.createElement('div');fr.className='form-row';row.forEach(function(f){var field=document.createElement('div');field.className='field';var lbl=document.createElement('label');lbl.className='field-label';lbl.textContent=f.label;var inp;if(f.type==='select'){inp=document.createElement('select');inp.innerHTML=f.options;}else if(f.type==='datalist'){inp=document.createElement('input');inp.setAttribute('list',f.listId);}else{inp=document.createElement('input');inp.type=f.type;}inp.setAttribute('data-dive-field',f.key);inp.setAttribute('data-dive-index',diverIdx);inp.setAttribute('data-sub-dive',subIdx);if(tracked.indexOf(f.key)>=0)inp.addEventListener('input',syncDivesToActivity);if(f.type==='select')inp.addEventListener('change',syncDivesToActivity);if(f.key==='totalTime'||f.key==='bottomTime')inp.addEventListener('input',function(){this.dataset.userEdited='true';});field.appendChild(lbl);field.appendChild(inp);fr.appendChild(field);});wrap.appendChild(fr);});container.insertBefore(wrap,container.querySelector('.add-dive-btn'));return wrap;}
function addDiveToEntry(diverIdx){var entry=document.querySelectorAll('.dive-entry')[diverIdx];if(!entry)return;var subContainer=entry.querySelector('.dive-subs');var existing=subContainer.querySelectorAll('.dive-sub').length;createDiveSubEntry(diverIdx,existing,subContainer);syncDivesToActivity();scheduleSave();}
for(var i=0;i<8;i++){
var entry=document.createElement('div');entry.className='dive-entry'+(i<2?' open':'');entry.setAttribute('data-diver-color',i);
var summary=document.createElement('div');summary.className='dive-summary';summary.textContent='Diver '+(i+1);
(function(ent){summary.onclick=function(){ent.classList.toggle('open');};})(entry);
var body=document.createElement('div');body.className='dive-body';
var nameRow=document.createElement('div');nameRow.className='form-row';
var nameField=document.createElement('div');nameField.className='field';
var nameLbl=document.createElement('label');nameLbl.className='field-label';nameLbl.textContent='Diver Name';
var nameInp=document.createElement('input');nameInp.setAttribute('data-dive-field','diverName');nameInp.setAttribute('data-dive-index',i);nameInp.setAttribute('list','diveNameList');nameInp.addEventListener('input',syncDivesToActivity);
nameField.appendChild(nameLbl);nameField.appendChild(nameInp);nameRow.appendChild(nameField);body.appendChild(nameRow);
var subContainer=document.createElement('div');subContainer.className='dive-subs';
var addBtn=document.createElement('button');addBtn.className='add-dive-btn';addBtn.style.cssText='margin-top:8px;padding:5px 12px;border:1.5px dashed var(--mid-gray);border-radius:6px;background:none;color:var(--mid-gray);font-size:11px;font-weight:700;cursor:pointer';addBtn.textContent='+ Add Dive';(function(idx){addBtn.onclick=function(){addDiveToEntry(idx);};})(i);
subContainer.appendChild(addBtn);body.appendChild(subContainer);
createDiveSubEntry(i,0,subContainer);
entry.appendChild(summary);entry.appendChild(body);dc.appendChild(entry);}
makeHazardRows('tb_hazards',8);
var clItems=['SWMS completed and signed on','Site Specific SWMS completed','Hot Work Permit Required? (Grinding, Cutting, Welding)','Hoist Flag Alpha and maintain watch','Emergency Drill Conducted for this project?','Local Port Authority Notified','VHF Radio Communication Established with Port Control','Permit to Work Open and Signed','Permit to Dive & Isolations Signed','CONSIDERED SAFE TO PROCEED'];
var clc=document.getElementById('tb_checklist');
clItems.forEach(function(item){var div=document.createElement('div');div.className='checklist-item';var span=document.createElement('span');span.className='cl-label';if(item==='CONSIDERED SAFE TO PROCEED')span.classList.add('bold');span.textContent=item;var sel=document.createElement('select');sel.innerHTML='<option value="">—</option><option value="Yes">Yes</option><option value="No">No</option><option value="N/A">N/A</option>';sel.addEventListener('change',function(){this.className=this.value==='Yes'?'cl-yes':this.value==='No'?'cl-no':this.value==='N/A'?'cl-na':'';});div.appendChild(span);div.appendChild(sel);clc.appendChild(div);});
var edSteps=document.getElementById('ed_steps');for(var j=0;j<15;j++){var tr=document.createElement('tr');var td1=document.createElement('td');var inp1=document.createElement('input');inp1.type='time';inp1.addEventListener('input',syncDrillToActivity);td1.appendChild(inp1);var td2=document.createElement('td');var inp2=document.createElement('input');inp2.addEventListener('input',syncDrillToActivity);td2.appendChild(inp2);tr.appendChild(td1);tr.appendChild(td2);edSteps.appendChild(tr);}
makeRows('ed_actions',5,[{},{},{type:'date'}]);
['tb_supSig','tb_diverSig'].forEach(function(id){initSigCanvas(id);});
renderTeamInputs();refreshAllSignSections();
if(window.innerWidth<768)document.getElementById('sidebar').classList.add('closed');
}
init();setTimeout(loadState,200);


var permitCount=0;var permitsProcessing=false;
function handlePermitsUpload(input){if(permitsProcessing)return;var files=input.files;if(!files.length)return;permitsProcessing=true;document.getElementById('permitsUploadZone').classList.add('has-file');document.getElementById('permitsRemoveBtn').style.display='inline-block';var loadFile=function(idx){if(idx>=files.length){updatePermitsStatus();permitsProcessing=false;return;}var file=files[idx];var isPDF=file.type==='application/pdf'||file.name.toLowerCase().endsWith('.pdf');var isImage=/^image\//.test(file.type)||/\.(jpe?g|png|gif|tiff?|heic|heif)$/i.test(file.name);if(isPDF){if(!window.pdfjsLib||!window._pdfjsReady){setTimeout(function(){permitsProcessing=false;handlePermitsUpload(input);},500);return;}var reader=new FileReader();reader.onload=function(e){var data=new Uint8Array(e.target.result);pdfjsLib.getDocument({data:data}).promise.then(function(pdf){permitCount++;renderPermitDoc(pdf,file.name,function(){loadFile(idx+1);});}).catch(function(err){console.error('Permit PDF error:',err);loadFile(idx+1);});};reader.readAsArrayBuffer(file);}else if(isImage){permitCount++;renderPermitImage(file,function(){loadFile(idx+1);});}else{loadFile(idx+1);}};loadFile(0);setTimeout(function(){permitsProcessing=false;input.value='';},500);}
function renderPermitDoc(pdf,fileName,cb){var sc=document.getElementById('permitsScreenPages');var wrapper=document.createElement('div');wrapper.className='permit-wrapper';wrapper.style.cssText='border:1px solid var(--light-gray);border-radius:8px;margin-bottom:12px;overflow:hidden';var header=document.createElement('div');header.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg);border-bottom:1px solid var(--light-gray)';header.innerHTML='<span style="font-weight:600;font-size:13px">\u{1F4C4} '+fileName.replace(/</g,'&lt;')+'</span>';var removeBtn=document.createElement('button');removeBtn.textContent='Remove';removeBtn.style.cssText='background:none;border:1px solid var(--danger);border-radius:4px;padding:4px 10px;font-size:11px;color:var(--danger);font-weight:600;cursor:pointer';removeBtn.className='sig-clear';removeBtn.addEventListener('click',function(){wrapper.remove();permitCount--;updatePermitsStatus();});header.appendChild(removeBtn);wrapper.appendChild(header);var pagesDiv=document.createElement('div');pagesDiv.style.cssText='text-align:center;padding:8px';wrapper.appendChild(pagesDiv);sc.appendChild(wrapper);var renderPage=function(i){if(i>pdf.numPages){if(cb)cb();return;}pdf.getPage(i).then(function(page){var sv=page.getViewport({scale:2});var scv=document.createElement('canvas');scv.width=sv.width;scv.height=sv.height;scv.style.cssText='max-width:100%;border:1px solid var(--light-gray);border-radius:4px;margin-bottom:8px';page.render({canvasContext:scv.getContext('2d'),viewport:sv}).promise.then(function(){pagesDiv.appendChild(scv);renderPage(i+1);});});};renderPage(1);}

function renderPermitImage(file,cb){var sc=document.getElementById('permitsScreenPages');var wrapper=document.createElement('div');wrapper.className='permit-wrapper';wrapper.style.cssText='border:1px solid var(--light-gray);border-radius:8px;margin-bottom:12px;overflow:hidden';var header=document.createElement('div');header.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg);border-bottom:1px solid var(--light-gray)';header.innerHTML='<span style="font-weight:600;font-size:13px">\u{1F5BC} '+file.name.replace(/</g,'&lt;')+'</span>';var removeBtn=document.createElement('button');removeBtn.textContent='Remove';removeBtn.style.cssText='background:none;border:1px solid var(--danger);border-radius:4px;padding:4px 10px;font-size:11px;color:var(--danger);font-weight:600;cursor:pointer';removeBtn.className='sig-clear';removeBtn.addEventListener('click',function(){wrapper.remove();permitCount--;updatePermitsStatus();});header.appendChild(removeBtn);wrapper.appendChild(header);var imgDiv=document.createElement('div');imgDiv.style.cssText='text-align:center;padding:8px';var img=document.createElement('img');img.style.cssText='max-width:100%;border:1px solid var(--light-gray);border-radius:4px';var reader=new FileReader();reader.onload=function(e){img.src=e.target.result;imgDiv.appendChild(img);wrapper.appendChild(imgDiv);sc.appendChild(wrapper);if(cb)cb();};reader.readAsDataURL(file);}
function updatePermitsStatus(){var sc=document.getElementById('permitsScreenPages');var wrappers=sc.querySelectorAll('.permit-wrapper');if(wrappers.length===0){document.getElementById('permitsUploadZone').classList.remove('has-file');document.getElementById('permitsFileName').textContent='Click to upload Permits';document.getElementById('permitsRemoveBtn').style.display='none';}else{document.getElementById('permitsFileName').textContent='\u2713 '+wrappers.length+' permit(s) uploaded';}}
function removePermits(){permitCount=0;document.getElementById('permitsScreenPages').innerHTML='';updatePermitsStatus();document.getElementById('permitsFileInput').value='';}


/* ═══════════ AUTO-SAVE / RESTORE ═══════════ */
var SAVE_KEY='franmarine_ws_'+window.location.pathname.split('/').pop().replace(/[^a-zA-Z0-9]/g,'_');
var saveTimer=null;

function saveState(){
  try{
    var state={};
    // Save all input/textarea values by form page
    document.querySelectorAll('.form-page').forEach(function(page){
      var id=page.id;
      var vals=[];
      page.querySelectorAll('input:not([type=file]),textarea,select').forEach(function(el){
        vals.push(el.value||'');
      });
      state[id]=vals;
    });
    // Save team members
    state._team=teamMembers.slice();
    state._isDivingMode=isDivingMode;
    // Save auto row edits
    state._autoEdits=JSON.parse(JSON.stringify(autoRowEdits));
    // Save signatures (static ones + dynamic ones by container)
    var sigs={};
    ['tb_supSig','tb_diverSig'].forEach(function(id){
      var c=document.getElementById(id);
      if(c&&!isSigEmpty(c))sigs[id]=c.toDataURL();
    });
    ['dl_fitToDive','tb_signOn','swms_signOff','ed_attendees_list'].forEach(function(cid){
      var canvases=document.querySelectorAll('#'+cid+' canvas');
      var arr=[];
      canvases.forEach(function(c){arr.push(isSigEmpty(c)?'':c.toDataURL());});
      if(arr.some(function(a){return a;}))sigs[cid]=arr;
    });
    state._sigs=sigs;
    localStorage.setItem(SAVE_KEY,JSON.stringify(state));var si=document.getElementById('saveIndicator');if(si){si.style.opacity='1';setTimeout(function(){si.style.opacity='0';},1200);}
  }catch(e){console.warn('Save failed:',e);}
}

function loadState(){
  try{
    var raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return;
    var state=JSON.parse(raw);
    // Restore team members first (creates sig canvases)
    if(typeof state._isDivingMode!=='undefined'){isDivingMode=state._isDivingMode;applyDivingMode();}
    if(state._team&&state._team.length){
      teamMembers=state._team;
      renderTeamInputs();
      refreshAllSignSections();
    }
    // Restore auto row edits
    if(state._autoEdits){
      Object.keys(state._autoEdits).forEach(function(k){autoRowEdits[k]=state._autoEdits[k];});
    }
    // Restore input values
    document.querySelectorAll('.form-page').forEach(function(page){
      var id=page.id;
      var vals=state[id];
      if(!vals)return;
      var els=page.querySelectorAll('input:not([type=file]),textarea,select');
      els.forEach(function(el,i){
        if(i<vals.length&&vals[i]){
          el.value=vals[i];
          // Apply checklist styling
          if(el.tagName==='SELECT'){
            el.className=el.value==='Yes'?'cl-yes':el.value==='No'?'cl-no':el.value==='N/A'?'cl-na':'';
          }
        }
      });
    });
    // Sync project fields
    var firstProj=document.querySelector('[data-proj="project"]');
    if(firstProj&&firstProj.value){
      ['project','date','jobNo','location','vessel','client','supervisor'].forEach(function(k){
        var first=document.querySelector('[data-proj="'+k+'"]');
        if(first)syncProj(first);
      });
    }
    // Restore signatures
    var sigs=state._sigs||{};
    ['tb_supSig','tb_diverSig'].forEach(function(id){
      if(sigs[id]){
        var c=document.getElementById(id);
        if(c){var img=new Image();img.onload=function(){c.getContext('2d').drawImage(img,0,0);};img.src=sigs[id];}
      }
    });
    ['dl_fitToDive','tb_signOn','swms_signOff','ed_attendees_list'].forEach(function(cid){
      if(sigs[cid]){
        var canvases=document.querySelectorAll('#'+cid+' canvas');
        sigs[cid].forEach(function(dataUrl,i){
          if(dataUrl&&i<canvases.length){
            var c=canvases[i];
            var img=new Image();
            img.onload=function(){c.getContext('2d').drawImage(img,0,0);};
            img.src=dataUrl;
          }
        });
      }
    });
    // Re-apply region (drives chamber + hat inventory cascade)
    var regionInp=document.querySelector('[data-proj="region"]');
    var savedRegion=regionInp?regionInp.value:'';
    if(savedRegion){
      var savedModels=[document.getElementById('hatModel1').value,document.getElementById('hatModel2').value];
      var savedSerials=[document.getElementById('hatSerial1').value,document.getElementById('hatSerial2').value];
      var savedChamber=document.getElementById('chamberInput').value;
      var savedPhone=document.getElementById('chamberPhoneInput').value;
      setRegion(savedRegion);
      // setRegion overwrites chamber/phone with defaults — restore user's saved values if they differ
      if(savedChamber)document.getElementById('chamberInput').value=savedChamber;
      if(savedPhone)document.getElementById('chamberPhoneInput').value=savedPhone;
      [1,2].forEach(function(n){
        var ms=document.getElementById('hatModel'+n);
        if(savedModels[n-1]){ms.value=savedModels[n-1];updateHatSerialOptions(n);document.getElementById('hatSerial'+n).value=savedSerials[n-1]||'';}
      });
    }
    // Re-trigger dive sync to rebuild auto rows
    syncDivesToActivity();
    syncDrillToActivity();
    setTimeout(sortActivityLog,100);
  }catch(e){console.warn('Load failed:',e);}
}

function scheduleSave(){
  if(saveTimer)clearTimeout(saveTimer);
  saveTimer=setTimeout(saveState,1000);
}

// Listen for any input change to auto-save
document.addEventListener('input',scheduleSave);
document.addEventListener('change',scheduleSave);
// Also save on signature drawing
document.addEventListener('pointerup',function(){setTimeout(scheduleSave,100);});
document.addEventListener('touchend',function(){setTimeout(scheduleSave,100);});

/* ═══════════ SAVE / LOAD JSON FILE ═══════════ */
function buildStateObject(){
  var state={};
  document.querySelectorAll('.form-page').forEach(function(page){
    var id=page.id;
    var vals=[];
    page.querySelectorAll('input:not([type=file]),textarea,select').forEach(function(el){
      vals.push(el.value||'');
    });
    state[id]=vals;
  });
  state._team=teamMembers.slice();
  state._isDivingMode=isDivingMode;
  state._autoEdits=JSON.parse(JSON.stringify(autoRowEdits));
  var sigs={};
  ['tb_supSig','tb_diverSig'].forEach(function(id){
    var c=document.getElementById(id);
    if(c&&!isSigEmpty(c))sigs[id]=c.toDataURL();
  });
  ['dl_fitToDive','tb_signOn','swms_signOff','ed_attendees_list'].forEach(function(cid){
    var canvases=document.querySelectorAll('#'+cid+' canvas');
    var arr=[];
    canvases.forEach(function(c){arr.push(isSigEmpty(c)?'':c.toDataURL());});
    if(arr.some(function(a){return a;}))sigs[cid]=arr;
  });
  state._sigs=sigs;
  return state;
}

function saveToFile(){
  try{
    var state=buildStateObject();
    var json=JSON.stringify(state,null,2);
    var blob=new Blob([json],{type:'application/json'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');
    var jobNo='';var dateVal='';
    document.querySelectorAll('[data-proj="jobNo"]').forEach(function(el){if(el.value)jobNo=el.value;});
    document.querySelectorAll('[data-proj="date"]').forEach(function(el){if(el.value)dateVal=el.value;});
    var fname='Franmarine_Worksheet';
    if(jobNo)fname=jobNo+'_Worksheet';
    if(dateVal)fname+='_'+dateVal;
    a.href=url;a.download=fname+'.json';a.click();
    URL.revokeObjectURL(url);
    var si=document.getElementById('saveIndicator');
    if(si){si.textContent='Saved to File';si.style.opacity='1';setTimeout(function(){si.style.opacity='0';si.textContent='Saved';},1800);}
  }catch(e){alert('Save to file failed: '+e.message);}
}

function loadFromFile(input){
  var file=input.files[0];
  if(!file)return;
  if(!confirm('Load data from "'+file.name+'"? This will replace all current data.'))return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var state=JSON.parse(e.target.result);
      applyState(state);
      // Also push to localStorage so auto-save picks it up
      localStorage.setItem(SAVE_KEY,JSON.stringify(state));
      var si=document.getElementById('saveIndicator');
      if(si){si.textContent='Loaded from File';si.style.opacity='1';setTimeout(function(){si.style.opacity='0';si.textContent='Saved';},1800);}
    }catch(ex){alert('Failed to load file: '+ex.message);}
  };
  reader.readAsText(file);
  input.value='';
}

function applyState(state){
  try{
    if(typeof state._isDivingMode!=='undefined'){isDivingMode=state._isDivingMode;applyDivingMode();}
    if(state._team&&state._team.length){
      teamMembers=state._team;
      renderTeamInputs();
      refreshAllSignSections();
    }
    if(state._autoEdits){
      Object.keys(state._autoEdits).forEach(function(k){autoRowEdits[k]=state._autoEdits[k];});
    }
    document.querySelectorAll('.form-page').forEach(function(page){
      var id=page.id;
      var vals=state[id];
      if(!vals)return;
      var els=page.querySelectorAll('input:not([type=file]),textarea,select');
      els.forEach(function(el,i){
        if(i<vals.length){
          el.value=vals[i]||'';
          if(el.tagName==='SELECT'){
            el.className=el.value==='Yes'?'cl-yes':el.value==='No'?'cl-no':el.value==='N/A'?'cl-na':'';
          }
        }
      });
    });
    var firstProj=document.querySelector('[data-proj="project"]');
    if(firstProj&&firstProj.value){
      ['project','date','jobNo','location','vessel','client','supervisor'].forEach(function(k){
        var first=document.querySelector('[data-proj="'+k+'"]');
        if(first)syncProj(first);
      });
    }
    var sigs=state._sigs||{};
    ['tb_supSig','tb_diverSig'].forEach(function(id){
      if(sigs[id]){
        var c=document.getElementById(id);
        if(c){var img=new Image();img.onload=function(){c.getContext('2d').drawImage(img,0,0);};img.src=sigs[id];}
      }
    });
    ['dl_fitToDive','tb_signOn','swms_signOff','ed_attendees_list'].forEach(function(cid){
      if(sigs[cid]){
        var canvases=document.querySelectorAll('#'+cid+' canvas');
        sigs[cid].forEach(function(dataUrl,i){
          if(dataUrl&&i<canvases.length){
            var c=canvases[i];
            var img=new Image();
            img.onload=function(){c.getContext('2d').drawImage(img,0,0);};
            img.src=dataUrl;
          }
        });
      }
    });
    var regionInp=document.querySelector('[data-proj="region"]');
    var savedRegion=regionInp?regionInp.value:'';
    if(savedRegion){
      var savedModels=[document.getElementById('hatModel1').value,document.getElementById('hatModel2').value];
      var savedSerials=[document.getElementById('hatSerial1').value,document.getElementById('hatSerial2').value];
      var savedChamber=document.getElementById('chamberInput').value;
      var savedPhone=document.getElementById('chamberPhoneInput').value;
      setRegion(savedRegion);
      if(savedChamber)document.getElementById('chamberInput').value=savedChamber;
      if(savedPhone)document.getElementById('chamberPhoneInput').value=savedPhone;
      [1,2].forEach(function(n){
        var ms=document.getElementById('hatModel'+n);
        if(savedModels[n-1]){ms.value=savedModels[n-1];updateHatSerialOptions(n);document.getElementById('hatSerial'+n).value=savedSerials[n-1]||'';}
      });
    }
    syncDivesToActivity();
    syncDrillToActivity();
    setTimeout(sortActivityLog,100);
  }catch(e){console.warn('Apply state failed:',e);}
}



var hotkeyBubbleShown=false;
function showHotkeyBubble(){if(hotkeyBubbleShown)return;try{if(localStorage.getItem('franmarine_hotkey_seen'))return;}catch(e){}hotkeyBubbleShown=true;var log=document.getElementById('floatLog');var bubble=document.createElement('div');bubble.className='hotkey-bubble';bubble.innerHTML='<strong>\u{1F4A1} Quick Tip</strong><br>Type <kbd>D1</kbd> to <kbd>D8</kbd> at the start to auto-tag a diver by name and colour.<br>e.g. <kbd>D1</kbd> commenced cleaning<br><button class="dismiss" onclick="dismissHotkeyBubble(this)">Got it</button>';log.appendChild(bubble);}
function dismissHotkeyBubble(btn){btn.parentElement.remove();try{localStorage.setItem('franmarine_hotkey_seen','1');}catch(e){}}
function toggleFloatLog(){var log=document.getElementById('floatLog');var btn=document.getElementById('floatLogBtn');var panel=document.getElementById('floatLogPanel');if(panel.classList.contains('open')){panel.classList.remove('open');log.classList.remove('expanded');btn.classList.remove('active');btn.innerHTML='\u{1F4CB}';}else{panel.classList.add('open');log.classList.add('expanded');btn.classList.add('active');btn.innerHTML='<span style="font-weight:700">\u{1F4CB} Log Activity</span><span style="font-size:18px;cursor:pointer" onclick="event.stopPropagation();toggleFloatLog()">\u2715</span>';document.getElementById('floatLogDesc').focus();showHotkeyBubble();}}
var _diverColors=['#2e8bc0','#e67e22','#27ae60','#8e44ad','#c0392b','#16a085','#d4a843','#2c3e50'];
function getDiverLabel(idx){var entry=document.querySelectorAll('.dive-entry')[idx];if(!entry)return null;var nameInp=entry.querySelector('[data-dive-field="diverName"]');var name=nameInp?nameInp.value.trim():'';return{name:name||'Diver '+(idx+1),color:_diverColors[idx]||'#0a1628'};}
function addFloatLog(){var timeInp=document.getElementById('floatLogTime');var descInp=document.getElementById('floatLogDesc');var desc=descInp.value.trim();if(!desc)return;var time=timeInp.value;if(!time){var now=new Date();time=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');}var diverMatch=desc.match(/^[Dd]([1-8])\b\s*/);var diverColor=null;var diverTagText=null;if(diverMatch){var diverIdx=parseInt(diverMatch[1])-1;var info=getDiverLabel(diverIdx);if(info){var rest=desc.substring(diverMatch[0].length);var diverTag='Diver '+(diverIdx+1)+(info.name!=='Diver '+(diverIdx+1)?' \u2014 '+info.name:'');desc=rest;diverColor=info.color;diverTagText=diverTag;}}var tbody=document.getElementById('da_activities');var tr=document.createElement('tr');var td1=document.createElement('td');var inp1=document.createElement('input');inp1.type='time';inp1.value=time;td1.appendChild(inp1);var td2=document.createElement('td');if(diverTagText){var tag=document.createElement('span');tag.className='diver-tag';tag.style.cssText='color:'+diverColor+';font-weight:700;font-size:12px;margin-right:4px;white-space:nowrap';tag.textContent=diverTagText;td2.appendChild(tag);var inp2=document.createElement('input');inp2.value=desc;inp2.style.cssText='display:inline;width:auto;flex:1';td2.style.cssText='display:flex;align-items:center;gap:2px';td2.appendChild(inp2);}else{var inp2=document.createElement('input');inp2.value=desc;td2.appendChild(inp2);}tr.appendChild(td1);tr.appendChild(td2);tbody.appendChild(tr);setTimeout(sortActivityLog,0);var confirm=document.getElementById('floatLogConfirm');confirm.textContent='\u2713 Added at '+time;confirm.style.display='block';setTimeout(function(){confirm.style.display='none';},2000);descInp.value='';timeInp.value='';scheduleSave();}
document.addEventListener('keydown',function(e){if(e.target.id==='floatLogDesc'&&e.key==='Enter'){e.preventDefault();addFloatLog();}});
