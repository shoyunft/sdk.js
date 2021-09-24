import { BigNumberish, BytesLike, utils } from "ethers";

class DesignatedSale {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256", "address"], params);
        return new DesignatedSale(result.minPrice, result.designee);
    }

    minPrice: BigNumberish;
    designee: string;

    constructor(minPrice: BigNumberish, designee: string) {
        this.minPrice = minPrice;
        this.designee = designee;
    }

    encode() {
        return utils.defaultAbiCoder.encode(["uint256", "address"], [this.minPrice, this.designee]);
    }
}

export default DesignatedSale;
