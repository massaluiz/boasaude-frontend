import Treatment from '../model/Treatment';
import Tracks from '../model/Tracks';

export default class TreatmentController {

    constructor(axiosResource) {

        this._axiosResource = axiosResource;

    }

    getList() {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.get(`/treatments`).then((res) => {

                    let resultCall = res.data;
                    console.log(resultCall);
                    let treatments = [];

                    resultCall.forEach(treatment => {

                        treatments.push(
                            new Treatment(treatment.id,
                                treatment.title,
                                treatment.description,
                                treatment.createAt,
                                treatment.treatmentDate,
                                treatment.speciality,
                                treatment.status,
                                treatment.doctor,
                                treatment.healthInsurance)
                        );
                    });


                    resolve(treatments);
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    getListByUser(userName) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.get(`/treatment/user/`+userName).then((res) => {

                    let resultCall = res.data;
                    console.log(resultCall);
                    let treatments = [];

                    resultCall.forEach(treatment => {

                        treatments.push(
                            new Treatment(treatment.id,
                                treatment.title,
                                treatment.description,
                                treatment.createAt,
                                treatment.treatmentDate,
                                treatment.speciality,
                                treatment.status,
                                treatment.doctor,
                                treatment.healthInsurance)
                        );
                    });


                    resolve(treatments);
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    getListByStatus(status) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.get(`/treatment/status/`+status).then((res) => {

                    let resultCall = res.data;
                    console.log(resultCall);
                    let treatments = [];

                    resultCall.forEach(treatment => {

                        treatments.push(
                            new Treatment(treatment.id,
                                treatment.title,
                                treatment.description,
                                treatment.createAt,
                                treatment.treatmentDate,
                                treatment.speciality,
                                treatment.status,
                                treatment.doctor,
                                treatment.healthInsurance)
                        );
                    });


                    resolve(treatments);
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    addTreatment(treatment) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.post(`/treatment`, treatment).then((res) => {
                    console.log(res);
                    resolve();
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    removeTreatment(id) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.delete(`/treatment/`+id).then((res) => {
                    console.log(res);
                    resolve();
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    autorizationHealthInsurance(id) {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.put(`/treatment/insurance/`+id).then((res) => {
                    console.log(res);
                    resolve();
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    getTracks() {
        return new Promise((resolve, reject) => {
            try {
                this._axiosResource.get(`/tracks`).then((res) => {

                    let resultCall = res.data;
                    console.log(resultCall);
                    let tracks = [];

                    resultCall.forEach(track => {

                        tracks.push(
                            new Tracks(track.id,
                                track.action,
                                track.user,
                                track.createAt)
                        );
                    });


                    resolve(tracks);
                });
            } catch(error) {
                reject(error);
            }
        });
    }
}