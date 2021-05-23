(self.webpackChunkca_docs=self.webpackChunkca_docs||[]).push([[809],{4963:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={sidebar_position:2},s={unversionedId:"strategy/javascript",id:"strategy/javascript",isDocsHomePage:!1,title:"JavaScript \u7b56\u7565\u958b\u767c",description:"\u57fa\u672c\u7d50\u69cb",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/strategy/javascript.md",sourceDirName:"strategy",slug:"/strategy/javascript",permalink:"/docs/strategy/javascript",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/strategy/javascript.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Python \u7b56\u7565\u958b\u767c",permalink:"/docs/strategy/python"}},l=[{value:"\u57fa\u672c\u7d50\u69cb",id:"\u57fa\u672c\u7d50\u69cb",children:[]},{value:"\u7b56\u7565",id:"\u7b56\u7565",children:[]},{value:"\u50b3\u5165\u8cc7\u6599\u7d50\u69cb ( trade() )",id:"\u50b3\u5165\u8cc7\u6599\u7d50\u69cb--trade-",children:[{value:"Candle",id:"candle",children:[]},{value:"Order Books",id:"order-books",children:[]},{value:"Assets",id:"assets",children:[]}]},{value:"\u56de\u50b3\u503c (trade)",id:"\u56de\u50b3\u503c-trade",children:[{value:"\u57fa\u672c\u683c\u5f0f",id:"\u57fa\u672c\u683c\u5f0f",children:[]},{value:"\u6b04\u4f4d\u8aaa\u660e",id:"\u6b04\u4f4d\u8aaa\u660e",children:[]},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",children:[]}]},{value:"Log",id:"log",children:[]},{value:"GetLastOrderSnapshot",id:"getlastordersnapshot",children:[]},{value:"\u5b58\u53d6\u7b56\u7565\u53c3\u6578",id:"\u5b58\u53d6\u7b56\u7565\u53c3\u6578",children:[]}],p={toc:l};function c(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u57fa\u672c\u7d50\u69cb"},"\u57fa\u672c\u7d50\u69cb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 nodejs \u64b0\u5beb\u7b26\u5408 ES6 \u7684 Strategy Class"),(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u900f\u904e\u56fa\u5b9a\u4ecb\u9762\u547c\u53eb\uff0c\u50b3\u5165\u5e02\u5834\u8cc7\u6599\uff0c\u7b56\u7565\u9808\u56de\u50b3\u662f\u5426\u57f7\u884c\u8a02\u55ae"),(0,i.kt)("li",{parentName:"ul"},"\u7b56\u7565\u9808\u81ea\u884c\u7dad\u8b77\u8a02\u55ae\u751f\u547d\u9031\u671f"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acrazing/talib-binding-node"},"TA-LIB")," \u8a08\u7b97\u5e38\u898b\u6280\u8853\u6307\u6a19\uff0c\u4f7f\u7528 TA \u5b58\u53d6"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 Log(str) \u7d00\u9304\u904b\u884c\u8cc7\u8a0a"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 GetLastOrderSnapshot() \u53d6\u5f97\u6700\u5f8c\u6210\u4ea4\u8a02\u55ae\u8cc7\u8a0a")),(0,i.kt)("h2",{id:"\u7b56\u7565"},"\u7b56\u7565"),(0,i.kt)("p",null,"Class \u67b6\u69cb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'class BuyOneSellOneMarket {\n  trade(information) {\n    Log("Start strategy!");\n    const exchange = Object.keys(information.candles)[0];\n    const pair = Object.keys(information.candles[exchange])[0];\n\n    if (this.lastOrderType === "sell") {\n      this.lastOrderType = "buy";\n      return [\n        {\n          exchange: exchange,\n          pair: pair,\n          type: "MARKET",\n          amount: 1,\n          price: -1,\n        },\n      ];\n    } else {\n      this.lastOrderType = "sell";\n      return [\n        {\n          exchange: exchange,\n          pair: pair,\n          type: "MARKET",\n          amount: -1,\n          price: -1,\n        },\n      ];\n    }\n  }\n\n  // must have, monitoring life cycle of order you made\n  onOrderStateChanged(state) {\n    Log("onOrderStateChanged");\n  }\n\n  constructor() {\n    // must have for developer\n    this.subscribedBooks = {\n      Bitfinex: {\n        pairs: ["BTC-USDT"],\n      },\n    };\n\n    // seconds for broker to call trade()\n    // do not set the frequency below 60 sec.\n    // 60 * 30 for 30 mins\n    this.period = 60 * 30;\n\n    // must have\n    // assets should be set by broker\n    this.assets = undefined;\n\n    // customizable properties\n    // sell price - buy price\n    this.minEarnPerOp = 1;\n\n    // other properties, your code\n    this.lastOrderType = "sell";\n  }\n}\n')),(0,i.kt)("h2",{id:"\u50b3\u5165\u8cc7\u6599\u7d50\u69cb--trade-"},"\u50b3\u5165\u8cc7\u6599\u7d50\u69cb ( trade() )"),(0,i.kt)("p",null,"\u7cfb\u7d71\u547c\u53eb strategy \u6642\uff0c\u5171\u6703\u50b3\u5165\u4e00\u500b\u53c3\u6578\u4e26\u653e\u6b21\u65bc\u7b2c\u4e00\u500b\u53c3\u6578\uff0c\u6b64\u53c3\u6578\u5f8c\u7e8c\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"information"),"\u547d\u540d\u89e3\u91cb\uff0e\n\u50b3\u5165\u7684\u8cc7\u8a0a\u5206\u70ba\u5169\u5927\u9805\uff0c\u5176\u4e00\u70ba",(0,i.kt)("inlineCode",{parentName:"p"},"candle"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"K\u7dda\u5716\u8cc7\u8a0a"),")\uff0c\u53e6\u4e00\u9805\u70ba",(0,i.kt)("inlineCode",{parentName:"p"},"orderBooks"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"\u8a02\u55ae\u72c0\u614b"),")\uff0e\n\u4e0a\u8ff0\u5169\u9805\u8cc7\u8a0a\u5c07\u653e\u7f6e\u65bc\u4e00\u500b object \u4e2d\uff0c\u53d6\u7528\u65b9\u6cd5\u70ba:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const candle = information.candle;\nconst orderBooks = information.orderBooks;\n")),(0,i.kt)("p",null,"Crypto-Arsenal \u652f\u63f4\u55ae\u4e00 Strategy \u540c\u6642\u8a3b\u518a\u591a\u7d44\u4ea4\u6613 pair\uff0c\u56e0\u6b64",(0,i.kt)("inlineCode",{parentName:"p"},"candle"),"\u8207",(0,i.kt)("inlineCode",{parentName:"p"},"orderBooks"),"\u6703\u540c\u6642\u50b3\u5165\u591a\u7d44 pair \u7684\u8cc7\u8a0a\uff0c\u5982\u9700\u53d6\u7528\u8acb\u4ee5\u4e0b\u5217\u65b9\u5f0f\u53d6\u7528\uff0c\n\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"exchange"),"\u8207",(0,i.kt)("inlineCode",{parentName:"p"},"pair"),"\u70ba\u5728 strategy constructor \u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"this.subscribedBooks"),"\u5411\u7cfb\u7d71\u8a3b\u518a\u7684 pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const candle = information.candle;\nconst oneCandle = candle[exchange][pair];\n\nconst orderBooks = information.orderBooks;\nconst oneOrderBook = orderBooks[exchange][pair];\n")),(0,i.kt)("p",null,"Single Pair \u7b56\u7565\u4f7f\u7528\u8005\u53ef\u65bc\u4f7f\u7528\u7b56\u7565\u6642\u6c7a\u5b9a\u4f7f\u7528\u7684 pair, \u9019\u6642\u6b64\u8a2d\u5b9a\u6703\u88ab\u5ffd\u7565\uff0c\u4ee5\u4f7f\u7528\u8005\u57f7\u884c\u7b56\u7565\u6642\u9078\u64c7\u70ba\u4e3b\uff0c\u4e0b\u55ae\u6642\u8acb\u5f9e information \u53d6\u5f97\u7576\u524d\u4f7f\u7528\u7684 pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Correct way to get exchange / pair in single pair strategy\nconst exchange = Object.keys(information.candles)[0];\nconst pair = Object.keys(information.candles[exchange])[0];\nconst candleData = information.candles[exchange][pair][0];\n")),(0,i.kt)("h3",{id:"candle"},"Candle"),(0,i.kt)("p",null,"Candle \u6703\u4ee5 array of object \u7684\u5f62\u5f0f\u50b3\u5165\u4e0a\u6b21\u547c\u53eb\u5230\u6b64\u6b21\u547c\u53eb\u7684 K \u7dda\u5716\u8cc7\u8a0a\uff0c\u5171\u542b\u6709\u4e94\u9805\u8cc7\u8a0a ",(0,i.kt)("inlineCode",{parentName:"p"},"open"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"close"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"high"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"low"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"volume"),"\uff0c\u53d6\u7528\u65b9\u5f0f\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const candles = information.candles;\nconst oneCandle = candles[exchange][pair][0];\n\nconst open = oneCandle.open;\nconst close = oneCandle.close;\nconst high = oneCandle.high;\nconst low = oneCandle.low;\nconst volume = oneCandle.volume;\n")),(0,i.kt)("h3",{id:"order-books"},"Order Books"),(0,i.kt)("p",null,"Order Books \u6703\u4ee5 object of array of object \u7684\u5f62\u5f0f\u50b3\u5165\uff0c\u5c07\u50b3\u5165\u76ee\u524d\u4ea4\u6613\u6240\u4e2d\u6b64 pair \u7684\u8a02\u55ae\u8cc7\u8a0a\uff0c\u5206\u6210\u5169\u5927\u9805",(0,i.kt)("inlineCode",{parentName:"p"},"asks"),"\u8207",(0,i.kt)("inlineCode",{parentName:"p"},"bids"),"\uff0c\u5169\u9805\u4e2d\u7686\u6709\u76f8\u540c\u7684\u4e09\u9805\u8cc7\u6599\u683c\u5f0f",(0,i.kt)("inlineCode",{parentName:"p"},"price"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"count"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),"\uff0c\u53d6\u7528\u65b9\u5f0f\u5982\u4e0b:\n",(0,i.kt)("strong",{parentName:"p"},"\u5728\u57f7\u884c Backtest \u6a21\u5f0f\u4e2d\uff0c\u4e0d\u6703\u50b3\u5165 Order books \u8cc7\u8a0a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const orderBooks = information.orderBooks;\nconst oneOrderBook = orderBooks[exchange][pair];\n\nconst askOrderBook = oneOrderBook.asks;\nfor (const askOrder of askOrderBook) {\n  const price = askOrder.price;\n  const count = askOrder.count;\n  const amount = askOrder.amount;\n}\n\nconst bidOrderBook = oneOrderBook.bids;\nfor (const bidOrder of bidOrderBook) {\n  const price = bidOrder.price;\n  const count = bidOrder.count;\n  const amount = bidOrder.amount;\n}\n")),(0,i.kt)("h3",{id:"assets"},"Assets"),(0,i.kt)("p",null,"\u7b56\u7565\u6703\u64c1\u6709\u96a8\u6642\u66f4\u65b0\u7684\u8cc7\u7522 (assets) \u8cc7\u8a0a\uff0c\u5373\u7576\u524d\u53ef\u9032\u884c\u64cd\u4f5c\u7684\u8ca8\u5e63\uff0c\u53d6\u7528\u65b9\u5f0f\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const usd = this.assets[exchange]["USDT"];\nconst eth = this.assets[exchange]["ETH"];\n')),(0,i.kt)("h2",{id:"\u56de\u50b3\u503c-trade"},"\u56de\u50b3\u503c (trade)"),(0,i.kt)("p",null,"\u5728 Crypto-Arsenal \u7684\u7b56\u7565\u4e2d\uff0c\u8981\u5411\u4ea4\u6613\u6240\u4e0b\u8a02\u55ae\u7684\u65b9\u5f0f\u63a1\u7528\u7cfb\u7d71\u547c\u53eb",(0,i.kt)("inlineCode",{parentName:"p"},"trade"),"\u7684\u56de\u50b3\u503c\u9032\u884c\u4ea4\u6613\u3002"),(0,i.kt)("h3",{id:"\u57fa\u672c\u683c\u5f0f"},"\u57fa\u672c\u683c\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    exchange: string\n    pair: string\n    type: string\n    amount: float\n    price: float\n  },\n  {\n    exchange: string\n    pair: string\n    type: string\n    amount: float\n    price: float\n  } ....\n]\n")),(0,i.kt)("p",null,"\u56de\u50b3\u503c\u70ba\u4e00\u500b\u542b\u6709 0-n \u500b object \u7684 array\u3002"),(0,i.kt)("h3",{id:"\u6b04\u4f4d\u8aaa\u660e"},"\u6b04\u4f4d\u8aaa\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"exchange: \u6b64\u7b46\u8a02\u55ae\u8981\u5411\u54ea\u500b\u4ea4\u6613\u6240\u9032\u884c\u4ea4\u6613"),(0,i.kt)("li",{parentName:"ul"},"pair: \u4ea4\u6613\u8ca8\u5e63\u5c0d"),(0,i.kt)("li",{parentName:"ul"},"type: \u6b64\u7b46\u8a02\u55ae\u63a1\u7528\u4f55\u7a2e\u4ea4\u6613\u65b9\u5f0f (\u9650\u50f9: ",(0,i.kt)("inlineCode",{parentName:"li"},"LIMIT")," \u5e02\u50f9: ",(0,i.kt)("inlineCode",{parentName:"li"},"MARKET"),")"),(0,i.kt)("li",{parentName:"ul"},"amount: \u8981\u4ea4\u6613\u7684\u6578\u4f4d\u8ca8\u5e63\u6578\u91cf\uff0c\u5927\u65bc 0 \u4ee3\u8868\u8cfc\u8cb7\uff0c\u5c0f\u65bc 0 \u4ee3\u8868\u8ca9\u8ce3"),(0,i.kt)("li",{parentName:"ul"},"price: \u4ee5\u591a\u5c11\u50f9\u683c\u9032\u884c\u4ea4\u6613\uff0c\u82e5\u63a1\u7528\u5e02\u50f9\uff0c\u6b64\u6b04\u4f4d\u8acb\u586b\u5165\u96a8\u610f\u503c")),(0,i.kt)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,i.kt)("h4",{id:"\u9650\u50f9"},"\u9650\u50f9"),(0,i.kt)("p",null,"\u6b64\u8a02\u55ae\u70ba\u6b32\u5411",(0,i.kt)("inlineCode",{parentName:"p"},"Binance"),"\u4ea4\u6613\u6240\uff0c\u4ee5\u6bcf\u55ae\u4f4d",(0,i.kt)("inlineCode",{parentName:"p"},"214.42"),"\u8cfc\u8cb7",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u500b",(0,i.kt)("inlineCode",{parentName:"p"},"ETH-USDT"),"\u7684\u4ea4\u6613\u914d\u5c0d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    exchange: "Binance",\n    pair: "ETH-USDT",\n    type: "LIMIT",\n    amount: 1,\n    price: 212.42,\n  },\n];\n')),(0,i.kt)("h4",{id:"\u5e02\u50f9"},"\u5e02\u50f9"),(0,i.kt)("p",null,"\u6b64\u8a02\u55ae\u70ba\u6b32\u5411",(0,i.kt)("inlineCode",{parentName:"p"},"Binance"),"\u4ea4\u6613\u6240\uff0c\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e02\u50f9"),"\u8cfc\u8cb7",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u500b",(0,i.kt)("inlineCode",{parentName:"p"},"ETH-USDT"),"\u7684\u4ea4\u6613\u914d\u5c0d"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u96d6\u7136\u4ea4\u6613\u63a1\u7528\u5e02\u50f9\uff0cprice \u4ecd\u9808\u5b58\u5728\uff0c\u503c\u70ba\u96a8\u610f\u6578\u503c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    exchange: "Binance",\n    pair: "ETH-USDT",\n    type: "MARKET",\n    amount: 1,\n    price: -1,\n  },\n];\n')),(0,i.kt)("h1",{id:"helper-functions"},"Helper Functions"),(0,i.kt)("h2",{id:"log"},"Log"),(0,i.kt)("p",null,"Used to log the message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Log(str);\n")),(0,i.kt)("p",null,"Must pass in javascript's ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type.\nMaximum length of string is 200 characters"),(0,i.kt)("h2",{id:"getlastordersnapshot"},"GetLastOrderSnapshot"),(0,i.kt)("p",null,"\u56de\u50b3\u6700\u5f8c\u4e00\u6b21\u6210\u4ea4\u8a02\u55ae\uff0c\u5305\u542b\u5e02\u50f9\u55ae\u6210\u4ea4\u50f9\u683c\n\u7d50\u69cb\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{'exchange': 'Bitfinex', 'pair': 'ETH-USDT', 'amount': 1.0, 'price': 182.39, 'type': 'MARKET'}\n")),(0,i.kt)("h2",{id:"\u5b58\u53d6\u7b56\u7565\u53c3\u6578"},"\u5b58\u53d6\u7b56\u7565\u53c3\u6578"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.xxx")," \u6216\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"this['OPTION_NAME']")," \u5b58\u53d6\u7b56\u7565\u53c3\u6578"),(0,i.kt)("h1",{id:"\u66f4\u591a\u7bc4\u4f8b"},"\u66f4\u591a\u7bc4\u4f8b"),(0,i.kt)("p",null,"\u6b64\u7b56\u7565\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acrazing/talib-binding-node"},"TA-LIB"),"\u8a08\u7b97\u5169\u689d\u6307\u6578\u5e73\u5747\u7dda(\u5feb\u7dda\u8207\u6162\u7dda)\uff0c\u4e26\u7576\u767c\u751f\u9ec3\u91d1\u4ea4\u53c9(\u5feb\u7dda\u5f80\u4e0a\u7a7f\u904e\u6162\u7dda)\u6642\u8cb7\u5165\uff0c\u6b7b\u4ea1\u4ea4\u53c9(\u5feb\u7dda\u5f80\u4e0b\u7a7f\u7834\u6162\u7dda)\u6642\u8ce3\u51fa\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'class EMACross {\n  // must have\n  // function for trading strategy\n  // return order object for trading or null for not trading\n  trade(information) {\n    // define your own trading strategy here\n\n    // exchange may offline\n    if (!information.candles) return [];\n\n    const exchange = Object.keys(information.candles)[0];\n    const pair = Object.keys(information.candles[exchange])[0];\n    const baseCurrency = pair.split("-")[1]; // pair must in format \'{TARGET}-{BASE}\', eg. BTC-USDT, ETH-BTC\n    const currency = pair.split("-")[0]; // pair must in format \'{TARGET}-{BASE}\', eg. BTC-USDT, ETH-BTC\n\n    if (!information.candles[exchange][pair]) return [];\n\n    // information like\n    const candleData = information.candles[exchange][pair][0];\n\n    // keep track history data\n    this.history.push({\n      Time: candleData.time,\n      Open: candleData.open,\n      Close: candleData.close,\n      High: candleData.high,\n      Low: candleData.low,\n      Volumn: candleData.volumn,\n    });\n\n    let lastPrice = information.candles[exchange][pair][0]["close"];\n    if (!lastPrice) return [];\n\n    // release old data\n    if (this.history.length > this.long) {\n      this.history.shift();\n    } else {\n      return [];\n    }\n\n    const marketData = this.history;\n    // Calculate EMA with TA-LIB, return type is [double], get last MA value by pop()\n    const MAShort = TA.EMA(marketData, "Close", this.short).pop();\n    const MALong = TA.EMA(marketData, "Close", this.long).pop();\n\n    // Track cross\n    const curSide = MAShort > MALong ? "UP" : "DOWN";\n    Log("MA side: " + curSide);\n    if (!this.preSide) {\n      this.preSide = curSide;\n      return [];\n    }\n\n    // When up cross happend\n    if (\n      this.phase == this.PHASES.waitBuy &&\n      this.preSide == "DOWN" &&\n      curSide == "UP"\n    ) {\n      // Not enough assets, we can\'t buy\n      if (this.assets[exchange][baseCurrency] < lastPrice) {\n        return [];\n      }\n      this.preSide = curSide;\n      this.phase = this.PHASES.waitSell;\n      // Buy 1 coin\n      return [\n        {\n          exchange: exchange,\n          pair: pair,\n          type: "LIMIT",\n          amount: 1, // [CHANGE THIS] \u4e00\u6b21\u8cb7\u5165\u591a\u5c11\n          price: lastPrice,\n        },\n      ];\n    }\n    if (\n      this.phase == this.PHASES.waitSell &&\n      this.preSide == "UP" &&\n      curSide == "DOWN"\n    ) {\n      this.preSide = curSide;\n      this.phase = this.PHASES.waitBuy;\n      // Sell all remaining coin\n      return [\n        {\n          exchange: exchange,\n          pair: pair,\n          type: "LIMIT",\n          amount: -this.assets[exchange][currency], // \u4e00\u6b21\u8ce3\u51fa\u6240\u6709\u64c1\u6709\u7684\n          price: lastPrice,\n        },\n      ];\n    }\n\n    this.preSide = curSide;\n    return [];\n  }\n\n  // must have\n  onOrderStateChanged(state) {\n    Log("order change" + JSON.stringify(state));\n  }\n\n  constructor() {\n    // must have for developer\n    this.subscribedBooks = {\n      Binance: {\n        pairs: ["ETH-USDT"],\n      },\n    };\n\n    // seconds for broker to call trade()\n    // do not set the frequency below 60 sec.\n    this.period = 60 * 60; // [CHANGE THIS] \u8a2d\u5b9a\u5747\u7dda\u8cc7\u6599\u9ede\u7684\u6642\u9593\u9593\u9694\uff0c\u5373\u5747\u7dda\u9031\u671f\n    // must have\n    // assets should be set by broker\n    this.assets = undefined;\n\n    // customizable properties\n    this.long = 10; // [CHANGE THIS] \u8a2d\u5b9a\u5747\u7dda\u4ea4\u53c9\u7684\u6162\u7dda\u9031\u671f\n    this.short = 5; // [CHANGE THIS] \u8a2d\u5b9a\u5747\u7dda\u4ea4\u53c9\u7684\u5feb\u7dda\u9031\u671f\n    this.PHASES = {\n      init: 0,\n      waitBuy: 2,\n      waitSell: 4,\n    };\n\n    this.preSide = undefined;\n\n    this.phase = this.PHASES.waitBuy;\n\n    this.history = [];\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8abf\u6574\u53c3\u6578")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/y82aDps.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/VGIhd4z.png",alt:null})))}c.isMDXComponent=!0}}]);