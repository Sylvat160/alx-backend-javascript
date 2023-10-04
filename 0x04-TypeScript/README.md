## Project: TypeScript Learning

### Resources
- Read or watch:
  - [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  - [TypeScript documentation](https://www.typescriptlang.org/docs/)

### Learning Objectives
By the end of this project, you will be able to explain, without using Google:

- Basic types in TypeScript
- Interfaces, Classes, and functions in TypeScript
- How to work with the DOM and TypeScript
- Generic types in TypeScript
- How to use namespaces in TypeScript
- How to merge declarations in TypeScript
- How to use an ambient Namespace to import an external library in TypeScript
- Basic nominal typing with TypeScript

### Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TypeScript scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

## Exercise 0: Creating an interface for a student
- Create an interface named Student with attributes: firstName (string), lastName (string), age (number), and location (string).
- Create two student objects and store them in an array called studentsList.
- Use Vanilla JavaScript to render a table and append rows to display the first name and location of each student.
- Ensure Webpack doesn't show any type errors.

## Exercise 1: Let's build a Teacher interface
- Create a directory task_1 and copy configuration files.
- Define a Teacher interface with firstName (string) and lastName (string) as initializable attributes.
- Add fullTimeEmployee (boolean) as a required attribute and yearsOfExperience (number) as an optional attribute.
- Allow adding any other attributes dynamically to the Teacher object.
- Ensure Webpack doesn't show type errors.

## Exercise 2: Extending the Teacher class
- Create an interface named Directors that extends Teacher and includes numberOfReports (number).
- Implement the Directors interface with an object and print its attributes.
  
## Exercise 3: Printing teachers
- Write a function printTeacher that accepts firstName and lastName and returns the first letter of firstName and the full lastName.
- Create an interface for printTeacherFunction.
  
## Exercise 4: Writing a class
- Create a StudentClass with a constructor that accepts firstName and lastName.
- Implement methods workOnHomework and displayName.
- Define the class and constructor using interfaces.
- Ensure no TypeScript errors during compilation.
  
## Exercise 5: Advanced types Part 1
- Create DirectorInterface with workFromHome, getCoffeeBreak, and workDirectorTasks methods.
- Create TeacherInterface with similar methods.
- Implement Director and Teacher classes with corresponding methods.
- Create createEmployee function to return either Director or Teacher instance based on salary.
  
## Exercise 6: Creating functions specific to employees
- Write isDirector and executeWork functions to handle Director and Teacher instances.
  
## Exercise 7: String literal types
- Define a String literal type Subjects allowing only Math or History values.
- Create a teachClass function based on todayClass value.
  
## Exercise 8: Ambient Namespaces
- Create a directory task_3 and copy configuration files.
- Define RowID and RowElement types and interfaces in interface.ts.
- Import them into crud.d.ts.
- Import dependencies in main.ts.
- Create and manipulate objects with specified types.
  
## Exercise 9: Namespace & Declaration merging
- Create a directory task_4 and copy configuration files.
- Define Teacher and Subject classes with interfaces in a namespace named Subjects.
- Add attributes and methods as specified for Cpp, React, and Java.
  
## Exercise 10: Update task_4/js/main.ts
- Create and export constants cpp, java, and react.
- Create a Teacher object cTeacher.
- Log information for each subject and call relevant methods.
  
## Exercise 11: Brand convention & Nominal typing
- Create a directory task_5 and copy configuration files.
- Define MajorCredits and MinorCredits interfaces with a brand property.
- Implement sumMajorCredits and sumMinorCredits functions to sum credits and return the respective interfaces.

Each exercise has specific requirements and tasks to be completed. Ensure that your TypeScript code meets these requirements for successful completion of the project.