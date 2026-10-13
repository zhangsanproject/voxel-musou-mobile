// 第三章「赤壁」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 赤壁 ink map (PL_MAP) and the epilogue.
// History (winter 208 AD, 赤壁之战): 曹操, master of 荆州, sails down the Yangtze and chains his fleet at 乌林; 孙权 and
// 刘备 ally; 周瑜 plans a fire attack with 黄盖's feigned surrender, but the winter wind blows from the north-west — 诸葛亮
// raises the 七星坛 on 南屏山 and "borrows" the south-east wind (借东风); 周瑜 sends 丁奉 and 徐盛 to kill him, but he
// slips away on 赵云's boat; 黄盖's fire ships ram the chained fleet (火烧连环船), the fire spreads to the camps ashore,
// and 曹操 flees by 乌林 and the 华容道 (赵云's ambush west of 乌林, 张辽 covering him). Played as either officer: `hero` =
// the chosen one, `ally` = the other one (his pixel portrait). Everyone else speaks under a seal portrait.
// Map (src/world/maps/chibi.js): anchors altar / gate / boat / tent / mouth / road; gate 'shuizhai'; set pieces 'wind'
// (the east wind), 'ignite' (黄盖's fire boats and the burning fleet), 'forest' (乌林 catches).

export const CH = {
  id: 'chibi', num: { zh: '第三章', en: 'CHAPTER III' }, title: { zh: '赤壁', en: 'Red Cliffs' },
  seal: '火烧连环', era: { zh: '建安十三年冬', en: 'Winter, 208 AD' }, map: 'chibi',
  heroes: ['zhugeliang', 'zhaoyun'],
  ally: { zhugeliang: 'zhaoyun', zhaoyun: 'zhugeliang' },
  army: { foe: 'cao', ally: 'liu' },
  // the altar guard drawn up either side of the altar, holding rank until the hero leaves the mesa
  van: [{ x: -24, z: -158, n: 10, cols: 5, hold: true }, { x: 12, z: -166, n: 10, cols: 5, hold: true }],
  hq: [-12, 130],                                  // 曹操's command pavilion at 乌林
  rank: { kos: [600, 1200, 2000], time: [600, 780, 960] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  zhouyu: { name: { zh: '周瑜', en: 'Zhou Yu' }, seal: '瑜', side: 'shu' },
  huanggai: { name: { zh: '黄盖', en: 'Huang Gai' }, seal: '盖', side: 'shu' },
  lusu: { name: { zh: '鲁肃', en: 'Lu Su' }, seal: '肃', side: 'shu' },
  caocao: { name: { zh: '曹操', en: 'Cao Cao' }, seal: '操', side: 'wei' },
  caihe: { name: { zh: '蔡和', en: 'Cai He' }, seal: '和', side: 'wei' },
  dingfeng: { name: { zh: '丁奉', en: 'Ding Feng' }, seal: '奉', side: 'wei' },
  xusheng: { name: { zh: '徐盛', en: 'Xu Sheng' }, seal: '盛', side: 'wei' },
  zhangnan: { name: { zh: '张南', en: 'Zhang Nan' }, seal: '南', side: 'wei' },
  maojie: { name: { zh: '毛玠', en: 'Mao Jie' }, seal: '玠', side: 'wei' },
  yujin: { name: { zh: '于禁', en: 'Yu Jin' }, seal: '禁', side: 'wei' },
  caoren: { name: { zh: '曹仁', en: 'Cao Ren' }, seal: '仁', side: 'wei' },
  xuhuang: { name: { zh: '徐晃', en: 'Xu Huang' }, seal: '晃', side: 'wei' },
  zhangliao: { name: { zh: '张辽', en: 'Zhang Liao' }, seal: '辽', side: 'wei' },
  soldier: { name: { zh: '曹军兵', en: 'Cao Soldier' }, seal: '兵', side: 'wei' },
};

// officers (crowd.spawnOfficer). 丁奉 / 徐盛 are 周瑜's men (吴 red lacquer), sent for Kongming: no KO banner, the
// script says they fall back. The admirals and 乌林's generals ≈ 2 combos more than a default officer each.
const WU = { armor: 0x4a1a14, trim: 0xd8b050, cape: 0x8a2418 };
export const OFF = {
  caihe: { name: { zh: '蔡和', en: 'CAI HE' }, hp: 600, look: { helm: 'cap', armor: 0x243048, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  dingfeng: { name: { zh: '丁奉', en: 'DING FENG' }, hp: 520, boss: true, look: { ...WU, helm: 'wing', plume: 0xe8c050 } },
  xusheng: { name: { zh: '徐盛', en: 'XU SHENG' }, hp: 520, boss: true, look: { ...WU, helm: 'crest', plume: 0xf0e0c0 } },
  zhangnan: { name: { zh: '张南', en: 'ZHANG NAN' }, hp: 700 },
  maojie: { name: { zh: '毛玠', en: 'MAO JIE' }, hp: 850, look: { helm: 'cap', armor: 0x243048, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  yujin: { name: { zh: '于禁', en: 'YU JIN' }, hp: 1000, look: { helm: 'crest', armor: 0x1e2436, trim: 0xe0b450, cape: 0x2a3a7a, plume: 0xe8eef8 } },
  caoren: { name: { zh: '曹仁', en: 'CAO REN' }, hp: 1100, look: { helm: 'horn', armor: 0x2a2a34, trim: 0xb08a50, cape: 0x3a2e44, plume: 0x2a64dc } },
  xuhuang: { name: { zh: '徐晃', en: 'XU HUANG' }, hp: 1100, look: { helm: 'crest', armor: 0x28304a, trim: 0xc0c8d4, cape: 0x1a2a50, plume: 0x3c7cf0 } },
  guard: { name: { zh: '亲卫队长', en: 'GUARD CAPTAIN' }, hp: 320 },
};

const NAG = { who: 'lusu', zh: '将军且慢！东风未起，七星坛不可有失！', en: 'Wait, General! The wind has not risen yet — the altar must not fall!' };
const NAG_BANK = { who: 'zhouyu', zh: '莫要孤军深入！先与黄盖在江岸会合。', en: 'Don\'t press on alone! Join Huang Gai at the landing first.' };
const NAG_GATE = { who: 'huanggai', zh: '水寨门紧闭！先斩守门的毛玠、于禁！', en: 'The water camp gate is barred! Cut down Mao Jie and Yu Jin who hold it!' };
const NAG_WOOD = { who: 'zhouyu', zh: '乌林尚有曹仁、徐晃，不可轻进！', en: 'Cao Ren and Xu Huang still hold Wulin. Don\'t push on yet!' };
// The altar anchor lies inside its solid base. Guard its walkable south stair, within reach of a close-range sweep.
const ALTAR_GUARD = ['altar', 0, -15];

// Pacing (default difficulty): a scripted bot that attacks nonstop clears in ≈ 7.5 min with ≈ 3000 KOs (altar 2 min
// fixed by the wind's timer · the pursuers and the landing 70 s · the fire and the gate 90 s · camp and 乌林 80 s ·
// 张辽 2 min); a human reading the dialogue lands at ≈ 10-13 min. Rank thresholds: CH.rank.
export const BEATS = [
  // ---- 南屏山 七星坛: hold the altar until the third watch, when the wind turns
  {
    when: { wait: 30 },
    obj: { zh: '守护七星坛 直至东风起', en: 'Guard the Altar of the Seven Stars until the east wind rises', go: ALTAR_GUARD, timer: 120 },
    defend: { key: 'altar', at: ALTAR_GUARD, r: 6, hp: 600, name: { zh: '七星坛', en: 'Seven Stars Altar' } },
    fail: { when: { hp: ['altar', 0.001] }, zh: '七星坛失守，东风未至……', en: 'The altar has fallen — and the east wind never came.' },
    limit: { z: ['altar', 0, 13], nag: NAG },
    squads: [{ at: ['altar', 22, 2], n: 14 }, { at: ['altar', -24, -4], n: 14 }],
    morale: 0,
    say: [
      { who: 'lusu', zh: '三更将至，江上仍是西北风……孔明先生，这风当真借得来？', en: 'The third watch is near, and still the wind blows from the north-west... Master Kongming, can you truly borrow the wind?' },
      { who: 'hero', zhugeliang: ['子敬放心。今夜三更，东南风必起。', 'Rest easy, Zijing. At the third watch tonight, the south-east wind will rise.'],
        zhaoyun: ['军师在坛上作法。有子龙在此，谁也休想近前一步！', 'The Strategist works his rite above. While Zilong stands here, no one comes one step nearer!'] },
      { who: 'ally', zhugeliang: ['军师只管祭风，坛下交给子龙！', 'Call the wind, Strategist. Leave the foot of the altar to me!'],
        zhaoyun: ['子龙，曹操细作已知此坛。务必守住，莫让一人登坛。', 'Zilong, Cao Cao\'s spies know of this altar. Hold it — let no one set foot on it.'] },
    ],
  },
  {
    when: [{ kos: 30 }, { wait: 20 * 60 }],
    waves: true,
    say: [{ who: 'soldier', zh: '南屏山上有座妖坛！烧了它！', en: 'There\'s a witch\'s altar on the hill! Burn it!' }],
  },
  {
    when: [{ kos: 50, wait: 10 * 60 }, { wait: 45 * 60 }],
    skip: { timer: true },
    officers: { caihe: { at: ['altar', 20, 8], engaged: true } },
    squads: [{ at: ['altar', 18, 11], n: 12, charge: true }],
    obj: { zh: '击破细作 蔡和', en: 'Cut down the spy, Cai He', go: 'caihe', keepTimer: true },
    say: [
      { who: 'caihe', zh: '奉丞相密令，毁此妖坛！', en: 'By the Chancellor\'s secret order — tear down this witch\'s altar!' },
      { who: 'hero', zhugeliang: ['蔡和？汝之诈降，周郎早已看破。', 'Cai He? Zhou Yu saw through your false surrender long ago.'],
        zhaoyun: ['想毁坛？先过子龙这一关！', 'You want the altar? Get past me first!'] },
    ],
  },
  {
    when: { down: 'caihe' },
    skip: { timer: true },
    banner: { html: '细作 <em>蔡和</em> 讨取！', en: 'The spy Cai He is cut down', dur: 150 },
    obj: { zh: '守护七星坛 直至东风起', en: 'Guard the Altar of the Seven Stars until the east wind rises', go: ALTAR_GUARD, keepTimer: true },
    heal: 0.25, morale: 0.1, hush: true,
    say: [{ who: 'lusu', zh: '好！坛前已稳。只是这风……', en: 'Well fought! The altar holds. But the wind...' }],
  },
  // the third watch: the wind turns (set 'wind'); 周瑜, afraid of such a man, sends 丁奉 and 徐盛 to kill him
  {
    when: { timer: true },
    set: 'wind', defend: null, fail: null, waves: false, heal: 0.3, morale: 0.2, hush: true,
    banner: { html: '<em>东南风</em> 起！', en: 'The south-east wind rises!', dur: 260, big: true },
    obj: { zh: '赶往江岸', en: 'Make for the riverbank', go: ['beach', 0.25, -0.7] },
    limit: { z: ['beach', 0, -0.62], nag: NAG_BANK },
    say: [
      { who: 'lusu', zh: '风……风向转了！真是东南风！', en: 'The wind... the wind has turned! It truly blows from the south-east!' },
      { who: 'hero', zhugeliang: ['江面风势已转，让黄老将军依计发船。', 'The gusts favor our course. Send Huang Gai the signal and put the plan in motion.'],
        zhaoyun: ['军师真乃神人也！', 'The Strategist commands heaven itself!'] },
      { who: 'zhouyu', zh: '此人有夺天地造化之法……留之必为东吴之患。丁奉、徐盛，去南屏山！', en: 'This man bends heaven and earth to his will... Leave him alive and he will ruin Wu. Ding Feng, Xu Sheng — to the altar!' },
      { who: 'ally', zhugeliang: ['军师，周都督的兵马往坛上来了！船已在江边，速走！', 'Strategist, Zhou Yu\'s men are coming up the hill! My boat waits at the river — quickly!'],
        zhaoyun: ['子龙，周郎容不得亮。船在江边，你我速走。', 'Zilong, Zhou Yu will not suffer me to live. The boat is at the river — let us go.'] },
    ],
  },
  {
    when: { wait: 6 * 60 },
    officers: { dingfeng: { at: ['altar', 17, 12], engaged: true }, xusheng: { at: ['altar', 11, 14], engaged: true } },
    obj: { zh: '击退丁奉・徐盛', en: 'Drive off Ding Feng and Xu Sheng', go: 'dingfeng' },
    say: [
      { who: 'dingfeng', zh: '奉都督将令，取诸葛亮首级！', en: 'By the Commander\'s order — Zhuge Liang\'s head!' },
      { who: 'hero', zhugeliang: ['周郎果然来了。可惜，亮不奉陪了。', 'So Zhou Yu sends for me after all. A pity — I shan\'t be staying.'],
        zhaoyun: ['要伤军师，先问过子龙手中这杆枪！', 'Harm the Strategist? Ask my spear first!'] },
      { who: 'xusheng', zh: '休走！', en: 'Don\'t let him get away!' },
    ],
  },
  {
    when: { down: 'dingfeng' },
    say: [{ who: 'dingfeng', zh: '好厉害……徐将军，撤吧！', en: 'Too strong... General Xu, fall back!' }],
  },
  {
    when: { down: 'xusheng' },
    banner: { html: '<em>丁奉・徐盛</em> 退去', en: 'Ding Feng and Xu Sheng fall back', dur: 150 },
    heal: 0.2, morale: 0.1, hush: true, retire: true,
    obj: { zh: '与黄盖会合 江岸登陆', en: 'Join Huang Gai at the riverbank landing', go: ['boat', -8, 0] },
    limit: { z: ['gate', 0, -12], nag: NAG_BANK },
    say: [
      { who: 'xusheng', zh: '诸葛亮早有准备……回报都督！', en: 'Zhuge Liang was ready for us... Report to the Commander!' },
      { who: 'ally', zhugeliang: ['军师，黄老将军的船队已到江岸！', 'Strategist, old General Huang\'s boats are at the landing!'],
        zhaoyun: ['子龙，去江岸。黄公覆的火船，只等这阵风了。', 'To the riverbank, Zilong. Huang Gongfu\'s fire ships wait only for this wind.'] },
    ],
  },

  // ---- 江岸: 张南's pickets on the landing, then 黄盖's fire ships
  {
    when: { zone: 'beach' },
    squads: [{ at: ['beach', -0.5, -0.35], n: 20 }, { at: ['beach', 0.3, -0.15], n: 20 }, { at: ['beach', -0.3, 0.3], n: 22 }, { at: ['beach', 0.4, 0.55], n: 20 }],
    officers: { zhangnan: { at: ['beach', 0.1, 0.6] } },
    waves: true,
    obj: { zh: '击破江岸守将 张南', en: 'Defeat the riverbank commander, Zhang Nan', go: 'zhangnan' },
    say: [
      { who: 'huanggai', zh: '曹军的哨船看见咱们了！先扫清江岸，火船才好出江！', en: 'Cao\'s picket boats have spotted us! Clear the bank so the fire ships can put out!' },
      { who: 'zhangnan', zh: '吴狗休想靠近水寨一步！', en: 'Not one step nearer the water camp, Wu dogs!' },
    ],
  },
  {
    when: { down: 'zhangnan' },
    banner: { html: '<em>江岸</em> 已夺！', en: 'The riverbank is ours', dur: 150 },
    heal: 0.3, morale: 0.15, hush: true, retire: true, waves: false,
    set: 'ignite',
    obj: { zh: '静待火船', en: 'Watch the fire ships go in', go: ['gate', 0, -14] },
    say: [
      { who: 'zhouyu', zh: '东南风正急！黄公覆，放船！', en: 'The south-east wind is strong! Huang Gongfu — loose the ships!' },
      { who: 'huanggai', zh: '末将得令！火船齐发——撞进曹贼的连环船！', en: 'At your command! All fire ships — into Cao\'s chained fleet!' },
      { who: 'hero', zhugeliang: ['铁索连舟，一船着火，百船皆焚。', 'Ships chained together: set one alight, and a hundred burn.'],
        zhaoyun: ['看！火船乘风而去，快如飞箭！', 'Look! The fire ships run before the wind like arrows!'] },
    ],
  },
  {
    when: { wait: 9 * 60 },
    banner: { html: '<em>火烧连环船</em>', en: 'Fire on the chained fleet!', dur: 300, big: true },
    morale: 0.25, waves: true,
    officers: { maojie: { at: ['gate', -8, -7] }, yujin: { at: ['gate', 8, -7] } },
    squads: [{ at: ['gate', -10, -13], n: 18 }, { at: ['gate', 10, -13], n: 18 }, { at: ['beach', 0.2, 0.3], n: 18, charge: true }],
    obj: { zh: '击破毛玠・于禁 攻破水寨', en: 'Defeat Mao Jie and Yu Jin and break into the water camp', go: 'maojie' },
    limit: { z: ['gate', 0, -3], nag: NAG_GATE },
    say: [
      { who: 'soldier', zh: '船……船都烧起来了！铁索连着，解不开啊！', en: 'The ships... the ships are burning! They\'re chained — we can\'t cut them loose!' },
      { who: 'maojie', zh: '慌什么！守住寨门，一个也别放进来！', en: 'Hold your nerve! Hold the gate — let no one through!' },
      { who: 'yujin', zh: '于禁在此，水寨休想轻易攻破！', en: 'Yu Jin stands here. This camp will not fall easily!' },
    ],
  },
  {
    when: { down: 'maojie' },
    obj: { zh: '击破于禁 攻破水寨', en: 'Defeat Yu Jin and break into the water camp', go: 'yujin' },
    say: [{ who: 'yujin', zh: '毛玠！……可恶，火势已到寨前了！', en: 'Mao Jie!... Curse it, the fire is at the stockade!' }],
  },
  {
    when: { down: 'yujin' },
    gate: 'shuizhai', heal: 0.3, morale: 0.15, retire: true, hush: true,
    banner: { html: '<em>曹军水寨</em> 攻破！', en: 'The Cao water camp is broken open!', dur: 180 },
    obj: { zh: '突破水寨 直取乌林', en: 'Cut through the water camp to Wulin', go: ['wulin', 0, -0.8] },
    limit: { z: ['wulin', 0, 0.1], nag: NAG_WOOD },
    squads: [{ at: ['shuizhai', -0.3, -0.5], n: 18 }, { at: ['shuizhai', 0.3, -0.1], n: 18 }, { at: ['shuizhai', -0.2, 0.4], n: 20 }],
    say: [
      { who: 'huanggai', zh: '哈哈哈！曹贼，老夫诈降之计，滋味如何！', en: 'Ha! Cao, you traitor — how do you like the old man\'s false surrender now?' },
      { who: 'ally', zhugeliang: ['军师，火已烧到岸上，曹军大乱！', 'Strategist, the fire has spread ashore — Cao\'s army is in chaos!'],
        zhaoyun: ['子龙，直取乌林！曹操必从那里逃走。', 'Zilong, straight on to Wulin! That is where Cao Cao will run.'] },
    ],
  },

  // ---- 乌林: the woods catch (set 'forest'); 曹仁 and 徐晃 hold the land camp
  {
    when: { zone: 'wulin' },
    set: 'forest', waves: true,
    banner: { html: '风助火势 <em>乌林</em> 延烧！', en: 'The wind drives the fire into the woods of Wulin!', dur: 200 },
    officers: { caoren: { at: ['wulin', -0.35, 0.05] }, xuhuang: { at: ['wulin', 0.4, 0.15] } },
    squads: [{ at: ['wulin', -0.4, -0.2], n: 20 }, { at: ['wulin', 0.35, -0.1], n: 20 }, { at: ['wulin', 0, 0.35], n: 22 }],
    obj: { zh: '击破曹仁・徐晃', en: 'Defeat Cao Ren and Xu Huang', go: 'caoren' },
    say: [
      { who: 'caoren', zh: '死守乌林！丞相大营岂容敌人踏入！', en: 'Hold Wulin to the death! No enemy sets foot in the Chancellor\'s camp!' },
      { who: 'xuhuang', zh: '林子烧起来了……稳住阵脚！', en: 'The woods are burning... hold your ranks!' },
    ],
  },
  {
    when: { down: 'caoren' },
    obj: { zh: '击破徐晃', en: 'Defeat Xu Huang', go: 'xuhuang' },
    say: [{ who: 'xuhuang', zh: '曹仁将军！……某来也！', en: 'General Cao Ren!... I\'m coming!' }],
  },
  {
    when: { down: 'xuhuang' },
    heal: 0.3, morale: 0.15, retire: true, hush: true, waves: false,
    banner: { html: '<em>乌林</em> 大营攻破！', en: 'The camp at Wulin is taken!', dur: 170 },
    // 曹操 (npc actor: he never fights) stands before his pavilion and laughs at his enemies — then the ambush
    actors: { caocao: { kit: 'caocao', role: 'npc', at: ['tent', 0, -9], name: { zh: '曹操', en: 'CAO CAO' }, seal: '操' } },
    actor: { key: 'caocao', do: 'hold', at: ['tent', 0, -9] },
    obj: { zh: '追击曹操', en: 'Pursue Cao Cao', go: 'caocao' },
    limit: { z: ['mouth', 0, 2], nag: NAG_WOOD },
    say: [
      { who: 'caocao', zh: '哈哈哈……人皆言周瑜、诸葛亮足智多谋，以吾观之，到底是无能之辈。若使此处伏下一军，吾等皆束手受缚矣！', en: 'Ha ha ha... They call Zhou Yu and Zhuge Liang masters of strategy. Fools! Had they set one ambush here, we would all be taken.' },
      { who: 'hero', zhugeliang: ['丞相笑得太早了。亮在此，恭候多时。', 'You laugh too soon, Chancellor. I have been waiting for you.'],
        zhaoyun: ['赵子龙奉军师将令，在此等候多时了！', 'Zhao Zilong, by the Strategist\'s order — I have been waiting for you!'] },
    ],
  },
  {
    when: [{ near: [['tent', 0, -9], 18] }, { wait: 14 * 60 }],
    actors: { zhangliao: { kit: 'zhangliao', role: 'boss', at: ['mouth', 0, -4], hp: 2600, name: { zh: '张辽', en: 'ZHANG LIAO' }, seal: '辽',
      retreatAt: 0.3, intro: { zh: '威震逍遥 张文远', en: 'Zhang Wenyuan, terror of the south' } } },
    actor: { key: 'caocao', do: 'retreat', at: ['road', 0, 0] },
    banner: { html: '<em>张辽</em> 断后！', en: 'Zhang Liao covers the retreat!', dur: 170, big: true },
    obj: { zh: '击退张辽', en: 'Drive back Zhang Liao', go: 'zhangliao' },
    waves: true,
    say: [
      { who: 'caocao', zh: '文远，断后！走华容道！', en: 'Wenyuan, hold the rear! We take the Huarong road!' },
      { who: 'zhangliao', zh: '丞相先走！此路有张辽在，谁也休想过去！', en: 'Go, my lord! While Zhang Liao holds this road, no one passes!' },
      { who: 'hero', zhugeliang: ['张文远，忠勇可嘉。只可惜，错投了主。', 'Zhang Wenyuan — loyal and brave. What a pity about the master you serve.'],
        zhaoyun: ['张辽，让开！', 'Out of my way, Zhang Liao!'] },
    ],
  },
  {
    when: { below: ['zhangliao', 0.6] },
    skip: { down: 'zhangliao' },
    banner: { html: '曹军残部 <em>拼死</em> 来援！', en: 'Cao\'s last men throw themselves into the fight!', dur: 160 },
    morale: -0.1,
    squads: [{ at: ['mouth', -8, 10], n: 16, charge: true }, { at: ['mouth', 8, 6], n: 16, charge: true }, { at: ['mouth', 0, -16], n: 16, charge: true }],
    officers: { guard1: { at: ['mouth', -4, 8], engaged: true, like: 'guard' }, guard2: { at: ['mouth', 4, 8], engaged: true, like: 'guard' } },
    say: [
      { who: 'zhangliao', zh: '丞相走远了吗……再撑一刻！', en: 'Is the Chancellor clear yet?... A little longer!' },
      { who: 'ally', zhugeliang: ['军师，援兵交给子龙，专心对付张辽！', 'Strategist, leave their reinforcements to me — you take Zhang Liao!'],
        zhaoyun: ['子龙，莫恋战。击退张辽，曹操自会落入云长之手。', 'Zilong, don\'t tarry. Drive Zhang Liao off — Cao Cao runs straight into Yunchang\'s hands.'] },
    ],
  },
  {
    when: { down: 'zhangliao' },
    win: true, waves: false, morale: 1,
    banner: { html: '<em>曹操</em> 败走！', en: 'Cao Cao is put to flight!', dur: 260, big: true },
    say: [{ who: 'hero', zhugeliang: ['八十万大军，一夜灰飞。天下三分，自此始矣。', 'Eight hundred thousand, gone to ash in a night. So begins the land\'s division in three.'],
      zhaoyun: ['曹操败走华容！此战，大胜！', 'Cao Cao flees down the Huarong road! The day is ours!'] }],
  },
];

// ---- prologue ink map of the middle Yangtze (viewBox 1600×900, north up): 江陵 upstream, the river bending past 赤壁
// (south bank) and 乌林 (north bank) to 夏口, the 云梦 marshes, the road north-west from 乌林 through 华容
const JIANG = 'M-20 330 C120 318 220 350 320 392 S520 520 640 548 S800 600 900 580 S1080 470 1200 430 S1420 372 1620 360';
const HAN = 'M1240 120 C1260 220 1238 320 1262 402';
const marsh = (list) => list.map(([x, y, w]) => `<path d="M${x - w} ${y} q${w * 0.5} -9 ${w} 0 t${w} 0"/>`).join('');
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[90, 160, 1.1], [240, 140], [380, 170, 0.9], [1360, 150, 1.1], [1500, 170], [1580, 140, 0.9]], 110, 90)}
    ${peaks([[160, 900, 1.2], [360, 880], [560, 905, 1.1], [1060, 890, 0.9], [1260, 905, 1.2], [1460, 885]], 120, 100)}
  </g>
  <g class="pl-mark" data-id="chibi" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[780, 660, 0.7], [840, 650, 0.9], [900, 668, 0.6]], 90, 60)}</g>
  <g class="pl-mark" data-id="yunmeng" filter="url(#pl-ink)" fill="none" stroke="#56625e" stroke-width="3" opacity=".55" stroke-linecap="round">
    ${marsh([[430, 420, 26], [520, 440, 22], [470, 470, 30], [600, 470, 24], [380, 460, 20], [560, 405, 18], [650, 440, 20]])}
  </g>
  <g class="pl-mark" data-id="jiang" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${JIANG}" stroke="#6f7c78" stroke-width="42" opacity=".32"/><path d="${JIANG}" stroke="#46524f" stroke-width="8" opacity=".7"/>
    <path d="${HAN}" stroke="#6f7c78" stroke-width="18" opacity=".3"/><path d="${HAN}" stroke="#46524f" stroke-width="5" opacity=".6"/>
  </g>
  <g class="pl-mark" data-id="huarong" filter="url(#pl-ink)" fill="none" stroke="#3e3430" stroke-width="4" stroke-dasharray="3 11" stroke-linecap="round" opacity=".7">
    <path d="M760 520 C660 470 560 380 470 330 S300 318 214 318"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="jiangling"><rect x="186" y="290" width="32" height="32" rx="3"/><text x="146" y="274">江陵</text></g>
    <g class="pl-mark wei" data-id="huarong"><rect x="456" y="300" width="26" height="26" rx="3"/><text x="440" y="284">华容</text></g>
    <g class="pl-mark wei" data-id="wulin"><text x="700" y="488">乌林</text><text class="sm" x="742" y="530">连环船</text></g>
    <g class="pl-mark" data-id="chibi"><text x="800" y="718">赤壁</text></g>
    <g class="pl-mark" data-id="xiakou"><rect x="1250" y="412" width="30" height="30" rx="3"/><text x="1234" y="480">夏口</text></g>
    <g class="pl-mark" data-id="yunmeng"><text class="sm" x="470" y="520">云梦泽</text></g>
    <g class="pl-mark" data-id="jiang"><text class="sm river" x="1020" y="560">长 江</text></g>
  </g>`,
  arrows: [
    ['cao1', 'wei', 'M214 336 C340 376 520 470 700 500'],
    ['ally1', 'shu', 'M1250 440 C1130 490 1000 590 880 626'],
    ['fire', 'shu', 'M880 640 C900 600 870 562 800 530'],
    ['flee', 'wei', 'M740 500 C640 450 560 372 482 326'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['建安十三年冬', '曹操既得荆州', '顺江东下'], en: 'Winter, 208 AD. Master of Jingzhou, Cao Cao sails east down the Yangtze from Jiangling.',
    show: ['jiang', 'jiangling', 'cao1'], focus: [470, 420, 1.12] },
  { cols: ['北军不习水战', '以铁索连舟', '屯于乌林'], en: 'His northerners are no sailors: he chains his ships together with iron and moors them at Wulin.',
    show: ['wulin', 'yunmeng'], focus: [720, 480, 1.3] },
  { cols: ['孙刘结盟', '周瑜屯兵赤壁', '黄盖请以火攻'], en: 'Sun Quan and Liu Bei join hands. Zhou Yu holds the Red Cliffs, and Huang Gai proposes an attack by fire.',
    show: ['ally1', 'chibi', 'xiakou'], focus: [980, 540, 1.15] },
  { zhugeliang: { cols: ['万事俱备', '只欠东风', '孔明筑坛祭风'], en: '"All is ready — all but the east wind." Kongming raises an altar on Nanping Hill to call it.' },
    zhaoyun: { cols: ['常山赵云', '奉命护卫军师', '守七星坛'], en: 'Zhao Yun of Changshan is ordered to guard the Strategist at the Altar of the Seven Stars.' },
    show: ['fire'], focus: [830, 590, 1.42] },
  { cols: ['此战胜负', '天下三分', '决于一夜'], en: 'Win or lose, a single night will decide whether the land splits in three.',
    show: ['flee', 'huarong'], focus: [700, 460, 1.04] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  zhugeliang: {
    zh: ['东南风大作，黄盖火船直入曹营，连环战船尽成火海，延及岸上营寨。', '曹操自华容道败走，关羽念旧日之恩，义释曹操。孔明笑曰：「曹操命不该绝，留此人情教云长做了，亦是美事。」'],
    en: ['The south-east wind roared. Huang Gai\'s fire ships drove into Cao\'s lines; the chained fleet became a sea of flame that spread to the camps ashore.',
      'Cao Cao fled by the Huarong road, where Guan Yu, remembering an old debt, let him pass. Kongming only smiled: "His time has not yet come. Let Yunchang repay his kindness — that too is well."'],
  },
  zhaoyun: {
    zh: ['赵云伏兵乌林以西，截杀曹军，曹操仅以身免，奔华容道而去。', '关羽于华容道义释曹操。曹操北还，孙刘分据荆州，天下三分之势遂成。'],
    en: ['Zhao Yun sprang his ambush west of Wulin and cut the fleeing army to pieces; Cao Cao escaped with his life alone, down the Huarong road.',
      'There Guan Yu, remembering an old debt, let him go. Cao Cao went north, Sun and Liu divided Jingzhou — and the land was set to split in three.'],
  },
};
