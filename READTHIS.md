Still need to create and run migrations, also decide whether or not to use tokens or sessions 
and add functionality for whichever one, download dependencies and all... 

> If using sessions then:-
    - delete server.js and rename rever-sessions.js to just server.js (in api folder)
    - download session dependencies
    - delete authenticator.js and rename sessions-authenticator.js to authenticator.js (in auth folder)
    - delete auth-router.js and rename sessions-auth-router.js to auth-router.js (in auth folder)
    - delete secrets.js file in api folder

> If using tokens then:-
    - delete any file with sessions (check auth and api folders)
    - download jason web token dependencies

* Finally edit helpers file in data and then delete this file :)

Tasks:
[] create migrations and run them
[] create any seed files you need 
[] choose auth setting and configure folder/ files for whichever one you choose
[] edit helper file to use specified db data
[] delete this folder. and continue working creating endpoints and what not.