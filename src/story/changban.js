// 第二章「长坂坡」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 当阳 ink map (PL_MAP) and the epilogue.
// History (208 AD, 当阳长坂): 刘琮 surrenders 荆州; 刘备 flees south toward 江陵 with a hundred thousand refugees and is
// overtaken at 长坂 by 曹操's light horse. 赵云 rides back into the host, finds 甘夫人, takes 夏侯恩's 青釭剑, and carries
// the infant 阿斗 out (糜夫人 throws herself into a well); 张飞 holds the bridge with twenty riders, raising dust in the
// woods behind him, and roars the pursuit to a standstill (据水断桥). Played as either officer — the script branches by
// `hero`: 赵云 rides out to the village and back (单骑救主, 张飞 holding the bridge as an allied actor); 张飞 holds the
// bridge on a timer, rides out to meet 赵云 (an allied actor) and brings him home, then stands alone on the bridge.
// Map (world/maps/changban.js): anchors 'bridge' (the deck's middle, z -128), 'gan', 'mizhu', 'well', 'cao' (曹操's post
// on 景山); gate 'jingshan' (never opened: 曹操 stays out of reach); sets 'well' / 'bridge'.

export const CH = {
  id: 'changban', num: { zh: '第二章', en: 'CHAPTER II' }, title: { zh: '长坂坡', en: 'Changban' },
  seal: '当阳之战', era: { zh: '建安十三年', en: '208 AD' }, map: 'changban',
  heroes: ['zhaoyun', 'zhangfei'],
  ally: { zhaoyun: 'zhangfei', zhangfei: 'zhaoyun' },
  army: { foe: 'cao', ally: 'liu' },
  // 张飞's riders at the south foot of the bridge (they hold there: the hero rides north, never past them)
  van: [{ x: -5, z: -142, n: 10, cols: 5, hold: true }, { x: 5, z: -142, n: 10, cols: 5, hold: true }],
  hq: [0, 168],                                    // 曹操 on 景山
  rank: { kos: [500, 1000, 1700], time: [540, 720, 900] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  liubei: { name: { zh: '刘备', en: 'Liu Bei' }, seal: '刘', side: 'shu', char: 'liubei' },
  mifang: { name: { zh: '糜芳', en: 'Mi Fang' }, seal: '芳', side: 'shu' },
  jianyong: { name: { zh: '简雍', en: 'Jian Yong' }, seal: '雍', side: 'shu' },
  gan: { name: { zh: '甘夫人', en: 'Lady Gan' }, seal: '甘', side: 'shu' },
  mi: { name: { zh: '糜夫人', en: 'Lady Mi' }, seal: '糜', side: 'shu' },
  mizhu: { name: { zh: '糜竺', en: 'Mi Zhu' }, seal: '竺', side: 'shu' },
  villager: { name: { zh: '百姓', en: 'Villager' }, seal: '民', side: 'shu' },
  caocao: { name: { zh: '曹操', en: 'Cao Cao' }, seal: '曹', side: 'wei', char: 'caocao' },
  caohong: { name: { zh: '曹洪', en: 'Cao Hong' }, seal: '洪', side: 'wei' },
  caochun: { name: { zh: '曹纯', en: 'Cao Chun' }, seal: '纯', side: 'wei' },
  chunyu: { name: { zh: '淳于导', en: 'Chunyu Dao' }, seal: '导', side: 'wei' },
  xiahouen: { name: { zh: '夏侯恩', en: 'Xiahou En' }, seal: '恩', side: 'wei' },
  yanming: { name: { zh: '晏明', en: 'Yan Ming' }, seal: '晏', side: 'wei' },
  zhanghe: { name: { zh: '张郃', en: 'Zhang He' }, seal: '郃', side: 'wei' },
  zhongjin: { name: { zh: '钟缙', en: 'Zhong Jin' }, seal: '缙', side: 'wei' },
  zhongshen: { name: { zh: '钟绅', en: 'Zhong Shen' }, seal: '绅', side: 'wei' },
  xuchu: { name: { zh: '许褚', en: 'Xu Chu' }, seal: '褚', side: 'wei' },
  xiahoujie: { name: { zh: '夏侯杰', en: 'Xiahou Jie' }, seal: '杰', side: 'wei' },
  soldier: { name: { zh: '曹军兵', en: 'Cao Soldier' }, seal: '兵', side: 'wei' },
};

// officers (crowd.spawnOfficer). A default officer has 520 HP (≈ 5 full combos); 张郃 and 许褚 are the heavyweights.
// Looks (armies.js offLook) set the named ones apart from the 曹军 officer default.
export const OFF = {
  chunyu: { name: { zh: '淳于导', en: 'CHUNYU DAO' }, hp: 650, look: { helm: 'cap', armor: 0x3a3440 } },
  xiahouen: { name: { zh: '夏侯恩', en: 'XIAHOU EN' }, hp: 800, look: { helm: 'crest', cape: 0x3a1a4a, plume: 0xe8e0d0 } },
  yanming: { name: { zh: '晏明', en: 'YAN MING' }, hp: 750, look: { helm: 'horn', armor: 0x3a2a24, trim: 0xb08040 } },
  zhanghe: { name: { zh: '张郃', en: 'ZHANG HE' }, hp: 1100, look: { helm: 'crest', armor: 0x28283a, cape: 0x6a2a6a, plume: 0xd8d0f0 } },
  zhongjin: { name: { zh: '钟缙', en: 'ZHONG JIN' }, hp: 600, look: { helm: 'horn', armor: 0x3a3028, cape: 0x5a2a18 } },
  zhongshen: { name: { zh: '钟绅', en: 'ZHONG SHEN' }, hp: 600, look: { helm: 'horn', armor: 0x2a3028, cape: 0x1a3a4a } },
  caochun: { name: { zh: '曹纯', en: 'CAO CHUN' }, hp: 800, look: { helm: 'crest', armor: 0x1a1a22, plume: 0x1a1a1a, cape: 0x6a1a14 } },
  caohong: { name: { zh: '曹洪', en: 'CAO HONG' }, hp: 900, look: { helm: 'wing', armor: 0x2a2240, trim: 0xe0c060 } },
  xuchu: { name: { zh: '许褚', en: 'XU CHU' }, hp: 1400, look: { helm: 'horn', armor: 0x4a3a2a, cape: 0x3a2a1a, plume: 0x2a1a10 } },
  xiahoujie: { name: { zh: '夏侯杰', en: 'XIAHOU JIE' }, hp: 700, boss: true, look: { helm: 'crest', cape: 0x2a1a3a, plume: 0xc0c0c0 } },
};

const ZY = ['zhaoyun'], ZF = ['zhangfei'];
/** Hero south of z (the return run: `at` only looks north) — a 1 km circle just touching z at x = 0. */
const south = (z) => ({ near: [['bridge', 0, z + 128 - 1000], 1000] });
const DECK = ['bridge', 0, 8];                  // the north foot of the bridge (z -120)
const CAO = ['cao', 0, 0];
const CAOCAO = { kit: 'caocao', role: 'npc', at: CAO, yaw: Math.PI, name: { zh: '曹操', en: 'CAO CAO' }, seal: '曹' };
// Enemies converge on the hero instead of marching past him: defend the actual north bridgehead. At normal difficulty
// (seed 1, hero invulnerable), an idle guard loses it in 27 s; Zhang Fei's N1→N3→C4 guard keeps 92% through the 150 s hold.
const BRIDGE = { key: 'bridge', at: DECK, r: 5, name: { zh: '长坂桥', en: 'Changban Bridge' } };
const NAG_ZY = { who: 'hero', zh: '主母与小主人尚在阵中，岂可回头！', en: 'Our lady and the young lord are still out there. I can\'t turn back now!' };
const NAG_ZY_FWD = { who: 'hero', zh: '先救眼前之人，再往前去！', en: 'Save the ones in front of me first, then ride on!' };
const NAG_HOME = { who: 'hero', zhaoyun: ['阿斗在怀，当速回长坂桥！', 'I have A Dou. Back to the bridge, now!'],
  zhangfei: ['子龙在后，俺岂能往前去！', 'Zilong is behind me. I\'m not riding further in!'] };
const NAG_ZF = { who: 'hero', zh: '俺的差事是守桥！岂能丢下桥头乱跑！', en: 'My job is this bridge. I\'m not running off and leaving it!' };

// Pacing (default difficulty), a scripted bot attacking nonstop — 赵云: slopes + 甘夫人 + 淳于导 2 min · 夏侯恩 1 min · the
// well 40 s · the ride back past 晏明 / 张郃 / 钟 brothers 2.5 min · the bridge 20 s ≈ 6.5 min, ≈ 2400 KOs. 张飞: the
// bridge 150 s (timer) · the ride out and 张郃 1.5 min · the ride back 1 min · the bridge stand 1.5-2 min ≈ 7 min. A human
// reading the lines and steering lands at ≈ 9-13 min. Rank thresholds: CH.rank.
export const BEATS = [
  // ================================================================ 赵云 — 单骑救主
  // ---- the bridge: 张飞 doubts him; into the slopes
  {
    hero: ZY, when: { wait: 30 },
    actors: { zhangfei: { kit: 'zhangfei', role: 'ally', at: ['bridge', 1.2, 5], yaw: 0 }, caocao: CAOCAO },
    actor: [{ key: 'zhangfei', do: 'hold', at: DECK }, { key: 'caocao', do: 'hold', at: CAO }],
    obj: { zh: '杀入长坂 寻找甘夫人', en: 'Ride into the slopes and find Lady Gan', go: ['gan', 0, 0] },
    squads: [{ at: ['slopes', -0.35, -0.72], n: 18 }, { at: ['slopes', 0.3, -0.6], n: 20 }, { at: ['slopes', -0.45, -0.3], n: 22 }, { at: ['slopes', 0.4, -0.15], n: 20 }],
    limit: { z: ['slopes', 0, 0.55], back: ['bridge', 0, 5], nag: NAG_ZY },
    morale: -0.1,
    say: [
      { who: 'mifang', zh: '主公！子龙引数骑往北去了，想必是投曹操去了！', en: 'My lord! Zilong has ridden north with a few horsemen. He must be going over to Cao Cao!' },
      { who: 'liubei', zh: '子龙是我故交，安肯反乎？', en: 'Zilong is my old friend. He would never betray me.' },
      { who: 'ally', zh: '子龙！你莫非降了曹贼？', en: 'Zilong! Don\'t tell me you\'ve gone over to that traitor Cao?' },
      { who: 'hero', zh: '翼德休疑！主母与小主人失散阵中，云此去，上天入地也要寻回！', en: 'Put your doubts away, Yide. Our lady and the young lord are lost in the fighting. I\'ll find them, in heaven or under the earth!' },
      { who: 'ally', zh: '好！俺就在这桥头等你。若是不回……哼！', en: 'Fine! I\'ll wait right here on this bridge. And if you don\'t come back... hmph!' },
    ],
  },
  {
    hero: ZY, when: [{ zone: 'slopes' }, { kos: 40 }],
    waves: true,
    say: [{ who: 'soldier', zh: '白袍将杀回来了！挡住他！', en: 'The general in white is coming back! Stop him!' }],
  },
  // ---- 甘夫人, then 淳于导 with 糜竺 in ropes
  {
    hero: ZY, when: { near: [['gan', 0, 0], 14] },
    banner: { html: '寻得 <em>甘夫人</em>', en: 'Lady Gan is found', dur: 150 },
    heal: 0.2,
    officers: { chunyu: { at: ['mizhu', 0, 4], engaged: true } },
    squads: [{ at: ['mizhu', -8, -4], n: 16, charge: true }, { at: ['gan', 10, 8], n: 16, charge: true }],
    obj: { zh: '击破淳于导 救出糜竺', en: 'Defeat Chunyu Dao and free Mi Zhu', go: 'chunyu' },
    say: [
      { who: 'gan', zh: '将军！妾与糜夫人抱着阿斗，乱军之中走散了……', en: 'General! Lady Mi and I had A Dou with us, but we were torn apart in the rout...' },
      { who: 'hero', zh: '主母勿忧，云必寻回小主人！', en: 'Take heart, my lady. I will bring the young lord back!' },
      { who: 'chunyu', zh: '糜竺已被我绑了！赵云，下一个就是你！', en: 'I\'ve got Mi Zhu tied up! You\'re next, Zhao Yun!' },
    ],
  },
  {
    hero: ZY, when: { down: 'chunyu' },
    banner: { html: '救出 <em>糜竺</em>', en: 'Mi Zhu is freed', dur: 150 },
    heal: 0.3, morale: 0.12, hush: true,
    officers: { xiahouen: { at: ['village', -0.05, -0.72] } },
    squads: [{ at: ['slopes', -0.3, 0.45], n: 20 }, { at: ['slopes', 0.35, 0.5], n: 20 }, { at: ['village', 0.2, -0.8], n: 18 }],
    obj: { zh: '北上当阳 寻找糜夫人与阿斗', en: 'Ride north to Dangyang and find Lady Mi and A Dou', go: ['village', 0, -0.9] },
    limit: { z: ['village', 0, -0.35], back: ['bridge', 0, 5], nag: NAG_ZY_FWD },
    say: [
      { who: 'mizhu', zh: '子龙将军！多谢相救！', en: 'General Zilong! I owe you my life!' },
      { who: 'hero', zh: '子仲先生，请护送主母往长坂桥去，云再去寻小主人！', en: 'Mi Zhu, take Lady Gan to the bridge. I\'m going back for the young lord!' },
    ],
  },
  // ---- 夏侯恩, 曹操's sword-bearer: the 青釭剑
  {
    hero: ZY, when: [{ at: ['village', 0, -1.1] }, { kos: 80, wait: 40 * 60 }],
    skip: { down: 'xiahouen' },
    obj: { zh: '击破曹操背剑将 夏侯恩', en: 'Defeat Cao Cao\'s sword-bearer, Xiahou En', go: 'xiahouen' },
    say: [
      { who: 'xiahouen', zh: '吾乃曹丞相背剑之将夏侯恩！此青釭剑削铁如泥，看剑！', en: 'I am Xiahou En, who carries the Chancellor\'s sword! This is the Qinggang blade. It cuts iron like mud!' },
      { who: 'hero', zh: '宝剑在你手中，可惜了！', en: 'A fine sword. Wasted in your hands!' },
    ],
  },
  {
    hero: ZY, when: { down: 'xiahouen' },
    buff: { atk: 1.5, zh: '夺得 <em>青釭剑</em> — 攻击力上升', en: 'The Qinggang sword is yours — attack up' },
    heal: 0.25, morale: 0.1, hush: true,
    squads: [{ at: ['village', -0.4, -0.3], n: 18 }, { at: ['village', 0.45, 0.1], n: 20 }, { at: ['well', -6, 12], n: 16 }],
    obj: { zh: '前往枯井 寻找糜夫人', en: 'Find Lady Mi by the old well', go: ['well', -3, 0] },
    limit: { z: ['well', 0, 16], back: ['bridge', 0, 5], nag: NAG_ZY_FWD },
    say: [
      { who: 'hero', zh: '剑柄金嵌「青釭」二字……果然是曹操的宝剑！', en: 'The hilt is inlaid with the word Qinggang in gold. Cao Cao\'s own sword!' },
      { who: 'villager', zh: '将军……有位夫人抱着孩儿，伤了腿，坐在那断墙边的枯井旁……', en: 'General... there\'s a lady with a baby, her leg\'s hurt. She\'s by the dry well, under the broken wall...' },
    ],
  },
  // ---- 糜夫人's well
  {
    hero: ZY, when: { near: [['well', 0, 0], 10] },
    banner: { html: '寻得 <em>糜夫人</em> 与 <em>阿斗</em>', en: 'Lady Mi and A Dou are found', dur: 160 },
    waves: false,
    say: [
      { who: 'mi', zh: '妾得见将军，阿斗有命矣！', en: 'Now that you are here, General, A Dou will live!' },
      { who: 'mi', zh: '此子全赖将军保护。妾已重伤，死何足惜！', en: 'I entrust this child to you. I am badly hurt — my death means nothing.' },
      { who: 'hero', zh: '夫人请上马，云步行死战，保夫人出重围！', en: 'Take my horse, my lady. I\'ll fight on foot and see you out of this!' },
      { who: 'mi', zh: '不可！将军岂可无马？望将军勿以妾为累……', en: 'No! What is a general without his horse? Do not let me be your burden...' },
    ],
  },
  {
    hero: ZY, when: { wait: 16 * 60 },
    banner: { html: '糜夫人 弃阿斗于地 翻身投入<em>枯井</em>', en: 'Lady Mi lays A Dou on the ground and throws herself into the well', dur: 200 },
    say: [
      { who: 'hero', zh: '夫人——！', en: 'My lady—!' },
      { who: 'hero', zh: '……不可教曹兵辱夫人遗体。推倒土墙，掩此枯井！', en: '...Cao\'s men will not defile her. I\'ll bring the wall down over the well!' },
    ],
  },
  {
    hero: ZY, when: { wait: 8 * 60 },
    set: 'well',
    banner: { html: '怀抱阿斗 <em>杀出重围</em>', en: 'A Dou in his arms, Zhao Yun cuts his way out', dur: 220, big: true },
    waves: true, heal: 0.3,
    officers: { yanming: { at: ['village', 0.1, -0.7], engaged: true } },
    squads: [{ at: ['well', 10, 14], n: 18, charge: true }, { at: ['well', -18, 8], n: 18, charge: true }, { at: ['village', -0.2, -0.55], n: 22 }, { at: ['village', 0.35, -0.7], n: 18 }],
    obj: { zh: '怀抱阿斗 杀回长坂桥', en: 'Carry A Dou back to Changban Bridge', go: DECK },
    limit: { z: ['well', 0, 10], back: ['village', 0, -1.05], nag: NAG_HOME },     // 晏明 bars the village's south edge
    say: [
      { who: 'hero', zh: '阿斗，抱紧了。云拼了性命，也要送你回主公身边！', en: 'Hold tight, A Dou. I\'ll see you back to your father if it costs my life!' },
      { who: 'yanming', zh: '晏明在此！赵云，把孩子留下！', en: 'Yan Ming stands here! Zhao Yun, leave the child!' },
    ],
  },
  // ---- the ride back: 晏明, 张郃, the 钟 brothers; 曹操 watches from 景山
  {
    hero: ZY, when: { down: 'yanming' },
    heal: 0.2, morale: 0.1,
    officers: { zhanghe: { at: ['slopes', 0.05, 0.2] } },
    squads: [{ at: ['slopes', -0.35, 0.3], n: 20 }, { at: ['slopes', 0.35, 0.1], n: 20 }, { at: ['village', 0, 0.2], n: 18, charge: true }],
    obj: { zh: '击破张郃', en: 'Defeat Zhang He', go: 'zhanghe' },
    limit: { z: ['well', 0, 10], back: ['slopes', 0, 0.05], nag: NAG_HOME },
    say: [
      { who: 'caocao', zh: '那白袍将是谁？', en: 'Who is that general in white?' },
      { who: 'caohong', zh: '禀丞相，此乃常山赵子龙！', en: 'That is Zhao Zilong of Changshan, Chancellor!' },
      { who: 'caocao', zh: '真虎将也！传令各处：只要活的，不许放冷箭！', en: 'A tiger of a general! Pass the word: take him alive — no arrows from cover!' },
      { who: 'zhanghe', zh: '赵云！你走不了了！', en: 'Zhao Yun! This is as far as you go!' },
    ],
  },
  {
    hero: ZY, when: { down: 'zhanghe' },
    heal: 0.25, morale: 0.1, hush: true,
    officers: { zhongjin: { at: ['bridge', -10, 27], engaged: true }, zhongshen: { at: ['bridge', 10, 27], engaged: true } },
    squads: [{ at: ['bridge', -16, 31], n: 18 }, { at: ['bridge', 16, 33], n: 18 }, { at: ['slopes', 0, 0.3], n: 20, charge: true }],
    obj: { zh: '击破钟缙、钟绅', en: 'Defeat Zhong Jin and Zhong Shen', go: 'zhongjin' },
    limit: { z: ['well', 0, 10], back: ['bridge', 0, 18], nag: NAG_HOME },   // the brothers bar the bridge foot
    say: [
      { who: 'hero', zh: '张郃之勇，名不虚传……然今日云不能恋战！', en: 'Zhang He lives up to his name... but I can\'t stay to fight him today!' },
      { who: 'zhongjin', zh: '钟缙、钟绅兄弟在此！赵云休走！', en: 'The brothers Zhong Jin and Zhong Shen! You\'re not getting past, Zhao Yun!' },
    ],
  },
  {
    hero: ZY, when: { down: 'zhongjin' },
    obj: { zh: '击破钟绅', en: 'Defeat Zhong Shen', go: 'zhongshen' },
    say: [{ who: 'zhongshen', zh: '兄长！赵云，我与你拼了！', en: 'Brother! Zhao Yun, you\'ll pay for that!' }],
  },
  {
    hero: ZY, when: { down: 'zhongshen' },
    heal: 0.2, morale: 0.15, hush: true,
    obj: { zh: '退回长坂桥', en: 'Get back to the bridge', go: DECK },
    limit: { z: ['well', 0, 10], back: ['bridge', 0, 5], nag: NAG_HOME },
    squads: [{ at: ['slopes', -0.2, -0.55], n: 18, charge: true }, { at: ['slopes', 0.2, -0.3], n: 18, charge: true }],
    say: [{ who: 'hero', zh: '翼德！援我！', en: 'Yide! To me!' }],
  },
  // ---- the bridge: 张飞's roar
  {
    hero: ZY, when: { near: [DECK, 14] },
    banner: { html: '长坂桥头<em>一声断喝</em> — 追兵止步', en: 'A thunderous challenge checks the pursuit at Changban Bridge', dur: 240, big: true },
    waves: false, morale: 0.3, hush: true,
    actor: { key: 'zhangfei', do: 'hold', at: ['bridge', 0, 12] },
    say: [
      { who: 'ally', zh: '子龙快走！追兵有俺！', en: 'Go, Zilong! Leave the pursuit to me!' },
      { who: 'ally', zh: '俺把蛇矛横在这里，看哪个敢踏上桥板！', en: 'My spear bars these planks. Send forward the man willing to cross its point!' },
      { who: 'soldier', zh: '夏侯杰……夏侯杰将军吓得肝胆碎裂，坠马死了！', en: 'General Xiahou Jie... the roar split his gall — he fell from his horse, dead!' },
    ],
  },
  {
    hero: ZY, when: { wait: 9 * 60 },
    win: true, morale: 1,
    banner: { html: '<em>单骑救主</em> — 阿斗 平安', en: 'Alone, he saved his lord\'s son — A Dou is safe', dur: 260, big: true },
    say: [{ who: 'hero', zh: '主公！小主人……安然无恙！', en: 'My lord! Your son... is safe and sound!' }],
  },

  // ================================================================ 张飞 — 据水断桥
  // ---- hold the bridge (a timer, the dust ruse in the woods)
  {
    hero: ZF, when: { wait: 30 },
    actors: { caocao: CAOCAO }, actor: { key: 'caocao', do: 'hold', at: CAO },
    defend: { ...BRIDGE, hp: 600 },
    fail: { when: { hp: ['bridge', 0.01] }, zh: '长坂桥 失守……', en: 'Changban Bridge has fallen...' },
    obj: { zh: '据守长坂桥', en: 'Hold Changban Bridge', go: DECK, timer: 150 },
    squads: [{ at: ['bridge', -12, 33], n: 18 }, { at: ['bridge', 14, 36], n: 18 }, { at: ['slopes', -0.2, -0.82], n: 20 }],
    limit: { z: ['slopes', 0, -0.75], back: ['bridge', 0, -6], nag: NAG_ZF },
    morale: -0.1,
    say: [
      { who: 'liubei', zh: '翼德，你领二十骑断后，务必挡住曹兵！', en: 'Yide, take twenty riders and hold the rear. Cao\'s men must not get through!' },
      { who: 'hero', zh: '哥哥只管走！有俺在，一个曹兵也休想过桥！', en: 'Just go, brother! While I\'m here, not one of Cao\'s men crosses this bridge!' },
      { who: 'hero', zh: '儿郎们！砍下树枝拴在马尾上，去林中来回奔驰，扬起尘土，教曹贼疑有伏兵！', en: 'Lads! Cut branches, tie them to your horses\' tails and ride back and forth in the woods. Kick up dust — make Cao think there\'s an ambush!' },
    ],
  },
  {
    hero: ZF, when: [{ kos: 40 }, { wait: 20 * 60 }],
    waves: true,
    squads: [{ at: ['bridge', 0, 34], n: 20, charge: true }],
    say: [
      { who: 'soldier', zh: '桥南林中尘头大起……莫非有伏兵？', en: 'Look at the dust in the woods past the bridge... is there an ambush?' },
      { who: 'soldier', zh: '怕甚么！桥上只有一个人！', en: 'What of it? There\'s only one man on that bridge!' },
    ],
  },
  {
    hero: ZF, when: { wait: 45 * 60 },
    officers: { caochun: { at: ['bridge', 0, 31], engaged: true } },
    squads: [{ at: ['bridge', -16, 30], n: 16, charge: true }, { at: ['bridge', 16, 31], n: 16, charge: true }],
    say: [
      { who: 'caochun', zh: '虎豹骑曹纯在此！张飞，让开道路！', en: 'Cao Chun of the Tiger and Leopard Riders! Out of the way, Zhang Fei!' },
      { who: 'hero', zh: '虎豹骑？俺看是豺狗骑！来！', en: 'Tigers and leopards? Jackals, more like! Come on!' },
    ],
  },
  // ---- 简雍's news: 子龙 is out there alone — ride out to meet him
  {
    hero: ZF, when: { timer: true },
    banner: { html: '<em>长坂桥</em> 守住了', en: 'The bridge holds', dur: 150 },
    defend: null, fail: null, heal: 0.35, morale: 0.12, hush: true,
    obj: { zh: '杀入当阳 接应赵云', en: 'Ride into Dangyang and bring Zhao Yun out', go: ['slopes', 0, 0.35] },
    limit: { z: ['village', 0, -0.3], back: ['bridge', 0, -6], nag: NAG_ZF },
    squads: [{ at: ['slopes', -0.35, -0.4], n: 20 }, { at: ['slopes', 0.3, -0.1], n: 20 }, { at: ['slopes', -0.2, 0.2], n: 22 }],
    say: [
      { who: 'jianyong', zh: '三将军！子龙将军单骑杀回曹营，至今未归！', en: 'General! Zilong rode back into Cao\'s army alone, and he hasn\'t come back!' },
      { who: 'hero', zh: '甚么？糜芳说他投曹去了……', en: 'What? Mi Fang said he\'d gone over to Cao...' },
      { who: 'jianyong', zh: '子龙将军是去寻主母与小主人啊！', en: 'He went back for our lady and the young lord!' },
      { who: 'hero', zh: '……俺错怪他了！桥头交给你，俺去接他回来！', en: '...Then I wronged him! Hold the bridge — I\'m going to bring him back!' },
    ],
  },
  {
    hero: ZF, when: { at: ['slopes', 0, 0.35] },
    officers: { zhanghe: { at: ['village', 0, -0.72], engaged: true } },
    squads: [{ at: ['village', -0.3, -0.85], n: 20 }, { at: ['village', 0.3, -0.8], n: 20 }, { at: ['slopes', 0, 0.75], n: 18, charge: true }],
    obj: { zh: '击破张郃', en: 'Defeat Zhang He', go: 'zhanghe' },
    say: [
      { who: 'zhanghe', zh: '赵云已陷重围，又来一个送死的！', en: 'Zhao Yun is already surrounded, and here comes another fool to die!' },
      { who: 'hero', zh: '张郃！挡俺者死！', en: 'Zhang He! Whoever stands in my way dies!' },
    ],
  },
  {
    hero: ZF, when: { down: 'zhanghe' },
    banner: { html: '<em>赵云</em> 怀抱阿斗 杀出重围', en: 'Zhao Yun breaks out with A Dou in his arms', dur: 180 },
    heal: 0.3, morale: 0.15, hush: true,
    actors: { zhaoyun: { kit: 'zhaoyun', role: 'ally', at: ['village', 0.1, -0.45] } },
    actor: { key: 'zhaoyun', do: 'follow' },
    squads: [{ at: ['village', -0.35, -0.2], n: 18, charge: true }, { at: ['village', 0.35, -0.3], n: 18, charge: true }, { at: ['slopes', -0.3, 0.1], n: 20 }, { at: ['slopes', 0.3, -0.3], n: 20 }],
    obj: { zh: '护送赵云 退回长坂桥', en: 'Escort Zhao Yun back to the bridge', go: DECK },
    limit: { z: ['village', 0, -0.3], nag: NAG_HOME },
    say: [
      { who: 'ally', zh: '翼德！阿斗在此，安然无恙！', en: 'Yide! A Dou is here, safe and sound!' },
      { who: 'hero', zh: '子龙！好兄弟，俺错怪你了！', en: 'Zilong! Brother, I misjudged you!' },
      { who: 'ally', zh: '追兵甚众，速回长坂桥！', en: 'There are too many of them. Back to the bridge!' },
      { who: 'hero', zh: '你只管走，俺替你断后！', en: 'You ride. I\'ll cover you!' },
    ],
  },
  {
    hero: ZF, when: south(-40),
    squads: [{ at: ['slopes', -0.4, -0.6], n: 18, charge: true }, { at: ['slopes', 0.4, -0.5], n: 18, charge: true }],
    say: [
      { who: 'caocao', zh: '那黑脸大汉是何人？', en: 'Who is that black-faced giant?' },
      { who: 'caohong', zh: '禀丞相，此乃张飞张翼德！', en: 'That is Zhang Fei, Zhang Yide, Chancellor!' },
      { who: 'caocao', zh: '吾曾闻云长言：翼德于百万军中取上将之首，如探囊取物。诸将不可轻敌！', en: 'Guan Yu once told me Yide could take a general\'s head in an army of a million like picking a pocket. Take no chances!' },
    ],
  },
  // ---- alone on the bridge: 曹洪, 许褚, then the roar and 夏侯杰
  {
    hero: ZF, when: { near: [DECK, 14] },
    actor: { key: 'zhaoyun', do: 'hold', at: ['bridge', 0, -24] },
    defend: { ...BRIDGE, hp: 500 },
    fail: { when: { hp: ['bridge', 0.01] }, zh: '长坂桥 失守……', en: 'Changban Bridge has fallen...' },
    heal: 0.3, waves: true,
    officers: { caohong: { at: ['bridge', -14, 33], engaged: true }, xuchu: { at: ['bridge', 14, 34], engaged: true } },
    squads: [{ at: ['bridge', -20, 31], n: 18, charge: true }, { at: ['bridge', 20, 33], n: 18, charge: true }, { at: ['slopes', 0, -0.8], n: 20, charge: true }],
    obj: { zh: '独守长坂桥 击破曹洪、许褚', en: 'Hold the bridge alone — defeat Cao Hong and Xu Chu', go: 'xuchu' },
    limit: { z: ['bridge', 0, 20], back: ['bridge', 0, -6], nag: NAG_ZF },
    say: [
      { who: 'ally', zh: '翼德，你呢？', en: 'Yide, what about you?' },
      { who: 'hero', zh: '你过桥去见哥哥！这座桥，交给俺！', en: 'Get across and find my brother! This bridge is mine!' },
      { who: 'caohong', zh: '他只有一个人！一齐上！', en: 'He\'s one man! All together!' },
      { who: 'xuchu', zh: '许褚在此！黑厮，吃俺一刀！', en: 'Xu Chu is here! Try this, you black-faced brute!' },
    ],
  },
  {
    hero: ZF, when: [{ down: 'caohong' }, { down: 'xuchu' }, { wait: 50 * 60 }],
    banner: { html: '张飞横矛<em>立断桥头</em> — 曹军胆落', en: 'Zhang Fei holds the crossing; the pursuit loses its nerve', dur: 260, big: true },
    morale: 0.25, waves: false, heal: 0.2,
    officers: { xiahoujie: { at: ['bridge', 0, 30], engaged: true } },
    obj: { zh: '击破夏侯杰', en: 'Defeat Xiahou Jie', go: 'xiahoujie' },
    say: [
      { who: 'hero', zh: '俺替兄长守住这条退路！哪个不怕死，便踩上这座桥！', en: 'This road stays open for my brother. Step onto my bridge if your life means so little!' },
      { who: 'hero', zh: '喊杀声倒是不小，怎么一个个只敢站在岸上？', en: 'An army of loud voices, yet every pair of feet stays ashore!' },
      { who: 'caocao', zh: '……这一声，如巨雷一般。', en: '...That voice. Like a thunderclap.' },
      { who: 'xiahoujie', zh: '啊……啊啊……！', en: 'Ah... ahh...!' },
    ],
  },
  {
    hero: ZF, when: { down: 'xiahoujie' },
    win: true, set: 'bridge', waves: false, morale: 1,
    banner: { html: '夏侯杰 肝胆碎裂 — <em>据水断桥</em>', en: 'Xiahou Jie falls, his courage shattered — Zhang Fei holds the river and breaks the bridge', dur: 260, big: true },
    say: [{ who: 'hero', zh: '哈哈哈！拆了这桥，看你们怎么过河！', en: 'Ha! There goes the bridge. Let\'s see you cross now!' }],
  },
];

// ---- prologue ink map of 荆州北部 (viewBox 1600×900): 汉水 from 樊城/襄阳 down to 汉津, 当阳长坂, 江陵, the flight
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
const HAN = 'M-20 170 C220 150 420 200 640 205 S900 230 1010 330 S1080 520 1150 640 S1300 820 1420 930';
const ZHANG = 'M300 360 C360 460 420 520 500 590 S600 700 640 760';                    // 沮漳水 past 当阳 toward 江陵
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[80, 330, 1.1], [190, 300], [300, 345, 1.2], [140, 480, 0.9], [250, 520, 1.1], [120, 640], [230, 700, 1.2], [110, 820, 1.1]], 120, 90)}
    ${peaks([[1250, 140, 0.9], [1380, 180, 1.1], [1500, 150], [1560, 260, 0.9]], 110, 90)}
    ${peaks([[640, 520, 0.6], [700, 505, 0.75]], 100, 70)}
  </g>
  <g class="pl-mark" data-id="jingshan" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[760, 470, 0.8], [820, 455, 1.05]], 130, 70)}</g>
  <g class="pl-mark" data-id="river" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${HAN}" stroke="#6f7c78" stroke-width="30" opacity=".35"/><path d="${HAN}" stroke="#46524f" stroke-width="7" opacity=".7"/>
    <path d="${ZHANG}" stroke="#6f7c78" stroke-width="16" opacity=".3"/><path d="${ZHANG}" stroke="#46524f" stroke-width="4" opacity=".6"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="fancheng"><rect x="600" y="118" width="32" height="32" rx="3"/><text x="650" y="145">樊城</text></g>
    <g class="pl-mark wei" data-id="xiangyang"><rect x="622" y="236" width="36" height="36" rx="3"/><text x="676" y="265">襄阳</text></g>
    <g class="pl-mark" data-id="changban"><text x="590" y="600">长坂</text><text class="sm" x="520" y="660">当阳</text></g>
    <g class="pl-mark wei" data-id="jingshan"><text class="sm" x="850" y="500">景山 曹操</text></g>
    <g class="pl-mark" data-id="jiangling"><rect x="600" y="790" width="32" height="32" rx="3"/><text x="650" y="818">江陵</text></g>
    <g class="pl-mark" data-id="hanjin"><rect x="1118" y="600" width="30" height="30" rx="3"/><text x="1166" y="626">汉津</text></g>
    <g class="pl-mark" data-id="river"><text class="sm river" x="840" y="200">汉 水</text></g>
  </g>`,
  arrows: [
    ['liu1', 'shu', 'M630 150 C650 200 650 240 640 260'],
    ['cao1', 'wei', 'M760 20 C720 80 690 150 660 240'],
    ['liu2', 'shu', 'M640 290 C630 380 610 470 600 560'],
    ['cao2', 'wei', 'M690 280 C760 360 740 470 660 560'],
    ['liu3', 'shu', 'M620 590 C760 640 940 630 1110 615'],
    ['guan', 'shu', 'M1030 390 C1070 460 1110 520 1130 590'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['建安十三年秋', '曹操大军南下', '刘琮举荆州而降'], en: 'Autumn, 208 AD. Cao Cao marches south in force, and Liu Cong surrenders Jing Province without a fight.',
    show: ['cao1', 'fancheng', 'xiangyang', 'river'], focus: [680, 220, 1.2] },
  { cols: ['刘备弃樊城南走', '荆州百姓十余万相随', '日行十余里'], en: 'Liu Bei abandons Fancheng and flees south. A hundred thousand people follow him — ten li a day.',
    show: ['liu1', 'liu2'], focus: [640, 400, 1.15] },
  { cols: ['曹操亲率虎豹骑', '一日一夜行三百里', '追及当阳长坂'], en: 'Cao Cao leads his Tiger and Leopard Riders three hundred li in a day and a night, and overtakes them at Changban.',
    show: ['cao2', 'changban', 'jingshan'], focus: [700, 540, 1.3] },
  { zhaoyun: { cols: ['刘备弃妻子而走', '赵云不见主母', '单骑复入重围'], en: 'Liu Bei flees, leaving his family behind. Zhao Yun cannot find his lord\'s wife and son, and rides back into the host alone.' },
    zhangfei: { cols: ['刘备令张飞', '将二十骑拒后', '据水断桥'], en: 'Liu Bei orders Zhang Fei to hold the rear with twenty riders — at the river, at the bridge.' },
    show: ['jiangling'], focus: [620, 600, 1.45] },
  { cols: ['东走汉津', '云长舟师在江上', '长坂一战 在此一举'], en: 'East lies Hanjin, where Guan Yu\'s boats wait on the river. Everything turns on Changban.',
    show: ['liu3', 'guan', 'hanjin'], focus: [860, 560, 1.05] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  zhaoyun: {
    zh: ['赵云身抱弱子，即后主也；保护甘夫人，即后主母也，皆得免难。', '刘备掷阿斗于地曰：「为汝这孺子，几损我一员大将！」迁赵云为牙门将军。'],
    en: ['Zhao Yun carried the infant — the future emperor — in his arms and kept Lady Gan safe; both escaped.',
      'Liu Bei set the child on the ground and said: "For this little one I nearly lost a great general!" Zhao Yun was made General of the Standard.'],
  },
  zhangfei: {
    zh: ['飞据水断桥，瞋目横矛曰：「身是张益德也，可来共决死！」敌皆无敢近者。', '刘备遂斜趋汉津，与关羽船会，得济沔水，至夏口。'],
    en: ['Zhang Fei held the river, broke the bridge, and glared over his leveled spear: "I am Zhang Yide! Come and die with me!" None dared come near.',
      'Liu Bei turned east to Hanjin, met Guan Yu\'s boats, crossed the Mian, and reached Xiakou.'],
  },
};
