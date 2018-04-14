jQuery("#simulation")
  .on("click", ".s-d01de1d2-301f-4289-9173-da5152e6435b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/44c65a56-110f-418c-ade3-6f8be77d6e37"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/898dceb3-6f5e-458b-9a77-5b58d322f812"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c876dfcf-fa45-463e-ab41-5d056d6b274a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e5f2ec2d-b68d-4c9d-89b6-7d179ee11777"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2689787c-ad29-4793-97b5-b171635df029"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fb6a00be-80cb-4546-a3f9-94bb306b968c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7cb2c9c0-2cd4-4c29-ac1b-7e11dbdee8a1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d01de1d2-301f-4289-9173-da5152e6435b .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Button_11" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "366"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "85"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d01de1d2-301f-4289-9173-da5152e6435b .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_3" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Rectangle_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-d01de1d2-301f-4289-9173-da5152e6435b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_7" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "379"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "307"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d01de1d2-301f-4289-9173-da5152e6435b .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_7")) {
      jEvent.undoCases(jFirer);
    }
  });