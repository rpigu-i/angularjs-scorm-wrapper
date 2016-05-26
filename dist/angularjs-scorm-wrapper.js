/********************************************************************************
**
** Prometheus Research SCORM API Wrapper
** 
** Supports:
**
** SCORM 1.2, SCORM 2004.[1]
**
** The following is a porting of the code from the
** original APIWrapper.js file to Angular JS with a 
** number of improvements from
** Concurrent Technologies Corporation (CTC) released
** under the MIT style license available
** on the ADL scorm website [2]
** 
** The code has been updated to wrap the original functions in
** in angularjs and extend support for SCORM 2004 [4].
** It draws upon some of concepts offered in the Pipewerks[3]
** 
** The code is served as an AngularJS service [5].
** 
** References/Inspiration:
** 
** [1] ADL
** http://www.adlnet.gov/scorm
** 
** [2] CTC SCORM SCORM 1.2 API wrapper
** http://www.adlnet.gov/resources/scorm-1-2-content-packages?type=software_downloads
** 
** [3] Pipewerks SCORM wrapper
** https://github.com/pipwerks/scorm-api-wrapper
** 
** [4] SCORM.com
** http://scorm.com/scorm-explained/technical-scorm/run-time/
** 
** [5] Angularjs services
** http://docs.angularjs.org/guide/dev_guide.services
**
** Copyright (c) Prometheus Research 2014
** Copyright (c) Philip Hutchison
** Copyright (c) Concurrent Technologies Corporation (CTC)
** ---------------------------------------------------------------------------------
** License:
** 
** 
** Permission is hereby granted, free of charge, to any person obtaining a 
** copy of this software and associated documentation files (the “Software”), 
** to deal in the Software without restriction, including without limitation the 
** rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
** copies of the Software, and to permit persons to whom the Software is furnished to
** do so, subject to the following conditions:
** 
** The above copyright notice and this permission notice shall be included in 
** all copies or substantial portions of the Software.
** 
** THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
** IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
** FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
** COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
** IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
** CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
** 
*********************************************************************************/

var scormwrapper = angular.module('scormwrapper', []);

scormwrapper.service('scormWrapper', function () {
    "use strict";

    var version = "Auto";
    var API = false;
    var scormVersions = ["Auto","1.2","2004"];

    this.setAPIVersion = function (scormVersion) {
    
       scormVersion =  scormVersion || "Auto";
        
       var v = scormVersions.indexOf(scormVersion.toString());
       (v > -1) ? version = scormVersions[v] : console.log("Not found, default to Auto");
       return version;
    };
    
    this.getAPIVersion = function () {
        return version;
    };

    this.isAvailable = function () {
        return true;
    };

    this.doLMSInitialize = function () {
        return this.cmiBooleanToJs(this.getAPICall("LMSInitialize", "Initialize")(""));
    };
    
    this.doLMSFinish = function () {
        return this.cmiBooleanToJs(this.getAPICall("LMSFinish", "Terminate")(""));
    };

    this.doLMSGetValue = function (parameter) {
        return this.getAPICall("LMSGetValue", "GetValue")(parameter);
    };

    this.doLMSSetValue = function (parameter, value) {
        return this.cmiBooleanToJs(this.getAPICall("LMSSetValue", "SetValue")(parameter, value));
    };

    this.doLMSCommit = function () {
        return this.cmiBooleanToJs(this.getAPICall("LMSCommit", "Commit")(""));
    };

    this.doLMSGetLastError = function () {
        return this.getAPICall("LMSGetLastError", "GetLastError")();
    };

    this.doLMSGetErrorString = function (errorCode) {
        return this.getAPICall("LMSGetErrorString", "GetErrorString")(errorCode.toString());
    };

    this.doLMSGetDiagnostic = function (errorCode) {
        return this.getAPICall("LMSGetDiagnostic", "GetDiagnostic")(errorCode.toString());
    };

    this.LMSIsInitialized = function () {
        return API;
    };

    this.ErrorHandler = function () {
       return this.getAPICall("LMSGetLastError", "GetLastError")();
    };

    this.cmiBooleanToJs = function (value) {
        return (value === "1" || value === 1 || value === "true" || value === true);
    }; 
    
    this.getAPIHandle = function () {

        var win = window;

        if (win.parent && win.parent != win) {
            this.findAPI(win.parent);
        }
    
        if (!API && win.top.opener) {
            this.findAPI(win.top.opener);
        } else if (!API) {
            console.log("Unable to find API adapter");   
        }
    };

    this.findAPI = function (win) {

        var findAttempts = 0,
            findAttemptLimit = 500;
        
        for (findAttempts; findAttempts < findAttemptLimit; findAttempts++) {
        
            if (win.API && (version === "1.2" || version === "Auto" )) {
                API = win.API;
                version = "1.2";
                break;  
            } else if (win.API_1484_11 && (version === "2004" || version === "Auto" )) {
                API = win.API_1484_11;
                version = "2004";
                break;
            } else if (win.parent && win.parent != win) {
                findAttempts++;
                win = win.parent;
            }
        }   
    };

    this.getAPICall = function(funcname12, funcname2004) {
                
        if (!API) {
            this.getAPIHandle();
            if (!API) {
                return (function(){
                    console.log("No API found, can't execute: " + funcname12 + " or " + funcname2004);
                });
            }
        } 
        
        switch(version) {
        case "2004":
           return function() {
               return API[funcname2004].apply(API, arguments);
           };

        case "1.2":
           return function() {
               return API[funcname12].apply(API, arguments);
           };
        }     
    };      
});

