export default class Treatment {


    constructor(id, 
        title, 
        description, 
        createAt, 
        treatmentDate,
        speciality) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.createAt = createAt;
        this.treatmentDate = treatmentDate;
        this.speciality = speciality;
    }
}