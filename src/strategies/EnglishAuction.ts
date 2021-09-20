import { BigNumberish, utils } from "ethers";

class EnglishAuction {
    startPrice: BigNumberish;

    constructor(startPrice: BigNumberish) {
        this.startPrice = startPrice;
    }

    encode() {
        return utils.solidityPack(["uint256"], [this.startPrice]);
    }
}

export default EnglishAuction;
