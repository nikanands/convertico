(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/length.417705ce.svg"},21:function(e,t,a){e.exports=a.p+"static/media/area.871a1bc0.svg"},22:function(e,t,a){e.exports=a.p+"static/media/data-size.638f5d31.svg"},23:function(e,t,a){e.exports=a.p+"static/media/speed.8e8d9fd5.svg"},24:function(e,t,a){e.exports=a.p+"static/media/time.7de199b1.svg"},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),m=a.n(s),i=a(2),c=a(3),r=a(5),u=a(4),o=a(6),p=a(7),v=a(11),h=(a(32),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:e.onUnitChange,className:"dropdown_list"},l.a.createElement("option",{value:"unit"},"Unit"),l.a.createElement("option",{value:"MM"},"MM"),l.a.createElement("option",{value:"CM"},"CM"),l.a.createElement("option",{value:"M"},"M"),l.a.createElement("option",{value:"KM"},"KM"),l.a.createElement("option",{value:"Yard"},"Yd"),l.a.createElement("option",{value:"DM"},"DM"),l.a.createElement("option",{value:"NM"},"NM"),l.a.createElement("option",{value:"\xb5M"},"\xb5M"),l.a.createElement("option",{value:"Ft"},"Ft"),l.a.createElement("option",{value:"In"},"In"),l.a.createElement("option",{value:"Mi"},"Mi"),l.a.createElement("option",{value:"Mil"},"Mil")))}),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={unitType:"",value:"",mm:null,cm:null,dm:null,nm:null,"\xb5m":null,ft:null,in:null,mi:null,mil:null,m:null,km:null,yard:null},a.onInputChange=function(e){var t=+e.target.value;0===t?a.setState({value:null}):a.setState({value:t})},a.onUnitChange=function(e){a.setState({unitType:e.target.value})},a.onConversion=function(){var e=null===a.state.value?0:a.state.value,t=a.state.unitType;"MM"===t?a.setState({mm:e,cm:a.state.value/10,m:a.state.value/1e3,km:a.state.value/1e6,yard:a.state.value/914.4,nm:1e6*a.state.value,dm:a.state.value/100,ft:a.state.value/304.8,in:a.state.value/25.4,"\xb5m":1e3*a.state.value,mi:a.state.value/6.213e-7,mil:39.37*a.state.value}):"CM"===t?a.setState({mm:10*a.state.value,cm:e,m:a.state.value/100,km:a.state.value/1e5,yard:a.state.value/91.44,nm:1e7*a.state.value,dm:a.state.value/10,ft:a.state.value/30.48,in:a.state.value/2.54,"\xb5m":1e4*a.state.value,mi:a.state.value/160934.4,mil:393.701*a.state.value}):"M"===t?a.setState({mm:1e6*a.state.value,cm:1e5*a.state.value,m:e,km:a.state.value/1e3,yard:1.094*a.state.value,nm:1e8*a.state.value,dm:10*a.state.value,ft:3.281*a.state.value,in:39.37*a.state.value,"\xb5m":1e6*a.state.value,mi:a.state.value/1609.344,mil:39370.079*a.state.value}):"KM"===t?a.setState({mm:1e3*a.state.value,cm:100*a.state.value,m:1e3*a.state.value,km:e,yard:1093.613*a.state.value,nm:1e12*a.state.value,dm:1e4*a.state.value,ft:3280.84*a.state.value,in:1093.613*a.state.value,"\xb5m":1e9*a.state.value,mi:a.state.value/1.609,mil:39370078.74*a.state.value}):"Yard"===t?a.setState({mm:914.4*e,cm:91.44*e,m:e/1.094,km:e/1093.613,yard:e,nm:9144e5*a.state.value,dm:9.144*a.state.value,ft:3*a.state.value,in:36*a.state.value,"\xb5m":914400*a.state.value,mi:a.state.value/1760,mil:36e3*a.state.value}):"DM"===t?a.setState({mm:100*e,cm:10*e,m:e/10,km:e/1e4,yard:e/9.144,nm:1e8*e,dm:e,ft:e/3.048,in:3.937*e,"\xb5m":1e5*e,mi:a.state.value/16093.44,mil:3937.008*a.state.value}):"NM"===t?a.setState({mm:e/1e6,cm:e/1e7,m:e/1e9,km:e/1e12,yard:e/9.144e-8,nm:e,dm:e/1e8,ft:e/3.2e-9,in:e/2.54e-7,"\xb5m":e/1e3,mi:e/1.609e-12,mil:e/25400}):"\xb5M"===t?a.setState({mm:e/1e4,cm:e/1e4,m:e/1e6,km:e/1e9,yard:e/914400,nm:1e3*e,dm:e/1e5,ft:e/304800,in:e/25400,"\xb5m":e,mi:e/1.609e-9,mil:e/25.4}):"Ft"===t?a.setState({mm:304.8*e,cm:30.48*e,m:e/3.281,km:e/3280.84,yard:e/3,nm:3048e5*e,dm:3.048*e,ft:e,in:12*e,"\xb5m":304800*e,mi:e/5280,mil:12e3*e}):"In"===t?a.setState({mm:25.4*e,cm:2.54*e,m:e/39.37,km:e/39370.079,yard:e/36,nm:254e5*e,dm:e/3.937,ft:e/12,in:e,"\xb5m":25400*e,mi:e/63360,mil:e/1e3}):"Mi"===t?a.setState({mm:1609e3*e,cm:160934.4*e,m:1609.344*e,km:1.609344*e,yard:1760*e,nm:1609e9*e,dm:16093.44*e,ft:5280*e,in:63360*e,"\xb5m":1609e6*e,mi:e,mil:1760*e}):"Mil"===t&&a.setState({mm:e/39.37,cm:e/393.701,m:e/39370.079,km:e/3937e4,yard:e/36e3,nm:3048e5*e,dm:25400*e,ft:e/12e3,in:e/1e3,"\xb5m":25.4*e,mi:e/6336e4,mil:e})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrap_input"},l.a.createElement("input",{className:"input",type:"number",value:this.state.value,placeholder:"Enter Your Value",onChange:this.onInputChange}),l.a.createElement(h,{onUnitChange:this.onUnitChange})),l.a.createElement("button",{onClick:this.onConversion,className:"btn_convert"},"Convert"),l.a.createElement("div",{className:"display"},l.a.createElement("p",{className:"display_unit"},"Milimeter : ",this.state.mm),l.a.createElement("p",{className:"display_unit"},"Centimeter : ",this.state.cm),l.a.createElement("p",{className:"display_unit"},"Meter : ",this.state.m),l.a.createElement("p",{className:"display_unit"},"Kilometer : ",this.state.km),l.a.createElement("p",{className:"display_unit"},"Yard : ",this.state.yard),l.a.createElement("p",{className:"display_unit"},"Nanometer : ",this.state.nm),l.a.createElement("p",{className:"display_unit"},"Micrometer : ",this.state.\u00b5m),l.a.createElement("p",{className:"display_unit"},"Decimeter : ",this.state.dm),l.a.createElement("p",{className:"display_unit"},"Feet : ",this.state.ft),l.a.createElement("p",{className:"display_unit"},"Inch : ",this.state.in),l.a.createElement("p",{className:"display_unit"},"Mile : ",this.state.mi),l.a.createElement("p",{className:"display_unit"},"Mil : ",this.state.mil)))}}]),t}(n.Component),E=a(20),b=a.n(E),y=a(21),N=a.n(y),k=a(22),_=a.n(k),S=a(23),g=a.n(S),f=a(24),C=a.n(f),M=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"home_title"},"Convertico"),l.a.createElement("p",{className:"home_subtitle"},"The all in one converter."),l.a.createElement("div",{className:"home_units"},l.a.createElement(p.b,{to:"/length",className:"unit_link"},l.a.createElement("img",{src:b.a,alt:"Length",title:"Length",className:"unit_length unit_icon"})),l.a.createElement(p.b,{to:"/area",className:"unit_link"},l.a.createElement("img",{src:N.a,alt:"Area",className:"unit_area unit_icon"})),l.a.createElement(p.b,{to:"/data-size",className:"unit_link"},l.a.createElement("img",{src:_.a,alt:"Data Size",className:"unit_data_size unit_icon"})),l.a.createElement(p.b,{to:"/speed",className:"unit_link"},l.a.createElement("img",{src:g.a,alt:"Speed",className:"unit_speed unit_icon"})),l.a.createElement(p.b,{to:"/time",className:"unit_link"},l.a.createElement("img",{src:C.a,alt:"Time",className:"unit_speed unit_icon"}))))}}]),t}(l.a.Component),j=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:e.onUnitChange,className:"dropdown_list"},l.a.createElement("option",{value:"unit"},"Unit"),l.a.createElement("option",{value:"MS"},"MS"),l.a.createElement("option",{value:"NS"},"NS"),l.a.createElement("option",{value:"\xb5S"},"\xb5S"),l.a.createElement("option",{value:"Sec"},"Sec"),l.a.createElement("option",{value:"Min"},"Min"),l.a.createElement("option",{value:"Hr"},"Hr"),l.a.createElement("option",{value:"Day"},"Day"),l.a.createElement("option",{value:"Week"},"Week")))},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",ms:null,ns:null,"\xb5s":null,sec:null,min:null,hr:null,day:null,week:null},a.onInputChange=function(e){var t=+e.target.value;0===t?a.setState({value:null}):a.setState({value:t})},a.onUnitChange=function(e){a.setState({unitType:e.target.value})},a.onConversion=function(){var e=null===a.state.value?0:a.state.value,t=a.state.unitType;"MS"===t?a.setState({ms:e,ns:1e6*e,"\xb5s":1e3*e,sec:e/1e3,min:e/6e4,hr:e/36e5,day:e/864e5,week:e/6048e5}):"NS"===t?a.setState({ms:e/1e6,ns:e,"\xb5s":e/1e3,sec:e/1e9,min:e/6e10,hr:e/36e11,day:e/864e12,week:e/6048e11}):"\xb5S"===t?a.setState({ms:e/1e3,ns:1e3*e,"\xb5s":e,sec:e/1e6,min:e/6e7,hr:e/36e8,day:e/864e8,week:e/6048e8}):"Sec"===t?a.setState({ms:1e3*e,ns:1e8*e,"\xb5s":1e6*e,sec:e,min:e/60,hr:e/3600,day:e/86400,week:e/604800}):"Min"===t?a.setState({ms:6e4*e,ns:6e10*e,"\xb5s":6e7*e,sec:60*e,min:e,hr:e/60,day:e/1440,week:e/10080}):"Hr"===t?a.setState({ms:36e5*e,ns:36e11*e,"\xb5s":36e8*e,sec:3600*e,min:60*e,hr:e,day:e/24,week:e/168}):"Day"===t?a.setState({ms:864e5*e,ns:864e12*e,"\xb5s":864e8*e,sec:86400*e,min:1440*e,hr:24*e,day:e,week:e/7}):"Week"===t&&a.setState({ms:6048e5*e,ns:6048e11*e,"\xb5s":6048e8*e,sec:604800*e,min:10080*e,hr:168*e,day:7*e,week:e})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrap_input"},l.a.createElement("input",{className:"input",type:"number",value:this.state.value,placeholder:"Enter Your Value",onChange:this.onInputChange}),l.a.createElement(j,{onUnitChange:this.onUnitChange})),l.a.createElement("button",{onClick:this.onConversion,className:"btn_convert"},"Convert"),l.a.createElement("div",{className:"display"},l.a.createElement("p",{className:"display_unit"},"Milisecond : ",this.state.ms),l.a.createElement("p",{className:"display_unit"},"Nanosecond : ",this.state.ns),l.a.createElement("p",{className:"display_unit"},"Microsecond : ",this.state.\u00b5s),l.a.createElement("p",{className:"display_unit"},"Second : ",this.state.sec),l.a.createElement("p",{className:"display_unit"},"Minute : ",this.state.min),l.a.createElement("p",{className:"display_unit"},"Hour : ",this.state.hr),l.a.createElement("p",{className:"display_unit"},"Day : ",this.state.day),l.a.createElement("p",{className:"display_unit"},"Week : ",this.state.week)))}}]),t}(l.a.Component),w=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:e.onUnitChange,className:"dropdown_list"},l.a.createElement("option",{value:"unit"},"Unit"),l.a.createElement("option",{value:"Byte"},"By"),l.a.createElement("option",{value:"Bit"},"Bit"),l.a.createElement("option",{value:"Kb"},"Kb"),l.a.createElement("option",{value:"Mb"},"Mb"),l.a.createElement("option",{value:"Gb"},"Gb"),l.a.createElement("option",{value:"Tb"},"Tb"),l.a.createElement("option",{value:"Pb"},"Pb"),l.a.createElement("option",{value:"Nib"},"Nib")))},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",byte:null,bit:null,kb:null,mb:null,gb:null,tb:null,pb:null,nibbles:null},a.onInputChange=function(e){var t=+e.target.value;0===t?a.setState({value:null}):a.setState({value:t})},a.onUnitChange=function(e){a.setState({unitType:e.target.value})},a.onConversion=function(){var e=null===a.state.value?0:a.state.value,t=a.state.unitType;"Byte"===t?a.setState({byte:e,bit:8*e,kb:e/1024,mb:e/1048576,gb:e/1073741824,tb:e/1099511531398.98,pb:e/1125899755262058.9,nibbles:2*e}):"Bit"===t?a.setState({byte:e/8,bit:e,kb:e/8192,mb:e/8388608,gb:e/8589934592,tb:e/8796092251191.81,pb:e/9007198042096471,nibbles:e/4}):"Kb"===t?a.setState({byte:1e3*e,bit:8e3*e,kb:e,mb:e/1024,gb:e/1048576,tb:e/1073741729.88,pb:e/1099511479748.1,nibbles:2e3*e}):"Mb"===t?a.setState({byte:1048576*e,bit:8388608*e,kb:1024*e,mb:e,gb:e/1024,tb:e/1048575.91,pb:e/1073741679.44,nibbles:2097152*e}):"Gb"===t?a.setState({byte:1073741824*e,bit:8589934592*e,kb:1048576*e,mb:1024*e,gb:e,tb:e/1024,pb:e/1048575.86,nibbles:2147483648*e}):"Tb"===t?a.setState({byte:1099511531398.98*e,bit:8796092251191.81*e,kb:1073741729.88*e,mb:1048575.91*e,gb:1024*e,tb:e,pb:e/1048575.86,nibbles:2199023062797.95*e}):"Pb"===t?a.setState({byte:1125899755262058.9*e,bit:9007198042096471*e,kb:1099511479748.1*e,mb:1073741679.44*e,gb:1048575.86*e,tb:1024*e,pb:e,nibbles:2251799510524117.8*e}):"Nib"===t&&a.setState({byte:e/2,bit:4*e,kb:e/2048,mb:e/2097152,gb:e/2147483648,tb:e/2199023062797.95,pb:e/2251799510524117.8,nibbles:e})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrap_input"},l.a.createElement("input",{className:"input",type:"number",value:this.state.value,placeholder:"Enter Your Value",onChange:this.onInputChange}),l.a.createElement(w,{onUnitChange:this.onUnitChange})),l.a.createElement("button",{onClick:this.onConversion,className:"btn_convert"},"Convert"),l.a.createElement("div",{className:"display"},l.a.createElement("p",{className:"display_unit"},"Bit : ",this.state.bit),l.a.createElement("p",{className:"display_unit"},"Nibbles : ",this.state.nibbles),l.a.createElement("p",{className:"display_unit"},"Byte : ",this.state.byte),l.a.createElement("p",{className:"display_unit"},"Kilobyte : ",this.state.kb),l.a.createElement("p",{className:"display_unit"},"Megabyte : ",this.state.mb),l.a.createElement("p",{className:"display_unit"},"Gigabyte : ",this.state.gb),l.a.createElement("p",{className:"display_unit"},"Terabyte : ",this.state.tb),l.a.createElement("p",{className:"display_unit"},"Petabyte : ",this.state.pb)))}}]),t}(l.a.Component),F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:e.onUnitChange,className:"dropdown_list"},l.a.createElement("option",{value:"unit"},"Unit"),l.a.createElement("option",{value:"mm/s"},"mm/s"),l.a.createElement("option",{value:"\xb5m/s"},"\xb5m/s"),l.a.createElement("option",{value:"m/s"},"m/s"),l.a.createElement("option",{value:"m/h"},"m/h"),l.a.createElement("option",{value:"km/s"},"km/s"),l.a.createElement("option",{value:"km/h"},"km/h"),l.a.createElement("option",{value:"FPS"},"FPS"),l.a.createElement("option",{value:"Knots"},"Knot")))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",mmps:null,"\xb5mps":null,mps:null,mph:null,kmps:null,kmph:null,FPS:null,knots:null},a.onInputChange=function(e){var t=+e.target.value;0===t?a.setState({value:null}):a.setState({value:t})},a.onUnitChange=function(e){a.setState({unitType:e.target.value})},a.onConversion=function(){var e=null===a.state.value?0:a.state.value,t=a.state.unitType;"mmps"===t?a.setState({mmps:e,"\xb5mps":1e3*e,mps:e/1e3,mph:e/447.04,kmps:e/1e6,kmph:e/277.778,FPS:e/304.8,knots:e/514.444}):"\xb5mps"===t?a.setState({mmps:e/1e3,"\xb5mps":e,mps:e/1e6,mph:e/447040,kmps:e/1e9,kmph:e/277777.778,FPS:e/304800,knots:e/514444.444}):"mps"===t?a.setState({mmps:1e3*e,"\xb5mps":1e6*e,mps:e,mph:2.237*e,kmps:e/1e3,kmph:3.6*e,FPS:3.281*e,knots:e/1.944}):"mph"===t?a.setState({mmps:447.04*e,"\xb5mps":447040*e,mps:e/2.237,mph:e,kmps:e/2236.936,kmph:1.609*e,FPS:1.467*e,knots:e/1.151}):"kmps"===t?a.setState({mmps:1e6*e,"\xb5mps":1e9*e,mps:1e3*e,mph:2236.936*e,kmps:e,kmph:3600*e,FPS:3280.84*e,knots:e/1943.844}):"kmph"===t?a.setState({mmps:277.778*e,"\xb5mps":277777.778*e,mps:e/3.6,mph:e/1.609,kmps:3600*e,kmph:e,FPS:e/1.097,knots:e/1.852}):"FPS"===t?a.setState({mmps:304.8*e,"\xb5mps":304800*e,mps:e/3.281,mph:e/1.467,kmps:e/3280.84,kmph:1.097*e,FPS:e,knots:e/1.688}):"Knots"===t&&a.setState({mmps:514.444*e,"\xb5mps":514444.444*e,mps:e/1.944,mph:1.151*e,kmps:e/1943.844,kmph:1.852*e,FPS:1.688*e,knots:e})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrap_input"},l.a.createElement("input",{className:"input",type:"number",value:this.state.value,placeholder:"Enter Your Value",onChange:this.onInputChange}),l.a.createElement(F,{onUnitChange:this.onUnitChange})),l.a.createElement("button",{onClick:this.onConversion,className:"btn_convert"},"Convert"),l.a.createElement("div",{className:"display"},l.a.createElement("p",{className:"display_unit"},"Milimeter/Sec : ",this.state.mmps),l.a.createElement("p",{className:"display_unit"},"Micrometer/Sec : ",this.state.\u00b5mps),l.a.createElement("p",{className:"display_unit"},"Meter/Sec : ",this.state.mps),l.a.createElement("p",{className:"display_unit"},"Kilometer/Sec : ",this.state.kmps),l.a.createElement("p",{className:"display_unit"},"Miles/Hr : ",this.state.mph),l.a.createElement("p",{className:"display_unit"},"Kilometer/Hr : ",this.state.kmph),l.a.createElement("p",{className:"display_unit"},"Feet/Sec : ",this.state.FPS),l.a.createElement("p",{className:"display_unit"},"Knots : ",this.state.knots)))}}]),t}(l.a.Component),P=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:e.onUnitChange,className:"dropdown_list"},l.a.createElement("option",{value:"unit"},"Unit"),l.a.createElement("option",{value:"dm2"},"dm\xb2"),l.a.createElement("option",{value:"cm2"},"cm\xb2"),l.a.createElement("option",{value:"m2"},"m\xb2"),l.a.createElement("option",{value:"km2"},"km\xb2"),l.a.createElement("option",{value:"ft2"},"Ft\xb2"),l.a.createElement("option",{value:"in2"},"in\xb2"),l.a.createElement("option",{value:"yd2"},"yd\xb2"),l.a.createElement("option",{value:"mi2"},"mi\xb2"),l.a.createElement("option",{value:"ares"},"A"),l.a.createElement("option",{value:"acres"},"Ac"),l.a.createElement("option",{value:"hectares"},"Hec")))},D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",cm2:null,dm2:null,m2:null,km2:null,ft2:null,in2:null,yard2:null,mi2:null,ares:null,acres:null,hectares:null},a.onInputChange=function(e){var t=+e.target.value;0===t?a.setState({value:null}):a.setState({value:t})},a.onUnitChange=function(e){a.setState({unitType:e.target.value})},a.onConversion=function(){var e=null===a.state.value?0:a.state.value,t=a.state.unitType;"dm2"===t?a.setState({dm2:e,cm2:100*e,m2:e/100,km2:e/1e8,ft2:e/9.29,in2:15.5*e,yard2:e/83.613,mi2:e/259e6,ares:e/1e4,acres:e/404685.642,hectares:e/1e6}):"cm2"===t?a.setState({dm2:e/100,cm2:e,m2:e/1e4,km2:e/1e10,ft2:e/929.03,in2:e/6.452,yard2:e/8361.274,mi2:e/259e8,ares:e/1e6,acres:e/4047e4,hectares:e/1e8}):"m2"===t?a.setState({dm2:100*e,cm2:1e4*e,m2:e,km2:e/1e6,ft2:10.764*e,in2:1550.003*e,yard2:1.196*e,mi2:e/259e4,ares:e/100,acres:e/4046.856,hectares:e/1e4}):"km2"===t?a.setState({dm2:1e8*e,cm2:1e10*e,m2:1e6*e,km2:e,ft2:1076e4*e,in2:155e7*e,yard2:1196e3*e,mi2:e/2.59,ares:1e4*e,acres:247.105*e,hectares:100*e}):"ft2"===t?a.setState({dm2:9.29*e,cm2:929.03*e,m2:e/10.764,km2:e/1076e4,ft2:e,in2:144*e,yard2:e/9,mi2:e/2788e4,ares:e/1076.391,acres:e/43560,hectares:e/107639.104}):"in2"===t?a.setState({dm2:e/15.5,cm2:6.452*e,m2:e/1550.003,km2:e/155e7,ft2:e/144,in2:e,yard2:e/1296,mi2:e/4014e6,ares:e/155000.31,acres:e/6273e3,hectares:e/155e5}):"yard2"===t?a.setState({dm2:e/83.6127,cm2:e/8361.27,m2:e/1.196,km2:e/1196e3,ft2:9*e,in2:1296*e,yard2:e,mi2:e/3098e3,ares:e/119.599,acres:e/4840,hectares:e/11959.9}):"mi2"===t?a.setState({dm2:259e6*e,cm2:259e10*e,m2:259e4*e,km2:2.59*e,ft2:2788e4*e,in2:4014e6*e,yard2:3098e3*e,mi2:e,ares:25899.881*e,acres:640*e,hectares:258.999*e}):"ares"===t?a.setState({dm2:1e3*e,cm2:1e6*e,m2:100*e,km2:1e4*e,ft2:1076.391*e,in2:155000.31*e,yard2:119.599*e,mi2:25899.881*e,ares:e,acres:e/40.469,hectares:e/100}):"acres"===t?a.setState({dm2:404685.642*e,cm2:4047e4*e,m2:4046.856*e,km2:e/247.105,ft2:43560*e,in2:6273e3*e,yard2:4840*e,mi2:e/640,ares:40.469*e,acres:e,hectares:e/2.471}):"acres"===t&&a.setState({dm2:1e6*e,cm2:1e8*e,m2:1e4*e,km2:e/100,ft2:107639.104*e,in2:155e5*e,yard2:11959.9*e,mi2:e/258.999,ares:100*e,acres:2.47105*e,hectares:e})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrap_input"},l.a.createElement("input",{className:"input",type:"number",value:this.state.value,placeholder:"Enter Your Value",onChange:this.onInputChange}),l.a.createElement(P,{onUnitChange:this.onUnitChange})),l.a.createElement("button",{onClick:this.onConversion,className:"btn_convert"},"Convert"),l.a.createElement("div",{className:"display"},l.a.createElement("p",{className:"display_unit"},"dm\xb2 : ",this.state.dm2),l.a.createElement("p",{className:"display_unit"},"cm\xb2 : ",this.state.cm2),l.a.createElement("p",{className:"display_unit"},"m\xb2 : ",this.state.m2),l.a.createElement("p",{className:"display_unit"},"km\xb2 : ",this.state.km2),l.a.createElement("p",{className:"display_unit"},"ft\xb2 : ",this.state.ft2),l.a.createElement("p",{className:"display_unit"},"in\xb2 : ",this.state.in2),l.a.createElement("p",{className:"display_unit"},"yard\xb2 : ",this.state.yard2),l.a.createElement("p",{className:"display_unit"},"mi\xb2 : ",this.state.mi2),l.a.createElement("p",{className:"display_unit"},"Ares : ",this.state.ares),l.a.createElement("p",{className:"display_unit"},"Acres : ",this.state.acres),l.a.createElement("p",{className:"display_unit"},"Hectares : ",this.state.hectares)))}}]),t}(l.a.Component),I=function(){return l.a.createElement("div",{className:"hidden_menu"},l.a.createElement(K,null),l.a.createElement("ul",null,l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/",className:"menu_list_item"},"Home")),l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/length",className:"menu_list_item"},"Length")),l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/area",className:"menu_list_item"},"Area")),l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/data-size",className:"menu_list_item"},"Data Storage")),l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/speed",className:"menu_list_item"},"Speed")),l.a.createElement("li",{className:"list_items"},l.a.createElement(p.b,{to:"/time",className:"menu_list_item"},"Time"))))},K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={menuDisplay:!1},a.onClickMenu=function(){!1===a.state.menuDisplay?a.setState({menuDisplay:!0}):a.setState({menuDisplay:!1})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"menu",onClick:this.onClickMenu},l.a.createElement("span",{className:"menu_line_1 menu_line"}),l.a.createElement("span",{className:"menu_line_2 menu_line"}),l.a.createElement("span",{className:"menu_line_3 menu_line"}),!0===this.state.menuDisplay?l.a.createElement(I,null):null))}}]),t}(l.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(K,null),l.a.createElement(v.a,{exact:!0,path:"/",component:M}),l.a.createElement(v.a,{path:"/length",component:d}),l.a.createElement(v.a,{path:"/time",component:O}),l.a.createElement(v.a,{path:"/data-size",component:U}),l.a.createElement(v.a,{path:"/speed",component:T}),l.a.createElement(v.a,{path:"/area",component:D})))}}]),t}(n.Component);m.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b71b0e46.chunk.js.map