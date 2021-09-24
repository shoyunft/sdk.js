import { BigNumberish, BytesLike, utils } from "ethers";

class FixedPriceSale {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256"], params);
        return new FixedPriceSale(result.price);
    }

    price: BigNumberish;

    constructor(price: BigNumberish) {
        this.price = price;
    }

    encode() {
        return utils.defaultAbiCoder.encode(["uint256"], [this.price]);
    }
}

export default FixedPriceSale;
