export default class Treatment {


    constructor(id, 
        title, 
        description, 
        createAt, 
        treatmentDate,
        speciality,
        status,
        doctor,
        healthInsurance) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.createAt = createAt;
        this.treatmentDate = treatmentDate;
        this.speciality = speciality;
        this.status = status;
        this.doctor = doctor;
        this.healthInsurance = healthInsurance;
    }
}