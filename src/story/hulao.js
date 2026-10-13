// 第一章「虎牢关」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 汜水 / 虎牢 / 洛阳 ink map (PL_MAP) and the epilogue.
// History (初平元年 190, per 演义 5): the lords east of the passes rise against 董卓 under 盟主 袁绍; 董卓's vanguard 华雄
// holds 汜水关 and cuts down the coalition's champions until 关羽 — then a mere mounted archer under 刘备 — kills him
// before the cup of wine 曹操 poured him could cool (温酒斩华雄); at 虎牢关 吕布 routs 公孙瓒, 张飞 takes him on, 关羽 and
// 刘备 join in, and the three sworn brothers drive him back through the gate (三英战吕布); 董卓 burns 洛阳 and flees west.
// Played as any of the three brothers: `hero` = the chosen one, `ally` = CH.ally[hero]; the other two come onto the field
// as ally actors for the duel with 吕布 (the boss actor, game.actors). The brothers also speak by CHARS id: a line whose
// `who` is the current hero's id is his own.
// Map (world/maps/hulao.js): gates 'gorge' (barricade) and 'hulao' (the gate's doors), shut at the start; anchors
// 'hulao' (the gate's face, z 136), 'outworks' (华雄's palisade gap), 'wine' (the wine table in the camp).
import { CHARS } from '../chars/index.js';


