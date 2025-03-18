const characters = [
    { id: 1, charName: "Alear", HP: 60, Str: 35, Mag: 20, Dex: 45, Spd: 50, Def: 40, Res: 25, Lck: 25, Bld: 5 },
    { id: 2, charName: "Vander", HP: 60, Str: 25, Mag: 10, Dex: 25, Spd: 35, Def: 35, Res: 20, Lck: 10, Bld: 5 },
    { id: 3, charName: "Clanne", HP: 40, Str: 35, Mag: 10, Dex: 40, Spd: 50, Def: 30, Res: 25, Lck: 20, Bld: 5 },
    { id: 4, charName: "Framme", HP: 55, Str: 30, Mag: 25, Dex: 35, Spd: 55, Def: 25, Res: 30, Lck: 25, Bld: 0 },
    { id: 5, charName: "Alfred", HP: 65, Str: 40, Mag: 5, Dex: 35, Spd: 40, Def: 40, Res: 20, Lck: 40, Bld: 10 },
    { id: 6, charName: "Etie", HP: 45, Str: 40, Mag: 0, Dex: 25, Spd: 35, Def: 25, Res: 30, Lck: 25, Bld: 5 },
    { id: 7, charName: "Boucheron", HP: 85, Str: 20, Mag: 0, Dex: 50, Spd: 45, Def: 35, Res: 20, Lck: 15, Bld: 20 },
    { id: 8, charName: "Céline", HP: 50, Str: 35, Mag: 25, Dex: 30, Spd: 45, Def: 30, Res: 40, Lck: 50, Bld: 5 },
    { id: 9, charName: "Chloé", HP: 75, Str: 25, Mag: 35, Dex: 40, Spd: 55, Def: 30, Res: 25, Lck: 25, Bld: 5 },
    { id: 10, charName: "Louis", HP: 75, Str: 40, Mag: 0, Dex: 25, Spd: 25, Def: 50, Res: 20, Lck: 25, Bld: 15 },
    { id: 11, charName: "Yunaka", HP: 50, Str: 35, Mag: 25, Dex: 40, Spd: 45, Def: 15, Res: 45, Lck: 25, Bld: 5 },
    { id: 12, charName: "Alcryst", HP: 65, Str: 30, Mag: 10, Dex: 40, Spd: 45, Def: 30, Res: 20, Lck: 15, Bld: 10 },
    { id: 13, charName: "Citrinne", HP: 45, Str: 10, Mag: 40, Dex: 25, Spd: 30, Def: 20, Res: 40, Lck: 25, Bld: 5 },
    { id: 14, charName: "Lapis", HP: 55, Str: 25, Mag: 20, Dex: 35, Spd: 55, Def: 35, Res: 30, Lck: 25, Bld: 5 },
    { id: 15, charName: "Diamant", HP: 75, Str: 30, Mag: 15, Dex: 20, Spd: 40, Def: 40, Res: 25, Lck: 20, Bld: 15 },
    { id: 16, charName: "Amber", HP: 65, Str: 45, Mag: 0, Dex: 25, Spd: 30, Def: 35, Res: 5, Lck: 35, Bld: 15 },
    { id: 17, charName: "Jade", HP: 55, Str: 35, Mag: 25, Dex: 35, Spd: 30, Def: 40, Res: 30, Lck: 20, Bld: 10 },
    { id: 18, charName: "Ivy", HP: 55, Str: 25, Mag: 30, Dex: 25, Spd: 40, Def: 30, Res: 35, Lck: 15, Bld: 10 },
    { id: 19, charName: "Kagetsu", HP: 60, Str: 30, Mag: 15, Dex: 50, Spd: 50, Def: 40, Res: 25, Lck: 40, Bld: 10 },
    { id: 20, charName: "Zelkov", HP: 65, Str: 35, Mag: 15, Dex: 40, Spd: 35, Def: 35, Res: 15, Lck: 25, Bld: 10 },
    { id: 21, charName: "Fogado", HP: 60, Str: 30, Mag: 25, Dex: 30, Spd: 55, Def: 30, Res: 35, Lck: 25, Bld: 10 },
    { id: 22, charName: "Pandreo", HP: 60, Str: 5, Mag: 30, Dex: 45, Spd: 45, Def: 15, Res: 55, Lck: 30, Bld: 15 },
    { id: 23, charName: "Bunet", HP: 65, Str: 30, Mag: 10, Dex: 40, Spd: 35, Def: 45, Res: 25, Lck: 40, Bld: 10 },
    { id: 24, charName: "Timerra", HP: 55, Str: 25, Mag: 25, Dex: 45, Spd: 45, Def: 30, Res: 30, Lck: 30, Bld: 10 },
    { id: 25, charName: "Panette", HP: 75, Str: 45, Mag: 10, Dex: 40, Spd: 25, Def: 30, Res: 15, Lck: 20, Bld: 15 },
    { id: 26, charName: "Merrin", HP: 55, Str: 25, Mag: 25, Dex: 40, Spd: 50, Def: 30, Res: 30, Lck: 25, Bld: 10 },
    { id: 27, charName: "Hortensia", HP: 40, Str: 20, Mag: 20, Dex: 35, Spd: 50, Def: 25, Res: 55, Lck: 50, Bld: 0 },
    { id: 28, charName: "Seadall", HP: 55, Str: 25, Mag: 15, Dex: 25, Spd: 50, Def: 25, Res: 25, Lck: 35, Bld: 10 },
    { id: 29, charName: "Rosado", HP: 75, Str: 45, Mag: 25, Dex: 40, Spd: 45, Def: 30, Res: 30, Lck: 20, Bld: 5 },
    { id: 30, charName: "Goldmary", HP: 65, Str: 30, Mag: 5, Dex: 25, Spd: 25, Def: 55, Res: 25, Lck: 25, Bld: 5 },
    { id: 31, charName: "Lindon", HP: 65, Str: 25, Mag: 25, Dex: 25, Spd: 40, Def: 25, Res: 40, Lck: 15, Bld: 10 },
    { id: 32, charName: "Saphir", HP: 80, Str: 35, Mag: 0, Dex: 25, Spd: 30, Def: 30, Res: 5, Lck: 20, Bld: 10 },
    { id: 33, charName: "Veyle", HP: 40, Str: 25, Mag: 45, Dex: 35, Spd: 30, Def: 25, Res: 35, Lck: 20, Bld: 0 },
    { id: 34, charName: "Mauvier", HP: 70, Str: 35, Mag: 40, Dex: 40, Spd: 35, Def: 50, Res: 45, Lck: 15, Bld: 15 },
    { id: 35, charName: "Anna", HP: 55, Str: 15, Mag: 50, Dex: 50, Spd: 50, Def: 20, Res: 35, Lck: 45, Bld: 5 },
    { id: 36, charName: "Madeline", HP: 75, Str: 50, Mag: 20, Dex: 15, Spd: 15, Def: 55, Res: 25, Lck: 25, Bld: 10 }
]

