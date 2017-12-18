var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var G = require('graphql');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

var UserType = new G.GraphQLObjectType({
  name: 'User',
  description: 'User of my page',
  fields: {
    name: {
      type: G.GraphQLString,
      resolve(src) {
        return src.name;
      },
    },
    age: {
      type: G.GraphQLInt,
      resolve(src) {
        return src.age;
      },
    },
    email: {
      type: G.GraphQLString,
      resolve(src, args, ctxt) {
        console.log(args)
        return src.email;
      },
    },
  },
})

var schema = new G.GraphQLSchema({
  query: new G.GraphQLObjectType({
    name: 'Query',
    description: 'This is super duper quite big query',
    fields: {
      user: {
        type: UserType,
        args: {
          name: {
            type: G.GraphQLNonNull(G.GraphQLString),
            description: 'name of user',
          },
        },
        resolve(src, args, ctxt) {
          return {
            name: args.name,
            age: 20,
            email: 'alex.hv@gmail.com',
          };
        },
      },
    },
  }),
});

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', graphqlExpress({
  schema,
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('There is no such page');
  //res.render('error');
});

module.exports = app;
