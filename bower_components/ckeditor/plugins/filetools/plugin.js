﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  function h(a) {
    this.editor = a;
    this.loaders = [];
  }
  function k(a, d, b) {
    var c = a.config.fileTools_defaultFileName;
    this.editor = a;
    this.lang = a.lang;
    "string" === typeof d
      ? ((this.data = d),
        (this.file = m(this.data)),
        (this.loaded = this.total = this.file.size))
      : ((this.data = null),
        (this.file = d),
        (this.total = this.file.size),
        (this.loaded = 0));
    b
      ? (this.fileName = b)
      : this.file.name
        ? (this.fileName = this.file.name)
        : ((a = this.file.type.split("/")),
          c && (a[0] = c),
          (this.fileName = a.join(".")));
    this.uploaded = 0;
    this.responseData = this.uploadTotal = null;
    this.status = "created";
    this.abort = function () {
      this.changeStatus("abort");
    };
  }
  function m(a) {
    var d = a.match(l)[1];
    a = a.replace(l, "");
    a = atob(a);
    var b = [],
      c,
      f,
      e,
      g;
    for (c = 0; c < a.length; c += 512) {
      f = a.slice(c, c + 512);
      e = Array(f.length);
      for (g = 0; g < f.length; g++) e[g] = f.charCodeAt(g);
      f = new Uint8Array(e);
      b.push(f);
    }
    return new Blob(b, { type: d });
  }
  CKEDITOR.plugins.add("filetools", {
    lang: "az,ca,cs,da,de,de-ch,en,eo,es,es-mx,eu,fr,gl,hr,hu,id,it,ja,km,ko,ku,nb,nl,oc,pl,pt,pt-br,ru,sk,sv,tr,ug,uk,zh,zh-cn",
    beforeInit: function (a) {
      a.uploadRepository = new h(a);
      a.on(
        "fileUploadRequest",
        function (a) {
          var b = a.data.fileLoader;
          b.xhr.open("POST", b.uploadUrl, !0);
          a.data.requestData.upload = { file: b.file, name: b.fileName };
        },
        null,
        null,
        5,
      );
      a.on(
        "fileUploadRequest",
        function (a) {
          var b = a.data.fileLoader,
            c = new FormData();
          a = a.data.requestData;
          for (var f in a) {
            var e = a[f];
            "object" === typeof e && e.file
              ? c.append(f, e.file, e.name)
              : c.append(f, e);
          }
          c.append("ckCsrfToken", CKEDITOR.tools.getCsrfToken());
          b.xhr.send(c);
        },
        null,
        null,
        999,
      );
      a.on(
        "fileUploadResponse",
        function (a) {
          var b = a.data.fileLoader,
            c = b.xhr,
            f = a.data;
          try {
            var e = JSON.parse(c.responseText);
            e.error && e.error.message && (f.message = e.error.message);
            if (e.uploaded) for (var g in e) f[g] = e[g];
            else a.cancel();
          } catch (h) {
            (f.message = b.lang.filetools.responseError),
              CKEDITOR.warn("filetools-response-error", {
                responseText: c.responseText,
              }),
              a.cancel();
          }
        },
        null,
        null,
        999,
      );
    },
  });
  h.prototype = {
    create: function (a, d) {
      var b = this.loaders.length,
        c = new k(this.editor, a, d);
      c.id = b;
      this.loaders[b] = c;
      this.fire("instanceCreated", c);
      return c;
    },
    isFinished: function () {
      for (var a = 0; a < this.loaders.length; ++a)
        if (!this.loaders[a].isFinished()) return !1;
      return !0;
    },
  };
  k.prototype = {
    loadAndUpload: function (a, d) {
      var b = this;
      this.once(
        "loaded",
        function (c) {
          c.cancel();
          b.once(
            "update",
            function (a) {
              a.cancel();
            },
            null,
            null,
            0,
          );
          b.upload(a, d);
        },
        null,
        null,
        0,
      );
      this.load();
    },
    load: function () {
      var a = this,
        d = (this.reader = new FileReader());
      a.changeStatus("loading");
      this.abort = function () {
        a.reader.abort();
      };
      d.onabort = function () {
        a.changeStatus("abort");
      };
      d.onerror = function () {
        a.message = a.lang.filetools.loadError;
        a.changeStatus("error");
      };
      d.onprogress = function (b) {
        a.loaded = b.loaded;
        a.update();
      };
      d.onload = function () {
        a.loaded = a.total;
        a.data = d.result;
        a.changeStatus("loaded");
      };
      d.readAsDataURL(this.file);
    },
    upload: function (a, d) {
      var b = d || {};
      a
        ? ((this.uploadUrl = a),
          (this.xhr = new XMLHttpRequest()),
          this.attachRequestListeners(),
          this.editor.fire("fileUploadRequest", {
            fileLoader: this,
            requestData: b,
          }) && this.changeStatus("uploading"))
        : ((this.message = this.lang.filetools.noUrlError),
          this.changeStatus("error"));
    },
    attachRequestListeners: function () {
      function a() {
        "error" != b.status &&
          ((b.message = b.lang.filetools.networkError),
          b.changeStatus("error"));
      }
      function d() {
        "abort" != b.status && b.changeStatus("abort");
      }
      var b = this,
        c = this.xhr;
      b.abort = function () {
        c.abort();
        d();
      };
      c.onerror = a;
      c.onabort = d;
      c.upload
        ? ((c.upload.onprogress = function (a) {
            a.lengthComputable &&
              (b.uploadTotal || (b.uploadTotal = a.total),
              (b.uploaded = a.loaded),
              b.update());
          }),
          (c.upload.onerror = a),
          (c.upload.onabort = d))
        : ((b.uploadTotal = b.total), b.update());
      c.onload = function () {
        b.update();
        if ("abort" != b.status)
          if (((b.uploaded = b.uploadTotal), 200 > c.status || 299 < c.status))
            (b.message = b.lang.filetools["httpError" + c.status]),
              b.message ||
                (b.message = b.lang.filetools.httpError.replace(
                  "%1",
                  c.status,
                )),
              b.changeStatus("error");
          else {
            for (
              var a = { fileLoader: b },
                d = ["message", "fileName", "url"],
                g = b.editor.fire("fileUploadResponse", a),
                h = 0;
              h < d.length;
              h++
            ) {
              var k = d[h];
              "string" === typeof a[k] && (b[k] = a[k]);
            }
            b.responseData = a;
            delete b.responseData.fileLoader;
            !1 === g ? b.changeStatus("error") : b.changeStatus("uploaded");
          }
      };
    },
    changeStatus: function (a) {
      this.status = a;
      if ("error" == a || "abort" == a || "loaded" == a || "uploaded" == a)
        this.abort = function () {};
      this.fire(a);
      this.update();
    },
    update: function () {
      this.fire("update");
    },
    isFinished: function () {
      return !!this.status.match(/^(?:loaded|uploaded|error|abort)$/);
    },
  };
  CKEDITOR.event.implementOn(h.prototype);
  CKEDITOR.event.implementOn(k.prototype);
  var l = /^data:(\S*?);base64,/;
  CKEDITOR.fileTools || (CKEDITOR.fileTools = {});
  CKEDITOR.tools.extend(CKEDITOR.fileTools, {
    uploadRepository: h,
    fileLoader: k,
    getUploadUrl: function (a, d) {
      var b = CKEDITOR.tools.capitalize;
      return d && a[d + "UploadUrl"]
        ? a[d + "UploadUrl"]
        : a.uploadUrl
          ? a.uploadUrl
          : d && a["filebrowser" + b(d, 1) + "UploadUrl"]
            ? a["filebrowser" + b(d, 1) + "UploadUrl"] +
              "\x26responseType\x3djson"
            : a.filebrowserUploadUrl
              ? a.filebrowserUploadUrl + "\x26responseType\x3djson"
              : null;
    },
    isTypeSupported: function (a, d) {
      return !!a.type.match(d);
    },
  });
})();