export const CH = {
  id: 'hulao', num: { zh: '第一章', en: 'CHAPTER I' }, title: { zh: '虎牢关', en: 'Hulao Gate' },
  seal: '讨董之战', era: { zh: '初平元年', en: '190 AD' }, map: 'hulao',
  heroes: ['liubei', 'guanyu', 'zhangfei'],
  ally: { liubei: 'guanyu', guanyu: 'liubei', zhangfei: 'liubei' },
  army: { foe: 'dong', ally: 'liu' },
  // the brothers' own men drawn up either side of the road inside the camp gate, holding rank until the hero marches out
  van: [{ x: -5.575, z: -131.6, n: 12, cols: 4, hold: true }, { x: 5.575, z: -131.6, n: 12, cols: 4, hold: true }],
  hq: [0, 150],                                    // behind the gate: 吕布
  rank: { kos: [500, 1000, 1700], time: [540, 720, 900] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  yuanshao: { name: { zh: '袁绍', en: 'Yuan Shao' }, seal: '袁', side: 'shu' },
  yuanshu: { name: { zh: '袁术', en: 'Yuan Shu' }, seal: '术', side: 'shu' },
  caocao: { name: { zh: '曹操', en: 'Cao Cao' }, seal: '曹', side: 'shu' },
  gongsun: { name: { zh: '公孙瓒', en: 'Gongsun Zan' }, seal: '瓒', side: 'shu' },
  // the brothers: their pixel portrait once their kits are in CHARS, a seal until then
  liubei: { name: { zh: '刘备', en: 'Liu Bei' }, seal: '刘', side: 'shu', char: 'liubei' },
  guanyu: { name: { zh: '关羽', en: 'Guan Yu' }, seal: '关', side: 'shu', char: 'guanyu' },
  zhangfei: { name: { zh: '张飞', en: 'Zhang Fei' }, seal: '张', side: 'shu', char: 'zhangfei' },
  huaxiong: { name: { zh: '华雄', en: 'Hua Xiong' }, seal: '华', side: 'wei' },
  lijue: { name: { zh: '李傕', en: 'Li Jue' }, seal: '傕', side: 'wei' },
  guosi: { name: { zh: '郭汜', en: 'Guo Si' }, seal: '汜', side: 'wei' },
  zhangliao: { name: { zh: '张辽', en: 'Zhang Liao' }, seal: '辽', side: 'wei' },
  gaoshun: { name: { zh: '高顺', en: 'Gao Shun' }, seal: '顺', side: 'wei' },
  lubu: { name: { zh: '吕布', en: 'Lü Bu' }, seal: '吕', side: 'wei', char: 'lubu' },
  soldier: { name: { zh: '董卓军兵', en: 'Dong Zhuo\'s Soldier' }, seal: '兵', side: 'wei' },
};

// crowd officers. 华雄 ≈ 2 officers' worth (he has killed four champions); the gate pair are sturdy; the boss is 吕布,
// an actor (BEATS), not a crowd officer. Looks: 董卓军 lacquer (crowd/armies.js), each his own helm and plume.
export const OFF = {
  huaxiong: { name: { zh: '华雄', en: 'HUA XIONG' }, hp: 1100, look: { helm: 'horn', armor: 0x2a1a1e, trim: 0xe0b450, cape: 0x6e1830, plume: 0x9a2ad0 } },
  lijue: { name: { zh: '李傕', en: 'LI JUE' }, hp: 700, look: { helm: 'crest', armor: 0x2e2238, trim: 0xb88a48, cape: 0x3a1a50, plume: 0xc060f0 } },
  guosi: { name: { zh: '郭汜', en: 'GUO SI' }, hp: 700, look: { helm: 'wing', armor: 0x28202e, trim: 0xa88048, cape: 0x4a1a3a, plume: 0x8a3ab0 } },
  zhangliao: { name: { zh: '张辽', en: 'ZHANG LIAO' }, hp: 1000, look: { helm: 'crest', armor: 0x1e2230, trim: 0xd8b050, cape: 0x3a2a6a, plume: 0xf0f4fa } },
  gaoshun: { name: { zh: '高顺', en: 'GAO SHUN' }, hp: 1000, look: { helm: 'horn', armor: 0x1a1a1e, trim: 0x9a9aa4, cape: 0x3a1a2a, plume: 0x6a2a90 } },
};

// 吕布 (boss actor, C5) and the brothers who come to fight him beside the hero (ally actors, invulnerable)
const LUBU = { kit: 'lubu', role: 'boss', at: ['hulao', 0, 16], yaw: Math.PI, hp: 4400, poise: 460, retreatAt: 0.25,
  name: { zh: '吕布', en: 'LÜ BU' }, seal: '吕' };
const BRO = {
  liubei: { kit: 'liubei', role: 'ally', name: { zh: '刘备', en: 'LIU BEI' }, seal: '刘' },
  guanyu: { kit: 'guanyu', role: 'ally', name: { zh: '关羽', en: 'GUAN YU' }, seal: '关' },
  zhangfei: { kit: 'zhangfei', role: 'ally', name: { zh: '张飞', en: 'ZHANG FEI' }, seal: '张' },
};
const bros = (a, b) => ({ [a]: { ...BRO[a], at: ['hulao', -7, -26] }, [b]: { ...BRO[b], at: ['hulao', 7, -26] } });

const NAG = { who: 'caocao', zh: '且慢！华雄未除，不可孤军深入。', en: 'Hold! Hua Xiong still stands. Don\'t push on alone.' };
const NAG_GORGE = { who: 'gongsun', zh: '峡谷有栅，须先击破伏兵！', en: 'The gorge is barred. Break the ambush first!' };
const NAG_GATE = { who: 'gongsun', zh: '关门紧闭，先破守将！', en: 'The gate is shut fast. Beat its guards first!' };

// Pacing (default difficulty): a bot that attacks nonstop clears in ≈ 6 min with ≈ 2800 KOs (plain + 华雄 70 s · gorge
// ambush 70 s · forecourt pair 80 s · 吕布 ≈ 2.5 min); a human reading the dialogue and steering lands at ≈ 9-12 min.
// Officers come forward only after the hero has fought a while (kos / wait), so rushing never skips a stage.
// 温酒斩华雄 (关羽 only): 曹操 pours the wine as 华雄 comes out, obj.timer counts it cooling (150 s). Killed in time: the
// banner and 曹操's「其酒尚温」; the timer out first: 曹操 remarks the wine has gone cold (no fail).
export const BEATS = [
  // ---- 联军本阵: the war council, then the plain
  {
    when: { wait: 30 },
    obj: { zh: '击破汜水关前的董卓军', en: 'Break Dong Zhuo\'s army on the plain', go: ['plain', 0, 0.1] },
    squads: [{ at: ['plain', -0.5, -0.4], n: 22 }, { at: ['plain', 0.45, -0.3], n: 22 }, { at: ['plain', -0.25, 0.15], n: 24 }, { at: ['plain', 0.35, 0.4], n: 22 }],
    limit: { z: ['gorge', 0, -1], nag: NAG },
    morale: 0,
    say: [
      { who: 'yuanshao', zh: '华雄连斩鲍忠、祖茂、俞涉、潘凤，联军锐气尽失……', en: 'Hua Xiong has cut down Bao Zhong, Zu Mao, Yu She and Pan Feng. The coalition has lost its nerve...' },
      { who: 'yuanshao', zh: '可惜吾上将颜良、文丑未至！得一人在此，何惧华雄！', en: 'If only Yan Liang or Wen Chou were here! With either of them, who would fear Hua Xiong?' },
      { who: 'hero', liubei: ['备虽不才，愿与二弟同往，为盟主分忧！', 'Unworthy as I am, my brothers and I will go, and lift this burden from you!'],
        guanyu: ['小将愿往，斩华雄头，献于帐下！', 'Let this humble soldier go. I will lay Hua Xiong\'s head before your tent!'],
        zhangfei: ['一个华雄算什么？俺去把他脑袋拧下来！', 'One Hua Xiong? I\'ll go and twist his head off!'] },
      { who: 'yuanshu', guanyu: ['量一弓手，安敢乱言！与我打出！', 'A mere archer, talking out of turn? Throw him out!'],
        liubei: ['区区平原县令，也敢在诸侯面前夸口？', 'A petty magistrate of Pingyuan, boasting before the lords?'],
        zhangfei: ['区区平原县令手下，也敢在诸侯面前夸口？', 'A petty magistrate\'s man, boasting before the lords?'] },
      { who: 'caocao', zh: '公路息怒。此人既出大言，必有勇略；如其不胜，责之未迟。', en: 'Calm yourself, Gonglu. A man who speaks so boldly must have the courage to match. If he fails, blame him then.' },
    ],
  },
  {
    when: [{ zone: 'plain' }, { kos: 60 }],
    waves: true,
    say: [{ who: 'soldier', zh: '联军又来送死了！华将军的刀还没饮够血呢！', en: 'More coalition fools come to die! General Hua\'s blade is still thirsty!' }],
  },
  {
    hero: ['guanyu'],
    when: [{ kos: 60, wait: 15 * 60 }, { wait: 60 * 60 }],
    officers: { huaxiong: { at: ['outworks', 0, -9], engaged: true } },
    obj: { zh: '温酒未冷，斩华雄', en: 'Slay Hua Xiong before the wine cools', go: 'huaxiong', timer: 150 },
    say: [
      { who: 'caocao', zh: '将军且饮此杯热酒，再上马不迟。', en: 'General, drink this cup of warm wine before you ride.' },
      { who: 'guanyu', zh: '酒且斟下，某去便来。', en: 'Pour it and leave it. I\'ll be back before it cools.' },
      { who: 'huaxiong', zh: '又来一个送死的！报上名来！', en: 'Another one come to die! Name yourself!' },
    ],
  },
  {
    hero: ['liubei', 'zhangfei'],
    when: [{ kos: 60, wait: 15 * 60 }, { wait: 60 * 60 }],
    officers: { huaxiong: { at: ['outworks', 0, -9], engaged: true } },
    obj: { zh: '击破董卓军先锋 华雄', en: 'Defeat Dong Zhuo\'s vanguard, Hua Xiong', go: 'huaxiong' },
    say: [
      { who: 'huaxiong', zh: '吾乃华雄！联军诸将，皆是吾刀下之鬼！', en: 'I am Hua Xiong! Every champion the coalition sends dies on my blade!' },
      { who: 'hero', liubei: ['华雄休狂！涿郡刘玄德在此！', 'Enough boasting, Hua Xiong! Liu Xuande of Zhuo is here!'],
        zhangfei: ['燕人张翼德在此！华雄，吃俺一矛！', 'Zhang Yide of Yan is here! Hua Xiong, taste my spear!'] },
    ],
  },
  {
    hero: ['guanyu'],
    when: { timer: true },
    skip: { down: 'huaxiong' },
    say: [{ who: 'caocao', zh: '……酒已凉了。云长，莫教我空等！', en: '...The wine has gone cold. Yunchang, don\'t keep me waiting!' }],
  },
  {
    hero: ['guanyu'],
    when: { down: 'huaxiong' },
    skip: { timer: true },
    hush: true,
    banner: { html: '<em>温酒斩华雄</em>', en: 'Hua Xiong slain before the wine could cool', dur: 260, big: true },
    say: [{ who: 'caocao', zh: '其酒尚温！云长真神人也！', en: 'The wine is still warm! Yunchang, you are a god of war!' }],
  },
  {
    hero: ['liubei', 'zhangfei'],
    when: { down: 'huaxiong' },
    hush: true,
    banner: { html: '敌将 <em>华雄</em> 讨取！', en: 'Hua Xiong has fallen!', dur: 200 },
  },
  {
    when: { down: 'huaxiong' },
    heal: 0.35, morale: 0.12, waves: false, retire: true,
    obj: { zh: '突破峡谷，进兵虎牢关', en: 'Push through the gorge toward Hulao Gate', go: ['gorge', 0, -0.3] },
    limit: { z: ['gorge', 0, 0.62], nag: NAG_GORGE },                 // just short of the 'gorge' barricade (z 58.5)
    say: [
      { who: 'hero', liubei: ['华雄已死！二弟、三弟，随我杀入峡谷！', 'Hua Xiong is dead! Brothers, into the gorge with me!'],
        guanyu: ['华雄之首在此。诸公，进兵吧。', 'Here is Hua Xiong\'s head. My lords, advance.'],
        zhangfei: ['哈哈！华雄也不过如此！', 'Ha! So much for Hua Xiong!'] },
      { who: 'yuanshao', zh: '董卓先锋已溃！全军进兵，直取虎牢关！', en: 'Dong Zhuo\'s vanguard is broken! All armies advance on Hulao Gate!' },
    ],
  },

  // ---- 峡谷: the ambush from both walls (the mid-battle twist)
  {
    when: { zone: 'gorge' },
    squads: [{ at: ['gorge', -0.3, -0.55], n: 18 }, { at: ['gorge', 0.25, -0.35], n: 20 }],
    waves: true,
    say: [{ who: 'soldier', zh: '联军杀进峡谷了！快报李将军、郭将军！', en: 'The coalition is in the gorge! Warn General Li and General Guo!' }],
  },
  {
    when: [{ at: ['gorge', 0, -0.05] }, { kos: 150 }],
    banner: { html: '<em>伏兵</em>！董卓军自峡谷两壁杀出', en: 'Ambush! Dong Zhuo\'s troops pour down both walls of the gorge', dur: 170 },
    squads: [{ at: ['gorge', -0.3, 0.05], n: 16, charge: true }, { at: ['gorge', 0.3, 0.1], n: 16, charge: true },
      { at: ['gorge', 0, -0.35], n: 18, charge: true }, { at: ['gorge', 0.05, 0.3], n: 18, charge: true }],
    officers: { lijue: { at: ['gorge', -0.25, 0.22], engaged: true }, guosi: { at: ['gorge', 0.25, 0.26], engaged: true } },
    morale: -0.1,
    obj: { zh: '击破伏兵将 李傕、郭汜', en: 'Defeat the ambush leaders, Li Jue and Guo Si', go: 'lijue' },
    say: [
      { who: 'lijue', zh: '哈哈！峡谷两壁尽是我军，看你往哪里逃！', en: 'Ha! Both walls are ours. Where will you run now?' },
      { who: 'guosi', zh: '放箭！一个也别放过！', en: 'Loose! Let none of them through!' },
      { who: 'ally', liubei: ['兄长小心，先斩贼将，伏兵自溃！', 'Careful, brother! Cut down their leaders and the rest will break!'],
        guanyu: ['二弟，贼将李傕、郭汜在前，速斩之！', 'Brother, Li Jue and Guo Si lead them. Strike them down!'],
        zhangfei: ['三弟，莫要恋战，先取贼将！', 'Don\'t get bogged down, brother. Take their leaders first!'] },
    ],
  },
  {
    when: { down: 'lijue' },
    obj: { zh: '击破伏兵将 郭汜', en: 'Defeat the ambush leader, Guo Si', go: 'guosi' },
    say: [{ who: 'lijue', zh: '可恶……郭汜，这里交给你了！', en: 'Curse it... Guo Si, it\'s yours now!' }],
  },
  {
    when: { down: 'guosi' },
    banner: { html: '<em>峡谷</em> 伏兵击退！', en: 'The ambush is broken — the gorge is open', dur: 160 },
    heal: 0.3, morale: 0.12, retire: true, hush: true, gate: 'gorge',
    obj: { zh: '攻向虎牢关', en: 'Advance on Hulao Gate', go: ['fore', 0, 0.2] },
    limit: { z: ['hulao', 0, -4], nag: NAG_GATE },
    say: [{ who: 'gongsun', zh: '伏兵已退！前方便是虎牢关，吾引兵先行一步！', en: 'The ambush is beaten! Hulao Gate lies ahead. I\'ll lead my riders on first!' }],
  },

  // ---- 关前: 张辽 and 高顺 hold the gate; 公孙瓒 comes back past, routed by 吕布
  {
    when: { zone: 'fore' },
    officers: { zhangliao: { at: ['hulao', -9, -15] }, gaoshun: { at: ['hulao', 9, -15] } },
    squads: [{ at: ['fore', -0.5, -0.1], n: 20 }, { at: ['fore', 0.5, 0], n: 20 }, { at: ['fore', 0, 0.45], n: 18 }],
    waves: true,
    obj: { zh: '击破守关将 张辽、高顺', en: 'Defeat the gate\'s guardians, Zhang Liao and Gao Shun', go: 'zhangliao' },
    say: [
      { who: 'zhangliao', zh: '吾乃雁门张辽！此关有我，休想过去！', en: 'I am Zhang Liao of Yanmen! While I hold this gate, none pass!' },
      { who: 'gaoshun', zh: '陷阵之志，有死无生！', en: 'The Vanguard Breakers know no retreat — only death!' },
    ],
  },
  {
    when: [{ kos: 70, wait: 12 * 60 }, { wait: 40 * 60 }, { down: 'zhangliao' }, { down: 'gaoshun' }],   // (a guard falling brings 吕布 on)
    banner: { html: '<em>公孙瓒</em> 败退 — 吕布 将至', en: 'Gongsun Zan falls back — Lü Bu is coming', dur: 170 },
    morale: -0.08,
    squads: [{ at: ['hulao', -6, -12], n: 16, charge: true }, { at: ['hulao', 6, -12], n: 16, charge: true }],
    say: [
      { who: 'gongsun', zh: '吕布那厮太过骁勇，吾不能敌！快、快退！', en: 'That Lü Bu is too strong! I can\'t hold him — fall back!' },
      { who: 'hero', liubei: ['伯珪兄莫慌，刘备来也！', 'Hold fast, Bogui! Liu Bei is here!'],
        guanyu: ['公孙将军且退，关某在此！', 'Fall back, General Gongsun. Guan Yu stands here!'],
        zhangfei: ['公孙将军休慌！吕布若敢出来，俺跟他大战三百回合！', 'Don\'t panic, General! If Lü Bu shows his face, I\'ll fight him three hundred bouts!'] },
    ],
  },
  {
    when: { down: 'zhangliao' },
    obj: { zh: '击破守关将 高顺', en: 'Defeat the gate\'s guardian, Gao Shun', go: 'gaoshun' },
    say: [{ who: 'zhangliao', zh: '……好身手。高顺，关门就交给你了！', en: '...Well fought. Gao Shun, the gate is yours!' }],
  },

  // ---- 虎牢关: the gate opens and 吕布 rides out; the brothers fight him together
  {
    when: { down: 'gaoshun' },
    gate: 'hulao', hush: true, retire: true, waves: false, heal: 0.3, morale: 0.1,
    actors: { lubu: LUBU },
    banner: { html: '人中<em>吕布</em>　马中<em>赤兔</em>', en: 'Among men, Lü Bu; among horses, Red Hare', dur: 240, big: true },
    obj: { zh: '击退 吕布', en: 'Drive back Lü Bu', go: 'lubu' },
    limit: { z: ['hulao', 0, 2] },
    say: [
      { who: 'lubu', zh: '何人敢挡我吕奉先！', en: 'Who dares stand before Lü Fengxian!' },
      { who: 'hero', liubei: ['吕布骁勇无双，不可轻敌……', 'Lü Bu has no equal. We cannot take him lightly...'],
        guanyu: ['吕布，关某来会你！', 'Lü Bu. Guan Yu will face you!'],
        zhangfei: ['吕奉先，莫把天下英雄都看小了！俺这杆矛可不答应！', 'Fengxian, you have judged every man here too lightly. My spear will correct you!'] },
    ],
  },
  {
    hero: ['liubei'],
    when: { wait: 7 * 60 },
    actors: bros('guanyu', 'zhangfei'),
    banner: { html: '<em>三英战吕布</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'zhangfei', zh: '大哥！俺来也！', en: 'Brother! I\'m here!' },
      { who: 'guanyu', zh: '兄长勿忧，关某与三弟同来！', en: 'Fear not, brother. Yide and I are with you!' },
    ],
  },
  {
    hero: ['guanyu'],
    when: { wait: 7 * 60 },
    actors: bros('liubei', 'zhangfei'),
    banner: { html: '<em>三英战吕布</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'zhangfei', zh: '二哥！吕布留给俺一半！', en: 'Brother! Save half of Lü Bu for me!' },
      { who: 'liubei', zh: '我兄弟三人，今日同心破敌！', en: 'We three brothers fight as one today!' },
    ],
  },
  {
    hero: ['zhangfei'],
    when: { wait: 7 * 60 },
    actors: bros('liubei', 'guanyu'),
    banner: { html: '<em>三英战吕布</em>', en: 'Three heroes against Lü Bu', dur: 200, big: true },
    say: [
      { who: 'guanyu', zh: '三弟，关某助你！', en: 'Yide! I\'m with you!' },
      { who: 'liubei', zh: '我兄弟三人，今日同心破敌！', en: 'We three brothers fight as one today!' },
    ],
  },
  {
    when: { below: ['lubu', 0.5] },
    skip: { down: 'lubu' },
    banner: { html: '<em>吕布</em> 怒 — 董卓军援兵杀到！', en: 'Lü Bu rages — Dong Zhuo\'s reinforcements pour out!', dur: 170 },
    waves: true, morale: -0.1,
    squads: [{ at: ['hulao', -14, -10], n: 16, charge: true }, { at: ['hulao', 14, -10], n: 16, charge: true }, { at: ['fore', 0, -0.3], n: 16, charge: true }],
    say: [
      { who: 'lubu', zh: '好！好！许久不曾如此痛快！', en: 'Good! Good! It\'s been too long since I had a real fight!' },
      { who: 'ally', liubei: ['兄长，援兵交给关某，只管战吕布！', 'Leave their reinforcements to me, brother. Keep at Lü Bu!'],
        guanyu: ['二弟，再加把劲！', 'Brother, press him harder!'],
        zhangfei: ['三弟，再加把劲！', 'Brother, press him harder!'] },
    ],
  },
  {
    when: { below: ['lubu', 0.3] },
    skip: { down: 'lubu' },
    actor: { key: 'lubu', do: 'retreat', at: ['hulao', 0, 18] },      // (his withdrawal counts as down: the win beat follows)
  },
  {
    when: { down: 'lubu' },
    win: true, waves: false, morale: 1,
    banner: { html: '<em>三英战吕布</em> — 吕布 败走入关！', en: 'Three heroes against Lü Bu — Lü Bu flees behind the gate!', dur: 280, big: true },
    say: [{ who: 'lubu', zh: '……三人齐上，算什么好汉！今日且饶你们！', en: '...Three on one — some heroes! I\'ll spare you today!' },
      { who: 'hero', liubei: ['吕布败走！董卓的气数，尽矣！', 'Lü Bu runs! Dong Zhuo\'s fortune is spent!'],
      guanyu: ['吕布也不过如此。', 'So that is Lü Bu.'],
      zhangfei: ['吕布休走！再战三百回合！', 'Come back, Lü Bu! Three hundred more bouts!'] }],
  },
];

