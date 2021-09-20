import { BigNumberish, utils } from "ethers";

class FixedPriceSale {
    price: BigNumberish;

    constructor(price: BigNumberish) {
        this.price = price;
    }

    encode() {
        return utils.solidityPack(["uint256"], [this.price]);
    }
}

export default FixedPriceSale;
