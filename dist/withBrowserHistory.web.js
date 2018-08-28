Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='es6/withBrowserHistory.web.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=withBrowserHistory;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNavigation=require('react-navigation');var _createBrowserHistory=require('history/createBrowserHistory');var _createBrowserHistory2=_interopRequireDefault(_createBrowserHistory);var _NavigationService=require('./NavigationService');var _NavigationService2=_interopRequireDefault(_NavigationService);var _queryString=require('./utils/queryString');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var NAVIGATE=_reactNavigation.NavigationActions.NAVIGATE,BACK=_reactNavigation.NavigationActions.BACK,SET_PARAMS=_reactNavigation.NavigationActions.SET_PARAMS;var PUSH=_reactNavigation.StackActions.PUSH,POP=_reactNavigation.StackActions.POP;function withBrowserHistory(Navigator){var _class,_temp,_initialiseProps;var Wrapper=(_temp=_class=function(_Component){_inherits(Wrapper,_Component);function Wrapper(props){_classCallCheck(this,Wrapper);var _this=_possibleConstructorReturn(this,(Wrapper.__proto__||Object.getPrototypeOf(Wrapper)).call(this,props));_initialiseProps.call(_this);_this.history=(0,_createBrowserHistory2.default)();_this.pathAndParams=(0,_queryString.getPathAndParamsFromLocation)(_this.history.location,_this.props.basePath,_this.props.uriPrefix);var action=Navigator.router.getActionForPathAndParams(_this.pathAndParams.path,_this.pathAndParams.params)||_reactNavigation.NavigationActions.init();_NavigationService2.default.dispatch(action);return _this;}_createClass(Wrapper,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;this.unlistener=this.history.listen(function(location){var pathAndParams=(0,_queryString.getPathAndParamsFromLocation)(location,_this2.props.basePath,_this2.props.uriPrefix);if((0,_queryString.matchPathAndParams)(_this2.pathAndParams,pathAndParams))return;_this2.pathAndParams=pathAndParams;var action=Navigator.router.getActionForPathAndParams(pathAndParams.path,pathAndParams.params);_NavigationService2.default.dispatch(_extends({},action,{ignoreHistory:true}));});}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.unlistener();}},{key:'render',value:function render(){var _props=this.props,forwardedRef=_props.forwardedRef,onNavigationStateChange=_props.onNavigationStateChange,restProps=_objectWithoutProperties(_props,['forwardedRef','onNavigationStateChange']);return _react2.default.createElement(Navigator,_extends({ref:function ref(_ref){forwardedRef&&forwardedRef(_ref);_NavigationService2.default.setTopLevelNavigator(_ref);},onNavigationStateChange:this.handleNavigationStateChange},restProps,{__source:{fileName:_jsxFileName,lineNumber:116}}));}}]);return Wrapper;}(_react.Component),_class.propTypes={basePath:_propTypes2.default.string,uriPrefix:_propTypes2.default.string},_class.defaultProps={basePath:'/',uriPrefix:''},_initialiseProps=function _initialiseProps(){var _this3=this;this.handleNavigationStateChange=function(){var _props2;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var basePath=_this3.props.basePath;var nextState=args[1],action=args[2];var pathAndParams=Navigator.router.getPathAndParamsForState(nextState);if((0,_queryString.matchPathAndParams)(_this3.pathAndParams,pathAndParams))return;_this3.pathAndParams=pathAndParams;if(action.ignoreHistory)return;switch(action.type){case NAVIGATE:case PUSH:{_this3.history.push({pathname:''+basePath+pathAndParams.path,search:(0,_queryString.paramsToString)(pathAndParams.params)});break;}case SET_PARAMS:{_this3.history.replace({pathname:''+basePath+pathAndParams.path,search:(0,_queryString.paramsToString)(pathAndParams.params)});break;}case BACK:{_this3.history.goBack();break;}case POP:{_this3.history.go('-'+action.n);break;}default:console.warn(action.type+' is not supported');}_this3.props.onNavigationStateChange&&(_props2=_this3.props).onNavigationStateChange.apply(_props2,args);};},_temp);function forwardRef(props,ref){return _react2.default.createElement(Wrapper,_extends({},props,{forwardedRef:ref,__source:{fileName:_jsxFileName,lineNumber:129}}));}return _react2.default.forwardRef(forwardRef);}