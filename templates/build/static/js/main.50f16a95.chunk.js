(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},,,,,,,,function(e,a,t){var n={"./Assassin.png":39,"./Baron.png":40,"./Baroness.png":41,"./Bishop.png":42,"./Cardinal.png":43,"./Constable.png":44,"./Count.png":45,"./Countess.png":46,"./Dowager Queen.png":47,"./Guard.png":48,"./Handmaid.png":49,"./Jester.png":50,"./King.png":51,"./Priest.png":52,"./Prince.png":53,"./Princess.png":54,"./Sycophant.png":55};function s(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=21},,,,,,,,,,,,function(e,a,t){e.exports=t(70)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/Assassin.6c7b8198.png"},function(e,a,t){e.exports=t.p+"static/media/Baron.ac315008.png"},function(e,a,t){e.exports=t.p+"static/media/Baroness.1c5a87ee.png"},function(e,a,t){e.exports=t.p+"static/media/Bishop.0b0e0959.png"},function(e,a,t){e.exports=t.p+"static/media/Cardinal.c7b46de0.png"},function(e,a,t){e.exports=t.p+"static/media/Constable.f6ac8dd7.png"},function(e,a,t){e.exports=t.p+"static/media/Count.67f8d8d4.png"},function(e,a,t){e.exports=t.p+"static/media/Countess.6e495d6c.png"},function(e,a,t){e.exports=t.p+"static/media/Dowager Queen.51a0834e.png"},function(e,a,t){e.exports=t.p+"static/media/Guard.13b4141c.png"},function(e,a,t){e.exports=t.p+"static/media/Handmaid.4af99d42.png"},function(e,a,t){e.exports=t.p+"static/media/Jester.845851da.png"},function(e,a,t){e.exports=t.p+"static/media/King.52d72f4c.png"},function(e,a,t){e.exports=t.p+"static/media/Priest.2ef7dd82.png"},function(e,a,t){e.exports=t.p+"static/media/Prince.fece33d0.png"},function(e,a,t){e.exports=t.p+"static/media/Princess.2f3b56ce.png"},function(e,a,t){e.exports=t.p+"static/media/Sycophant.09602aa7.png"},,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(24),c=t.n(r),l=(t(38),t(6)),i=t(7),o=t(3),d=t(9),u=t(8),m=(t(13),t(14),t(11)),p=t(12),g=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).clickCard=function(){t.setState({opacity:.9}),console.log("inner click")},t.state={opacity:1},t.clickCard=t.clickCard.bind(Object(o.a)(t)),t}return Object(i.a)(n,[{key:"getCard",value:function(){return t(21)("./"+this.props.cardname+".png")}},{key:"render",value:function(){return s.a.createElement(p.a,{hoverable:"true",onClick:this.clickCard,style:{opacity:this.state.opacity},className:"Card-design"},s.a.createElement(p.a.Body,{style:{padding:0}},s.a.createElement(p.a.Img,{src:this.getCard()})))}}]),n}(s.a.Component),b=t(31),y={num_players:3,all_players:["p1","p2","p3"],all_cards:["Jester","Assassin","Guard","Priest","Princess","Baron"],player_points:{p1:0,p2:0,p3:0},played_cards:["Guard","Priest","Princess"],current_cards:{p1:"Priest",p2:"Jester",p3:"Baron"},draw_pile:["Assassin","Guard","Priest","Baron"]},h=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"getCard",value:function(e){return t(21)("./"+e+".png")}},{key:"render",value:function(){var e=this,a=y.played_cards;return" "!=this.props.addCard&&(a=[].concat(Object(b.a)(a),[this.props.addCard])),s.a.createElement("div",{className:"Card-carousel"},a.map((function(a){return s.a.createElement("div",{id:a},s.a.createElement(p.a,{style:{width:"6rem",marginLeft:"2px"}},s.a.createElement(p.a.Body,{style:{padding:0}},s.a.createElement(p.a.Img,{src:e.getCard(a)}))))})))}}]),n}(s.a.Component),f=t(10),C=(t(56),t(71)),k=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={selectedPlayer:" "},n.selectPlayer=n.selectPlayer.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.getList=n.getList.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"selectPlayer",value:function(e){this.setState({selectedPlayer:e})}},{key:"endPlay",value:function(){var e={};e[this.state.selectedPlayer]=y.current_cards[this.state.selectedPlayer],e[this.props.currentPlayer]=this.props.cardRemaining,console.log(e);var a={};a[this.state.selectedPlayer]=1,a[this.props.currentPlayer]=-1,this.props.roundCallback(a)}},{key:"getList",value:function(){var e=this;return this.props.cardPlayed in["Assassin","Constable","Count","Countess","Handmaid","Princess"]?{}:("Baroness"==this.props.cardPlayed||this.props.cardPlayed,s.a.createElement(f.a,null,y.all_players.map((function(a,t){return s.a.createElement(f.a.Item,{action:!0,className:"List-item-design",key:a,onClick:function(t){return e.selectPlayer(a,t)}},a)}))))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(C.a,{style:{margin:"auto"}},this.getList()),s.a.createElement(C.a,{style:{width:"50vw"}},s.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:this.endPlay},"OK")))}}]),t}(s.a.Component),E=t(72),w=t(73),v=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).discard=function(){n.setState({discardMode:!0}),console.log("Discarding "+n.state.cardToPlay)},n.endPlay=function(){n.setState({discardMode:!1}),console.log("Ending Play")},n.playCardCallback=function(e){n.setState({results:e,winner:"p1"})," "!=n.state.winner?n.props.gameCallback(n.state.winner):n.endPlay()},n.state={opacity:1,cardToPlay:" ",cardRemaining:" ",discardMode:!1,currentPlayer:"p1",playStatus:"p1 is discarding",results:y.player_points,winner:"p1"},n.drawCard=n.drawCard.bind(Object(o.a)(n)),n.selectCard=n.selectCard.bind(Object(o.a)(n)),n.discard=n.discard.bind(Object(o.a)(n)),n.endPlay=n.endPlay.bind(Object(o.a)(n)),n.playCardCallback=n.playCardCallback.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"drawCard",value:function(){var e=y.draw_pile[0];return console.log(y.draw_pile.splice(0,0)),e}},{key:"selectCard",value:function(e,a){this.setState({cardToPlay:e,cardRemaining:a,opacity:.9}),console.log("Clicked "+this.state.cardToPlay)}},{key:"render",value:function(){var e=this,a=y.current_cards[this.state.currentPlayer],t=this.drawCard();return console.log("in round"),this.state.discardMode?s.a.createElement(E.a,{className:"Game-header"},s.a.createElement(C.a,null,s.a.createElement(h,{addCard:this.state.cardToPlay})),s.a.createElement(C.a,null,s.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),s.a.createElement(k,{currentPlayer:this.state.currentPlayer,cardPlayed:this.state.cardToPlay,cardRemaining:this.state.cardRemaining,roundCallback:this.playCardCallback})):s.a.createElement(E.a,{className:"Game-header"},s.a.createElement(C.a,null,s.a.createElement(h,{addCard:" "})),s.a.createElement(C.a,null,s.a.createElement("h4",{className:"Play-status"},this.state.playStatus)),s.a.createElement(C.a,null,s.a.createElement(w.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(a,t,n)}},s.a.createElement(g,{cardname:a})),s.a.createElement(w.a,{style:{display:"inline-flex"},onClick:function(n){return e.selectCard(t,a,n)}},s.a.createElement(g,{cardname:t}))),s.a.createElement(C.a,{style:{width:"50vw"}},s.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",disabled:" "==this.state.cardToPlay,onClick:this.discard},"Discard")))}}]),t}(s.a.Component),O=new(t(29).w3cwebsocket)(("https:"===window.location.protocol?"wss://":"ws://")+window.location.host+"/ws"),P=!1;O.onopen=function(){console.log("WebSocket Client Connected"),P=!0},function e(){P?console.log("DONE"):(console.log("WAITIG"),setTimeout(e,5))}();var j=O,S=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).startGame=function(){n.props.gameCallback(1)},n.startNewGame=function(){n.props.gameCallback(0)},n.endGame=function(){n.setState({gameOn:!1})},n.state={gameOn:!0},n.startGame=n.startGame.bind(Object(o.a)(n)),n.startNewGame=n.startNewGame.bind(Object(o.a)(n)),n.endGame=n.endGame.bind(Object(o.a)(n)),n.all_players=[],j.send("join"),j.onmessage=function(e){n.all_players=e.in,console.log(e.in)},n}return Object(i.a)(t,[{key:"render",value:function(){return this.props.toStartGame?s.a.createElement(E.a,{className:"Game-header"},s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},"Waiting For Players...")),s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement(f.a,null,this.all_players.map((function(e,a){return s.a.createElement(f.a.Item,{className:"List-item-design"},e)})))),s.a.createElement(C.a,{style:{width:"50vw"}},s.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:this.startGame},"Start Game"))):s.a.createElement(E.a,{className:"Game-header"},s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},this.props.final_winner," won the game!")),s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement(w.a,null,s.a.createElement(m.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.endGame},"Leave Game")),s.a.createElement(w.a,null,s.a.createElement(m.a,{size:"lg",style:{width:"30vw"},block:!0,className:"Confirm-button",onClick:this.startNewGame},"Start New Game"))))}}]),t}(s.a.Component),G=t(20),N=(t(66),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sendResults=n.sendResults.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"sendResults",value:function(e){console.log("Sent winner="+e),this.props.gameCallback(e)}},{key:"render",value:function(){var e=this,a=this.props.points,t="p1";return Object.entries(a).map((function(e){var n=Object(G.a)(e,2),s=n[0],r=n[1];r>=4&&(t=s);for(var c="",l=0;l<r;l++)c+="*";a[s]=c})),s.a.createElement(E.a,{className:"Game-header"},s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement("h4",{className:"Play-status"},this.props.winner,"'s letter reached the Princess!")),s.a.createElement(C.a,{style:{margin:"auto"}},s.a.createElement(f.a,null,Object.entries(a).map((function(e){var a=Object(G.a)(e,2),t=a[0],n=a[1];return s.a.createElement(f.a.Item,{className:"List-item-design"},s.a.createElement(w.a,{style:{display:"inline"}},t),s.a.createElement(w.a,{style:{display:"inline"}},n))})))),s.a.createElement(C.a,{style:{width:"50vw"}}," "!=t?s.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(a){return e.sendResults(t,a)}},"OK"):s.a.createElement(m.a,{size:"lg",block:!0,className:"Confirm-button",onClick:function(a){return e.sendResults(t,a)}},"Start Next Round")))}}]),t}(s.a.Component)),_=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingCallback=function(e){n.setState({gameStatus:e})},n.roundCallback=function(e){var a=e,t=n.state.points;t[a]=t[a]+1,n.setState({rounds_played:n.state.rounds_played+1,points:t,gameStatus:2,round_winner:a})},n.resultsCallback=function(e){" "!=e?(n.setState({gameStatus:3,round_winner:e}),console.log("results="+e),console.log("set state=3")):(n.setState({gameStatus:1}),console.log("set state=1"))},n.state={gameStatus:0,toStartGame:!0,rounds_played:0,points:y.player_points,round_winner:" "},n.landingCallback=n.landingCallback.bind(Object(o.a)(n)),n.roundCallback=n.roundCallback.bind(Object(o.a)(n)),n.resultsCallback=n.resultsCallback.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"render",value:function(){return 0==this.state.gameStatus?s.a.createElement(S,{toStartGame:this.state.toStartGame,gameCallback:this.landingCallback}):1==this.state.gameStatus?s.a.createElement(v,{gameCallback:this.roundCallback}):2==this.state.gameStatus?s.a.createElement(N,{points:this.state.points,winner:this.state.round_winner,gameCallback:this.resultsCallback}):s.a.createElement(S,{toStartGame:!1,final_winner:this.state.round_winner,gameCallback:this.landingCallback})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.50f16a95.chunk.js.map