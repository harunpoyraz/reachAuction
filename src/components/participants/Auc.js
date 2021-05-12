import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import AucViews from "./AucViews";

export class Auc extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resGetParams: null,
            resAnnounce: null,
        }

        // Bind functions
        this.getParamsExt = this.getParamsExt.bind(this);
        this.announceExt = this.announceExt.bind(this);
    }
    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 500);

        // Kontrat argümanları

        // Reach'a bağlan

        Backend.Auc(ctc[0], this);
    }

    //    updateBalance: Fun([UInt], Null),



    async auctionEnds(winnerAddress) {
        console.log(`${(winnerAddress)}  won the auction`);

        this.setState({
            appState: "seeOutcome",
            args: [winnerAddress],
        });
    }

    async updateInterface(price) {




        const format = (x) => Reach.formatCurrency(x, 4);
    
                    
        const formattedBalance = format(price);

        console.log(`${(formattedBalance)}  updated`);

        this.setState({
            appState: "updateInterface",
            args: [formattedBalance]
        });
    }

    async getParams() {
        console.log("asdadsdsaasdasdasddsa")
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res
            });
        });

        this.updateBalance();
        return params;
    }
    
    async announce(addr, title) {
        console.log("111a");
        console.log(addr);
        console.log(title);
        const params = await new Promise(res => {
            this.setState({
                appState: "announce",
                resAnnounce: res
            });
        });

        return params.balance;
    }

    getParamsExt(params) {
        this.state.resGetParams(params);
    }

    



   announceExt(params) {
        this.state.resAnnounce(params);
    }
    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }




    render() {
        const [account, , , setBalance] = this.context;

        return <AucViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            getParamsReady={this.state.resGetParams !== null}
            announceReady={this.state.resAnnounce !== null}
            getParams={this.getParamsExt}
            announce={this.announceExt}
            address={account} />
    }
}