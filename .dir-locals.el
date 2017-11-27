((nil . ((eval
          . (progn
              (let ((base-path
                     (locate-dominating-file default-directory ".dir-locals.el")))
                (setq-local backup-directory-alist
                            `((,(expand-file-name ".*"
                                                  base-path)
                               . ,(expand-file-name ".backup"
                                                    base-path))))
                (make-local-variable 'auto-mode-alist)
                (add-to-list 'auto-mode-alist '("\\.js\\'" . rjsx-mode))
                (make-local-variable 'exec-path)
                (add-to-list 'exec-path
                             (expand-file-name "node_modules/.bin/"
                                               base-path)))))
         (create-lockfiles . nil)))
 (js2-mode . ((js-indent-level . 2)
              (js2-bounce-indent-p . t)
              (js2-strict-trailing-comma-warning . nil)
              (js2-strict-missing-semi-warning . nil)
              (js2-strict-inconsistent-return-warning . nil)))
 (js2-jsx-mode . ((js-indent-level . 2)
                  (sgml-basic-offset . 2)
                  (js2-bounce-indent-p . t)
                  (js2-strict-trailing-comma-warning . nil)
                  (js2-strict-missing-semi-warning . t)
                  (js2-strict-inconsistent-return-warning . t)))
 (json-mode . ((js-indent-level . 2))))
