import listCourseWork from './getCourseWorList';

export default async function getCourses(classroom) {

    await classroom.courses.list({
        pageSize: 10,
    }, (err, res) => {
        if (err) return console.error('The API returned an error: ' + err);
        const courses = res.data.courses;
        if (courses && courses.length) {
            console.log('Courses:');
            courses.forEach((course) => {
                //Criar rotina para alimentar o banco de dados.
                console.log(`${course.name} (${course.id})`);
                listCourseWork(classroom, course.id);
            });
        } else {
            console.log('No courses found.');
        }
    });
}