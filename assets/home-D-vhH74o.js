import{_ as e,h as t,p as n}from"./index-DP7e86mp.js";import{r}from"./dom-Cny3Z_Zk.js";/* empty css                */var i=[{href:`/books`,img:`library.webp`,art:`wide`,order:1,titleKey:`home.cards.books.title`},{href:`/music`,img:`music.webp`,art:`tall`,order:2,titleKey:`home.cards.music.title`},{href:`/pc-parts`,img:`pc.webp`,art:`sprite`,order:3,titleKey:`home.cards.price.title`},{href:`/case`,img:`rare_special_item.webp`,art:`wide`,order:4,titleKey:`home.cards.case.title`},{href:`/blog`,img:`board.webp`,art:`tall`,order:5,titleKey:`home.cards.blog.title`},{href:`/random`,img:`tree.webp`,art:`sprite`,order:6,titleKey:`home.cards.random.title`},{href:`/monopoly`,img:`monopoly.webp`,art:`sprite`,order:7,titleKey:`home.cards.monopoly.title`}],a=new class{constructor(){this.container=null,this.unsubscribeLocale=null,this.isMounted=!1}mount(){this.container=document.getElementById(`home-page`),this.container&&(this.isMounted=!0,this._render(),this.unsubscribeLocale||=t(()=>{this.isMounted&&this.container&&this._render()}))}unmount(){this.isMounted=!1,this.unsubscribeLocale&&=(this.unsubscribeLocale(),null),this.container&&(this.container.innerHTML=``)}_render(){if(!this.container)return;let t=i.map(t=>`
        <a class="home-link home-link--${t.art}" style="order:${t.order}" href="${t.href}">
          ${t.img?`<span class="home-art"><img src="/img/${t.img}" alt="" /></span>`:`<span class="home-sign">${r(e(t.titleKey))}</span>`}
          ${t.img?`<span class="home-tag">${r(e(t.titleKey))}</span>`:``}
        </a>
      `).join(``);this.container.innerHTML=`
      <div class="home-bg" aria-hidden="true">
        <img class="home-bg-sky" src="/img/1.webp" alt="" />
        <img class="home-bg-ground" src="/img/2.webp" alt="" />
        <img class="home-bg-clouds" src="/img/3.webp" alt="" />
      </div>

      <main class="home-hub">
        <div class="home-grid">${t}</div>
      </main>
    `,n()}};export{a as homeView};