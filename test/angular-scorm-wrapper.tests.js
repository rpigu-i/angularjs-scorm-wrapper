'use strict';

// Mock SCORM 1.2 API
var API = { 
 

/*******************************************************************************
**
** Function: LMSInitialize()
** Inputs:  None
** Return:  CMIBoolean true if the initialization was successful, or
**          CMIBoolean false if the initialization failed. These are strings
**          for example "true" or "false"
**
** Description:
** Mimics the LMS SCORM 1.2 LMSInitialize function
**
*******************************************************************************/


   LMSInitialize : function (emptyString) {
       if (emptyString !== "") {
           return "false";
       } else {
           return "true";
       }
    },

/*******************************************************************************
**
** Function LMSFinish()
** Inputs:  None
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Closes communication with LMS and return "true" or "false"
**
*******************************************************************************/
    
    
    LMSFinish : function (emptyString) {
       if (emptyString !== "") {
           return "false";
       } else {
           return "true";
       }
    },

/*******************************************************************************
**
** Function LMSGetValue(name)
** Inputs:  name - string representing the cmi data model defined category or
**          element (e.g. cmi.core.student_id)
** Return:  The value presently assigned by the LMS to the cmi data model
**          element defined by the element or category identified by the name
**          input value.
**
** Description:
** Returns a test string "Test Data"
**
*******************************************************************************/
    
    LMSGetValue : function (element) {
       if (element === "" || element === undefined) {
           return "";
       } else {
           return "Test Data";
       }
    },
    
/*******************************************************************************
**
** Function LMSSetValue(name, value)
** Inputs:  name -string representing the data model defined category or element
**          value -the value that the named element or category will be assigned
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Returns "true" or "false"
**
*******************************************************************************/  

    LMSSetValue : function (element, value) {
       if (element === "") {
           return "false";
       } else {
        return "true";
       }
    },

/*******************************************************************************
**
** Function LMSCommit()
** Inputs:  None
** Return:  "true"
**
** Description:
** Returns "true" 
**
*******************************************************************************/
    
    LMSCommit : function () {
        return "true";
    },

/*******************************************************************************
**
** Function LMSGetLastError()
** Inputs:  None
** Return:  The error code that was set by the last LMS function call
**
** Description:
** Returns 0 - which is no error.
**
*******************************************************************************/

    
    LMSGetLastError : function () {
        return 0;
    },

/*******************************************************************************
**
** Function LMSGetErrorString(errorCode)
** Inputs:  errorCode - Error Code
** Return:  The textual description that corresponds to the input error code
**
** Description:
** Returns a test error string "Test: No error" 
**
********************************************************************************/

     
    LMSGetErrorString : function(errorCode) {
        return "Test: No error";
    },

/*******************************************************************************
**
** Function LMSGetDiagnostic(errorCode)
** Inputs:  errorCode - Error Code(integer format), or null
** Return:  The vendor specific textual description that corresponds to the 
**          input error code
**
** Description:
** Returns a test string "Test: Diagnostic no error"
**
*******************************************************************************/
    
    LMSGetDiagnostic : function(errorCode) {
        return "Test: Diagnostic no error";
    }

};


// Mock SCORM 2004 API
var API_1484_11 = {

/*******************************************************************************
**
** Function: Initialize()
** Inputs:  None
** Return:  CMIBoolean true if the initialization was successful, or
**          CMIBoolean false if the initialization failed. These are strings
**          for example "true" or "false"
**
** Description:
** Mimics the LMS SCORM 2004 Initialize function
**
*******************************************************************************/


   Initialize : function (emptyString) {
       if (emptyString !== "") {
           return "false";
       } else {
           return "true";
       }
    },

/*******************************************************************************
**
** Function Terminate()
** Inputs:  None
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Closes communication with LMS and return "true" or "false"
**
*******************************************************************************/
    
    
    Terminate : function (emptyString) {
       if (emptyString !== "") {
           return "false";
       } else {
           return "true";
       }
    },

/*******************************************************************************
**
** Function GetValue(name)
** Inputs:  name - string representing the cmi data model defined category or
**          element (e.g. cmi.core.student_id)
** Return:  The value presently assigned by the LMS to the cmi data model
**          element defined by the element or category identified by the name
**          input value.
**
** Description:
** Returns a test string "Test Data"
**
*******************************************************************************/
    
    GetValue : function (element) {
       if (element === "" || element === undefined) {
           return "";
       } else {
           return "Test Data";
       }
    },
    
/*******************************************************************************
**
** Function SetValue(name, value)
** Inputs:  name -string representing the data model defined category or element
**          value -the value that the named element or category will be assigned
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Returns "true" or "false"
**
*******************************************************************************/  

    SetValue : function (element, value) {
       if (element === "") {
           return "false";
       } else {
        return "true";
       }
    },

/*******************************************************************************
**
** Function Commit()
** Inputs:  None
** Return:  "true"
**
** Description:
** Returns "true" 
**
*******************************************************************************/
    
    Commit : function () {
        return "true";
    },

/*******************************************************************************
**
** Function GetLastError()
** Inputs:  None
** Return:  The error code that was set by the last LMS function call
**
** Description:
** Returns 0 - which is no error.
**
*******************************************************************************/

    
    GetLastError : function () {
        return 0;
    },

/*******************************************************************************
**
** Function GetErrorString(errorCode)
** Inputs:  errorCode - Error Code
** Return:  The textual description that corresponds to the input error code
**
** Description:
** Returns a test error string "Test: No error" 
**
********************************************************************************/

     
    GetErrorString : function(errorCode) {
        return "Test: No error";
    },

/*******************************************************************************
**
** Function GetDiagnostic(errorCode)
** Inputs:  errorCode - Error Code(integer format), or null
** Return:  The vendor specific textual description that corresponds to the 
**          input error code
**
** Description:
** Returns a test string "Test: Diagnostic no error"
**
*******************************************************************************/
    
    GetDiagnostic : function(errorCode) {
        return "Test: Diagnostic no error";
    }

};


