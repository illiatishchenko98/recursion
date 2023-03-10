function pow(x, y) {
    if (y === 1) {
        return x;
    } else {
        return x * pow(x, y - 1);
    }
}

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }


};

function getTotalProgressByItteration(data) {
    let total = 0;
    let students = 0;


    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            } 
        
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
            }
    }


    return total / students;
}

console.log(getTotalProgressByItteration(students));