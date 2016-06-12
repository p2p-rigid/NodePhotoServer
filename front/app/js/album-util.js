/*(function(export) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  export.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this); */