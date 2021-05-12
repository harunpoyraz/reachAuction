'reach 0.1';

export const main =
    Reach.App(
        {},
        [
            ParticipantClass('Nominee', {
                // Projenin ismini döndür
                getParams: Fun([], UInt),
                announce: Fun([Address,UInt], UInt),
//                printN: Fun([] , UInt)
            }),

            ParticipantClass('Voter', {
                // Tüm fikir isimlerini al oyladığın index'i döndür
                //voteTitle: Fun([Array(Tuple(Address, Bytes(128)), 5)], UInt),
                shouldBuyTicket: Fun([] , Tuple(UInt, UInt)),
                getBalance: Fun([Address] , UInt),
//                printV: Fun([] , UInt)
            })
        ],
        (Nominee, Voter) => {
            Nominee.publish();

            const idea = [this, 0, 0];
            // Array.replicate ile 5 adet None tipinde veri tekrarlayarak bir array oluşturuyoruz.
            var [ideas, ideaCount] = [Array.replicate(1, idea), 0];
            
            invariant(balance() == 0); // Burada para harcanmayacak.
            while (ideaCount<=0) {
                commit();

                // Her bir oyuncudan fikir al
                Nominee.only(() => {
                    const title = declassify(interact.getParams());
                    const addr = this; // Fikir sahibinin adresini al
                });
                Nominee.publish(title,addr);

                // ideas array'inin verilen indexini değiştir
                const newArray = Array.set(ideas,ideaCount, [addr, 0,title]);
                [ideas, ideaCount] = [newArray, ideaCount + 1];
                continue;
            }
            
            const [ timeRemaining, keepGoing ] = makeDeadline(1);
            // makeDeadline burada olacak
            const [oylar, toplamPara] = parallelReduce([Array.replicate(1, 0),0])
                .invariant(balance()  == toplamPara)
                .while(keepGoing())
                .case(Voter,
                    (() => {
                        const mbid = declassify(interact.shouldBuyTicket());
                        return ({
                            when: true,
                            msg: mbid
                        });
                    }),
                        ((bid) => bid[1]),
                        ((choices) => {
                        if(choices[0]>=1){
                            return [oylar,toplamPara+choices[1]];
                        }else{
                            //transfer(choices[1]).to(ideas[choices[0]][0]);
                            return [oylar.set(choices[0], oylar[choices[0]] + 1), toplamPara+choices[1]];
                        }
                        
                        //transfer(choices[1]).to(ideas[choices[0]][0]);
                    })
                ).timeRemaining(timeRemaining());
            const getIndex = (m) => fromMaybe(m, (() => 0), ((x) => x));
            const winnerAddress = ideas[getIndex(oylar.indexOf(oylar.max()))][0]
            const winnerTitle = ideas[getIndex(oylar.indexOf(oylar.max()))][2]
    
            transfer(balance()).to(winnerAddress);
            commit();
            Nominee.only(() => {
                const winnerTotal = declassify(interact.announce(winnerAddress,winnerTitle));
            });
            Nominee.publish(winnerTotal);            

            commit();
            //showOutcom            
            //showOutcome(getIndex(oylar.indexOf(oylar.max())));
            exit();
     });
        
