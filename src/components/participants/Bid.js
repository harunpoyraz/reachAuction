import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";
import { loadStdlib } from '@reach-sh/stdlib';

import { Context } from "../../Context";
import BidViews from "./BidViews";

export class Bid extends Component {
    static contextType = Context;


    /**
     const Bid = {
    ...Defaults,
    placedBid: Fun([Address, UInt], Null),
    mayBid: Fun([UInt], Bool),
    //printInfoBid: Fun([], Null),
    getBid: Fun([], UInt),
        };
     */
    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            restmayBid: null,
            restgetBid: null,
        }

        // Bind functions
        this.restmayBidExt = this.restmayBidExt.bind(this);
        this.restgetBidExt = this.restgetBidExt.bind(this);

    }

    componentDidMount() {
        const [, , , , , , ctc, , ] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 500);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Bid(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async auctionEnds(winnerAddress) {
        console.log(`${(winnerAddress)} sees that they won the auction`);

        this.setState({
            appState: "seeOutcome",
            args: [winnerAddress],
        });
    }
    
    async getBid() {
        const response = await new Promise(res => {
            this.setState({
                appState: "getBid",
                restgetBid: res
            });
        });

        return response.price;
    }
    async placedBid(address,potAmount) {
        console.log(address);
        const format = (x) => Reach.formatCurrency(x, 4);
        const formattedBid = format(potAmount);
        console.log(formattedBid);

        console.log(potAmount);
        this.setState({
            appState: "getBid",
            args: [address,formattedBid],
        });
    }


    async mayBid(bidAmount) {
    

        const format = (x) => Reach.formatCurrency(x, 4);
        const getBalance = async (who) => await Reach.balanceOf(who);    
    
        const [account, , , setBalance] = this.context;

        const walletBalance = await getBalance(account);
                    
        const formattedBalance = format(walletBalance);
        const formattedBid = format(bidAmount);
        const mayBet = (parseFloat(formattedBalance) > parseFloat(formattedBid));
        return mayBet;
    }
    

    restgetBidExt(response) {
        this.state.restgetBid(response);
    }



    restauctionEndsExt(response) {
        this.state.restauctionEnds(response);
    }
    


    async restmayBid() {
        const response = await new Promise(res => {
            this.setState({
                appState: "mayBid",
                restmayBid: res
            });
        });

        return [response.index,response.donation];
    }
    restmayBidExt(response) {
        this.state.restmayBid(response);
    }








    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }

    async showPurchase(address) {
        this.setState({
            appState: "showPurchase",
            args: [address]
        });
    }


    async seeOutcome(adress) {
        this.setState({
            appState: "seeOutcome",
            args: [adress],
        });
    }

    render() {
        return (<BidViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            getBidReady={this.state.restgetBid !== null}
            getBid={this.restgetBidExt }


            />);
    }
}