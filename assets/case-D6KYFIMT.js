import{d as e,g as t,h as n,m as r,p as i}from"./index-DVgVJK2l.js";import{t as a}from"./icons-CSpvKijl.js";var o=`${`/`.replace(/\/+$/,``)}/audio/case`,s={tick:{file:`tick.mp3`,volume:.4,maxConcurrent:8},open:{file:`open.mp3`,volume:.6,maxConcurrent:2},click:{file:`click.mp3`,volume:.4,maxConcurrent:3},hover:{file:`hover.mp3`,volume:.25,maxConcurrent:4},inspect:{file:`inspect.mp3`,volume:.5,maxConcurrent:1},revealBlue:{file:`reveal_blue.mp3`,volume:.55,maxConcurrent:1},revealPurple:{file:`reveal_purple.mp3`,volume:.6,maxConcurrent:1},revealPink:{file:`reveal_pink.mp3`,volume:.65,maxConcurrent:1},revealRed:{file:`reveal_red.mp3`,volume:.7,maxConcurrent:1},revealGold:{file:`reveal_gold.mp3`,volume:.85,maxConcurrent:1}},c=new class{constructor(){if(this.ctx=null,this.isMuted=localStorage.getItem(`cs2_case_sound_muted`)===`true`,this._buffers=new Map,this._activeSources=new Map,this._loadingPromise=null,this._loaded=!1,typeof window<`u`){let e=()=>{this._initCtx(),this.preload(),window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,e)};window.addEventListener(`pointerdown`,e,{once:!0}),window.addEventListener(`keydown`,e,{once:!0})}}_initCtx(){if(!this.ctx&&typeof window<`u`){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}async preload(){if(this._loaded||this._loadingPromise)return this._loadingPromise;if(this._initCtx(),this.ctx)return this._loadingPromise=Promise.allSettled(Object.entries(s).map(async([e,t])=>{try{let n=`${o}/${t.file}`,r=await fetch(n);if(!r.ok)throw Error(`HTTP ${r.status}`);let i=await r.arrayBuffer(),a=await this.ctx.decodeAudioData(i);this._buffers.set(e,a)}catch(t){console.warn(`[CS2Audio] Failed to load "${e}":`,t.message)}})).then(()=>{this._loaded=!0,console.log(`[CS2Audio] Loaded ${this._buffers.size}/${Object.keys(s).length} game sounds`)}),this._loadingPromise}_playBuffer(e,t={}){if(this.isMuted||(this._initCtx(),!this.ctx))return;this._loaded||this.preload();let n=this._buffers.get(e);if(!n)return;let r=s[e];if(!r)return;let i=this._activeSources.get(e)||[];if(i.length>=(r.maxConcurrent||3)){let e=i.shift();try{e.stop()}catch{}}try{let a=this.ctx.createBufferSource(),o=this.ctx.createGain();a.buffer=n,a.playbackRate.value=t.playbackRate||1,t.detune!==void 0&&(a.detune.value=t.detune),o.gain.value=t.volume??r.volume??.5,a.connect(o),o.connect(this.ctx.destination),a.onended=()=>{let t=this._activeSources.get(e);if(t){let e=t.indexOf(a);e!==-1&&t.splice(e,1)}},i.push(a),this._activeSources.set(e,i),a.start(0)}catch(t){console.warn(`[CS2Audio] Error playing "${e}":`,t)}}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem(`cs2_case_sound_muted`,this.isMuted?`true`:`false`),this.isMuted}playTick(e=1){let t=.9+Math.min(Math.max(e,.1),1)*.35;this._playBuffer(`tick`,{playbackRate:t,volume:.25+e*.15})}playOpen(){this._playBuffer(`open`)}playWhoosh(){this.playOpen()}playClick(){this._playBuffer(`click`)}playHover(){this._playBuffer(`hover`)}playInspect(){this._playBuffer(`inspect`)}playSuspense(){this._playBuffer(`tick`,{playbackRate:1.35,volume:.45})}playWinSound(e){let t={MIL_SPEC:`revealBlue`,RESTRICTED:`revealPurple`,CLASSIFIED:`revealPink`,COVERT:`revealRed`,SPECIAL:`revealGold`}[e]||`revealBlue`;this._playBuffer(t)}},l={MIL_SPEC:{id:`milspec`,name:`Mil-Spec Grade`,viName:`Mil-Spec (Xanh)`,color:`#4b69ff`,dropRate:79.92},RESTRICTED:{id:`restricted`,name:`Restricted`,viName:`Restricted (Tím)`,color:`#8847ff`,dropRate:15.98},CLASSIFIED:{id:`classified`,name:`Classified`,viName:`Classified (Hồng)`,color:`#d32ce6`,dropRate:3.2},COVERT:{id:`covert`,name:`Covert`,viName:`Covert (Đỏ)`,color:`#eb4b4b`,dropRate:.64},SPECIAL:{id:`special`,name:`Special Rare Item`,viName:`★ Dao / Găng Vàng`,color:`#ffd700`,dropRate:.26}},u=[{name:`Factory New`,short:`FN`,viName:`Mới Xuất Xưởng`,min:0,max:.07},{name:`Minimal Wear`,short:`MW`,viName:`Ít Trầy Xước`,min:.07,max:.15},{name:`Field-Tested`,short:`FT`,viName:`Đã Qua Thực Chiến`,min:.15,max:.38},{name:`Well-Worn`,short:`WW`,viName:`Khá Cũ`,min:.38,max:.45},{name:`Battle-Scarred`,short:`BS`,viName:`Chiến Tích Vết Sẹo`,min:.45,max:1}],d=[`https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/crates.json`,`https://cdn.jsdelivr.net/gh/ByMykel/CSGO-API@main/public/api/en/crates.json`],f=`cs2_crates_api_v3`;function p(e){if(!e)return`MIL_SPEC`;let t=e.toLowerCase();return t.includes(`covert`)||t.includes(`ancient`)?`COVERT`:t.includes(`classified`)||t.includes(`legendary`)?`CLASSIFIED`:t.includes(`restricted`)||t.includes(`mythical`)?`RESTRICTED`:`MIL_SPEC`}function m(e,t){let n=(t||``).toLowerCase();return e===`SPECIAL`?n.includes(`fade`)||n.includes(`doppler`)||n.includes(`slaughter`)||n.includes(`crimson`)?950:n.includes(`lore`)||n.includes(`marble`)||n.includes(`tiger`)||n.includes(`emerald`)?800:n.includes(`case hardened`)||n.includes(`vanilla`)?600:n.includes(`safari`)||n.includes(`scorched`)||n.includes(`boreal`)?250:480:e===`COVERT`?n.includes(`fire serpent`)||n.includes(`howl`)||n.includes(`printstream`)||n.includes(`asiimov`)||n.includes(`vulcan`)||n.includes(`hyper beast`)?240:115:e===`CLASSIFIED`?35:e===`RESTRICTED`?7.5:1.25}function h(e){let t=e.name.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``),n=t.replace(/-case$/,``),r=e.first_sale_date?e.first_sale_date.substring(0,4):`CS:GO`,i=(e.contains||[]).map(e=>{let t=(e.name||``).split(` | `),n=t[0],r=t[1]||t[0],i=p(e.rarity?e.rarity.name:``),a=l[i]||l.MIL_SPEC;return{id:e.id||`item_${Math.random().toString(36).substring(2,8)}`,weapon:n,name:r,rarity:i,rarityName:a.name,rarityColor:a.color,image:e.image,basePrice:m(i,r)}}),a=(e.contains_rare||[]).map(e=>{let t=(e.name||``).split(` | `),n=t[0],r=t[1]||`Vanilla`;return{id:e.id||`rare_${Math.random().toString(36).substring(2,8)}`,weapon:n,name:r,rarity:`SPECIAL`,rarityName:l.SPECIAL.name,rarityColor:l.SPECIAL.color,image:e.image,basePrice:m(`SPECIAL`,r)}}),o=`★ Rare Special Item ★`;return{id:n,aliases:[n,t,n.replace(/-/g,`_`),t.replace(/-/g,`_`),e.id],apiId:e.id,name:e.name,viName:e.name,releaseYear:r>=`2023`?`${r} (CS2)`:`${r} (CS:GO)`,image:e.image,description:`Hòm chính thức chứa toàn bộ ${i.length} skin vũ khí và cơ hội mở ra Dao / Găng tay hiếm (${o}).`,enDescription:`Official case containing all ${i.length} weapon skins and a chance to unbox a ${o}.`,specialName:o,items:i,specialRares:a}}var g=[],_=null;async function v(){return g.length>0?g:_||(_=(async()=>{try{if(typeof window<`u`&&window.sessionStorage){let e=sessionStorage.getItem(f);if(e){let t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return g.length=0,g.push(...t),g}}}catch{}let e=null;for(let t of d)try{let n=await fetch(t);if(n.ok){e=await n.json();break}}catch(e){console.warn(`[CS2CaseAPI] Failed fetching from ${t}:`,e.message)}if(!e||!Array.isArray(e))return console.error(`[CS2CaseAPI] Could not fetch crates from any endpoint!`),g;let t=e.filter(e=>e.type===`Case`&&e.contains&&e.contains.length>0);t.sort((e,t)=>{let n=e.first_sale_date||`2000-01-01`;return(t.first_sale_date||`2000-01-01`).localeCompare(n)});let n=t.map(h);g.length=0,g.push(...n);try{typeof window<`u`&&window.sessionStorage&&sessionStorage.setItem(f,JSON.stringify(n))}catch(e){console.warn(`[CS2CaseAPI] sessionStorage write error:`,e.message)}return g})(),_)}async function y(e){let t=await v();if(!e||t.length===0)return t[0]||null;let n=e.toLowerCase().trim(),r=n.replace(/[-_]/g,``);return t.find(e=>!!(e.id===n||e.aliases&&e.aliases.includes(n)||e.id.replace(/[-_]/g,``)===r))||t.find(e=>e.name.toLowerCase().includes(n))||t[0]}typeof window<`u`&&v().catch(()=>{});async function b(e,n){let i=r();e.innerHTML=`
    <div class="case-catalog-hero">
      <h2>${t(`case.catalogTitle`)}</h2>
    </div>
    <div class="case-loading-skeleton">
      <div class="case-spinner"></div>
      <p style="color: #94a3b8; font-size: 0.95rem; margin-top: 14px;">Đang tải danh sách hòm từ Valve API...</p>
    </div>
  `;let a=await v();if(!e)return;function o(){e.innerHTML=`
      <div class="case-catalog-hero">
        <h2>${t(`case.catalogTitle`)}</h2>
      </div>

      <!-- Case Grid -->
      <div class="case-grid">
        ${a.map(e=>{let t=i===`vi`&&e.viName?e.viName:e.name;return`
            <div class="case-card" data-case-id="${e.id}">
              <div class="case-card-img-wrap">
                <img src="${e.image}" alt="${e.name}" class="case-card-img" loading="lazy" />
              </div>
              <h3 class="case-card-title">${t}</h3>
            </div>
          `}).join(``)}
      </div>
    `,s()}function s(){e.querySelectorAll(`.case-card`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{c.playHover()})}),e.querySelectorAll(`.case-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-case-id`);t&&(c.playClick(),n(t))})})}o()}var x=class{constructor(e={}){this.itemWidth=e.itemWidth||190,this.itemGap=e.itemGap||12,this.targetIndex=e.targetIndex||45,this.totalItems=e.totalItems||55,this.isFastOpen=!1,this.animFrameId=null}rollItem(e){let t=Math.random()*100,n=`MIL_SPEC`;n=t<l.SPECIAL.dropRate?`SPECIAL`:t<l.SPECIAL.dropRate+l.COVERT.dropRate?`COVERT`:t<l.SPECIAL.dropRate+l.COVERT.dropRate+l.CLASSIFIED.dropRate?`CLASSIFIED`:t<l.SPECIAL.dropRate+l.COVERT.dropRate+l.CLASSIFIED.dropRate+l.RESTRICTED.dropRate?`RESTRICTED`:`MIL_SPEC`;let r;if(n===`SPECIAL`){let t=e.specialRares&&e.specialRares.length>0?e.specialRares:[{name:`★ Special Item`,weapon:`★ Knife`,rarity:`SPECIAL`,basePrice:500,image:e.image}];r=t[Math.floor(Math.random()*t.length)]}else{let t=e.items.filter(e=>e.rarity===n);r=t.length>0?t[Math.floor(Math.random()*t.length)]:e.items[Math.floor(Math.random()*e.items.length)]}let i=Math.random()<.1,a=Math.random(),o=u.find(e=>a>=e.min&&a<e.max)||u[2],s=r.basePrice||10;i&&(s*=1.45),o.short===`FN`?s*=1.85:o.short===`MW`?s*=1.25:o.short===`WW`?s*=.85:o.short===`BS`&&(s*=.7),s=Math.round(s*100)/100;let c=l[n]||l.MIL_SPEC;return{instanceId:`item_${Date.now()}_${Math.random().toString(36).substring(2,7)}`,caseId:e.id,caseName:e.name,weapon:r.weapon,name:r.name,fullName:`${i?`StatTrak™ `:``}${r.weapon} | ${r.name}`,rarity:n,rarityName:c.name,rarityColor:c.color,isStatTrak:i,wear:o.name,wearShort:o.short,wearViName:o.viName,float:a.toFixed(6),price:s,image:r.image,timestamp:Date.now()}}generateReel(e,t){let n=[],r=e.items||[],i=e.specialRares||[],a=new Map;for(let e of r){let t=a.get(e.rarity);t?t.push(e):a.set(e.rarity,[e])}let o=a.get(`COVERT`)||[];for(let e=0;e<this.totalItems;e++)if(e===this.targetIndex)n.push(t);else if(e===this.targetIndex-1&&Math.random()<.35&&i.length>0){let e=i[Math.floor(Math.random()*i.length)];n.push({weapon:e.weapon,name:e.name,rarity:`SPECIAL`,rarityColor:l.SPECIAL.color,image:e.image,isStatTrak:!1})}else if(e===this.targetIndex+1&&Math.random()<.4){let e=o.length>0&&Math.random()<.6?o[Math.floor(Math.random()*o.length)]:r[Math.floor(Math.random()*r.length)];n.push({weapon:e.weapon,name:e.name,rarity:e.rarity,rarityColor:l[e.rarity]?.color||l.MIL_SPEC.color,image:e.image,isStatTrak:Math.random()<.1})}else{let e=Math.random()*100,t=`MIL_SPEC`;if(e<.4&&i.length>0?t=`SPECIAL`:e<3?t=`COVERT`:e<12?t=`CLASSIFIED`:e<35&&(t=`RESTRICTED`),t===`SPECIAL`&&i.length>0){let e=i[Math.floor(Math.random()*i.length)];n.push({weapon:e.weapon,name:e.name,rarity:`SPECIAL`,rarityColor:l.SPECIAL.color,image:e.image,isStatTrak:!1})}else{let e=a.get(t),i=e&&e.length>0?e[Math.floor(Math.random()*e.length)]:r[0];n.push({weapon:i.weapon,name:i.name,rarity:i.rarity,rarityColor:l[i.rarity]?.color||l.MIL_SPEC.color,image:i.image,isStatTrak:Math.random()<.1})}}return n}startSpin(e,t,n){this.animFrameId&&cancelAnimationFrame(this.animFrameId);let r=this.itemWidth+this.itemGap,i=t/2,a=(Math.random()-.5)*(this.itemWidth*.72),o=this.targetIndex*r+this.itemWidth/2-i+a;c.playOpen();let s=this.isFastOpen?650:5400,l=performance.now(),u=-1,d=!1,f=t=>{let a=t-l,p=Math.min(a/s,1),m=1-(1-p)**4.2,h=o*m;e.style.transform=`translate3d(-${h}px, 0, 0)`;let g=Math.floor((h+i)/r);if(g!==u&&g>=0&&g<this.totalItems){u=g;let e=1-p;c.playTick(e),p>.85&&!d&&Math.abs(g-this.targetIndex)<=1&&(c.playSuspense(),d=!0)}p<1?this.animFrameId=requestAnimationFrame(f):(this.animFrameId=null,typeof n==`function`&&n())};this.animFrameId=requestAnimationFrame(f)}cancel(){this.animFrameId&&=(cancelAnimationFrame(this.animFrameId),null)}},S=`cs2_case_inventory_v1`,C=`cs2_case_stats_v1`,w=new class{constructor(){this.listeners=new Set}getInventory(){try{let e=localStorage.getItem(S);return e?JSON.parse(e):[]}catch{return[]}}getStats(){try{let e=localStorage.getItem(C);return e?JSON.parse(e):{totalOpened:0,totalGolds:0,totalReds:0,totalPinks:0,totalPurples:0,totalBlues:0,totalEstimatedValue:0,bestDrop:null}}catch{return{totalOpened:0,totalGolds:0,totalReds:0,totalPinks:0,totalPurples:0,totalBlues:0,totalEstimatedValue:0,bestDrop:null}}}addItem(e){let t=this.getInventory(),n=this.getStats();t.unshift(e),n.totalOpened+=1,n.totalEstimatedValue=Math.round((n.totalEstimatedValue+(e.price||0))*100)/100,e.rarity===`SPECIAL`?n.totalGolds+=1:e.rarity===`COVERT`?n.totalReds+=1:e.rarity===`CLASSIFIED`?n.totalPinks+=1:e.rarity===`RESTRICTED`?n.totalPurples+=1:n.totalBlues+=1,(!n.bestDrop||(e.price||0)>(n.bestDrop.price||0))&&(n.bestDrop={name:e.name,weapon:e.weapon,rarity:e.rarity,rarityColor:e.rarityColor,price:e.price,image:e.image,isStatTrak:e.isStatTrak,wear:e.wear});try{localStorage.setItem(S,JSON.stringify(t)),localStorage.setItem(C,JSON.stringify(n))}catch{}this._notify()}clear(){try{localStorage.removeItem(S),localStorage.removeItem(C)}catch{}this._notify()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_notify(){for(let e of this.listeners)try{e()}catch{}}},T=class{constructor(e){this.container=e}show(e,{onOpenAgain:n,onGoInventory:i}={}){let a=this.container.querySelector(`#reveal-modal-placeholder`);if(!a)return;let o=r()===`vi`?e.wearViName:e.wear,s=Math.min(Math.max(parseFloat(e.float)*100,0),100);a.innerHTML=`
      <div class="reveal-modal-overlay" id="reveal-overlay">
        <div class="reveal-modal-card" style="--rarity-color: ${e.rarityColor}; --rarity-glow: ${e.rarityColor}55;">
          <div class="reveal-rays"></div>

          <div class="reveal-rarity-badge">${e.rarityName}</div>
          <h2 class="reveal-title">${e.fullName}</h2>

          ${e.isStatTrak?`<div class="reveal-stattrak-badge">StatTrak™ Confirmed</div>`:``}

          <div class="reveal-image-wrap">
            <img src="${e.image}" alt="${e.name}" class="reveal-image" />
          </div>

          <div class="reveal-wear-info">
            <div class="wear-meta-row">
              <span class="wear-name">${o}</span>
              <span class="float-val">${e.float}</span>
            </div>
            <div class="wear-bar-track">
              <div class="wear-bar-pin" style="left: ${s}%;"></div>
            </div>
          </div>

          <div class="reveal-price-tag">
            ≈ $${e.price.toFixed(2)} USD
          </div>

          <div class="reveal-buttons">
            <button class="btn-reveal-action btn-reveal-again" id="btn-modal-again">
              🔄 ${t(`case.openAgain`)}
            </button>
            <button class="btn-reveal-action btn-reveal-inventory" id="btn-modal-inventory">
              📦 ${t(`case.navInventory`)}
            </button>
          </div>
        </div>
      </div>
    `;let l=()=>{a.innerHTML=``},u=a.querySelector(`#reveal-overlay`);u&&u.addEventListener(`click`,e=>{e.target===u&&l()});let d=a.querySelector(`#btn-modal-again`);d&&d.addEventListener(`click`,()=>{c.playClick(),l(),n&&n()});let f=a.querySelector(`#btn-modal-inventory`);f&&f.addEventListener(`click`,()=>{c.playClick(),l(),i&&i()})}close(){let e=this.container?.querySelector(`#reveal-modal-placeholder`);e&&(e.innerHTML=``)}},E=`/img/rare_special_item.webp`;function D(e=!1){return`
    <div class="reel-card reel-card-gold-mystery" style="--rarity-color: #ffd700; --rarity-glow: rgba(255, 215, 0, 0.45);">
      ${e?`<span class="reel-card-stattrak">ST™</span>`:``}
      <div class="reel-card-img-wrap">
        <img src="${E}" alt="★ Rare Special Item ★" class="reel-card-img" />
      </div>
    </div>
  `.trim()}function O(){return`
    <div class="contained-item-card contained-item-gold-mystery" style="--rarity-color: #ffd700;">
      <img src="${E}" alt="★ Rare Special Item ★" class="contained-item-img" loading="lazy" />
    </div>
  `.trim()}var k=class{constructor(e,t={}){this.container=e,this.onBack=t.onBack||(()=>{}),this.onGoInventory=t.onGoInventory||(()=>{}),this.currentCase=null,this.isSpinning=!1,this.isFastOpen=localStorage.getItem(`cs2_fast_open`)===`true`,this.spinnerEngine=new x,this.revealModal=new T(e)}async setCase(e){this.currentCase=await y(e),this.render()}render(){if(!this.currentCase)return;let e=r()===`vi`&&this.currentCase.viName?this.currentCase.viName:this.currentCase.name;this.container.innerHTML=`
      <div class="unboxing-stage">
        <div class="unboxing-header-bar">
          <button class="btn-back-cases" id="btn-back-to-cases">
            ← ${t(`case.backToCases`)}
          </button>
          <div class="unboxing-case-info">
            <img src="${this.currentCase.image}" class="unboxing-case-icon" alt="${this.currentCase.name}" />
            <div class="unboxing-case-titles">
              <h3>${e}</h3>
            </div>
          </div>
          <div style="width: 120px;"></div>
        </div>

        <!-- Roulette Spinner Viewport -->
        <div class="spinner-container" id="spinner-viewport">
          <div class="spinner-needle"></div>
          <div class="spinner-strip" id="spinner-strip">
            <!-- Initial static preview cards -->
            ${this._renderInitialReel()}
          </div>
        </div>

        <!-- Spin Action Bar -->
        <div class="spinner-actions">
          <button class="btn-spin-main" id="btn-spin">
            <span id="btn-spin-text">${t(`case.openBtn`)}</span>
          </button>

          <div class="spin-options">
            <label class="toggle-label">
              <input type="checkbox" id="chk-fast-open" ${this.isFastOpen?`checked`:``} />
              <span>${t(`case.fastOpen`)}</span>
            </label>
          </div>
        </div>

        <!-- Contained Items Section -->
        <div class="case-content-section">
          <div class="case-content-title">
            <span>${t(`case.contains`)}</span>
            <span class="odds-tooltip-trigger" title="${t(`case.oddsTooltip`)}">ℹ️ Valve Odds</span>
          </div>

          <div class="items-contained-grid">
            <!-- Special Gold Mystery Card representation (authentic CS2 '?' icon) -->
            ${O()}

            <!-- All regular items sorted from highest rarity to lowest -->
            ${this._renderContainedItems()}
          </div>
        </div>
      </div>

      <!-- Modal Reveal Target -->
      <div id="reveal-modal-placeholder"></div>
    `,this._bindEvents()}_renderReelCard(e){if(e.rarity===`SPECIAL`)return D(e.isStatTrak);let t=l[e.rarity]||l.MIL_SPEC,n=e.rarityColor||t.color;return`
      <div class="reel-card" style="--rarity-color: ${n}; --rarity-glow: ${n}33;">
        ${e.isStatTrak?`<span class="reel-card-stattrak">ST™</span>`:``}
        <div class="reel-card-img-wrap">
          <img src="${e.image}" alt="${e.name}" class="reel-card-img" />
        </div>
      </div>
    `}_renderInitialReel(){if(!this.currentCase)return``;let e=this.currentCase.items||[];return[...e,...e,...e].slice(0,16).map((e,t)=>t===7?{rarity:`SPECIAL`}:e).map(e=>this._renderReelCard(e)).join(``)}_renderContainedItems(){let e={COVERT:1,CLASSIFIED:2,RESTRICTED:3,MIL_SPEC:4};return[...this.currentCase.items].sort((t,n)=>(e[t.rarity]||5)-(e[n.rarity]||5)).map(e=>`
          <div class="contained-item-card" style="--rarity-color: ${(l[e.rarity]||l.MIL_SPEC).color};">
            <img src="${e.image}" alt="${e.name}" class="contained-item-img" loading="lazy" />
            <p class="contained-item-weapon">${e.weapon}</p>
            <h4 class="contained-item-name">${e.name}</h4>
          </div>
        `).join(``)}_bindEvents(){let e=this.container.querySelector(`#btn-back-to-cases`);e&&e.addEventListener(`click`,()=>{c.playClick(),this.onBack()});let t=this.container.querySelector(`#chk-fast-open`);t&&t.addEventListener(`change`,e=>{this.isFastOpen=e.target.checked,localStorage.setItem(`cs2_fast_open`,this.isFastOpen?`true`:`false`)});let n=this.container.querySelector(`#btn-spin`);n&&n.addEventListener(`click`,()=>{this.executeSpin()})}executeSpin(){if(this.isSpinning||!this.currentCase)return;this.isSpinning=!0;let e=this.container.querySelector(`#btn-spin`),n=this.container.querySelector(`#btn-spin-text`),r=this.container.querySelector(`#spinner-strip`),i=this.container.querySelector(`#spinner-viewport`);e&&(e.disabled=!0),n&&(n.textContent=t(`case.opening`));let a=this.spinnerEngine.rollItem(this.currentCase);r.innerHTML=this.spinnerEngine.generateReel(this.currentCase,a).map(e=>this._renderReelCard(e)).join(``),r.style.transform=`translate3d(0, 0, 0)`,this.spinnerEngine.isFastOpen=this.isFastOpen;let o=i.offsetWidth||1100;this.spinnerEngine.startSpin(r,o,()=>{this.isSpinning=!1,e&&(e.disabled=!1),n&&(n.textContent=t(`case.openBtn`)),w.addItem(a),c.playWinSound(a.rarity),this.revealModal.show(a,{onOpenAgain:()=>this.executeSpin(),onGoInventory:()=>this.onGoInventory()})})}unmount(){this.spinnerEngine.cancel(),this.revealModal&&this.revealModal.close()}destroy(){this.unmount()}},A=class{constructor(e,t={}){this.container=e,this.onGoCases=t.onGoCases||(()=>{}),this.currentFilter=`ALL`,this.unsubscribeStorage=null}mount(){this.unsubscribeStorage=w.subscribe(()=>{this.render()}),this.render()}unmount(){this.unsubscribeStorage&&=(this.unsubscribeStorage(),null)}setFilter(e){this.currentFilter=e,this.render()}render(){let e=w.getInventory(),n=w.getStats(),i=r(),a=e;this.currentFilter!==`ALL`&&(a=e.filter(e=>e.rarity===this.currentFilter)),this.container.innerHTML=`
      <!-- Stats Overview Row -->
      <div class="stats-summary-grid">
        <div class="stat-card">
          <span class="stat-label">${t(`case.statTotalOpened`)}</span>
          <span class="stat-value">${n.totalOpened}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${t(`case.statGolds`)}</span>
          <span class="stat-value gold">★ ${n.totalGolds}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${t(`case.statReds`)}</span>
          <span class="stat-value red">${n.totalReds}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${t(`case.statTotalValue`)}</span>
          <span class="stat-value green">$${n.totalEstimatedValue.toFixed(2)}</span>
        </div>
      </div>

      <!-- Controls & Rarity Filters -->
      <div class="inventory-controls">
        <div class="inventory-filter-group">
          <button class="filter-btn ${this.currentFilter===`ALL`?`active`:``}" data-filter="ALL">
            ${t(`common.all`)} (${e.length})
          </button>
          <button class="filter-btn ${this.currentFilter===`SPECIAL`?`active`:``}" data-filter="SPECIAL" style="color: ${l.SPECIAL.color};">
            ★ Gold (${e.filter(e=>e.rarity===`SPECIAL`).length})
          </button>
          <button class="filter-btn ${this.currentFilter===`COVERT`?`active`:``}" data-filter="COVERT" style="color: ${l.COVERT.color};">
            Covert (${e.filter(e=>e.rarity===`COVERT`).length})
          </button>
          <button class="filter-btn ${this.currentFilter===`CLASSIFIED`?`active`:``}" data-filter="CLASSIFIED" style="color: ${l.CLASSIFIED.color};">
            Classified (${e.filter(e=>e.rarity===`CLASSIFIED`).length})
          </button>
          <button class="filter-btn ${this.currentFilter===`RESTRICTED`?`active`:``}" data-filter="RESTRICTED" style="color: ${l.RESTRICTED.color};">
            Restricted (${e.filter(e=>e.rarity===`RESTRICTED`).length})
          </button>
          <button class="filter-btn ${this.currentFilter===`MIL_SPEC`?`active`:``}" data-filter="MIL_SPEC" style="color: ${l.MIL_SPEC.color};">
            Mil-Spec (${e.filter(e=>e.rarity===`MIL_SPEC`).length})
          </button>
        </div>

        ${e.length>0?`
          <button class="btn-clear-inventory" id="btn-clear-inv">
            🗑️ ${t(`case.clearInventory`)}
          </button>
        `:``}
      </div>

      <!-- Inventory Grid -->
      <div class="inventory-grid">
        ${a.length>0?a.map(e=>{let t=i===`vi`?e.wearViName:e.wear;return`
            <div class="inv-card" style="--rarity-color: ${e.rarityColor};">
              ${e.isStatTrak?`<span class="inv-card-stattrak">ST™</span>`:``}
              <span class="inv-card-price">$${e.price.toFixed(2)}</span>
              <div class="inv-card-img-wrap">
                <img src="${e.image}" alt="${e.name}" class="inv-card-img" loading="lazy" />
              </div>
              <p class="inv-card-weapon">${e.weapon}</p>
              <h4 class="inv-card-name">${e.name}</h4>
              <span class="inv-card-wear">${t}</span>
            </div>
          `}).join(``):`
          <div class="inv-empty">
            <h3>${t(`case.emptyInventoryTitle`)}</h3>
            <p>${t(`case.emptyInventory`)}</p>
            <button class="btn-spin-main" id="btn-empty-go-cases" style="margin: 0 auto; display: inline-flex;">
              🎁 ${t(`case.navCases`)}
            </button>
          </div>
        `}
      </div>
    `,this._bindEvents()}_bindEvents(){this.container.querySelectorAll(`.inv-card`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{c.playHover()})}),this.container.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{c.playClick();let t=e.getAttribute(`data-filter`);this.setFilter(t)})});let e=this.container.querySelector(`#btn-clear-inv`);e&&e.addEventListener(`click`,()=>{confirm(t(`case.confirmClear`))&&(c.playClick(),w.clear())});let n=this.container.querySelector(`#btn-empty-go-cases`);n&&n.addEventListener(`click`,()=>{c.playClick(),this.onGoCases()})}},j=new class{constructor(){this.container=null,this.currentTab=`cases`,this.selectedCaseId=null,this.isMounted=!1,this.unsubscribeLocale=null,this.openingStage=null,this.inventoryView=null}mount(e={}){this.container=document.getElementById(`case-page`),this.container&&(this.isMounted=!0,this._installImgFallback(),e&&e.slug?(this.selectedCaseId=e.slug,this.currentTab=`opening`):(this.selectedCaseId=null,this.currentTab===`opening`&&(this.currentTab=`cases`)),this._renderShell(),this.unsubscribeLocale||=n(()=>{this.isMounted&&this.container&&this._renderShell()}))}unmount(){this.isMounted=!1,this.openingStage&&=(this.openingStage.unmount(),null),this.inventoryView&&=(this.inventoryView.unmount(),null),this.container&&(this.container.innerHTML=``)}_renderShell(){this.container&&(this.container.innerHTML=`
      <header class="case-header">
        <div class="case-header-content">
          <div class="case-header-left">
            <a href="/" class="btn-case-home" id="btn-case-home">
              ${a.back} <span>${t(`common.backToHome`)}</span>
            </a>
          </div>

          <div class="case-tabs">
            <button class="case-tab-btn ${this.currentTab===`cases`?`active`:``}" id="tab-btn-cases">
              ${t(`case.navCases`)}
            </button>
            <button class="case-tab-btn ${this.currentTab===`inventory`?`active`:``}" id="tab-btn-inventory">
              ${t(`case.navInventory`)}
            </button>
          </div>

          <div class="case-header-right">
            <button class="btn-tool ${c.isMuted?`active`:``}" id="btn-sound-toggle">
              <span id="sound-icon">${c.isMuted?a.volumeMuted:a.volumeHigh}</span>
            </button>
            <div class="header-lang-slot" id="case-lang-slot"></div>
          </div>
        </div>
      </header>

      <main class="case-view-container" id="case-subview-container"></main>
    `,this._bindHeaderEvents(),this._renderCurrentSubView(),i())}_bindHeaderEvents(){let e=this.container.querySelector(`#btn-sound-toggle`);e&&e.addEventListener(`click`,()=>{let t=c.toggleMute(),n=e.querySelector(`#sound-icon`);t?(e.classList.add(`active`),n&&(n.innerHTML=a.volumeMuted)):(e.classList.remove(`active`),n&&(n.innerHTML=a.volumeHigh),c.playClick())});let t=this.container.querySelector(`#tab-btn-cases`),n=this.container.querySelector(`#tab-btn-inventory`);t&&t.addEventListener(`click`,()=>{c.playClick(),this.switchTab(`cases`)}),n&&n.addEventListener(`click`,()=>{c.playClick(),this.switchTab(`inventory`)})}switchTab(t){if(t===`cases`){location.pathname===`/case`?(this.currentTab=`cases`,this.selectedCaseId=null,this._updateTabStyles(),this._renderCurrentSubView()):e.navigate(`/case`);return}location.pathname!==`/case`&&history.replaceState({path:`/case`},``,`/case`),this.selectedCaseId=null,this.currentTab=t,this._updateTabStyles(),this._renderCurrentSubView()}_updateTabStyles(){let e=this.container.querySelector(`#tab-btn-cases`),t=this.container.querySelector(`#tab-btn-inventory`);e&&e.classList.toggle(`active`,this.currentTab===`cases`||this.currentTab===`opening`),t&&t.classList.toggle(`active`,this.currentTab===`inventory`)}_renderCurrentSubView(){let t=this.container.querySelector(`#case-subview-container`);t&&(this.currentTab===`cases`?(this.openingStage&&=(this.openingStage.unmount(),null),this.inventoryView&&=(this.inventoryView.unmount(),null),b(t,t=>{e.navigate(`/case/${t}`)})):this.currentTab===`opening`?(this.inventoryView&&=(this.inventoryView.unmount(),null),this.openingStage&&=(this.openingStage.unmount(),null),this.openingStage=new k(t,{onBack:()=>{e.navigate(`/case`)},onGoInventory:()=>{this.switchTab(`inventory`)}}),this.openingStage.setCase(this.selectedCaseId||`kilowatt`)):this.currentTab===`inventory`&&(this.openingStage&&=(this.openingStage.unmount(),null),this.inventoryView&&=(this.inventoryView.unmount(),null),this.inventoryView=new A(t,{onGoCases:()=>{this.switchTab(`cases`)}}),this.inventoryView.mount()))}_installImgFallback(){this.container&&!this.container._imgFallbackInstalled&&(this.container.addEventListener(`error`,e=>{e.target.tagName===`IMG`&&!e.target._fallbackApplied&&(e.target._fallbackApplied=!0,e.target.src=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22200%22%20height%3D%22150%22%20rx%3D%2212%22%20fill%3D%22%231a1a2e%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M60%2095%20L140%2095%20L135%2080%20L125%2080%20L120%2065%20L100%2055%20L80%2065%20L75%2080%20L65%2080%20Z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20stroke%3D%22%234b69ff%22%20stroke-width%3D%222%22%20opacity%3D%220.5%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ctext%20x%3D%22100%22%20y%3D%22125%22%20text-anchor%3D%22middle%22%20fill%3D%22%234b69ff88%22%20font-size%3D%2212%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20font-family%3D%22Arial%2Csans-serif%22%3EIMG%3C%2Ftext%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E`,e.target.style.opacity=`0.6`)},!0),this.container._imgFallbackInstalled=!0)}};export{j as caseView};