;;--
;; This file is part of Sonic Pi: http://sonic-pi.net
;; Full project source: https://github.com/samaaron/sonic-pi
;; License: https://github.com/samaaron/sonic-pi/blob/master/LICENSE.md
;;
;; Copyright 2013, 2014 by Sam Aaron (http://sam.aaron.name).
;; All rights reserved.
;;
;; Permission is granted for use, copying, modification, distribution,
;; and distribution of modified versions of this work as long as this
;; notice is included.
;;++
(ns defpi.onload
  (:require [defpi.ws :refer [add-ws-handlers mk-ws]]))

(set! (.-onload js/window)
      (fn []
        (mk-ws)
        (add-ws-handlers)
        ))
