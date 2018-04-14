(function(window, undefined) {
  var dictionary = {
    "fb6a00be-80cb-4546-a3f9-94bb306b968c": "Screen 9",
    "2689787c-ad29-4793-97b5-b171635df029": "Screen 8",
    "e5f2ec2d-b68d-4c9d-89b6-7d179ee11777": "Screen 7",
    "7cb2c9c0-2cd4-4c29-ac1b-7e11dbdee8a1": "Screen 10",
    "c876dfcf-fa45-463e-ab41-5d056d6b274a": "Screen 6",
    "d01de1d2-301f-4289-9173-da5152e6435b": "memorias",
    "898dceb3-6f5e-458b-9a77-5b58d322f812": "Screen 5",
    "2c5ee2f9-ec10-43e7-ada4-d47e037071e3": "Screen 4",
    "44c65a56-110f-418c-ade3-6f8be77d6e37": "Screen 3",
    "1b558c03-8ac9-4840-8de0-2864600b44f1": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);