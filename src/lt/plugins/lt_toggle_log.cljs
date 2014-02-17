(ns lt.plugins.lt-toggle_log
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]))

(do
  (def console (first (object/by-tag :console)))
  nil)

(defn tab? []
  (= (:current-ui @console) :tab))

(defn open []
  (let [curr (pool/last-active)]
    (cmd/exec! :console-tab)
    (cmd/exec! :tabset.new)
    (tabs/active! console)
    (cmd/exec! :tabs.move-next-tabset)
    (tabs/active! curr)))

(defn close []
  (cmd/exec! :tabset.next)
  (tabs/active! console)
  (cmd/exec! :tabs.close)
  (cmd/exec! :tabset.close))

(defn toggle []
  (if (tab?)
    (close)
    (open)))

(cmd/command {:command :toggle-log
              :desc "Toggle Console in fresh tabset"
              :exec toggle})


