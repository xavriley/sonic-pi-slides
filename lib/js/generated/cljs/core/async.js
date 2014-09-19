// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10513 = (function (f,fn_handler,meta10514){
this.f = f;
this.fn_handler = fn_handler;
this.meta10514 = meta10514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10513.cljs$lang$type = true;
cljs.core.async.t10513.cljs$lang$ctorStr = "cljs.core.async/t10513";
cljs.core.async.t10513.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10513");
});
cljs.core.async.t10513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10515){var self__ = this;
var _10515__$1 = this;return self__.meta10514;
});
cljs.core.async.t10513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10515,meta10514__$1){var self__ = this;
var _10515__$1 = this;return (new cljs.core.async.t10513(self__.f,self__.fn_handler,meta10514__$1));
});
cljs.core.async.__GT_t10513 = (function __GT_t10513(f__$1,fn_handler__$1,meta10514){return (new cljs.core.async.t10513(f__$1,fn_handler__$1,meta10514));
});
}
return (new cljs.core.async.t10513(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10517 = buff;if(G__10517)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10517.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10517.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10517);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10517);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10518 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10518);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10518);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10519 = n;var x_10520 = 0;while(true){
if((x_10520 < n__4291__auto___10519))
{(a[x_10520] = 0);
{
var G__10521 = (x_10520 + 1);
x_10520 = G__10521;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10522 = (i + 1);
i = G__10522;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10526 = (function (flag,alt_flag,meta10527){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10527 = meta10527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10526.cljs$lang$type = true;
cljs.core.async.t10526.cljs$lang$ctorStr = "cljs.core.async/t10526";
cljs.core.async.t10526.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10526");
});
cljs.core.async.t10526.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10528){var self__ = this;
var _10528__$1 = this;return self__.meta10527;
});
cljs.core.async.t10526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10528,meta10527__$1){var self__ = this;
var _10528__$1 = this;return (new cljs.core.async.t10526(self__.flag,self__.alt_flag,meta10527__$1));
});
cljs.core.async.__GT_t10526 = (function __GT_t10526(flag__$1,alt_flag__$1,meta10527){return (new cljs.core.async.t10526(flag__$1,alt_flag__$1,meta10527));
});
}
return (new cljs.core.async.t10526(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10532 = (function (cb,flag,alt_handler,meta10533){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10533 = meta10533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10532.cljs$lang$type = true;
cljs.core.async.t10532.cljs$lang$ctorStr = "cljs.core.async/t10532";
cljs.core.async.t10532.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10532");
});
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10534){var self__ = this;
var _10534__$1 = this;return self__.meta10533;
});
cljs.core.async.t10532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10534,meta10533__$1){var self__ = this;
var _10534__$1 = this;return (new cljs.core.async.t10532(self__.cb,self__.flag,self__.alt_handler,meta10533__$1));
});
cljs.core.async.__GT_t10532 = (function __GT_t10532(cb__$1,flag__$1,alt_handler__$1,meta10533){return (new cljs.core.async.t10532(cb__$1,flag__$1,alt_handler__$1,meta10533));
});
}
return (new cljs.core.async.t10532(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10535_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10535_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10536 = (i + 1);
i = G__10536;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10537){var map__10539 = p__10537;var map__10539__$1 = ((cljs.core.seq_QMARK_.call(null,map__10539))?cljs.core.apply.call(null,cljs.core.hash_map,map__10539):map__10539);var opts = map__10539__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10537 = null;if (arguments.length > 1) {
  p__10537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10537);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10540){
var ports = cljs.core.first(arglist__10540);
var p__10537 = cljs.core.rest(arglist__10540);
return alts_BANG___delegate(ports,p__10537);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10548 = (function (ch,f,map_LT_,meta10549){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10549 = meta10549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10548.cljs$lang$type = true;
cljs.core.async.t10548.cljs$lang$ctorStr = "cljs.core.async/t10548";
cljs.core.async.t10548.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10548");
});
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10551 = (function (fn1,_,meta10549,ch,f,map_LT_,meta10552){
this.fn1 = fn1;
this._ = _;
this.meta10549 = meta10549;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10552 = meta10552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10551.cljs$lang$type = true;
cljs.core.async.t10551.cljs$lang$ctorStr = "cljs.core.async/t10551";
cljs.core.async.t10551.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10551");
});
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10541_SHARP_){return f1.call(null,(((p1__10541_SHARP_ == null))?null:self__.f.call(null,p1__10541_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10553){var self__ = this;
var _10553__$1 = this;return self__.meta10552;
});
cljs.core.async.t10551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10553,meta10552__$1){var self__ = this;
var _10553__$1 = this;return (new cljs.core.async.t10551(self__.fn1,self__._,self__.meta10549,self__.ch,self__.f,self__.map_LT_,meta10552__$1));
});
cljs.core.async.__GT_t10551 = (function __GT_t10551(fn1__$1,___$2,meta10549__$1,ch__$2,f__$2,map_LT___$2,meta10552){return (new cljs.core.async.t10551(fn1__$1,___$2,meta10549__$1,ch__$2,f__$2,map_LT___$2,meta10552));
});
}
return (new cljs.core.async.t10551(fn1,___$1,self__.meta10549,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10550){var self__ = this;
var _10550__$1 = this;return self__.meta10549;
});
cljs.core.async.t10548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10550,meta10549__$1){var self__ = this;
var _10550__$1 = this;return (new cljs.core.async.t10548(self__.ch,self__.f,self__.map_LT_,meta10549__$1));
});
cljs.core.async.__GT_t10548 = (function __GT_t10548(ch__$1,f__$1,map_LT___$1,meta10549){return (new cljs.core.async.t10548(ch__$1,f__$1,map_LT___$1,meta10549));
});
}
return (new cljs.core.async.t10548(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10557 = (function (ch,f,map_GT_,meta10558){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10558 = meta10558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10557.cljs$lang$type = true;
cljs.core.async.t10557.cljs$lang$ctorStr = "cljs.core.async/t10557";
cljs.core.async.t10557.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10557");
});
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10559){var self__ = this;
var _10559__$1 = this;return self__.meta10558;
});
cljs.core.async.t10557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10559,meta10558__$1){var self__ = this;
var _10559__$1 = this;return (new cljs.core.async.t10557(self__.ch,self__.f,self__.map_GT_,meta10558__$1));
});
cljs.core.async.__GT_t10557 = (function __GT_t10557(ch__$1,f__$1,map_GT___$1,meta10558){return (new cljs.core.async.t10557(ch__$1,f__$1,map_GT___$1,meta10558));
});
}
return (new cljs.core.async.t10557(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10563 = (function (ch,p,filter_GT_,meta10564){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10564 = meta10564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10563.cljs$lang$type = true;
cljs.core.async.t10563.cljs$lang$ctorStr = "cljs.core.async/t10563";
cljs.core.async.t10563.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10563");
});
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10565){var self__ = this;
var _10565__$1 = this;return self__.meta10564;
});
cljs.core.async.t10563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10565,meta10564__$1){var self__ = this;
var _10565__$1 = this;return (new cljs.core.async.t10563(self__.ch,self__.p,self__.filter_GT_,meta10564__$1));
});
cljs.core.async.__GT_t10563 = (function __GT_t10563(ch__$1,p__$1,filter_GT___$1,meta10564){return (new cljs.core.async.t10563(ch__$1,p__$1,filter_GT___$1,meta10564));
});
}
return (new cljs.core.async.t10563(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___10648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_10627){var state_val_10628 = (state_10627[1]);if((state_val_10628 === 1))
{var state_10627__$1 = state_10627;var statearr_10629_10649 = state_10627__$1;(statearr_10629_10649[2] = null);
(statearr_10629_10649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 2))
{var state_10627__$1 = state_10627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10627__$1,4,ch);
} else
{if((state_val_10628 === 3))
{var inst_10625 = (state_10627[2]);var state_10627__$1 = state_10627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10627__$1,inst_10625);
} else
{if((state_val_10628 === 4))
{var inst_10609 = (state_10627[7]);var inst_10609__$1 = (state_10627[2]);var inst_10610 = (inst_10609__$1 == null);var state_10627__$1 = (function (){var statearr_10630 = state_10627;(statearr_10630[7] = inst_10609__$1);
return statearr_10630;
})();if(cljs.core.truth_(inst_10610))
{var statearr_10631_10650 = state_10627__$1;(statearr_10631_10650[1] = 5);
} else
{var statearr_10632_10651 = state_10627__$1;(statearr_10632_10651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 5))
{var inst_10612 = cljs.core.async.close_BANG_.call(null,out);var state_10627__$1 = state_10627;var statearr_10633_10652 = state_10627__$1;(statearr_10633_10652[2] = inst_10612);
(statearr_10633_10652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 6))
{var inst_10609 = (state_10627[7]);var inst_10614 = p.call(null,inst_10609);var state_10627__$1 = state_10627;if(cljs.core.truth_(inst_10614))
{var statearr_10634_10653 = state_10627__$1;(statearr_10634_10653[1] = 8);
} else
{var statearr_10635_10654 = state_10627__$1;(statearr_10635_10654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 7))
{var inst_10623 = (state_10627[2]);var state_10627__$1 = state_10627;var statearr_10636_10655 = state_10627__$1;(statearr_10636_10655[2] = inst_10623);
(statearr_10636_10655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 8))
{var inst_10609 = (state_10627[7]);var state_10627__$1 = state_10627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10627__$1,11,out,inst_10609);
} else
{if((state_val_10628 === 9))
{var state_10627__$1 = state_10627;var statearr_10637_10656 = state_10627__$1;(statearr_10637_10656[2] = null);
(statearr_10637_10656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 10))
{var inst_10620 = (state_10627[2]);var state_10627__$1 = (function (){var statearr_10638 = state_10627;(statearr_10638[8] = inst_10620);
return statearr_10638;
})();var statearr_10639_10657 = state_10627__$1;(statearr_10639_10657[2] = null);
(statearr_10639_10657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10628 === 11))
{var inst_10617 = (state_10627[2]);var state_10627__$1 = state_10627;var statearr_10640_10658 = state_10627__$1;(statearr_10640_10658[2] = inst_10617);
(statearr_10640_10658[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_10644 = [null,null,null,null,null,null,null,null,null];(statearr_10644[0] = state_machine__6741__auto__);
(statearr_10644[1] = 1);
return statearr_10644;
});
var state_machine__6741__auto____1 = (function (state_10627){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_10627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e10645){if((e10645 instanceof Object))
{var ex__6744__auto__ = e10645;var statearr_10646_10659 = state_10627;(statearr_10646_10659[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10660 = state_10627;
state_10627 = G__10660;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_10627){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_10627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_10647 = f__6811__auto__.call(null);(statearr_10647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___10648);
return statearr_10647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6810__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_10812){var state_val_10813 = (state_10812[1]);if((state_val_10813 === 1))
{var state_10812__$1 = state_10812;var statearr_10814_10851 = state_10812__$1;(statearr_10814_10851[2] = null);
(statearr_10814_10851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 2))
{var state_10812__$1 = state_10812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10812__$1,4,in$);
} else
{if((state_val_10813 === 3))
{var inst_10810 = (state_10812[2]);var state_10812__$1 = state_10812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10812__$1,inst_10810);
} else
{if((state_val_10813 === 4))
{var inst_10758 = (state_10812[7]);var inst_10758__$1 = (state_10812[2]);var inst_10759 = (inst_10758__$1 == null);var state_10812__$1 = (function (){var statearr_10815 = state_10812;(statearr_10815[7] = inst_10758__$1);
return statearr_10815;
})();if(cljs.core.truth_(inst_10759))
{var statearr_10816_10852 = state_10812__$1;(statearr_10816_10852[1] = 5);
} else
{var statearr_10817_10853 = state_10812__$1;(statearr_10817_10853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 5))
{var inst_10761 = cljs.core.async.close_BANG_.call(null,out);var state_10812__$1 = state_10812;var statearr_10818_10854 = state_10812__$1;(statearr_10818_10854[2] = inst_10761);
(statearr_10818_10854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 6))
{var inst_10758 = (state_10812[7]);var inst_10763 = f.call(null,inst_10758);var inst_10768 = cljs.core.seq.call(null,inst_10763);var inst_10769 = inst_10768;var inst_10770 = null;var inst_10771 = 0;var inst_10772 = 0;var state_10812__$1 = (function (){var statearr_10819 = state_10812;(statearr_10819[8] = inst_10772);
(statearr_10819[9] = inst_10771);
(statearr_10819[10] = inst_10770);
(statearr_10819[11] = inst_10769);
return statearr_10819;
})();var statearr_10820_10855 = state_10812__$1;(statearr_10820_10855[2] = null);
(statearr_10820_10855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 7))
{var inst_10808 = (state_10812[2]);var state_10812__$1 = state_10812;var statearr_10821_10856 = state_10812__$1;(statearr_10821_10856[2] = inst_10808);
(statearr_10821_10856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 8))
{var inst_10772 = (state_10812[8]);var inst_10771 = (state_10812[9]);var inst_10774 = (inst_10772 < inst_10771);var inst_10775 = inst_10774;var state_10812__$1 = state_10812;if(cljs.core.truth_(inst_10775))
{var statearr_10822_10857 = state_10812__$1;(statearr_10822_10857[1] = 10);
} else
{var statearr_10823_10858 = state_10812__$1;(statearr_10823_10858[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 9))
{var inst_10805 = (state_10812[2]);var state_10812__$1 = (function (){var statearr_10824 = state_10812;(statearr_10824[12] = inst_10805);
return statearr_10824;
})();var statearr_10825_10859 = state_10812__$1;(statearr_10825_10859[2] = null);
(statearr_10825_10859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 10))
{var inst_10772 = (state_10812[8]);var inst_10770 = (state_10812[10]);var inst_10777 = cljs.core._nth.call(null,inst_10770,inst_10772);var state_10812__$1 = state_10812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10812__$1,13,out,inst_10777);
} else
{if((state_val_10813 === 11))
{var inst_10769 = (state_10812[11]);var inst_10783 = (state_10812[13]);var inst_10783__$1 = cljs.core.seq.call(null,inst_10769);var state_10812__$1 = (function (){var statearr_10829 = state_10812;(statearr_10829[13] = inst_10783__$1);
return statearr_10829;
})();if(inst_10783__$1)
{var statearr_10830_10860 = state_10812__$1;(statearr_10830_10860[1] = 14);
} else
{var statearr_10831_10861 = state_10812__$1;(statearr_10831_10861[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 12))
{var inst_10803 = (state_10812[2]);var state_10812__$1 = state_10812;var statearr_10832_10862 = state_10812__$1;(statearr_10832_10862[2] = inst_10803);
(statearr_10832_10862[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 13))
{var inst_10772 = (state_10812[8]);var inst_10771 = (state_10812[9]);var inst_10770 = (state_10812[10]);var inst_10769 = (state_10812[11]);var inst_10779 = (state_10812[2]);var inst_10780 = (inst_10772 + 1);var tmp10826 = inst_10771;var tmp10827 = inst_10770;var tmp10828 = inst_10769;var inst_10769__$1 = tmp10828;var inst_10770__$1 = tmp10827;var inst_10771__$1 = tmp10826;var inst_10772__$1 = inst_10780;var state_10812__$1 = (function (){var statearr_10833 = state_10812;(statearr_10833[14] = inst_10779);
(statearr_10833[8] = inst_10772__$1);
(statearr_10833[9] = inst_10771__$1);
(statearr_10833[10] = inst_10770__$1);
(statearr_10833[11] = inst_10769__$1);
return statearr_10833;
})();var statearr_10834_10863 = state_10812__$1;(statearr_10834_10863[2] = null);
(statearr_10834_10863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 14))
{var inst_10783 = (state_10812[13]);var inst_10785 = cljs.core.chunked_seq_QMARK_.call(null,inst_10783);var state_10812__$1 = state_10812;if(inst_10785)
{var statearr_10835_10864 = state_10812__$1;(statearr_10835_10864[1] = 17);
} else
{var statearr_10836_10865 = state_10812__$1;(statearr_10836_10865[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 15))
{var state_10812__$1 = state_10812;var statearr_10837_10866 = state_10812__$1;(statearr_10837_10866[2] = null);
(statearr_10837_10866[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 16))
{var inst_10801 = (state_10812[2]);var state_10812__$1 = state_10812;var statearr_10838_10867 = state_10812__$1;(statearr_10838_10867[2] = inst_10801);
(statearr_10838_10867[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 17))
{var inst_10783 = (state_10812[13]);var inst_10787 = cljs.core.chunk_first.call(null,inst_10783);var inst_10788 = cljs.core.chunk_rest.call(null,inst_10783);var inst_10789 = cljs.core.count.call(null,inst_10787);var inst_10769 = inst_10788;var inst_10770 = inst_10787;var inst_10771 = inst_10789;var inst_10772 = 0;var state_10812__$1 = (function (){var statearr_10839 = state_10812;(statearr_10839[8] = inst_10772);
(statearr_10839[9] = inst_10771);
(statearr_10839[10] = inst_10770);
(statearr_10839[11] = inst_10769);
return statearr_10839;
})();var statearr_10840_10868 = state_10812__$1;(statearr_10840_10868[2] = null);
(statearr_10840_10868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 18))
{var inst_10783 = (state_10812[13]);var inst_10792 = cljs.core.first.call(null,inst_10783);var state_10812__$1 = state_10812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10812__$1,20,out,inst_10792);
} else
{if((state_val_10813 === 19))
{var inst_10798 = (state_10812[2]);var state_10812__$1 = state_10812;var statearr_10841_10869 = state_10812__$1;(statearr_10841_10869[2] = inst_10798);
(statearr_10841_10869[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10813 === 20))
{var inst_10783 = (state_10812[13]);var inst_10794 = (state_10812[2]);var inst_10795 = cljs.core.next.call(null,inst_10783);var inst_10769 = inst_10795;var inst_10770 = null;var inst_10771 = 0;var inst_10772 = 0;var state_10812__$1 = (function (){var statearr_10842 = state_10812;(statearr_10842[8] = inst_10772);
(statearr_10842[9] = inst_10771);
(statearr_10842[10] = inst_10770);
(statearr_10842[15] = inst_10794);
(statearr_10842[11] = inst_10769);
return statearr_10842;
})();var statearr_10843_10870 = state_10812__$1;(statearr_10843_10870[2] = null);
(statearr_10843_10870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_10847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10847[0] = state_machine__6741__auto__);
(statearr_10847[1] = 1);
return statearr_10847;
});
var state_machine__6741__auto____1 = (function (state_10812){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_10812);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e10848){if((e10848 instanceof Object))
{var ex__6744__auto__ = e10848;var statearr_10849_10871 = state_10812;(statearr_10849_10871[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10872 = state_10812;
state_10812 = G__10872;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_10812){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_10812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_10850 = f__6811__auto__.call(null);(statearr_10850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto__);
return statearr_10850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return c__6810__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6810__auto___10953 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_10932){var state_val_10933 = (state_10932[1]);if((state_val_10933 === 1))
{var state_10932__$1 = state_10932;var statearr_10934_10954 = state_10932__$1;(statearr_10934_10954[2] = null);
(statearr_10934_10954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 2))
{var state_10932__$1 = state_10932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10932__$1,4,from);
} else
{if((state_val_10933 === 3))
{var inst_10930 = (state_10932[2]);var state_10932__$1 = state_10932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10932__$1,inst_10930);
} else
{if((state_val_10933 === 4))
{var inst_10915 = (state_10932[7]);var inst_10915__$1 = (state_10932[2]);var inst_10916 = (inst_10915__$1 == null);var state_10932__$1 = (function (){var statearr_10935 = state_10932;(statearr_10935[7] = inst_10915__$1);
return statearr_10935;
})();if(cljs.core.truth_(inst_10916))
{var statearr_10936_10955 = state_10932__$1;(statearr_10936_10955[1] = 5);
} else
{var statearr_10937_10956 = state_10932__$1;(statearr_10937_10956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 5))
{var state_10932__$1 = state_10932;if(cljs.core.truth_(close_QMARK_))
{var statearr_10938_10957 = state_10932__$1;(statearr_10938_10957[1] = 8);
} else
{var statearr_10939_10958 = state_10932__$1;(statearr_10939_10958[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 6))
{var inst_10915 = (state_10932[7]);var state_10932__$1 = state_10932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10932__$1,11,to,inst_10915);
} else
{if((state_val_10933 === 7))
{var inst_10928 = (state_10932[2]);var state_10932__$1 = state_10932;var statearr_10940_10959 = state_10932__$1;(statearr_10940_10959[2] = inst_10928);
(statearr_10940_10959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 8))
{var inst_10919 = cljs.core.async.close_BANG_.call(null,to);var state_10932__$1 = state_10932;var statearr_10941_10960 = state_10932__$1;(statearr_10941_10960[2] = inst_10919);
(statearr_10941_10960[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 9))
{var state_10932__$1 = state_10932;var statearr_10942_10961 = state_10932__$1;(statearr_10942_10961[2] = null);
(statearr_10942_10961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 10))
{var inst_10922 = (state_10932[2]);var state_10932__$1 = state_10932;var statearr_10943_10962 = state_10932__$1;(statearr_10943_10962[2] = inst_10922);
(statearr_10943_10962[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10933 === 11))
{var inst_10925 = (state_10932[2]);var state_10932__$1 = (function (){var statearr_10944 = state_10932;(statearr_10944[8] = inst_10925);
return statearr_10944;
})();var statearr_10945_10963 = state_10932__$1;(statearr_10945_10963[2] = null);
(statearr_10945_10963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_10949 = [null,null,null,null,null,null,null,null,null];(statearr_10949[0] = state_machine__6741__auto__);
(statearr_10949[1] = 1);
return statearr_10949;
});
var state_machine__6741__auto____1 = (function (state_10932){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_10932);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e10950){if((e10950 instanceof Object))
{var ex__6744__auto__ = e10950;var statearr_10951_10964 = state_10932;(statearr_10951_10964[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10965 = state_10932;
state_10932 = G__10965;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_10932){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_10932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_10952 = f__6811__auto__.call(null);(statearr_10952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___10953);
return statearr_10952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6810__auto___11052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_11030){var state_val_11031 = (state_11030[1]);if((state_val_11031 === 1))
{var state_11030__$1 = state_11030;var statearr_11032_11053 = state_11030__$1;(statearr_11032_11053[2] = null);
(statearr_11032_11053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 2))
{var state_11030__$1 = state_11030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11030__$1,4,ch);
} else
{if((state_val_11031 === 3))
{var inst_11028 = (state_11030[2]);var state_11030__$1 = state_11030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11030__$1,inst_11028);
} else
{if((state_val_11031 === 4))
{var inst_11011 = (state_11030[7]);var inst_11011__$1 = (state_11030[2]);var inst_11012 = (inst_11011__$1 == null);var state_11030__$1 = (function (){var statearr_11033 = state_11030;(statearr_11033[7] = inst_11011__$1);
return statearr_11033;
})();if(cljs.core.truth_(inst_11012))
{var statearr_11034_11054 = state_11030__$1;(statearr_11034_11054[1] = 5);
} else
{var statearr_11035_11055 = state_11030__$1;(statearr_11035_11055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 5))
{var inst_11014 = cljs.core.async.close_BANG_.call(null,tc);var inst_11015 = cljs.core.async.close_BANG_.call(null,fc);var state_11030__$1 = (function (){var statearr_11036 = state_11030;(statearr_11036[8] = inst_11014);
return statearr_11036;
})();var statearr_11037_11056 = state_11030__$1;(statearr_11037_11056[2] = inst_11015);
(statearr_11037_11056[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 6))
{var inst_11011 = (state_11030[7]);var inst_11017 = p.call(null,inst_11011);var state_11030__$1 = state_11030;if(cljs.core.truth_(inst_11017))
{var statearr_11038_11057 = state_11030__$1;(statearr_11038_11057[1] = 9);
} else
{var statearr_11039_11058 = state_11030__$1;(statearr_11039_11058[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 7))
{var inst_11026 = (state_11030[2]);var state_11030__$1 = state_11030;var statearr_11040_11059 = state_11030__$1;(statearr_11040_11059[2] = inst_11026);
(statearr_11040_11059[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 8))
{var inst_11023 = (state_11030[2]);var state_11030__$1 = (function (){var statearr_11041 = state_11030;(statearr_11041[9] = inst_11023);
return statearr_11041;
})();var statearr_11042_11060 = state_11030__$1;(statearr_11042_11060[2] = null);
(statearr_11042_11060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 9))
{var state_11030__$1 = state_11030;var statearr_11043_11061 = state_11030__$1;(statearr_11043_11061[2] = tc);
(statearr_11043_11061[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 10))
{var state_11030__$1 = state_11030;var statearr_11044_11062 = state_11030__$1;(statearr_11044_11062[2] = fc);
(statearr_11044_11062[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11031 === 11))
{var inst_11011 = (state_11030[7]);var inst_11021 = (state_11030[2]);var state_11030__$1 = state_11030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11030__$1,8,inst_11021,inst_11011);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_11048 = [null,null,null,null,null,null,null,null,null,null];(statearr_11048[0] = state_machine__6741__auto__);
(statearr_11048[1] = 1);
return statearr_11048;
});
var state_machine__6741__auto____1 = (function (state_11030){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_11030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e11049){if((e11049 instanceof Object))
{var ex__6744__auto__ = e11049;var statearr_11050_11063 = state_11030;(statearr_11050_11063[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11064 = state_11030;
state_11030 = G__11064;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_11030){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_11030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_11051 = f__6811__auto__.call(null);(statearr_11051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___11052);
return statearr_11051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6810__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_11111){var state_val_11112 = (state_11111[1]);if((state_val_11112 === 7))
{var inst_11107 = (state_11111[2]);var state_11111__$1 = state_11111;var statearr_11113_11129 = state_11111__$1;(statearr_11113_11129[2] = inst_11107);
(statearr_11113_11129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 6))
{var inst_11097 = (state_11111[7]);var inst_11100 = (state_11111[8]);var inst_11104 = f.call(null,inst_11097,inst_11100);var inst_11097__$1 = inst_11104;var state_11111__$1 = (function (){var statearr_11114 = state_11111;(statearr_11114[7] = inst_11097__$1);
return statearr_11114;
})();var statearr_11115_11130 = state_11111__$1;(statearr_11115_11130[2] = null);
(statearr_11115_11130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 5))
{var inst_11097 = (state_11111[7]);var state_11111__$1 = state_11111;var statearr_11116_11131 = state_11111__$1;(statearr_11116_11131[2] = inst_11097);
(statearr_11116_11131[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 4))
{var inst_11100 = (state_11111[8]);var inst_11100__$1 = (state_11111[2]);var inst_11101 = (inst_11100__$1 == null);var state_11111__$1 = (function (){var statearr_11117 = state_11111;(statearr_11117[8] = inst_11100__$1);
return statearr_11117;
})();if(cljs.core.truth_(inst_11101))
{var statearr_11118_11132 = state_11111__$1;(statearr_11118_11132[1] = 5);
} else
{var statearr_11119_11133 = state_11111__$1;(statearr_11119_11133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11112 === 3))
{var inst_11109 = (state_11111[2]);var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11111__$1,inst_11109);
} else
{if((state_val_11112 === 2))
{var state_11111__$1 = state_11111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11111__$1,4,ch);
} else
{if((state_val_11112 === 1))
{var inst_11097 = init;var state_11111__$1 = (function (){var statearr_11120 = state_11111;(statearr_11120[7] = inst_11097);
return statearr_11120;
})();var statearr_11121_11134 = state_11111__$1;(statearr_11121_11134[2] = null);
(statearr_11121_11134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_11125 = [null,null,null,null,null,null,null,null,null];(statearr_11125[0] = state_machine__6741__auto__);
(statearr_11125[1] = 1);
return statearr_11125;
});
var state_machine__6741__auto____1 = (function (state_11111){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_11111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e11126){if((e11126 instanceof Object))
{var ex__6744__auto__ = e11126;var statearr_11127_11135 = state_11111;(statearr_11127_11135[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11136 = state_11111;
state_11111 = G__11136;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_11111){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_11111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_11128 = f__6811__auto__.call(null);(statearr_11128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto__);
return statearr_11128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return c__6810__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6810__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_11198){var state_val_11199 = (state_11198[1]);if((state_val_11199 === 1))
{var inst_11178 = cljs.core.seq.call(null,coll);var inst_11179 = inst_11178;var state_11198__$1 = (function (){var statearr_11200 = state_11198;(statearr_11200[7] = inst_11179);
return statearr_11200;
})();var statearr_11201_11219 = state_11198__$1;(statearr_11201_11219[2] = null);
(statearr_11201_11219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 2))
{var inst_11179 = (state_11198[7]);var state_11198__$1 = state_11198;if(cljs.core.truth_(inst_11179))
{var statearr_11202_11220 = state_11198__$1;(statearr_11202_11220[1] = 4);
} else
{var statearr_11203_11221 = state_11198__$1;(statearr_11203_11221[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 3))
{var inst_11196 = (state_11198[2]);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11198__$1,inst_11196);
} else
{if((state_val_11199 === 4))
{var inst_11179 = (state_11198[7]);var inst_11182 = cljs.core.first.call(null,inst_11179);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11198__$1,7,ch,inst_11182);
} else
{if((state_val_11199 === 5))
{var state_11198__$1 = state_11198;if(cljs.core.truth_(close_QMARK_))
{var statearr_11204_11222 = state_11198__$1;(statearr_11204_11222[1] = 8);
} else
{var statearr_11205_11223 = state_11198__$1;(statearr_11205_11223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 6))
{var inst_11194 = (state_11198[2]);var state_11198__$1 = state_11198;var statearr_11206_11224 = state_11198__$1;(statearr_11206_11224[2] = inst_11194);
(statearr_11206_11224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 7))
{var inst_11179 = (state_11198[7]);var inst_11184 = (state_11198[2]);var inst_11185 = cljs.core.next.call(null,inst_11179);var inst_11179__$1 = inst_11185;var state_11198__$1 = (function (){var statearr_11207 = state_11198;(statearr_11207[8] = inst_11184);
(statearr_11207[7] = inst_11179__$1);
return statearr_11207;
})();var statearr_11208_11225 = state_11198__$1;(statearr_11208_11225[2] = null);
(statearr_11208_11225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 8))
{var inst_11189 = cljs.core.async.close_BANG_.call(null,ch);var state_11198__$1 = state_11198;var statearr_11209_11226 = state_11198__$1;(statearr_11209_11226[2] = inst_11189);
(statearr_11209_11226[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 9))
{var state_11198__$1 = state_11198;var statearr_11210_11227 = state_11198__$1;(statearr_11210_11227[2] = null);
(statearr_11210_11227[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 10))
{var inst_11192 = (state_11198[2]);var state_11198__$1 = state_11198;var statearr_11211_11228 = state_11198__$1;(statearr_11211_11228[2] = inst_11192);
(statearr_11211_11228[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_11215 = [null,null,null,null,null,null,null,null,null];(statearr_11215[0] = state_machine__6741__auto__);
(statearr_11215[1] = 1);
return statearr_11215;
});
var state_machine__6741__auto____1 = (function (state_11198){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_11198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e11216){if((e11216 instanceof Object))
{var ex__6744__auto__ = e11216;var statearr_11217_11229 = state_11198;(statearr_11217_11229[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11230 = state_11198;
state_11198 = G__11230;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_11198){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_11198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_11218 = f__6811__auto__.call(null);(statearr_11218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto__);
return statearr_11218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return c__6810__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11232 = {};return obj11232;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11234 = {};return obj11234;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11458 = (function (cs,ch,mult,meta11459){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11459 = meta11459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11458.cljs$lang$type = true;
cljs.core.async.t11458.cljs$lang$ctorStr = "cljs.core.async/t11458";
cljs.core.async.t11458.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11458");
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11458.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11460){var self__ = this;
var _11460__$1 = this;return self__.meta11459;
});})(cs))
;
cljs.core.async.t11458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11460,meta11459__$1){var self__ = this;
var _11460__$1 = this;return (new cljs.core.async.t11458(self__.cs,self__.ch,self__.mult,meta11459__$1));
});})(cs))
;
cljs.core.async.__GT_t11458 = ((function (cs){
return (function __GT_t11458(cs__$1,ch__$1,mult__$1,meta11459){return (new cljs.core.async.t11458(cs__$1,ch__$1,mult__$1,meta11459));
});})(cs))
;
}
return (new cljs.core.async.t11458(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6810__auto___11681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_11595){var state_val_11596 = (state_11595[1]);if((state_val_11596 === 32))
{var inst_11463 = (state_11595[7]);var inst_11539 = (state_11595[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11595,31,Object,null,30);var inst_11546 = cljs.core.async.put_BANG_.call(null,inst_11539,inst_11463,done);var state_11595__$1 = state_11595;var statearr_11597_11682 = state_11595__$1;(statearr_11597_11682[2] = inst_11546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 1))
{var state_11595__$1 = state_11595;var statearr_11598_11683 = state_11595__$1;(statearr_11598_11683[2] = null);
(statearr_11598_11683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 33))
{var inst_11552 = (state_11595[9]);var inst_11554 = cljs.core.chunked_seq_QMARK_.call(null,inst_11552);var state_11595__$1 = state_11595;if(inst_11554)
{var statearr_11599_11684 = state_11595__$1;(statearr_11599_11684[1] = 36);
} else
{var statearr_11600_11685 = state_11595__$1;(statearr_11600_11685[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 2))
{var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11595__$1,4,ch);
} else
{if((state_val_11596 === 34))
{var state_11595__$1 = state_11595;var statearr_11601_11686 = state_11595__$1;(statearr_11601_11686[2] = null);
(statearr_11601_11686[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 3))
{var inst_11593 = (state_11595[2]);var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11595__$1,inst_11593);
} else
{if((state_val_11596 === 35))
{var inst_11577 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11602_11687 = state_11595__$1;(statearr_11602_11687[2] = inst_11577);
(statearr_11602_11687[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 4))
{var inst_11463 = (state_11595[7]);var inst_11463__$1 = (state_11595[2]);var inst_11464 = (inst_11463__$1 == null);var state_11595__$1 = (function (){var statearr_11603 = state_11595;(statearr_11603[7] = inst_11463__$1);
return statearr_11603;
})();if(cljs.core.truth_(inst_11464))
{var statearr_11604_11688 = state_11595__$1;(statearr_11604_11688[1] = 5);
} else
{var statearr_11605_11689 = state_11595__$1;(statearr_11605_11689[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 36))
{var inst_11552 = (state_11595[9]);var inst_11556 = cljs.core.chunk_first.call(null,inst_11552);var inst_11557 = cljs.core.chunk_rest.call(null,inst_11552);var inst_11558 = cljs.core.count.call(null,inst_11556);var inst_11531 = inst_11557;var inst_11532 = inst_11556;var inst_11533 = inst_11558;var inst_11534 = 0;var state_11595__$1 = (function (){var statearr_11606 = state_11595;(statearr_11606[10] = inst_11533);
(statearr_11606[11] = inst_11534);
(statearr_11606[12] = inst_11532);
(statearr_11606[13] = inst_11531);
return statearr_11606;
})();var statearr_11607_11690 = state_11595__$1;(statearr_11607_11690[2] = null);
(statearr_11607_11690[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 5))
{var inst_11470 = cljs.core.deref.call(null,cs);var inst_11471 = cljs.core.seq.call(null,inst_11470);var inst_11472 = inst_11471;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11595__$1 = (function (){var statearr_11608 = state_11595;(statearr_11608[14] = inst_11472);
(statearr_11608[15] = inst_11473);
(statearr_11608[16] = inst_11475);
(statearr_11608[17] = inst_11474);
return statearr_11608;
})();var statearr_11609_11691 = state_11595__$1;(statearr_11609_11691[2] = null);
(statearr_11609_11691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 37))
{var inst_11552 = (state_11595[9]);var inst_11561 = cljs.core.first.call(null,inst_11552);var state_11595__$1 = (function (){var statearr_11610 = state_11595;(statearr_11610[18] = inst_11561);
return statearr_11610;
})();var statearr_11611_11692 = state_11595__$1;(statearr_11611_11692[2] = null);
(statearr_11611_11692[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 6))
{var inst_11523 = (state_11595[19]);var inst_11522 = cljs.core.deref.call(null,cs);var inst_11523__$1 = cljs.core.keys.call(null,inst_11522);var inst_11524 = cljs.core.count.call(null,inst_11523__$1);var inst_11525 = cljs.core.reset_BANG_.call(null,dctr,inst_11524);var inst_11530 = cljs.core.seq.call(null,inst_11523__$1);var inst_11531 = inst_11530;var inst_11532 = null;var inst_11533 = 0;var inst_11534 = 0;var state_11595__$1 = (function (){var statearr_11612 = state_11595;(statearr_11612[10] = inst_11533);
(statearr_11612[11] = inst_11534);
(statearr_11612[12] = inst_11532);
(statearr_11612[19] = inst_11523__$1);
(statearr_11612[13] = inst_11531);
(statearr_11612[20] = inst_11525);
return statearr_11612;
})();var statearr_11613_11693 = state_11595__$1;(statearr_11613_11693[2] = null);
(statearr_11613_11693[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 38))
{var inst_11574 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11614_11694 = state_11595__$1;(statearr_11614_11694[2] = inst_11574);
(statearr_11614_11694[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 7))
{var inst_11591 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11615_11695 = state_11595__$1;(statearr_11615_11695[2] = inst_11591);
(statearr_11615_11695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 39))
{var inst_11552 = (state_11595[9]);var inst_11570 = (state_11595[2]);var inst_11571 = cljs.core.next.call(null,inst_11552);var inst_11531 = inst_11571;var inst_11532 = null;var inst_11533 = 0;var inst_11534 = 0;var state_11595__$1 = (function (){var statearr_11616 = state_11595;(statearr_11616[21] = inst_11570);
(statearr_11616[10] = inst_11533);
(statearr_11616[11] = inst_11534);
(statearr_11616[12] = inst_11532);
(statearr_11616[13] = inst_11531);
return statearr_11616;
})();var statearr_11617_11696 = state_11595__$1;(statearr_11617_11696[2] = null);
(statearr_11617_11696[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 8))
{var inst_11475 = (state_11595[16]);var inst_11474 = (state_11595[17]);var inst_11477 = (inst_11475 < inst_11474);var inst_11478 = inst_11477;var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11478))
{var statearr_11618_11697 = state_11595__$1;(statearr_11618_11697[1] = 10);
} else
{var statearr_11619_11698 = state_11595__$1;(statearr_11619_11698[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 40))
{var inst_11561 = (state_11595[18]);var inst_11562 = (state_11595[2]);var inst_11563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11564 = cljs.core.async.untap_STAR_.call(null,m,inst_11561);var state_11595__$1 = (function (){var statearr_11620 = state_11595;(statearr_11620[22] = inst_11563);
(statearr_11620[23] = inst_11562);
return statearr_11620;
})();var statearr_11621_11699 = state_11595__$1;(statearr_11621_11699[2] = inst_11564);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 9))
{var inst_11520 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11622_11700 = state_11595__$1;(statearr_11622_11700[2] = inst_11520);
(statearr_11622_11700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 41))
{var inst_11463 = (state_11595[7]);var inst_11561 = (state_11595[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11595,40,Object,null,39);var inst_11568 = cljs.core.async.put_BANG_.call(null,inst_11561,inst_11463,done);var state_11595__$1 = state_11595;var statearr_11623_11701 = state_11595__$1;(statearr_11623_11701[2] = inst_11568);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 10))
{var inst_11473 = (state_11595[15]);var inst_11475 = (state_11595[16]);var inst_11481 = cljs.core._nth.call(null,inst_11473,inst_11475);var inst_11482 = cljs.core.nth.call(null,inst_11481,0,null);var inst_11483 = cljs.core.nth.call(null,inst_11481,1,null);var state_11595__$1 = (function (){var statearr_11624 = state_11595;(statearr_11624[24] = inst_11482);
return statearr_11624;
})();if(cljs.core.truth_(inst_11483))
{var statearr_11625_11702 = state_11595__$1;(statearr_11625_11702[1] = 13);
} else
{var statearr_11626_11703 = state_11595__$1;(statearr_11626_11703[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 42))
{var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11595__$1,45,dchan);
} else
{if((state_val_11596 === 11))
{var inst_11492 = (state_11595[25]);var inst_11472 = (state_11595[14]);var inst_11492__$1 = cljs.core.seq.call(null,inst_11472);var state_11595__$1 = (function (){var statearr_11627 = state_11595;(statearr_11627[25] = inst_11492__$1);
return statearr_11627;
})();if(inst_11492__$1)
{var statearr_11628_11704 = state_11595__$1;(statearr_11628_11704[1] = 16);
} else
{var statearr_11629_11705 = state_11595__$1;(statearr_11629_11705[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 43))
{var state_11595__$1 = state_11595;var statearr_11630_11706 = state_11595__$1;(statearr_11630_11706[2] = null);
(statearr_11630_11706[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 12))
{var inst_11518 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11631_11707 = state_11595__$1;(statearr_11631_11707[2] = inst_11518);
(statearr_11631_11707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 44))
{var inst_11588 = (state_11595[2]);var state_11595__$1 = (function (){var statearr_11632 = state_11595;(statearr_11632[26] = inst_11588);
return statearr_11632;
})();var statearr_11633_11708 = state_11595__$1;(statearr_11633_11708[2] = null);
(statearr_11633_11708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 13))
{var inst_11482 = (state_11595[24]);var inst_11485 = cljs.core.async.close_BANG_.call(null,inst_11482);var state_11595__$1 = state_11595;var statearr_11634_11709 = state_11595__$1;(statearr_11634_11709[2] = inst_11485);
(statearr_11634_11709[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 45))
{var inst_11585 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11638_11710 = state_11595__$1;(statearr_11638_11710[2] = inst_11585);
(statearr_11638_11710[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 14))
{var state_11595__$1 = state_11595;var statearr_11639_11711 = state_11595__$1;(statearr_11639_11711[2] = null);
(statearr_11639_11711[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 15))
{var inst_11472 = (state_11595[14]);var inst_11473 = (state_11595[15]);var inst_11475 = (state_11595[16]);var inst_11474 = (state_11595[17]);var inst_11488 = (state_11595[2]);var inst_11489 = (inst_11475 + 1);var tmp11635 = inst_11472;var tmp11636 = inst_11473;var tmp11637 = inst_11474;var inst_11472__$1 = tmp11635;var inst_11473__$1 = tmp11636;var inst_11474__$1 = tmp11637;var inst_11475__$1 = inst_11489;var state_11595__$1 = (function (){var statearr_11640 = state_11595;(statearr_11640[14] = inst_11472__$1);
(statearr_11640[15] = inst_11473__$1);
(statearr_11640[27] = inst_11488);
(statearr_11640[16] = inst_11475__$1);
(statearr_11640[17] = inst_11474__$1);
return statearr_11640;
})();var statearr_11641_11712 = state_11595__$1;(statearr_11641_11712[2] = null);
(statearr_11641_11712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 16))
{var inst_11492 = (state_11595[25]);var inst_11494 = cljs.core.chunked_seq_QMARK_.call(null,inst_11492);var state_11595__$1 = state_11595;if(inst_11494)
{var statearr_11642_11713 = state_11595__$1;(statearr_11642_11713[1] = 19);
} else
{var statearr_11643_11714 = state_11595__$1;(statearr_11643_11714[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 17))
{var state_11595__$1 = state_11595;var statearr_11644_11715 = state_11595__$1;(statearr_11644_11715[2] = null);
(statearr_11644_11715[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 18))
{var inst_11516 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11645_11716 = state_11595__$1;(statearr_11645_11716[2] = inst_11516);
(statearr_11645_11716[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 19))
{var inst_11492 = (state_11595[25]);var inst_11496 = cljs.core.chunk_first.call(null,inst_11492);var inst_11497 = cljs.core.chunk_rest.call(null,inst_11492);var inst_11498 = cljs.core.count.call(null,inst_11496);var inst_11472 = inst_11497;var inst_11473 = inst_11496;var inst_11474 = inst_11498;var inst_11475 = 0;var state_11595__$1 = (function (){var statearr_11646 = state_11595;(statearr_11646[14] = inst_11472);
(statearr_11646[15] = inst_11473);
(statearr_11646[16] = inst_11475);
(statearr_11646[17] = inst_11474);
return statearr_11646;
})();var statearr_11647_11717 = state_11595__$1;(statearr_11647_11717[2] = null);
(statearr_11647_11717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 20))
{var inst_11492 = (state_11595[25]);var inst_11502 = cljs.core.first.call(null,inst_11492);var inst_11503 = cljs.core.nth.call(null,inst_11502,0,null);var inst_11504 = cljs.core.nth.call(null,inst_11502,1,null);var state_11595__$1 = (function (){var statearr_11648 = state_11595;(statearr_11648[28] = inst_11503);
return statearr_11648;
})();if(cljs.core.truth_(inst_11504))
{var statearr_11649_11718 = state_11595__$1;(statearr_11649_11718[1] = 22);
} else
{var statearr_11650_11719 = state_11595__$1;(statearr_11650_11719[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 21))
{var inst_11513 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11651_11720 = state_11595__$1;(statearr_11651_11720[2] = inst_11513);
(statearr_11651_11720[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 22))
{var inst_11503 = (state_11595[28]);var inst_11506 = cljs.core.async.close_BANG_.call(null,inst_11503);var state_11595__$1 = state_11595;var statearr_11652_11721 = state_11595__$1;(statearr_11652_11721[2] = inst_11506);
(statearr_11652_11721[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 23))
{var state_11595__$1 = state_11595;var statearr_11653_11722 = state_11595__$1;(statearr_11653_11722[2] = null);
(statearr_11653_11722[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 24))
{var inst_11492 = (state_11595[25]);var inst_11509 = (state_11595[2]);var inst_11510 = cljs.core.next.call(null,inst_11492);var inst_11472 = inst_11510;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11595__$1 = (function (){var statearr_11654 = state_11595;(statearr_11654[29] = inst_11509);
(statearr_11654[14] = inst_11472);
(statearr_11654[15] = inst_11473);
(statearr_11654[16] = inst_11475);
(statearr_11654[17] = inst_11474);
return statearr_11654;
})();var statearr_11655_11723 = state_11595__$1;(statearr_11655_11723[2] = null);
(statearr_11655_11723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 25))
{var inst_11533 = (state_11595[10]);var inst_11534 = (state_11595[11]);var inst_11536 = (inst_11534 < inst_11533);var inst_11537 = inst_11536;var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11537))
{var statearr_11656_11724 = state_11595__$1;(statearr_11656_11724[1] = 27);
} else
{var statearr_11657_11725 = state_11595__$1;(statearr_11657_11725[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 26))
{var inst_11523 = (state_11595[19]);var inst_11581 = (state_11595[2]);var inst_11582 = cljs.core.seq.call(null,inst_11523);var state_11595__$1 = (function (){var statearr_11658 = state_11595;(statearr_11658[30] = inst_11581);
return statearr_11658;
})();if(inst_11582)
{var statearr_11659_11726 = state_11595__$1;(statearr_11659_11726[1] = 42);
} else
{var statearr_11660_11727 = state_11595__$1;(statearr_11660_11727[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 27))
{var inst_11534 = (state_11595[11]);var inst_11532 = (state_11595[12]);var inst_11539 = cljs.core._nth.call(null,inst_11532,inst_11534);var state_11595__$1 = (function (){var statearr_11661 = state_11595;(statearr_11661[8] = inst_11539);
return statearr_11661;
})();var statearr_11662_11728 = state_11595__$1;(statearr_11662_11728[2] = null);
(statearr_11662_11728[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 28))
{var inst_11531 = (state_11595[13]);var inst_11552 = (state_11595[9]);var inst_11552__$1 = cljs.core.seq.call(null,inst_11531);var state_11595__$1 = (function (){var statearr_11666 = state_11595;(statearr_11666[9] = inst_11552__$1);
return statearr_11666;
})();if(inst_11552__$1)
{var statearr_11667_11729 = state_11595__$1;(statearr_11667_11729[1] = 33);
} else
{var statearr_11668_11730 = state_11595__$1;(statearr_11668_11730[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 29))
{var inst_11579 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11669_11731 = state_11595__$1;(statearr_11669_11731[2] = inst_11579);
(statearr_11669_11731[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 30))
{var inst_11533 = (state_11595[10]);var inst_11534 = (state_11595[11]);var inst_11532 = (state_11595[12]);var inst_11531 = (state_11595[13]);var inst_11548 = (state_11595[2]);var inst_11549 = (inst_11534 + 1);var tmp11663 = inst_11533;var tmp11664 = inst_11532;var tmp11665 = inst_11531;var inst_11531__$1 = tmp11665;var inst_11532__$1 = tmp11664;var inst_11533__$1 = tmp11663;var inst_11534__$1 = inst_11549;var state_11595__$1 = (function (){var statearr_11670 = state_11595;(statearr_11670[31] = inst_11548);
(statearr_11670[10] = inst_11533__$1);
(statearr_11670[11] = inst_11534__$1);
(statearr_11670[12] = inst_11532__$1);
(statearr_11670[13] = inst_11531__$1);
return statearr_11670;
})();var statearr_11671_11732 = state_11595__$1;(statearr_11671_11732[2] = null);
(statearr_11671_11732[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 31))
{var inst_11539 = (state_11595[8]);var inst_11540 = (state_11595[2]);var inst_11541 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11542 = cljs.core.async.untap_STAR_.call(null,m,inst_11539);var state_11595__$1 = (function (){var statearr_11672 = state_11595;(statearr_11672[32] = inst_11541);
(statearr_11672[33] = inst_11540);
return statearr_11672;
})();var statearr_11673_11733 = state_11595__$1;(statearr_11673_11733[2] = inst_11542);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_11677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11677[0] = state_machine__6741__auto__);
(statearr_11677[1] = 1);
return statearr_11677;
});
var state_machine__6741__auto____1 = (function (state_11595){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_11595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e11678){if((e11678 instanceof Object))
{var ex__6744__auto__ = e11678;var statearr_11679_11734 = state_11595;(statearr_11679_11734[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11735 = state_11595;
state_11595 = G__11735;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_11595){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_11595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_11680 = f__6811__auto__.call(null);(statearr_11680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___11681);
return statearr_11680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11737 = {};return obj11737;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11847 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11848){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11848 = meta11848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11847.cljs$lang$type = true;
cljs.core.async.t11847.cljs$lang$ctorStr = "cljs.core.async/t11847";
cljs.core.async.t11847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11849){var self__ = this;
var _11849__$1 = this;return self__.meta11848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11849,meta11848__$1){var self__ = this;
var _11849__$1 = this;return (new cljs.core.async.t11847(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11847(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11848){return (new cljs.core.async.t11847(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11847(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6810__auto___11956 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_11914){var state_val_11915 = (state_11914[1]);if((state_val_11915 === 1))
{var inst_11853 = (state_11914[7]);var inst_11853__$1 = calc_state.call(null);var inst_11854 = cljs.core.seq_QMARK_.call(null,inst_11853__$1);var state_11914__$1 = (function (){var statearr_11916 = state_11914;(statearr_11916[7] = inst_11853__$1);
return statearr_11916;
})();if(inst_11854)
{var statearr_11917_11957 = state_11914__$1;(statearr_11917_11957[1] = 2);
} else
{var statearr_11918_11958 = state_11914__$1;(statearr_11918_11958[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 2))
{var inst_11853 = (state_11914[7]);var inst_11856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11853);var state_11914__$1 = state_11914;var statearr_11919_11959 = state_11914__$1;(statearr_11919_11959[2] = inst_11856);
(statearr_11919_11959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 3))
{var inst_11853 = (state_11914[7]);var state_11914__$1 = state_11914;var statearr_11920_11960 = state_11914__$1;(statearr_11920_11960[2] = inst_11853);
(statearr_11920_11960[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 4))
{var inst_11853 = (state_11914[7]);var inst_11859 = (state_11914[2]);var inst_11860 = cljs.core.get.call(null,inst_11859,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11861 = cljs.core.get.call(null,inst_11859,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11862 = cljs.core.get.call(null,inst_11859,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11863 = inst_11853;var state_11914__$1 = (function (){var statearr_11921 = state_11914;(statearr_11921[8] = inst_11862);
(statearr_11921[9] = inst_11861);
(statearr_11921[10] = inst_11860);
(statearr_11921[11] = inst_11863);
return statearr_11921;
})();var statearr_11922_11961 = state_11914__$1;(statearr_11922_11961[2] = null);
(statearr_11922_11961[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 5))
{var inst_11863 = (state_11914[11]);var inst_11866 = cljs.core.seq_QMARK_.call(null,inst_11863);var state_11914__$1 = state_11914;if(inst_11866)
{var statearr_11923_11962 = state_11914__$1;(statearr_11923_11962[1] = 7);
} else
{var statearr_11924_11963 = state_11914__$1;(statearr_11924_11963[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 6))
{var inst_11912 = (state_11914[2]);var state_11914__$1 = state_11914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11914__$1,inst_11912);
} else
{if((state_val_11915 === 7))
{var inst_11863 = (state_11914[11]);var inst_11868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11863);var state_11914__$1 = state_11914;var statearr_11925_11964 = state_11914__$1;(statearr_11925_11964[2] = inst_11868);
(statearr_11925_11964[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 8))
{var inst_11863 = (state_11914[11]);var state_11914__$1 = state_11914;var statearr_11926_11965 = state_11914__$1;(statearr_11926_11965[2] = inst_11863);
(statearr_11926_11965[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 9))
{var inst_11871 = (state_11914[12]);var inst_11871__$1 = (state_11914[2]);var inst_11872 = cljs.core.get.call(null,inst_11871__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11873 = cljs.core.get.call(null,inst_11871__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11874 = cljs.core.get.call(null,inst_11871__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11914__$1 = (function (){var statearr_11927 = state_11914;(statearr_11927[13] = inst_11874);
(statearr_11927[14] = inst_11873);
(statearr_11927[12] = inst_11871__$1);
return statearr_11927;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11914__$1,10,inst_11872);
} else
{if((state_val_11915 === 10))
{var inst_11879 = (state_11914[15]);var inst_11878 = (state_11914[16]);var inst_11877 = (state_11914[2]);var inst_11878__$1 = cljs.core.nth.call(null,inst_11877,0,null);var inst_11879__$1 = cljs.core.nth.call(null,inst_11877,1,null);var inst_11880 = (inst_11878__$1 == null);var inst_11881 = cljs.core._EQ_.call(null,inst_11879__$1,change);var inst_11882 = (inst_11880) || (inst_11881);var state_11914__$1 = (function (){var statearr_11928 = state_11914;(statearr_11928[15] = inst_11879__$1);
(statearr_11928[16] = inst_11878__$1);
return statearr_11928;
})();if(cljs.core.truth_(inst_11882))
{var statearr_11929_11966 = state_11914__$1;(statearr_11929_11966[1] = 11);
} else
{var statearr_11930_11967 = state_11914__$1;(statearr_11930_11967[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 11))
{var inst_11878 = (state_11914[16]);var inst_11884 = (inst_11878 == null);var state_11914__$1 = state_11914;if(cljs.core.truth_(inst_11884))
{var statearr_11931_11968 = state_11914__$1;(statearr_11931_11968[1] = 14);
} else
{var statearr_11932_11969 = state_11914__$1;(statearr_11932_11969[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 12))
{var inst_11879 = (state_11914[15]);var inst_11893 = (state_11914[17]);var inst_11874 = (state_11914[13]);var inst_11893__$1 = inst_11874.call(null,inst_11879);var state_11914__$1 = (function (){var statearr_11933 = state_11914;(statearr_11933[17] = inst_11893__$1);
return statearr_11933;
})();if(cljs.core.truth_(inst_11893__$1))
{var statearr_11934_11970 = state_11914__$1;(statearr_11934_11970[1] = 17);
} else
{var statearr_11935_11971 = state_11914__$1;(statearr_11935_11971[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 13))
{var inst_11910 = (state_11914[2]);var state_11914__$1 = state_11914;var statearr_11936_11972 = state_11914__$1;(statearr_11936_11972[2] = inst_11910);
(statearr_11936_11972[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 14))
{var inst_11879 = (state_11914[15]);var inst_11886 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11879);var state_11914__$1 = state_11914;var statearr_11937_11973 = state_11914__$1;(statearr_11937_11973[2] = inst_11886);
(statearr_11937_11973[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 15))
{var state_11914__$1 = state_11914;var statearr_11938_11974 = state_11914__$1;(statearr_11938_11974[2] = null);
(statearr_11938_11974[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 16))
{var inst_11889 = (state_11914[2]);var inst_11890 = calc_state.call(null);var inst_11863 = inst_11890;var state_11914__$1 = (function (){var statearr_11939 = state_11914;(statearr_11939[18] = inst_11889);
(statearr_11939[11] = inst_11863);
return statearr_11939;
})();var statearr_11940_11975 = state_11914__$1;(statearr_11940_11975[2] = null);
(statearr_11940_11975[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 17))
{var inst_11893 = (state_11914[17]);var state_11914__$1 = state_11914;var statearr_11941_11976 = state_11914__$1;(statearr_11941_11976[2] = inst_11893);
(statearr_11941_11976[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 18))
{var inst_11879 = (state_11914[15]);var inst_11874 = (state_11914[13]);var inst_11873 = (state_11914[14]);var inst_11896 = cljs.core.empty_QMARK_.call(null,inst_11874);var inst_11897 = inst_11873.call(null,inst_11879);var inst_11898 = cljs.core.not.call(null,inst_11897);var inst_11899 = (inst_11896) && (inst_11898);var state_11914__$1 = state_11914;var statearr_11942_11977 = state_11914__$1;(statearr_11942_11977[2] = inst_11899);
(statearr_11942_11977[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 19))
{var inst_11901 = (state_11914[2]);var state_11914__$1 = state_11914;if(cljs.core.truth_(inst_11901))
{var statearr_11943_11978 = state_11914__$1;(statearr_11943_11978[1] = 20);
} else
{var statearr_11944_11979 = state_11914__$1;(statearr_11944_11979[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 20))
{var inst_11878 = (state_11914[16]);var state_11914__$1 = state_11914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11914__$1,23,out,inst_11878);
} else
{if((state_val_11915 === 21))
{var state_11914__$1 = state_11914;var statearr_11945_11980 = state_11914__$1;(statearr_11945_11980[2] = null);
(statearr_11945_11980[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 22))
{var inst_11871 = (state_11914[12]);var inst_11907 = (state_11914[2]);var inst_11863 = inst_11871;var state_11914__$1 = (function (){var statearr_11946 = state_11914;(statearr_11946[19] = inst_11907);
(statearr_11946[11] = inst_11863);
return statearr_11946;
})();var statearr_11947_11981 = state_11914__$1;(statearr_11947_11981[2] = null);
(statearr_11947_11981[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11915 === 23))
{var inst_11904 = (state_11914[2]);var state_11914__$1 = state_11914;var statearr_11948_11982 = state_11914__$1;(statearr_11948_11982[2] = inst_11904);
(statearr_11948_11982[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_11952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11952[0] = state_machine__6741__auto__);
(statearr_11952[1] = 1);
return statearr_11952;
});
var state_machine__6741__auto____1 = (function (state_11914){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_11914);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e11953){if((e11953 instanceof Object))
{var ex__6744__auto__ = e11953;var statearr_11954_11983 = state_11914;(statearr_11954_11983[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11984 = state_11914;
state_11914 = G__11984;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_11914){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_11914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_11955 = f__6811__auto__.call(null);(statearr_11955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___11956);
return statearr_11955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11986 = {};return obj11986;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__11987_SHARP_){if(cljs.core.truth_(p1__11987_SHARP_.call(null,topic)))
{return p1__11987_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11987_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12112 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12113){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12113 = meta12113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12112.cljs$lang$type = true;
cljs.core.async.t12112.cljs$lang$ctorStr = "cljs.core.async/t12112";
cljs.core.async.t12112.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12112");
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12112.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12114){var self__ = this;
var _12114__$1 = this;return self__.meta12113;
});})(mults,ensure_mult))
;
cljs.core.async.t12112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12114,meta12113__$1){var self__ = this;
var _12114__$1 = this;return (new cljs.core.async.t12112(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12113__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12112 = ((function (mults,ensure_mult){
return (function __GT_t12112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12113){return (new cljs.core.async.t12112(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12113));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12112(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6810__auto___12236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12188){var state_val_12189 = (state_12188[1]);if((state_val_12189 === 1))
{var state_12188__$1 = state_12188;var statearr_12190_12237 = state_12188__$1;(statearr_12190_12237[2] = null);
(statearr_12190_12237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 2))
{var state_12188__$1 = state_12188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12188__$1,4,ch);
} else
{if((state_val_12189 === 3))
{var inst_12186 = (state_12188[2]);var state_12188__$1 = state_12188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12188__$1,inst_12186);
} else
{if((state_val_12189 === 4))
{var inst_12117 = (state_12188[7]);var inst_12117__$1 = (state_12188[2]);var inst_12118 = (inst_12117__$1 == null);var state_12188__$1 = (function (){var statearr_12191 = state_12188;(statearr_12191[7] = inst_12117__$1);
return statearr_12191;
})();if(cljs.core.truth_(inst_12118))
{var statearr_12192_12238 = state_12188__$1;(statearr_12192_12238[1] = 5);
} else
{var statearr_12193_12239 = state_12188__$1;(statearr_12193_12239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 5))
{var inst_12124 = cljs.core.deref.call(null,mults);var inst_12125 = cljs.core.vals.call(null,inst_12124);var inst_12126 = cljs.core.seq.call(null,inst_12125);var inst_12127 = inst_12126;var inst_12128 = null;var inst_12129 = 0;var inst_12130 = 0;var state_12188__$1 = (function (){var statearr_12194 = state_12188;(statearr_12194[8] = inst_12127);
(statearr_12194[9] = inst_12128);
(statearr_12194[10] = inst_12129);
(statearr_12194[11] = inst_12130);
return statearr_12194;
})();var statearr_12195_12240 = state_12188__$1;(statearr_12195_12240[2] = null);
(statearr_12195_12240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 6))
{var inst_12165 = (state_12188[12]);var inst_12117 = (state_12188[7]);var inst_12167 = (state_12188[13]);var inst_12165__$1 = topic_fn.call(null,inst_12117);var inst_12166 = cljs.core.deref.call(null,mults);var inst_12167__$1 = cljs.core.get.call(null,inst_12166,inst_12165__$1);var state_12188__$1 = (function (){var statearr_12196 = state_12188;(statearr_12196[12] = inst_12165__$1);
(statearr_12196[13] = inst_12167__$1);
return statearr_12196;
})();if(cljs.core.truth_(inst_12167__$1))
{var statearr_12197_12241 = state_12188__$1;(statearr_12197_12241[1] = 19);
} else
{var statearr_12198_12242 = state_12188__$1;(statearr_12198_12242[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 7))
{var inst_12184 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12199_12243 = state_12188__$1;(statearr_12199_12243[2] = inst_12184);
(statearr_12199_12243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 8))
{var inst_12129 = (state_12188[10]);var inst_12130 = (state_12188[11]);var inst_12132 = (inst_12130 < inst_12129);var inst_12133 = inst_12132;var state_12188__$1 = state_12188;if(cljs.core.truth_(inst_12133))
{var statearr_12203_12244 = state_12188__$1;(statearr_12203_12244[1] = 10);
} else
{var statearr_12204_12245 = state_12188__$1;(statearr_12204_12245[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 9))
{var inst_12163 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12205_12246 = state_12188__$1;(statearr_12205_12246[2] = inst_12163);
(statearr_12205_12246[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 10))
{var inst_12127 = (state_12188[8]);var inst_12128 = (state_12188[9]);var inst_12129 = (state_12188[10]);var inst_12130 = (state_12188[11]);var inst_12135 = cljs.core._nth.call(null,inst_12128,inst_12130);var inst_12136 = cljs.core.async.muxch_STAR_.call(null,inst_12135);var inst_12137 = cljs.core.async.close_BANG_.call(null,inst_12136);var inst_12138 = (inst_12130 + 1);var tmp12200 = inst_12127;var tmp12201 = inst_12128;var tmp12202 = inst_12129;var inst_12127__$1 = tmp12200;var inst_12128__$1 = tmp12201;var inst_12129__$1 = tmp12202;var inst_12130__$1 = inst_12138;var state_12188__$1 = (function (){var statearr_12206 = state_12188;(statearr_12206[14] = inst_12137);
(statearr_12206[8] = inst_12127__$1);
(statearr_12206[9] = inst_12128__$1);
(statearr_12206[10] = inst_12129__$1);
(statearr_12206[11] = inst_12130__$1);
return statearr_12206;
})();var statearr_12207_12247 = state_12188__$1;(statearr_12207_12247[2] = null);
(statearr_12207_12247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 11))
{var inst_12141 = (state_12188[15]);var inst_12127 = (state_12188[8]);var inst_12141__$1 = cljs.core.seq.call(null,inst_12127);var state_12188__$1 = (function (){var statearr_12208 = state_12188;(statearr_12208[15] = inst_12141__$1);
return statearr_12208;
})();if(inst_12141__$1)
{var statearr_12209_12248 = state_12188__$1;(statearr_12209_12248[1] = 13);
} else
{var statearr_12210_12249 = state_12188__$1;(statearr_12210_12249[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 12))
{var inst_12161 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12211_12250 = state_12188__$1;(statearr_12211_12250[2] = inst_12161);
(statearr_12211_12250[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 13))
{var inst_12141 = (state_12188[15]);var inst_12143 = cljs.core.chunked_seq_QMARK_.call(null,inst_12141);var state_12188__$1 = state_12188;if(inst_12143)
{var statearr_12212_12251 = state_12188__$1;(statearr_12212_12251[1] = 16);
} else
{var statearr_12213_12252 = state_12188__$1;(statearr_12213_12252[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 14))
{var state_12188__$1 = state_12188;var statearr_12214_12253 = state_12188__$1;(statearr_12214_12253[2] = null);
(statearr_12214_12253[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 15))
{var inst_12159 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12215_12254 = state_12188__$1;(statearr_12215_12254[2] = inst_12159);
(statearr_12215_12254[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 16))
{var inst_12141 = (state_12188[15]);var inst_12145 = cljs.core.chunk_first.call(null,inst_12141);var inst_12146 = cljs.core.chunk_rest.call(null,inst_12141);var inst_12147 = cljs.core.count.call(null,inst_12145);var inst_12127 = inst_12146;var inst_12128 = inst_12145;var inst_12129 = inst_12147;var inst_12130 = 0;var state_12188__$1 = (function (){var statearr_12216 = state_12188;(statearr_12216[8] = inst_12127);
(statearr_12216[9] = inst_12128);
(statearr_12216[10] = inst_12129);
(statearr_12216[11] = inst_12130);
return statearr_12216;
})();var statearr_12217_12255 = state_12188__$1;(statearr_12217_12255[2] = null);
(statearr_12217_12255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 17))
{var inst_12141 = (state_12188[15]);var inst_12150 = cljs.core.first.call(null,inst_12141);var inst_12151 = cljs.core.async.muxch_STAR_.call(null,inst_12150);var inst_12152 = cljs.core.async.close_BANG_.call(null,inst_12151);var inst_12153 = cljs.core.next.call(null,inst_12141);var inst_12127 = inst_12153;var inst_12128 = null;var inst_12129 = 0;var inst_12130 = 0;var state_12188__$1 = (function (){var statearr_12218 = state_12188;(statearr_12218[16] = inst_12152);
(statearr_12218[8] = inst_12127);
(statearr_12218[9] = inst_12128);
(statearr_12218[10] = inst_12129);
(statearr_12218[11] = inst_12130);
return statearr_12218;
})();var statearr_12219_12256 = state_12188__$1;(statearr_12219_12256[2] = null);
(statearr_12219_12256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 18))
{var inst_12156 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12220_12257 = state_12188__$1;(statearr_12220_12257[2] = inst_12156);
(statearr_12220_12257[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 19))
{var state_12188__$1 = state_12188;var statearr_12221_12258 = state_12188__$1;(statearr_12221_12258[2] = null);
(statearr_12221_12258[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 20))
{var state_12188__$1 = state_12188;var statearr_12222_12259 = state_12188__$1;(statearr_12222_12259[2] = null);
(statearr_12222_12259[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 21))
{var inst_12181 = (state_12188[2]);var state_12188__$1 = (function (){var statearr_12223 = state_12188;(statearr_12223[17] = inst_12181);
return statearr_12223;
})();var statearr_12224_12260 = state_12188__$1;(statearr_12224_12260[2] = null);
(statearr_12224_12260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 22))
{var inst_12178 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12225_12261 = state_12188__$1;(statearr_12225_12261[2] = inst_12178);
(statearr_12225_12261[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 23))
{var inst_12165 = (state_12188[12]);var inst_12169 = (state_12188[2]);var inst_12170 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12165);var state_12188__$1 = (function (){var statearr_12226 = state_12188;(statearr_12226[18] = inst_12169);
return statearr_12226;
})();var statearr_12227_12262 = state_12188__$1;(statearr_12227_12262[2] = inst_12170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12189 === 24))
{var inst_12117 = (state_12188[7]);var inst_12167 = (state_12188[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12188,23,Object,null,22);var inst_12174 = cljs.core.async.muxch_STAR_.call(null,inst_12167);var state_12188__$1 = state_12188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12188__$1,25,inst_12174,inst_12117);
} else
{if((state_val_12189 === 25))
{var inst_12176 = (state_12188[2]);var state_12188__$1 = state_12188;var statearr_12228_12263 = state_12188__$1;(statearr_12228_12263[2] = inst_12176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12232[0] = state_machine__6741__auto__);
(statearr_12232[1] = 1);
return statearr_12232;
});
var state_machine__6741__auto____1 = (function (state_12188){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12233){if((e12233 instanceof Object))
{var ex__6744__auto__ = e12233;var statearr_12234_12264 = state_12188;(statearr_12234_12264[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12265 = state_12188;
state_12188 = G__12265;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12188){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12235 = f__6811__auto__.call(null);(statearr_12235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12236);
return statearr_12235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6810__auto___12402 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12372){var state_val_12373 = (state_12372[1]);if((state_val_12373 === 1))
{var state_12372__$1 = state_12372;var statearr_12374_12403 = state_12372__$1;(statearr_12374_12403[2] = null);
(statearr_12374_12403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 2))
{var inst_12335 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12336 = 0;var state_12372__$1 = (function (){var statearr_12375 = state_12372;(statearr_12375[7] = inst_12336);
(statearr_12375[8] = inst_12335);
return statearr_12375;
})();var statearr_12376_12404 = state_12372__$1;(statearr_12376_12404[2] = null);
(statearr_12376_12404[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 3))
{var inst_12370 = (state_12372[2]);var state_12372__$1 = state_12372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12372__$1,inst_12370);
} else
{if((state_val_12373 === 4))
{var inst_12336 = (state_12372[7]);var inst_12338 = (inst_12336 < cnt);var state_12372__$1 = state_12372;if(cljs.core.truth_(inst_12338))
{var statearr_12377_12405 = state_12372__$1;(statearr_12377_12405[1] = 6);
} else
{var statearr_12378_12406 = state_12372__$1;(statearr_12378_12406[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 5))
{var inst_12356 = (state_12372[2]);var state_12372__$1 = (function (){var statearr_12379 = state_12372;(statearr_12379[9] = inst_12356);
return statearr_12379;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12372__$1,12,dchan);
} else
{if((state_val_12373 === 6))
{var state_12372__$1 = state_12372;var statearr_12380_12407 = state_12372__$1;(statearr_12380_12407[2] = null);
(statearr_12380_12407[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 7))
{var state_12372__$1 = state_12372;var statearr_12381_12408 = state_12372__$1;(statearr_12381_12408[2] = null);
(statearr_12381_12408[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 8))
{var inst_12354 = (state_12372[2]);var state_12372__$1 = state_12372;var statearr_12382_12409 = state_12372__$1;(statearr_12382_12409[2] = inst_12354);
(statearr_12382_12409[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 9))
{var inst_12336 = (state_12372[7]);var inst_12349 = (state_12372[2]);var inst_12350 = (inst_12336 + 1);var inst_12336__$1 = inst_12350;var state_12372__$1 = (function (){var statearr_12383 = state_12372;(statearr_12383[10] = inst_12349);
(statearr_12383[7] = inst_12336__$1);
return statearr_12383;
})();var statearr_12384_12410 = state_12372__$1;(statearr_12384_12410[2] = null);
(statearr_12384_12410[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 10))
{var inst_12340 = (state_12372[2]);var inst_12341 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12372__$1 = (function (){var statearr_12385 = state_12372;(statearr_12385[11] = inst_12340);
return statearr_12385;
})();var statearr_12386_12411 = state_12372__$1;(statearr_12386_12411[2] = inst_12341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 11))
{var inst_12336 = (state_12372[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12372,10,Object,null,9);var inst_12345 = chs__$1.call(null,inst_12336);var inst_12346 = done.call(null,inst_12336);var inst_12347 = cljs.core.async.take_BANG_.call(null,inst_12345,inst_12346);var state_12372__$1 = state_12372;var statearr_12387_12412 = state_12372__$1;(statearr_12387_12412[2] = inst_12347);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 12))
{var inst_12358 = (state_12372[12]);var inst_12358__$1 = (state_12372[2]);var inst_12359 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12358__$1);var state_12372__$1 = (function (){var statearr_12388 = state_12372;(statearr_12388[12] = inst_12358__$1);
return statearr_12388;
})();if(cljs.core.truth_(inst_12359))
{var statearr_12389_12413 = state_12372__$1;(statearr_12389_12413[1] = 13);
} else
{var statearr_12390_12414 = state_12372__$1;(statearr_12390_12414[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 13))
{var inst_12361 = cljs.core.async.close_BANG_.call(null,out);var state_12372__$1 = state_12372;var statearr_12391_12415 = state_12372__$1;(statearr_12391_12415[2] = inst_12361);
(statearr_12391_12415[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 14))
{var inst_12358 = (state_12372[12]);var inst_12363 = cljs.core.apply.call(null,f,inst_12358);var state_12372__$1 = state_12372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12372__$1,16,out,inst_12363);
} else
{if((state_val_12373 === 15))
{var inst_12368 = (state_12372[2]);var state_12372__$1 = state_12372;var statearr_12392_12416 = state_12372__$1;(statearr_12392_12416[2] = inst_12368);
(statearr_12392_12416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 16))
{var inst_12365 = (state_12372[2]);var state_12372__$1 = (function (){var statearr_12393 = state_12372;(statearr_12393[13] = inst_12365);
return statearr_12393;
})();var statearr_12394_12417 = state_12372__$1;(statearr_12394_12417[2] = null);
(statearr_12394_12417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12398[0] = state_machine__6741__auto__);
(statearr_12398[1] = 1);
return statearr_12398;
});
var state_machine__6741__auto____1 = (function (state_12372){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12399){if((e12399 instanceof Object))
{var ex__6744__auto__ = e12399;var statearr_12400_12418 = state_12372;(statearr_12400_12418[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12419 = state_12372;
state_12372 = G__12419;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12372){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12401 = f__6811__auto__.call(null);(statearr_12401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12402);
return statearr_12401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___12527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12503){var state_val_12504 = (state_12503[1]);if((state_val_12504 === 1))
{var inst_12474 = cljs.core.vec.call(null,chs);var inst_12475 = inst_12474;var state_12503__$1 = (function (){var statearr_12505 = state_12503;(statearr_12505[7] = inst_12475);
return statearr_12505;
})();var statearr_12506_12528 = state_12503__$1;(statearr_12506_12528[2] = null);
(statearr_12506_12528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 2))
{var inst_12475 = (state_12503[7]);var inst_12477 = cljs.core.count.call(null,inst_12475);var inst_12478 = (inst_12477 > 0);var state_12503__$1 = state_12503;if(cljs.core.truth_(inst_12478))
{var statearr_12507_12529 = state_12503__$1;(statearr_12507_12529[1] = 4);
} else
{var statearr_12508_12530 = state_12503__$1;(statearr_12508_12530[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 3))
{var inst_12501 = (state_12503[2]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else
{if((state_val_12504 === 4))
{var inst_12475 = (state_12503[7]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12503__$1,7,inst_12475);
} else
{if((state_val_12504 === 5))
{var inst_12497 = cljs.core.async.close_BANG_.call(null,out);var state_12503__$1 = state_12503;var statearr_12509_12531 = state_12503__$1;(statearr_12509_12531[2] = inst_12497);
(statearr_12509_12531[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 6))
{var inst_12499 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12510_12532 = state_12503__$1;(statearr_12510_12532[2] = inst_12499);
(statearr_12510_12532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 7))
{var inst_12482 = (state_12503[8]);var inst_12483 = (state_12503[9]);var inst_12482__$1 = (state_12503[2]);var inst_12483__$1 = cljs.core.nth.call(null,inst_12482__$1,0,null);var inst_12484 = cljs.core.nth.call(null,inst_12482__$1,1,null);var inst_12485 = (inst_12483__$1 == null);var state_12503__$1 = (function (){var statearr_12511 = state_12503;(statearr_12511[10] = inst_12484);
(statearr_12511[8] = inst_12482__$1);
(statearr_12511[9] = inst_12483__$1);
return statearr_12511;
})();if(cljs.core.truth_(inst_12485))
{var statearr_12512_12533 = state_12503__$1;(statearr_12512_12533[1] = 8);
} else
{var statearr_12513_12534 = state_12503__$1;(statearr_12513_12534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 8))
{var inst_12475 = (state_12503[7]);var inst_12484 = (state_12503[10]);var inst_12482 = (state_12503[8]);var inst_12483 = (state_12503[9]);var inst_12487 = (function (){var c = inst_12484;var v = inst_12483;var vec__12480 = inst_12482;var cs = inst_12475;return ((function (c,v,vec__12480,cs,inst_12475,inst_12484,inst_12482,inst_12483,state_val_12504){
return (function (p1__12420_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12420_SHARP_);
});
;})(c,v,vec__12480,cs,inst_12475,inst_12484,inst_12482,inst_12483,state_val_12504))
})();var inst_12488 = cljs.core.filterv.call(null,inst_12487,inst_12475);var inst_12475__$1 = inst_12488;var state_12503__$1 = (function (){var statearr_12514 = state_12503;(statearr_12514[7] = inst_12475__$1);
return statearr_12514;
})();var statearr_12515_12535 = state_12503__$1;(statearr_12515_12535[2] = null);
(statearr_12515_12535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 9))
{var inst_12483 = (state_12503[9]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,11,out,inst_12483);
} else
{if((state_val_12504 === 10))
{var inst_12495 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12517_12536 = state_12503__$1;(statearr_12517_12536[2] = inst_12495);
(statearr_12517_12536[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 11))
{var inst_12475 = (state_12503[7]);var inst_12492 = (state_12503[2]);var tmp12516 = inst_12475;var inst_12475__$1 = tmp12516;var state_12503__$1 = (function (){var statearr_12518 = state_12503;(statearr_12518[7] = inst_12475__$1);
(statearr_12518[11] = inst_12492);
return statearr_12518;
})();var statearr_12519_12537 = state_12503__$1;(statearr_12519_12537[2] = null);
(statearr_12519_12537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12523 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12523[0] = state_machine__6741__auto__);
(statearr_12523[1] = 1);
return statearr_12523;
});
var state_machine__6741__auto____1 = (function (state_12503){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12524){if((e12524 instanceof Object))
{var ex__6744__auto__ = e12524;var statearr_12525_12538 = state_12503;(statearr_12525_12538[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12539 = state_12503;
state_12503 = G__12539;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12526 = f__6811__auto__.call(null);(statearr_12526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12527);
return statearr_12526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___12632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12609){var state_val_12610 = (state_12609[1]);if((state_val_12610 === 1))
{var inst_12586 = 0;var state_12609__$1 = (function (){var statearr_12611 = state_12609;(statearr_12611[7] = inst_12586);
return statearr_12611;
})();var statearr_12612_12633 = state_12609__$1;(statearr_12612_12633[2] = null);
(statearr_12612_12633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 2))
{var inst_12586 = (state_12609[7]);var inst_12588 = (inst_12586 < n);var state_12609__$1 = state_12609;if(cljs.core.truth_(inst_12588))
{var statearr_12613_12634 = state_12609__$1;(statearr_12613_12634[1] = 4);
} else
{var statearr_12614_12635 = state_12609__$1;(statearr_12614_12635[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 3))
{var inst_12606 = (state_12609[2]);var inst_12607 = cljs.core.async.close_BANG_.call(null,out);var state_12609__$1 = (function (){var statearr_12615 = state_12609;(statearr_12615[8] = inst_12606);
return statearr_12615;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12609__$1,inst_12607);
} else
{if((state_val_12610 === 4))
{var state_12609__$1 = state_12609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12609__$1,7,ch);
} else
{if((state_val_12610 === 5))
{var state_12609__$1 = state_12609;var statearr_12616_12636 = state_12609__$1;(statearr_12616_12636[2] = null);
(statearr_12616_12636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 6))
{var inst_12604 = (state_12609[2]);var state_12609__$1 = state_12609;var statearr_12617_12637 = state_12609__$1;(statearr_12617_12637[2] = inst_12604);
(statearr_12617_12637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 7))
{var inst_12591 = (state_12609[9]);var inst_12591__$1 = (state_12609[2]);var inst_12592 = (inst_12591__$1 == null);var inst_12593 = cljs.core.not.call(null,inst_12592);var state_12609__$1 = (function (){var statearr_12618 = state_12609;(statearr_12618[9] = inst_12591__$1);
return statearr_12618;
})();if(inst_12593)
{var statearr_12619_12638 = state_12609__$1;(statearr_12619_12638[1] = 8);
} else
{var statearr_12620_12639 = state_12609__$1;(statearr_12620_12639[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 8))
{var inst_12591 = (state_12609[9]);var state_12609__$1 = state_12609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12609__$1,11,out,inst_12591);
} else
{if((state_val_12610 === 9))
{var state_12609__$1 = state_12609;var statearr_12621_12640 = state_12609__$1;(statearr_12621_12640[2] = null);
(statearr_12621_12640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 10))
{var inst_12601 = (state_12609[2]);var state_12609__$1 = state_12609;var statearr_12622_12641 = state_12609__$1;(statearr_12622_12641[2] = inst_12601);
(statearr_12622_12641[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12610 === 11))
{var inst_12586 = (state_12609[7]);var inst_12596 = (state_12609[2]);var inst_12597 = (inst_12586 + 1);var inst_12586__$1 = inst_12597;var state_12609__$1 = (function (){var statearr_12623 = state_12609;(statearr_12623[10] = inst_12596);
(statearr_12623[7] = inst_12586__$1);
return statearr_12623;
})();var statearr_12624_12642 = state_12609__$1;(statearr_12624_12642[2] = null);
(statearr_12624_12642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12628[0] = state_machine__6741__auto__);
(statearr_12628[1] = 1);
return statearr_12628;
});
var state_machine__6741__auto____1 = (function (state_12609){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12609);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12629){if((e12629 instanceof Object))
{var ex__6744__auto__ = e12629;var statearr_12630_12643 = state_12609;(statearr_12630_12643[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12644 = state_12609;
state_12609 = G__12644;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12609){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12631 = f__6811__auto__.call(null);(statearr_12631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12632);
return statearr_12631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___12741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12716){var state_val_12717 = (state_12716[1]);if((state_val_12717 === 1))
{var inst_12693 = null;var state_12716__$1 = (function (){var statearr_12718 = state_12716;(statearr_12718[7] = inst_12693);
return statearr_12718;
})();var statearr_12719_12742 = state_12716__$1;(statearr_12719_12742[2] = null);
(statearr_12719_12742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 2))
{var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12716__$1,4,ch);
} else
{if((state_val_12717 === 3))
{var inst_12713 = (state_12716[2]);var inst_12714 = cljs.core.async.close_BANG_.call(null,out);var state_12716__$1 = (function (){var statearr_12720 = state_12716;(statearr_12720[8] = inst_12713);
return statearr_12720;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else
{if((state_val_12717 === 4))
{var inst_12696 = (state_12716[9]);var inst_12696__$1 = (state_12716[2]);var inst_12697 = (inst_12696__$1 == null);var inst_12698 = cljs.core.not.call(null,inst_12697);var state_12716__$1 = (function (){var statearr_12721 = state_12716;(statearr_12721[9] = inst_12696__$1);
return statearr_12721;
})();if(inst_12698)
{var statearr_12722_12743 = state_12716__$1;(statearr_12722_12743[1] = 5);
} else
{var statearr_12723_12744 = state_12716__$1;(statearr_12723_12744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 5))
{var inst_12696 = (state_12716[9]);var inst_12693 = (state_12716[7]);var inst_12700 = cljs.core._EQ_.call(null,inst_12696,inst_12693);var state_12716__$1 = state_12716;if(inst_12700)
{var statearr_12724_12745 = state_12716__$1;(statearr_12724_12745[1] = 8);
} else
{var statearr_12725_12746 = state_12716__$1;(statearr_12725_12746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 6))
{var state_12716__$1 = state_12716;var statearr_12727_12747 = state_12716__$1;(statearr_12727_12747[2] = null);
(statearr_12727_12747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 7))
{var inst_12711 = (state_12716[2]);var state_12716__$1 = state_12716;var statearr_12728_12748 = state_12716__$1;(statearr_12728_12748[2] = inst_12711);
(statearr_12728_12748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 8))
{var inst_12693 = (state_12716[7]);var tmp12726 = inst_12693;var inst_12693__$1 = tmp12726;var state_12716__$1 = (function (){var statearr_12729 = state_12716;(statearr_12729[7] = inst_12693__$1);
return statearr_12729;
})();var statearr_12730_12749 = state_12716__$1;(statearr_12730_12749[2] = null);
(statearr_12730_12749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 9))
{var inst_12696 = (state_12716[9]);var state_12716__$1 = state_12716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12716__$1,11,out,inst_12696);
} else
{if((state_val_12717 === 10))
{var inst_12708 = (state_12716[2]);var state_12716__$1 = state_12716;var statearr_12731_12750 = state_12716__$1;(statearr_12731_12750[2] = inst_12708);
(statearr_12731_12750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12717 === 11))
{var inst_12696 = (state_12716[9]);var inst_12705 = (state_12716[2]);var inst_12693 = inst_12696;var state_12716__$1 = (function (){var statearr_12732 = state_12716;(statearr_12732[7] = inst_12693);
(statearr_12732[10] = inst_12705);
return statearr_12732;
})();var statearr_12733_12751 = state_12716__$1;(statearr_12733_12751[2] = null);
(statearr_12733_12751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12737 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12737[0] = state_machine__6741__auto__);
(statearr_12737[1] = 1);
return statearr_12737;
});
var state_machine__6741__auto____1 = (function (state_12716){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12716);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12738){if((e12738 instanceof Object))
{var ex__6744__auto__ = e12738;var statearr_12739_12752 = state_12716;(statearr_12739_12752[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12753 = state_12716;
state_12716 = G__12753;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12740 = f__6811__auto__.call(null);(statearr_12740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12741);
return statearr_12740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___12888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_12858){var state_val_12859 = (state_12858[1]);if((state_val_12859 === 1))
{var inst_12821 = (new Array(n));var inst_12822 = inst_12821;var inst_12823 = 0;var state_12858__$1 = (function (){var statearr_12860 = state_12858;(statearr_12860[7] = inst_12822);
(statearr_12860[8] = inst_12823);
return statearr_12860;
})();var statearr_12861_12889 = state_12858__$1;(statearr_12861_12889[2] = null);
(statearr_12861_12889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 2))
{var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12858__$1,4,ch);
} else
{if((state_val_12859 === 3))
{var inst_12856 = (state_12858[2]);var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12858__$1,inst_12856);
} else
{if((state_val_12859 === 4))
{var inst_12826 = (state_12858[9]);var inst_12826__$1 = (state_12858[2]);var inst_12827 = (inst_12826__$1 == null);var inst_12828 = cljs.core.not.call(null,inst_12827);var state_12858__$1 = (function (){var statearr_12862 = state_12858;(statearr_12862[9] = inst_12826__$1);
return statearr_12862;
})();if(inst_12828)
{var statearr_12863_12890 = state_12858__$1;(statearr_12863_12890[1] = 5);
} else
{var statearr_12864_12891 = state_12858__$1;(statearr_12864_12891[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 5))
{var inst_12822 = (state_12858[7]);var inst_12823 = (state_12858[8]);var inst_12826 = (state_12858[9]);var inst_12831 = (state_12858[10]);var inst_12830 = (inst_12822[inst_12823] = inst_12826);var inst_12831__$1 = (inst_12823 + 1);var inst_12832 = (inst_12831__$1 < n);var state_12858__$1 = (function (){var statearr_12865 = state_12858;(statearr_12865[11] = inst_12830);
(statearr_12865[10] = inst_12831__$1);
return statearr_12865;
})();if(cljs.core.truth_(inst_12832))
{var statearr_12866_12892 = state_12858__$1;(statearr_12866_12892[1] = 8);
} else
{var statearr_12867_12893 = state_12858__$1;(statearr_12867_12893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 6))
{var inst_12823 = (state_12858[8]);var inst_12844 = (inst_12823 > 0);var state_12858__$1 = state_12858;if(cljs.core.truth_(inst_12844))
{var statearr_12869_12894 = state_12858__$1;(statearr_12869_12894[1] = 12);
} else
{var statearr_12870_12895 = state_12858__$1;(statearr_12870_12895[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 7))
{var inst_12854 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12871_12896 = state_12858__$1;(statearr_12871_12896[2] = inst_12854);
(statearr_12871_12896[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 8))
{var inst_12822 = (state_12858[7]);var inst_12831 = (state_12858[10]);var tmp12868 = inst_12822;var inst_12822__$1 = tmp12868;var inst_12823 = inst_12831;var state_12858__$1 = (function (){var statearr_12872 = state_12858;(statearr_12872[7] = inst_12822__$1);
(statearr_12872[8] = inst_12823);
return statearr_12872;
})();var statearr_12873_12897 = state_12858__$1;(statearr_12873_12897[2] = null);
(statearr_12873_12897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 9))
{var inst_12822 = (state_12858[7]);var inst_12836 = cljs.core.vec.call(null,inst_12822);var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,11,out,inst_12836);
} else
{if((state_val_12859 === 10))
{var inst_12842 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12874_12898 = state_12858__$1;(statearr_12874_12898[2] = inst_12842);
(statearr_12874_12898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 11))
{var inst_12838 = (state_12858[2]);var inst_12839 = (new Array(n));var inst_12822 = inst_12839;var inst_12823 = 0;var state_12858__$1 = (function (){var statearr_12875 = state_12858;(statearr_12875[12] = inst_12838);
(statearr_12875[7] = inst_12822);
(statearr_12875[8] = inst_12823);
return statearr_12875;
})();var statearr_12876_12899 = state_12858__$1;(statearr_12876_12899[2] = null);
(statearr_12876_12899[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 12))
{var inst_12822 = (state_12858[7]);var inst_12846 = cljs.core.vec.call(null,inst_12822);var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,15,out,inst_12846);
} else
{if((state_val_12859 === 13))
{var state_12858__$1 = state_12858;var statearr_12877_12900 = state_12858__$1;(statearr_12877_12900[2] = null);
(statearr_12877_12900[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 14))
{var inst_12851 = (state_12858[2]);var inst_12852 = cljs.core.async.close_BANG_.call(null,out);var state_12858__$1 = (function (){var statearr_12878 = state_12858;(statearr_12878[13] = inst_12851);
return statearr_12878;
})();var statearr_12879_12901 = state_12858__$1;(statearr_12879_12901[2] = inst_12852);
(statearr_12879_12901[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 15))
{var inst_12848 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12880_12902 = state_12858__$1;(statearr_12880_12902[2] = inst_12848);
(statearr_12880_12902[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_12884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12884[0] = state_machine__6741__auto__);
(statearr_12884[1] = 1);
return statearr_12884;
});
var state_machine__6741__auto____1 = (function (state_12858){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_12858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e12885){if((e12885 instanceof Object))
{var ex__6744__auto__ = e12885;var statearr_12886_12903 = state_12858;(statearr_12886_12903[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12904 = state_12858;
state_12858 = G__12904;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_12858){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_12858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_12887 = f__6811__auto__.call(null);(statearr_12887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___12888);
return statearr_12887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6810__auto___13047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6811__auto__ = (function (){var switch__6740__auto__ = (function (state_13017){var state_val_13018 = (state_13017[1]);if((state_val_13018 === 1))
{var inst_12976 = [];var inst_12977 = inst_12976;var inst_12978 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13017__$1 = (function (){var statearr_13019 = state_13017;(statearr_13019[7] = inst_12977);
(statearr_13019[8] = inst_12978);
return statearr_13019;
})();var statearr_13020_13048 = state_13017__$1;(statearr_13020_13048[2] = null);
(statearr_13020_13048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 2))
{var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13017__$1,4,ch);
} else
{if((state_val_13018 === 3))
{var inst_13015 = (state_13017[2]);var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13017__$1,inst_13015);
} else
{if((state_val_13018 === 4))
{var inst_12981 = (state_13017[9]);var inst_12981__$1 = (state_13017[2]);var inst_12982 = (inst_12981__$1 == null);var inst_12983 = cljs.core.not.call(null,inst_12982);var state_13017__$1 = (function (){var statearr_13021 = state_13017;(statearr_13021[9] = inst_12981__$1);
return statearr_13021;
})();if(inst_12983)
{var statearr_13022_13049 = state_13017__$1;(statearr_13022_13049[1] = 5);
} else
{var statearr_13023_13050 = state_13017__$1;(statearr_13023_13050[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 5))
{var inst_12985 = (state_13017[10]);var inst_12981 = (state_13017[9]);var inst_12978 = (state_13017[8]);var inst_12985__$1 = f.call(null,inst_12981);var inst_12986 = cljs.core._EQ_.call(null,inst_12985__$1,inst_12978);var inst_12987 = cljs.core.keyword_identical_QMARK_.call(null,inst_12978,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12988 = (inst_12986) || (inst_12987);var state_13017__$1 = (function (){var statearr_13024 = state_13017;(statearr_13024[10] = inst_12985__$1);
return statearr_13024;
})();if(cljs.core.truth_(inst_12988))
{var statearr_13025_13051 = state_13017__$1;(statearr_13025_13051[1] = 8);
} else
{var statearr_13026_13052 = state_13017__$1;(statearr_13026_13052[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 6))
{var inst_12977 = (state_13017[7]);var inst_13002 = inst_12977.length;var inst_13003 = (inst_13002 > 0);var state_13017__$1 = state_13017;if(cljs.core.truth_(inst_13003))
{var statearr_13028_13053 = state_13017__$1;(statearr_13028_13053[1] = 12);
} else
{var statearr_13029_13054 = state_13017__$1;(statearr_13029_13054[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 7))
{var inst_13013 = (state_13017[2]);var state_13017__$1 = state_13017;var statearr_13030_13055 = state_13017__$1;(statearr_13030_13055[2] = inst_13013);
(statearr_13030_13055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 8))
{var inst_12985 = (state_13017[10]);var inst_12977 = (state_13017[7]);var inst_12981 = (state_13017[9]);var inst_12990 = inst_12977.push(inst_12981);var tmp13027 = inst_12977;var inst_12977__$1 = tmp13027;var inst_12978 = inst_12985;var state_13017__$1 = (function (){var statearr_13031 = state_13017;(statearr_13031[11] = inst_12990);
(statearr_13031[7] = inst_12977__$1);
(statearr_13031[8] = inst_12978);
return statearr_13031;
})();var statearr_13032_13056 = state_13017__$1;(statearr_13032_13056[2] = null);
(statearr_13032_13056[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 9))
{var inst_12977 = (state_13017[7]);var inst_12993 = cljs.core.vec.call(null,inst_12977);var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13017__$1,11,out,inst_12993);
} else
{if((state_val_13018 === 10))
{var inst_13000 = (state_13017[2]);var state_13017__$1 = state_13017;var statearr_13033_13057 = state_13017__$1;(statearr_13033_13057[2] = inst_13000);
(statearr_13033_13057[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 11))
{var inst_12985 = (state_13017[10]);var inst_12981 = (state_13017[9]);var inst_12995 = (state_13017[2]);var inst_12996 = [];var inst_12997 = inst_12996.push(inst_12981);var inst_12977 = inst_12996;var inst_12978 = inst_12985;var state_13017__$1 = (function (){var statearr_13034 = state_13017;(statearr_13034[12] = inst_12995);
(statearr_13034[7] = inst_12977);
(statearr_13034[8] = inst_12978);
(statearr_13034[13] = inst_12997);
return statearr_13034;
})();var statearr_13035_13058 = state_13017__$1;(statearr_13035_13058[2] = null);
(statearr_13035_13058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 12))
{var inst_12977 = (state_13017[7]);var inst_13005 = cljs.core.vec.call(null,inst_12977);var state_13017__$1 = state_13017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13017__$1,15,out,inst_13005);
} else
{if((state_val_13018 === 13))
{var state_13017__$1 = state_13017;var statearr_13036_13059 = state_13017__$1;(statearr_13036_13059[2] = null);
(statearr_13036_13059[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 14))
{var inst_13010 = (state_13017[2]);var inst_13011 = cljs.core.async.close_BANG_.call(null,out);var state_13017__$1 = (function (){var statearr_13037 = state_13017;(statearr_13037[14] = inst_13010);
return statearr_13037;
})();var statearr_13038_13060 = state_13017__$1;(statearr_13038_13060[2] = inst_13011);
(statearr_13038_13060[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13018 === 15))
{var inst_13007 = (state_13017[2]);var state_13017__$1 = state_13017;var statearr_13039_13061 = state_13017__$1;(statearr_13039_13061[2] = inst_13007);
(statearr_13039_13061[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6740__auto__){
return (function() {
var state_machine__6741__auto__ = null;
var state_machine__6741__auto____0 = (function (){var statearr_13043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13043[0] = state_machine__6741__auto__);
(statearr_13043[1] = 1);
return statearr_13043;
});
var state_machine__6741__auto____1 = (function (state_13017){while(true){
var ret_value__6742__auto__ = (function (){try{while(true){
var result__6743__auto__ = switch__6740__auto__.call(null,state_13017);if(cljs.core.keyword_identical_QMARK_.call(null,result__6743__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6743__auto__;
}
break;
}
}catch (e13044){if((e13044 instanceof Object))
{var ex__6744__auto__ = e13044;var statearr_13045_13062 = state_13017;(statearr_13045_13062[5] = ex__6744__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6742__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13063 = state_13017;
state_13017 = G__13063;
continue;
}
} else
{return ret_value__6742__auto__;
}
break;
}
});
state_machine__6741__auto__ = function(state_13017){
switch(arguments.length){
case 0:
return state_machine__6741__auto____0.call(this);
case 1:
return state_machine__6741__auto____1.call(this,state_13017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6741__auto____0;
state_machine__6741__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6741__auto____1;
return state_machine__6741__auto__;
})()
;})(switch__6740__auto__))
})();var state__6812__auto__ = (function (){var statearr_13046 = f__6811__auto__.call(null);(statearr_13046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6810__auto___13047);
return statearr_13046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6812__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map