const axios = require('axios');

const { guardarUsuario } = require('../repo/user.repo');


module.exports = {
    async authUser(username, password, done) {
        try {
            axios({
                    method: 'post',
                    url: 'https://coding-test.rootstack.net/api/auth/login',
                    headers: {},
                    data: { email: username, password: password }
                }).then(({ data }) => {

                    if (data.error != "") {
                        user = {
                            username: username,
                            email: username,
                            password: password,
                            token: data.access_token
                        }

                        guardarUsuario(user);
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                    return data;
                })
                .catch(error => {
                    done(null, false);
                    console.log(error);
                });
        } catch (error) {
            done(null, false);
            console.log(error);
        }
    },
    getJobs(token, res, redirectv) {
        axios.get("http://coding-test.rootstack.net/api/jobs", {
                headers: { Authorization: `Bearer ` + token }
            })
            .then(({ data }) => {
                let jobs = []
                data.data.forEach(element => {
                    jobs.push({ col1: element.title, col2: element.description, col3: element.image, col4: element.date }, )
                });
                res.render(redirectv, { jobs });
            })
            .catch(error => {
                console.log(error);
            });

    },
    getPoinst(token, res, redirectv) {
        axios.get("http://coding-test.rootstack.net/api/jobs", {
                headers: { Authorization: `Bearer ` + token }
            })
            .then(({ data }) => {
                let jsonValue = []
                data.data.forEach(element => {
                    jsonValue.push({ name: element.title, point: [element.latitude, element.longitude] }, )
                });
                res.render(redirectv, { jsonValue });
            })
            .catch(error => {
                console.log(error);
            });

    }

};