import Treatment from '../model/Treatment';

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
                                treatment.treatmentDate)
                        );
                    });


                    resolve(treatments);
                });
            } catch(error) {
                reject(error);
            }
        });
    }
}