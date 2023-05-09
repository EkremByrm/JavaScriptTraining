let student = {
    name: 'Ekrem',
    surname: 'BAYRAM',
    email: 'krmbyrm.03@gmail.com',
    age: 30,
    lesson: ['Math', 'biolayg', 'fizik'],
    login() {
        console.log('giriş yaptı ' + this.name);
    },

    printLesson() {
        console.log(this.lesson);

        this.lesson.forEach(les => {
            console.log(les);
        })
    }
};

student.login();
student.printLesson();