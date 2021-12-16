const Block = require("./block");
const Blockchain = require("./blockchain");

// Init + 1. Block(Genesis)
const blockchain = new Blockchain();

// + 2. Block
blockchain.addBlock("100 € an Chris,50 $ von foo");
console.log(blockchain);

// + 3. Block
blockchain.addBlock("80,50 € von boo an chris");
console.log(blockchain);

// + 4. Block
blockchain.addBlock("12,50 € von boo an chris");
console.log(blockchain);
