if(!lt.util.load.provided_QMARK_('lt.plugins.lt-toggle_log')) {
goog.provide('lt.plugins.lt_toggle_log');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_toggle_log.console = cljs.core.first.call(null,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"console","console",1965414601)));
lt.plugins.lt_toggle_log.tab_QMARK_ = (function tab_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-ui","current-ui",4219850458).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.lt_toggle_log.console)),new cljs.core.Keyword(null,"tab","tab",1014018823));
});
lt.plugins.lt_toggle_log.open = (function open(){var curr = lt.objs.editor.pool.last_active.call(null);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"console-tab","console-tab",3389753745));
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601));
lt.objs.tabs.active_BANG_.call(null,lt.plugins.lt_toggle_log.console);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.move-next-tabset","tabs.move-next-tabset",3557293229));
return lt.objs.tabs.active_BANG_.call(null,curr);
});
lt.plugins.lt_toggle_log.close = (function close(){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.next","tabset.next",1472250630));
lt.objs.tabs.active_BANG_.call(null,lt.plugins.lt_toggle_log.console);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.close","tabset.close",2327781609));
});
lt.plugins.lt_toggle_log.toggle = (function toggle(){if(lt.plugins.lt_toggle_log.tab_QMARK_.call(null))
{return lt.plugins.lt_toggle_log.close.call(null);
} else
{return lt.plugins.lt_toggle_log.open.call(null);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-log","toggle-log",4455267517),new cljs.core.Keyword(null,"desc","desc",1016984067),"Toggle Console in fresh tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.lt_toggle_log.toggle], null));
}

//# sourceMappingURL=togglelog_compiled.js.map