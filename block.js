const SHA256 = require("crypto-js/sha256"); //SHA256 verschlüsselung

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

    static genesis(){
    return new this("Genesis time","-----","abcd#123",[]);
    }

    // weiterer Block in der Chain
    static mineBlock(lastBlock,data){
        const timestamp = Date.now(); //Zeit in ms seit 01.01.1970
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp,lastHash,data);

        return new this(timestamp,lastHash,hash,data); //call constructer
}

    // Erzeugen des Hash
    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();



    }


}

module.exports = Block;