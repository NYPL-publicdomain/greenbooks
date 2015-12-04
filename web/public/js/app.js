// GB app
var GB = (function() {
  function GB(options) {
    var defaults = {};
    options = $.extend({}, defaults, options);
    this.init(options);
  }

  GB.prototype.init = function(options){
    var _this = this;

    this.opt = options;
    this.data_loaded = $.Deferred();
    this.map_loaded = $.Deferred();

    $.when(this.data_loaded).done(function() {
      _this.loadMap();
    });

    this.loadData();
  };

  GB.prototype.loadData = function(){
    var _this = this;

    this.data = [];

    $.getJSON("data/greenbook_1956.json", function(data) {
      _this.data = data;
      console.log('All data loaded');
      _this.data_loaded.resolve();
    });

  };

  GB.prototype.loadMap = function(){
    var _this = this;

    this.map = L.map('map');

    this.map.on('load', function(e) {
      _this.map_loaded.resolve();
    });

    L.tileLayer(this.opt.mapbox_url, {
      id: this.opt.mapbox_map_id,
      accessToken: this.opt.mapbox_access_token
    }).addTo(this.map);

    this.map.setView([51.5, -0.09], 13);
  };

  return GB;

})();

// Load app on ready
$(function() {
  var app = new GB(config);
});
