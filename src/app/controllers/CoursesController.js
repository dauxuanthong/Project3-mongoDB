
class CoursesController {
    index(req, res){
        res.render('courses');
    }
}

module.exports = new CoursesController;