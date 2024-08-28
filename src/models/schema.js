import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    name: { type: String, required: true},
    rollNum: { type: Number, required: true},
    grade: { type: String},
    mothersName: { type: String },
    dob: { type: Date},
    class: { type: Number },
    section: { type: String},
    reportCard: { type: Schema.Types.ObjectId, ref: 'reportCard' }
})

const reportCardSchema = new Schema({
    Assessment: { type: Schema.Types.ObjectId, ref: 'assessment' },
    CoScholastic: { type: Schema.Types.ObjectId, ref: 'coScholastic' },
    Discipline: { type: Schema.Types.ObjectId, ref: 'discipline' },
});

const assessmentSchema = new Schema({
    periodicTest: { type: Number, max: 10 },
    notebook: { type: Number, max: 5 },
    subjectEnrichment: { type: Number, max: 5 },
    annualExam: { type: Number, max: 80 },
    total: { type: Number, max: 100 },
    grade: { type: String },
});


const coScholasticSchema = new Schema({
    workEducation: { type: String, enum: ['A', 'B', 'C']},
    artEducation: { type: String, enum: ['A', 'B', 'C']},
    healthPhysicalEducation: { type: String, enum: ['A', 'B', 'C']}
});

const disciplineSchema = new Schema({
    discipline: { type: String, enum: ['A', 'B', 'C']}
});

export const resultModel = new mongoose.model("result", resultSchema);
export const coScholasticModel = new mongoose.model("coScholastic", coScholasticSchema);
export const disciplineModel = new mongoose.model("discipline", disciplineSchema);
export const assessmentModel = new mongoose.model("assessment", assessmentSchema);
export const reportCardModel = new mongoose.model("reportCard", reportCardSchema);