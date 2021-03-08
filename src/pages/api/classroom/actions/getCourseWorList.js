


export default async function getCourseWorList(classroom, courseid) {
    try {
        await classroom.courses.courseWork.list({
            courseId: courseid,
        }, (err, res) => {
            if (err) return console.error('The API returned an error: ' + err);
            const coursesworks = res.data.courseWork;
            console.log(JSON.stringify(coursesworks));
            if (coursesworks && coursesworks.length) {
                console.log('Works:');
                coursesworks.forEach((works) => {
                    //Criar rotina para alimentar o banco de dados.
                    console.log(`${works.title}`);
                });
            } else {
                console.log('No course works found.');
                throw ("No course works found.");
            }
        });

    } catch (err) {
        return `Erro: ${err}`;
    }
}

