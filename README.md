***********************************
Scorm API Wrapper Programming Guide
***********************************

.. contents:: Table of Contents



Overview
========

The SCORM API wrapper is a JavaScript library designed to
provide a method for eLearning courseware to interact with
SCORM based learning management systems. It provides
a wrapper to the JavaScript API object provided by the
LMS and supports SCORM versions 1.2 and 2004.

This wrapper takes care of the necessary task of locating the 
API object in course opener window and wrapping the API calls 
in a way that provides a single interface to the courseware regardless 
of which SCORM version is used/supported by the LMS.

The contents of this repository is a porting of the code from the
original APIWrapper.js file to Angular JS with a 
number of improvements. The original APIWrapper.js was released
by Concurrent Technologies Corporation (CTC)
under the MIT style license available
on the ADL SCORM website [2]

The code has been updated to wrap the original functions in
in an angularjs service[5] and extend support for SCORM 2004.
It draws upon some of features offered in the Pipewerks API wrapper[3]
 

Usage
=====

To use the SCORM API wrapper, include the angular-scorm-wrapper.js file
in your project.
You can then make calls to the angular service as needed.



API Functionality
=================

The SCORM wrapper provides a mapping between a number of
JavaScript functions, those being the SCORM Wrapper functions
and their SCORM 1.2 and 2004 equivalent in the LMS.


SCORM API Functions supported
------------------------------

The following functions for SCORM 2004 and 1.2 are supported
in the API wrapper[4]:

**SCORM 2004**

API calls for SCORM 2004 via API_1484_11 object

::

  Initialize( “” ) : bool
  
  Terminate( “” ) : bool
  
  GetValue( element : CMIElement ) : string
  
  SetValue( element : CMIElement, value : string) : string
  
  Commit( “” ) : bool
  
  GetLastError() : CMIErrorCode
  
  GetErrorString( errorCode : CMIErrorCode ) : string
  
  GetDiagnostic( errocCode : CMIErrorCode ) : string
  

**SCORM 1.2**

API calls for SCORM 1.2 via API object

::
  
  LMSInitialize( “” ) : bool
  
  LMSFinish( “” ) : bool
  
  LMSGetValue( element : CMIElement ) : string
  
  LMSSetValue( element : CMIElement, value : string) : string
  
  LMSCommit( “” ) : bool
  
  LMSGetLastError() : CMIErrorCode
  
  LMSGetErrorString( errorCode : CMIErrorCode ) : string
  
  LMSGetDiagnostic( errocCode : CMIErrorCode ) : string


SCORM Wrapper Functions
-----------------------

The functions listed in above section can be accessed 
through the following calls. The wrapper functions 
take care of making the correct API call based upon the
SCORM version you are implementing:

::

  this.setAPIVersion
  
A setter function for telling the SCORM wrapper which API to use.

Arguments:

"1.2"
    The SCORM 1.2 API object

"2004"
    The SCORM 2004 API object 

"Auto"
    Tells the API to search for a SCORM API object. Starts with
    SCORM 1.2 and then moves onto 2004.
    
API functions:

None 

::

  this.getAPIVersion

Getter function for returning the API object set in the SCORM wrapper.

Arguments:

None

API functions:

None

::
  
  this.doLMSInitialize

Kicks of the initialization process which starts communication between the courseware
and the LMS.

Arguments:

None

API functions:

LMSInitialize("")
    SCORM 1.2 API function called by this method.
    
Initialize("")
    SCORM 2004 API function called by this method.

::
  
  this.isAvailable

Function called by Flash to check if SCORM Wrapper is available.

Arguments:

None

API functions:

None

::
  
  this.doLMSFinish
  
Called when the courseware has finished interacting with the LMS. For example may be used on an
exit button.

Arguments:

None

API functions:

LMSFinish("")
    SCORM 1.2 method for ending communication between LMS and courseware

Terminate("")
    SCORM 2004 method for ending communication between LMS and courseware

::
  
  this.doLMSGetValue
  
Used for returning a value from the CMS for example cmi.score.raw

Arguments:

Valid element from data model:

SCORM 1.2
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/

SCORM 2004 (2nd, 3rd and 4th editions)
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/    

API functions:

LMSGetValue(parameter)
    SCORM 1.2 method
   
GetValue(parameter)
    SCORM 2004 method  

::
  
  this.doLMSSetValue
  
Used for setting a value in the CMS for example cmi.score.raw

Arguments:

doLMSSetValue takes two arguments. The Data model element and the value to set.

Valid element from data model:

SCORM 1.2
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/

SCORM 2004 (2nd, 3rd and 4th editions)
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/    


