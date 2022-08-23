<!-- # ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a markdown language that is syntaxed like JavaScript but behaves similar to HTML utilizing tags such as <h1></h1>, <p></p> etc. One syntax difference between HTML and JSX is is props. 

Researched answer:  JSX is like a blend of JavaScript and HTML that makes it easier to write React applications. React utlizes components to contain both languages. HTML tags are converted to react elemtents via JSX. JSX is not required in React but it is preferred by most developers because of its ease of use. The difference in syntax is;

const myElement = <h1>JSX syntax</h1>;                  <body>
                                                        <p>This is HTML syntax.</p>
                                                        </body>

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a pacakge manager created and maintained by Meta. Yarn is the command you can use in terminal to create the file structure and utilize it. .js files are modified in React when I run yarn. It also creates {}package.json when you run yarn. 


Researched answer: Yet Another Resource Negotiatior are package managers for JavaScript. Yarn was created in 2016 by Facebook and is maintained by Meta. Yarn's installation process is broken down to resolution, fetching and linking. Yarn also is used as a project manager and can test your code by running the command $yarn jest in terminal.

3. What is an anonymous function in JavaScript?

Your answer: Anonymous function are functions without a name. An example of this is;

    const anonymous = () => {

        }

Researched answer: Anonymous function are functions without a name that can only be accessed by a variable that it's stored in. It cannot be accessed after it is imitially created. They can take multiple argurments but cannot take more than a single expression. 

4. What is the difference between a class and an object?

Your answer: A class is the blueprint of an object and objects are variables that store values. 

Researched answer: A class is the blueprint of an object and objects utlize methods and variables from inside the class. Classes only need to be declared one time where objects can be declared over and over. They are both part of object-oriented programming. 

An example of class is;

class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

An example of object is;

let car = "BMW";

5. What is the difference between state and props in React?

Your answer: The difference is props are objects used to pass informaton and state is a special variable. 

Researched answer: State stores local data and props pass data between components by its parent component. State are variables that are intialized and managed by the component. States are locally owned and props are owned by a parent component. 

An example of props is;

const myElement = <Truck brand="Chevy" />;
function Truck(props) {
  return <h2>I am a { props.brand }!</h2>;
}

This would return "I am a Chevy!"

An example of state is;

import React, { useState } from 'react';

function Run() {

  const [runCount, setRunCount] = useState(0);

  return (
    <div>
      <p>You ran {Runcount} miles</p>
      <button onClick={() => setRunCount(count + 1)}>
        Click me for very mile ran
      </button>
    </div>
  );
}


6. STRETCH: Which is the difference between a div and a span?

Your answer: A div creates space on a rendered webpage and I would have to look up with a span does but I can absolutely find it.

Researched answer:  Div is a tag that seperates content on a webpage such as a heading and a paragraph. A span is a HTML tag that puts different blocks of text on the same line. Span is typically utilized to style inline content and divs are typically utilized to style larger sections of content. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: a programming paradigm that was created to deal with complexity of large software systems.


2. Ruby: an open source, object-oriented programming language created in the early 1990s.

3. Implicit return: the value of the last line of a method that reutrns without using the keyword return.

4. Ruby blocks: anonoymous functions similar to JavaScript. Blacks are created with do/end keywords or with curly braces. They are code that is passed to a method. 

5. Ruby hashes: a collection of unique keys and their values, similar to an array but values are referanced by unique keys.  -->

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

Researched answer:

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer:

Researched answer:

3. What is an anonymous function in JavaScript?

Your answer:

Researched answer:

4. What is the difference between a class and an object?

Your answer:

Researched answer:

5. What is the difference between state and props in React?

Your answer:

Researched answer:

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

2. Ruby:

3. Implicit return:

4. Ruby blocks:

5. Ruby hashes: