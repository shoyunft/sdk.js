import { BigNumberish, utils } from "ethers";

class DutchAuction {
    minPrice: BigNumberish;
    designee: string;

    constructor(minPrice: BigNumberish, designee: string) {
        this.minPrice = minPrice;
        this.designee = designee;
    }

    encode() {
        return utils.solidityPack(["uint256", "address"], [this.minPrice, this.designee]);
    }
}

export default DutchAuction;
