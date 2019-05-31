function Task(name, initialStatus) { // Create a new task with default progress status
    this.name = name;
    this.status = ko.observable(initialStatus);
}

function ViewModel() {
    var self = this;
    self.newTaskName = ko.observable('');
    self.statuses = [ // Select options for the task status drop down menu
        "Not Started",
        "In Progress"
    ];

    self.tasks = ko.observableArray([]); // Array to store new or in progress tasks
    self.completedTasks = ko.observableArray([]); // Array to store tasks once they are marked as complete
    
    self.addTask = function () { // Binds the newTaskName to an initial status and pushes it to the tasks array
        self.tasks.push(
            new Task(
                self.newTaskName(),
                self.statuses[0]
            )
        );
        self.newTaskName(''); // Clears the text input so the user can immediately enter a new task
    }
    self.remove = function (taskInstance) { // Takes the selected task from the current array and pushes it to the completed task array
        self.completedTasks.push(taskInstance);
        self.tasks.remove(taskInstance);
    }
}
ko.applyBindings(new ViewModel());
