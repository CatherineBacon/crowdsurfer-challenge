# Crowdsurfer Challenge

Frontend developer challenge for [Crowdsurfer](https://slack-files.com/T02B9F087-F1AGY93C0-13f5a6e725)

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


## About The Crowsurfer Challenge

This project was set by Crowdsurfer as part of their recruitment process for a front end engineer position. The project sepcifications are below.

It was my first time using AngularJS, so I worked through the tutorial on code school. I used Yeoman as the seed project and set to work. The result is what you see when you click "home" in the navbar above.


## The Challenge

### Backstory

Crowdsurfer collects data on millions of crowdfunding and peer-to-peer finance projects worldwide on a daily basis. This data is stored in MongoDB and analysed using an Elasticsearch cluster, and the results are used to feed our AngularJS 1.5.x app via a RESTful API.

### Your Mission

Create a simple AngularJS app that reads and displays a summary of the following snapshot of real project data (based on a query regarding Blockchain technologies):

https://s3-eu-west-1.amazonaws.com/crowdsurfer-json-dumps/blockchain-projects.json

Most of these fields should be self-explanatory apart from 'funding_type', which is either 'R' for a 'rewards' based project (e.g where the funder pledged a reward and is given an appropriate 'reward' based on the size of pledge) or 'E' for an equity-based project (which the funder is typically offered a percentage of the company).

It's up to you which fields you display in your summary, although I recommend using the 'description_summary' field instead of the 'description' field.

Some requirements:

- The http fetch should be defined as a Service or Factory
- Your answer should be composed using Components and / or Directives where possible (e.g the project summary should be defined as a reusable directive)
- The user should be able to sort by "end_time" or the amount "raised" fields
- The user should be able to filter on the "funding_type": display all projects, display only 'Rewards' projects or display only 'Equity' projects.
- You should create at least one unit test for your components (using the test framework of your choice)

### Notes
* We use SASS internally to tame the beast that is CSS but feel free to use vanilla CSS
* We're perfectly happy with you using an AngularJS seed project as your starting point (Yeoman https://github.com/yeoman/generator-angular seems to be the most robust). You can of course just write your own from scratch.
