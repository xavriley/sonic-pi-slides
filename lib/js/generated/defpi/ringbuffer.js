// Compiled by ClojureScript 0.0-2173
goog.provide('defpi.ringbuffer');
goog.require('cljs.core');

/**
* @constructor
*/
defpi.ringbuffer.RingBuffer = (function (size,idx,content){
this.size = size;
this.idx = idx;
this.content = content;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
})
defpi.ringbuffer.RingBuffer.cljs$lang$type = true;
defpi.ringbuffer.RingBuffer.cljs$lang$ctorStr = "defpi.ringbuffer/RingBuffer";
defpi.ringbuffer.RingBuffer.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"defpi.ringbuffer/RingBuffer");
});
defpi.ringbuffer.RingBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return defpi.ringbuffer.rb_seq.call(null,this$__$1);
});
defpi.ringbuffer.__GT_RingBuffer = (function __GT_RingBuffer(size,idx,content){return (new defpi.ringbuffer.RingBuffer(size,idx,content));
});
defpi.ringbuffer.mk_ringbuffer = (function mk_ringbuffer(size){return (new defpi.ringbuffer.RingBuffer(size,0,cljs.core.PersistentArrayMap.EMPTY));
});
defpi.ringbuffer.add = (function add(rb,el){var idx = rb.idx;var size = rb.size;return (new defpi.ringbuffer.RingBuffer(size,cljs.core.mod.call(null,(idx + 1),size),cljs.core.assoc.call(null,rb.content,idx,el)));
});
defpi.ringbuffer.rb_rseq = (function() {
var rb_rseq = null;
var rb_rseq__1 = (function (rb){return defpi.ringbuffer.rb_seq.call(null,rb,rb.idx,rb.size);
});
var rb_rseq__3 = (function (rb,idx,left){return (new cljs.core.LazySeq(null,(function (){if((left > 0))
{return cljs.core.cons.call(null,cljs.core.get.call(null,rb.content,idx),defpi.ringbuffer.rb_seq.call(null,rb,cljs.core.mod.call(null,(idx + 1),rb.size),(left - 1)));
} else
{return null;
}
}),null,null));
});
rb_rseq = function(rb,idx,left){
switch(arguments.length){
case 1:
return rb_rseq__1.call(this,rb);
case 3:
return rb_rseq__3.call(this,rb,idx,left);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rb_rseq.cljs$core$IFn$_invoke$arity$1 = rb_rseq__1;
rb_rseq.cljs$core$IFn$_invoke$arity$3 = rb_rseq__3;
return rb_rseq;
})()
;
defpi.ringbuffer.rb_seq = (function() {
var rb_seq = null;
var rb_seq__1 = (function (rb){return rb_seq.call(null,rb,rb.idx,rb.size);
});
var rb_seq__3 = (function (rb,idx,left){var idx__$1 = cljs.core.mod.call(null,(idx - 1),rb.size);return (new cljs.core.LazySeq(null,(function (){if((left > 0))
{return cljs.core.cons.call(null,cljs.core.get.call(null,rb.content,idx__$1),rb_seq.call(null,rb,idx__$1,(left - 1)));
} else
{return null;
}
}),null,null));
});
rb_seq = function(rb,idx,left){
switch(arguments.length){
case 1:
return rb_seq__1.call(this,rb);
case 3:
return rb_seq__3.call(this,rb,idx,left);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rb_seq.cljs$core$IFn$_invoke$arity$1 = rb_seq__1;
rb_seq.cljs$core$IFn$_invoke$arity$3 = rb_seq__3;
return rb_seq;
})()
;

//# sourceMappingURL=ringbuffer.js.map