// ---- prologue ink map of the 洛阳 – 虎牢 – 酸枣 country (viewBox 1600×900): 黄河 across the north, 邙山 over 洛阳,
// 嵩山 to the south, the pass between them, 汜水 running up into the river, the coalition's camp at 酸枣 in the east
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
const HE = 'M-20 190 C180 235 400 160 620 205 S960 262 1180 205 S1480 160 1620 214';
const SI = 'M932 760 C918 650 940 560 918 470 S902 330 924 222';
const LUO = 'M-20 610 C140 585 250 575 420 598 S600 640 700 610';
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[150, 360, 0.9], [260, 340, 1.1], [380, 355], [500, 345, 0.9], [610, 370, 0.8]], 110, 80)}
    ${peaks([[480, 820, 1.1], [620, 790, 1.3], [760, 815, 1.1], [900, 800, 1.2], [1040, 830, 0.9], [1200, 850, 1.1], [1380, 870]], 140, 100)}
    ${peaks([[1240, 150, 0.7], [1380, 140, 0.8], [1500, 160, 0.7]], 90, 70)}
  </g>
  <g class="pl-mark" data-id="hulao" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[720, 520, 0.9], [790, 505, 1.2], [860, 530, 0.8]], 130, 70)}</g>
  <g class="pl-mark" data-id="he" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${HE}" stroke="#6f7c78" stroke-width="44" opacity=".35"/><path d="${HE}" stroke="#46524f" stroke-width="9" opacity=".7"/>
  </g>
  <g class="pl-mark" data-id="sishui" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${SI}" stroke="#6f7c78" stroke-width="16" opacity=".35"/><path d="${SI}" stroke="#46524f" stroke-width="4" opacity=".7"/>
  </g>
  <g class="pl-mark" data-id="luoyang" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${LUO}" stroke="#6f7c78" stroke-width="18" opacity=".3"/><path d="${LUO}" stroke="#46524f" stroke-width="4" opacity=".6"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="luoyang"><rect x="262" y="486" width="40" height="40" rx="3"/><text x="236" y="566">洛阳</text><text class="sm" x="236" y="610">董卓</text></g>
    <g class="pl-mark wei" data-id="hulao"><rect x="772" y="452" width="30" height="30" rx="3"/><text x="728" y="420">虎牢关</text></g>
    <g class="pl-mark wei" data-id="sishui"><text x="956" y="520">汜水关</text><text class="sm" x="956" y="562">华雄</text></g>
    <g class="pl-mark" data-id="suanzao"><rect x="1330" y="330" width="34" height="34" rx="3"/><text x="1300" y="410">酸枣</text><text class="sm" x="1300" y="452">盟主 袁绍</text></g>
    <g class="pl-mark" data-id="he"><text class="sm river" x="520" y="168">黄 河</text></g>
    <g class="pl-mark" data-id="lubu"><text class="sm" x="720" y="640">吕布</text></g>
  </g>`,
  arrows: [
    ['dong0', 'wei', 'M320 500 C440 480 600 470 760 470'],
    ['dong1', 'wei', 'M810 470 C860 480 900 490 944 492'],
    ['coal', 'shu', 'M1330 360 C1240 380 1120 430 1010 480'],
    ['liu', 'shu', 'M1560 70 C1500 150 1440 250 1372 322'],
    ['shu1', 'shu', 'M1000 500 C960 505 920 506 880 500'],
    ['lubu1', 'wei', 'M790 490 C790 540 760 580 730 612'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['初平元年', '董卓挟天子', '暴虐京师'], en: '190 AD. Dong Zhuo holds the boy emperor hostage and rules the capital by terror.',
    show: ['luoyang', 'he'], focus: [420, 440, 1.2] },
  { cols: ['曹操发矫诏', '关东诸侯起兵', '推袁绍为盟主'], en: 'Cao Cao sends out the call; the lords east of the passes rise and name Yuan Shao their leader.',
    show: ['suanzao', 'coal'], focus: [1180, 420, 1.2] },
  { cols: ['董卓遣华雄', '屯兵汜水关', '连斩联军数将'], en: 'Dong Zhuo sends Hua Xiong to hold Sishui Pass. General after general of the coalition falls to him.',
    show: ['dong0', 'dong1', 'sishui', 'hulao'], focus: [760, 500, 1.15] },
  { liubei: { cols: ['平原令刘备', '率关张二弟', '随公孙瓒来会'], en: 'Liu Bei, magistrate of Pingyuan, rides in with Gongsun Zan, his sworn brothers Guan Yu and Zhang Fei at his side.' },
    guanyu: { cols: ['刘备帐下', '马弓手关羽', '请斩华雄'], en: 'Guan Yu, a mere mounted archer under Liu Bei, asks leave to cut down Hua Xiong.' },
    zhangfei: { cols: ['燕人张飞', '随兄长刘备', '投奔联军'], en: 'Zhang Fei of Yan rides with his elder brother Liu Bei to join the coalition.' },
    show: ['liu', 'shu1'], focus: [1180, 330, 1.3] },
  { cols: ['虎牢关上', '吕布拥兵', '天下无双'], en: 'And on Hulao Gate waits Lü Bu — the mightiest warrior under heaven.',
    show: ['lubu', 'lubu1'], focus: [780, 520, 1.4] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  liubei: {
    zh: ['三英战吕布，吕布败走入关。董卓惧联军之势，焚洛阳，挟天子西迁长安。', '刘关张之名，自此闻于天下；然诸侯各怀异心，联军终散。'],
    en: ['Lü Bu fled behind the gate. Fearing the coalition, Dong Zhuo burned Luoyang and dragged the emperor west to Chang\'an.',
      'From that day the names of Liu, Guan and Zhang were known across the land — but the lords, each with his own ambitions, soon went their separate ways.'],
  },
  guanyu: {
    zh: ['温酒斩华雄，一刀而名动诸侯；虎牢关前，三英战吕布，吕布败走。', '董卓焚洛阳而西走长安。关云长之名，自此天下皆知。'],
    en: ['One stroke over a cup of warm wine made Guan Yu the talk of the lords; before Hulao Gate the three brothers drove Lü Bu back.',
      'Dong Zhuo burned Luoyang and fled west to Chang\'an. The name of Guan Yunchang was known across the land.'],
  },
  zhangfei: {
    zh: ['张飞挺丈八蛇矛，大战吕布五十合；关羽、刘备齐上，吕布败走。', '董卓焚洛阳，迁都长安。「燕人张飞」之名，自此响彻天下。'],
    en: ['Zhang Fei took on Lü Bu with his serpent spear for fifty bouts; Guan Yu and Liu Bei joined him, and Lü Bu fled.',
      'Dong Zhuo burned Luoyang and moved the capital to Chang\'an. The name "Zhang Fei of Yan" rang across the land.'],
  },
};
