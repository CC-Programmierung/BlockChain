const Block = require("./block");

class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];  //Am Anfang war...
    }

    addBlock(data){  //Block erzeugen und an chain anhängen
        const block = Block.mineBlock(this.chain[this.chain.length-1],data)
        this.chain.push(block);  //connects block to chain

        return block;  //monitoring
    }


}

module.exports = Blockchain;