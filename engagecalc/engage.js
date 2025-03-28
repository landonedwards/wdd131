const characters = [
    { id: 1, charName: "Alear", HP: 60, Str: 35, Mag: 20, Dex: 45, Spd: 50, Def: 40, Res: 25, Lck: 25, Bld: 5, image: "images/char-sprite/alear.png" },
    { id: 2, charName: "Vander", HP: 60, Str: 25, Mag: 10, Dex: 25, Spd: 35, Def: 35, Res: 20, Lck: 10, Bld: 5, image: "images/char-sprite/vander.png" },
    { id: 3, charName: "Clanne", HP: 40, Str: 35, Mag: 10, Dex: 40, Spd: 50, Def: 30, Res: 25, Lck: 20, Bld: 5, image: "images/char-sprite/clanne.png" },
    { id: 4, charName: "Framme", HP: 55, Str: 30, Mag: 25, Dex: 35, Spd: 55, Def: 25, Res: 30, Lck: 25, Bld: 0, image: "images/char-sprite/framme.png" },
    { id: 5, charName: "Alfred", HP: 65, Str: 40, Mag: 5, Dex: 35, Spd: 40, Def: 40, Res: 20, Lck: 40, Bld: 10, image: "images/char-sprite/alfred.png" },
    { id: 6, charName: "Etie", HP: 45, Str: 40, Mag: 0, Dex: 25, Spd: 35, Def: 25, Res: 30, Lck: 25, Bld: 5, image: "images/char-sprite/etie.png" },
    { id: 7, charName: "Boucheron", HP: 85, Str: 20, Mag: 0, Dex: 50, Spd: 45, Def: 35, Res: 20, Lck: 15, Bld: 20, image: "images/char-sprite/boucheron.png" },
    { id: 8, charName: "Celine", HP: 50, Str: 35, Mag: 25, Dex: 30, Spd: 45, Def: 30, Res: 40, Lck: 50, Bld: 5, image: "images/char-sprite/celine.png" },
    { id: 9, charName: "Chloe", HP: 75, Str: 25, Mag: 35, Dex: 40, Spd: 55, Def: 30, Res: 25, Lck: 25, Bld: 5, image: "images/char-sprite/chloe.png" },
    { id: 10, charName: "Louis", HP: 75, Str: 40, Mag: 0, Dex: 25, Spd: 25, Def: 50, Res: 20, Lck: 25, Bld: 15, image: "images/char-sprite/louis.png" },
    { id: 11, charName: "Yunaka", HP: 50, Str: 35, Mag: 25, Dex: 40, Spd: 45, Def: 15, Res: 45, Lck: 25, Bld: 5, image: "images/char-sprite/yunaka.png" },
    { id: 12, charName: "Alcryst", HP: 65, Str: 30, Mag: 10, Dex: 40, Spd: 45, Def: 30, Res: 20, Lck: 15, Bld: 10, image: "images/char-sprite/alcryst.png" },
    { id: 13, charName: "Citrinne", HP: 45, Str: 10, Mag: 40, Dex: 25, Spd: 30, Def: 20, Res: 40, Lck: 25, Bld: 5, image: "images/char-sprite/citrinne.png" },
    { id: 14, charName: "Lapis", HP: 55, Str: 25, Mag: 20, Dex: 35, Spd: 55, Def: 35, Res: 30, Lck: 25, Bld: 5, image: "images/char-sprite/lapis.png" },
    { id: 15, charName: "Diamant", HP: 75, Str: 30, Mag: 15, Dex: 20, Spd: 40, Def: 40, Res: 25, Lck: 20, Bld: 15, image: "images/char-sprite/diamant.png" },
    { id: 16, charName: "Amber", HP: 65, Str: 45, Mag: 0, Dex: 25, Spd: 30, Def: 35, Res: 5, Lck: 35, Bld: 15, image: "images/char-sprite/amber.png" },
    { id: 17, charName: "Jade", HP: 55, Str: 35, Mag: 25, Dex: 35, Spd: 30, Def: 40, Res: 30, Lck: 20, Bld: 10, image: "images/char-sprite/jade.png" },
    { id: 18, charName: "Ivy", HP: 55, Str: 25, Mag: 30, Dex: 25, Spd: 40, Def: 30, Res: 35, Lck: 15, Bld: 10, image: "images/char-sprite/ivy.png" },
    { id: 19, charName: "Kagetsu", HP: 60, Str: 30, Mag: 15, Dex: 50, Spd: 50, Def: 40, Res: 25, Lck: 40, Bld: 10, image: "images/char-sprite/kagetsu.png" },
    { id: 20, charName: "Zelkov", HP: 65, Str: 35, Mag: 15, Dex: 40, Spd: 35, Def: 35, Res: 15, Lck: 25, Bld: 10, image: "images/char-sprite/zelkov.png" },
    { id: 21, charName: "Fogado", HP: 60, Str: 30, Mag: 25, Dex: 30, Spd: 55, Def: 30, Res: 35, Lck: 25, Bld: 10, image: "images/char-sprite/fogado.png" },
    { id: 22, charName: "Pandreo", HP: 60, Str: 5, Mag: 30, Dex: 45, Spd: 45, Def: 15, Res: 55, Lck: 30, Bld: 15, image: "images/char-sprite/pandreo.png" },
    { id: 23, charName: "Bunet", HP: 65, Str: 30, Mag: 10, Dex: 40, Spd: 35, Def: 45, Res: 25, Lck: 40, Bld: 10, image: "images/char-sprite/bunet.png" },
    { id: 24, charName: "Timerra", HP: 55, Str: 25, Mag: 25, Dex: 45, Spd: 45, Def: 30, Res: 30, Lck: 30, Bld: 10, image: "images/char-sprite/timerra.png" },
    { id: 25, charName: "Panette", HP: 75, Str: 45, Mag: 10, Dex: 40, Spd: 25, Def: 30, Res: 15, Lck: 20, Bld: 15, image: "images/char-sprite/panette.png" },
    { id: 26, charName: "Merrin", HP: 55, Str: 25, Mag: 25, Dex: 40, Spd: 50, Def: 30, Res: 30, Lck: 25, Bld: 10, image: "images/char-sprite/merrin.png" },
    { id: 27, charName: "Hortensia", HP: 40, Str: 20, Mag: 20, Dex: 35, Spd: 50, Def: 25, Res: 55, Lck: 50, Bld: 0, image: "images/char-sprite/hortensia.png" },
    { id: 28, charName: "Seadall", HP: 55, Str: 25, Mag: 15, Dex: 25, Spd: 50, Def: 25, Res: 25, Lck: 35, Bld: 10, image: "images/char-sprite/seadall.png" },
    { id: 29, charName: "Rosado", HP: 75, Str: 45, Mag: 25, Dex: 40, Spd: 45, Def: 30, Res: 30, Lck: 20, Bld: 5, image: "images/char-sprite/rosado.png" },
    { id: 30, charName: "Goldmary", HP: 65, Str: 30, Mag: 5, Dex: 25, Spd: 25, Def: 55, Res: 25, Lck: 25, Bld: 5, image: "images/char-sprite/goldmary.png" },
    { id: 31, charName: "Lindon", HP: 65, Str: 25, Mag: 25, Dex: 25, Spd: 40, Def: 25, Res: 40, Lck: 15, Bld: 10, image: "images/char-sprite/lindon.png" },
    { id: 32, charName: "Saphir", HP: 80, Str: 35, Mag: 0, Dex: 25, Spd: 30, Def: 30, Res: 5, Lck: 20, Bld: 10, image: "images/char-sprite/saphir.png" },
    { id: 33, charName: "Veyle", HP: 40, Str: 25, Mag: 45, Dex: 35, Spd: 30, Def: 25, Res: 35, Lck: 20, Bld: 0, image: "images/char-sprite/veyle.png" },
    { id: 34, charName: "Mauvier", HP: 70, Str: 35, Mag: 40, Dex: 40, Spd: 35, Def: 50, Res: 45, Lck: 15, Bld: 15, image: "images/char-sprite/mauvier.png" },
    { id: 35, charName: "Anna", HP: 55, Str: 15, Mag: 50, Dex: 50, Spd: 50, Def: 20, Res: 35, Lck: 45, Bld: 5, image: "images/char-sprite/anna.png" },
    { id: 36, charName: "Madeline", HP: 75, Str: 50, Mag: 20, Dex: 15, Spd: 15, Def: 55, Res: 25, Lck: 25, Bld: 10, image: "images/char-sprite/madeline.png" }
]

