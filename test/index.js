function lacesarSignal() {
    class Pizza {
        constructor(yours) {
            this.yours = yours;
            this.sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => Math.pow(2, n)).sort((a, b) => a > b ? -1 : (a < b) ? 1 : 0);
            this.cipher = [];
        }
        getCipher() {
            this.sequence.reduce((totaIf, piece) => {
                if (totaIf + piece > this.yours) return totaIf;
                this.cipher.push(piece);
                return totaIf += piece;
            }, 0);
            this.cipher.sort((a, b) => a > b ? 1 : (a < b) ? -1 : 0);
            return this;
        }
        decrypt(dictonary) {
            return this.cipher.map((atom, idx) => dictionary[atom + this.keys[idx]]).join();
        }
        getKeys() {
            this.keys = [5, 1, 1, -92, -490];
            return this;
        }
    }

    let dictionary = ["自", "由", "自", "在", "功",
        "不", "可", "没", "卓", "有", "成", "效", "大", "吉",
        "大", "利", "A",
        "B", "C", "D",
        "E",
        "F",
        "G", "H",
        "I", "J", "K", "L", "M", "M", "N",
        "0",
        "P", "Q",
        "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z"
    ];
    return new Pizza(666).getKeys().getCipher().decrypt(dictionary);
}

lacesarSignal();