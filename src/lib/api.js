const axios = require('axios');
const config = {
    headers: { Authorization: `Bearer asda` }
};

const { guardarUsuario } = require('../repo/user.repo');


module.exports = {
    async authUser(username, password, done) {
        try {

            //remove
            user = {
                username: username,
                password: "password",
                email: "josue@gmail.com",
            };

            await guardarUsuario(user);

            done(null, user);
            //remove

            // axios.post("https://jsonplaceholder.typicode.com/users", { username: username, password: password }, config)
            //     .then(({ data }) => {
            //         user = {
            //             username: data.name,
            //             password: data.password
            //         };

            //         if (existUser(user.username)) {
            //             done(null, user);
            //         } else {
            //             done(null, false);
            //         }
            //         return data;
            //     })
            //     .catch(error => {
            //         done(null, false);
            //         console.log(error);
            //     });
        } catch (error) {
            done(null, false);
            console.log(error);
        }
    },
    GetJobs(req, res) {

        //remove
        const jobs = [
            { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
            { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
            { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
            { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },
            { col1: "valo1", col2: "valo2", col3: "valo3", col4: "valo4" },

        ]
        res.render('jobs/show', { jobs });
        return;
        //remove

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => {

                return data;
            })
            .catch(error => {
                console.log(error);
            });
    }

};