import { BigNumber, BigNumberish, BytesLike, utils } from "ethers";

class FixedPriceSale {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256"], params);
        return new FixedPriceSale(result[0]);
    }

    price: BigNumber;

    constructor(price: BigNumberish) {
        this.price = BigNumber.from(price.toString());
    }

    encode() {
        return utils.defaultAbiCoder.encode(["uint256"], [this.price]);
    }
}

export default FixedPriceSale;
