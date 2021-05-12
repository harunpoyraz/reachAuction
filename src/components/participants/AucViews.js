import React, { useState } from "react";
import { parseCurrency, balanceOf } from "@reach-sh/stdlib/ALGO";
import { Context } from "../../Context";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AucViews = ({ appState, args, getParamsReady,announceReady, getParams, announce ,address}) => {
    switch (appState) {
        case "announce":
            return (
                announceReady
                    ? <GetAnnounce addr={args[1]} title={args[0]} functionToCall={announce} />
                    : <h1>Loading the getParams page</h1>
            );
        case "getParams":
            return (
                getParamsReady
                    ? <GetParams functionToCall={getParams} address={address} />
                    : <h1>Loading the getParams page</h1>
            );

        case "seeOutcome":
            return (<ShowOutcome adress={args[0]} />);
        case "updateInterface":
            return (<UpdateInterface price={args[0]} />);
            
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const GetParams = ({ functionToCall,address }) => {
    // const [account, , , setBalance] = useContext(Context);
    //const address = account.networkAddr();
    // const addr = acc.networkAccount.addr;

    /*
    getParams: Fun([], Object({
        deadline: UInt,
        potAmount: UInt,
        initialAddress: Address,
    })), 
    * */
    const [deadline, setDeadline] = useState(10);
    const [potAmount, setpotAmount] = useState(1);
    const [initialAddress, setinitialAddress] = useState(1);
    const handleClick = () => {
        functionToCall({
            deadline: deadline,
            potAmount: parseCurrency(potAmount),
            initialAddress : address,
        });
    }

    return (
        <Container>
            <Form.Group>
                <br></br>
                <p>Initial Price</p>
                <Form.Control
                    value={potAmount}
                    onChange={(e) => setpotAmount(e.target.value)}
                    type="number"
                    placeholder="potAmount" />
                <p>Deadline</p>
                <Form.Control
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    type="number"
                    placeholder="Deadline in blocks" />

            </Form.Group>
            <Button onClick={handleClick}>Start Auction</Button>
        </Container>
    );
}


const GetAnnounce = ({ addr , title, functionToCall }) => {

    const handleClick = () => {
        functionToCall({
            balance: 1
        });
    }

    return (
        <Container>
            <h1>Winner total amount: <small>{ parseCurrency(balanceOf(addr))}</small></h1>
            <h1>Winner title: <small>{ title}</small></h1>
            <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}



const ShowOutcome = ({ adress }) => {
    return (
        <Container>
            <h1>Winner address: <small>{adress}</small></h1>
        </Container>
    );
}

const UpdateInterface = ({ price }) => {
    return (
        <Container>
            <br></br>
            <h1>Current Pot Amount:             <h1>{price}</h1></h1>
        </Container>
    );
}

export default AucViews;