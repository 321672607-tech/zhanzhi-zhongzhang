export const TROOPS=[
 {id:'sword',name:'刀兵',role:'近战 · 主力',kind:'melee',cost:18,hp:125,damage:19,range:30,speed:35,interval:1.05,cooldown:1.7,skill:'利刃',desc:'向前挥斩。克制远程与机械，需要法术支援。',color:'#8fb7c8'},
 {id:'shield',name:'盾兵',role:'近战 · 坦克',kind:'melee',cost:28,hp:310,damage:21,range:32,speed:25,interval:2,cooldown:3.4,skill:'盾击',desc:'持盾蓄力，盾击短暂眩晕目标，为后排争取时间。',color:'#8cacc1'},
 {id:'ice',name:'法师',role:'法系 · 群攻',kind:'magic',cost:34,hp:78,damage:24,range:155,speed:29,interval:2,cooldown:4,skill:'冰霜法阵',desc:'在目标脚下召唤冰阵，攻击范围内敌军并减速。',color:'#83cedc'},
 {id:'archer',name:'弓箭手',role:'远程 · 点杀',kind:'ranged',cost:24,hp:82,damage:24,range:180,speed:32,interval:1.4,cooldown:2.6,skill:'穿林箭',desc:'搭箭、拉弦、释放。优先威胁脆弱的法系部队。',color:'#a8be82'},
 {id:'cannon',name:'攻城车',role:'机械 · 攻城',kind:'machine',cost:48,hp:165,damage:38,range:195,speed:21,interval:3,cooldown:6,skill:'投弹轰击',desc:'后置投臂装填石弹，抛射命中后造成群伤；对城堡造成额外伤害。',color:'#c8b082'},
 {id:'priest',name:'牧师',role:'法系 · 治疗',kind:'support',cost:15,hp:72,damage:24,range:155,speed:30,interval:2.1,cooldown:4,skill:'金色祈愿',desc:'举杖为受伤友军治疗，目标脚下绽放金色法阵。',color:'#e1c989'},
 {id:'witch',name:'巫师',role:'法系 · 控制',kind:'magic',cost:37,hp:83,damage:14,range:150,speed:28,interval:2.3,cooldown:4.5,skill:'恐惧禁锢',desc:'攻击目标周围敌军，概率使范围内敌军恐惧，暂时无法移动和攻击。',color:'#b09bcb'},
 {id:'breaker',name:'破甲师',role:'法系 · 破防',kind:'magic',cost:39,hp:86,damage:29,range:145,speed:28,interval:2.2,cooldown:4.5,skill:'灼热破甲',desc:'火焰命中削弱护甲，让集火更有效。',color:'#de9a74'},
 {id:'beast',name:'炎兽',role:'近战 · 自爆',kind:'melee',cost:38,hp:180,damage:20,range:32,speed:39,interval:1.2,cooldown:4,skill:'余烬爆裂',desc:'冲入敌阵近战，死亡时按自身最大生命的一定比例造成范围爆炸伤害。',color:'#e4aa63'},
 {id:'banner',name:'旗手',role:'辅助 · 增益',kind:'support',cost:42,hp:95,damage:0,range:180,speed:29,interval:2,cooldown:5,skill:'战旗领域',desc:'在场时为全体友军和玩家提供攻击与生命上限加成；旗手自身脆弱。',color:'#86b9c0'}
];
export const SPELLS=[
 {id:'heal',name:'治愈术',mark:'✦',mana:24,cd:12,desc:'治疗点击位置附近的一名友军。',target:'ally'},
 {id:'holy',name:'圣光术',mark:'☀',mana:34,cd:18,desc:'立即恢复目标范围内友军生命。',target:'area'},
 {id:'blessing',name:'祝福之语',mark:'✧',mana:42,cd:24,desc:'为全体友军持续恢复生命。',target:'global'},
 {id:'thunder',name:'落雷',mark:'ϟ',mana:28,cd:13,desc:'对点击位置附近的一名敌人造成高额伤害。',target:'enemy'},
 {id:'rain',name:'火雨',mark:'♨',mana:36,cd:17,desc:'对指定范围敌军造成一次火焰伤害。',target:'area'},
 {id:'storm',name:'暴风',mark:'◎',mana:40,cd:22,desc:'在指定地点召唤持续伤害的风暴。',target:'area'},
 {id:'meteor',name:'陨星',mark:'✹',mana:58,cd:32,desc:'陨星轰击战场上所有敌军。',target:'global'}
];
// Role labels only: historical hero identities and full sprites remain unverified.
export const HEROES=[{id:'player',name:'玩家',title:'玩家角色',sprite:0,tag:'你的角色',hp:850,damage:48,range:42,interval:1.7,speed:28,desc:'英雄就是玩家本人。佣兵是玩家率领的部队，不是可选英雄。',spells:['heal','holy','rain']}];
export const STAGES=[
 {id:0,name:'风起草原',label:'第一章',sub:'破晓试炼',difficulty:1,reward:160,tip:'先让盾兵承伤，再派弓手与法师支援。',enemy:[0,1,3]},
 {id:1,name:'古桥遗迹',label:'第二章',sub:'封锁与突破',difficulty:1.2,reward:230,tip:'面对法系，带上弓箭手；用落雷打断后排。',enemy:[0,2,5,6]},
 {id:2,name:'余烬边境',label:'第三章',sub:'火焰的回声',difficulty:1.45,reward:320,tip:'敌军拥有炎兽和攻城车，注意范围伤害与续航。',enemy:[1,4,7,8,9]}
];
export const SOURCES=[
 ['兵种与克制','https://www.9game.cn/wzzj3/98176.html'],['英雄技能','https://www.9game.cn/wzzj3/98179.html'],['战术搭配','https://www.9game.cn/wzzj3/98178.html'],['战斗与庄园问答','https://www.9game.cn/wzzj3/98238.html'],['市场规则','https://www.9game.cn/wzzj3/98229.html'],['家族系统','https://www.9game.cn/wzzj3/98226.html'],['原作截图与历史介绍','https://www.9game.cn/xiazai/505780/'],['屯兵时长与技能间隔','https://news.17173.com/content/06172013/092114904.shtml']
];
