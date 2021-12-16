class Block{

    // Constructer and Parameter
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp; //Zeitstempel
        this.lastHash = lastHash; //Hash des vorhergehenden Blocks
        this.hash = hash; //eigener Hash
        this.data = data; //Daten


    }

    // for Debugging
    toString(){
        return` Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash}
            Hash:      ${this.hash}
            Data:      ${this.data}
        `;
    }


}

module.exports = Block;