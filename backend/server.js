// Importing required modules
const mysql = require('mysql2/promise');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const dotenv = require('dotenv');
// Loading environment variables
dotenv.config({ path: './.env' });
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('connect-flash')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,    

    }
});



const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions',
    createtable: false,  // Ensure that the table is not auto-created
    columnNames: {
        session_id: 'sid',  // Use your column names
        expires: 'expired',
        data: 'sess',
        user_id: 'user_id'  // Ensure this is included and matches your schema
    }
});






// Function to test database connection
async function testDatabaseConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        await connection.ping();
        console.log('Database connected successfully.');
        connection.end();
    } catch (error) {
        console.error('Database connection failed:', error);
        connection.end();
    }
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,  // 1 day
        httpOnly: true,
        sameSite: 'None',  // required for cross-domain cookies
        secure: true,  // set to true if using https
    }
}));


app.use(flash());


// Passport setup
passport.use(new LocalStrategy(
    { usernameField: 'email' },  // Tell Passport to expect an email
    async function(email, password, done) {
        try {
            // Query based on 'username' since that's the column name in your database
            const user = await knex.select('*').from('users').where('username', email).first();
            
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        // Use knex instead of db
        const user = await knex.select('*').from('users').where('id', id).first();
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});


app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    req.db = knex;
    next();
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    testDatabaseConnection();
});
