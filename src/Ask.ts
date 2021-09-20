import { TypedDataSigner } from "@ethersproject/abstract-signer";
import { BigNumberish, BytesLike, utils } from "ethers";
import { _TypedDataEncoder } from "ethers/lib/utils";

const TYPES = {
    Ask: [
        { name: "signer", type: "address" },
        { name: "token", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "amount", type: "uint256" },
        { name: "strategy", type: "address" },
        { name: "currency", type: "address" },
        { name: "recipient", type: "address" },
        { name: "deadline", type: "uint256" },
        { name: "params", type: "bytes" },
    ],
};

function getDomain(chainId: number, exchange: string) {
    return {
        name: exchange.toLowerCase(),
        version: "1",
        chainId,
        verifyingContract: exchange,
    };
}

export class Ask {
    signer: string;
    token: string;
    tokenId: BigNumberish;
    amount: BigNumberish;
    strategy: string;
    currency: string;
    recipient: string;
    deadline: BigNumberish;
    params: BytesLike;

    constructor(
        signer: string,
        token: string,
        tokenId: BigNumberish,
        amount: BigNumberish,
        strategy: string,
        currency: string,
        recipient: string,
        deadline: BigNumberish,
        params: BytesLike
    ) {
        this.signer = signer;
        this.token = token;
        this.tokenId = tokenId;
        this.amount = amount;
        this.strategy = strategy;
        this.currency = currency;
        this.recipient = recipient;
        this.deadline = deadline;
        this.params = params;
    }

    private getValue() {
        return {
            signer: this.signer,
            token: this.token,
            tokenId: this.tokenId,
            amount: this.amount,
            strategy: this.strategy,
            currency: this.currency,
            recipient: this.recipient,
            deadline: this.deadline,
            params: this.params,
        };
    }

    hash() {
        return _TypedDataEncoder.hashStruct("Ask", TYPES, this.getValue());
    }

    async sign(chainId: number, exchange: string, signer: TypedDataSigner) {
        return utils.splitSignature(await signer._signTypedData(getDomain(chainId, exchange), TYPES, this.getValue()));
    }

    verify(chainId: number, exchange: string, v: number, r: string, s: string) {
        const signer = utils.verifyTypedData(getDomain(chainId, exchange), TYPES, this.getValue(), { v, r, s });
        return signer.toLowerCase() == this.signer.toLowerCase();
    }
}