API functions:

LMSSetValue(parameter, value)
    SCORM 1.2 method
   
SetValue(parameter, value)
    SCORM 2004 method   
  
::
  
  this.doLMSCommit

Used to persist data in the LMS. Call once the value has been set using doLMSSet(parameter, value).

Arguments:

None

API functions:

LMSCommit("")
    SCORM 1.2 method for committing data to the LMS

Commit("")
    SCORM 2004 method for committing data to the LMS

::
  
  this.doLMSGetLastError
  
Get the last error code generated by the LMS.

Arguments:

None

API functions:

LMSGetLastError()
    SCORM 1.2 method

GetLastError()
    SCORM 2004 method
  
::
  
  this.doLMSGetErrorString

Get the last error description generated by the LMS as a string.

Arguments:

Error code
    Should be a valid SCORM error code. These can be found in the Run Time Reference document.
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/
    
API functions:

LMSGetErrorString(errorCode.toString())
    SCORM 1.2 method

GetErrorString(errorCode.toString())
    SCORM 2004 method

::
  
  this.doLMSGetDiagnostic

The vendor specific textual description that corresponds to the input error code.

Argument:

Error code
    Should be a valid SCORM error code. These can be found in the Run Time Reference document.
    http://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/

API functions:

LMSGetDiagnostic(errorCode.toString())
    SCORM 1.2 method

GetDiagnostic(errorCode.toString())
    SCORM 2004 method

::
  
  this.LMSIsInitialized
  
Method for checking if LMS is already initialized. There is no one method that can be called in
the API for checking if the LMS is initialized, or if it is still present (for example has the LMS browser window
accidentally been closed).
Therefore we check the status by getting a value from the LMS - "cmi.core.student_name".

Argument:

None

API function:

LMSGetValue("cmi.core.student_name")
    SCORM 1.2 method
   
GetValue("cmi.core.student_name")
    SCORM 2004 method  

::

  
  this.ErrorHandler
  
Determines if an error was encountered by the previous API call and if so, displays a message to the user.
If the error code has associated text it is also displayed. 

Argument:

None

API functions:

LMSGetLastError()
    SCORM 1.2 method

GetLastError()
    SCORM 2004 method    
:: 
  
  this.getAPIHandle
  
Returns the handle to API object if it was previously set, otherwise it returns null.

Argument:

None

API functions:

None

::

  
  this.findAPI
  
This function looks for an object named API/API_1484_11 in parent and opener windows.
It calls a number of other functions to assist in this process based upon the SCORM
version we wish to use.  

Argument:

None

API functions:

None
 
::
 
  this.searchForAPI

This function does a lookup for the SCORM API starting with 1.2 and then 2004.

Argument:

None

API functions:

None  

::
  
  this.scorm1Point2
  
Called by this.searchForAPI to look for API object.

Argument:

None

API functions:

None  

::


  this.scorm2004
  
Called by this.searchForAPI to look for API_1484_11 object.

Argument:

None

API functions:

None   

::
  
  this.getAPI

This function looks for an object named API, first in the current window's 
frame hierarchy and then, if necessary, in the current window's opener window
hierarchy (if there is an opener window). It calls findAPI which then finds
the API based upon the chosen SCORM version.

Argument:

None

API functions:

None 

::
  
  this.cmiBooleanToJs 

The bool type on the API is a SCORM boolean, which is actually a string 
having the value “true” or “false”.
http://scorm.com/scorm-explained/technical-scorm/run-time/

However some LMS's may return a Boolean True or False or possibly even
1 or 0. We therefore include this function to guard against edge cases.

In the case of an error we could also have null come back from the LMS so
we also need to program with this in mind. 

Argument:

None

API functions:

None 



Tests
=====

Testing is done via Karma using Jasmine.


To add a test suite use the following format:

::

     describe('When I call scormWrapper.setAPIVersion() with "1.2" ', function(){
        beforeEach(module('scormwrapper'));
        it('returns true', inject(function(scormWrapper){ 

            expect( scormWrapper.setAPIVersion("1.2") ).toEqual(true);
            //add further test cases to the suite here if needed.

        }))

    });




References
==========

[1] ADL
http://www.adlnet.gov/scorm

[2] CTC SCORM SCORM 1.2 API wrapper
http://www.adlnet.gov/resources/scorm-1-2-content-packages?type=software_downloads

[3] Pipewerks SCORM wrapper
https://github.com/pipwerks/scorm-api-wrapper

[4] SCORM.com
http://scorm.com/scorm-explained/technical-scorm/run-time/

[5] Angularjs services
http://docs.angularjs.org/guide/dev_guide.services

