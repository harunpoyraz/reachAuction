import React, { useState } from "react";
import { parseCurrency } from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/*import Spinner from "react-bootstrap/Spinner";*/


    /**
     const Bid = {
    ...Defaults,
    placedBid: Fun([Address, UInt], Null),
    mayBid: Fun([UInt], Bool),
    //printInfoBid: Fun([], Null),
    getBid: Fun([], UInt),
        };
     */
const BidViews = ({ appState, args, getBidReady, shouldBuyTicket,getBid ,auctionEnds}) => {
    switch (appState) {
        /*case "mayBid":
            return (
                mayBidReady
                    ? <BuyTicket functionToCall={restmayBid} />
                    : <h1>Loading the shouldBuyTicket page</h1>);
        */
        case "getBid":
            
            return (
                getBidReady
                ? <GetBid functionToCall={getBid} potAmount={args[1]} address={args[0]} />
                : <h1>loading</h1>);
       
        case "showPurchase":
            return (<ShowPurchase address={args[0]} />);
        case "seeOutcome":
            return (<ShowOutcome adress={args[0]} />);
        default:
            return (<h1>Waiting for contract</h1>);
    }
}
/*
const BuyTicket = ({ price, functionToCall }) => {

    const [index, setIndex] = useState(0);
    const [donation, setDonation] = useState(0);

    const handleClick = () => {
        functionToCall({
            index: index,
            donation: parseCurrency(donation)
        });
    }

    return (
        <Container>
            <Form.Group>
                <p>Index</p>
                <Form.Control
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    type="number"
                    placeholder="Deadline in blocks" />
                <p>Donation Amount</p>
                <Form.Control
                    value={donation}
                    onChange={(e) => setDonation(e.target.value)}
                    type="number"
                    placeholder="Ticket price" />
            </Form.Group>
            <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}
*/
const ShowOutcome = ({ adress }) => {
    return (
        <Container>
            <h1>Winner address: <small>{adress}</small></h1>
        </Container>
    );
}

const GetBid = ({ functionToCall ,potAmount,address }) => {

    console.log(potAmount);
    console.log(address);
    const [price, setPrice] = useState(0);

    const handleClick = () => {
        functionToCall({
            price: parseCurrency(price),
        });
    }

    return (
        <Container>


            <br></br>
            <p>Current Pot</p>
            <b>{potAmount}</b>
            <p>Last Bidder</p>
            <b>{address}</b>
        <Form.Group>

            



            <br></br>
            <p>Bid Amount</p>
            <Form.Control
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="price" />
            
            
        </Form.Group>
        <Button onClick={handleClick}>Increase The Pot</Button>
    </Container>
    );
}

const ShowPurchase = ({ address }) => {
    return (
        <Container>
            <h1><small>{address}</small> bought ticket</h1>
        </Container>
    );
}

export default BidViews;