const classes = [
    { id: 1, className: "Dragon Child", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 15, Def: 10, Res: 10, Lck: 5, Bld: 5, weaponType: ["Sword"] },
    { id: 2, className: "Divine Dragon", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: 10, Bld: 5, weaponType: ["Sword", "Arts"] },
    { id: 3, className: "Fell Child", HP: 10, Str: 10, Mag: 25, Dex: 10, Spd: 5, Def: 10, Res: 25, Lck: 0, Bld: 0, weaponType: ["Knife", "Tome"] },
    { id: 4, className: "Noble (Alfred)", HP: 15, Str: 15, Mag: 0, Dex: 5, Spd: 5, Def: 20, Res: 5, Lck: 15, Bld: 0, weaponType: ["Lance"] },
    { id: 5, className: "Avenir", HP: 15, Str: 15, Mag: 0, Dex: 5, Spd: 10, Def: 25, Res: 5, Lck: 20, Bld: 5, weaponType: ["Sword", "Lance"] },
    { id: 6, className: "Noble (Céline)", HP: 0, Str: 5, Mag: 10, Dex: 5, Spd: 5, Def: 5, Res: 10, Lck: 20, Bld: 0, weaponType: ["Sword", "Tome"] },
    { id: 7, className: "Vidame", HP: 5, Str: 10, Mag: 15, Dex: 5, Spd: 5, Def: 5, Res: 15, Lck: 20, Bld: 0, weaponType: ["Sword", "Tome", "Staff"] },
    { id: 8, className: "Lord (Diamant)", HP: 15, Str: 20, Mag: 0, Dex: 10, Spd: 10, Def: 10, Res: 0, Lck: 5, Bld: 0, weaponType: ["Sword"] },
    { id: 9, className: "Successeur", HP: 15, Str: 20, Mag: 0, Dex: 10, Spd: 15, Def: 15, Res: 0, Lck: 10, Bld: 5, weaponType: ["Sword", "Axe"] },
    { id: 10, className: "Lord (Alcryst)", HP: 10, Str: 10, Mag: 0, Dex: 25, Spd: 10, Def: 10, Res: 0, Lck: 5, Bld: 0, weaponType: ["Bow"] },
    { id: 11, className: "Tireur d’élite", HP: 10, Str: 10, Mag: 0, Dex: 30, Spd: 10, Def: 15, Res: 5, Lck: 5, Bld: 0, weaponType: ["Bow"] },
    { id: 12, className: "Wing Tamer (Ivy)", HP: 5, Str: 0, Mag: 20, Dex: 0, Spd: 0, Def: 10, Res: 20, Lck: 0, Bld: 0, weaponType: ["Tome", "Staff"] },
    { id: 13, className: "Lindwurm", HP: 5, Str: 0, Mag: 25, Dex: 5, Spd: 0, Def: 15, Res: 25, Lck: 0, Bld: 0, weaponType: ["Tome", "Staff"] },
    { id: 14, className: "Wing Tamer (Hortensia)", HP: 0, Str: 0, Mag: 15, Dex: 10, Spd: 10, Def: 0, Res: 25, Lck: 10, Bld: 0, weaponType: ["Tome", "Staff"] },
    { id: 15, className: "Sleipnir Rider", HP: 0, Str: 0, Mag: 20, Dex: 15, Spd: 15, Def: 0, Res: 30, Lck: 15, Bld: 0, weaponType: ["Tome", "Staff"] },
    { id: 16, className: "Sentinel (Timerra)", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 5, Def: 20, Res: 0, Lck: 5, Bld: 0, weaponType: ["Lance"] },
    { id: 17, className: "Picket", HP: 10, Str: 15, Mag: 0, Dex: 10, Spd: 10, Def: 20, Res: 5, Lck: 5, Bld: 5, weaponType: ["Lance"] },
    { id: 18, className: "Sentinel (Fogado)", HP: 10, Str: 5, Mag: 0, Dex: 15, Spd: 15, Def: 5, Res: 15, Lck: 0, Bld: 0, weaponType: ["Bow"] },
    { id: 19, className: "Cupido", HP: 10, Str: 5, Mag: 5, Dex: 20, Spd: 20, Def: 5, Res: 20, Lck: 0, Bld: 0, weaponType: ["Sword", "Bow"] },
    { id: 20, className: "Sword Fighter", HP: 10, Str: 10, Mag: 0, Dex: 15, Spd: 20, Def: 0, Res: 15, Lck: 10, Bld: 0, weaponType: ["Sword"] },
    { id: 21, className: "Swordmaster", HP: 10, Str: 10, Mag: 0, Dex: 15, Spd: 20, Def: 0, Res: 15, Lck: 15, Bld: 0, weaponType: ["Sword"] },
    { id: 22, className: "Hero", HP: 15, Str: 15, Mag: 0, Dex: 10, Spd: 15, Def: 0, Res: 10, Lck: 15, Bld: 0, weaponType: ["Sword", "Lance", "Axe"] },
    { id: 23, className: "Lance Fighter", HP: 10, Str: 10, Mag: 5, Dex: 20, Spd: 5, Def: 10, Res: 5, Lck: 0, Bld: 0, weaponType: ["Lance"] },
    { id: 24, className: "Halberdier", HP: 10, Str: 15, Mag: 5, Dex: 20, Spd: 10, Def: 15, Res: 5, Lck: 5, Bld: 0, weaponType: ["Lance"] },
    { id: 25, className: "Royal Knight", HP: 5, Str: 10, Mag: 15, Dex: 15, Spd: 15, Def: 5, Res: 20, Lck: 10, Bld: 0, weaponType: ["Lance", "Staff"] },
    { id: 26, className: "Axe Fighter", HP: 25, Str: 20, Mag: 0, Dex: 5, Spd: 10, Def: 5, Res: 0, Lck: 0, Bld: 5, weaponType: ["Axe"] },
    { id: 27, className: "Berserker", HP: 30, Str: 30, Mag: 0, Dex: 5, Spd: 10, Def: 5, Res: 0, Lck: 0, Bld: 10, weaponType: ["Axe"] },
    { id: 28, className: "Warrior", HP: 25, Str: 20, Mag: 0, Dex: 10, Spd: 15, Def: 10, Res: 5, Lck: 0, Bld: 5, weaponType: ["Axe", "Bow"] },
    { id: 29, className: "Archer", HP: 10, Str: 15, Mag: 0, Dex: 25, Spd: 10, Def: 5, Res: 0, Lck: 5, Bld: 0, weaponType: ["Bow"] },
    { id: 30, className: "Sniper", HP: 15, Str: 15, Mag: 0, Dex: 30, Spd: 10, Def: 10, Res: 0, Lck: 10, Bld: 0, weaponType: ["Bow"] },
    { id: 31, className: "Bow Knight", HP: 10, Str: 10, Mag: 0, Dex: 20, Spd: 20, Def: 0, Res: 15, Lck: 15, Bld: 0, weaponType: ["Bow", "Sword", "Lance", "Axe"] },
    { id: 32, className: "Sword Armor", HP: 20, Str: 15, Mag: 0, Dex: 10, Spd: 0, Def: 30, Res: 0, Lck: 0, Bld: 5, weaponType: ["Sword"] },
    { id: 33, className: "Lance Armor", HP: 20, Str: 15, Mag: 0, Dex: 10, Spd: 0, Def: 30, Res: 0, Lck: 0, Bld: 5, weaponType: ["Lance"] },
    { id: 34, className: "Axe Armor", HP: 20, Str: 15, Mag: 0, Dex: 10, Spd: 0, Def: 30, Res: 0, Lck: 0, Bld: 5, weaponType: ["Axe"] },
    { id: 35, className: "General", HP: 25, Str: 20, Mag: 0, Dex: 10, Spd: 0, Def: 30, Res: 0, Lck: 0, Bld: 10, weaponType: ["Sword", "Lance", "Axe"] },
    { id: 36, className: "Great Knight", HP: 20, Str: 15, Mag: 0, Dex: 15, Spd: 0, Def: 25, Res: 10, Lck: 5, Bld: 5, weaponType: ["Sword", "Lance", "Axe"] },
    { id: 37, className: "Sword Cavalier", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: 0, weaponType: ["Sword"] },
    { id: 38, className: "Lance Cavalier", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: 0, weaponType: ["Lance"] },
    { id: 39, className: "Axe Cavalier", HP: 10, Str: 10, Mag: 0, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: 0, weaponType: ["Axe"] },
    { id: 40, className: "Paladin", HP: 15, Str: 15, Mag: 0, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: 10, Bld: 0, weaponType: ["Sword", "Lance", "Axe"] },
    { id: 41, className: "Wolf Knight", HP: 10, Str: 5, Mag: 0, Dex: 15, Spd: 20, Def: 5, Res: 20, Lck: 20, Bld: 0, weaponType: ["Knife", "Sword", "Lance", "Axe"] },
    { id: 42, className: "Mage", HP: 0, Str: 0, Mag: 25, Dex: 5, Spd: 0, Def: 0, Res: 25, Lck: 5, Bld: 0, weaponType: ["Tome"] },
    { id: 43, className: "Sage", HP: 0, Str: 0, Mag: 30, Dex: 5, Spd: 0, Def: 0, Res: 30, Lck: 15, Bld: 0, weaponType: ["Tome", "Staff"] },
    { id: 44, className: "Mage Knight", HP: 5, Str: 5, Mag: 25, Dex: 0, Spd: 5, Def: 10, Res: 25, Lck: 5, Bld: 0, weaponType: ["Tome", "Sword", "Lance", "Axe"] },
    { id: 45, className: "Martial Monk", HP: 0, Str: 10, Mag: 25, Dex: 0, Spd: 0, Def: 10, Res: 20, Lck: 10, Bld: 0, weaponType: ["Staff", "Arts"] },
    { id: 46, className: "Martial Master", HP: 5, Str: 10, Mag: 20, Dex: 0, Spd: 0, Def: 15, Res: 25, Lck: 10, Bld: 0, weaponType: ["Staff", "Arts"] },
    { id: 47, className: "High Priest", HP: 0, Str: 0, Mag: 25, Dex: 0, Spd: 5, Def: 0, Res: 30, Lck: 30, Bld: 0, weaponType: ["Tome", "Staff", "Arts"] },
    { id: 48, className: "Sword Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: 0, Res: 10, Lck: 10, Bld: 0, weaponType: ["Sword"] },
    { id: 49, className: "Lance Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: 0, Res: 10, Lck: 10, Bld: 0, weaponType: ["Lance"] },
    { id: 50, className: "Axe Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: 0, Res: 10, Lck: 10, Bld: 0, weaponType: ["Axe"] },
    { id: 51, className: "Griffin Knight", HP: 0, Str: 10, Mag: 15, Dex: 15, Spd: 20, Def: 0, Res: 15, Lck: 15, Bld: 0, weaponType: ["Staff", "Sword", "Lance", "Axe"] },
    { id: 52, className: "Wyvern Knight", HP: 20, Str: 20, Mag: 0, Dex: 10, Spd: 5, Def: 20, Res: 5, Lck: 5, Bld: 5, weaponType: ["Sword", "Lance", "Axe"] },
    { id: 53, className: "Thief", HP: 5, Str: 10, Mag: 0, Dex: 20, Spd: 15, Def: 15, Res: 5, Lck: 15, Bld: 0, weaponType: ["Knife"] },
    { id: 54, className: "Dancer", HP: 5, Str: 10, Mag: 0, Dex: 5, Spd: 15, Def: 10, Res: 20, Lck: 20, Bld: 0, weaponType: ["Arts"] },
    { id: 55, className: "Fell Child (Nel)", HP: 10, Str: 15, Mag: 10, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: 0, Bld: 5, weaponType: ["Lance", "Breath"] },
    { id: 56, className: "Fell Child (Rafal)", HP: 15, Str: 20, Mag: 0, Dex: 5, Spd: 5, Def: 20, Res: 10, Lck: 0, Bld: 10, weaponType: ["Axe", "Breath"] },
    { id: 57, className: "Melusine", HP: 10, Str: 10, Mag: 10, Dex: 10, Spd: 15, Def: 10, Res: 10, Lck: 0, Bld: 5, weaponType: ["Sword", "Tome"] },
    { id: 58, className: "Enchanter", HP: 5, Str: 15, Mag: 15, Dex: 15, Spd: 10, Def: 5, Res: 5, Lck: 15, Bld: 5, weaponType: ["Knife", "Arts"] },
    { id: 59, className: "Mage Cannoneer", HP: 15, Str: 10, Mag: 0, Dex: 15, Spd: 5, Def: 20, Res: 5, Lck: 10, Bld: 10, weaponType: ["Cannon"] }
]

const engravings = [
    {id: 1, engravingName: "Marth", img: "images/engraving-imgs/engrave-marth.png"},
    {id: 2, engravingName: "Celica", img: "images/engraving-imgs/engrave-celica.png"},
    {id: 3, engravingName: "Sigurd", img: "images/engraving-imgs/engrave-sigurd.png"},
    {id: 4, engravingName: "Leif", img: "images/engraving-imgs/engrave-leif.png"},
    {id: 5, engravingName: "Roy", img: "images/engraving-imgs/engrave-roy.png"},
    {id: 6, engravingName: "Lyn", img: "images/engraving-imgs/engrave-lyn.png"},
    {id: 7, engravingName: "Eirika", img: "images/engraving-imgs/engrave-eirika.png"},
    {id: 8, engravingName: "Ike", img: "images/engraving-imgs/engrave-ike.png"},
    {id: 9, engravingName: "Micaiah", img: "images/engraving-imgs/engrave-micaiah.png"},
    {id: 10, engravingName: "Lucina", img: "images/engraving-imgs/engrave-lucina.png"},
    {id: 11, engravingName: "Corrin", img: "images/engraving-imgs/engrave-corrin.png"},
    {id: 12, engravingName: "Byleth", img: "images/engraving-imgs/engrave-byleth.png"},
    {id: 13, engravingName: "Alear", img: "images/engraving-imgs/engrave-alear.png"}
]

const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".mainNav")

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const innerWidth = window.innerWidth;

    if (innerWidth > 650) {
        menu.classList.remove("hide");
    }

    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


const faviconImg = document.querySelector('link[rel="icon"]');

function getRandomFavicon(engravings) {
    const randomIndex = Math.floor(Math.random() * engravings.length);
    const randomFavicon = engravings[randomIndex].img;

    return randomFavicon;
}

function newFavicon() {
    faviconImg.setAttribute("href", getRandomFavicon(engravings));
}

const characterDropdown = document.querySelector("#charSelect");

function populateCharacterDropdown() {
    
    if (characterDropdown) {
        characters.forEach(function (character) {
            let option = document.createElement("option");

            option.value = character.id;
            option.textContent = character.charName;
            characterDropdown.appendChild(option);
        })
}
}

const classDropdown = document.querySelector("#classSelect");

function populateClassDropdown() {
    
    if (classDropdown) {
        classes.forEach(function (characterClass) {
            let option = document.createElement("option");

            option.value = characterClass.id;
            option.textContent = characterClass.className;
            classDropdown.appendChild(option);
        })
}
}

tableBody = document.querySelector(".growths")

function addGrowths(charGrowth, classGrowth) {
    return charGrowth + classGrowth;
}

function updateTable() {

    tableBody.innerHTML = "";

    const characterId = document.querySelector("#charSelect").value;
    const classId = document.querySelector("#classSelect").value;
    const row = document.createElement("tr");

    let char;
    if (characterId) {
        char = characters.find(c => c.id == characterId);
    }
    else {
        char = null;
    }

    let charClass;
    if (classId) {
        charClass = classes.find(c => c.id == classId);
    }
    else {
        charClass = null;
    }

    if (char && charClass) {

        row.innerHTML = `
        <td class="nameColumn">${char.charName} + ${charClass.className}</td>
        <td>${addGrowths(char.HP, charClass.HP)}</td>
        <td>${addGrowths(char.Str, charClass.Str)}</td>
        <td>${addGrowths(char.Mag, charClass.Mag)}</td>
        <td>${addGrowths(char.Dex, charClass.Dex)}</td>
        <td>${addGrowths(char.Spd, charClass.Spd)}</td>
        <td>${addGrowths(char.Def, charClass.Def)}</td>
        <td>${addGrowths(char.Res, charClass.Res)}</td>
        <td>${addGrowths(char.Lck, charClass.Lck)}</td>
        <td>${addGrowths(char.Bld, charClass.Bld)}</td>
        `;
        tableBody.appendChild(row);

    } else if (char) {
        row.innerHTML = `
        <td class="nameColumn">${char.charName}</td>
        <td>${char.HP}</td>
        <td>${char.Str}</td>
        <td>${char.Mag}</td>
        <td>${char.Dex}</td>
        <td>${char.Spd}</td>
        <td>${char.Def}</td>
        <td>${char.Res}</td>
        <td>${char.Lck}</td>
        <td>${char.Bld}</td>
        `;
        tableBody.appendChild(row);
    } else if (charClass) {
        row.innerHTML = `
        <td class="nameColumn">${charClass.className}</td>
        <td>${charClass.HP}</td>
        <td>${charClass.Str}</td>
        <td>${charClass.Mag}</td>
        <td>${charClass.Dex}</td>
        <td>${charClass.Spd}</td>
        <td>${charClass.Def}</td>
        <td>${charClass.Res}</td>
        <td>${charClass.Lck}</td>
        <td>${charClass.Bld}</td>
        `;
        tableBody.appendChild(row);
    }
}

const weaponContainer = document.querySelector(".weaponContainer");

function getWeaponIcon(weapon) {
    const weaponIcons = {
        "Sword": "images/weapons/sword.webp",
        "Lance": "images/weapons/lance.webp",
        "Axe": "images/weapons/axe.webp",
        "Bow": "images/weapons/bow.webp",
        "Knife": "images/weapons/knife.webp",
        "Arts": "images/weapons/arts.webp",
        "Cannon": "images/weapons/cannon.webp",
        "Breath": "images/weapons/breath.webp",
        "Tome": "images/weapons/tome.webp",
        "Staff": "images/weapons/staff.webp"
    };

    return weaponIcons[weapon];
}


function displayWeaponIcon() {

    if (weaponContainer) {
        weaponContainer.innerHTML = "";

        const classId = document.querySelector("#classSelect").value;
        let selectedClass = classes.find(c => c.id == classId);

        if (selectedClass && selectedClass.weaponType) {
            weaponContainer.style.display = "flex";

            selectedClass.weaponType.forEach(weapon => {
                let img = document.createElement("img");
                img.src = getWeaponIcon(weapon);
                img.alt = weapon;
                img.classList.add("weaponIcon");
                
                weaponContainer.appendChild(img);
            });
        }
        else {
            weaponContainer.style.display = "none";
        }
}
}

populateCharacterDropdown();
populateClassDropdown();
displayWeaponIcon();
newFavicon();

if (characterDropdown) {
    characterDropdown.addEventListener("change", updateTable);
}

if (classDropdown) {
classDropdown.addEventListener("change", () => {
    updateTable();
    displayWeaponIcon();
});
}

// javascript for character search page

const searchBox = document.querySelector("#searchBox");

if (searchBox) {
    const resultsTable = document.querySelector(".growths");

    function displayAllCharacters() {
        resultsTable.innerHTML = "";
    
        characters.forEach(char => {
            const row = document.createElement("tr");
            const img = document.createElement("img");

            img.src = char.image;
            img.alt = char.charName;

            row.classList.add("searchRow");
            row.innerHTML = `
            <td class="charSprite"></td>
            <td class="nameColumn">${char.charName}</td>
            <td>${char.HP}</td>
            <td>${char.Str}</td>
            <td>${char.Mag}</td>
            <td>${char.Dex}</td>
            <td>${char.Spd}</td>
            <td>${char.Def}</td>
            <td>${char.Res}</td>
            <td>${char.Lck}</td>
            <td>${char.Bld}</td>
            `;

            row.cells[0].appendChild(img);
            resultsTable.appendChild(row);
        });
    }

    function filterCharacters() {

        resultsTable.innerHTML = "";
        const userSearch = searchBox.value.toLowerCase();
    
        if (userSearch == "") {
            displayAllCharacters();
            return;
        }
    
        const filteredChars = characters.filter(char => 
            char.charName.toLowerCase().includes(userSearch)
        );
    
        const sortedChars = filteredChars.sort((a, b) => {
            if (a.charName < b.charName) {
                return -1;
            } else if (a.charName > b.charName) {
                return 1;
            } else {
                return 0;
            }
        });
    
        sortedChars.forEach(char => {
            const row = document.createElement("tr");
            const img = document.createElement("img");

            img.src = char.image;
            img.alt = char.charName;

            row.classList.add("searchRow");
            row.innerHTML = `
            <td class="charSprite"></td>
            <td class="nameColumn">${char.charName}</td>
            <td>${char.HP}</td>
            <td>${char.Str}</td>
            <td>${char.Mag}</td>
            <td>${char.Dex}</td>
            <td>${char.Spd}</td>
            <td>${char.Def}</td>
            <td>${char.Res}</td>
            <td>${char.Lck}</td>
            <td>${char.Bld}</td>
            `;

            row.cells[0].appendChild(img);
            resultsTable.appendChild(row);
        })
    }

    displayAllCharacters();
    searchBox.addEventListener("input", filterCharacters);
}