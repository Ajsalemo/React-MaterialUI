(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,a){e.exports=a.p+"static/media/background1.230c8d90.jpg"},5456:function(e,t,a){e.exports=a(5843)},5843:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),i=a(21),l=a(220),s=a(22),d=a(133),m=a(221),u=a.n(m),f=a(222),p=a(71),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_FIVE_DAY_FORECAST":return{fiveDayDataInformation:t.payload};default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{location:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"LOCATION_REQUEST":return{location:!0};default:return e}},b=Object(s.combineReducers)({locationPrompt:h,fiveDayData:g,form:p.reducer}),y={key:"root",storage:u.a},v=Object(d.a)(y,b),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.compose,E=Object(s.createStore)(v,C(Object(s.applyMiddleware)(f.a))),O=Object(d.b)(E),j=a(5887),D=a(5890),w=a(5891),x=a(54),S=a(55),F=a(58),T=a(56),k=a(59),L=a(11),P=a(223),I=a(52),N=a(28),_=a.n(N),M=a(100),A=a.n(M),B=a(53),R=a.n(B),H=a(57),U=a(224),W=a.n(U),G=a(225),z=a.n(G),V=function(e,t,a){var n="";return e?n="http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&weather?q=").concat(e,"&units=imperial&appid=").concat("3eac0cbfdadb8c4ad27bba3433e59dc3"):e||(n="http://api.openweathermap.org/data/2.5/forecast?lat=".concat(t,"&lon=").concat(a,"&weather?lat=").concat(t,"&lon=").concat(a,"&units=imperial&appid=").concat("3eac0cbfdadb8c4ad27bba3433e59dc3")),function(e){return z.a.get(n).then(function(t){e({type:"SUBMIT_FIVE_DAY_FORECAST",payload:t})})}},Y=a(226),q=a.n(Y),J=a(228),Q=a.n(J),X=a(227),$=a.n(X),K=a(96),Z=a.n(K),ee=a(95),te=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(T.a)(t).call(this,e))).searchForLocation=function(){var e=a.props.searchbar;a.setState({isLoading:!0,stateError:""}),a.props.fiveDayDataForecast(e.values.searchbar).then(function(){a.setState({isLoading:!1})}).catch(function(e){a.setState({stateError:e.response.data.message,isLoading:!1})})},a.renderTextField=function(e){var t=e.containerClass,a=e.classes,n=e.errorClass,r=e.name,c=e.input,i=e.label,l=e.placeholder,s=e.loading,d=e.stateError,m=e.meta,u=m.touched,f=m.error;return o.a.createElement("div",{className:t},o.a.createElement(q.a,Object.assign({variant:"filled",name:r,placeholder:l,className:a,label:i,disabled:s,InputProps:{endAdornment:o.a.createElement($.a,{variant:"filled",position:"end"},o.a.createElement(Q.a,{"aria-label":"Submit form",style:{color:"#fff"},type:"submit"},s?o.a.createElement(Z.a,{style:{color:"#fff"}}):o.a.createElement(ee.b,null)))}},c)),o.a.createElement(_.a,{container:!0,direction:"row",style:{justifyContent:"center"}},f?o.a.createElement(R.a,{className:n},u&&f&&o.a.createElement("span",null,f)):null,d?o.a.createElement(R.a,{className:n},u&&d&&o.a.createElement("span",null,d)):null))},a.state={isLoading:!1,stateError:""},a.renderTextField=a.renderTextField.bind(Object(L.a)(Object(L.a)(a))),a.searchForLocation=a.searchForLocation.bind(Object(L.a)(Object(L.a)(a))),a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.handleSubmit,n=this.state,r=n.isLoading,c=n.stateError;return o.a.createElement("form",{className:t.form,onSubmit:a(this.searchForLocation)},o.a.createElement(p.Field,{name:"searchbar",component:this.renderTextField,placeholder:"Ex. - Charlotte, US or Paris, FR",label:"Enter a location",classes:t.textField,containerClass:t.textContainer,loading:r,errorClass:t.errorPaper,stateError:c}))}}]),t}(n.Component);te=Object(p.reduxForm)({form:"searchbar",validate:function(e){var t={};return e.searchbar||(t.searchbar="You must enter a location"),t}})(te),te=Object(i.connect)(function(e){return{searchbar:e.form.searchbar}},{fiveDayDataForecast:V})(te);var ae=Object(H.withStyles)(function(e){return{form:{display:"flex",justifyContent:"center"},textContainer:Object(I.a)({height:50,flexBasis:"75%",backgroundColor:"rgba(167, 217, 227, 0.53)"},e.breakpoints.up("sm"),{flexBasis:"50%"}),textField:{width:"100%",borderBottom:"1px solid #fff"},loadingPropColor:{color:"#fff"},errorPaper:{backgroundColor:"#ff000070",color:"#fff",padding:"0em 0.5em"}}})(te),ne=a(230),oe=a(229),re=a.n(oe),ce=a(99),ie=a.n(ce),le=a(93),se=a.n(le),de=a(92),me=a.n(de),ue=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(F.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.ScrollTop=function(){window.scrollTo({behavior:"smooth",top:0})},a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.locationEnabled,n=this.state.value;return o.a.createElement(re.a,{value:n,onChange:this.handleChange,showLabels:!1,className:t.root},o.a.createElement(ie.a,{label:"Scroll to top",icon:o.a.createElement(ee.a,null),classes:{iconOnly:t.iconColorOveride},onClick:this.ScrollTop.bind(this)}),o.a.createElement(ie.a,{label:a?"Location is on":"Location is off",icon:o.a.createElement(me.a,null),classes:{iconOnly:a?t.locationOn:t.locationOff}}),o.a.createElement(ie.a,{label:"Code",icon:o.a.createElement(se.a,null),classes:{iconOnly:t.iconColorOveride},href:"https://github.com/Ajsalemo/React-MaterialUI",target:"_blank"}))}}]),t}(n.Component);ue=Object(i.connect)(function(e){return{locationEnabled:e.locationPrompt.location}})(ue);var fe=Object(ne.a)({root:{backgroundColor:"#ffffff6b"},iconColorOveride:{color:"#fff"},locationOff:{color:"red"},locationOn:{color:"#2347bd"},selectedIcon:{color:"#43bedf"}})(ue),pe=Object(n.lazy)(function(){return Promise.all([a.e(5),a.e(1)]).then(a.bind(null,5892))}),ge=Object(n.lazy)(function(){return Promise.all([a.e(4),a.e(2)]).then(a.bind(null,5893))}),he=function(e){return parseInt(Math.round("".concat(e)))},be=function(e){return parseInt(Math.round(5/9*(e-32)))},ye=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(T.a)(t).call(this,e))).returnLocationComponent=function(){a.props.fiveDayDataForecast("London,uk").then(function(){a.setState({isLoading:!1})}).catch(function(e){return a.setState({isLoading:!1}),e}),navigator.geolocation&&a.props.getLocation()},a.componentDidMount=function(){a.returnLocationComponent()},a.toggleDefaultForecast=function(){a.setState({defaultToggle:!0,fiveDayToggle:!1})},a.toggleFiveDay=function(){a.setState({fiveDayToggle:!0,defaultToggle:!1})},a.loadingComponent=function(){var e=a.props.classes;return o.a.createElement("div",{className:e.mapSpecProp},o.a.createElement(Z.a,null))},a.mainWeatherComponent=function(){var e=a.props,t=e.classes,r=e.fiveDayData,c=a.state.isLoading;if(r)return o.a.createElement(n.Suspense,{fallback:a.loadingComponent()},o.a.createElement(pe,{loading:!c,loadingProp:a.loadingComponent(),mainPaperCard:t.mainPaperCard,description:r.data.list[0].weather[0].main,name:r.data.city.name,country:r.data.city.country,celsius:be(r.data.list[0].main.temp),fahrenheit:he(r.data.list[0].main.temp),wind:he(r.data.list[0].wind.speed),humidity:r.data.list[0].main.humidity,imageIcon:"http://openweathermap.org/img/w/".concat(r.data.list[0].weather[0].icon,".png")}));a.loadingComponent()},a.forecastHeader=function(){var e=a.props.classes,t=a.state,n=t.defaultToggle,r=t.fiveDayToggle;return o.a.createElement(A.a,{variant:"h6",gutterBottom:!0,className:"".concat(e.gridCenter," ").concat(e.forecastHeader)},o.a.createElement("span",{onClick:a.toggleDefaultForecast,className:"".concat(n?e.toggleSelected:null,"  ").concat(e.forecastText)},"Hourly"),o.a.createElement("span",{style:{margin:"0em 0.3em"}},"|"),o.a.createElement("span",{onClick:a.toggleFiveDay,className:"".concat(r?e.toggleSelected:null,"  ").concat(e.forecastText)},"Five Day"))},a.hourlyForecast=function(){var e=a.props,t=e.classes,r=e.fiveDayData,c=a.state,i=c.defaultToggle,l=c.isLoading;if(r)return Object.values(r.data.list).map(function(e,r){return!!(r<=4)&&o.a.createElement(n.Suspense,{fallback:a.loadingComponent(),key:r},o.a.createElement(pe,{loading:!l,loadingProp:a.loadingComponent(),mainPaperCard:t.mainPaperCard,defaultToggle:i,unixDt:e.dt,forecastCard:t.forecastCard,imageIcon:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),title:e.weather[0].main,description:e.weather[0].main,fahrenheit:he(e.main.temp),celsius:be(e.main.temp)}))});a.loadingComponent()},a.fiveDayInformation=function(){var e=a.props,t=e.classes,r=e.fiveDayData,c=a.state,i=c.defaultToggle,l=c.isLoading;if(r)return Object.values(r.data.list).map(function(e,r){var c=[];return c.push(e),c.map(function(e,r){return e.dt_txt.includes("12:00:00")?o.a.createElement(n.Suspense,{fallback:a.loadingComponent(),key:r},o.a.createElement(pe,{loading:!l,loadingProp:a.loadingComponent(),mainPaperCard:t.mainPaperCard,defaultToggle:i,unixDt:e.dt,forecastCard:t.forecastCard,imageIcon:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),title:e.weather[0].main,description:e.weather[0].main,fahrenheit:he(e.main.temp),celsius:be(e.main.temp)})):null})});a.loadingComponent()},a.leafletMapDisplay=function(){var e=a.props.fiveDayData,t=a.state.isLoading;if(e)return o.a.createElement(R.a,{style:{margin:"4em 2em 2em 2em"}},o.a.createElement(n.Suspense,{fallback:a.loadingComponent()},o.a.createElement(ge,{loading:!t,loadingProp:a.loadingComponent(),position:[e.data.city.coord.lat,e.data.city.coord.lon],zoom:6,city:e.data.city.name,country:e.data.city.country,lat:e.data.city.coord.lat,lon:e.data.city.coord.lon,main:e.data.list[0].weather[0].main,temp:he(e.data.list[0].main.temp),celsius:be(e.data.list[0].main.temp)})));a.loadingComponent()},a.state={defaultToggle:!0,fiveDayToggle:!1,isLoading:!1},a.toggleDefaultForecast=a.toggleDefaultForecast.bind(Object(L.a)(Object(L.a)(a))),a.toggleFiveDay=a.toggleFiveDay.bind(Object(L.a)(Object(L.a)(a))),a.returnLocationComponent=a.returnLocationComponent.bind(Object(L.a)(Object(L.a)(a))),a.loadingComponent=a.loadingComponent.bind(Object(L.a)(Object(L.a)(a))),a.mainWeatherComponent=a.mainWeatherComponent.bind(Object(L.a)(Object(L.a)(a))),a.fiveDayInformation=a.fiveDayInformation.bind(Object(L.a)(Object(L.a)(a))),a.hourlyForecast=a.hourlyForecast.bind(Object(L.a)(Object(L.a)(a))),a.forecastHeader=a.forecastHeader.bind(Object(L.a)(Object(L.a)(a))),a.leafletMapDisplay=a.leafletMapDisplay.bind(Object(L.a)(Object(L.a)(a))),a}return Object(k.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.defaultToggle;return o.a.createElement("div",{className:"".concat(e.container," ").concat(e.hero)},o.a.createElement(_.a,{container:!0},o.a.createElement(_.a,{item:!0,md:12,xs:12,style:{height:"100%"}},o.a.createElement(_.a,{direction:"row",container:!0,style:{padding:"1.7em 5em 1em 5em"},className:"".concat(e.locationGrid," ").concat(e.gridCenter)},o.a.createElement(_.a,{item:!0,md:4,className:e.gridCenter},this.mainWeatherComponent())),o.a.createElement(ae,null))),o.a.createElement(_.a,{container:!0,className:e.forecastContainer},this.forecastHeader(),o.a.createElement(_.a,{item:!0,md:12,className:"".concat(e.forecastGrid," ").concat(e.gridCenter)},t?this.hourlyForecast():this.fiveDayInformation()),o.a.createElement(_.a,{container:!0,direction:"row",style:{justifyContent:"center"}},o.a.createElement(_.a,{item:!0,md:6,xs:12,style:{height:"400px",width:"100%"}},this.leafletMapDisplay()))),o.a.createElement(fe,null))}}]),t}(n.Component);ye=Object(i.connect)(function(e){return{fiveDayData:e.fiveDayData.fiveDayDataInformation,defaultState:e.fiveDayData}},{fiveDayDataForecast:V,getLocation:function(){var e=navigator.geolocation;return function(t){return e.getCurrentPosition(function(e){var a="".concat(e.coords.latitude),n="".concat(e.coords.longitude);t({type:"LOCATION_REQUEST"}),t(V(null,a,n))})}}})(ye);var ve=Object(H.withStyles)(function(e){return{container:{height:"100vh",backgroundColor:"#c1eff4"},hero:{backgroundColor:e.palette.grey[800],backgroundImage:"linear-gradient(75deg, rgba(0, 231, 255, 0), rgba(10, 15, 90, 0.42)), \n                            url(".concat(W.a,")"),height:"auto",backgroundPosition:"right"},locationGrid:Object(I.a)({},e.breakpoints.up("sm"),{justifyContent:"flex-end"}),typography:{color:"#fff",textAlign:"right",paddingRight:"4em",whiteSpace:"nowrap",textShadow:"1px 1px 1px #03a9f4"},subTitle:Object(P.a)({},e.typography.button,{color:"#03a9f4",textShadow:"1px 1px 1px #000"}),forecastContainer:{display:"flex",justifyContent:"space-around",flexDirection:"column",paddingTop:"1em"},forecastGrid:{display:"flex",justifyContent:"space-evenly",paddingBottom:"1em"},forecastCard:{width:"5em",height:"auto"},forecastText:{"&:hover":{cursor:"pointer"}},forecastHeader:{color:"#fff",margin:"1.3em 0em"},gridCenter:{display:"flex",justifyContent:"center"},toggleSelected:{borderBottom:"1px solid #43bedf",color:"#43bedf"},mainPaperCard:{border:"1px solid #fff",backgroundColor:"#ffffff6b",padding:"0.3em"},mapSpecProp:{display:"flex",justifyContent:"center",height:"inherit",flexDrection:"column",alignItems:"center"}}})(ye),Ce=function(){return o.a.createElement(j.a,null,o.a.createElement(D.a,null,o.a.createElement(w.a,{component:ve,path:"/"})))},Ee=a(232),Oe=a.n(Ee);a(5461).config();var je=function(){return o.a.createElement(i.Provider,{store:E},o.a.createElement(l.a,{loading:null,persistor:O},o.a.createElement(o.a.Fragment,null,o.a.createElement(Oe.a,null),o.a.createElement(Ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5456,6,3]]]);
//# sourceMappingURL=main.c733a710.chunk.js.map