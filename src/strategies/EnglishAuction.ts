import { BigNumberish, BytesLike, utils } from "ethers";

class EnglishAuction {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256"], params);
        return new EnglishAuction(result.startPrice);
    }

    startPrice: BigNumberish;

    constructor(startPrice: BigNumberish) {
        this.startPrice = startPrice;
    }

    encode() {
        return utils.defaultAbiCoder.encode(["uint256"], [this.startPrice]);
    }
}

export default EnglishAuction;
