import { StudentDetail } from "./studentDetail";

export const studentMongoStore = {
    async getAllStudents() {
        const studentDetails = await StudentDetail.find().lean();
        return studentDetails;
    },

async StudentDetail(firstname, college, year, information) {
    const newStudentDetail = new StudentDetail({
        firstname,
        college,
        year,
        information,
    });
    await newStudentDetail.save();
    return newStudentDetail;
},

async deleteAll() {
    await StudentDetail.deleteMany({});
},
};