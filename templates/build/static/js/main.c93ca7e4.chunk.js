(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){var n={"./Assassin.png":39,"./Baron.png":40,"./Baroness.png":41,"./Bishop.png":42,"./Cardinal.png":43,"./Constable.png":44,"./Count.png":45,"./Countess.png":46,"./Dowager Queen.png":47,"./Guard.png":48,"./Handmaid.png":49,"./Jester.png":50,"./King.png":51,"./Priest.png":52,"./Prince.png":53,"./Princess.png":54,"./Sycophant.png":55};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=21},,,,,,,,,,,,function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Assassin.6c7b8198.png"},function(e,t,a){e.exports=a.p+"static/media/Baron.ac315008.png"},function(e,t,a){e.exports=a.p+"static/media/Baroness.1c5a87ee.png"},function(e,t,a){e.exports=a.p+"static/media/Bishop.0b0e0959.png"},function(e,t,a){e.exports=a.p+"static/media/Cardinal.c7b46de0.png"},function(e,t,a){e.exports=a.p+"static/media/Constable.f6ac8dd7.png"},function(e,t,a){e.exports=a.p+"static/media/Count.67f8d8d4.png"},function(e,t,a){e.exports=a.p+"static/media/Countess.6e495d6c.png"},function(e,t,a){e.exports=a.p+"static/media/Dowager Queen.51a0834e.png"},function(e,t,a){e.exports=a.p+"static/media/Guard.13b4141c.png"},function(e,t,a){e.exports=a.p+"static/media/Handmaid.4af99d42.png"},function(e,t,a){e.exports=a.p+"static/media/Jester.845851da.png"},function(e,t,a){e.exports=a.p+"static/media/King.52d72f4c.png"},function(e,t,a){e.exports=a.p+"static/media/Priest.2ef7dd82.png"},function(e,t,a){e.exports=a.p+"static/media/Prince.fece33d0.png"},function(e,t,a){e.exports=a.p+"static/media/Princess.2f3b56ce.png"},function(e,t,a){e.exports=a.p+"static/media/Sycophant.09602aa7.png"},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),l=a.n(r),i=(a(38),a(6)),c=a(7),o=a(4),d=a(9),u=a(8),p=(a(13),a(14),a(10)),m=a(12),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).clickCard=function(){a.setState({opacity:.9})},a.state={selected:1},a.clickCard=a.clickCard.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"getCard",value:function(){return a(21)("./"+this.props.cardname+".png")}},{key:"render",value:function(){return s.a.createElement(m.a,{onClick:this.clickCard,className:"Card-design"},s.a.createElement(m.a.Body,{style:{padding:0}},s.a.createElement(p.a,{className:"card-button",variant:"info"},s.a.createElement(m.a.Img,{src:this.getCard()}))))}}]),n}(s.a.Component),g=a(31),h={player_points:{p1:0,p2:0,p3:0},played_cards:["Guard","Priest","Princess"],current_cards:{p1:"Guard",p2:"Jester",p3:"Baron"},draw_pile:["Assassin","Guard","Priest","Baron"]},b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"getCard",value:function(e){return a(21)("./"+e+".png")}},{key:"render",value:function(){var e=this,t=h.played_cards;return" "!=this.props.addCard&&(t=[].concat(Object(g.a)(t),[this.props.addCard])),s.a.createElement("div",{className:"Card-carousel"},t.map((function(t){return s.a.createElement("div",{key:t},s.a.createElement(m.a,{style:{width:"6rem",marginLeft:"2px"}},s.a.createElement(m.a.Body,{style:{padding:0}},s.a.createElement(m.a.Img,{src:e.getCard(t)}))))})))}}]),n}(s.a.Component),f=a(16),C=a(28),k=a(11),E=a(64),v=a(65),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selectedPlayers:[],selectionSatisfied:!1,selectedCard:" "},n.selectPlayer=n.selectPlayer.bind(Object(o.a)(n)),n.selectCard=n.selectCard.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.getList=n.getList.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"selectPlayer",value:function(e,t){var a=null,n=0;"single"==e?(a=[t],"Guard"!=this.props.cardPlayed?this.setState({selectionSatisfied:!0,selectedPlayers:a}):this.setState({selectedPlayers:a})):((n=this.state.selectedPlayers.indexOf(t))>=0?(a=this.state.selectedPlayers).splice(n,1):a=this.state.selectedPlayers.concat(t),"double"==e?2==a.length?this.setState({selectionSatisfied:!0,selectedPlayers:a}):this.setState({selectionSatisfied:!1,selectedPlayers:a}):1==a.length||2==a.length?this.setState({selectionSatisfied:!0,selectedPlayers:a}):this.setState({selectionSatisfied:!1,selectedPlayers:a})),console.log("selected player:"+a)}},{key:"selectCard",value:function(e){this.setState({selectionSatisfied:!0,selectedCard:e}),console.log("selected card:"+e)}},{key:"endPlay",value:function(){var e={};this.state.selectedPlayers.map((function(t,a){e[t]=h.current_cards[t]})),e[this.props.currentPlayer]=this.props.cardRemaining,"Guard"==this.props.cardPlayed&&(e.Guessed=this.state.selectedCard),console.log(e);var t={};t[this.state.selectedPlayer]=1,t[this.props.currentPlayer]=-1,this.props.roundCallback(t)}},{key:"getList",value:function(){var e=this,t=null;if(["Assassin","Constable","Count","Countess","Handmaid","Princess"].indexOf(this.props.cardPlayed)>=0)t=null,console.log("list is null");else{var a="Prince"==this.props.cardPlayed||"Sycophant"==this.props.cardPlayed,n="";n="Baroness"==this.props.cardPlayed?"either":"Cardinal"==this.props.cardPlayed?"double":"single",t=s.a.createElement(k.a,null,this.props.all_players.map((function(t,r){return s.a.createElement(k.a.Item,{className:"List-item-design",variant:e.state.selectedPlayers.indexOf(t)>=0?"dark":"light",key:t,disabled:!a&&t==e.props.currentPlayer,onClick:function(a){return e.selectPlayer(n,t,a)}},t)})))}return t}},{key:"render",value:function(){var e=this,t=this.getList();return null!=t?s.a.createElement("div",null,s.a.createElement(E.a,{style:{justifyContent:"center"}},s.a.createElement(v.a,null,t),"Guard"==this.props.cardPlayed?s.a.createElement(v.a,null,s.a.createElement(k.a,null,Object.entries({Assassin:1,Baron:2,Baroness:2,Bishop:1,Cardinal:2,Constable:1,Count:2,Countess:1,"Dowager Queen":1,Guard:8,Handmaid:2,Jester:1,King:1,Priest:2,Prince:2,Princess:1,Sycophant:2}).map((function(t){var a=Object(f.a)(t,2),n=a[0],r=a[1];return s.a.createElement(k.a.Item,{className:"List-item-design",variant:e.state.selectedCard==n?"dark":"light",key:n,disabled:n==e.props.cardPlayed,onClick:function(t){return e.selectCard(n,t)}},n,s.a.createElement(C.a,{variant:"secondary",style:{float:"right"}},r))})))):s.a.createElement("div",null)),s.a.createElement(E.a,{style:{width:"50vw",paddingTop:"10px",margin:"auto"}},s.a.createElement(p.a,{size:"lg",block:!0,className:"Confirm-button",disabled:!this.state.selectionSatisfied,onClick:this.endPlay},"OK"))):s.a.createElement("div",null,this.endPlay())}}]),a}(s.a.Component),O=a(66),w=new(a(29).w3cwebsocket)(("https:"===window.location.protocol?"wss://":"ws://")+window.location.host+"/ws"),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).discard=function(){n.setState({discardMode:!0}),console.log("Discarding "+n.state.cardToPlay)},n.endPlay=function(){n.setState({discardMode:!1}),console.log("Ending Play")},n.playCardCallback=function(e){n.setState({results:e,winner:"p1"})," "!=n.state.winner?n.props.gameCallback(n.state.winner):n.endPlay()},n.state={opacity:1,cardToPlay:" ",cardRemaining:" ",discardMode:!1,currentPlayer:"p1",playStatus:"p1 is discarding",results:h.player_points,winner:"p1"},n.drawCard=n.drawCard.bind(Object(o.a)(n)),n.selectCard=n.selectCard.bind(Object(o.a)(n)),n.discard=n.discard.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.playCardCallback=n.playCardCallback.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){w.onmessage=function(e){var t=JSON.parse(e.data);console.log(t)},w.send(JSON.stringify({type:"ready"}))}},{key:"drawCard",value:function(){var e=h.draw_pile[0];return console.log(h.draw_pile.splice(0,0)),e}},{key:"selectCard",value:function(e,t){this.setState({cardToPlay:e,cardRemaining:t,opacity:.9}),console.log("Clicked "+this.state.cardToPlay)}},{key:"render",value:function(){var e=this,t=h.current_cards[this.state.currentPlayer],a=this.drawCard();return console.log("in round"),this.state.discardMode?s.a.createElement(O.a,{className:"Game-header"},s.a.createElement(E.a,null,s.a.createElement(b,{addCard:this.state.cardToPlay})),s.a.createElement(E.a,null,s.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),s.a.createElement(P,{currentPlayer:this.state.currentPlayer,cardPlayed:this.state.cardToPlay,cardRemaining:this.state.cardRemaining,roundCallback:this.playCardCallback,all_players:this.props.all_players})):s.a.createElement(O.a,{className:"Game-header"},s.a.createElement(E.a,null,s.a.createElement(b,{addCard:" "})),s.a.createElement(E.a,null,s.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),s.a.createElement(E.a,null,s.a.createElement(v.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(t,a,n)}},s.a.createElement(y,{cardname:t})),s.a.createElement(v.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(a,t,n)}},s.a.createElement(y,{cardname:a}))),s.a.createElement(E.a,{style:{width:"50vw"}},s.a.createElement(p.a,{size:"lg",block:!0,className:"Confirm-button",disabled:" "==this.state.cardToPlay,onClick:this.discard},"Discard")))}}]),a}(s.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).startGame=function(){n.props.gameCallback(1,n.state.all_players)},n.startNewGame=function(){n.props.gameCallback(0,n.state.all_players)},n.endGame=function(){n.setState({gameOn:!1})},n.state={gameOn:!0,all_players:["p1","p2","p3"],showStart:!1},n.startGame=n.startGame.bind(Object(o.a)(n)),n.startNewGame=n.startNewGame.bind(Object(o.a)(n)),n.endGame=n.endGame.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;w.onopen=function(){console.log("WebSocket Client Connected"),w.send(JSON.stringify({type:"players"}))},w.onmessage=function(t){var a=JSON.parse(t.data);console.log(a),"playersS"==a.type&&(e.setState({all_players:a.plyrs}),a.uid==a.host&&e.setState({showStart:!0}))}}},{key:"render",value:function(){return this.props.toStartGame?s.a.createElement(O.a,{className:"Game-header"},s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},"Waiting For Players...")),s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement(k.a,null,this.state.all_players.map((function(e,t){return s.a.createElement(k.a.Item,{className:"List-item-design",key:e},e)})))),s.a.createElement(E.a,{style:{width:"50vw"}},s.a.createElement(p.a,{size:"lg",block:!0,className:"Confirm-button",disabled:!this.state.showStart,onClick:this.startGame},"Start Game"))):s.a.createElement(O.a,{className:"Game-header"},s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},this.props.final_winner," won the game!")),s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement(v.a,null,s.a.createElement(p.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.endGame},"Leave Game")),s.a.createElement(v.a,null,s.a.createElement(p.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.startNewGame},"Start New Game"))))}}]),a}(s.a.Component),N=(a(59),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).sendResults=n.sendResults.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"sendResults",value:function(e){console.log("Sent winner="+e),this.props.gameCallback(e)}},{key:"render",value:function(){var e=this,t=this.props.points,a="p1";return Object.entries(t).map((function(e){var n=Object(f.a)(e,2),s=n[0],r=n[1];r>=4&&(a=s);for(var l="",i=0;i<r;i++)l+="*";t[s]=l})),s.a.createElement(O.a,{className:"Game-header"},s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},this.props.winner,"'s letter reached the Princess!")),s.a.createElement(E.a,{style:{margin:"auto"}},s.a.createElement(k.a,null,Object.entries(t).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return s.a.createElement(k.a.Item,{key:a,className:"List-item-design"},s.a.createElement(v.a,{style:{display:"inline"}},a),s.a.createElement(v.a,{style:{display:"inline"}},n))})))),s.a.createElement(E.a,{style:{width:"50vw"}}," "!=a?s.a.createElement(p.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(t){return e.sendResults(a,t)}},"OK"):s.a.createElement(p.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(t){return e.sendResults(a,t)}},"Start Next Round")))}}]),a}(s.a.Component)),G=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).landingCallback=function(e,t){n.setState({gameStatus:e,all_players:t})},n.roundCallback=function(e){var t=e,a=n.state.points;a[t]=a[t]+1,n.setState({rounds_played:n.state.rounds_played+1,points:a,gameStatus:2,round_winner:t})},n.resultsCallback=function(e){" "!=e?(n.setState({gameStatus:3,round_winner:e}),console.log("results="+e),console.log("set state=3")):(n.setState({gameStatus:1}),console.log("set state=1"))},n.state={gameStatus:0,toStartGame:!0,rounds_played:0,all_players:[],points:h.player_points,round_winner:" "},n.landingCallback=n.landingCallback.bind(Object(o.a)(n)),n.roundCallback=n.roundCallback.bind(Object(o.a)(n)),n.resultsCallback=n.resultsCallback.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return 0==this.state.gameStatus?s.a.createElement(j,{toStartGame:this.state.toStartGame,gameCallback:this.landingCallback}):1==this.state.gameStatus?s.a.createElement(S,{gameCallback:this.roundCallback,all_players:this.state.all_players}):2==this.state.gameStatus?s.a.createElement(N,{points:this.state.points,winner:this.state.round_winner,gameCallback:this.resultsCallback}):s.a.createElement(j,{toStartGame:!1,final_winner:this.state.round_winner,gameCallback:this.landingCallback})}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.c93ca7e4.chunk.js.map