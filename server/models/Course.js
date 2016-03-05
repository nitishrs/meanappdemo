var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    shortdescription: {type: String, required: '{PATH} is required'},
    longdescription: {type: String, required: '{PATH} is required'},
    imageurl: String,
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create(
                {   title: 'C# for Sociopaths',
                    featured: true,
                    published: new Date('1/2/2015'),
                    shortdescription: 'Object Oriented Programming Language by Microsoft',
                    longdescription: "C# (pronounced as see sharp) is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure. C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 6.0, which was released on July 20, 2015.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['C#','.net']
                });
            Course.create(
                {   title: 'ASP.NET Dynamic Data',
                    featured: true,
                    published: new Date('6/25/2015'),
                    shortdescription: 'Create data driven web apps easily with this course',
                    longdescription: "ASP.NET Dynamic Data is a framework that lets you create data-driven ASP.NET Web applications easily. It does this by automatically discovering data-model metadata at run time and deriving UI behavior from it. A scaffolding framework provides a functional Web site for viewing and editing data. You can easily customize the scaffolding framework by changing elements or creating new ones to override the default behavior. Existing applications can easily integrate scaffolding elements with ASP.NET pages.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['ASP', '.net']
                });
            Course.create(
                {   title: 'Base One Foundation Component Library (BFC)',
                    featured: true,
                    published: new Date('2/1/2013'),
                    shortdescription: 'Create secure, efficient, Internet-enabled database applications with BFC',
                    longdescription: "The Base One Foundation Component Library (BFC) is a comprehensive RAD framework for creating networked database applications with Visual Studio and DBMS software from Microsoft, Oracle, IBM, Sybase, and MySQL. Building on a patented 'database-centric' architecture, BFC employs a unique, cross-platform data dictionary to provide enhanced security, optimization, and maintainability, making it easier and quicker to develop robust, scalable applications.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Libraries', 'ASP.net', 'MVC']
                });
            Course.create(
                {   title: 'COBOL on Wheelchair',
                    featured: true,
                    published: new Date('5/23/2015'),
                    shortdescription: 'Learn Basic COBOL',
                    longdescription: "COBOL stands for Common Business Oriented Language.The US Department of Defense, in a conference, formed CODASYL (Conference on Data Systems Language) to develop a language for business data processing needs which is now known as COBOL.COBOL is used for writing application programs and we cannot use it to write system software. The applications like those in defense domain, insurance domain, etc. which require huge data processing make extensive use of COBOL.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Cobol', 'Obsolete']
                });
            Course.create(
                {   title: 'ColdBox Platform',
                    featured: false,
                    published: new Date('12/21/2015'),
                    shortdescription: 'Learn this MVC based framework for Coldfusion Development',
                    longdescription: "ColdBox is an open source, conventions based modular web application framework intended for building enterprise applications with CFML. ColdBox uses Convention over configuration and aims for simplicity, rapid development. It makes use of Model-view-controller, Dependency injection, Unit testing, Aspect-oriented programming architectural patterns. ColdBox allows for development of stand-alone modules which can be shared across apps. ColdBox is an active and heavily documented CFML framework",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Coldbox', 'MVC']
                });
            Course.create(
                {   title: 'JavaServer Faces (Mojarra)',
                    featured: true,
                    published: new Date('2/15/2012'),
                    shortdescription: 'JavaServer Faces (JSF) is a Java specification for building component-based user interfaces for web applications.',
                    longdescription: "JSF was formalized as a standard through the Java Community Process and is part of the Java Platform, Enterprise Edition.JSF 2 uses Facelets as its default templating system. Other view technologies such as XUL can also be employed. In contrast, JSF 1.x uses JavaServer Pages (JSP) as its default templating system",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['JSF','Java']
                });
            Course.create(
                {   title: 'Ember.js 2.0.2',
                    featured: true,
                    published: new Date('3/15/2015'),
                    shortdescription: 'Create single page apps with Ember.js',
                    longdescription: "Ember.js is an open-source JavaScript web framework, based on the model–view–controller (MVC) pattern. It allows developers to create scalable single-page web applications[1] by incorporating common idioms and best practices into the framework. Ember is used on many popular websites, including Discourse, Groupon, Vine, Live Nation, Nordstrom, and Chipotle. Although primarily considered a framework for the web, it is also possible to build desktop and mobile applications in Ember. The most notable example of an Ember desktop application is Apple Music, a feature of the iTunes desktop application. In November 2015 ember-cli was downloaded over 200,000 times from its npm repository",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Ember','Js','MVC']
                });
            Course.create(
                {   title: 'Ruby on Rails',
                    featured: true,
                    published: new Date('12/13/2015'),
                    shortdescription: 'Learn Ruby on Rails',
                    longdescription: "Ruby on Rails, or simply Rails, is a web application framework written in Ruby under MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Ruby','Rails','MVC','Server-side']
                });
            Course.create(
                {   title: 'AngularJS',
                    featured: true,
                    published: new Date('7/12/2014'),
                    shortdescription: 'AngularJS - learn it before it consumes the world',
                    longdescription: "AngularJS (commonly referred to as 'Angular' or 'Angular.js') is an open-source web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. The AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. According to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and approximately 8,400 other sites out of 1 million tested in July 2015.[1] AngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js runtime environment.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['AngularJS','Js']
                });
            Course.create(
                {   title: 'MEAN (software bundle)',
                    featured: true,
                    published: new Date('12/29/2015'),
                    shortdescription: 'MEAN.JS - full-stack JavaScript solution',
                    longdescription: "MEAN.JS is a full-stack JavaScript solution that helps you build fast, robust, and maintainable production web applications using MongoDB, Express, AngularJS, and Node.js.MEAN.JS is a full-stack JavaScript solution that helps you build fast, robust, and maintainable production web applications using MongoDB, Express, AngularJS, and Node.js. MEAN.JS will help you getting started and avoid useless grunt work and common pitfalls, while keeping your application organized. Our goal is to create and maintain a simple and readable open-source solution that you can use and trust in your projects.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Stack','MEAN','AngularJS','Js','Express','MongoDB']
                });
            Course.create(
                {   title: 'Twitter Bootstrap',
                    featured: true,
                    published: new Date('3/21/2015'),
                    shortdescription: 'The best CSS framework taught within just 2 hours',
                    longdescription: "Bootstrap is a free and open-source collection of tools for creating websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. It aims to ease the development of dynamic websites and web applications. Bootstrap is a front end web framework, that is, an interface for the user, unlike the server-side code which resides on the 'back end' or server. Bootstrap is the most-starred project on GitHub, with over 90K stars and more than 38K forks",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Bootstrap','CSS']
                });
            Course.create(
                {   title: 'Models of Database Management Systems',
                    featured: false,
                    published: new Date('4/30/2015'),
                    shortdescription: 'Learn different models in Database Management Systems',
                    longdescription: "Data models define how the logical structure of a database is modeled. Data Models are fundamental entities to introduce abstraction in a DBMS. Data models define how data is connected to each other and how they are processed and stored inside the system. The very first data model could be flat data-models, where all the data used are to be kept in the same plane. Earlier data models were not so scientific, hence they were prone to introduce lots of duplication and update anomalies.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Database','Basics']
                });
            Course.create(
                {   title: 'HTML, XHTML, XML, CSS & JavaScript',
                    featured: false,
                    published: new Date('11/6/2013'),
                    shortdescription: 'Learn all the basics to get you started into Web Development',
                    longdescription: 'HTML : With HTML you can create your own Web site. This tutorial teaches you everything about HTML. JS : JavaScript is the most popular programming language in the world. CSS : CSS is a stylesheet language that describes the presentation of an HTML (or XML) document. CSS describes how elements must be rendered on screen, on paper, or in other media. This tutorial will teach you CSS from basic to advanced.',
                    imageurl: '/images/default/htmlcss.jpg',
                    tags: ['Basics','HTML','JS','CSS',]
                });
            Course.create(
                {   title: 'MongoDB with Mongoose',
                    featured: true,
                    published: new Date('1/11/2015'),
                    shortdescription: 'Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.',
                    longdescription: "If you are seeing this page, then you are somewhat related to software engineering, and we all know that for people in tech learning a new technology is important. But we often procrastinate and defer it. And it’s not our fault, because in most cases there are just no good tutorials. This is especially true for new and emerging technologies like NodeJS. The Mongoose course has more than one hour of HD videos, and INSANE number of examples. After finishing lectures, answering quizzes and doing exercises outlined in the course, you’ll be able to do virtually anything with Node and MongoDB in a sane manner, using the industry’s best techniques and practices. The course is ready and you can be access IMMEDIATELY… it’s time to take action to ensure you know the best way to use Node and MongoDB!",
                    imageurl: '/images/default/mongoose.jpg',
                    tags: ['MongoDB','Database']
                });
            Course.create(
                {   title: 'MongoDB with MongoJS',
                    featured: true,
                    published: new Date('9/23/2015'),
                    shortdescription: 'A node.js module for mongodb, that emulates the official mongodb API as much as possible.',
                    longdescription: "MongoJS is a brilliant little Node.js package that lets you access MongoDB using an API that is extremely similar to MongoDB's JavaScript shell.",
                    imageurl: '/images/default/mongojs.jpg',
                    tags: ['MongoDB','Database']
                });
            Course.create(
                {   title: 'CoffeeScript to keep you awake',
                    featured: true,
                    published: new Date('1/10/2016'),
                    shortdescription: 'For the JS haters, here is a coffeescript tutorial',
                    longdescription: "CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way. The golden rule of CoffeeScript is - It's just JavaScript. The code compiles one-to-one into the equivalent JS, and there is no interpretation at runtime. You can use any existing JavaScript library seamlessly from CoffeeScript (and vice-versa). The compiled output is readable and pretty-printed, will work in every JavaScript runtime, and tends to run as fast or faster than the equivalent handwritten JavaScript.",
                    imageurl: '/images/default/coffeescript.jpg',
                    tags: ['Coffeescript','Javascript']
                });
            Course.create(
                {   title: 'Object Oriented Programming with C++',
                    featured: false,
                    published: new Date('7/22/2015'),
                    shortdescription: 'Challenge yourself and learn those two plus\'s you always hated!',
                    longdescription: "This is a fast-paced introductory course to the C++ programming language. It is intended for those with little programming background, though prior programming experience will make it easier, and those with previous experience will still learn C++-specific constructs and concepts. This course is offered during the Independent Activities Period (IAP), which is a special 4-week term at MIT that runs from the first week of January until the end of the month.",
                    imageurl: '/images/default/cpp.jpg',
                    tags: ['C++','Basics']
                });
            Course.create(
                {   title: 'Foundation 5',
                    featured: true,
                    published: new Date('11/1/2016'),
                    shortdescription: 'Learn Foundation - the better alternative to bootstrap',
                    longdescription: "Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Foundation is maintained by ZURB and is an open source project.",
                    imageurl: '/images/default/foundation.jpg',
                    tags: ['Foundation','CSS','Front-end','UI']
                });
            Course.create(
                {   title: 'LESS vs SASS vs SCSS',
                    featured: true,
                    published: new Date('12/31/2015'),
                    shortdescription: 'Comparison of the most popular CSS preprocessors',
                    longdescription: 'In this tutorial the most powerful CSS preprocessors - LESS, SASS and SCSS are compared with examples. The course aims to help you choose the right preprocessing system for your project. We provide examples and sample source code to make you understand better. Sign up for this course now! 10% off for those who sign up within the next 2 days!',
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['CSS','Comparison','Preprocessors']
                });
            Course.create(
                {   title: 'Templating with JADE',
                    featured: true,
                    published: new Date('1/1/2016'),
                    shortdescription: 'Jade is a terse language for writing HTML templates.',
                    longdescription: "Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node and browsers. The latest version of jade can be download for the browser in standalone form from here. It only supports the very latest browsers though, and is a large file. It is recommended that you pre-compile your jade templates to JavaScript and then just use the runtime.js library on the client.",
                    imageurl: '/images/default/placeholder-750x500.png',
                    tags: ['Templating','JADE']
                });
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;