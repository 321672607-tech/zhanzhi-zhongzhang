// Layout follows the user-supplied original battle screenshots: field above, orders below.
document.body.classList.add('classic');
const column=document.querySelector('.battle-column');
const controls=document.createElement('div');controls.className='classic-console';
controls.append(document.querySelector('.resource-strip'),document.querySelector('.order-row'),document.querySelector('#deployCards'));
column.append(controls);
document.querySelector('#arena').height=510;
document.querySelector('#page-expedition .page-heading h1').textContent='左右对攻 · 原作画面校正版';
document.querySelector('.build-tag').textContent='实机截图校正版';
document.querySelector('.commander .local-note').textContent='本机保存 · 单人对电脑';
document.querySelector('.below-grid').hidden=true;
document.querySelector('.brand small').textContent='实机截图校正版';

const homeNav=document.createElement('button');homeNav.className='nav';homeNav.dataset.page='city';homeNav.textContent='主城';document.querySelector('nav').prepend(homeNav);
const city=document.createElement('section');city.className='page';city.id='page-city';city.innerHTML='<div class="city-map"><div class="city-cloud cloud-a"></div><div class="city-cloud cloud-b"></div><div class="city-title">主 城 <small>天使之城</small></div><button class="city-place city-arena" data-cityto="expedition">竞技大厅<span>单人探索已开放</span></button><button class="city-place city-estate" data-cityto="manor">庄园</button><button class="city-place city-family" data-cityto="family">家族</button><button class="city-place city-market" data-cityto="market">市场</button><div class="city-dock"><button data-cityto="heroes">角色</button><button data-cityto="barracks">战配</button><button data-cityto="barracks" data-citytab="skills">技能</button><button data-cityto="expedition">探索</button></div><div class="city-note">主城背景重建 · 建筑可点击进入 · 多人竞技尚未联网</div></div>';document.querySelector('main').insertBefore(city,document.querySelector('footer'));

const manorScene=document.createElement('div');manorScene.className='reference-manor';manorScene.innerHTML='';document.querySelector('#page-manor .manor-hero').before(manorScene);

// Building labels belong to their painted signs. Invisible hit areas retain accessible names.
document.querySelector('.city-map').innerHTML=`<button class="city-hit hit-arena" data-cityto="expedition" aria-label="竞技大厅"></button><button class="city-hit hit-estate" data-cityto="manor" aria-label="庄园"></button><button class="city-hit hit-family" data-cityto="family" aria-label="家族"></button><button class="city-hit hit-shop" data-cityto="market" aria-label="商城"></button><button class="city-hit hit-explore" data-cityto="expedition" aria-label="探索"></button><div class="city-dock">${[['heroes','角色'],['bag','背包'],['tasks','任务'],['barracks','战配'],['friends','好友'],['market','商城']].map(([id,name],i)=>`<button ${['bag','tasks','friends'].includes(id)?'data-homemenu':'data-cityto'}="${id}" aria-label="${name}"><i style="--menu-index:${i}"></i><b>${name}</b></button>`).join('')}</div>`;
const minimap=document.createElement('div');minimap.className='battle-minimap';minimap.setAttribute('aria-label','战场小地图');document.querySelector('.arena-surface').append(minimap);
const count=document.createElement('span');count.id='fieldCount';count.title='我方在场佣兵数量';document.querySelector('.resource-strip>div').append(count);

