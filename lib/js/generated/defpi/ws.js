// Compiled by ClojureScript 0.0-2173
goog.provide('defpi.ws');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('defpi.ringbuffer');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('defpi.keyboard');
goog.require('cljs.reader');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('defpi.ringbuffer');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('defpi.keyboard');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
defpi.ws.ws = cljs.core.atom.call(null,null);
defpi.ws.err_cnt = cljs.core.atom.call(null,0);
defpi.ws.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"messages","messages",551810238),defpi.ringbuffer.mk_ringbuffer.call(null,100),new cljs.core.Keyword(null,"jobs","jobs",1017171912),cljs.core.PersistentHashSet.EMPTY], null));
defpi.ws.jobs_comp = (function jobs_comp(data,owner){if(typeof defpi.ws.t9136 !== 'undefined')
{} else
{
/**
* @constructor
*/
defpi.ws.t9136 = (function (owner,data,jobs_comp,meta9137){
this.owner = owner;
this.data = data;
this.jobs_comp = jobs_comp;
this.meta9137 = meta9137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defpi.ws.t9136.cljs$lang$type = true;
defpi.ws.t9136.cljs$lang$ctorStr = "defpi.ws/t9136";
defpi.ws.t9136.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"defpi.ws/t9136");
});
defpi.ws.t9136.prototype.om$core$IRender$ = true;
defpi.ws.t9136.prototype.om$core$IRender$render$arity$1 = (function (this__5399__auto__){var self__ = this;
var this__5399__auto____$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (j_id){return React.DOM.div({"style": {"background": "deeppink", "font-size": "15px", "color": "white", "width": "35px", "height": "35px", "float": "right"}, "onClick": (function (){return defpi.ws.stop_job.call(null,j_id);
}), "className": "animated rotateIn"},j_id);
}),new cljs.core.Keyword(null,"jobs","jobs",1017171912).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
defpi.ws.t9136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9138){var self__ = this;
var _9138__$1 = this;return self__.meta9137;
});
defpi.ws.t9136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9138,meta9137__$1){var self__ = this;
var _9138__$1 = this;return (new defpi.ws.t9136(self__.owner,self__.data,self__.jobs_comp,meta9137__$1));
});
defpi.ws.__GT_t9136 = (function __GT_t9136(owner__$1,data__$1,jobs_comp__$1,meta9137){return (new defpi.ws.t9136(owner__$1,data__$1,jobs_comp__$1,meta9137));
});
}
return (new defpi.ws.t9136(owner,data,jobs_comp,null));
});
defpi.ws.message_comp = (function message_comp(data,owner){if(typeof defpi.ws.t9142 !== 'undefined')
{} else
{
/**
* @constructor
*/
defpi.ws.t9142 = (function (owner,data,message_comp,meta9143){
this.owner = owner;
this.data = data;
this.message_comp = message_comp;
this.meta9143 = meta9143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
defpi.ws.t9142.cljs$lang$type = true;
defpi.ws.t9142.cljs$lang$ctorStr = "defpi.ws/t9142";
defpi.ws.t9142.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"defpi.ws/t9142");
});
defpi.ws.t9142.prototype.om$core$IRender$ = true;
defpi.ws.t9142.prototype.om$core$IRender$render$arity$1 = (function (this__5399__auto__){var self__ = this;
var this__5399__auto____$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (m){return React.DOM.div(null,cljs.core.get.call(null,m,"val"),(cljs.core.truth_(cljs.core.get.call(null,m,"backtrace"))?React.DOM.div(null,React.DOM.pre(null,clojure.string.join.call(null,"\n",cljs.core.get.call(null,m,"backtrace")))):null));
}),new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
defpi.ws.t9142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9144){var self__ = this;
var _9144__$1 = this;return self__.meta9143;
});
defpi.ws.t9142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9144,meta9143__$1){var self__ = this;
var _9144__$1 = this;return (new defpi.ws.t9142(self__.owner,self__.data,self__.message_comp,meta9143__$1));
});
defpi.ws.__GT_t9142 = (function __GT_t9142(owner__$1,data__$1,message_comp__$1,meta9143){return (new defpi.ws.t9142(owner__$1,data__$1,message_comp__$1,meta9143));
});
}
return (new defpi.ws.t9142(owner,data,message_comp,null));
});
defpi.ws.hostname = (function (){var hn = window.location.host;if(cljs.core._EQ_.call(null,"",hn))
{return "localhost";
} else
{return cljs.core.re_find.call(null,/[^\:]+/,hn);
}
})();
defpi.ws.show_msg = (function show_msg(msg){return cljs.core.swap_BANG_.call(null,defpi.ws.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",551810238)], null),defpi.ringbuffer.add,msg);
});
defpi.ws.show_multi_msg = (function show_multi_msg(msg){return cljs.core.swap_BANG_.call(null,defpi.ws.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",551810238)], null),defpi.ringbuffer.add,msg);
});
defpi.ws.reply_sync = (function reply_sync(msg,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"sync","sync",1017449997).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(temp__4092__auto__))
{var id = temp__4092__auto__;return cljs.core.deref.call(null,defpi.ws.ws).send(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd","cmd",1014002860),"sync",new cljs.core.Keyword(null,"val","val",1014020755),id,new cljs.core.Keyword(null,"result","result",4374444943),((typeof res === 'number')?res:(((res instanceof cljs.core.Keyword))?res:((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(res)].join(''):null)))], null));
} else
{return null;
}
});
defpi.ws.handle_message = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-message",(function (p1__9145_SHARP_){return cljs.core.get.call(null,p1__9145_SHARP_,"type");
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,defpi.ws.handle_message,"message",(function (msg){return defpi.ws.show_msg.call(null,msg);
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,"multimessage",(function (msgs){return defpi.ws.show_multi_msg.call(null,msgs);
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,"error",(function (msg){return defpi.ws.show_msg.call(null,msg);
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,"debug_message",(function (msg){return cljs.core.println.call(null,"debug=> ",msg);
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,"replace-buffer",(function (msg){return editor.setValue(cljs.core.get.call(null,msg,"val"));
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,"job",(function (msg){if(cljs.core._EQ_.call(null,"start",cljs.core.get.call(null,msg,"action")))
{return cljs.core.swap_BANG_.call(null,defpi.ws.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",1017171912)], null),cljs.core.conj,cljs.core.get.call(null,msg,"jobid"));
} else
{if(cljs.core._EQ_.call(null,"completed",cljs.core.get.call(null,msg,"action")))
{return cljs.core.swap_BANG_.call(null,defpi.ws.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",1017171912)], null),cljs.core.disj,cljs.core.get.call(null,msg,"jobid"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return alert([cljs.core.str("Unknown job action: "),cljs.core.str(new cljs.core.Keyword(null,"action","action",3885920680).cljs$core$IFn$_invoke$arity$1(msg))].join(''));
} else
{return null;
}
}
}
}));
cljs.core._add_method.call(null,defpi.ws.handle_message,Object,(function (m){return console.log("can't handle: ",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(m));
}));
defpi.ws.replace_buffer = (function replace_buffer(buf_id){return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"id": [cljs.core.str(buf_id)].join(''), "cmd": "load-buffer"}));
});
defpi.ws.add_ws_handlers = (function add_ws_handlers(){cljs.core.deref.call(null,defpi.ws.ws).onopen = (function (){om.core.root.call(null,defpi.ws.message_comp,defpi.ws.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app-messages")], null));
om.core.root.call(null,defpi.ws.jobs_comp,defpi.ws.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app-jobs")], null));
return defpi.ws.replace_buffer.call(null,"main");
});
cljs.core.deref.call(null,defpi.ws.ws).onclose = (function (){return defpi.ws.show_msg.call(null,"Websocket Closed");
});
cljs.core.deref.call(null,defpi.ws.ws).onmessage = (function (m){var msg = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,m.data));var res = defpi.ws.handle_message.call(null,msg);return defpi.ws.reply_sync.call(null,msg,res);
});
return goog.events.listen(document,defpi.keyboard.keyword__GT_event_type.call(null,new cljs.core.Keyword(null,"keypress","keypress",1530666166)),(function (e){var code = e.charCode;if(cljs.core._EQ_.call(null,18,code))
{return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"buffer_id": "main", "val": editor.getValue(), "cmd": "save-and-run-buffer"}));
} else
{if(cljs.core._EQ_.call(null,19,code))
{return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"val": editor.getValue(), "cmd": "stop-jobs"}));
} else
{return null;
}
}
}));
});
defpi.ws.sendCode = (function sendCode(){return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"buffer_id": "main", "val": editor.getValue(), "cmd": "save-and-run-buffer"}));
});
goog.exportSymbol('defpi.ws.sendCode', defpi.ws.sendCode);
defpi.ws.stopCode = (function stopCode(){return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"val": editor.getValue(), "cmd": "stop-jobs"}));
});
goog.exportSymbol('defpi.ws.stopCode', defpi.ws.stopCode);
defpi.ws.reloadCode = (function reloadCode(){return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"val": editor.getValue(), "cmd": "reload"}));
});
goog.exportSymbol('defpi.ws.reloadCode', defpi.ws.reloadCode);
defpi.ws.stop_job = (function stop_job(j_id){return cljs.core.deref.call(null,defpi.ws.ws).send(JSON.stringify.call(null,{"val": j_id, "cmd": "stop-job"}));
});
defpi.ws.mk_ws = (function mk_ws(){return cljs.core.reset_BANG_.call(null,defpi.ws.ws,(new WebSocket([cljs.core.str("ws://"),cljs.core.str(defpi.ws.hostname),cljs.core.str(":8001")].join(''))));
});

//# sourceMappingURL=ws.js.map