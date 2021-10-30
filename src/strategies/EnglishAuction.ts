import { BigNumber, BigNumberish, BytesLike, utils } from "ethers";

class EnglishAuction {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256"], params);
        return new EnglishAuction(result[0]);
    }

    startPrice: BigNumber;

    constructor(startPrice: BigNumberish) {
        this.startPrice = BigNumber.from(startPrice.toString());
    }

    encode() {
        return utils.defaultAbiCoder.encode(["uint256"], [this.startPrice]);
    }
}

export default EnglishAuction;
