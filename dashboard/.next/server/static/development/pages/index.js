module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/usr/src/dashboard/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const headerStyle = {
  padding: 20,
  color: "#FFF"
};
const imgStyle = {
  width: '200px',
  heigth: '200px'
};

const Header = () => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
  style: headerStyle,
  color: "inherit",
  position: "static",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "h6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("img", {
  style: imgStyle,
  src: '/images/logoapp.png',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/usr/src/dashboard/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Dashboard"), __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/usr/src/dashboard/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const tabsStyle = {
  marginLeft: '50%'
};

const Menu = () => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
  square: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
  value: 0,
  indicatorColor: "primary",
  textColor: "primary",
  "aria-label": "disabled tabs example",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
  index: 0,
  styes: tabsStyle,
  label: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/ModalEdit.js":
/*!*********************************!*\
  !*** ./components/ModalEdit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
var _jsxFileName = "/usr/src/dashboard/components/ModalEdit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  root: {
    minWidth: 400
  },
  input: {
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 24
  },
  pos: {
    marginBottom: 12
  },
  media: {
    margin: 'auto',
    height: 200,
    width: 200
  }
}));
const styleInput = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
function ModalEdit({
  open,
  setOpen,
  types,
  item,
  setUpdateTable
}) {
  const classes = useStyles();
  const {
    0: openSnackSuccess,
    1: setOpenSnackSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openSnackError,
    1: setOpenSnackError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openSnackRequired,
    1: setOpenSnackRequired
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: rating,
    1: setRating
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: img,
    1: setImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: errorTitle,
    1: setErrorTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorPrice,
    1: setErrorPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const checkRequiredFields = async product => {
    if (product.title == '') {
      setErrorTitle(true);
      return false;
    }

    if (product.price == '') {
      setErrorPrice(true);
      return false;
    }

    return true;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackRequired = () => {
    setOpenSnackRequired(false);
  };

  const handleCloseSnackSuccess = () => {
    setOpenSnackSuccess(false);
  };

  const handleCloseSnackError = () => {
    setOpenSnackError(false);
  };

  const saveChanges = async () => {
    let product = {
      title,
      type,
      description,
      height,
      width,
      price,
      rating
    };

    if (!(await checkRequiredFields(product))) {
      setOpenSnackRequired(true);
      return;
    }

    const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_10__["update"])(`/products/${item}`, product);

    if (response.success) {
      setOpenSnackSuccess(true);
      setOpen(false);
      setUpdateTable();
    } else {
      setOpenSnackError(true);
      setOpen(false);
    }
  };

  function renderTypes(type, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      key: type,
      value: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, Capitalize(type));
  }

  async function fetchData() {
    const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_10__["fetcher"])(`/products/${item}`);
    setTitle(response.title);
    setImg(response.filename);
    setDescription(response.description);
    setType(response.type);
    setHeight(response.height);
    setWidth(response.width);
    setPrice(response.price);
    setRating(response.rating);
  }

  const handleChange = event => {
    setType(event.target.value);
  };

  const handleTitle = event => {
    if (event.target.value.length > 0 && event.target.value.length < 2) setErrorTitle(false);
    setTitle(event.target.value);
  };

  const handleHeight = event => {
    setHeight(event.target.value);
  };

  const handleWidth = event => {
    setWidth(event.target.value);
  };

  const handlePrice = event => {
    if (event.target.value.length > 0 && event.target.value.length < 2) setErrorPrice(false);
    setPrice(event.target.value);
  };

  const handleDescription = event => {
    setDescription(event.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    "aria-labelledby": "spring-modal-title",
    "aria-describedby": "spring-modal-description",
    className: classes.modal,
    open: open,
    onRendered: () => fetchData(),
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Backdrop"],
    BackdropProps: {
      timeout: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fade"], {
    in: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    title: "Edit product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    className: classes.media,
    src: `/images/${img}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      padding: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    error: errorTitle,
    required: true,
    fullWidth: true,
    autoFocus: true,
    value: title,
    onChange: handleTitle,
    label: "Title",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    fullWidth: true,
    value: description,
    label: "Description",
    variant: "outlined",
    onChange: handleDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Type"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    labelId: "demo-simple-select-label",
    required: true,
    id: "demo-simple-select",
    autoWidth: true,
    value: type,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, types.map(renderTypes)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: "Height",
    value: height,
    onChange: handleHeight,
    variant: "outlined",
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    value: width,
    onChange: handleWidth,
    label: "Width",
    variant: "outlined",
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    required: true,
    error: errorPrice,
    fullWidth: true,
    value: price,
    onChange: handlePrice,
    label: "Price",
    variant: "outlined",
    type: "number",
    InputProps: {
      startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "U$")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: styleInput,
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Rating"), __jsx(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: styleInput,
    name: "simple-controlled",
    size: "large",
    value: rating,
    onChange: (event, newValue) => {
      setRating(newValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }))))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: styleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    onClick: () => setOpen(false),
    size: "large",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    onClick: () => saveChanges(),
    size: "large",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "Confirm changes"))))), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    open: openSnackSuccess,
    autoHideDuration: 3000,
    onClose: handleCloseSnackSuccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(Alert, {
    severity: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "Sucess! The product was succesfully updated!")), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    open: openSnackError,
    autoHideDuration: 3000,
    onClose: handleCloseSnackError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(Alert, {
    severity: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "Failed! There was an error when tried to update the product!")), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    open: openSnackRequired,
    autoHideDuration: 3000,
    onClose: handleCloseSnackRequired,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx(Alert, {
    severity: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Check all required fields!")));
}
;

/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mui-datatables */ "mui-datatables");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModalEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalEdit */ "./components/ModalEdit.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
var _jsxFileName = "/usr/src/dashboard/components/Table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

