import { BigNumberish, utils } from "ethers";

class DutchAuction {
    startPrice: BigNumberish;
    endPrice: BigNumberish;
    startBlock: BigNumberish;

    constructor(startPrice: BigNumberish, endPrice: BigNumberish, startBlock: BigNumberish) {
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.startBlock = startBlock;
    }

    encode() {
        return utils.solidityPack(["uint256", "uint256", "uint256"], [this.startPrice, this.endPrice, this.startBlock]);
    }
}

export default DutchAuction;