charDetails = [
    {
        id: 1, reclass: "PLACEHOLDER", sklSynrgy: "PLACEHOLDER", recruited: "PLACEHOLDER", 
    }
]

const classes = [
    { id: 1, className: "Dragon Child", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 15, Def: 10, Res: 10, Lck: 5, Bld: 5 },
    { id: 2, className: "Divine Dragon", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: 10, Bld: 5 },
    { id: 3, className: "Fell Child", HP: 10, Str: 10, Mag: 25, Dex: 10, Spd: 5, Def: 10, Res: 25, Lck: null, Bld: null },
    { id: 4, className: "Noble (Alfred)", HP: 15, Str: 15, Mag: null, Dex: 5, Spd: 5, Def: 20, Res: 5, Lck: 15, Bld: null },
    { id: 5, className: "Avenir", HP: 15, Str: 15, Mag: null, Dex: 5, Spd: 10, Def: 25, Res: 5, Lck: 20, Bld: 5 },
    { id: 6, className: "Noble (Céline)", HP: null, Str: 5, Mag: 10, Dex: 5, Spd: 5, Def: 5, Res: 10, Lck: 20, Bld: null },
    { id: 7, className: "Vidame", HP: 5, Str: 10, Mag: 15, Dex: 5, Spd: 5, Def: 5, Res: 15, Lck: 20, Bld: null },
    { id: 8, className: "Lord (Diamant)", HP: 15, Str: 20, Mag: null, Dex: 10, Spd: 10, Def: 10, Res: null, Lck: 5, Bld: null },
    { id: 9, className: "Successeur", HP: 15, Str: 20, Mag: null, Dex: 10, Spd: 15, Def: 15, Res: null, Lck: 10, Bld: 5 },
    { id: 10, className: "Lord (Alcryst)", HP: 10, Str: 10, Mag: null, Dex: 25, Spd: 10, Def: 10, Res: null, Lck: 5, Bld: null },
    { id: 11, className: "Tireur d’élite", HP: 10, Str: 10, Mag: null, Dex: 30, Spd: 10, Def: 15, Res: 5, Lck: 5, Bld: null },
    { id: 12, className: "Wing Tamer", HP: 5, Str: null, Mag: 20, Dex: null, Spd: null, Def: 10, Res: 20, Lck: null, Bld: null },
    { id: 13, className: "Lindwurm", HP: 5, Str: null, Mag: 25, Dex: 5, Spd: null, Def: 15, Res: 25, Lck: null, Bld: null },
    { id: 14, className: "Sentinel (Timerra)", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 5, Def: 20, Res: null, Lck: 5, Bld: null },
    { id: 15, className: "Picket", HP: 10, Str: 15, Mag: null, Dex: 10, Spd: 10, Def: 20, Res: 5, Lck: 5, Bld: 5 },
    { id: 16, className: "Sentinel (Fogado)", HP: 10, Str: 5, Mag: null, Dex: 15, Spd: 15, Def: 5, Res: 15, Lck: null, Bld: null },
    { id: 17, className: "Cupido", HP: 10, Str: 5, Mag: 5, Dex: 20, Spd: 20, Def: 5, Res: 20, Lck: null, Bld: null },
    { id: 18, className: "Sword Fighter", HP: 10, Str: 10, Mag: null, Dex: 15, Spd: 20, Def: null, Res: 15, Lck: 10, Bld: null },
    { id: 19, className: "Swordmaster", HP: 10, Str: 10, Mag: null, Dex: 15, Spd: 20, Def: null, Res: 15, Lck: 15, Bld: null },
    { id: 20, className: "Hero", HP: 15, Str: 15, Mag: null, Dex: 10, Spd: 15, Def: null, Res: 10, Lck: 15, Bld: null },
    { id: 21, className: "Lance Fighter", HP: 10, Str: 10, Mag: 5, Dex: 20, Spd: 5, Def: 10, Res: 5, Lck: null, Bld: null },
    { id: 22, className: "Halberdier", HP: 10, Str: 15, Mag: 5, Dex: 20, Spd: 10, Def: 15, Res: 5, Lck: 5, Bld: null },
    { id: 23, className: "Royal Knight", HP: 5, Str: 10, Mag: 15, Dex: 15, Spd: 15, Def: 5, Res: 20, Lck: 10, Bld: null },
    { id: 24, className: "Axe Fighter", HP: 25, Str: 20, Mag: null, Dex: 5, Spd: 10, Def: 5, Res: null, Lck: null, Bld: 5 },
    { id: 25, className: "Berserker", HP: 30, Str: 30, Mag: null, Dex: 5, Spd: 10, Def: 5, Res: null, Lck: null, Bld: 10 },
    { id: 26, className: "Warrior", HP: 25, Str: 20, Mag: null, Dex: 10, Spd: 15, Def: 10, Res: 5, Lck: null, Bld: 5 },
    { id: 27, className: "Archer", HP: 10, Str: 15, Mag: null, Dex: 25, Spd: 10, Def: 5, Res: null, Lck: 5, Bld: null },
    { id: 28, className: "Sniper", HP: 15, Str: 15, Mag: null, Dex: 30, Spd: 10, Def: 10, Res: null, Lck: 10, Bld: null },
    { id: 29, className: "Bow Knight", HP: 10, Str: 10, Mag: null, Dex: 20, Spd: 20, Def: null, Res: 15, Lck: 15, Bld: null },
    { id: 30, className: "Sword Armor", HP: 20, Str: 15, Mag: null, Dex: 10, Spd: null, Def: 30, Res: null, Lck: null, Bld: 5 },
    { id: 31, className: "Lance Armor", HP: 20, Str: 15, Mag: null, Dex: 10, Spd: null, Def: 30, Res: null, Lck: null, Bld: 5 },
    { id: 32, className: "Axe Armor", HP: 20, Str: 15, Mag: null, Dex: 10, Spd: null, Def: 30, Res: null, Lck: null, Bld: 5 },
    { id: 33, className: "General", HP: 25, Str: 20, Mag: null, Dex: 10, Spd: null, Def: 30, Res: null, Lck: null, Bld: 10 },
    { id: 34, className: "Great Knight", HP: 20, Str: 15, Mag: null, Dex: 15, Spd: null, Def: 25, Res: 10, Lck: 5, Bld: 5 },
    { id: 35, className: "Sword Cavalier", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: null },
    { id: 36, className: "Lance Cavalier", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: null },
    { id: 37, className: "Axe Cavalier", HP: 10, Str: 10, Mag: null, Dex: 10, Spd: 10, Def: 10, Res: 10, Lck: 10, Bld: null },
    { id: 38, className: "Paladin", HP: 15, Str: 15, Mag: null, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: 10, Bld: null },
    { id: 39, className: "Wolf Knight", HP: 10, Str: 5, Mag: null, Dex: 15, Spd: 20, Def: 5, Res: 20, Lck: 20, Bld: null },
    { id: 40, className: "Mage", HP: null, Str: null, Mag: 25, Dex: 5, Spd: null, Def: null, Res: 25, Lck: 5, Bld: null },
    { id: 41, className: "Sage", HP: null, Str: null, Mag: 30, Dex: 5, Spd: null, Def: null, Res: 30, Lck: 15, Bld: null },
    { id: 42, className: "Mage Knight", HP: 5, Str: 5, Mag: 25, Dex: null, Spd: 5, Def: 10, Res: 25, Lck: 5, Bld: null },
    { id: 43, className: "Martial Monk", HP: null, Str: 10, Mag: 25, Dex: null, Spd: null, Def: 10, Res: 20, Lck: 10, Bld: null },
    { id: 44, className: "Martial Master", HP: 5, Str: 10, Mag: 20, Dex: null, Spd: null, Def: 15, Res: 25, Lck: 10, Bld: null },
    { id: 45, className: "High Priest", HP: null, Str: null, Mag: 25, Dex: null, Spd: 5, Def: null, Res: 30, Lck: 30, Bld: null },
    { id: 46, className: "Sword Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: null, Res: 10, Lck: 10, Bld: null },
    { id: 47, className: "Lance Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: null, Res: 10, Lck: 10, Bld: null },
    { id: 48, className: "Axe Flier", HP: 5, Str: 10, Mag: 5, Dex: 10, Spd: 10, Def: null, Res: 10, Lck: 10, Bld: null },
    { id: 49, className: "Griffin Knight", HP: null, Str: 10, Mag: 15, Dex: 15, Spd: 20, Def: null, Res: 15, Lck: 15, Bld: null },
    { id: 50, className: "Wyvern Knight", HP: 20, Str: 20, Mag: null, Dex: 10, Spd: 5, Def: 20, Res: 5, Lck: 5, Bld: 5 },
    { id: 51, className: "Thief", HP: 5, Str: 10, Mag: null, Dex: 20, Spd: 15, Def: 15, Res: 5, Lck: 15, Bld: null },
    { id: 52, className: "Dancer", HP: 5, Str: 10, Mag: null, Dex: 5, Spd: 15, Def: 10, Res: 20, Lck: 20, Bld: null },
    { id: 53, className: "Fell Child (Nel)", HP: 10, Str: 15, Mag: 10, Dex: 10, Spd: 15, Def: 15, Res: 15, Lck: null, Bld: 5 },
    { id: 54, className: "Fell Child (Rafal)", HP: 15, Str: 20, Mag: null, Dex: 5, Spd: 5, Def: 20, Res: 10, Lck: null, Bld: 10 },
    { id: 55, className: "Melusine", HP: 10, Str: 10, Mag: 10, Dex: 10, Spd: 15, Def: 10, Res: 10, Lck: null, Bld: 5 },
    { id: 56, className: "Enchanter", HP: 5, Str: 15, Mag: 15, Dex: 15, Spd: 10, Def: 5, Res: 5, Lck: 15, Bld: 5 },
    { id: 57, className: "Mage Cannoneer", HP: 15, Str: 10, Mag: null, Dex: 15, Spd: 5, Def: 20, Res: 5, Lck: 10, Bld: 10 }
]

const characterDropdown = document.querySelector("#charSelect");

function populateCharacterDropdown() {
    
    characters.forEach(function (character) {
        let option = document.createElement("option");

        option.value = character.id;
        option.textContent = character.charName;
        characterDropdown.appendChild(option);
    })
}

const classDropdown = document.querySelector("#classSelect");

function populateClassDropdown() {
    
    classes.forEach(function (characterClass) {
        let option = document.createElement("option");

        option.value = characterClass.id;
        option.textContent = characterClass.className;
        classDropdown.appendChild(option);
    })
}

tableBody = document.querySelector(".growths")

function addGrowths(charGrowth, classGrowth) {
    const charValue = charGrowth || 0;
    const classValue = classGrowth || 0;

    return charValue + classValue;
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
        <td>${char.charName} + ${charClass.className}</td>
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
        <td>${char.charName}</td>
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
        <td>${charClass.className}</td>
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

populateCharacterDropdown();
populateClassDropdown();


characterDropdown.addEventListener("change", updateTable);
classDropdown.addEventListener("change", updateTable);