import { BigNumber, BigNumberish, BytesLike, utils } from "ethers";

class DutchAuction {
    static from(params: BytesLike) {
        const result = utils.defaultAbiCoder.decode(["uint256", "uint256", "uint256"], params);
        return new DutchAuction(result.startPrice, result.endPrice, result.startBlock);
    }

    startPrice: BigNumber;
    endPrice: BigNumber;
    startBlock: BigNumber;

    constructor(startPrice: BigNumberish, endPrice: BigNumberish, startBlock: BigNumberish) {
        this.startPrice = BigNumber.from(startPrice.toString());
        this.endPrice = BigNumber.from(endPrice.toString());
        this.startBlock = BigNumber.from(startBlock.toString());
    }

    encode() {
        return utils.defaultAbiCoder.encode(
            ["uint256", "uint256", "uint256"],
            [this.startPrice, this.endPrice, this.startBlock]
        );
    }
}

export default DutchAuction;