const options = {
  print: false,
  selectableRows: false,
  responsive: 'stacked'
};
function TableProducts({
  updateTable
}) {
  const {
    0: tableData,
    1: setTableData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: openDialog,
    1: setOpenDialog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: itemSelected,
    1: setItemSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: openModal,
    1: setOpenModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: types,
    1: setTypes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: openSnackSuccess,
    1: setOpenSnack
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openSnackError,
    1: setOpenSnackError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: tableUpdate,
    1: setTableUpdate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function handleData(data) {
    let arr = [];
    let arrType = [];
    data.forEach(el => {
      arrType.push(el.type);
      arr.push([el._id, el.title, el.type, el.rating, el.price, moment__WEBPACK_IMPORTED_MODULE_6___default()(el.createdAt).format('YYYY-MM-DD HH:mm:ss'), el.height, el.width, el.description]);
    });
    setTypes([...new Set(arrType)]);
    return arr;
  }

  async function handleUpdateTable() {
    setTableUpdate(!tableUpdate);
  }

  ;

  async function confirmDelete(id) {
    setItemSelected(id);
    setOpenDialog(true);
  }

  ;

  const handleCloseSnackError = () => {
    setOpenSnackError(false);
  };

  const handleCloseSnackSuccess = () => {
    setOpenSnack(false);
  };

  async function editProduct(id) {
    setItemSelected(id);
    setOpenModal(true);
  }

  ;

  async function handleCloseDialog() {
    setOpenDialog(false);
  }

  ;

  async function deleteProduct() {
    const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_8__["remove"])(`/products/${itemSelected}`);

    if (response.success) {
      setOpenSnack(true);
      handleUpdateTable();
    } else {
      setOpenSnackError(true);
    }

    setOpenDialog(false);
  }

  ;
  const columns = [{
    name: "Id",
    options: {
      display: false,
      download: false
    }
  }, {
    name: "Title",
    options: {
      filter: true
    }
  }, {
    name: "Type",
    options: {
      filter: true
    }
  }, {
    name: "Rating",
    options: {
      filter: true
    }
  }, {
    name: "Price",
    options: {
      filter: true
    }
  }, {
    name: "Created",
    options: {
      filter: true,
      sort: true
    }
  }, {
    name: "Height",
    options: {
      filter: true,
      sorte: true,
      display: false
    }
  }, {
    name: "Width",
    options: {
      filter: true,
      sorte: true,
      display: false
    }
  }, {
    name: "Description",
    options: {
      filter: true,
      sort: true,
      display: false
    }
  }, {
    name: "Action",
    options: {
      filter: false,
      sort: false,
      empty: true,
      download: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
          color: "primary",
          "aria-label": "outlined button group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: () => editProduct(tableMeta.rowData[0]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, " ", __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Edit"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }), "Edit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: () => confirmDelete(tableMeta.rowData[0]),
          color: "secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Delete"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }), "Delete"));
      }
    }
  }];

  async function fetchData() {
    const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_8__["fetcher"])(`/products`);
    if (response.length > 0) setTableData((await handleData(response)));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, [updateTable || tableUpdate]); // useEffect(() => {
  //     fetchData();
  // }, []);

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_ModalEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: openModal,
    setOpen: setOpenModal,
    types: types,
    item: itemSelected,
    setUpdateTable: handleUpdateTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx(mui_datatables__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Products List",
    data: tableData,
    columns: columns,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: openDialog,
    onClose: handleCloseDialog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Delete"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Are you sure you want to delete this product?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "error",
    autoFocus: true,
    onClick: handleCloseDialog,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "success",
    onClick: deleteProduct,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Confirm"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    open: openSnackSuccess,
    autoHideDuration: 3000,
    onClose: handleCloseSnackSuccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(Alert, {
    severity: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Sucess! The product was succesfully deleted!")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    open: openSnackError,
    autoHideDuration: 3000,
    onClose: handleCloseSnackError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(Alert, {
    severity: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Failed to delete the product!")));
}
;

/***/ }),

/***/ "./components/Upload.js":
/*!******************************!*\
  !*** ./components/Upload.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Upload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "react-dropzone");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "@material-ui/icons/CloudUpload");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "@material-ui/icons/CheckCircleOutline");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
var _jsxFileName = "/usr/src/dashboard/components/Upload.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

const inputStyle = {
  padding: '100px',
  cursor: 'pointer'
};
const styleForm = {
  padding: '10px',
  margin: 'auto',
  alignContent: 'center'
};
const stylePaper = {
  flex: 1,
  flexDirection: 'row',
  cursor: 'pointer',
  padding: '10px',
  margin: 'auto',
  alignContent: 'center'
};
const styleInput = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const styleBack = {
  zIndex: 9999,
  color: '#fff'
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
function Upload({
  updateTable
}) {
  const {
    0: openError,
    1: setOpenError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openSuccess,
    1: setOpenSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: fileName,
    1: setFileName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: contentFile,
    1: setContentFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: openBackdrop,
    1: setOpenBackdrop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: contentError,
    1: setContentError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Failed to upload file!");
  const {
    0: contentSuccess,
    1: setContentSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("File upload successfully!");
  const classes = useStyles();

  const uploadProducts = async () => {
    handleToggleBackdrop();
    let response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_8__["post"])('/products', contentFile);

    if (response.success) {
      setOpenSuccess(true);
      updateTable();
      setContentFile([]);
    } else {
      setOpenError(true);
    }

    setFileName('');
    handleCloseBackdrop();
  };

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleToggleBackdrop = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(acceptedFiles => {
    acceptedFiles.forEach(file => {
      if (file.type != 'application/json') {
        setContentError("Failed to upload file! The selected file is not a JSON!");
        setOpenError(true);
        return;
      }

      setFileName(file.name);
      const reader = new FileReader();

      reader.onabort = () => {
        setContentError('File reading was aborted!');
        setOpenError(true);
      };

      reader.onerror = () => {
        setContentError('File reading has failed!');
        setOpenError(true);
      };

      reader.onload = () => {
        const binaryStr = reader.result;
        setContentFile(binaryStr);
      };

      reader.readAsText(file);
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    styles: inputStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    style: styleForm,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    name: "file-5[]",
    id: "file-5",
    className: "inputfile inputfile-4",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], _extends({
    style: stylePaper
  }, getRootProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: styleInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("input", _extends({
    style: styleInput
  }, getInputProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 100
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), fileName ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      fontSize: 20,
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: 20,
      color: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), "  ", fileName) : "", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, isDragActive ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Drop the files here ...") : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Drag 'n' drop or click to select your JSON file"))), fileName ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: () => uploadProducts(),
    startIcon: __jsx(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Upload")) : ""), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: openError,
    autoHideDuration: 3000,
    onClose: handleCloseError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(Alert, {
    severity: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, contentError)), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: openSuccess,
    autoHideDuration: 3000,
    onClose: handleCloseSuccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(Alert, {
    severity: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, contentSuccess)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Backdrop"], {
    style: styleBack,
    open: openBackdrop,
    onClick: handleCloseBackdrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })));
}
;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/usr/src/dashboard/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const boxStyle = {
  margin: 'auto',
  padding: '30px',
  marginTop: '30px',
  width: '50%'
};
function Index() {
  const {
    0: updateTable,
    1: setUpdateTable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const update = () => {
    setUpdateTable(true);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    style: boxStyle,
    square: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Phasellus et magna nec ipsum maximus scelerisque eget ut dui. Nam feugiat, mi vitae mattis semper, magna augue fermentum massa, ac ultricies eros odio et velit. Proin in enim tempor odio posuere dignissim non at neque. Proin vel ligula pellentesque, gravida eros volutpat, mollis mauris. Sed tincidunt odio odio, sit amet interdum nulla condimentum in.  "), __jsx(_components_Upload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    updateTable: () => update(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updateTable: updateTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
}

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: fetcher, post, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
const API_URL = "http://localhost:3001";

const fetcher = async path => {
  try {
    const res = await fetch(API_URL + path);
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

const post = async (path, data) => {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};

const update = async (path, data) => {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};

const remove = async path => {
  try {
    const rawResponse = await fetch(API_URL + path, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /usr/src/dashboard/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/CheckCircleOutline":
/*!********************************************************!*\
  !*** external "@material-ui/icons/CheckCircleOutline" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "@material-ui/icons/CloudUpload":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CloudUpload" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudUpload");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mui-datatables":
/*!*********************************!*\
  !*** external "mui-datatables" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mui-datatables");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map