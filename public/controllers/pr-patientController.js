angular.module('patientController',['patientService'])
    .controller('registrationController',function ($http,$location,$timeout,patient) {
        console.log("Registration COntroller Iniiated");
        const app = this;
        app.regPatient = function (regData) {
            app.loading = true;
            app.error = false;
            console.log("form submitted");
            //console.log(this.regData);

            patient.create(app.regData).then(function (data) {
                console.log("test1");
                console.log(data.data.success);
                console.log(data.data.message);
                if(data.data.success)
                {
                    app.loading = false;
                    app.success = data.data.message;
                    $timeout(function () {
                        $location.path('/');
                    },2000);

                }
                else {
                    app.loading = false;
                    app.error = data.data.message;
                }
            });
        }
    })

