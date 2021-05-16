'reach 0.1';

const Defaults = {
    auctionEnds: Fun([Address], Null),
};
const Auc2 = {
    ...Defaults,
    getParams: Fun([], Object({
        deadline: UInt,
        potAmount: UInt,
        initialAddress: Address,
    })), 
    //updateBalance: Fun([UInt], Null),
    updateInterface: Fun([UInt], Null),

    //printInfoAuc: Fun([], Null),
};
const Bid2 = {
    ...Defaults,
    placedBid: Fun([Address, UInt], Null),
    mayBid: Fun([UInt,UInt], Bool),
    //printInfoBid: Fun([], Null),
    getBid: Fun([], UInt),
    bidChanged: Fun([UInt], Null),
};

export const main =
    Reach.App(
        {},
        [
            Participant('Auc', Auc2), 
            ParticipantClass('Bid', Bid2)
        ],
        (Auc, Bid) => {
            const auctionEnds = (winnerAddress) => {
                each([Auc, Bid], () => {
                    interact.auctionEnds(winnerAddress);
                });
            };

            

            Auc.only(() => {
                const { deadline, potAmount, initialAddress } =
                  declassify(interact.getParams());
            });
            Auc.publish(deadline, potAmount, initialAddress)
                    .pay(potAmount);
            
            commit();
            Auc.only(() => declassify(interact.updateInterface(potAmount)));
            Auc.publish();
            
            const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
            const [ currentPot, auctionRunning, winnerAddress ] =
                parallelReduce([ potAmount, true, initialAddress ])
                .invariant(balance() == currentPot)
                .while(keepGoing() && auctionRunning)
                .case(Bid, (() => {
                        //const a = interact.placedBid(mbid[1], currentPot));
                        //Auc.only(() => interact.updateInterface(currentPot));
                        //declassify(interact.bidChanged(currentPot));
                        const bbid = declassify(interact.getBid());
                        const mbid = bbid + currentPot;

                        const address = this;

                        //interact.placedBid(address, currentPot);
                        return ({
                            when: declassify(interact.mayBid(mbid,bbid)),
                            msg: [mbid,address]
                        });
                    }),
                    ((bid) => bid[0]),
                    ((mbid) => {
                        const bidValue = mbid[0];
                        //deadline = deadline+2;
                        const updatedPotValue = bidValue;
                        

                        Bid.only(() => interact.placedBid(mbid[1], updatedPotValue));
                        Auc.only(() => interact.updateInterface(updatedPotValue));
                        each([Bid, Bid], () => {
                            interact.placedBid(mbid[1], updatedPotValue);
                        });
                       
                        transfer(currentPot).to(winnerAddress);
                        return [ updatedPotValue, true, mbid[1] ];
                    }))
                .timeout(timeRemaining(), () => {
                    //commit();
                    
                    race(Auc,Bid).publish();
                    return [ currentPot, false, winnerAddress ];
                    });
            //Auctioneer.only(() => interact.printInfoAuc());
            //Bidder.only(() => interact.printInfoBid());
            commit();
            Auc.only(() => {
                const aucadd = this});
            Auc.publish(aucadd);           
            transfer(currentPot).to(aucadd);
            auctionEnds(winnerAddress);
            commit();
        }
    );