describe('scormWrapper test', function(){

   /******************************************
   ** Tests for getting and setting SCORM API
   ** version.
   *******************************************/
    
   describe('When I call scormWrapper.setAPIVersion() with 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('returns "1.2" ', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");

        }))

    });
    
    describe('When I call scormWrapper.setAPIVersion() with 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('returns "2004" ', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");

        }))

    });
    
    describe('When I call scormWrapper.getAPIVersion() without a param ', function(){
        beforeEach(module('scormwrapper'));
        it('returns "Auto"', inject(function(scormWrapper){ 

            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");

        }))

    }); 
    
    
    describe('When I call scormWrapper.setAPIVersion() with "1.2" and scormWrapper.getAPIVersion()', function(){
        beforeEach(module('scormwrapper'));
        it(' returns "1.2" true and "1.2"', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.getAPIVersion() ).toEqual("1.2");

        }))

    });
    
    describe('When I call scormWrapper.setAPIVersion() with "2004" and scormWrapper.getAPIVersion()', function(){
        beforeEach(module('scormwrapper'));
        it('returns "2004" and "2004"', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.getAPIVersion() ).toEqual("2004");

        }))

    });    
       
    describe('When I call scormWrapper.setAPIVersion() with "Auto" and scormWrapper.getAPIVersion()', function(){
        beforeEach(module('scormwrapper'));
        it('returns "Auto" and "Auto"', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");

        }))

    });
    
    
    describe('When I call scormWrapper.setAPIVersion() with erroneous data', function(){
        beforeEach(module('scormwrapper'));
        it('returns "Auto" and version is "Auto"', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("1.3") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion("abc") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion("SCORM 1.2") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion("SCORM 2004") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion("12") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion("") ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion() ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion(null) ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            
            expect( scormWrapper.setAPIVersion(undefined) ).toEqual("Auto");
            expect( scormWrapper.getAPIVersion() ).toEqual("Auto");
            

        }))
        

    });    
    
    describe('When I call scormWrapper.setAPIVersion() with 1.2 or 2004 as numeric values', function(){
        beforeEach(module('scormwrapper'));
        it('returns the version as a string', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion(1.2) ).toEqual("1.2");
            expect( scormWrapper.getAPIVersion() ).toEqual("1.2");
            
            expect( scormWrapper.setAPIVersion(2004) ).toEqual("2004");
            expect( scormWrapper.getAPIVersion() ).toEqual("2004");

        }))

    });

    
   /******************************************
   ** Tests function that lets Flash know
   ** Scorm API wrapper exists.
   *******************************************/  
         
    describe('When I call scormWrapper.isAvailable() ', function(){
        beforeEach(module('scormwrapper'));
        it('returns true', inject(function(scormWrapper){ //parameter name = service name

            expect( scormWrapper.isAvailable() ).toEqual(true); 

        }))

    }); 
    
   /******************************************
   ** Tests doLMSInitialize() in various 
   ** scenarios.
   *******************************************/      
    
   describe('When I call scormWrapper.doLMSInitialize with no LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('returns false', inject(function(scormWrapper){ 
            window.parent.API = undefined;
            window.parent.API_1484_11 = undefined;
            expect( scormWrapper.doLMSInitialize() ).toEqual(false); 

        }))

    });
   
   //Auto
   describe('When I call scormWrapper.doLMSInitialize with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns true and version is "1.2" ', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.doLMSInitialize() ).toEqual(true); 
            expect( scormWrapper.getAPIVersion() ).toEqual("1.2");

        }))
        
    });
    
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSInitialize with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true); 

        }))
        
    });
    

   //Scorm 2004  
   describe('When I call scormWrapper.doLMSInitialize with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns true', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true); 

        }))
        
    });     

   /******************************************
   ** Tests doLMSFinish() in various 
   ** scenarios.
   *******************************************/  
   
   //Auto
   describe('When I call scormWrapper.doLMSFinish with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it(' it returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSFinish with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSFinish() ).toEqual(true);  

        }))
        
    });
    

   //Scorm 2004  
   describe('When I call scormWrapper.doLMSFinish with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns true', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    });    

   /******************************************
   ** Tests doLMSGetValue() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSGetValue with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns Test Data', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetValue("cmi.suspend_data") ).toEqual("Test Data"); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSGetValue with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns Test Data', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetValue("cmi.suspend_data") ).toEqual("Test Data"); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    });
 
    describe('When I call scormWrapper.doLMSGetValue with no data model element ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns ""', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetValue("") ).toEqual("");
            expect( scormWrapper.doLMSGetValue() ).toEqual("");  
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    }); 
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSGetValue with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns Test Data', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetValue("cmi.suspend_data") ).toEqual("Test Data"); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    });    

   describe('When I call scormWrapper.doLMSGetValue with no data model element ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns ""', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetValue("") ).toEqual("");
            expect( scormWrapper.doLMSGetValue() ).toEqual(""); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))
        
    });

   /******************************************
   ** Tests doLMSSetValue() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSSetValue with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSSetValue with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
    
    describe('When I call scormWrapper.doLMSSetValue missing a data model element', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns false', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("",10) ).toEqual(false); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });    
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSSetValue with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns true', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
    
   describe('When I call scormWrapper.doLMSSetValue missing a data model element ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns false', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("",10) ).toEqual(false);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });     

   /******************************************
   ** Tests doLMSCommit() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSCommit with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true);
            expect( scormWrapper.doLMSCommit() ).toEqual(true); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSCommit with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns true', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true); 
            expect( scormWrapper.doLMSCommit() ).toEqual(true); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
        
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSCommit with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns true', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSSetValue("cmi.score.raw",10) ).toEqual(true);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });


   /******************************************
   ** Tests doLMSGetLastError() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSGetLastError with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns 0', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetLastError() ).toEqual(0);
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSGetLastError with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns 0', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetLastError() ).toEqual(0); 
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
        
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSGetLastError with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns 0', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetLastError() ).toEqual(0);
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });

   /******************************************
   ** Tests doLMSGetErrorString() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSGetErrorString with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns Test: No error', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetErrorString(0) ).toEqual("Test: No error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSGetErrorString with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns Test: No error', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetErrorString(0) ).toEqual("Test: No error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
        
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSGetErrorString with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns Test: No error', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetErrorString(0) ).toEqual("Test: No error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });   

   /******************************************
   ** Tests doLMSGetDiagnostic() in various 
   ** scenarios.
   *******************************************/    
   
   //Auto
   describe('When I call scormWrapper.doLMSGetDiagnostic with an LMS present ', function(){
        beforeEach(module('scormwrapper'));
        it('Auto returns Test: Diagnostic no error', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("Auto") ).toEqual("Auto");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetDiagnostic(0) ).toEqual("Test: Diagnostic no error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true);

        }))
        
    });
       
    //Scorm 1.2 
    describe('When I call scormWrapper.doLMSGetDiagnostic with an LMS present and version = 1.2 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 1.2 returns Test: Diagnostic no error', inject(function(scormWrapper){ 
            window.parent.API = API;
            expect( scormWrapper.setAPIVersion("1.2") ).toEqual("1.2");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetDiagnostic(0) ).toEqual("Test: Diagnostic no error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    });
        
    
   //Scorm 2004  
   describe('When I call scormWrapper.doLMSGetDiagnostic with an LMS present and version = 2004 ', function(){
        beforeEach(module('scormwrapper'));
        it('SCORM 2004 returns Test: Diagnostic no error', inject(function(scormWrapper){ 
            window.parent.API_1484_11 = API_1484_11;
            expect( scormWrapper.setAPIVersion("2004") ).toEqual("2004");
            expect( scormWrapper.doLMSInitialize() ).toEqual(true);
            expect( scormWrapper.doLMSGetDiagnostic(0) ).toEqual("Test: Diagnostic no error");
            expect( scormWrapper.doLMSFinish() ).toEqual(true); 

        }))

    }); 
         
});