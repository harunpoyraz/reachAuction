// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Auc(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    deadline: ctc0,
    initialAddress: ctc1,
    potAmount: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const v22 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:44:48:application',
    fs: ['at ./index.rsh:42:21:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)'],
    msg: 'getParams',
    who: 'Auc'
    });
  const v23 = v22.deadline;
  const v24 = v22.potAmount;
  const v25 = v22.initialAddress;
  
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:46:17:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc1], [v18, v23, v24, v25], [v24, []], [ctc0, ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:46:17:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:46:17:dot', stdlib.UInt_max, 0)]);
    const [v27, v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v26 = txn1.from;
    
    sim_r.txns.push({
      amt: v28,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:49:21:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v29, v32]);
    sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:49:21:after expr stmt semicolon', stdlib.UInt_max, 1), v26, v27, v28, v29]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:49:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  stdlib.protect(ctc3, await interact.updateInterface(v28), {
    at: './index.rsh:50:63:application',
    fs: ['at ./index.rsh:50:21:application call to [unknown function] (defined at: ./index.rsh:50:25:function exp)'],
    msg: 'updateInterface',
    who: 'Auc'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:51:17:dot', stdlib.UInt_max, 4), [ctc1, ctc0, ctc0, ctc1, ctc0], [v26, v27, v28, v29, v32], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:51:17:dot', stdlib.UInt_max, 1), v26, v27, v28, v29, v32]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:51:17:dot', stdlib.UInt_max, 1), v26, v27, v28, v29]);
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v39 = stdlib.addressEq(v26, v37);
    stdlib.assert(v39, {
      at: './index.rsh:51:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Auc'
      });
    const v43 = stdlib.add(v32, v27);
    const v46 = true;
    const v47 = v28;
    const v48 = v29;
    const v122 = v40;
    const v123 = v32;
    
    if ((() => {
      const v53 = stdlib.gt(v43, v123);
      const v55 = v53 ? v46 : false;
      
      return v55;})()) {
      const v102 = stdlib.sub(v43, v123);
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        amt: v47,
        kind: 'from',
        to: v48,
        tok: undefined
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [] = txn2.data;
  const v40 = txn2.time;
  const v37 = txn2.from;
  ;
  const v39 = stdlib.addressEq(v26, v37);
  stdlib.assert(v39, {
    at: './index.rsh:51:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auc'
    });
  const v43 = stdlib.add(v32, v27);
  let v46 = true;
  let v47 = v28;
  let v48 = v29;
  let v122 = v40;
  let v123 = v32;
  
  while ((() => {
    const v53 = stdlib.gt(v43, v123);
    const v55 = v53 ? v46 : false;
    
    return v55;})()) {
    const v102 = stdlib.sub(v43, v123);
    const txn3 = await (ctc.recv(5, 1, [ctc4], false, v102));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc1, ctc0, ctc0], [v43, v47, v48, v102, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 3), v43, v47, v48, v102]);
        const [] = txn4.data;
        const v107 = txn4.time;
        const v105 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv46 = false;
        const cv47 = v47;
        const cv48 = v48;
        const cv122 = v107;
        const cv123 = v122;
        
        (() => {
          const v46 = cv46;
          const v47 = cv47;
          const v48 = cv48;
          const v122 = cv122;
          const v123 = cv123;
          
          if ((() => {
            const v53 = stdlib.gt(v43, v123);
            const v55 = v53 ? v46 : false;
            
            return v55;})()) {
            const v102 = stdlib.sub(v43, v123);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v47,
              kind: 'from',
              to: v48,
              tok: undefined
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v107 = txn4.time;
      const v105 = txn4.from;
      ;
      const cv46 = false;
      const cv47 = v47;
      const cv48 = v48;
      const cv122 = v107;
      const cv123 = v122;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v122 = cv122;
      v123 = cv123;
      
      continue;
      }
    else {
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:67:34:array ref', stdlib.UInt_max, 0)];
      ;
      stdlib.protect(ctc3, await interact.updateInterface(v78), {
        at: './index.rsh:73:64:application',
        fs: ['at ./index.rsh:73:33:application call to [unknown function] (defined at: ./index.rsh:73:37:function exp)', 'at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)'],
        msg: 'updateInterface',
        who: 'Auc'
        });
      
      ;
      const v98 = v76[stdlib.checkedBigNumberify('./index.rsh:76:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v98;
      const cv122 = v82;
      const cv123 = v122;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v122 = cv122;
      v123 = cv123;
      
      continue;}
    }
  ;
  stdlib.protect(ctc3, await interact.auctionEnds(v48), {
    at: './index.rsh:36:41:application',
    fs: ['at ./index.rsh:35:21:application call to [unknown function] (defined at: ./index.rsh:35:37:function exp)', 'at ./index.rsh:88:24:application call to "auctionEnds" (defined at: ./index.rsh:34:49:function exp)'],
    msg: 'auctionEnds',
    who: 'Auc'
    });
  
  return;
  
  
  };
export async function Bid(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc1], false, false));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v40 = txn2.time;
  const v37 = txn2.from;
  ;
  const v39 = stdlib.addressEq(v26, v37);
  stdlib.assert(v39, {
    at: './index.rsh:51:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bid'
    });
  const v43 = stdlib.add(v32, v27);
  let v46 = true;
  let v47 = v28;
  let v48 = v29;
  let v122 = v40;
  let v123 = v32;
  
  while ((() => {
    const v53 = stdlib.gt(v43, v123);
    const v55 = v53 ? v46 : false;
    
    return v55;})()) {
    const v102 = stdlib.sub(v43, v123);
    const v65 = ctc.selfAddress('Bid', true, stdlib.checkedBigNumberify('./index.rsh:55:31:application', stdlib.UInt_max, 64));
    const v68 = stdlib.protect(ctc0, await interact.getBid(), {
      at: './index.rsh:60:64:application',
      fs: ['at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:58:32:function exp)', 'at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)'],
      msg: 'getBid',
      who: 'Bid'
      });
    const v69 = stdlib.add(v68, v47);
    const v70 = stdlib.protect(ctc2, await interact.mayBid(v69), {
      at: './index.rsh:63:61:application',
      fs: ['at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:58:32:function exp)', 'at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)'],
      msg: 'mayBid',
      who: 'Bid'
      });
    
    const v72 = [v69, v65];
    
    const txn3 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:55:31:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc1, ctc0, ctc0, ctc3], [v43, v47, v48, v102, v122, v72], [v69, []], [ctc3], v70, false, v102, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:55:31:dot', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:31:dot', stdlib.UInt_max, 3), v43, v47, v48, v102]);
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:67:34:array ref', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v78,
        kind: 'to',
        tok: undefined
        });
      
      sim_r.txns.push({
        amt: v47,
        kind: 'from',
        to: v48,
        tok: undefined
        });
      const v98 = v76[stdlib.checkedBigNumberify('./index.rsh:76:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v98;
      const cv122 = v82;
      const cv123 = v122;
      
      (() => {
        const v46 = cv46;
        const v47 = cv47;
        const v48 = cv48;
        const v122 = cv122;
        const v123 = cv123;
        
        if ((() => {
          const v53 = stdlib.gt(v43, v123);
          const v55 = v53 ? v46 : false;
          
          return v55;})()) {
          const v102 = stdlib.sub(v43, v123);
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: v47,
            kind: 'from',
            to: v48,
            tok: undefined
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc8, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 4), [ctc0, ctc0, ctc1, ctc0, ctc0], [v43, v47, v48, v102, v122], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:81:35:dot', stdlib.UInt_max, 3), v43, v47, v48, v102]);
        const [] = txn4.data;
        const v107 = txn4.time;
        const v105 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv46 = false;
        const cv47 = v47;
        const cv48 = v48;
        const cv122 = v107;
        const cv123 = v122;
        
        (() => {
          const v46 = cv46;
          const v47 = cv47;
          const v48 = cv48;
          const v122 = cv122;
          const v123 = cv123;
          
          if ((() => {
            const v53 = stdlib.gt(v43, v123);
            const v55 = v53 ? v46 : false;
            
            return v55;})()) {
            const v102 = stdlib.sub(v43, v123);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102, v122]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 3), v43, v47, v48, v102]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:55:31:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v47,
              kind: 'from',
              to: v48,
              tok: undefined
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn4.data;
      const v107 = txn4.time;
      const v105 = txn4.from;
      ;
      const cv46 = false;
      const cv47 = v47;
      const cv48 = v48;
      const cv122 = v107;
      const cv123 = v122;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v122 = cv122;
      v123 = cv123;
      
      continue;
      }
    else {
      const [v76] = txn3.data;
      const v82 = txn3.time;
      const v75 = txn3.from;
      const v78 = v76[stdlib.checkedBigNumberify('./index.rsh:67:34:array ref', stdlib.UInt_max, 0)];
      ;
      const v88 = v76[stdlib.checkedBigNumberify('./index.rsh:72:63:array ref', stdlib.UInt_max, 1)];
      stdlib.protect(ctc4, await interact.placedBid(v88, v78), {
        at: './index.rsh:72:58:application',
        fs: ['at ./index.rsh:72:33:application call to [unknown function] (defined at: ./index.rsh:72:37:function exp)', 'at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)'],
        msg: 'placedBid',
        who: 'Bid'
        });
      
      ;
      const v98 = v76[stdlib.checkedBigNumberify('./index.rsh:76:61:array ref', stdlib.UInt_max, 1)];
      const cv46 = true;
      const cv47 = v78;
      const cv48 = v98;
      const cv122 = v82;
      const cv123 = v122;
      
      v46 = cv46;
      v47 = cv47;
      v48 = cv48;
      v122 = cv122;
      v123 = cv123;
      
      continue;}
    }
  ;
  stdlib.protect(ctc4, await interact.auctionEnds(v48), {
    at: './index.rsh:36:41:application',
    fs: ['at ./index.rsh:35:21:application call to [unknown function] (defined at: ./index.rsh:35:37:function exp)', 'at ./index.rsh:88:24:application call to "auctionEnds" (defined at: ./index.rsh:34:49:function exp)'],
    msg: 'auctionEnds',
    who: 'Bid'
    });
  
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 9,
    size: 137
    }, {
    count: 10,
    size: 169
    }, null, null, {
    count: 11,
    size: 185
    }, {
    count: 10,
    size: 145
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:46:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:51:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:51:17:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxna 0 ApplicationArgs 5
btoi
load 254
+
dup
store 251
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 251
gtxna 0 ApplicationArgs 5
btoi
-
store 250
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 251
itob
concat
load 253
itob
concat
load 252
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
==
assert
gtxn 4 Amount
load 253
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
store 251
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
itob
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 251
substring 0 8
btoi
store 250
// "CheckPay"
// "./index.rsh:55:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 250
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 251
substring 8 40
store 249
load 255
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 255
gtxna 0 ApplicationArgs 5
btoi
-
store 248
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
itob
concat
load 250
itob
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 248
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l0:
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 249
==
assert
gtxn 5 Amount
load 250
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 6 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 6 Amount
int 0
==
assert
gtxn 6 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 6 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 7
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
gtxn 6 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 252
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
dup
gtxn 6 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
itob
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:81:35:dot"
// "[at ./index.rsh:55:31:application call to [unknown function] (defined at: ./index.rsh:55:31:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 255
gtxna 0 ApplicationArgs 5
btoi
>
!
int 0
&&
bz l0
load 255
gtxna 0 ApplicationArgs 5
btoi
-
store 251
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
itob
concat
load 254
itob
concat
load 253
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 252
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T12",
                "name": "v76",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v32",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T12",
                "name": "v76",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a1604080516020808201835243825282518082018452600080825292518152835180830184905290518185015283518082038501815260609091019093528251920191909120905561095b806100826000396000f3fe6080604052600436106100435760003560e01c806305d70dd11461004f578063415249d114610064578063a38514f614610077578063ec96ed7b1461008a5761004a565b3661004a57005b600080fd5b61006261005d366004610770565b61009d565b005b610062610072366004610755565b610206565b610062610085366004610744565b610322565b610062610098366004610755565b610442565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100da57600080fd5b60008055346040820135146100ee57600080fd5b7f4350d87bbf788b415584278d62a00aa323de66159331c694e8b7b548c4feda2c8160405161011d919061086e565b60405180910390a16101696040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b33815260208083013590820152604080830135908201526101906080830160608401610723565b6001600160a01b03908116606083810191825243608080860191825260408051600160208083019190915288518816828401528801519481019490945286015190830152915190921660a08301525160c082015260e00160408051601f1981840301815291905280516020909101206000555050565b60405161021a9060019083906020016108b8565b6040516020818303038152906040528051906020012060001c6000541461024057600080fd5b60008055341561024f57600080fd5b3361025d6020830183610723565b6001600160a01b03161461027057600080fd5b7f3e9b7138c9e45053669150929335c407048de530a34167c39b7c7972d610312a8160405161029f91906108aa565b60405180910390a16102af6106aa565b6102c1602083013560808401356108e0565b81515260208082018051600190525160408401359101526102e86080830160608401610723565b6020820180516001600160a01b039092166040909201919091528051436060909101525160808084013591015261031e81610511565b5050565b6040516103369060039083906020016108cc565b6040516020818303038152906040528051906020012060001c6000541461035c57600080fd5b60008055610372606082013560808301356108e0565b431061037d57600080fd5b3460a08201351461038d57600080fd5b61039d6060820160408301610723565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f193505050501580156103d8573d6000803e3d6000fd5b507f17538bfbf3cd77cb130e56abf3a040bffe2d9592c048c920c19a1f82535d2702816040516104089190610806565b60405180910390a16104186106aa565b80518235905260208082018051600190525160a08401359101526102e860e0830160c08401610723565b6040516104569060039083906020016108cc565b6040516020818303038152906040528051906020012060001c6000541461047c57600080fd5b60008055610492606082013560808301356108e0565b43101561049e57600080fd5b34156104a957600080fd5b7f9921d702e29854b9d13d638b9da527e0d4f30ef37c57a46c9643fe63db32285e816040516104d8919061083e565b60405180910390a16104e86106aa565b805182359052602080820180516000905251818401359101526102e86060830160408401610723565b6040805160208101909152600081526020820151608001518251511161053857600061053f565b6020820151515b156106105760208201516080015182515161055a91906108f8565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089019687528b515189528b86018051870151865280518b01516001600160a01b0390811686528c518452905184015188528a5160039781019790975289519a87019a909a529351918501919091529051909616908201529351918401919091525160c08301529060e00160408051601f1981840301815291905280516020909101206000555061031e565b604080516080810182526000918101828152606082018390528152602081019190915260208084018051820151835152516040015182516001600160a01b0390911691015261065e81610663565b505050565b8051602081015190516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106a2573d6000803e3d6000fd5b506000805533ff5b60408051606081018252600091810191825290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b80356001600160a01b038116811461070757600080fd5b919050565b600060c0828403121561071d578081fd5b50919050565b600060208284031215610734578081fd5b61073d826106f0565b9392505050565b600060e0828403121561071d578081fd5b600060c08284031215610766578081fd5b61073d838361070c565b60006080828403121561071d578081fd5b6001600160a01b0380610793836106f0565b1683526020820135602084015260408201356040840152806107b7606084016106f0565b16606084015250608090810135910152565b80358252602080820135908301526001600160a01b036107eb604083016106f0565b16604083015260608181013590830152608090810135910152565b60e0810161081482846107c9565b60a083810135908301526001600160a01b0361083260c085016106f0565b1660c083015292915050565b60c0810161084c82846107c9565b60a083013580151580821461086057600080fd5b8060a0850152505092915050565b813581526020808301359082015260408083013590820152608081016001600160a01b0361089e606085016106f0565b16606083015292915050565b60c0810161084c8284610781565b82815260c0810161073d6020830184610781565b82815260c0810161073d60208301846107c9565b600082198211156108f3576108f361090f565b500190565b60008282101561090a5761090a61090f565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220088aa0d307e4e4981d43641f64c6e44d5be266f49d1f8cefcf6250bf9de8ae4a64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

