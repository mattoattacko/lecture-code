# object has property?

**User Story**
As a developer, I would like to easily determine if a property exists within an object so that I can avoid complicated inspections and unoptimized try-catch blocks.


**Example**

    let obj = {
       name: "John",
       phoneNumbers: {
          home: "555-1212",
          work: "555-2323"
       }
    }
 
 - obj.phoneNumbers.home -> true
 - obj.address.home -> false
 - obj.last -> false

**Actual Requirements**



**Implementation**
